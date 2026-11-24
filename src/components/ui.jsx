import { Fragment, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Moon, Sun } from "lucide-react";
import { toggleTheme, useTheme } from "../lib/theme";

/* ─────────────────────────────────────────────────────────────────────────
   Rich — renders "*word*" from content.js as <em>word</em>
───────────────────────────────────────────────────────────────────────── */
export function Rich({ text }) {
  if (!text) return null;
  return String(text)
    .split(/(\*[^*]+\*)/g)
    .map((part, i) =>
      part.length > 2 && part.startsWith("*") && part.endsWith("*") ? (
        <em key={i}>{part.slice(1, -1)}</em>
      ) : (
        <Fragment key={i}>{part}</Fragment>
      )
    );
}

/* ─────────────────────────────────────────────────────────────────────────
   Reveal — fades content up once it enters the viewport.
   Uses one IntersectionObserver per element and toggles a class directly,
   so nothing re-renders while scrolling.
───────────────────────────────────────────────────────────────────────── */
export function Reveal({ as = "div", delay = 0, className = "", style, children, ...rest }) {
  const Element = as;
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Element ref={ref} className={`reveal ${className}`} style={{ "--d": `${delay}ms`, ...style }} {...rest}>
      {children}
    </Element>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   SmartLink — internal routes use <Link>, external URLs open in a new tab
───────────────────────────────────────────────────────────────────────── */
export function SmartLink({ to, href, children, ...rest }) {
  if (to) {
    return (
      <Link to={to} {...rest}>
        {children}
      </Link>
    );
  }
  const external = /^https?:\/\//.test(href || "");
  return (
    <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
      {children}
    </a>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Button
───────────────────────────────────────────────────────────────────────── */
const BUTTON_VARIANTS = {
  solid: "bg-ink text-bg hover:bg-accent hover:text-accent-contrast",
  outline: "border border-line-strong text-ink hover:border-ink hover:bg-ink hover:text-bg",
  accent: "bg-accent text-accent-contrast hover:bg-ink hover:text-bg",
  inverted: "bg-invert-accent text-invert-accent-contrast hover:bg-invert-ink hover:text-invert-bg",
};
const BUTTON_SIZES = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-6 text-[0.95rem]",
  lg: "h-14 px-8 text-base",
};

export function Button({ variant = "solid", size = "md", icon = true, className = "", children, ...rest }) {
  return (
    <SmartLink
      className={`group/btn inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full font-medium tracking-tight transition-[background-color,color,border-color,transform] duration-300 active:scale-[0.97] ${BUTTON_VARIANTS[variant]} ${BUTTON_SIZES[size]} ${className}`}
      {...rest}
    >
      <span>{children}</span>
      {icon && (
        <ArrowUpRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
        />
      )}
    </SmartLink>
  );
}

/* Text link with an animated underline and a small arrow */
export function ArrowLink({ className = "", children, ...rest }) {
  return (
    <SmartLink className={`group/al inline-flex items-center gap-1.5 font-medium text-ink ${className}`} {...rest}>
      <span className="link-u pb-0.5">{children}</span>
      <ArrowUpRight
        aria-hidden="true"
        className="h-4 w-4 transition-transform duration-300 group-hover/al:translate-x-0.5 group-hover/al:-translate-y-0.5"
      />
    </SmartLink>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   ThemeSwitch — light / dark toggle
───────────────────────────────────────────────────────────────────────── */
export function ThemeSwitch({ className = "" }) {
  const isDark = useTheme() === "dark";
  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Dark theme"
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={toggleTheme}
      className={`relative inline-flex h-[calc(2.25rem+2px)] w-[calc(4rem+2px)] shrink-0 items-center rounded-full border border-line bg-surface p-1 transition-colors hover:border-line-strong ${className}`}
    >
      <span
        aria-hidden="true"
        className={`absolute left-1 top-1 h-7 w-7 rounded-full bg-ink transition-transform duration-500 ease-out-soft ${
          isDark ? "translate-x-7" : "translate-x-0"
        }`}
      />
      <Sun aria-hidden="true" className={`relative z-10 h-7 w-7 p-1.5 transition-colors duration-500 ${isDark ? "text-muted" : "text-bg"}`} />
      <Moon aria-hidden="true" className={`relative z-10 h-7 w-7 p-1.5 transition-colors duration-500 ${isDark ? "text-bg" : "text-muted"}`} />
    </button>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   SectionHead — "(01) Eyebrow" rule, big serif title, intro paragraph
───────────────────────────────────────────────────────────────────────── */
export function SectionHead({ index, eyebrow, title, intro, action, page = false, className = "" }) {
  const Heading = page ? "h1" : "h2";
  return (
    <header className={`mb-12 md:mb-16 lg:mb-20 ${className}`}>
      <Reveal className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
        <p className="eyebrow flex items-center gap-3">
          {index && <span className="text-ink">({index})</span>}
          <span>{eyebrow}</span>
        </p>
        {action}
      </Reveal>
      <div className="mt-8 grid gap-6 md:mt-12 lg:grid-cols-12 lg:items-end lg:gap-10">
        <Reveal as={Heading} className={`display ${page ? "t-h1" : "t-h2"} text-balance lg:col-span-8`}>
          <Rich text={title} />
        </Reveal>
        {intro && (
          <Reveal
            as="p"
            delay={120}
            className="prose-em max-w-md text-base leading-relaxed text-ink-soft md:text-lg lg:col-span-4 lg:justify-self-end"
          >
            <Rich text={intro} />
          </Reveal>
        )}
      </div>
    </header>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Stat — big serif number with a mono label
───────────────────────────────────────────────────────────────────────── */
export function Stat({ value, label, className = "" }) {
  return (
    <div className={className}>
      <p className="display text-[2.75rem] leading-none md:text-6xl">{value}</p>
      <p className="eyebrow mt-3">{label}</p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Media — image in a rounded frame with a reserved aspect ratio (no CLS)
───────────────────────────────────────────────────────────────────────── */
export function Media({ src, alt = "", ratio, className = "", imgClassName = "", eager = false, style }) {
  return (
    <div className={`frame ${className}`} style={ratio || style ? { ...(ratio ? { aspectRatio: ratio } : {}), ...style } : undefined}>
      {src && (
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={eager ? "high" : "auto"}
          className={imgClassName}
        />
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Marquee — seamless CSS loop, pauses on hover
───────────────────────────────────────────────────────────────────────── */
export function Marquee({ children, duration = 45, className = "" }) {
  return (
    <div className={`marquee overflow-hidden ${className}`}>
      <div className="marquee-track" style={{ "--marquee-duration": `${duration}s` }}>
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

/* Small mono pill used for tags */
export function Tag({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-line px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.08em] text-muted ${className}`}
    >
      {children}
    </span>
  );
}
