import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Expand } from "lucide-react";
import { PORTFOLIO, SITE } from "../content";
import { PROJECTS, getNeighbours, getProject, projectPath } from "../lib/projects";
import Lightbox from "../components/Lightbox";
import { Button, Media, Reveal, Rich, Tag } from "../components/ui";

const D = PORTFOLIO.detail;
const pad = (n) => String(n).padStart(2, "0");
const toList = (v) => (Array.isArray(v) ? v : v ? [v] : []);

/* One numbered row: label on the left (sticky on desktop), content on the right */
function Block({ number, label, children }) {
  return (
    <Reveal as="section" className="grid gap-5 border-t border-line py-10 md:grid-cols-12 md:gap-8 md:py-14">
      <div className="md:col-span-3">
        <p className="eyebrow flex items-center gap-3 md:sticky md:top-28">
          <span className="text-accent">{pad(number)}</span>
          {label}
        </p>
      </div>
      <div className="md:col-span-9">{children}</div>
    </Reveal>
  );
}

function Paragraphs({ text, lead = false }) {
  return (
    <div className="space-y-5">
      {toList(text).map((t, i) => (
        <p
          key={i}
          className={
            lead && i === 0
              ? "display t-lead accent-em max-w-3xl text-ink"
              : "prose-em max-w-2xl text-base leading-[1.75] text-ink-soft md:text-lg"
          }
        >
          <Rich text={t} />
        </p>
      ))}
    </div>
  );
}

