import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowUpRight, Check, LoaderCircle, X } from "lucide-react";
import { CONTACT, PROGRAMS, SITE, SOCIALS } from "../content";
import { SEND_ERROR, sendContactEmail } from "../lib/email";
import { scrollToElement } from "../lib/smooth";
import { Reveal, SectionHead } from "../components/ui";

const EMPTY = { name: "", email: "", subject: "", message: "" };
const F = CONTACT.form;
const B = F.booking;

/* Replace {program}, {duration}, {format} with the chosen program's details */
const fill = (template, program) =>
  String(template || "")
    .replaceAll("{program}", program.title)
    .replaceAll("{duration}", program.duration || "")
    .replaceAll("{format}", program.format || "");

const initialForm = (program) =>
  program && B ? { ...EMPTY, subject: B.subject, message: fill(B.message, program) } : EMPTY;

/* Spam protection: anything submitted faster than a human could fill the form,
   or with the hidden honeypot field filled in, is quietly dropped. */
const MIN_FILL_MS = 2500;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/* Trim every field (and collapse runs of spaces in the name) before validating/sending */
const cleanForm = (form) => ({
  name: form.name.trim().replace(/\s+/g, " "),
  email: form.email.trim(),
  subject: form.subject,
  message: form.message.trim(),
});

function validate(form) {
  const e = {};
  if (!form.name) e.name = F.errors.name;
  if (!EMAIL_RE.test(form.email)) e.email = F.errors.email;
  if (!form.subject) e.subject = F.errors.subject;
  if (!form.message) e.message = F.errors.message;
  return e;
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow block">
        {label}
      </label>
      {children}
      <p id={`${id}-error`} role="alert" className="mt-2 min-h-[1.25rem] text-sm text-accent">
        {error}
      </p>
    </div>
  );
}

const inputClass = (error) =>
  `mt-2 w-full border-0 border-b bg-transparent pb-3 pt-1 text-lg text-ink outline-none transition-colors duration-300 placeholder:text-muted/70 focus:border-ink ${
    error ? "border-accent" : "border-line-strong"
  }`;

