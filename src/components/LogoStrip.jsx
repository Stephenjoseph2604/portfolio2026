import { TOOLKIT } from "../content";
import { Marquee } from "./ui";

export default function LogoStrip() {
  return (
    <section aria-label={TOOLKIT.label} className="border-y border-line bg-surface py-7 md:py-9">
      <p className="sr-only">{TOOLKIT.items.join(", ")}</p>
      <Marquee duration={50} className="[mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        {TOOLKIT.items.map((item, i) => (
          <span key={item} className="flex items-center" aria-hidden="true">
            <span className={`display px-6 text-4xl leading-none md:px-10 md:text-6xl ${i % 2 ? "italic text-accent" : "text-ink"}`}>
              {item}
            </span>
            <span className="h-2 w-2 rotate-45 border border-line-strong" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}
