import assert from "node:assert/strict";
import fs from "node:fs/promises";
import net from "node:net";
import path from "node:path";
import { spawn } from "node:child_process";
import { chromium } from "playwright-core";

// Runs against a production build by default; BASE_URL can select an existing preview.
const artifacts = path.resolve(".site-capture/qa");
await fs.mkdir(artifacts, { recursive: true });
let server;
let browser;
const report = { passed: false, pages: [] };

async function getBrowserPath() {
  const candidates = [
    process.env.CHROME_PATH,
    chromium.executablePath(),
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
  ].filter(Boolean);
  for (const candidate of candidates) {
    try {
      await fs.access(candidate);
      return candidate;
    } catch {
      /* Try next browser. */
    }
  }
  throw new Error(
    "Install Chromium with npx playwright-core install chromium, or set CHROME_PATH.",
  );
}

async function startServer() {
  if (process.env.BASE_URL) return process.env.BASE_URL;
  const port = await new Promise((resolve) => {
    const probe = net.createServer();
    probe.listen(0, "127.0.0.1", () => {
      const { port } = probe.address();
      probe.close(() => resolve(port));
    });
  });
  server = spawn(
    process.execPath,
    [
      "node_modules/next/dist/bin/next",
      "start",
      "--hostname",
      "127.0.0.1",
      "--port",
      String(port),
    ],
    { stdio: ["ignore", "pipe", "pipe"] },
  );
  let output = "";
  server.stdout.on("data", (data) => {
    output += data;
  });
  server.stderr.on("data", (data) => {
    output += data;
  });
  const url = `http://127.0.0.1:${port}`;
  for (let attempt = 0; attempt < 80; attempt++) {
    try {
      if ((await fetch(url)).ok) return url;
    } catch {
      /* Server starting. */
    }
    if (server.exitCode !== null) throw new Error(output);
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`Preview did not start: ${output}`);
}

