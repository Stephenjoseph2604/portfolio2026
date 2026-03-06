import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail, Phone, MapPin, Send, CheckCircle2,
  Github, Linkedin, Twitter, ArrowUpRight,
} from "lucide-react";

/* ─── Helpers ─────────────────────────────────────────────── */
const PRIMARY   = "#2563eb";
const SECONDARY = "#7c3aed";
const SUCCESS   = "#10b981";

function toRgba(hex, a) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
}

/* ─── Static contact info ────────────────────────────────── */
const contactInfo = [
  { icon: Mail,    label: "Email",    value: "stephen@example.com",   href: "mailto:stephen@example.com", accent: PRIMARY   },
  { icon: Phone,   label: "Phone",    value: "+91 98765 43210",        href: "tel:+919876543210",           accent: SECONDARY },
  { icon: MapPin,  label: "Location", value: "Tamil Nadu, India",      href: "#",                           accent: SUCCESS   },
];

const socials = [
  { icon: Github,   label: "GitHub",   href: "#", accent: "#f1f5f9" },
  { icon: Linkedin, label: "LinkedIn", href: "#", accent: "#0a66c2" },
  { icon: Twitter,  label: "Twitter",  href: "#", accent: "#1da1f2" },
];

const subjects = [
  "Project Development",
  "Corporate Training",
  "Mentorship",
  "Collaboration",
  "Other",
];

/* ─── Input field ─────────────────────────────────────────── */
function Field({ label, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#64748b]"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            className="text-[10px] font-mono text-[#e11d48]"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputBase = {
  background: "#0d1117",
  border: `1px solid #1e293b`,
  color: "#f1f5f9",
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "0.8125rem",
  borderRadius: "0.75rem",
  padding: "0.75rem 1rem",
  outline: "none",
  width: "100%",
  transition: "border-color 0.25s, box-shadow 0.25s",
};

function TextInput({ name, value, onChange, placeholder, type = "text", error }) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        ...inputBase,
        borderColor: error ? "#e11d48" : focused ? toRgba(PRIMARY, 0.6) : "#1e293b",
        boxShadow: focused && !error ? `0 0 0 3px ${toRgba(PRIMARY, 0.1)}` : "none",
      }}
    />
  );
}

function TextArea({ name, value, onChange, placeholder, rows = 5, error }) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        ...inputBase,
        borderColor: error ? "#e11d48" : focused ? toRgba(PRIMARY, 0.6) : "#1e293b",
        boxShadow: focused && !error ? `0 0 0 3px ${toRgba(PRIMARY, 0.1)}` : "none",
        resize: "none",
      }}
    />
  );
}

/* ─── Success overlay ─────────────────────────────────────── */
function SuccessMessage({ name, onReset }) {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl z-30 p-8 text-center"
      style={{ background: "rgba(8,11,18,0.97)", backdropFilter: "blur(12px)" }}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Animated check circle */}
      <motion.div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 border"
        style={{
          background: toRgba(SUCCESS, 0.1),
          borderColor: toRgba(SUCCESS, 0.4),
          boxShadow: `0 0 30px ${toRgba(SUCCESS, 0.25)}`,
        }}
        initial={{ scale: 0.5, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 22, delay: 0.1 }}
      >
        <CheckCircle2 className="w-7 h-7" style={{ color: SUCCESS }} />
      </motion.div>

      <motion.h3
        className="text-2xl font-black text-[#f1f5f9] mb-2 leading-tight"
        style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.03em" }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Message Sent!
      </motion.h3>

      <motion.p
        className="text-sm text-[#64748b] max-w-xs leading-relaxed mb-6"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.28 }}
      >
        Thanks, <span style={{ color: PRIMARY }}>{name}</span>! I'll get back to you as
        soon as possible. Your details have been noted.
      </motion.p>

      {/* Divider */}
      <div className="w-16 h-[1.5px] mb-5 rounded-full"
        style={{ background: `linear-gradient(90deg, ${PRIMARY}, ${SECONDARY})` }} />

      <motion.button
        className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#475569] hover:text-[#f1f5f9] transition-colors duration-200"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
        onClick={onReset}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.38 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        Send another message →
      </motion.button>
    </motion.div>
  );
}

/* ─── Contact Info Card ───────────────────────────────────── */
function InfoCard({ item, index }) {
  const [hovered, setHovered] = useState(false);
  const { icon: Icon, label, value, href, accent } = item;
  return (
    <motion.a
      href={href}
      className="flex items-center gap-3.5 p-4 rounded-2xl border border-[#1e293b] bg-[#080b12] transition-all duration-300"
      style={{
        boxShadow: hovered ? `0 0 0 1.5px ${toRgba(accent, 0.45)}, 0 10px 28px ${toRgba(accent, 0.12)}` : "none",
        borderColor: hovered ? toRgba(accent, 0.4) : "#1e293b",
        transition: "all 0.3s ease",
      }}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ x: 3 }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center border flex-shrink-0 transition-all duration-300"
        style={{
          background: toRgba(accent, 0.1),
          borderColor: toRgba(accent, 0.3),
          boxShadow: hovered ? `0 0 16px ${toRgba(accent, 0.25)}` : "none",
        }}
      >
        <Icon className="w-4 h-4" style={{ color: accent }} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#475569] mb-0.5"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}>{label}</p>
        <p className="text-sm font-bold text-[#94a3b8] truncate"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}>{value}</p>
      </div>
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -4 }}
        transition={{ duration: 0.22 }}
      >
        <ArrowUpRight className="w-3.5 h-3.5 flex-shrink-0" style={{ color: accent }} />
      </motion.div>
    </motion.a>
  );
}

