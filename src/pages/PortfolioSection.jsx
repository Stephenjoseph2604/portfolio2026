import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SELECTED_WORK } from "../content";
import { getProject, projectPath } from "../lib/projects";
import CursorStage from "../components/CursorStage";
import { ArrowLink, Media, Reveal, SectionHead } from "../components/ui";

function WorkCard({ project, large, delay }) {
  return (
    <Reveal delay={delay} className={large ? "md:col-span-2" : ""}>
      <Link to={projectPath(project)} className="group block" aria-label={`${project.title} — ${SELECTED_WORK.viewLabel}`}>
        <CursorStage label={SELECTED_WORK.viewLabel}>
          <Media
            src={project.cover}
            alt={project.title}
            ratio={large ? "16 / 8" : "4 / 3"}
            className="border border-line [&_img]:!duration-[1400ms]"
            imgClassName="object-top"
          />
        </CursorStage>

        <div className="mt-5 flex items-start justify-between gap-6">
          <div>
            <h3 className="display t-h3 inline-flex items-center gap-3 transition-colors duration-300 group-hover:text-accent">
              {project.title}
              <ArrowUpRight
                aria-hidden="true"
                className="h-5 w-5 -translate-x-2 opacity-0 transition-[opacity,translate] duration-500 ease-out-soft group-hover:translate-x-0 group-hover:opacity-100"
              />
            </h3>
            {project.type && <p className="mt-2 text-sm text-ink-soft">{project.type}</p>}
          </div>
          {project.year && <span className="font-mono text-sm text-muted">{project.year}</span>}
        </div>

        {project.stack?.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs uppercase tracking-[0.08em] text-muted">
            {project.stack.slice(0, 4).map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}
      </Link>
    </Reveal>
  );
}

export default function PortfolioSection({ index }) {
  const { action } = SELECTED_WORK;
  const projects = (SELECTED_WORK.featured || []).map(getProject).filter(Boolean);
  if (!projects.length) return null;

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
          {projects.map((p, i) => (
            <WorkCard key={p.slug} project={p} large={i === 0} delay={i % 2 ? 120 : 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
