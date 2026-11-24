import { ABOUT, SITE } from "../content";
import { ArrowLink, Button, Media, Reveal, Rich } from "../components/ui";

/*  Desktop: portrait pinned on the left, headline + intro beside it on the
    first screen, the story continues underneath on the right.
    Mobile:  headline → intro → portrait → story.                        */
export default function AboutSection({ index }) {
  return (
    <section id="about" className="section-y page-top">
      <div className="container-x">
        <Reveal className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
          <p className="eyebrow flex items-center gap-3">
            {index && <span className="text-ink">({index})</span>}
            <span>{ABOUT.eyebrow}</span>
          </p>
          {SITE.available && (
            <p className="eyebrow flex items-center gap-2.5 text-ink">
              <span className="status-dot" aria-hidden="true" />
              {SITE.availability}
            </p>
          )}
        </Reveal>

        <div className="mt-10 grid gap-12 md:mt-14 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-0">
          {/* ── Intro ── */}
          <div className="lg:col-span-7 lg:col-start-6 lg:row-start-1">
            <Reveal as="h1" className="display t-h1 text-balance">
              <Rich text={ABOUT.title} />
            </Reveal>
            <Reveal as="p" delay={100} className="display t-lead accent-em mt-8 max-w-2xl text-ink">
              <Rich text={ABOUT.lead} />
            </Reveal>
            <Reveal delay={160} className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Button to={ABOUT.ctaPrimary.to}>{ABOUT.ctaPrimary.label}</Button>
              <ArrowLink to={ABOUT.ctaSecondary.to}>{ABOUT.ctaSecondary.label}</ArrowLink>
            </Reveal>
          </div>

          {/* ── Portrait (pinned while the story scrolls) ── */}
          <Reveal delay={60} className="lg:col-span-5 lg:col-start-1 lg:row-span-2 lg:row-start-1">
            <figure className="lg:sticky lg:top-28">
              <Media
                src={ABOUT.photo.src}
                alt={ABOUT.photo.alt}
                ratio="4 / 5"
                eager
                className="border border-line lg:max-h-[calc(100svh-10rem)]"
                imgClassName="object-top"
              />
              <figcaption className="mt-4 flex items-center justify-between gap-4 border-t border-line pt-4">
                <span className="eyebrow">{ABOUT.photo.caption}</span>
                <span className="eyebrow">{SITE.roleShort}</span>
              </figcaption>
            </figure>
          </Reveal>

          {/* ── Story ── */}
          <div className="lg:col-span-7 lg:col-start-6 lg:row-start-2 lg:pt-20">
            <div className="space-y-6 border-t border-line pt-10">
              {ABOUT.paragraphs.map((p, i) => (
                <Reveal as="p" key={i} delay={i * 60} className="prose-em max-w-2xl text-base leading-[1.75] text-ink-soft md:text-lg">
                  <Rich text={p} />
                </Reveal>
              ))}
            </div>

            <Reveal as="blockquote" className="mt-14 border-l-2 border-accent pl-6 md:pl-8">
              <p className="display text-2xl italic leading-snug md:text-[2rem]">“{ABOUT.quote}”</p>
              <footer className="eyebrow mt-4">— {SITE.fullName}</footer>
            </Reveal>

            <Reveal as="dl" className="mt-14 grid grid-cols-3 border-y border-line">
              {ABOUT.stats.map((s) => (
                <div key={s.label} className="flex flex-col border-l border-line px-4 py-7 first:border-l-0 first:pl-0 md:px-6">
                  <dt className="eyebrow order-2 mt-3">{s.label}</dt>
                  <dd className="display text-4xl leading-none md:text-5xl">{s.value}</dd>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
