import { useCallback, useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Circle, Compass, House, Mail, Rocket, UserRound, Zap } from "lucide-react";
import { NAV, SITE, SOCIALS } from "../content";
import { lockScroll } from "../lib/smooth";
import { Button, ThemeSwitch } from "./ui";

/* Icon per page — add an entry here if you add a page to NAV.links */
const ICONS = {
  "/": House,
  "/about": UserRound,
  "/portfolio": Rocket,
  "/others": Compass,
  "/contact": Mail,
};
const iconFor = (to) => ICONS[to] || Circle;

/* Size of the inverted-radius "ears" where the tab meets the top edge */
const EAR = 20;

function Brand({ onClick }) {
  return (
    <Link to="/" onClick={onClick} className="group flex items-center gap-3" aria-label={`${SITE.fullName} — home`}>
      <span className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface transition-colors group-hover:border-line-strong">
        <img src={SITE.logo} alt="" className="h-6 w-6 object-contain" width="24" height="24" />
      </span>
      <span className="hidden leading-tight sm:block">
        <span className="block text-[0.95rem] font-semibold tracking-tight">{SITE.fullName}</span>
        <span className="eyebrow block !text-[0.62rem]">{SITE.roleShort}</span>
      </span>
    </Link>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Desktop nav: a tab hanging from the top edge (inverted-radius corners)
   with a pill that glides to the hovered link and settles back on the
   current page. Positions are written straight to the DOM — no re-renders.
───────────────────────────────────────────────────────────────────────── */
function DesktopNav() {
  const trackRef = useRef(null);
  const pillRef = useRef(null);
  const { pathname } = useLocation();

  const moveTo = useCallback((el, animate = true) => {
    const track = trackRef.current;
    const pill = pillRef.current;
    if (!track || !pill) return;
    track.querySelectorAll("[data-pill]").forEach((n) => n.removeAttribute("data-pill"));
    if (!el) {
      pill.style.opacity = "0";
      return;
    }
    el.setAttribute("data-pill", "");
    if (!animate) pill.style.transition = "none";
    pill.style.opacity = "1";
    pill.style.width = `${el.offsetWidth}px`;
    pill.style.height = `${el.offsetHeight}px`;
    pill.style.transform = `translate3d(${el.offsetLeft}px, ${el.offsetTop}px, 0)`;
    if (!animate) {
      pill.getBoundingClientRect(); // commit the jump before re-enabling transitions
      pill.style.transition = "";
    }
  }, []);

  const toActive = useCallback(
    (animate = true) => moveTo(trackRef.current?.querySelector('[aria-current="page"]'), animate),
    [moveTo]
  );

  /* Glide to the new page after navigation (its label may have just appeared) */
  useEffect(() => {
    const id = requestAnimationFrame(() => toActive(true));
    return () => cancelAnimationFrame(id);
  }, [pathname, toActive]);

  /* Place without animation on first paint; follow size changes (fonts, breakpoints) */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    toActive(false);
    const ro = new ResizeObserver(() => toActive(true));
    ro.observe(track);
    document.fonts?.ready.then(() => toActive(false));
    return () => ro.disconnect();
  }, [toActive]);

  return (
    <nav aria-label="Primary" className="absolute left-1/2 top-0 hidden -translate-x-1/2 md:block">
      <div className="relative rounded-b-[1.75rem] bg-surface-2 px-2 pb-2 pt-5">
        {/* inverted-radius ears joining the tab to the top edge */}
        <span
          aria-hidden="true"
          className="absolute right-full top-0"
          style={{
            width: EAR,
            height: EAR,
            background: `radial-gradient(circle at 0 100%, transparent ${EAR - 0.5}px, var(--surface-2) ${EAR}px)`,
          }}
        />
        <span
          aria-hidden="true"
          className="absolute left-full top-0"
          style={{
            width: EAR,
            height: EAR,
            background: `radial-gradient(circle at 100% 100%, transparent ${EAR - 0.5}px, var(--surface-2) ${EAR}px)`,
          }}
        />

        <div
          ref={trackRef}
          className="relative flex items-center gap-0.5"
          onMouseLeave={() => toActive(true)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) toActive(true);
          }}
        >
          {/* the gliding pill */}
          <span
            ref={pillRef}
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 rounded-full bg-ink opacity-0 shadow-[0_6px_18px_-6px_rgba(0,0,0,0.35)] transition-[transform,width,height,opacity] duration-[650ms] ease-[cubic-bezier(0.34,1.35,0.5,1)] motion-reduce:transition-none"
          />

          {NAV.links.map((link) => {
            const Icon = iconFor(link.to);
            return (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                title={link.label}
                onMouseEnter={(e) => moveTo(e.currentTarget)}
                onFocus={(e) => moveTo(e.currentTarget)}
                className="relative z-10 flex h-10 items-center gap-2 rounded-full px-3 text-sm font-medium text-ink-soft transition-colors duration-300 data-[pill]:text-bg xl:px-4"
              >
                {({ isActive }) => (
                  <>
                    <Icon aria-hidden="true" className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                    <span className={`whitespace-nowrap ${isActive ? "inline" : "hidden xl:inline"}`}>{link.label}</span>
                  </>
                )}
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    lockScroll(open);
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled || open
            ? "border-b border-line bg-[color-mix(in_srgb,var(--bg)_86%,transparent)] backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <div className="container-x relative flex h-16 items-center justify-between gap-4 md:h-20">
          <Brand onClick={close} />

          <DesktopNav />

          <div className="flex items-center gap-2.5">
            <ThemeSwitch />
            <div className="hidden lg:block">
              <Button to={NAV.cta.to} size="sm">
                {NAV.cta.label}
              </Button>
            </div>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative grid h-10 w-10 place-items-center rounded-full border border-line bg-surface md:hidden"
            >
              <span
                className={`absolute h-[1.5px] w-4 bg-ink transition-transform duration-500 ease-out-soft ${
                  open ? "rotate-45" : "-translate-y-[4px]"
                }`}
              />
              <span
                className={`absolute h-[1.5px] w-4 bg-ink transition-transform duration-500 ease-out-soft ${
                  open ? "-rotate-45" : "translate-y-[4px]"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile menu ── */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col bg-bg pt-16 transition-[opacity,visibility] duration-500 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile" className="container-x flex flex-1 flex-col justify-center gap-1">
          {NAV.links.map((link, i) => {
            const Icon = iconFor(link.to);
            return (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={close}
                tabIndex={open ? 0 : -1}
                className={({ isActive }) =>
                  `flex items-center gap-4 border-b border-line py-4 transition-[opacity,transform] duration-700 ease-out-soft ${
                    open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  } ${isActive ? "text-accent" : "text-ink"}`
                }
                style={{ transitionDelay: open ? `${80 + i * 60}ms` : "0ms" }}
              >
                {({ isActive }) => (
                  <>
                    <span className="font-mono text-xs text-muted">0{i + 1}</span>
                    <span className="display flex-1 text-5xl">{link.label}</span>
                    <span
                      className={`grid h-11 w-11 place-items-center rounded-full transition-colors ${
                        isActive ? "bg-ink text-bg" : "border border-line text-ink-soft"
                      }`}
                    >
                      <Icon aria-hidden="true" className="h-[18px] w-[18px]" strokeWidth={1.75} />
                    </span>
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
        <div className="container-x flex flex-wrap items-center justify-between gap-4 border-t border-line py-6">
          <a href={`mailto:${SITE.email}`} tabIndex={open ? 0 : -1} className="link-u text-sm font-medium">
            {SITE.email}
          </a>
          <div className="flex gap-4">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={open ? 0 : -1}
                className="eyebrow hover:text-ink"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
