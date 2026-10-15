export function initializeControls() {
  const controller = new AbortController(),
    { signal } = controller;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const burger = document.querySelector<HTMLButtonElement>("#burger-wrapper");
  const menu = document.querySelector<HTMLElement>("header nav");
  const icon = document.querySelector<HTMLElement>("#menu-burger");
  const syncMenu = () => {
    const open = icon?.classList.contains("open") || false;
    burger?.setAttribute("aria-expanded", String(open));
    burger?.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };
  const observer = new MutationObserver(syncMenu);
  if (icon)
    observer.observe(icon, { attributes: true, attributeFilter: ["class"] });
  burger?.addEventListener(
    "click",
    () => {
      if (reduced) {
        icon?.classList.toggle("open");
        menu?.classList.toggle("open");
        document.body.classList.toggle("archive-menu-open");
        syncMenu();
      }
    },
    { signal },
  );
  document.addEventListener(
    "keydown",
    (event) => {
      if (event.key === "Escape" && icon?.classList.contains("open")) {
        burger?.click();
        burger?.focus();
      }
      if (event.key === "Tab" && icon?.classList.contains("open") && menu) {
        const links = Array.from(menu.querySelectorAll<HTMLAnchorElement>("a"));
        if (event.shiftKey && document.activeElement === links[0]) {
          event.preventDefault();
          burger?.focus();
        } else if (!event.shiftKey && document.activeElement === burger) {
          event.preventDefault();
          links[0]?.focus();
        }
      }
    },
    { signal },
  );
  document
    .querySelectorAll<HTMLElement>("#backtotop,.scroll-down")
    .forEach((element) =>
      element.addEventListener(
        "keydown",
        (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            element.click();
          }
        },
        { signal },
      ),
    );
  document.addEventListener(
    "submit",
    (event) => {
      const form = event.target;
      if (!(form instanceof HTMLFormElement)) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      const status = form.querySelector<HTMLElement>(".archive-form-note");
      if (status)
        status.textContent =
          "This is the June 2026 archive. Your message has not been sent or stored.";
    },
    { capture: true, signal },
  );
  const filters = Array.from(
    document.querySelectorAll<HTMLAnchorElement>(".filter-option"),
  );
  filters.forEach((filter) => {
    filter.setAttribute("role", "button");
    filter.setAttribute(
      "aria-pressed",
      String(filter.classList.contains("is_active")),
    );
    filter.addEventListener(
      "click",
      () => {
        filters.forEach((other) =>
          other.setAttribute("aria-pressed", String(other === filter)),
        );
      },
      { signal },
    );
    filter.addEventListener(
      "keydown",
      (event) => {
        if (event.key === " ") {
          event.preventDefault();
          filter.click();
        }
      },
      { signal },
    );
  });
  if (reduced) {
    filters.forEach((filter) =>
      filter.addEventListener(
        "click",
        (event) => {
          event.preventDefault();
          const value = filter.dataset.filter;
          filters.forEach((other) =>
            other.classList.toggle("is_active", other === filter),
          );
          document
            .querySelectorAll<HTMLElement>(".showcase-portfolio .clapat-item")
            .forEach(
              (item) =>
                (item.hidden = !!value && !item.classList.contains(value)),
            );
        },
        { signal },
      ),
    );
    document
      .querySelector("#backtotop")
      ?.addEventListener("click", () => window.scrollTo(0, 0), { signal });
    document
      .querySelector(".scroll-down")
      ?.addEventListener(
        "click",
        () => document.querySelector("#main-content")?.scrollIntoView(),
        { signal },
      );
    document.querySelectorAll<HTMLVideoElement>("video").forEach((video) => {
      video.autoplay = false;
      video.pause();
      video.controls = true;
    });
  }
  return () => {
    controller.abort();
    observer.disconnect();
  };
}
