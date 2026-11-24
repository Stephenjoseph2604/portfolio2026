import { useCallback, useState } from "react";
import { ArrowUpRight, Expand, Search } from "lucide-react";
import { AWARDS } from "../content";
import Lightbox from "../components/Lightbox";
import { Media, Reveal, SectionHead } from "../components/ui";

const TYPES = ["all", "award", "certificate"];

function VerifyLink({ url }) {
  if (!url) return null;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="group/v inline-flex items-center gap-1 text-sm font-medium text-ink">
      <span className="link-u">{AWARDS.verifyLabel}</span>
      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/v:-translate-y-0.5 group-hover/v:translate-x-0.5" aria-hidden="true" />
    </a>
  );
}

function TypeBadge({ type }) {
  const award = type === "award";
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-[0.12em] ${
        award ? "bg-accent text-accent-contrast" : "border border-line-strong text-ink-soft"
      }`}
    >
      {AWARDS.typeNames[type] || type}
    </span>
  );
}

const lightboxItem = (item) => ({
  image: item.image,
  title: item.title,
  caption: [item.issuer, item.date].filter(Boolean).join(" · "),
});

function FeaturedCard({ item, delay, onOpen }) {
  const award = item.type === "award";
  return (
    <Reveal as="article" delay={delay} className="group flex flex-col rounded-xl border border-line bg-bg p-3">
      {item.image && (
        <button
          type="button"
          onClick={() => onOpen(item)}
          aria-label={`${AWARDS.viewLabel} ${item.title}`}
          className="relative block w-full overflow-hidden rounded-lg"
        >
          <Media
            src={item.image}
            alt=""
            ratio="4 / 3"
            className="!rounded-lg"
            imgClassName={award ? "object-cover" : "object-contain bg-plate p-3"}
          />
          <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-ink/85 px-3 py-1.5 text-xs font-medium text-bg opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
            <Expand className="h-3.5 w-3.5" aria-hidden="true" />
            {AWARDS.viewLabel}
          </span>
        </button>
      )}
      <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
        <div className="flex flex-wrap items-center gap-3">
          <TypeBadge type={item.type} />
          <span className="eyebrow">{[item.category, item.date].filter(Boolean).join(" · ")}</span>
        </div>
        <h3 className="display mt-3 text-[1.65rem] leading-tight">{item.title}</h3>
        <p className="mt-1 text-sm font-medium text-ink-soft">{item.issuer}</p>
        {item.description && <p className="mt-3 leading-relaxed text-ink-soft">{item.description}</p>}
        {item.skills?.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-muted">
            {item.skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        )}
        {(item.credentialId || item.verifyUrl) && (
          <div className="mt-auto flex items-center justify-between gap-4 pt-6">
            <span className="font-mono text-xs text-muted">{item.credentialId}</span>
            <VerifyLink url={item.verifyUrl} />
          </div>
        )}
      </div>
    </Reveal>
  );
}

export default function AwardsSection({ index }) {
  const [type, setType] = useState("all");
  const [query, setQuery] = useState("");
  const [viewing, setViewing] = useState(null);
  const close = useCallback(() => setViewing(null), []);
  const open = useCallback((item) => setViewing(lightboxItem(item)), []);

  const counts = {
    all: AWARDS.items.length,
    award: AWARDS.items.filter((i) => i.type === "award").length,
    certificate: AWARDS.items.filter((i) => i.type === "certificate").length,
  };
  const tabs = TYPES.filter((t) => t === "all" || counts[t] > 0);

  /* Featured: awards first, then certificates */
  const featured = AWARDS.items
    .filter((i) => i.featured)
    .sort((a, b) => (a.type === "award" ? 0 : 1) - (b.type === "award" ? 0 : 1));

  const q = query.trim().toLowerCase();
  const list = AWARDS.items.filter((i) => {
    const inType = type === "all" || i.type === type;
    const haystack = [i.title, i.issuer, i.description, i.credentialId, i.category, ...(i.skills || [])];
    const inQuery = !q || haystack.some((v) => v && v.toLowerCase().includes(q));
    return inType && inQuery;
  });

  return (
    <section id="awards" className="section-y bg-surface">
      <div className="container-x">
        <SectionHead index={index} eyebrow={AWARDS.eyebrow} title={AWARDS.title} intro={AWARDS.intro} />

        {featured.length > 0 && (
          <div className="mb-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((item, i) => (
              <FeaturedCard key={`${item.title}-${item.date}`} item={item} delay={(i % 3) * 80} onOpen={open} />
            ))}
          </div>
        )}

        {/* Controls */}
        <Reveal className="flex flex-col gap-5 border-t border-line pt-6 lg:flex-row lg:items-center lg:justify-between">
          <h3 className="eyebrow text-ink">
            {AWARDS.listTitle} <span className="text-muted">({list.length})</span>
          </h3>
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            {tabs.length > 2 && (
              <div role="tablist" aria-label="Filter by type" className="flex gap-1.5">
                {tabs.map((t) => (
                  <button
                    key={t}
                    type="button"
                    role="tab"
                    aria-selected={t === type}
                    onClick={() => setType(t)}
                    className={`flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm transition-colors duration-300 ${
                      t === type ? "bg-ink text-bg" : "text-ink-soft hover:bg-surface-2 hover:text-ink"
                    }`}
                  >
                    {AWARDS.labels[t]}
                    <span className={`font-mono text-[0.68rem] ${t === type ? "text-bg/70" : "text-muted"}`}>{counts[t]}</span>
                  </button>
                ))}
              </div>
            )}
            <label className="flex h-11 items-center gap-2.5 rounded-full border border-line bg-bg px-4 focus-within:border-ink md:w-72">
              <Search className="h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
              <span className="sr-only">{AWARDS.searchPlaceholder}</span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={AWARDS.searchPlaceholder}
                className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-muted"
              />
            </label>
          </div>
        </Reveal>

        {/* Full list */}
        <div className="mt-6 border-b border-line">
          {list.length === 0 && <p className="border-t border-line py-14 text-center text-muted">{AWARDS.emptyText}</p>}
          {list.map((item) => (
            <article
              key={`${item.title}-${item.date}`}
              className="fade-up grid gap-2 border-t border-line py-5 transition-colors duration-300 hover:bg-bg md:grid-cols-12 md:items-center md:gap-6 md:px-3"
            >
              <span className="font-mono text-xs text-muted md:col-span-2">{item.date}</span>
              <div className="md:col-span-5">
                <h4 className="font-semibold leading-snug">{item.title}</h4>
                <p className="text-sm text-muted">{item.issuer}</p>
              </div>
              <span className="md:col-span-2">
                <TypeBadge type={item.type} />
              </span>
              <span className="font-mono text-xs text-muted md:col-span-2">{item.credentialId || item.category}</span>
              <span className="flex items-center gap-4 md:col-span-1 md:justify-end">
                {item.image && (
                  <button type="button" onClick={() => open(item)} className="link-u text-sm font-medium text-ink">
                    {AWARDS.viewLabel}
                  </button>
                )}
                <VerifyLink url={item.verifyUrl} />
              </span>
            </article>
          ))}
        </div>
      </div>

      <Lightbox item={viewing} onClose={close} />
    </section>
  );
}
