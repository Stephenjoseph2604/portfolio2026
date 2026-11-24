import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { scrollToElement, scrollToTop } from "../lib/smooth";

/*  On every navigation:
    • no #hash      → jump to the top
    • /page#section → jump to that section on arrival (or glide to it
                      when the link points to the page you're already on) */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const previousPath = useRef(pathname);

  useEffect(() => {
    const samePage = previousPath.current === pathname;
    previousPath.current = pathname;

    if (!hash) {
      scrollToTop({ immediate: true });
      return undefined;
    }

    if (!samePage) scrollToTop({ immediate: true });
    const id = window.setTimeout(() => {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) scrollToElement(el, { offset: -72, immediate: !samePage });
    }, 80);
    return () => window.clearTimeout(id);
  }, [pathname, hash]);

  return null;
}
