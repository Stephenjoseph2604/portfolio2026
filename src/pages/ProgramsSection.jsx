import { useState } from "react";
import { PROGRAMS } from "../content";
import { ArrowLink, Button, Reveal, Rich, SectionHead, Tag } from "../components/ui";

const pad = (n) => String(n).padStart(2, "0");

export default function ProgramsSection({ index }) {
  const items = PROGRAMS.items || [];
  const [activeId, setActiveId] = useState(items[0]?.id);
  if (!items.length) return null;

  const activeIndex = Math.max(0, items.findIndex((p) => p.id === activeId));
  const p = items[activeIndex];
  const L = PROGRAMS.labels;
  const meta = [
    [L.duration, p.duration],
    [L.format, p.format],
    [L.level, p.level],
    [L.audience, p.audience],
  ].filter(([, v]) => v);

  return (
    <section id="programs" className="section-y bg-surface">
      <div className="container-x">
        <SectionHead index={index} eyebrow={PROGRAMS.eyebrow} title={PROGRAMS.title} intro={PROGRAMS.intro} />

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          {/* ── Program list: chips on mobile, index list on desktop ── */}
          <Reveal className="min-w-0 lg:col-span-4">
            <div className="-mx-[clamp(1.25rem,4vw,3rem)] overflow-x-auto px-[clamp(1.25rem,4vw,3rem)] no-scrollbar lg:mx-0 lg:overflow-visible lg:px-0">
              <div role="tablist" aria-label={PROGRAMS.eyebrow} className="flex w-max gap-2 lg:w-full lg:flex-col lg:gap-0 lg:border-b lg:border-line">
                {items.map((item, i) => {
                  const active = i === activeIndex;
                  return (
                    <button
                      key={item.id}
                      id={`program-tab-${item.id}`}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      aria-controls="program-panel"
                      onClick={() => setActiveId(item.id)}
                      className={`flex shrink-0 items-center gap-4 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors duration-300 lg:rounded-none lg:border-0 lg:border-t lg:border-line lg:bg-transparent lg:px-0 lg:py-5 lg:text-left ${
                        active
                          ? "border-ink bg-ink text-bg lg:text-ink"
                          : "border-line text-ink-soft hover:border-line-strong hover:text-ink"
                      }`}
                    >
                      <span className={`hidden font-mono text-xs lg:inline ${active ? "text-accent" : "text-muted"}`}>{pad(i + 1)}</span>
                      <span className="lg:flex-1 lg:font-display lg:text-[1.75rem] lg:font-normal lg:leading-tight">{item.title}</span>
                      <span className="hidden font-mono text-xs text-muted lg:inline">{item.duration}</span>
                      <span
                        aria-hidden="true"
                        className={`hidden h-2 w-2 rounded-full bg-accent transition-opacity duration-300 lg:block ${active ? "opacity-100" : "opacity-0"}`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* ── Program detail ── */}
          <Reveal delay={100} className="min-w-0 lg:col-span-8">
            <article
              key={p.id}
              id="program-panel"
              role="tabpanel"
              aria-labelledby={`program-tab-${p.id}`}
              className="fade-up rounded-2xl border border-line bg-bg p-6 sm:p-8 md:p-10"
            >
              <p className="eyebrow">
                {PROGRAMS.eyebrow} · {pad(activeIndex + 1)}/{pad(items.length)}
              </p>
              <h3 className="display mt-3 text-[2.6rem] leading-none md:text-6xl">{p.title}</h3>
              {p.tagline && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">{p.tagline}</p>}

              {meta.length > 0 && (
                <dl className="mt-8 grid grid-cols-2 border-y border-line md:grid-cols-4">
                  {meta.map(([label, value], i) => (
                    <div
                      key={label}
                      className={`py-4 pr-3 md:border-l md:border-line md:px-4 md:first:border-l-0 md:first:pl-0 ${
                        i % 2 ? "border-l border-line pl-4" : ""
                      } ${i > 1 ? "border-t border-line md:border-t-0" : ""}`}
                    >
                      <dt className="eyebrow !text-[0.62rem]">{label}</dt>
                      <dd className="mt-1.5 text-sm font-medium leading-snug">{value}</dd>
                    </div>
                  ))}
                </dl>
              )}

              {p.tech?.length > 0 && (
                <div className="mt-8">
                  <p className="eyebrow">{L.tech}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <li key={t}>
                        <Tag className="!text-ink-soft">{t}</Tag>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {p.syllabus?.length > 0 && (
                <div className="mt-8">
                  <p className="eyebrow">{L.syllabus}</p>
                  <ol className="mt-3 grid gap-x-8 sm:grid-cols-2">
                    {p.syllabus.map((m, i) => (
                      <li key={m} className="flex gap-4 border-t border-line py-3">
                        <span className="pt-0.5 font-mono text-xs text-accent">{pad(i + 1)}</span>
                        <span className="leading-snug">{m}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {p.outcome && (
                <div className="mt-8 border-l-2 border-accent pl-5">
                  <p className="eyebrow">{L.outcome}</p>
                  <p className="display mt-2 text-2xl leading-snug md:text-[1.75rem]">
                    <Rich text={p.outcome} />
                  </p>
                </div>
              )}

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
                <Button to={`/contact?program=${encodeURIComponent(p.id)}`} size="lg">
                  {PROGRAMS.bookLabel}
                </Button>
                {items.length > 1 && (
                  <ArrowLink
                    href="#programs"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveId(items[(activeIndex + 1) % items.length].id);
                    }}
                  >
                    {PROGRAMS.nextLabel}: {items[(activeIndex + 1) % items.length].title}
                  </ArrowLink>
                )}
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
