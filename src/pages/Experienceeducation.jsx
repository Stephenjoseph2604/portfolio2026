import { useState } from "react";
import { Plus } from "lucide-react";
import { EXPERIENCE } from "../content";
import { Reveal, SectionHead } from "../components/ui";

function TimelineItem({ item, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = `tl-${item.period}-${item.role}`.replace(/\W+/g, "-");

  return (
    <Reveal as="li" className="grid gap-4 border-t border-line py-8 md:grid-cols-12 md:gap-8 md:py-10">
      <div className="md:col-span-3">
        <p className="font-mono text-sm text-ink">{item.period}</p>
        {item.current && (
          <span className="eyebrow mt-3 inline-flex items-center gap-2 text-ink">
            <span className="status-dot" aria-hidden="true" />
            {EXPERIENCE.currentLabel}
          </span>
        )}
      </div>

      <div className="md:col-span-9">
        <h4 className="display t-h3">{item.role}</h4>
        <p className="mt-2 text-sm text-ink-soft">
          <span className="font-semibold text-ink">{item.company}</span>
          {item.field && <> · {item.field}</>} · {item.location}
          {item.type && <span className="ml-2 rounded-full border border-line px-2.5 py-0.5 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-muted">{item.type}</span>}
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">{item.summary}</p>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={panelId}
          className="eyebrow mt-6 inline-flex items-center gap-2 text-ink hover:text-accent"
        >
          <Plus className={`h-3.5 w-3.5 transition-transform duration-500 ${open ? "rotate-45" : ""}`} aria-hidden="true" />
          {EXPERIENCE.highlightsLabel}
        </button>

        <div id={panelId} className={`collapse-grid ${open ? "is-open" : ""}`}>
          <div>
            <ul className="mt-5 space-y-2.5">
              {item.highlights.map((h) => (
                <li key={h} className="flex gap-3 leading-relaxed text-ink-soft">
                  <span className="mt-[0.7em] h-px w-4 shrink-0 bg-accent" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>
            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs uppercase tracking-[0.08em] text-muted">
              {item.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function Timeline({ title, items, startOpen }) {
  return (
    <div className="mt-16 first:mt-0">
      <Reveal as="h3" className="display mb-2 text-4xl italic text-accent md:text-5xl">
        {title}
      </Reveal>
      <ol className="border-b border-line">
        {items.map((item, i) => (
          <TimelineItem key={`${item.period}-${item.role}`} item={item} defaultOpen={startOpen && i === 0} />
        ))}
      </ol>
    </div>
  );
}

export default function ExperienceEducation({ index }) {
  return (
    <section id="experience" className="section-y">
      <div className="container-x">
        <SectionHead index={index} eyebrow={EXPERIENCE.eyebrow} title={EXPERIENCE.title} intro={EXPERIENCE.intro} />

        <Reveal as="dl" className="mb-16 grid grid-cols-2 border-y border-line md:mb-20 md:grid-cols-4">
          {EXPERIENCE.stats.map((s, i) => (
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

        <Timeline title={EXPERIENCE.workTitle} items={EXPERIENCE.work} startOpen />
        <Timeline title={EXPERIENCE.educationTitle} items={EXPERIENCE.education} />
      </div>
    </section>
  );
}
