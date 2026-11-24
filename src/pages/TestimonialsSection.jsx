import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { TESTIMONIALS } from "../content";
import { Reveal, SectionHead } from "../components/ui";

const initials = (name) =>
  name
    .replace(/^(Dr\.|Mr\.|Ms\.|Mrs\.)\s*/i, "")
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

function NavButton({ onClick, label, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="grid h-12 w-12 place-items-center rounded-full border border-line-strong text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-bg"
    >
      {children}
    </button>
  );
}

export default function TestimonialsSection({ index }) {
  const items = TESTIMONIALS.items;
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const duration = (TESTIMONIALS.autoplaySeconds || 8) * 1000;

  const go = (i) => setCurrent((i + items.length) % items.length);

  useEffect(() => {
    if (paused || items.length < 2) return undefined;
    const id = window.setTimeout(() => setCurrent((c) => (c + 1) % items.length), duration);
    return () => window.clearTimeout(id);
  }, [current, paused, duration, items.length]);

  const t = items[current];

  return (
    <section className="section-y bg-surface">
      <div className="container-x">
        <SectionHead index={index} eyebrow={TESTIMONIALS.eyebrow} title={TESTIMONIALS.title} intro={TESTIMONIALS.intro} />

        <Reveal
          className="grid gap-10 lg:grid-cols-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {/* Names list (desktop) */}
          <ul className="hidden lg:col-span-3 lg:block" aria-label="Choose a testimonial">
            {items.map((item, i) => (
              <li key={item.author}>
                <button
                  type="button"
                  onClick={() => go(i)}
                  aria-current={i === current}
                  className={`flex w-full items-baseline gap-3 border-t border-line py-3.5 text-left transition-colors duration-300 ${
                    i === current ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  <span className="font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-medium">{item.author}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Quote */}
          <figure className="lg:col-span-9" aria-live="polite">
            <div key={current} className="fade-up">
              <p className="eyebrow">{t.tag}</p>
              <blockquote className="display mt-6 text-[1.75rem] leading-[1.2] md:text-[2.6rem]">
                <span className="text-accent">“</span>
                {t.quote}
                <span className="text-accent">”</span>
              </blockquote>
            </div>

            <div className="mt-10 flex flex-col gap-6 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
              <figcaption key={`a-${current}`} className="fade-up flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink font-mono text-sm text-bg">
                  {initials(t.author)}
                </span>
                <span>
                  <span className="block font-semibold">{t.author}</span>
                  <span className="block text-sm text-muted">
                    {t.role} · {t.company}
                  </span>
                </span>
                {t.link && (
                  <a href={t.link} target="_blank" rel="noopener noreferrer" aria-label="Open original review" className="text-muted hover:text-ink">
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </figcaption>

              <div className="flex items-center gap-4">
                <span className="font-mono text-sm tabular-nums text-muted">
                  {String(current + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                </span>
                <NavButton onClick={() => go(current - 1)} label="Previous testimonial">
                  <ArrowLeft className="h-4 w-4" />
                </NavButton>
                <NavButton onClick={() => go(current + 1)} label="Next testimonial">
                  <ArrowRight className="h-4 w-4" />
                </NavButton>
              </div>
            </div>

            {/* Autoplay progress */}
            <div className="mt-6 h-px w-full overflow-hidden bg-line">
              <div
                key={`p-${current}`}
                className="h-full origin-left bg-accent"
                style={{
                  animation: `progress ${duration}ms linear both`,
                  animationPlayState: paused ? "paused" : "running",
                }}
              />
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
