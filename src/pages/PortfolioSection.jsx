import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { SELECTED_WORK } from "../content";
import { ArrowLink, Media, Reveal, SectionHead, SmartLink } from "../components/ui";

/*  Hover (mouse): the cursor becomes a "View project" pill that follows the
    pointer, the image dims slightly and slowly zooms.
    Touch: a small arrow badge sits in the corner instead.
    The pill position is written to CSS variables — no React re-renders.   */
function WorkCard({ project, large, delay }) {
  const stage = useRef(null);

  const follow = (e) => {
    const el = stage.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <Reveal delay={delay} className={large ? "md:col-span-2" : ""}>
      <SmartLink to={project.to} href={project.href} className="group block" aria-label={`${project.title} — ${SELECTED_WORK.viewLabel}`}>
        <div
          ref={stage}
          onMouseEnter={follow}
          onMouseMove={follow}
          className="relative overflow-hidden rounded-xl pointer-fine:cursor-none"
        >
          <Media
            src={project.image}
            alt={project.title}
            ratio={large ? "16 / 8" : "4 / 3"}
            className="border border-line [&_img]:!duration-[1400ms]"
            imgClassName="object-top"
          />

          {/* soft dim from the bottom on hover */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-black/45 via-black/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          />

          {/* cursor-following pill (mouse / trackpad) */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 hidden items-center gap-2 whitespace-nowrap rounded-full border border-white/25 bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] py-2.5 pl-5 pr-2.5 text-sm font-medium text-ink shadow-[var(--shadow)] backdrop-blur-md ease-out-soft pointer-fine:inline-flex opacity-0 scale-50 group-hover:scale-100 group-hover:opacity-100"
            style={{
              transform: "translate3d(calc(var(--mx, 50%) - 50%), calc(var(--my, 50%) - 50%), 0)",
              transitionProperty: "opacity, scale, transform",
              transitionDuration: "0.5s, 0.5s, 0.18s",
            }}
          >
            {SELECTED_WORK.viewLabel}
            <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-accent-contrast">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </span>

          {/* corner badge (touch screens, and keyboard focus) */}
          <span
            aria-hidden="true"
            className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] text-ink shadow-[var(--shadow)] backdrop-blur-md transition-opacity duration-300 pointer-fine:opacity-0 group-focus-visible:!opacity-100"
          >
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>

        <div className="mt-5 flex items-start justify-between gap-6">
          <div>
            <h3 className="display t-h3 inline-flex items-center gap-3 transition-colors duration-300 group-hover:text-accent">
              {project.title}
              <ArrowUpRight
                aria-hidden="true"
                className="h-5 w-5 -translate-x-2 opacity-0 transition-[opacity,translate] duration-500 ease-out-soft group-hover:translate-x-0 group-hover:opacity-100"
              />
            </h3>
            <p className="mt-2 text-sm text-ink-soft">{project.category}</p>
          </div>
          <span className="font-mono text-sm text-muted">{project.year}</span>
        </div>

        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs uppercase tracking-[0.08em] text-muted">
          {project.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </SmartLink>
    </Reveal>
  );
}

export default function PortfolioSection({ index }) {
  const { action } = SELECTED_WORK;
  return (
    <section id="work" className="section-y pt-0">
      <div className="container-x">
        <SectionHead
          index={index}
          eyebrow={SELECTED_WORK.eyebrow}
          title={SELECTED_WORK.title}
          intro={SELECTED_WORK.intro}
          action={action && <ArrowLink to={action.to}>{action.label}</ArrowLink>}
        />

        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 md:gap-y-20">
          {SELECTED_WORK.projects.map((p, i) => (
            <WorkCard key={p.title} project={p} large={i === 0} delay={i % 2 ? 120 : 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
