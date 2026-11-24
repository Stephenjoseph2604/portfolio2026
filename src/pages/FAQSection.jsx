import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQ } from "../content";
import { ArrowLink, Reveal, Rich } from "../components/ui";

export default function FAQSection({ index }) {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section-y">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal className="border-t border-line pt-5">
                <p className="eyebrow flex items-center gap-3">
                  {index && <span className="text-ink">({index})</span>}
                  <span>{FAQ.eyebrow}</span>
                </p>
              </Reveal>
              <Reveal as="h2" className="display t-h2 mt-8 md:mt-12">
                <Rich text={FAQ.title} />
              </Reveal>
              <Reveal as="p" delay={100} className="mt-6 max-w-sm text-lg leading-relaxed text-ink-soft">
                {FAQ.intro}
              </Reveal>
              {FAQ.prompt && (
                <Reveal delay={160} className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-ink-soft">
                  <span>{FAQ.prompt.text}</span>
                  <ArrowLink to={FAQ.prompt.to}>{FAQ.prompt.label}</ArrowLink>
                </Reveal>
              )}
            </div>
          </div>

          <ul className="border-b border-line lg:col-span-7">
            {FAQ.items.map((item, i) => {
              const isOpen = open === i;
              const id = `faq-${i}`;
              return (
                <Reveal as="li" key={item.question} delay={i * 50} className="border-t border-line">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      aria-controls={id}
                      className="group flex w-full items-start gap-5 py-6 text-left md:py-7"
                    >
                      <span className="pt-1 font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
                      <span
                        className={`flex-1 text-lg font-medium leading-snug transition-colors duration-300 md:text-xl ${
                          isOpen ? "text-ink" : "text-ink-soft group-hover:text-ink"
                        }`}
                      >
                        {item.question}
                      </span>
                      <span
                        className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-[background-color,border-color,color,transform] duration-500 ease-out-soft ${
                          isOpen ? "rotate-45 border-ink bg-ink text-bg" : "border-line-strong text-ink group-hover:border-ink"
                        }`}
                        aria-hidden="true"
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>
                  </h3>
                  <div id={id} role="region" className={`collapse-grid ${isOpen ? "is-open" : ""}`}>
                    <div>
                      <p className="max-w-2xl pb-7 pl-9 pr-12 leading-relaxed text-ink-soft md:pl-10">{item.answer}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
