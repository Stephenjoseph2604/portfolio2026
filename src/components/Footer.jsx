import { ArrowUp, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FOOTER, NAV, PLATFORMS, SITE, SOCIALS } from "../content";
import { useClock } from "../lib/hooks";
import { scrollToTop } from "../lib/smooth";
import { Button, Rich } from "./ui";

/* Size the giant name so it always fits the width, whatever its length */
const WORDMARK_CHARS = `${SITE.firstName} ${SITE.lastName}`.length;
const WORDMARK_SIZE = `${Math.min(17, 100 / (WORDMARK_CHARS * 0.43)).toFixed(2)}cqi`;

function Column({ title, children }) {
  return (
    <div>
      <p className="eyebrow mb-5">{title}</p>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  );
}

function ExternalItem({ href, label }) {
  return (
    <li>
      <a href={href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1.5 text-ink-soft hover:text-ink">
        <span className="link-u">{label}</span>
        <ArrowUpRight className="h-3.5 w-3.5 opacity-50 transition-opacity group-hover:opacity-100" aria-hidden="true" />
      </a>
    </li>
  );
}

export default function Footer() {
  const time = useClock(SITE.timeZone);
  const year = new Date().getFullYear();

  return (
    <footer className="pt-[clamp(4rem,9vw,7rem)]">
      <div className="container-x">
        {/* Headline + email */}
        <div className="grid gap-10 border-b border-line pb-14 lg:grid-cols-12 lg:items-end">
          <h2 className="display t-h2 lg:col-span-7">
            <Rich text={FOOTER.headline} />
          </h2>
          <div className="lg:col-span-5 lg:justify-self-end lg:text-right">
            <p className="max-w-sm leading-relaxed text-ink-soft lg:ml-auto">{FOOTER.text}</p>
            <a href={`mailto:${SITE.email}`} className="link-u display mt-5 inline-block text-2xl break-all sm:break-normal md:text-3xl">
              {SITE.email}
            </a>
            <div className="mt-6 lg:flex lg:justify-end">
              <Button to={FOOTER.cta.to}>{FOOTER.cta.label}</Button>
            </div>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 gap-10 py-14 md:grid-cols-4">
          <Column title={FOOTER.columns.pages}>
            {NAV.links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="link-u text-ink-soft hover:text-ink">
                  {l.label}
                </Link>
              </li>
            ))}
          </Column>
          <Column title={FOOTER.columns.platforms}>
            {PLATFORMS.map((p) => (
              <ExternalItem key={p.label} {...p} />
            ))}
          </Column>
          <Column title={FOOTER.columns.connect}>
            {SOCIALS.map((s) => (
              <ExternalItem key={s.label} {...s} />
            ))}
          </Column>
          <div>
            <p className="eyebrow mb-5">{FOOTER.columns.local}</p>
            <p className="display text-4xl tabular-nums">{time}</p>
            <p className="mt-2 text-sm text-ink-soft">
              {SITE.location} · {SITE.timeZoneLabel}
            </p>
          </div>
        </div>
      </div>

      {/* Wordmark */}
      <div className="container-x overflow-hidden [container-type:inline-size]" aria-hidden="true">
        <p
          className="display select-none whitespace-nowrap text-center leading-[0.8] tracking-[-0.03em] text-ink"
          style={{ fontSize: WORDMARK_SIZE }}
        >
          {SITE.firstName} <em className="text-accent">{SITE.lastName}</em>
        </p>
      </div>

      {/* Bottom bar */}
      <div className="container-x">
        <div className="mt-8 flex flex-col gap-4 border-t border-line py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.legalName}. <span className="hidden sm:inline">{SITE.builtWith}.</span>
          </p>
          <button type="button" onClick={() => scrollToTop({ immediate: false })} className="group inline-flex items-center gap-2 self-start hover:text-ink sm:self-auto">
            {FOOTER.backToTop}
            <span className="grid h-8 w-8 place-items-center rounded-full border border-line transition-colors group-hover:border-ink">
              <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
