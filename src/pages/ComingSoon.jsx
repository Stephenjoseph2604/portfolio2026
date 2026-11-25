import { useEffect, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { COMING_SOON as CS, SITE, SOCIALS } from "../content";
import { useClock, useNow } from "../lib/hooks";
import { Rich, ThemeSwitch } from "../components/ui";

const pad = (n) => String(n).padStart(2, "0");

function timeLeft(target, now) {
  const ms = target - now;
  if (!Number.isFinite(ms) || ms <= 0) return null;
  const s = Math.floor(ms / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

/* ── Live countdown to CS.launchDate ── */
function Countdown() {
  const now = useNow(1000);
  const target = CS.launchDate ? new Date(CS.launchDate).getTime() : NaN;
  if (Number.isNaN(target)) return null;

  const left = timeLeft(target, now);
  if (!left) {
    return <p className="display text-3xl italic text-accent">{CS.launchedText}</p>;
  }

  const units = ["days", "hours", "minutes", "seconds"];
  return (
    <dl className="grid max-w-xl grid-cols-4 border-y border-line" aria-live="off">
      {units.map((u, i) => (
        <div key={u} className={`flex flex-col py-5 ${i ? "border-l border-line pl-4 md:pl-6" : "pr-4"}`}>
          <dt className="eyebrow order-2 mt-2 !text-[0.62rem]">{CS.countdownLabels[u]}</dt>
          <dd className="display text-[2.5rem] leading-none tabular-nums md:text-6xl">
            {u === "days" ? left.days : pad(left[u])}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/* ── Email capture (opens the visitor's mail app — no backend needed) ── */
function NotifyForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const n = CS.notify;

  const submit = (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      setError(n.error);
      return;
    }
    const body = n.emailBody.replaceAll("{email}", email.trim());
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(n.emailSubject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  if (sent) {
    return (
      <p className="fade-up flex max-w-xl items-start gap-3 rounded-2xl border border-line bg-surface p-4 text-ink-soft">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent text-accent-contrast">
          <Check className="h-4 w-4" aria-hidden="true" />
        </span>
        {n.success}
      </p>
    );
  }

  return (
    <form noValidate onSubmit={submit} className="max-w-xl">
      <label htmlFor="cs-email" className="eyebrow block">
        {n.label}
      </label>
      <div className="mt-3 flex items-center gap-2 rounded-full border border-line-strong bg-surface p-1.5 pl-5 transition-colors focus-within:border-ink">
        <input
          id="cs-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError("");
          }}
          placeholder={n.placeholder}
          aria-invalid={!!error}
          aria-describedby="cs-email-error"
          className="min-w-0 flex-1 bg-transparent text-base text-ink outline-none placeholder:text-muted"
        />
        <button
          type="submit"
          className="group/btn inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-ink px-5 text-sm font-medium text-bg transition-colors duration-300 hover:bg-accent hover:text-accent-contrast"
        >
          {n.button}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" aria-hidden="true" />
        </button>
      </div>
      <p id="cs-email-error" role="alert" className="mt-2 min-h-[1.25rem] text-sm text-accent">
        {error}
      </p>
    </form>
  );
}

/* ── Rotating emblem: ring text around the SJ monogram ── */
function Emblem() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[26rem]" aria-hidden="true">
      {/* concentric hairlines */}
      <div className="absolute inset-0 rounded-full border border-line" />
      <div className="absolute inset-[9%] rounded-full border border-line" />
      {/* orbiting brass dot */}
      <div className="seal-rotate absolute inset-0" style={{ animationDuration: "18s" }}>
        <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_0_6px_var(--accent-soft)]" />
      </div>
      {/* ring text */}
      <svg viewBox="0 0 200 200" className="seal-rotate absolute inset-[9%] h-[82%] w-[82%] text-ink" style={{ animationDuration: "40s" }}>
        <defs>
          <path id="cs-ring" d="M100,100 m-84,0 a84,84 0 1,1 168,0 a84,84 0 1,1 -168,0" />
        </defs>
        <text className="fill-current font-mono uppercase" style={{ fontSize: 9.5, letterSpacing: "0.22em" }}>
          <textPath href="#cs-ring" textLength="524" lengthAdjust="spacing">
            {CS.ring}
          </textPath>
        </text>
      </svg>
      {/* center disc */}
      <div className="absolute inset-[27%] grid place-items-center rounded-full bg-invert-bg shadow-[var(--shadow)]">
        <img src={SITE.logo} alt="" className="h-[46%] w-[46%] object-contain" />
      </div>
    </div>
  );
}

export default function ComingSoon() {
  const time = useClock(SITE.timeZone);

  useEffect(() => {
    if (CS.pageTitle) document.title = CS.pageTitle;
  }, []);

  return (
    <div className="relative flex min-h-svh flex-col overflow-hidden">
      {/* soft brass glow behind the emblem */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/4 h-[36rem] w-[36rem] rounded-full opacity-60"
        style={{ background: "radial-gradient(circle, var(--accent-soft) 0%, transparent 65%)" }}
      />

      {/* ── Top bar ── */}
      <header className="container-x relative flex h-20 items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface">
            <img src={SITE.logo} alt="" className="h-6 w-6 object-contain" width="24" height="24" />
          </span>
          <span className="leading-tight">
            <span className="block text-[0.95rem] font-semibold tracking-tight">{SITE.fullName}</span>
            <span className="eyebrow block !text-[0.62rem]">{SITE.roleShort}</span>
          </span>
        </div>
        <ThemeSwitch />
      </header>

      {/* ── Main ── */}
      <main className="container-x relative flex flex-1 items-center py-10 md:py-14">
        <div className="grid w-full items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="fade-up eyebrow flex items-center gap-2.5 text-ink">
              <span className="status-dot" aria-hidden="true" />
              {CS.eyebrow}
            </p>

            <h1 className="fade-up display t-h1 mt-7 max-w-3xl text-balance" style={{ animationDelay: "100ms" }}>
              <Rich text={CS.title} />
            </h1>

            <p className="fade-up mt-7 max-w-xl text-lg leading-relaxed text-ink-soft" style={{ animationDelay: "180ms" }}>
              {CS.text}
            </p>

            <div className="fade-up mt-10" style={{ animationDelay: "260ms" }}>
              <Countdown />
            </div>

            {typeof CS.progress === "number" && (
              <div className="fade-up mt-8 max-w-xl" style={{ animationDelay: "320ms" }}>
                <div className="flex items-baseline justify-between">
                  <span className="eyebrow">{CS.progressLabel}</span>
                  <span className="font-mono text-sm tabular-nums text-ink">{CS.progress}%</span>
                </div>
                <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-line">
                  <div
                    className="h-full origin-left rounded-full bg-accent"
                    style={{ width: `${Math.max(0, Math.min(100, CS.progress))}%`, animation: "progress 1.6s cubic-bezier(0.2,0.7,0.2,1) both" }}
                  />
                </div>
              </div>
            )}

            <div className="fade-up mt-10" style={{ animationDelay: "380ms" }}>
              <NotifyForm />
              <p className="mt-2 text-sm text-ink-soft">
                {CS.directLabel}{" "}
                <a href={`mailto:${SITE.email}`} className="link-u font-medium text-ink">
                  {SITE.email}
                </a>
              </p>
            </div>
          </div>

          <div className="fade-up lg:col-span-5 md:self-start mt-4" style={{ animationDelay: "200ms" }}>
            <Emblem />
          </div>
        </div>
      </main>

      {/* ── Bottom bar ── */}
      <footer className="container-x relative">
        <div className="flex flex-col gap-4 border-t border-line py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.legalName} · <span className="tabular-nums">{SITE.locationShort} — {time} {SITE.timeZoneLabel}</span>
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1 text-ink-soft hover:text-ink">
                  <span className="link-u">{s.label}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-50 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}
