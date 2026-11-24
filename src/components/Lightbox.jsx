import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { lockScroll } from "../lib/smooth";

/* Full-screen image viewer. Pass `item` ({ image, title, caption }) to open, null to close. */
export default function Lightbox({ item, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!item) return undefined;
    const previous = document.activeElement;
    lockScroll(true);
    closeRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      lockScroll(false);
      window.removeEventListener("keydown", onKey);
      previous?.focus?.();
    };
  }, [item, onClose]);

  if (!item) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
      className="fade-up fixed inset-0 z-[90] flex items-center justify-center bg-black/85 p-4 md:p-10"
      style={{ animationDuration: "0.35s" }}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-black md:right-8 md:top-8"
      >
        <X className="h-5 w-5" aria-hidden="true" />
      </button>
      <figure className="flex max-h-full max-w-6xl flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <img src={item.image} alt={item.title} className="max-h-[78svh] w-auto rounded-lg object-contain" />
        <figcaption className="mt-4 text-center text-white">
          <span className="display block text-2xl md:text-3xl">{item.title}</span>
          {item.caption && <span className="mt-1 block font-mono text-xs uppercase tracking-[0.12em] text-white/60">{item.caption}</span>}
        </figcaption>
      </figure>
    </div>,
    document.body
  );
}
