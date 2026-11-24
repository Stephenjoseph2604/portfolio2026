import Lenis from "lenis";

/* Inertial smooth scrolling for mouse wheels and trackpads.
   Touch devices keep native scrolling; reduced-motion users are left alone. */

let lenis = null;

export function startSmoothScroll() {
  if (lenis || typeof window === "undefined") return lenis;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return null;

  lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true,
    wheelMultiplier: 0.95,
  });

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

export function lockScroll(locked) {
  document.documentElement.style.overflow = locked ? "hidden" : "";
  if (!lenis) return;
  if (locked) lenis.stop();
  else lenis.start();
}