function ContactForm({ program }) {
  const [form, setForm] = useState(() => initialForm(program));
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(null); // null | SEND_ERROR value
  const sendingRef = useRef(false); // blocks double-clicks before React re-renders
  const honeypotRef = useRef(null);
  const openedAt = useRef(0);

  useEffect(() => {
    openedAt.current = Date.now();
  }, []);

  const update = (name, value) => {
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: "" }));
    if (sendError) setSendError(null);
  };

  const succeed = () => {
    setForm(initialForm(program)); // clear the form only after a confirmed send
    setErrors({});
    setSent(true);
  };

  const submit = async (ev) => {
    ev.preventDefault();
    if (sendingRef.current) return;

    const clean = cleanForm(form);
    const errs = validate(clean);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSendError(null);

    const looksLikeBot = Boolean(honeypotRef.current?.value) || Date.now() - openedAt.current < MIN_FILL_MS;
    if (looksLikeBot) {
      succeed(); // pretend it worked; nothing is sent
      return;
    }

    sendingRef.current = true;
    setSending(true);
    try {
      await sendContactEmail({
        name: clean.name,
        email: clean.email,
        title: program && B ? fill(B.emailSubject, program) : clean.subject,
        message: clean.message,
      });
      succeed();
    } catch (err) {
      setSendError(err?.reason === SEND_ERROR.RATE_LIMITED ? SEND_ERROR.RATE_LIMITED : SEND_ERROR.FAILED);
    } finally {
      sendingRef.current = false;
      setSending(false);
    }
  };

  const reset = () => {
    setForm(initialForm(program));
    setErrors({});
    setSendError(null);
    setSent(false);
    openedAt.current = Date.now();
  };

  return (
            <div id="contact-form" className="rounded-2xl border border-line bg-surface p-6 sm:p-8 md:p-10">
              {sent ? (
                <div className="fade-up flex min-h-[28rem] flex-col items-start justify-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-contrast">
                    <Check className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h2 className="display t-h3 mt-6">{F.successTitle}</h2>
                  <p className="mt-3 max-w-md leading-relaxed text-ink-soft">
                    {F.successText}{" "}
                    <a href={`mailto:${SITE.email}`} className="link-u font-medium text-ink">
                      {SITE.email}
                    </a>
                    .
                  </p>
                  <button type="button" onClick={reset} className="eyebrow mt-8 text-ink hover:text-accent">
                    ← {F.successReset}
                  </button>
                </div>
              ) : (
                <form noValidate onSubmit={submit} aria-busy={sending}>
                  {/* Honeypot: invisible to people, tempting to bots. Leave it empty. */}
                  <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
                    <label htmlFor="cf-website">Website (leave blank)</label>
                    <input ref={honeypotRef} id="cf-website" name="website_url" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
                  </div>

                  <div className="mb-8 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <h2 className="display text-3xl">{F.title}</h2>
                    <p className="font-mono text-xs text-muted">{F.note}</p>
                  </div>

                  {program && B && (
                    <div className="mb-8 flex items-start justify-between gap-4 rounded-xl border border-accent/40 bg-accent-soft p-4 sm:p-5">
                      <div>
                        <p className="eyebrow text-ink">{B.label}</p>
                        <p className="display mt-1.5 text-2xl leading-tight md:text-3xl">{program.title}</p>
                        <p className="mt-1 font-mono text-xs text-ink-soft">
                          {[program.duration, program.format].filter(Boolean).join(" · ")}
                        </p>
                      </div>
                      <Link
                        to="/contact"
                        replace
                        className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line-strong px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:border-ink"
                      >
                        <X className="h-3.5 w-3.5" aria-hidden="true" />
                        {B.clear}
                      </Link>
                    </div>
                  )}

                  <div className="grid gap-x-8 sm:grid-cols-2">
                    <Field id="cf-name" label={F.labels.name} error={errors.name}>
                      <input
                        id="cf-name"
                        name="name"
                        autoComplete="name"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        placeholder={F.placeholders.name}
                        aria-invalid={!!errors.name}
                        aria-describedby="cf-name-error"
                        className={inputClass(errors.name)}
                      />
                    </Field>
                    <Field id="cf-email" label={F.labels.email} error={errors.email}>
                      <input
                        id="cf-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder={F.placeholders.email}
                        aria-invalid={!!errors.email}
                        aria-describedby="cf-email-error"
                        className={inputClass(errors.email)}
                      />
                    </Field>
                  </div>

                  <fieldset className="mt-2">
                    <legend className="eyebrow">{F.labels.subject}</legend>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {F.subjects.map((s) => {
                        const active = form.subject === s;
                        return (
                          <label
                            key={s}
                            className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors duration-300 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent ${
                              active ? "border-ink bg-ink text-bg" : "border-line-strong text-ink-soft hover:border-ink hover:text-ink"
                            }`}
                          >
                            <input
                              type="radio"
                              name="subject"
                              value={s}
                              checked={active}
                              onChange={() => update("subject", s)}
                              className="sr-only"
                            />
                            {s}
                          </label>
                        );
                      })}
                    </div>
                    <p role="alert" className="mt-2 min-h-[1.25rem] text-sm text-accent">
                      {errors.subject}
                    </p>
                  </fieldset>

                  <Field id="cf-message" label={F.labels.message} error={errors.message}>
                    <textarea
                      id="cf-message"
                      name="message"
                      rows={program ? 10 : 5}
                      maxLength={F.maxLength}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder={F.placeholders.message}
                      aria-invalid={!!errors.message}
                      aria-describedby="cf-message-error"
                      className={`${inputClass(errors.message)} resize-none`}
                    />
                  </Field>

                  {sendError && (
                    <p role="alert" className="fade-up mt-2 rounded-xl border border-accent/40 bg-accent-soft px-4 py-3 text-sm leading-relaxed text-ink">
                      {sendError === SEND_ERROR.RATE_LIMITED ? (
                        F.rateLimited
                      ) : (
                        <>
                          {F.sendError}{" "}
                          <a href={`mailto:${SITE.email}`} className="link-u font-medium">
                            {SITE.email}
                          </a>
                          .
                        </>
                      )}
                    </p>
                  )}

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                    <span className="font-mono text-xs tabular-nums text-muted">
                      {form.message.length} / {F.maxLength}
                    </span>
                    <button
                      type="submit"
                      disabled={sending}
                      className="group/btn inline-flex h-14 items-center gap-2.5 rounded-full bg-ink px-8 font-medium text-bg transition-colors duration-300 hover:bg-accent hover:text-accent-contrast active:scale-[0.98] disabled:cursor-wait disabled:opacity-80 disabled:hover:bg-ink disabled:hover:text-bg"
                    >
                      {sending ? (
                        <>
                          <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
                          {F.sendingLabel}
                        </>
                      ) : (
                        <>
                          {F.submitLabel}
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" aria-hidden="true" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
  );
}

export default function ContactSection({ index }) {
  const [params] = useSearchParams();
  const programId = params.get("program");
  const program = programId ? PROGRAMS.items.find((p) => p.id === programId) : null;

  /* Arriving from "Book a workshop": bring the form into view */
  useEffect(() => {
    if (!program) return undefined;
    const id = window.setTimeout(() => {
      const el = document.getElementById("contact-form");
      if (el && el.getBoundingClientRect().top > window.innerHeight * 0.45) scrollToElement(el);
    }, 250);
    return () => window.clearTimeout(id);
  }, [program]);

  return (
    <section id="contact" className="section-y page-top">
      <div className="container-x">
        <SectionHead page index={index} eyebrow={CONTACT.eyebrow} title={CONTACT.title} intro={CONTACT.intro} />

        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* ── Details ── */}
          <div className="lg:col-span-5">
            <dl className="border-b border-line">
              {CONTACT.details.map((d, i) => (
                <Reveal key={d.label} delay={i * 60} className="border-t border-line py-6">
                  <dt className="eyebrow">{d.label}</dt>
                  <dd className="mt-2">
                    {d.href ? (
                      <a href={d.href} className="link-u display text-[1.7rem] leading-tight break-all sm:break-normal md:text-3xl">
                        {d.value}
                      </a>
                    ) : (
                      <span className="display text-[1.7rem] leading-tight md:text-3xl">{d.value}</span>
                    )}
                  </dd>
                </Reveal>
              ))}
            </dl>

            <Reveal className="mt-10 rounded-xl border border-line bg-surface p-6">
              <p className="eyebrow flex items-center gap-2.5 text-ink">
                <span className="status-dot" aria-hidden="true" />
                {CONTACT.availability.title}
              </p>
              <p className="mt-3 leading-relaxed text-ink-soft">{CONTACT.availability.text}</p>
              <div
                className="mt-5 h-1 overflow-hidden rounded-full bg-line"
                role="img"
                aria-label={CONTACT.availability.capacityLabel}
              >
                <div className="h-full rounded-full bg-accent" style={{ width: `${CONTACT.availability.capacity}%` }} />
              </div>
              <p className="mt-2 font-mono text-xs text-muted">{CONTACT.availability.capacityLabel}</p>
            </Reveal>

            <Reveal className="mt-10">
              <p className="eyebrow">{CONTACT.socialsLabel}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {SOCIALS.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm font-medium transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-bg"
                    >
                      {s.label}
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* ── Form ── */}
          <Reveal delay={120} className="relative lg:col-span-7">
            <ContactForm key={program?.id || "general"} program={program} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
