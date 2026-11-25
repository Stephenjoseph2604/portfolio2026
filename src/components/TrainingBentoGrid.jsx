import { TRAINING } from "../content";
import { Reveal, SectionHead } from "./ui";

/*  Bento placement for 11 cards, planned so there are no gaps at any size:
    • phone (1 col)    every card one row
    • tablet (2 cols)  hero 2×2, one tall, one wide, the rest in pairs → 8 even rows
    • desktop (4 cols) hero 2×2, three tall and three wide cards → 5 full rows
        ┌────┬────┬──┬──┐
        │ 0  │ 0  │1 │2 │
        │ 0  │ 0  │3 │5 │
        │ 4  │ 4  │3 │6 │
        │ 7  │ 8  │8 │9 │
        │ 7  │ 10 │10│9 │
        └────┴────┴──┴──┘
    If you add or remove training items, extra cards flow in as single cells. */
const SPANS = [
  "md:col-span-2 md:row-span-2", // 0  hero
  "", //                            1
  "", //                            2
  "md:row-span-2", //               3  tall
  "md:col-span-2", //               4  wide
  "", //                            5
  "", //                            6
  "lg:row-span-2", //               7  tall on desktop
  "lg:col-span-2", //               8  wide on desktop
  "lg:row-span-2", //               9  tall on desktop
  "lg:col-span-2", //               10 wide on desktop
];

/* Deep shadow at the bottom so titles and text stay readable on any photo */
const SHADE =
  "bg-[linear-gradient(to_top,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.62)_32%,rgba(0,0,0,0.18)_62%,rgba(0,0,0,0)_85%)]";

export default function TrainingBentoGrid({ index }) {
  return (
    <section id="training" className="section-y bg-surface">
      <div className="container-x">
        <SectionHead index={index} eyebrow={TRAINING.eyebrow} title={TRAINING.title} intro={TRAINING.intro} />

        <div className="grid auto-rows-[17rem] grid-flow-dense gap-3 md:grid-cols-2 md:auto-rows-[16.5rem] md:gap-4 lg:auto-rows-[18rem] lg:grid-cols-4">
          {TRAINING.items.map((item, i) => {
            const hero = i === 0;
            return (
              <Reveal
                as="figure"
                key={`${item.title}-${i}`}
                delay={(i % 4) * 70}
                className={`group frame relative !rounded-xl border border-line ${SPANS[i] || ""}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  style={item.position ? { objectPosition: item.position } : undefined}
                />
                <div className={`pointer-events-none absolute inset-0 ${SHADE}`} aria-hidden="true" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white md:p-6">
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-white/75">{item.category}</span>
                  <h3
                    className={`display mt-1 leading-tight [text-shadow:0_2px_14px_rgba(0,0,0,0.45)] ${
                      hero ? "text-3xl sm:text-4xl md:text-5xl" : "text-2xl md:text-[1.7rem]"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <div className="collapse-grid hover-expand">
                    <div>
                      <p className={`pt-2 text-sm leading-relaxed text-white/85 ${hero ? "line-clamp-3 max-w-md md:line-clamp-none md:text-base" : "line-clamp-3"}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </figcaption>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