/* ─── Social link ─────────────────────────────────────────── */
function SocialBtn({ item }) {
  const [hovered, setHovered] = useState(false);
  const { icon: Icon, label, href, accent } = item;
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      className="w-10 h-10 rounded-xl flex items-center justify-center border border-[#1e293b] bg-[#080b12] text-[#475569] transition-all duration-300"
      style={{
        borderColor: hovered ? toRgba(accent, 0.5) : "#1e293b",
        color: hovered ? accent : "#475569",
        boxShadow: hovered ? `0 0 14px ${toRgba(accent, 0.25)}` : "none",
        transition: "all 0.3s ease",
      }}
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.94 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon className="w-4 h-4" />
    </motion.a>
  );
}

/* ─── Main Component ─────────────────────────────────────── */
export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = "Name is required";
    if (!form.email.trim())   e.email   = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email address";
    if (!form.subject)        e.subject = "Please select a subject";
    if (!form.message.trim()) e.message = "Message cannot be empty";
    return e;
  };

  const handleSubmit = async () => {
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setSending(true);

    // Simulate network delay
    await new Promise((res) => setTimeout(res, 1200));

    // ── Print to console ──
    console.group("📬 New Contact Form Submission");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("👤  Name     :", form.name);
    console.log("📧  Email    :", form.email);
    console.log("📌  Subject  :", form.subject);
    console.log("💬  Message  :", form.message);
    console.log("🕒  Time     :", new Date().toLocaleString());
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.groupEnd();

    setSending(false);
    setSent(true);
  };

  const handleReset = () => {
    setForm({ name: "", email: "", subject: "", message: "" });
    setErrors({});
    setSent(false);
  };

  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ background: "#050508" }}
    >

      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-[480px] h-[320px] opacity-[0.07]"
          style={{ background: `radial-gradient(ellipse,${PRIMARY} 0%,transparent 70%)`, filter: "blur(80px)" }} />
        <div className="absolute -bottom-32 right-1/4 w-[380px] h-[380px] rounded-full opacity-[0.06]"
          style={{ background: `radial-gradient(circle,${SECONDARY} 0%,transparent 70%)`, filter: "blur(70px)" }} />
        <div className="absolute inset-0 opacity-[0.022]"
          style={{ backgroundImage: "radial-gradient(circle,#94a3b8 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">

        {/* ── Header ── */}
        <motion.div
          className="mb-14 md:mb-18 relative pl-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full"
            style={{ background: `linear-gradient(180deg,${PRIMARY},${SECONDARY})` }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="flex items-center gap-3 mb-5">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1e293b] bg-[#080b12]">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"
                style={{ boxShadow: "0 0 8px #10b981" }} />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#64748b]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Let's Talk
              </span>
            </div>
            <div className="h-px w-10" style={{ background: `linear-gradient(90deg,${PRIMARY},transparent)` }} />
          </div>

          <h2
            className="text-4xl md:text-6xl lg:text-[68px] font-black leading-[0.92] mb-5"
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.04em" }}
          >
            <span style={{ background: "linear-gradient(135deg,#ffffff 0%,#94a3b8 55%,#475569 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Get In
            </span>
            <br />
            <span style={{ background: `linear-gradient(135deg,${PRIMARY} 0%,${SECONDARY} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Touch
            </span>
          </h2>

          <p className="text-[#64748b] text-sm md:text-base max-w-lg leading-relaxed"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Have a project or training requirement?{" "}
            <span className="text-[#475569]">I typically respond within 24 hours.</span>
          </p>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">

          {/* ── LEFT: Info ── */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-5"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Info cards */}
            <div className="space-y-3">
              {contactInfo.map((item, i) => (
                <InfoCard key={item.label} item={item} index={i} />
              ))}
            </div>

            {/* Availability card */}
            <div
              className="p-5 rounded-2xl border border-[#1e293b] bg-[#080b12]"
              style={{ boxShadow: `0 0 0 1px ${toRgba(SUCCESS, 0.06)}` }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"
                  style={{ boxShadow: "0 0 8px #10b981" }} />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#10b981]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Currently Available
                </span>
              </div>
              <p className="text-xs text-[#64748b] leading-relaxed"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Open for full-stack development projects, corporate training programs,
                and technical mentorship engagements.
              </p>

              {/* Visual bar */}
              <div className="mt-4 h-1.5 rounded-full bg-[#1e293b] overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${SUCCESS}, ${toRgba(SUCCESS, 0.4)})` }}
                  initial={{ width: "0%" }}
                  whileInView={{ width: "72%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <p className="text-[9px] text-[#334155] mt-1.5"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                72% capacity available this month
              </p>
            </div>

            {/* Social links */}
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#334155] mb-3"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Find me on
              </p>
              <div className="flex gap-2">
                {socials.map((s) => <SocialBtn key={s.label} item={s} />)}
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Form ── */}
          <motion.div
            className="lg:col-span-3 relative rounded-2xl border border-[#1e293b] bg-[#080b12] overflow-hidden"
            style={{ boxShadow: `0 0 0 1px ${toRgba(PRIMARY, 0.05)}, 0 24px 50px rgba(0,0,0,0.4)` }}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Top accent line */}
            <div className="h-[2px]"
              style={{ background: `linear-gradient(90deg, transparent, ${PRIMARY}, ${SECONDARY}, transparent)` }} />

            {/* Dot-grid */}
            <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
              style={{ backgroundImage: "radial-gradient(circle,#94a3b8 1px,transparent 1px)", backgroundSize: "22px 22px" }} />

            {/* Ambient glow */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${toRgba(PRIMARY, 0.08)} 0%, transparent 70%)` }} />

            <div className="relative z-10 p-6 md:p-8">
              {/* Form header */}
              <div className="flex items-center gap-3 mb-7">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center border"
                  style={{ background: toRgba(PRIMARY, 0.1), borderColor: toRgba(PRIMARY, 0.3) }}>
                  <Send className="w-4 h-4" style={{ color: PRIMARY }} />
                </div>
                <div>
                  <h3 className="text-sm font-black text-[#f1f5f9] leading-tight"
                    style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.02em" }}>
                    Send a Message
                  </h3>
                  <p className="text-[9px] text-[#475569]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    All fields are required
                  </p>
                </div>
              </div>

              {/* Fields */}
              <div className="space-y-4">
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Full Name" error={errors.name}>
                    <TextInput name="name" value={form.name} onChange={handleChange}
                      placeholder="Stephen Joseph" error={errors.name} />
                  </Field>
                  <Field label="Email Address" error={errors.email}>
                    <TextInput name="email" value={form.email} onChange={handleChange}
                      placeholder="you@example.com" type="email" error={errors.email} />
                  </Field>
                </div>

                {/* Subject select */}
                <Field label="Subject" error={errors.subject}>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    style={{
                      ...inputBase,
                      borderColor: errors.subject ? "#e11d48" : form.subject ? toRgba(PRIMARY, 0.4) : "#1e293b",
                      appearance: "none",
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 14px center",
                    }}
                  >
                    <option value="" disabled style={{ background: "#0d1117" }}>Select a subject…</option>
                    {subjects.map((s) => (
                      <option key={s} value={s} style={{ background: "#0d1117" }}>{s}</option>
                    ))}
                  </select>
                </Field>

                {/* Message */}
                <Field label="Message" error={errors.message}>
                  <TextArea name="message" value={form.message} onChange={handleChange}
                    placeholder="Tell me about your project or training requirement…"
                    rows={5} error={errors.message} />
                  <p className="text-[9px] text-[#334155] self-end"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    {form.message.length} / 1000 chars
                  </p>
                </Field>

                {/* Submit button */}
                <motion.button
                  onClick={handleSubmit}
                  disabled={sending}
                  className="relative w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-black text-sm text-white overflow-hidden"
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    letterSpacing: "-0.02em",
                    background: sending
                      ? toRgba(PRIMARY, 0.5)
                      : `linear-gradient(135deg, ${PRIMARY} 0%, ${SECONDARY} 100%)`,
                    boxShadow: `0 8px 26px ${toRgba(PRIMARY, 0.28)}`,
                    cursor: sending ? "not-allowed" : "pointer",
                  }}
                  whileHover={!sending ? { scale: 1.02, y: -1, boxShadow: `0 14px 34px ${toRgba(PRIMARY, 0.42)}` } : {}}
                  whileTap={!sending ? { scale: 0.98 } : {}}
                  transition={{ type: "spring", stiffness: 420, damping: 22 }}
                >
                  {/* Shimmer */}
                  {!sending && (
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.55 }}
                      style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)", width: "60%" }}
                    />
                  )}

                  {sending ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                      />
                      <span>Sending…</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>

            {/* ── Success overlay ── */}
            <AnimatePresence>
              {sent && (
                <SuccessMessage name={form.name} onReset={handleReset} />
              )}
            </AnimatePresence>
          </motion.div>

        </div>

        {/* ── Footer ── */}
        <motion.div
          className="flex items-center justify-center gap-4 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="h-px w-12 bg-[#1e293b]" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#334155]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Response within 24 hours
          </span>
          <div className="h-px w-12 bg-[#1e293b]" />
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;