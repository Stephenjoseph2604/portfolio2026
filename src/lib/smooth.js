import Lenis from "lenis";

/* Inertial smooth scrolling for mouse wheels and trackpads.
   Touch devices keep native scrolling; reduced-motion users are left alone. */

let lenis = null;
const locks = new Set(); // who is currently holding the page still (menu, viewer, loader…)

export function startSmoothScroll() {
  if (lenis || typeof window === "undefined") return lenis;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return null;

  lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true,
    wheelMultiplier: 0.95,
  });
  if (locks.size) lenis.stop(); // something locked scrolling before we started

  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
  return lenis;
}

export function scrollToTop({ immediate = true } = {}) {
  if (lenis) lenis.scrollTo(0, { immediate });
  else window.scrollTo({ top: 0, behavior: immediate ? "auto" : "smooth" });
}

export function scrollToElement(el, { offset = -96, immediate = false } = {}) {
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset, immediate });
  else
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY + offset,
      behavior: immediate ? "auto" : "smooth",
    });
}

/* Each caller passes its own key, so one releasing its lock
   (e.g. the menu closing) never unlocks another (e.g. the loader). */
export function lockScroll(locked, key = "default") {
  if (locked) locks.add(key);
  else locks.delete(key);
  const anyLocked = locks.size > 0;
  document.documentElement.style.overflow = anyLocked ? "hidden" : "";
  if (!lenis) return;
  if (anyLocked) lenis.stop();
  else lenis.start();
}
