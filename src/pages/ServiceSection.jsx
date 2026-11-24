import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "../content";
import { Reveal, SectionHead } from "../components/ui";

export default function ServicesSection({ index }) {
  return (
    <section id="services" className="section-y">
      <div className="container-x">
        <SectionHead index={index} eyebrow={SERVICES.eyebrow} title={SERVICES.title} intro={SERVICES.intro} />

        <ol className="border-b border-line">
          {SERVICES.items.map((s, i) => (
            <Reveal
              as="li"
              key={s.title}
              delay={i * 60}
              className="group grid gap-5 border-t border-line py-8 transition-colors duration-500 hover:bg-surface md:grid-cols-12 md:gap-8 md:px-4 md:py-11"
            >
              <span className="font-mono text-sm text-muted md:col-span-1 md:pt-2">
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="display t-h3 flex items-start justify-between gap-4 transition-colors duration-300 group-hover:text-accent md:col-span-4">
                {s.title}
                <ArrowUpRight
                  aria-hidden="true"
                  className="mt-1 h-6 w-6 shrink-0 text-muted opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:text-accent group-hover:opacity-100 md:hidden lg:block"
                />
              </h3>

              <div className="md:col-span-5">
                <p className="leading-relaxed text-ink-soft">{s.description}</p>
                <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-xs uppercase tracking-[0.08em] text-muted">
                  {s.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>

              <dl className="flex gap-8 md:col-span-2 md:flex-col md:items-end md:gap-5 md:text-right">
                {s.stats.map((st) => (
                  <div key={st.label} className="flex flex-col">
                    <dt className="eyebrow order-2 mt-1.5 !text-[0.65rem]">{st.label}</dt>
                    <dd className="display text-3xl leading-none">{st.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