const pages = JSON.parse(await fs.readFile("src/lib/pages.json", "utf8"));
async function scrollTo(page, selector) {
  await page
    .locator(selector)
    .first()
    .evaluate((element) => {
      const scroller = window.Scrollbar?.getAll()[0];
      const y =
        element.getBoundingClientRect().top +
        (scroller ? scroller.offset.y : scrollY) -
        150;
      if (scroller) scroller.scrollTo(0, y, 0);
      else window.scrollTo(0, y);
    });
  await page.waitForTimeout(1200);
}
async function ready(page) {
  await page.waitForFunction(() => window.ameerReady || window.ameerError);
  assert.equal(await page.evaluate(() => window.ameerError), undefined);
  await page.waitForFunction(() => {
    const preloader = document.querySelector(".preloader-wrap");
    return (
      !preloader ||
      ["none"].includes(getComputedStyle(preloader).display) ||
      getComputedStyle(preloader).visibility === "hidden"
    );
  });
  await page.waitForTimeout(900);
}
try {
  const url = await startServer();
  const origin = new URL(url).origin;
  browser = await chromium.launch({
    executablePath: await getBrowserPath(),
    headless: true,
  });
  const scenarios = [
    { name: "desktop", viewport: { width: 1440, height: 1000 } },
    {
      name: "mobile",
      viewport: { width: 390, height: 844 },
      isMobile: true,
      hasTouch: true,
    },
    {
      name: "reduced-motion",
      viewport: { width: 768, height: 1024 },
      reducedMotion: "reduce",
    },
  ].filter((s) => !process.env.SCENARIO || s.name === process.env.SCENARIO);
  const outcomes = await Promise.allSettled(
    scenarios.map(async ({ name, ...options }) => {
      for (const source of pages) {
        const page = await browser.newPage(options);
        page.setDefaultTimeout(25000);
        const result = {
          scenario: name,
          route: source.pathname,
          errors: [],
          missing: [],
          external: [],
          checks: [],
        };
        report.pages.push(result);
        page.on("pageerror", (error) => result.errors.push(error.message));
        page.on("console", (message) => {
          if (message.type() === "error") result.errors.push(message.text());
        });
        page.on("response", (response) => {
          if (response.status() >= 400) result.missing.push(response.url());
        });
        await page.route("**/*", (route) => {
          const target = route.request().url();
          if (target.startsWith("http") && new URL(target).origin !== origin) {
            result.external.push(target);
            return route.abort();
          }
          return route.continue();
        });
        try {
          const response = await page.goto(url + source.pathname, {
            waitUntil: "domcontentloaded",
          });
          assert.equal(response.status(), 200);
          await ready(page);
          assert.equal(await page.title(), source.title);
          assert.equal(await page.locator("main").count(), 1);
          assert.equal(await page.locator("header nav").count(), 1);
          await page.evaluate(async () => {
            await document.fonts.ready;
            await Promise.all(
              [...document.images].map(async (image) => {
                image.loading = "eager";
                try {
                  await image.decode();
                } catch {}
              }),
            );
          });
          assert.deepEqual(
            await page.evaluate(() =>
              [...document.images]
                .filter((image) => !image.complete || !image.naturalWidth)
                .map((image) => image.src),
            ),
            [],
            "Broken images",
          );
          assert.ok(
            await page.evaluate(
              () => document.documentElement.scrollWidth <= innerWidth,
            ),
            "Horizontal overflow",
          );
          result.checks.push(
            "Route, metadata, local images and fonts, responsive width",
          );
          await page.screenshot({
            path: path.join(
              artifacts,
              `${name}-${source.slug.join("-") || "home"}.png`,
            ),
          });
          if (source.pathname === "/") {
            assert.match(
              await page.locator("h1").getAttribute("aria-label"),
              /AMEER/i,
            );
            assert.match(
              await page
                .locator("h1")
                .evaluate((el) => getComputedStyle(el).fontFamily),
              /Six Caps/,
            );
            assert.ok(
              await page.evaluate(() =>
                document.fonts.check('400 24px "Six Caps"'),
              ),
              "Display font loaded",
            );
            if (options.viewport.width < 1025) {
              const toggle = page.getByRole("button", {
                name: "Open menu",
                exact: true,
              });
              await toggle.click();
              assert.equal(
                await page
                  .locator("#burger-wrapper")
                  .getAttribute("aria-expanded"),
                "true",
              );
              await page.waitForTimeout(700);
              assert.ok(
                await page
                  .locator('header nav a[href="/about-me/"]')
                  .isVisible(),
              );
              await page.keyboard.press("Escape");
              assert.equal(
                await page
                  .locator("#burger-wrapper")
                  .getAttribute("aria-expanded"),
                "false",
              );
            }
            // The captured mobile layout intentionally hides its Explore control.
            if (await page.locator(".scroll-down").isVisible()) {
              await page.locator(".scroll-down").focus();
              await page.keyboard.press("Enter");
              await page.waitForTimeout(1700);
              assert.ok(
                await page.evaluate(
                  () =>
                    (window.Scrollbar?.getAll()[0]?.offset.y ?? scrollY) > 100,
                ),
                "Explore scrolls to content",
              );
            }
            await page.waitForTimeout(1000);
            await scrollTo(page, "footer");
            await page.locator("#backtotop").focus();
            await page.keyboard.press("Enter");
            await page.waitForTimeout(2000);
            assert.ok(
              await page.evaluate(
                () => (window.Scrollbar?.getAll()[0]?.offset.y ?? scrollY) < 10,
              ),
              "Back to top",
            );
            result.checks.push(
              "Typography, menu and Escape, keyboard explore and back-to-top",
            );
          }
          if (source.pathname === "/projects/") {
            await scrollTo(page, ".filter-option");
            const cards = page.locator(
              ".showcase-portfolio .clapat-item:visible",
            );
            const initial = await cards.count();
            const filter = page.locator('.filter-option[data-filter="framer"]');
            await filter.click();
            await page.waitForTimeout(1200);
            assert.ok(
              (await cards.count()) > 0 && (await cards.count()) < initial,
              "Filter narrows projects",
            );
            assert.equal(await filter.getAttribute("aria-pressed"), "true");
            await page.locator(".filter-option#all").focus();
            await page.keyboard.press(" ");
            await page.waitForTimeout(1200);
            assert.equal(await cards.count(), initial);
            result.checks.push("Project filter and keyboard reset");
          }
          if (source.pathname === "/contact/") {
            await scrollTo(page, "form");
            await page
              .getByLabel("Your name", { exact: true })
              .fill("Archive Test");
            await page
              .getByLabel("Your email", { exact: true })
              .fill("archive@example.com");
            await page
              .getByLabel("Subject", { exact: true })
              .fill("Local preview");
            await page
              .getByLabel("Your message", { exact: true })
              .fill("This should remain local.");
            await page
              .getByRole("button", { name: "Submit", exact: true })
              .click();
            assert.match(
              await page.locator(".archive-form-note").innerText(),
              /has not been sent or stored/,
            );
            result.checks.push(
              "Form validates and returns local-only feedback",
            );
          }
          if (source.pathname === "/the-archive/") {
            if (name === "reduced-motion") {
              assert.ok(
                (await page
                  .locator(".showcase-gallery .clapat-slide:visible")
                  .count()) > 5,
              );
              assert.equal(
                await page
                  .locator(".clapat-slider-viewport")
                  .evaluate((el) => getComputedStyle(el).display),
                "grid",
              );
            } else {
              const position = () =>
                page.evaluate(
                  () =>
                    document.querySelector(".showcase-gallery").clapat_slider
                      .state.target,
                );
              const before = await position();
              await page
                .getByRole("button", { name: "Next project", exact: true })
                .click();
              await page.waitForTimeout(1000);
              assert.notEqual(await position(), before, "Next gallery slide");
              const after = await position();
              await page
                .getByRole("button", { name: "Previous project", exact: true })
                .focus();
              await page.keyboard.press("Enter");
              await page.waitForTimeout(1000);
              assert.notEqual(
                await position(),
                after,
                "Previous gallery slide with keyboard",
              );
            }
            result.checks.push("Gallery arrows or reduced-motion grid");
          }
          if (source.pathname === "/about-me/" && name === "desktop") {
            const hover = page.locator("[data-img]").first();
            await scrollTo(page, "[data-img]");
            await hover.hover();
            await page.waitForTimeout(400);
            result.checks.push("Certificate hover image loads locally");
          }
          if (source.pathname.startsWith("/project/")) {
            await scrollTo(page, "#project-nav");
            assert.ok(
              (await page
                .locator('#project-nav a[href^="/project/"]')
                .count()) > 0,
              "Next project link",
            );
            result.checks.push("Project navigation");
          }
          assert.deepEqual(result.errors, [], "Browser errors");
          assert.deepEqual(result.missing, [], "Missing resources");
          assert.deepEqual(result.external, [], "External runtime requests");
          result.passed = true;
          console.log(`PASS ${name} ${source.pathname}`);
        } catch (error) {
          result.failure = error.message;
          await page
            .screenshot({
              path: path.join(
                artifacts,
                `failure-${name}-${source.slug.join("-") || "home"}.png`,
              ),
            })
            .catch(() => {});
          throw error;
        } finally {
          await page.close();
        }
      }
    }),
  );
  for (const outcome of outcomes)
    if (outcome.status === "rejected") throw outcome.reason;
  const noJS = await browser.newPage({ javaScriptEnabled: false });
  for (const route of ["/", "/about-me/", "/the-archive/"]) {
    await noJS.goto(url + route);
    assert.ok(await noJS.locator("main").isVisible());
    assert.equal(await noJS.locator(".preloader-wrap").isVisible(), false);
    if (route === "/the-archive/")
      assert.ok((await noJS.locator(".clapat-slide:visible").count()) > 5);
    else assert.ok(await noJS.locator("h1").first().isVisible());
  }
  await noJS.close();
  report.pages.push({
    scenario: "no-javascript",
    passed: true,
    checks: ["Server-rendered home, about, and archive content"],
  });
  report.passed = true;
} catch (error) {
  report.failure = error.stack;
  console.error(error);
  process.exitCode = 1;
} finally {
  await browser?.close();
  server?.kill("SIGTERM");
  await fs.writeFile(
    path.join(artifacts, "report.json"),
    JSON.stringify(report, null, 2),
  );
}
