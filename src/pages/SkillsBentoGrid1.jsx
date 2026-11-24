import { SKILLS } from "../content";
import { Reveal, SectionHead } from "../components/ui";

function groupByCategory(items) {
  const groups = new Map();
  items.forEach((item) => {
    if (!groups.has(item.category)) groups.set(item.category, []);
    groups.get(item.category).push(item);
  });
  return [...groups.entries()];
}

export default function SkillsSection({ index }) {
  const groups = groupByCategory(SKILLS.items);

  return (
    <section id="skills" className="section-y">
      <div className="container-x">
        <SectionHead index={index} eyebrow={SKILLS.eyebrow} title={SKILLS.title} intro={SKILLS.intro} />

        <div className="border-b border-line">
          {groups.map(([category, items], gi) => (
            <Reveal
              key={category}
              delay={gi * 40}
              className="grid gap-5 border-t border-line py-7 md:grid-cols-12 md:gap-8 md:py-9"
            >
              <div className="flex items-baseline gap-3 md:col-span-3">
                <h3 className="display text-3xl italic">{category}</h3>
                <span className="font-mono text-xs text-muted">{String(items.length).padStart(2, "0")}</span>
              </div>
              <ul className="flex flex-wrap gap-2.5 md:col-span-9">
                {items.map((s) => (
                  <li
                    key={s.name}
                    className="flex items-center gap-3 rounded-full border border-line bg-surface py-1.5 pl-1.5 pr-4 transition-colors duration-300 hover:border-line-strong"
                  >
                    <span className="plate grid h-8 w-8 place-items-center !rounded-full p-1.5">
                      <img src={s.logo} alt="" loading="lazy" decoding="async" className="h-full w-full object-contain" />
                    </span>
                    <span className="text-sm font-medium">{s.name}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
