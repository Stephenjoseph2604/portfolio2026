import { HERO, SITE } from "../content";
import { useClock } from "../lib/hooks";
import { ArrowLink, Button, Media, Rich } from "../components/ui";

function LocalTime() {
  const time = useClock(SITE.timeZone);
  return (
    <span className="tabular-nums">
      {SITE.locationShort} — {time} {SITE.timeZoneLabel}
    </span>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Portrait shape with "inverted radius" cut-outs.
   Drawn on a 400 × 500 grid (the portrait's 4:5 ratio) so one path drives
   the clip, the hairline outline and the brass offset frame.
   • top-left notch holds the experience seal — its inner curve is
     concentric with the seal circle
   • bottom-left notch holds the classroom photo
───────────────────────────────────────────────────────────────────────── */
const SHAPE = {
  w: 400,
  h: 500,
  corner: 16, // outer corners
  fillet: 16, // soft corners where a notch meets the edge
  gap: 12, // space between the shape and what sits in a notch
  seal: 128, // seal diameter
  inset: 150, // classroom photo size
  insetRadius: 14,
};
const SEAL_PCT = `${(SHAPE.seal / SHAPE.w) * 100}%`;
const INSET_PCT = `${(SHAPE.inset / SHAPE.w) * 100}%`;
const INSET_RADIUS_PCT = `${(SHAPE.insetRadius / SHAPE.inset) * 100}%`;

function portraitPath(sx = 1, sy = 1, withInset = true) {
  const { w: W, h: H, corner: rc, fillet: rf, gap: g, seal, inset, insetRadius } = SHAPE;
  const t = seal + g; // top notch size
  const tr = seal / 2 + g; // concentric with the seal
  const b = inset + g; // bottom notch size
  const br = insetRadius + g; // concentric with the photo's corner
  const X = (v) => +(v * sx).toFixed(5);
  const Y = (v) => +(v * sy).toFixed(5);
  const arc = (r, sweep, x, y) => `A ${X(r)} ${Y(r)} 0 0 ${sweep} ${X(x)} ${Y(y)}`;

  const d = [`M ${X(t + rf)} 0`, `H ${X(W - rc)}`, arc(rc, 1, W, rc), `V ${Y(H - rc)}`, arc(rc, 1, W - rc, H)];
  if (withInset) {
    d.push(`H ${X(b + rf)}`, arc(rf, 1, b, H - rf), `V ${Y(H - b + br)}`, arc(br, 0, b - br, H - b), `H ${X(rf)}`, arc(rf, 1, 0, H - b - rf));
  } else {
    d.push(`H ${X(rc)}`, arc(rc, 1, 0, H - rc));
  }
  d.push(`V ${Y(t + rf)}`, arc(rf, 1, rf, t), `H ${X(t - tr)}`, arc(tr, 0, t, t - tr), `V ${Y(rf)}`, arc(rf, 1, t + rf, 0), "Z");
  return d.join(" ");
}

const HAS_INSET = Boolean(HERO.inset?.src);
const CLIP_D = portraitPath(1 / SHAPE.w, 1 / SHAPE.h, HAS_INSET);
const OUTLINE_D = portraitPath(1, 1, HAS_INSET);

/* Rotating brass seal: "3+ YEARS" with the ring text circling it */
function ExperienceSeal({ className = "", style }) {
  const { value, unit, label, ring } = HERO.experience;
  return (
    <div
      role="img"
      aria-label={`${value} ${label}`}
      style={style}
      className={`grid aspect-square place-items-center rounded-full bg-invert-bg text-invert-ink shadow-[var(--shadow)] [container-type:inline-size] ${className}`}
    >
      <svg viewBox="0 0 200 200" aria-hidden="true" className="seal-rotate absolute inset-0 h-full w-full">
        <defs>
          <path id="seal-ring" d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0" />
        </defs>
        <text className="fill-current font-mono uppercase" style={{ fontSize: 12.5, letterSpacing: "0.16em" }}>
          <textPath href="#seal-ring" textLength="472" lengthAdjust="spacing">
            {ring}
          </textPath>
        </text>
      </svg>
      <span className="relative text-center leading-none">
        <span className="display block text-[36cqi] text-invert-accent">{value}</span>
        <span className="mt-[1.5cqi] block font-mono text-[5.4cqi] uppercase tracking-[0.22em] text-invert-muted">{unit}</span>
      </span>
    </div>
  );
}

export default function HeroSection() {
  const exp = HERO.experience;

  return (
    <section id="home" className="relative overflow-hidden pt-24 md:pt-28">
      <div className="container-x">
        {/* Top rule: availability + local time */}
        <div className="fade-up flex flex-wrap items-center justify-between gap-3 border-b border-line pb-5">
          <p className="eyebrow flex items-center gap-2.5 text-ink">
            {SITE.available && <span className="status-dot" aria-hidden="true" />}
            {SITE.availability}
          </p>
          <p className="eyebrow">
            <LocalTime />
          </p>
        </div>

        <div className="grid items-center gap-16 pb-14 pt-10 md:pt-14 lg:grid-cols-12 lg:gap-12 lg:pb-20">
          {/* ── Text ── */}
          <div className="lg:col-span-7">
            <p className="eyebrow fade-up flex items-center gap-3" style={{ animationDelay: "80ms" }}>
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              {HERO.eyebrow}
            </p>

            <h1 className="display t-hero mt-6" aria-label={SITE.fullName}>
              <span className="fade-up block" style={{ animationDelay: "140ms" }}>
                {SITE.firstName}
              </span>
              <span className="fade-up block whitespace-nowrap pl-[8%] italic text-accent" style={{ animationDelay: "240ms" }}>
                {SITE.lastName}
              </span>
            </h1>

            {HERO.tagline && (
              <p className="fade-up display t-lead accent-em mt-9 max-w-2xl text-ink" style={{ animationDelay: "320ms" }}>
                <Rich text={HERO.tagline} />
              </p>
            )}

            <p
              className="fade-up prose-em mt-5 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg"
              style={{ animationDelay: "380ms" }}
            >
              <Rich text={HERO.bio} />
            </p>

            <div className="fade-up mt-9 flex flex-wrap items-center gap-x-6 gap-y-4" style={{ animationDelay: "440ms" }}>
              <Button to={HERO.ctaPrimary.to} size="lg">
                {HERO.ctaPrimary.label}
              </Button>
              <ArrowLink href={HERO.ctaSecondary.href}>{HERO.ctaSecondary.label}</ArrowLink>
            </div>
          </div>

          {/* ── Portrait ── */}
          <div className="fade-up relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none" style={{ animationDelay: "220ms" }}>
            <figure>
              <div className="relative">
                {/* Clip shape (scales with the portrait) */}
                <svg width="0" height="0" aria-hidden="true" className="absolute">
                  <defs>
                    <clipPath id="hero-portrait-shape" clipPathUnits="objectBoundingBox">
                      <path d={CLIP_D} />
                    </clipPath>
                  </defs>
                </svg>

                {/* Brass offset frame — follows the cut-outs */}
                <svg
                  viewBox={`0 0 ${SHAPE.w} ${SHAPE.h}`}
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full overflow-visible text-accent"
                >
                  <path
                    d={OUTLINE_D}
                    transform="translate(10 10)"
                    fill="none"
                    stroke="currentColor"
                    strokeOpacity="0.65"
                    strokeWidth="1"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>

                <Media
                  src={HERO.portrait.src}
                  alt={HERO.portrait.alt}
                  ratio="4 / 5"
                  eager
                  imgClassName="object-top"
                  style={{ clipPath: "url(#hero-portrait-shape)" }}
                />

                {/* Hairline outline on top of the photo */}
                <svg
                  viewBox={`0 0 ${SHAPE.w} ${SHAPE.h}`}
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full overflow-visible text-line-strong"
                >
                  <path d={OUTLINE_D} fill="none" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                </svg>

                {exp && <ExperienceSeal className="absolute left-0 top-0" style={{ width: SEAL_PCT }} />}

                {HAS_INSET && (
                  <figure
                    className="group/inset absolute bottom-0 left-0 overflow-hidden border border-line-strong bg-surface-2"
                    style={{ width: INSET_PCT, aspectRatio: "1 / 1", borderRadius: INSET_RADIUS_PCT }}
                  >
                    <img
                      src={HERO.inset.src}
                      alt={HERO.inset.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out-soft group-hover/inset:scale-105"
                    />
                    {HERO.inset.caption && (
                      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-[8%] pb-[7%] pt-[18%] font-mono text-[0.58rem] uppercase tracking-[0.14em] text-white/90 md:text-[0.62rem]">
                        {HERO.inset.caption}
                      </figcaption>
                    )}
                  </figure>
                )}
              </div>
              <figcaption className="eyebrow mt-7 flex justify-between gap-4">
                <span>{HERO.portrait.caption}</span>
                <span>{SITE.locationShort}</span>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* ── Experience + stats + stack ── */}
        <div className="fade-up grid gap-10 border-t border-line py-10 md:grid-cols-12 md:gap-8 md:py-12" style={{ animationDelay: "520ms" }}>
          {exp && (
            <div className="flex items-end gap-5 md:col-span-5">
              <p className="display text-[5.5rem] leading-[0.78] text-accent md:text-[7rem]">{exp.value}</p>
              <div className="pb-1">
                <p className="eyebrow text-ink">{exp.label}</p>
                <p className="mt-1.5 max-w-[15rem] text-sm leading-snug text-ink-soft">{exp.note}</p>
              </div>
            </div>
          )}

          <dl className="grid grid-cols-2 gap-4 md:col-span-4 md:border-l md:border-line md:pl-8">
            {HERO.stats.map((s) => (
              <div key={s.label} className="flex flex-col justify-end">
                <dt className="eyebrow order-2 mt-3">{s.label}</dt>
                <dd className="display text-[2.75rem] leading-none md:text-5xl">{s.value}</dd>
              </div>
            ))}
          </dl>

          <div className="md:col-span-3 md:border-l md:border-line md:pl-8">
            <p className="eyebrow">{HERO.stackLabel}</p>
            <ul className="mt-3 flex flex-wrap font-mono text-sm leading-7 text-ink-soft">
              {HERO.stack.map((item, i) => (
                <li key={item} className="whitespace-nowrap">
                  {item}
                  {i < HERO.stack.length - 1 && (
                    <span className="px-2 text-line-strong" aria-hidden="true">
                      /
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
