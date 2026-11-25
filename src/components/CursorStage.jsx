import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

/*  Wraps an image so that, on mouse/trackpad devices, a "View project" pill
    follows the pointer while the image dims and slowly zooms.
    Touch screens (and keyboard focus) get a small arrow badge in the corner.
    Must sit inside an element with the `group` class (usually the link).
    The pill position is written to CSS variables — no React re-renders.   */
export default function CursorStage({ label, children, className = "" }) {
  const stage = useRef(null);

  const follow = (e) => {
    const el = stage.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div
      ref={stage}
      onMouseEnter={follow}
      onMouseMove={follow}
      className={`relative overflow-hidden rounded-xl pointer-fine:cursor-none ${className}`}
    >
      {children}

      {/* soft dim from the bottom on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-black/45 via-black/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
      />

      {/* cursor-following pill (mouse / trackpad) */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 hidden items-center gap-2 whitespace-nowrap rounded-full border border-white/25 bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] py-2.5 pl-5 pr-2.5 text-sm font-medium text-ink shadow-[var(--shadow)] backdrop-blur-md ease-out-soft pointer-fine:inline-flex opacity-0 scale-50 group-hover:scale-100 group-hover:opacity-100"
        style={{
          transform: "translate3d(calc(var(--mx, 50%) - 50%), calc(var(--my, 50%) - 50%), 0)",
          transitionProperty: "opacity, scale, transform",
          transitionDuration: "0.5s, 0.5s, 0.18s",
        }}
      >
        {label}
        <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-accent-contrast">
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </span>

      {/* corner badge (touch screens, and keyboard focus) */}
      <span
        aria-hidden="true"
        className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] text-ink shadow-[var(--shadow)] backdrop-blur-md transition-opacity duration-300 pointer-fine:opacity-0 group-focus-visible:!opacity-100"
      >
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </div>
  );
}
