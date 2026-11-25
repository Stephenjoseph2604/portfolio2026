import { useEffect, useLayoutEffect, useRef } from "react";
import { LOADER as L, SITE } from "../content";
import { markLoaderSeen } from "../lib/loader";
import { lockScroll } from "../lib/smooth";

const EXIT_MS = 1150; // curtain lift (matches .loader.is-leaving in index.css)
const HOLD_MS = 380; // short pause on 100% before lifting
const RING_C = 2 * Math.PI * 47; // progress-ring circumference (r = 47)
const MESSAGES = L.messages?.length ? L.messages : [L.label];

/* Moves from the first frame, glides through the middle, lands softly on 100 */
const ease = (t) => -(Math.cos(Math.PI * t) - 1) / 2;

/*  Full-screen launch sequence shown before the site.
    Counter, bar and ring are driven by requestAnimationFrame and written
    straight to the DOM, so nothing re-renders while it runs.             */
export default function Loader({ onDone }) {
  const rootRef = useRef(null);
  const countRef = useRef(null);
  const barRef = useRef(null);
  const ringRef = useRef(null);
  const msgRef = useRef(null);
  const skipRef = useRef(() => {});

  /* Before first paint: hold the page still and pause its entrance animations */
  useLayoutEffect(() => {
    const root = document.documentElement;
    root.classList.add("is-loading");
    lockScroll(true, "loader");
    return () => {
      root.classList.remove("is-loading");
      lockScroll(false, "loader");
    };
  }, []);

  useEffect(() => {
    markLoaderSeen();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduce ? 1200 : Math.max(1500, L.durationMs || 6000);
    let raf = 0;
    let start;
    let lastMsg = 0;
    let done = false;
    const timers = [];

    const finish = () => {
      if (done) return;
      done = true;
      cancelAnimationFrame(raf);
      rootRef.current?.classList.add("is-leaving");
      document.documentElement.classList.remove("is-loading"); // hero animates in as the curtain lifts
      lockScroll(false, "loader");
      timers.push(window.setTimeout(onDone, reduce ? 320 : EXIT_MS));
    };
    skipRef.current = finish;

    const tick = (now) => {
      if (start === undefined) start = now;
      const t = Math.min(1, (now - start) / duration);
      const p = ease(t);
      const pct = Math.round(p * 100);

      if (countRef.current) countRef.current.textContent = String(pct).padStart(3, "0");
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
      if (ringRef.current) ringRef.current.style.strokeDashoffset = String(RING_C * (1 - p));
      rootRef.current?.setAttribute("aria-valuenow", String(pct));

      const mi = Math.min(MESSAGES.length - 1, Math.floor(t * MESSAGES.length));
      if (mi !== lastMsg && msgRef.current) {
        lastMsg = mi;
        const el = msgRef.current;
        el.textContent = MESSAGES[mi];
        el.classList.remove("loader-msg");
        void el.offsetWidth; // restart the fade-in
        el.classList.add("loader-msg");
      }

      if (t < 1) raf = requestAnimationFrame(tick);
      else timers.push(window.setTimeout(finish, HOLD_MS));
    };
    raf = requestAnimationFrame(tick);

    const onKey = (e) => e.key === "Escape" && finish();
    window.addEventListener("keydown", onKey);

    return () => {
      cancelAnimationFrame(raf);
      timers.forEach((id) => window.clearTimeout(id));
      window.removeEventListener("keydown", onKey);
    };
  }, [onDone]);

  return (
    <div
      ref={rootRef}
      className="loader fixed inset-0 z-[200] flex flex-col bg-bg text-ink"
      role="progressbar"
      aria-label={L.label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={0}
    >
      {/* soft brass glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, var(--accent-soft) 0%, transparent 62%)" }}
      />

      <div className="loader-inner relative flex flex-1 flex-col">
        {/* Top bar */}
        <div className="container-x flex h-20 items-center justify-between gap-4">
          <span className="eyebrow flex items-center gap-2.5 text-ink">
            <span className="status-dot" aria-hidden="true" />
            {L.label}
          </span>
          <span className="eyebrow hidden sm:inline">
            {SITE.fullName} · {SITE.locationShort}
          </span>
        </div>

        {/* Centre: emblem + name */}
        <div className="container-x flex flex-1 flex-col items-center justify-center text-center" aria-hidden="true">
          <div className="loader-emblem relative grid h-36 w-36 place-items-center md:h-44 md:w-44">
            {/* progress ring */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full -rotate-90">
              <circle cx="50" cy="50" r="47" fill="none" stroke="var(--line)" strokeWidth="1" />
              <circle
                ref={ringRef}
                cx="50"
                cy="50"
                r="47"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeDasharray={RING_C}
                strokeDashoffset={RING_C}
              />
            </svg>
            {/* circling text */}
            <svg viewBox="0 0 200 200" className="seal-rotate absolute inset-[8%] h-[84%] w-[84%] text-muted" style={{ animationDuration: "22s" }}>
              <defs>
                <path id="loader-ring" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
              </defs>
              <text className="fill-current font-mono uppercase" style={{ fontSize: 11, letterSpacing: "0.2em" }}>
                <textPath href="#loader-ring" textLength="500" lengthAdjust="spacing">
                  {L.ring}
                </textPath>
              </text>
            </svg>
            {/* monogram disc */}
            <div className="grid h-[50%] w-[50%] place-items-center rounded-full bg-invert-bg shadow-[var(--shadow)]">
              <img src={SITE.logo} alt="" className="h-[52%] w-[52%] object-contain" />
            </div>
          </div>

          <p className="display mt-10 text-[clamp(3rem,10vw,8rem)] leading-[0.92] tracking-[-0.03em]">
            <span className="block overflow-hidden px-[0.18em] pb-[0.06em]">
              <span className="loader-word block">{SITE.firstName}</span>
            </span>
            <span className="block overflow-hidden px-[0.18em] pb-[0.12em]">
              <span className="loader-word block italic text-accent" style={{ animationDelay: "0.42s" }}>
                {SITE.lastName}
              </span>
            </span>
          </p>
          <p className="loader-sub eyebrow mt-5">{SITE.role}</p>
        </div>

        {/* Bottom: progress */}
        <div className="container-x pb-7 md:pb-10">
          <div className="h-px w-full overflow-hidden bg-line">
            <div ref={barRef} className="h-full origin-left bg-accent" style={{ transform: "scaleX(0)" }} />
          </div>
          <div className="mt-5 flex items-end justify-between gap-6">
            <div className="min-w-0">
              <p ref={msgRef} className="loader-msg truncate font-mono text-xs uppercase tracking-[0.14em] text-ink md:text-sm" aria-live="polite">
                {MESSAGES[0]}
              </p>
              {L.skipLabel && (
                <button
                  type="button"
                  onClick={() => skipRef.current()}
                  className="eyebrow mt-3 inline-flex items-center gap-1.5 transition-colors hover:text-ink"
                >
                  {L.skipLabel} <span aria-hidden="true">→</span>
                </button>
              )}
            </div>
            <p className="display shrink-0 text-[clamp(3.25rem,9vw,7rem)] leading-[0.8] tabular-nums" aria-hidden="true">
              <span ref={countRef}>000</span>
              <span className="ml-1 align-top text-[0.38em] text-accent">%</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
