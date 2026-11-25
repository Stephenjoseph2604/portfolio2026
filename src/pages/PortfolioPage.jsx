import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { PORTFOLIO } from "../content";
import { PROJECTS, projectPath } from "../lib/projects";
import CursorStage from "../components/CursorStage";
import { Media, Reveal, SectionHead } from "../components/ui";

export default function PortfolioPage({ index }) {
  const [filter, setFilter] = useState(PORTFOLIO.filters[0]);

  const counts = useMemo(() => {
    const map = { [PORTFOLIO.filters[0]]: PROJECTS.length };
    PROJECTS.forEach((p) => {
      map[p.category] = (map[p.category] || 0) + 1;
    });
    return map;
  }, []);

  const visible = filter === PORTFOLIO.filters[0] ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="section-y page-top">
      <div className="container-x">
        <SectionHead page index={index} eyebrow={PORTFOLIO.eyebrow} title={PORTFOLIO.title} intro={PORTFOLIO.intro} />

        {/* Stats */}
        <Reveal as="dl" className="mb-14 grid grid-cols-3 border-y border-line md:mb-20">
          {PORTFOLIO.stats.map((s) => (
            <div key={s.label} className="flex flex-col border-l border-line px-4 py-6 first:border-l-0 first:pl-0 md:px-8">
              <dt className="eyebrow order-2 mt-3">{s.label}</dt>
              <dd className="display text-4xl leading-none md:text-6xl">{s.value}</dd>
            </div>
          ))}
        </Reveal>

        {/* Filters */}
        <Reveal className="-mx-[clamp(1.25rem,4vw,3rem)] mb-10 overflow-x-auto px-[clamp(1.25rem,4vw,3rem)] no-scrollbar md:mb-14">
          <div role="tablist" aria-label="Filter projects" className="flex w-max gap-2">
            {PORTFOLIO.filters.map((f) => {
              const active = f === filter;
              return (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(f)}
                  className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors duration-300 ${
                    active ? "border-ink bg-ink text-bg" : "border-line text-ink-soft hover:border-line-strong hover:text-ink"
                  }`}
                >
                  {f}
                  <span className={`font-mono text-[0.7rem] ${active ? "text-bg/70" : "text-muted"}`}>{counts[f] || 0}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Grid */}
        {visible.length === 0 ? (
          <p className="py-20 text-center text-muted">{PORTFOLIO.emptyText}</p>
        ) : (
          <div key={filter} className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p, i) => (
              <article key={p.slug} className="fade-up" style={{ animationDelay: `${Math.min(i, 8) * 50}ms` }}>
                <Link to={projectPath(p)} className="group block" aria-label={`${p.title} — ${PORTFOLIO.viewLabel}`}>
                  <CursorStage label={PORTFOLIO.viewLabel}>
                    <Media src={p.cover} alt={p.title} ratio="4 / 3" className="border border-line" imgClassName="object-top" />
                  </CursorStage>
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="display text-[1.65rem] leading-tight transition-colors duration-300 group-hover:text-accent">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted">{[p.category, p.type].filter(Boolean).join(" · ")}</p>
                    </div>
                    {p.year && <span className="font-mono text-sm text-muted">{p.year}</span>}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
