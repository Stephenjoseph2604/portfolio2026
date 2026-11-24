import { useSyncExternalStore } from "react";

/* Theme lives on <html data-theme>. index.html sets it before first paint. */

const STORAGE_KEY = "theme";
const META_COLORS = { light: "#f1eee6", dark: "#0e0e0d" };
const listeners = new Set();

export function getTheme() {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

function apply(theme, { animate = true } = {}) {
  const root = document.documentElement;
  if (animate) root.classList.add("theme-transition");
  root.setAttribute("data-theme", theme);
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", META_COLORS[theme]);
  if (animate) window.setTimeout(() => root.classList.remove("theme-transition"), 500);
  listeners.forEach((fn) => fn());
}

export function setTheme(theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* storage unavailable (private mode) — theme still applies for this visit */
  }
  apply(theme);
}

export function toggleTheme() {
  setTheme(getTheme() === "dark" ? "light" : "dark");
}

function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

/* Follow the operating-system setting until the visitor picks a theme. */
if (typeof window !== "undefined" && window.matchMedia) {
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    let saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch {
      saved = null;
    }
    if (saved !== "light" && saved !== "dark") apply(e.matches ? "dark" : "light");
  });
}

export function useTheme() {
  return useSyncExternalStore(subscribe, getTheme, () => "light");
}
