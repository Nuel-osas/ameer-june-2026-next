"use client";
import { useEffect } from "react";
import vendorScripts from "@/lib/vendor-scripts.json";
import { initializeControls } from "@/lib/controls";

declare global {
  interface Window {
    ameerReady?: boolean;
    ameerError?: string;
  }
}
let initialization: Promise<void> | undefined;
function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Could not load ${src}`));
    document.body.appendChild(script);
  });
}
async function initialize() {
  await document.fonts.ready;
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.documentElement.classList.remove("archive-static");
    await loadScript("/ameer-config.js");
    for (const src of vendorScripts) await loadScript(src);
    await new Promise((resolve) => setTimeout(resolve, 80));
    for (const video of document.querySelectorAll<HTMLVideoElement>("video"))
      video.muted = true;
  }
  window.ameerReady = true;
}
/** The original visual runtime is document-scoped. Native route links reload the
 * document, preventing animation objects from leaking between React page trees. */
export default function SiteRuntime() {
  useEffect(() => {
    initialization ??= initialize().catch((error: Error) => {
      window.ameerError = error.message;
      document.documentElement.classList.add("archive-static");
      document.body.classList.remove("hidden");
      console.error(error);
    });
    const dispose = initializeControls();
    return dispose;
  }, []);
  return null;
}
