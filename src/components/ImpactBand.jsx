import { ArrowLink, Reveal } from "./ui";

const initials = (name) =>
  name
    .replace(/[^A-Za-z ]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

/*  Impact band — photo proof + four numbers + "trusted by" names + a quote.
    Used twice on the home page (training and projects). `reverse` puts the
    photo on the right so the two bands don't look identical.              */
export default function ImpactBand({ data, reverse = false }) {
  if (!data) return null;
  const { photo, metrics = [], quote } = data;
  const names = data.institutions || data.clients || [];

  const photoPlace = reverse ? "lg:col-start-8" : "lg:col-start-1";
  const restPlace = reverse ? "lg:col-start-1" : "lg:col-start-6";

  return (
    <section aria-label={data.label} className="pb-16 md:pb-24">
      <div className="container-x">
        <Reveal className="mb-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5 md:mb-10">
          <p className="eyebrow flex items-center gap-3 text-ink">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            {data.label}
          </p>
          {data.action && <ArrowLink to={data.action.to}>{data.action.label}</ArrowLink>}
        </Reveal>

        <div className="grid gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-12">
          {/* ── Photo proof ── */}
          {photo?.src && (
            <Reveal
              as="figure"
              className={`group frame relative min-h-[18rem] !rounded-2xl border border-line md:col-span-2 md:min-h-[22rem] lg:col-span-5 lg:row-span-2 lg:row-start-1 lg:min-h-0 ${photoPlace}`}
            >
              <img
                src={photo.src}
                alt={photo.alt || ""}
                loading="lazy"
                decoding="async"
                className="absolute inset-0"
                style={photo.position ? { objectPosition: photo.position } : undefined}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" aria-hidden="true" />
              {photo.tag && (
                <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/45 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#e2b04a]" aria-hidden="true" />
                  {photo.tag}
                </span>
              )}
              {photo.caption && (
                <figcaption className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <span className="display block text-2xl leading-tight text-white md:text-[1.9rem]">{photo.caption}</span>
                </figcaption>
              )}
            </Reveal>
          )}

          {/* ── Impact numbers ── */}
          {metrics.length > 0 && (
            <dl className={`grid grid-cols-2 gap-3 md:col-span-2 md:gap-4 lg:col-span-7 lg:row-start-1 lg:grid-cols-4 ${restPlace}`}>
              {metrics.map((m, i) => (
                <Reveal
                  key={m.label}
                  delay={i * 70}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface p-5 transition-colors duration-300 hover:border-line-strong md:p-6"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out-soft group-hover:scale-x-100"
                  />
                  <dt className="order-2 mt-6">
                    <span className="eyebrow block text-ink">{m.label}</span>
                    {m.note && <span className="mt-1.5 block text-sm leading-snug text-muted">{m.note}</span>}
                  </dt>
                  <dd className="order-1 display text-[2.6rem] leading-none md:text-5xl">{m.value}</dd>
                </Reveal>
              ))}
            </dl>
          )}

          {/* ── Trusted by + quote ── */}
          <Reveal
            delay={120}
            className={`grid gap-8 rounded-2xl border border-line bg-surface p-6 md:col-span-2 md:grid-cols-2 md:p-8 lg:col-span-7 lg:row-start-2 ${restPlace}`}
          >
            <div>
              {data.trustedLabel && <p className="eyebrow">{data.trustedLabel}</p>}
              {names.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2.5">
                  {names.map((n) => (
                    <li key={n.name} className="flex items-center gap-3 rounded-full border border-line-strong bg-bg py-2 pl-2 pr-5">
                      {n.logo ? (
                        <span className="plate grid h-9 w-9 shrink-0 place-items-center !rounded-full p-1.5">
                          <img src={n.logo} alt="" loading="lazy" decoding="async" className="h-full w-full object-contain" />
                        </span>
                      ) : (
                        <span
                          aria-hidden="true"
                          className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink font-mono text-[0.7rem] font-medium text-bg"
                        >
                          {initials(n.name)}
                        </span>
                      )}
                      <span className="leading-tight">
                        <span className="display block text-xl">{n.name}</span>
                        {n.note && <span className="block font-mono text-[0.62rem] uppercase tracking-[0.12em] text-muted">{n.note}</span>}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              {data.more && <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-soft">{data.more}</p>}
            </div>

            {quote?.text && (
              <blockquote className="flex flex-col justify-center border-l-2 border-accent pl-5 md:pl-6">
                <p className="display text-2xl italic leading-snug md:text-[1.7rem]">“{quote.text}”</p>
                <footer className="mt-4">
                  <span className="block text-sm font-semibold">{quote.author}</span>
                  {quote.role && <span className="block text-sm text-muted">{quote.role}</span>}
                </footer>
              </blockquote>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
