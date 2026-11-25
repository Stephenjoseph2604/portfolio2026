import { PORTFOLIO } from "../content";

/* Projects with a guaranteed, unique slug (falls back to the title if a slug is missing) */
const slugify = (s) =>
  String(s || "project")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const seen = new Map();
export const PROJECTS = (PORTFOLIO.projects || []).map((p) => {
  const base = p.slug || slugify(p.title);
  const n = (seen.get(base) || 0) + 1;
  seen.set(base, n);
  return { ...p, slug: n === 1 ? base : `${base}-${n}` };
});

export const projectPath = (p) => `/portfolio/${p.slug}`;

export const getProject = (slug) => PROJECTS.find((p) => p.slug === slug) || null;

/* Previous / next project (wrapping around) for the detail page */
export function getNeighbours(slug) {
  const i = PROJECTS.findIndex((p) => p.slug === slug);
  if (i === -1 || PROJECTS.length < 2) return { prev: null, next: null };
  return {
    prev: PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length],
    next: PROJECTS[(i + 1) % PROJECTS.length],
  };
}