function NeighbourCard({ project, direction }) {
  const next = direction === "next";
  return (
    <Link
      to={projectPath(project)}
      className={`group flex min-w-0 items-center gap-5 rounded-2xl border border-line bg-surface p-4 transition-colors duration-300 hover:border-line-strong md:p-5 ${
        next ? "flex-row-reverse text-right" : ""
      }`}
    >
      <Media src={project.cover} alt="" ratio="4 / 3" className="w-28 shrink-0 !rounded-lg border border-line md:w-36" imgClassName="object-top" />
      <div className="min-w-0 flex-1">
        <p className={`eyebrow flex items-center gap-2 ${next ? "justify-end" : ""}`}>
          {!next && <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" aria-hidden="true" />}
          {next ? D.next : D.prev}
          {next && <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />}
        </p>
        <p className="display mt-2 truncate text-2xl leading-tight transition-colors duration-300 group-hover:text-accent md:text-3xl">
          {project.title}
        </p>
        {project.type && <p className="mt-1 truncate text-sm text-muted">{project.type}</p>}
      </div>
    </Link>
  );
}

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = getProject(slug);
  const [viewing, setViewing] = useState(null);
  const closeViewer = useCallback(() => setViewing(null), []);

  /* Browser tab title */
  useEffect(() => {
    if (!project) return undefined;
    const previous = document.title;
    document.title = `${project.title} — ${SITE.fullName}`;
    return () => {
      document.title = previous;
    };
  }, [project]);

  if (!project) {
    return (
      <section className="section-y page-top">
        <div className="container-x">
          <p className="eyebrow border-t border-line pt-5">{D.eyebrow}</p>
          <h1 className="display t-h1 mt-10 max-w-4xl">
            <Rich text={D.notFound.title} />
          </h1>
          <p className="mt-6 max-w-md text-lg text-ink-soft">{D.notFound.text}</p>
          <Button to="/portfolio" className="mt-10">
            {D.notFound.label}
          </Button>
        </div>
      </section>
    );
  }

  const p = project;
  const position = PROJECTS.findIndex((x) => x.slug === p.slug) + 1;
  const { prev, next } = getNeighbours(p.slug);

  const meta = [
    [D.meta.type, p.type],
    [D.meta.year, p.year],
    [D.meta.role, p.role],
    [D.meta.client, p.client],
    [D.meta.duration, p.duration],
    [D.meta.status, p.status],
  ].filter(([, v]) => v);

  /* The cover is already shown large, so the gallery skips duplicates of it */
  const gallery = (p.screenshots || []).filter((s) => s?.src && s.src !== p.cover);

  /* Build the numbered sections that have content */
  const S = D.sections;
  const blocks = [];
  if (p.overview) blocks.push({ key: "overview", label: S.overview, body: <Paragraphs text={p.overview} lead /> });
  if (p.challenge) blocks.push({ key: "challenge", label: S.challenge, body: <Paragraphs text={p.challenge} /> });
  if (p.solution) blocks.push({ key: "solution", label: S.solution, body: <Paragraphs text={p.solution} /> });
  if (p.features?.length)
    blocks.push({
      key: "features",
      label: S.features,
      body: (
        <ul className="grid gap-x-10 sm:grid-cols-2">
          {p.features.map((f) => (
            <li key={f} className="flex gap-4 border-b border-line py-4 leading-snug text-ink-soft first:pt-0 sm:[&:nth-child(2)]:pt-0">
              <span className="mt-[0.65em] h-px w-5 shrink-0 bg-accent" aria-hidden="true" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      ),
    });
  if (p.stack?.length)
    blocks.push({
      key: "stack",
      label: S.stack,
      body: (
        <ul className="flex flex-wrap gap-2.5">
          {p.stack.map((t) => (
            <li key={t}>
              <Tag className="!px-4 !py-2 !text-[0.75rem] !text-ink">{t}</Tag>
            </li>
          ))}
        </ul>
      ),
    });
  if (p.results?.length)
    blocks.push({
      key: "results",
      label: S.results,
      body: (
        <dl className="grid grid-cols-2 border-y border-line md:grid-cols-4">
          {p.results.map((r, i) => (
            <div
              key={r.label}
              className={`flex flex-col py-6 pr-3 md:border-l md:border-line md:px-6 md:first:border-l-0 md:first:pl-0 ${
                i % 2 ? "border-l border-line pl-4" : ""
              } ${i > 1 ? "border-t border-line md:border-t-0" : ""}`}
            >
              <dt className="eyebrow order-2 mt-3">{r.label}</dt>
              <dd className="display text-4xl leading-none text-accent md:text-5xl">{r.value}</dd>
            </div>
          ))}
        </dl>
      ),
    });

  const links = [
    p.links?.live && { href: p.links.live, label: D.live },
    p.links?.github && { href: p.links.github, label: D.github },
  ].filter(Boolean);

  return (
    <article className="page-top pb-[clamp(4rem,9vw,7rem)]">
      <div className="container-x">
        {/* ── Top rule ── */}
        <div className="fade-up flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
          <Link to="/portfolio" className="eyebrow group inline-flex items-center gap-2 text-ink hover:text-accent">
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" aria-hidden="true" />
            {D.back}
          </Link>
          <p className="eyebrow">
            ({D.eyebrow}) {pad(position)} / {pad(PROJECTS.length)}
          </p>
        </div>

        {/* ── Title ── */}
        <header className="mt-10 grid gap-8 md:mt-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="fade-up eyebrow" style={{ animationDelay: "60ms" }}>
              {[p.category, p.year].filter(Boolean).join(" · ")}
            </p>
            <h1 className="fade-up display t-h1 mt-5 text-balance" style={{ animationDelay: "120ms" }}>
              {p.title}
            </h1>
            {p.summary && (
              <p className="fade-up prose-em mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl" style={{ animationDelay: "180ms" }}>
                <Rich text={p.summary} />
              </p>
            )}
          </div>
          {links.length > 0 && (
            <div className="fade-up flex flex-wrap gap-3 lg:col-span-4 lg:justify-end" style={{ animationDelay: "240ms" }}>
              {links.map((l, i) => (
                <Button key={l.href} href={l.href} variant={i === 0 ? "solid" : "outline"}>
                  {l.label}
                </Button>
              ))}
            </div>
          )}
        </header>

        {/* ── Meta ── */}
        {meta.length > 0 && (
          <dl
            className="fade-up mt-10 grid grid-cols-2 border-y border-line sm:grid-cols-3 lg:flex lg:flex-wrap"
            style={{ animationDelay: "260ms" }}
          >
            {meta.map(([label, value]) => (
              <div key={label} className="border-b border-line py-4 pr-4 lg:flex-1 lg:border-b-0 lg:border-l lg:px-6 lg:first:border-l-0 lg:first:pl-0">
                <dt className="eyebrow !text-[0.62rem]">{label}</dt>
                <dd className="mt-1.5 text-sm font-medium">{value}</dd>
              </div>
            ))}
          </dl>
        )}

        {/* ── Cover ── */}
        {p.cover && (
          <Reveal className="mt-10 md:mt-14">
            <button
              type="button"
              onClick={() => setViewing({ image: p.cover, title: p.title, caption: p.type })}
              className="group relative block w-full text-left"
              aria-label={`View ${p.title} full size`}
            >
              <Media src={p.cover} alt={p.title} ratio="16 / 9" eager className="border border-line" imgClassName="object-top" />
              <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] px-3.5 py-2 text-xs font-medium text-ink shadow-[var(--shadow)] backdrop-blur-md transition-opacity duration-300 pointer-fine:opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100">
                <Expand className="h-3.5 w-3.5" aria-hidden="true" />
                {PORTFOLIO.viewLabel}
              </span>
            </button>
          </Reveal>
        )}

        {/* ── Story ── */}
        {blocks.length > 0 && (
          <div className="mt-14 border-b border-line md:mt-20">
            {blocks.map((b, i) => (
              <Block key={b.key} number={i + 1} label={b.label}>
                {b.body}
              </Block>
            ))}
          </div>
        )}

        {/* ── Screenshots ── */}
        {gallery.length > 0 && (
          <section className="mt-14 md:mt-20">
            <Reveal className="flex items-center justify-between gap-4 border-t border-line pt-5">
              <p className="eyebrow flex items-center gap-3">
                <span className="text-accent">{pad(blocks.length + 1)}</span>
                {S.screenshots}
              </p>
              <span className="font-mono text-xs text-muted">{pad(gallery.length)}</span>
            </Reveal>
            <div className="mt-8 grid gap-x-6 gap-y-10 md:grid-cols-2">
              {gallery.map((s, i) => (
                <Reveal
                  as="figure"
                  key={`${s.caption}-${i}`}
                  delay={(i % 2) * 90}
                  className={gallery.length % 2 === 1 && i === 0 ? "md:col-span-2" : ""}
                >
                  <button
                    type="button"
                    onClick={() => setViewing({ image: s.src, title: s.caption || p.title, caption: p.title })}
                    className="group relative block w-full"
                    aria-label={`View ${s.caption || "screenshot"} full size`}
                  >
                    <Media
                      src={s.src}
                      alt={s.caption || `${p.title} screenshot`}
                      ratio={gallery.length % 2 === 1 && i === 0 ? "16 / 8" : "16 / 10"}
                      className="border border-line"
                      imgClassName="object-top"
                    />
                    <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] text-ink shadow-[var(--shadow)] backdrop-blur-md transition-opacity duration-300 pointer-fine:opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100">
                      <Expand className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </button>
                  {s.caption && (
                    <figcaption className="mt-3 flex items-baseline gap-3 text-sm text-ink-soft">
                      <span className="font-mono text-xs text-muted">{pad(i + 1)}</span>
                      {s.caption}
                    </figcaption>
                  )}
                </Reveal>
              ))}
            </div>
          </section>
        )}

        {/* ── Contact prompt ── */}
        {D.contact && (
          <Reveal className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl border border-line bg-surface p-6 md:mt-24 md:flex-row md:items-center md:p-8">
            <p className="display max-w-xl text-2xl leading-snug md:text-3xl">{D.contact.text}</p>
            <Button to={D.contact.to}>{D.contact.label}</Button>
          </Reveal>
        )}

        {/* ── Previous / next ── */}
        {prev && next && (
          <nav aria-label="More projects" className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <NeighbourCard project={prev} direction="prev" />
            <NeighbourCard project={next} direction="next" />
          </nav>
        )}
      </div>

      <Lightbox item={viewing} onClose={closeViewer} />
    </article>
  );
}
