import { TRAINING } from "../content";
import { Reveal, SectionHead } from "./ui";

/* Bento placement for a 4-column grid; extra items flow into single cells */
const SPANS = [
  "md:col-span-2 lg:col-span-2 lg:row-span-2",
  "",
  "",
  "lg:row-span-2",
  "md:col-span-2 lg:col-span-2",
  "",
  "",
  "md:col-span-2 lg:col-span-2",
  "md:col-span-2 lg:col-span-2",
];

export default function TrainingBentoGrid({ index }) {
  return (
    <section id="training" className="section-y bg-surface">
      <div className="container-x">
        <SectionHead index={index} eyebrow={TRAINING.eyebrow} title={TRAINING.title} intro={TRAINING.intro} />

        <div className="grid auto-rows-[15rem] grid-flow-dense gap-3 md:grid-cols-2 md:gap-4 lg:auto-rows-[14rem] lg:grid-cols-4">
          {TRAINING.items.map((item, i) => (
            <Reveal
              as="figure"
              key={item.title}
              delay={(i % 4) * 70}
              className={`group frame relative !rounded-xl border border-line ${SPANS[i] || ""}`}
            >
              <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white md:p-6">
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-white/70">{item.category}</span>
                <h3 className={`display mt-1 leading-tight ${i === 0 ? "text-4xl md:text-5xl" : "text-2xl md:text-[1.7rem]"}`}>
                  {item.title}
                </h3>
                <div className="collapse-grid hover-expand">
                  <div>
                    <p className="pt-2 text-sm leading-relaxed text-white/80">{item.description}</p>
                  </div>
                </div>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
