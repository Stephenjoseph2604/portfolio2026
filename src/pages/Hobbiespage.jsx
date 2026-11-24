import { HOBBIES, SITE } from "../content";
import { Media, Reveal, Rich, SectionHead } from "../components/ui";

export default function HobbiesPage({ index }) {
  const featured = HOBBIES.items.filter((h) => h.image);
  const rest = HOBBIES.items.filter((h) => !h.image);

  return (
    <section id="hobbies" className="section-y page-top">
      <div className="container-x">
        <SectionHead page index={index} eyebrow={HOBBIES.eyebrow} title={HOBBIES.title} intro={HOBBIES.intro} />

        <Reveal as="dl" className="mb-16 grid grid-cols-2 border-y border-line md:mb-20 md:grid-cols-4">
          {HOBBIES.stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col px-4 py-6 md:border-l md:border-line md:px-6 md:first:border-l-0 md:first:pl-0 ${
                i % 2 ? "border-l border-line" : "pl-0"
              } ${i > 1 ? "border-t border-line md:border-t-0" : ""}`}
            >
              <dt className="eyebrow order-2 mt-3">{s.label}</dt>
              <dd className="display text-4xl leading-none md:text-5xl">{s.value}</dd>
            </div>
          ))}
        </Reveal>

        {/* Hobbies with photos */}
        {featured.length > 0 && (
          <div className="grid gap-x-6 gap-y-12 md:grid-cols-3">
            {featured.map((h, i) => (
              <Reveal as="article" key={h.title} delay={i * 90} className="group">
                <Media src={h.image} alt={h.title} ratio="4 / 5" className="border border-line" />
                <p className="eyebrow mt-5">{h.tag}</p>
                <h3 className="display mt-2 text-4xl leading-none transition-colors duration-300 group-hover:text-accent">
                  {h.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-ink-soft">{h.subtitle}</p>
                <p className="mt-3 leading-relaxed text-ink-soft">{h.text}</p>
              </Reveal>
            ))}
          </div>
        )}

        {/* Everything else as an index */}
        {rest.length > 0 && (
          <ul className="mt-20 grid border-b border-line md:grid-cols-2 md:gap-x-12">
            {rest.map((h, i) => (
              <Reveal
                as="li"
                key={h.title}
                delay={(i % 2) * 80}
                className="group grid grid-cols-[2.5rem_1fr] gap-x-3 border-t border-line py-6"
              >
                <span className="pt-1.5 font-mono text-xs text-muted">{String(featured.length + i + 1).padStart(2, "0")}</span>
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="display text-3xl leading-none transition-colors duration-300 group-hover:text-accent">{h.title}</h3>
                    <span className="eyebrow !text-[0.65rem]">{h.tag}</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-ink">{h.subtitle}</p>
                  <p className="mt-2 leading-relaxed text-ink-soft">{h.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        )}

        {HOBBIES.quote && (
          <Reveal as="figure" className="mx-auto mt-24 max-w-4xl text-center md:mt-32">
            <blockquote className="display t-h2 text-balance">
              “<Rich text={HOBBIES.quote.text} />”
            </blockquote>
            <figcaption className="eyebrow mt-6">— {HOBBIES.quote.by || SITE.fullName}</figcaption>
          </Reveal>
        )}
      </div>
    </section>
  );
}
