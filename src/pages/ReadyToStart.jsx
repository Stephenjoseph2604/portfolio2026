import { CTA_BANNER } from "../content";
import { Button, Reveal, Rich } from "../components/ui";

/* Inverted block: ink on paper in light mode, paper on ink in dark mode */
export default function ReadyToStart() {
  return (
    <section className="px-3 pb-3 md:px-4 md:pb-4">
      <div className="overflow-hidden rounded-[1.75rem] bg-invert-bg text-invert-ink">
        <div className="container-x py-[clamp(4.5rem,10vw,8rem)]">
          <Reveal as="p" className="eyebrow !text-invert-muted">
            {CTA_BANNER.eyebrow}
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end">
            <Reveal as="h2" className="display t-h1 lg:col-span-8 [&_em]:!text-invert-accent">
              <Rich text={CTA_BANNER.title} />
            </Reveal>
            <Reveal delay={120} className="lg:col-span-4">
              <p className="leading-relaxed text-invert-muted md:text-lg">{CTA_BANNER.text}</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <Button to={CTA_BANNER.cta.to} variant="inverted" size="lg">
                  {CTA_BANNER.cta.label}
                </Button>
              </div>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.12em] text-invert-muted">{CTA_BANNER.note}</p>
            </Reveal>
          </div>

          <ol className="mt-16 grid border-t border-invert-line md:mt-24 md:grid-cols-3">
            {CTA_BANNER.points.map((p, i) => (
              <Reveal
                as="li"
                key={p.title}
                delay={i * 80}
                className="border-b border-invert-line py-7 md:border-b-0 md:border-l md:px-8 md:first:border-l-0 md:first:pl-0"
              >
                <span className="font-mono text-xs text-invert-muted">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display mt-3 text-[1.75rem] leading-tight">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-invert-muted md:text-base">{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
