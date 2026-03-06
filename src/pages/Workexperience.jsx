import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase, MapPin, Calendar, ChevronDown,
  Code2, Users, Star, ExternalLink, ArrowRight,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════
   HELPERS
══════════════════════════════════════════════════════════ */
const PRIMARY   = "#2563eb";
const SECONDARY = "#7c3aed";
const SUCCESS   = "#10b981";
const AMBER     = "#d97706";
const TEAL      = "#0f766e";

function toRgba(hex, a) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
}

/* ═══════════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════════ */
const experiences = [
  {
    id: "exp-1",
    role: "Full Stack Developer & Corporate Trainer",
    company: "Freelance / Independent",
    companyShort: "Freelance",
    location: "Coimbatore, Tamil Nadu",
    period: "2022 — Present",
    duration: "3+ yrs",
    type: "Full-time",
    current: true,
    accent: PRIMARY,
    icon: Code2,
    summary:
      "Building enterprise-grade full-stack applications while running corporate training programs for colleges and tech institutions across Tamil Nadu.",
    responsibilities: [
      "Architected and built CRM, Job Portal, Bus Tracking, and Bookshelf platforms from scratch",
      "Designed RESTful backend systems with Spring Boot, Microservices principles, and JWT security",
      "Delivered Java Full Stack & MERN Stack training to 200+ students across multiple institutions",
      "Mentored junior developers and provided code reviews, architectural guidance, and interview prep",
      "Handled full project lifecycle — requirement analysis, design, development, deployment, support",
    ],
    achievements: [
      { val: "200+", lbl: "Students Trained" },
      { val: "10+",  lbl: "Projects Shipped" },
      { val: "5★",   lbl: "Client Rating"    },
    ],
    tags: ["React", "Spring Boot", "MySQL", "JWT", "Node.js", "MongoDB", "Kotlin", "Redis"],
  },
  {
    id: "exp-2",
    role: "Java Full Stack Developer",
    company: "TechBridge Solutions",
    companyShort: "TechBridge",
    location: "Coimbatore, Tamil Nadu",
    period: "2021 — 2022",
    duration: "1 yr",
    type: "Contract",
    current: false,
    accent: SECONDARY,
    icon: Briefcase,
    summary:
      "Developed and maintained scalable web applications using Spring Boot and React. Led small feature teams and drove performance improvements across existing systems.",
    responsibilities: [
      "Built RESTful APIs consumed by React SPA frontends with role-based access control",
      "Integrated payment gateways (Razorpay, PayU) and third-party notification services",
      "Conducted internal code reviews and architecture discussions with senior engineers",
      "Reduced API response times by 40% through database query optimisation and caching",
      "Documented all services using Swagger / OpenAPI 3.0 specifications",
    ],
    achievements: [
      { val: "40%",  lbl: "Perf Improvement" },
      { val: "5+",   lbl: "Integrations"     },
      { val: "100%", lbl: "On-time Delivery" },
    ],
    tags: ["Java", "Spring Boot", "React", "MySQL", "Swagger", "Razorpay", "REST API"],
  },
  {
    id: "exp-3",
    role: "Android Developer",
    company: "Innovate Systems",
    companyShort: "Innovate",
    location: "Coimbatore, Tamil Nadu",
    period: "2020 — 2021",
    duration: "1 yr",
    type: "Internship → Full-time",
    current: false,
    accent: SUCCESS,
    icon: Star,
    summary:
      "Developed production Android applications using Kotlin and Java. Worked closely with designers on UI/UX and shipped three apps to Google Play during tenure.",
    responsibilities: [
      "Built 3 production Android apps in Kotlin with Material Design UI components",
      "Integrated Retrofit for REST API consumption and OkHttp for network layer",
      "Implemented Firebase Auth, Realtime Database, and Cloud Messaging (FCM)",
      "Collaborated with UI/UX designers to translate Figma wireframes into working screens",
      "Diagnosed and fixed ANR crashes, memory leaks, and UI threading issues",
    ],
    achievements: [
      { val: "3",    lbl: "Apps Published"  },
      { val: "4.5★", lbl: "Play Store Avg" },
      { val: "10k+", lbl: "Downloads"       },
    ],
    tags: ["Kotlin", "Java", "Android", "Firebase", "Retrofit", "Figma", "FCM"],
  },
  {
    id: "exp-4",
    role: "Technical Trainer (Part-time)",
    company: "St. Xavier's College & Institutions",
    companyShort: "Academia",
    location: "Tamil Nadu, India",
    period: "2021 — Present",
    duration: "3+ yrs",
    type: "Part-time",
    current: true,
    accent: TEAL,
    icon: Users,
    summary:
      "Conducting industry-oriented training programs for final-year and postgraduate CS students, covering Java Full Stack development with live project demonstrations.",
    responsibilities: [
      "Designed curriculum covering Java, Spring Boot, React, SQL, and REST API design",
      "Delivered hands-on sessions with live project building (from scratch to deployment)",
      "Guided 50+ students through placement preparation — DSA, system design, mock interviews",
      "Coordinated with placement cells to align training with current industry requirements",
      "Produced training materials, exercises, and assessment frameworks",
    ],
    achievements: [
      { val: "50+",  lbl: "Placed Students" },
      { val: "10+",  lbl: "Institutions"    },
      { val: "100%", lbl: "Batch Feedback"  },
    ],
    tags: ["Java", "Spring Boot", "React", "SQL", "DSA", "System Design", "Mentorship"],
  },
];

/* ═══════════════════════════════════════════════════════════
   MINI ACHIEVEMENT BADGE
══════════════════════════════════════════════════════════ */
function AchievementBadge({ val, lbl, accent }) {
  return (
    <div
      className="flex flex-col items-center justify-center px-3 py-2 rounded-xl border"
      style={{
        background: toRgba(accent, 0.07),
        borderColor: toRgba(accent, 0.35),
      }}
    >
      <span className="text-base font-black leading-none mb-0.5"
        style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.03em", color: accent }}>
        {val}
      </span>
      <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-[#475569] whitespace-nowrap"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        {lbl}
      </span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   TIMELINE ITEM
══════════════════════════════════════════════════════════ */
function TimelineItem({ item, index, isLast }) {
  const [expanded, setExpanded] = useState(index === 0);
  const [hovered, setHovered] = useState(false);
  const { accent } = item;
  const Icon = item.icon;

  return (
    <div className="relative flex gap-4 md:gap-6">

      {/* ── Spine ── */}
      <div className="flex flex-col items-center flex-shrink-0 pt-1">
        {/* Node */}
        <motion.div
          className="relative w-11 h-11 rounded-xl flex items-center justify-center border z-10 cursor-pointer"
          style={{
            background: expanded ? toRgba(accent, 0.14) : hovered ? toRgba(accent, 0.08) : "#0d1117",
            borderColor: expanded ? toRgba(accent, 0.65) : hovered ? toRgba(accent, 0.3) : "#1e293b",
            boxShadow: expanded ? `0 0 20px ${toRgba(accent, 0.38)}, 0 0 0 1px ${toRgba(accent, 0.22)}` : "none",
            transition: "all 0.32s ease",
          }}
          animate={{ scale: expanded ? 1.06 : 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
          onClick={() => setExpanded((e) => !e)}
        >
          <Icon className="w-4 h-4" style={{ color: expanded || hovered ? accent : "#475569",
            transition: "color 0.28s" }} />

          {/* Current pulse */}
          {item.current && (
            <>
              <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#10b981] border-2 border-[#050508]"
                style={{ boxShadow: "0 0 8px #10b981" }} />
              <motion.span
                className="absolute inset-0 rounded-xl"
                style={{ border: `1px solid ${toRgba(accent, 0.5)}` }}
                animate={{ scale: [1, 1.35, 1], opacity: [0.7, 0, 0.7] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              />
            </>
          )}
        </motion.div>

        {/* Connecting line */}
        {!isLast && (
          <div className="w-px flex-1 mt-2" style={{ minHeight: "40px" }}>
            <motion.div
              className="w-full h-full rounded-full"
              style={{ background: `linear-gradient(180deg,${toRgba(accent, 0.55)},${toRgba(accent, 0.06)})` }}
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        )}
      </div>

      {/* ── Card ── */}
      <motion.div
        className="relative flex-1 mb-5 md:mb-7 rounded-2xl border overflow-hidden"
        style={{
          background: expanded ? toRgba(accent, 0.04) : "#080b12",
          borderColor: expanded ? toRgba(accent, 0.45) : hovered ? toRgba(accent, 0.22) : "#1e293b",
          boxShadow: expanded
            ? `0 0 0 1px ${toRgba(accent, 0.14)}, 0 18px 45px ${toRgba(accent, 0.1)}`
            : "none",
          transition: "all 0.35s ease",
        }}
        initial={{ opacity: 0, x: 28 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.56, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none transition-opacity duration-400"
          style={{ background: `radial-gradient(ellipse 70% 55% at 50% 0%,${toRgba(accent, 0.08)} 0%,transparent 70%)`,
            opacity: expanded ? 1 : 0 }} />

        {/* Dot-grid */}
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle,#94a3b8 1px,transparent 1px)", backgroundSize: "20px 20px" }} />

        {/* Top accent bar */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[1.5px]"
          animate={{ opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ background: `linear-gradient(90deg,transparent,${accent},transparent)` }}
        />

        {/* ── Header — always visible, clickable ── */}
        <div
          className="relative z-10 p-5 md:p-6 cursor-pointer select-none"
          onClick={() => setExpanded((e) => !e)}
        >
          {/* Top row: company tag + type badge + duration */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.13em] rounded-lg border"
              style={{ color: accent, borderColor: toRgba(accent, 0.42), background: toRgba(accent, 0.08),
                fontFamily: "'JetBrains Mono', monospace" }}>
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: accent, boxShadow: `0 0 5px ${accent}` }} />
              {item.companyShort}
            </span>

            <span className="px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.14em] rounded-lg border border-[#1e293b] bg-[#0d1117] text-[#475569]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              {item.type}
            </span>

            {item.current && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[8px] font-black uppercase tracking-[0.16em] rounded-full"
                style={{ color: SUCCESS, background: toRgba(SUCCESS, 0.1), border: `1px solid ${toRgba(SUCCESS, 0.4)}`,
                  fontFamily: "'JetBrains Mono', monospace" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                Current
              </span>
            )}

            <span className="ml-auto text-[9px] font-bold uppercase tracking-[0.14em] text-[#334155]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              {item.duration}
            </span>
          </div>

          {/* Role title */}
          <h3 className="text-lg md:text-xl font-black text-[#f1f5f9] leading-tight mb-1.5"
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.028em" }}>
            {item.role}
          </h3>

          {/* Company + meta */}
          <p className="text-sm font-bold mb-3"
            style={{ color: accent, fontFamily: "'JetBrains Mono', monospace" }}>
            {item.company}
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-4 text-[#475569]">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3 flex-shrink-0" />
              <span className="text-[10px] font-bold uppercase tracking-[0.12em]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}>{item.period}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 flex-shrink-0" />
              <span className="text-[10px] font-bold uppercase tracking-[0.12em]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}>{item.location}</span>
            </div>
          </div>

          {/* Summary */}
          <p className="text-[#64748b] text-[13px] leading-relaxed mb-4"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            {item.summary}
          </p>

          {/* Achievement badges row */}
          <div className="flex flex-wrap gap-2">
            {item.achievements.map((a) => (
              <AchievementBadge key={a.lbl} {...a} accent={accent} />
            ))}
          </div>

          {/* Expand hint */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex flex-wrap gap-1.5">
              {item.tags.slice(0, 4).map((tag) => (
                <span key={tag}
                  className="px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider rounded-md border border-[#1e293b] bg-[#0d1117] text-[#475569]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {tag}
                </span>
              ))}
              {item.tags.length > 4 && (
                <span className="px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider rounded-md border border-[#1e293b] bg-[#0d1117] text-[#334155]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  +{item.tags.length - 4} more
                </span>
              )}
            </div>

            <motion.div
              className="w-7 h-7 rounded-xl flex items-center justify-center border flex-shrink-0"
              animate={{
                background: expanded ? toRgba(accent, 0.14) : toRgba(PRIMARY, 0.04),
                borderColor: expanded ? toRgba(accent, 0.5) : "#1e293b",
                rotate: expanded ? 180 : 0,
              }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <ChevronDown className="w-3.5 h-3.5" style={{ color: expanded ? accent : "#475569" }} />
            </motion.div>
          </div>
        </div>

        {/* ── Expanded detail ── */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="px-5 md:px-6 pb-6 relative z-10">
                {/* Divider */}
                <div className="h-px mb-5"
                  style={{ background: `linear-gradient(90deg,${toRgba(accent, 0.45)},transparent)` }} />

                {/* Responsibilities header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: accent, boxShadow: `0 0 6px ${accent}` }} />
                  <span className="text-[9px] font-black uppercase tracking-[0.24em] text-[#475569]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    Key Responsibilities
                  </span>
                  <div className="flex-1 h-px"
                    style={{ background: `linear-gradient(90deg,${toRgba(accent, 0.35)},transparent)` }} />
                </div>

                {/* Responsibilities list */}
                <div className="space-y-3 mb-6">
                  {item.responsibilities.map((r, i) => (
                    <motion.div key={i}
                      className="flex items-start gap-3 p-3 rounded-xl border border-[#1e293b] bg-[#0d1117]"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.055, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="w-5 h-5 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: toRgba(accent, 0.1), border: `1px solid ${toRgba(accent, 0.3)}` }}>
                        <span className="w-1 h-1 rounded-full" style={{ background: accent }} />
                      </div>
                      <span className="text-[12px] text-[#64748b] leading-snug"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}>{r}</span>
                    </motion.div>
                  ))}
                </div>

                {/* All tech tags */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: accent, boxShadow: `0 0 6px ${accent}` }} />
                  <span className="text-[9px] font-black uppercase tracking-[0.24em] text-[#475569]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}>Tech Stack</span>
                  <div className="flex-1 h-px"
                    style={{ background: `linear-gradient(90deg,${toRgba(accent, 0.35)},transparent)` }} />
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag}
                      className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.13em] rounded-lg border"
                      style={{ color: accent, borderColor: toRgba(accent, 0.38), background: toRgba(accent, 0.07),
                        fontFamily: "'JetBrains Mono', monospace" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom sweep line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[1.5px]"
          animate={{ scaleX: expanded ? 1 : 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ background: `linear-gradient(90deg,transparent,${accent},transparent)`, transformOrigin: "left" }}
        />
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   STAT BAR
══════════════════════════════════════════════════════════ */
function StatBar() {
  const stats = [
    { val: "3+",   lbl: "Years XP",        accent: PRIMARY   },
    { val: "4",    lbl: "Roles Held",       accent: SECONDARY },
    { val: "200+", lbl: "Students Trained", accent: SUCCESS   },
    { val: "10+",  lbl: "Products Shipped", accent: AMBER     },
  ];

  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      {stats.map(({ val, lbl, accent }, i) => {
        const [hovered, setHovered] = useState(false);
        return (
          <motion.div
            key={lbl}
            className="relative flex flex-col items-center justify-center py-5 rounded-2xl border overflow-hidden cursor-default"
            style={{
              background: hovered ? toRgba(accent, 0.07) : "#080b12",
              borderColor: hovered ? toRgba(accent, 0.5) : "#1e293b",
              boxShadow: hovered
                ? `0 0 0 1px ${toRgba(accent, 0.18)}, 0 10px 28px ${toRgba(accent, 0.12)}`
                : "none",
              transition: "all 0.32s ease",
            }}
            initial={{ opacity: 0, y: 14, scale: 0.93 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.04, y: -2 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div className="absolute inset-0 pointer-events-none transition-opacity duration-400"
              style={{ background: `radial-gradient(ellipse 80% 60% at 50% 110%,${toRgba(accent, 0.2)} 0%,transparent 70%)`,
                opacity: hovered ? 1 : 0 }} />

            <p className="text-2xl md:text-3xl font-black leading-none mb-1 relative z-10"
              style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.04em", color: accent,
                textShadow: hovered ? `0 0 18px ${toRgba(accent, 0.55)}` : "none",
                transition: "text-shadow 0.3s" }}>
              {val}
            </p>
            <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#475569] relative z-10"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              {lbl}
            </p>

            <motion.div
              className="absolute bottom-0 left-0 right-0 h-[1.5px]"
              animate={{ scaleX: hovered ? 1 : 0 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              style={{ background: `linear-gradient(90deg,transparent,${accent},transparent)`, transformOrigin: "left" }}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════════════════════ */
export function WorkExperience() {
  return (
    <section
      id="experience"
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ background: "#050508" }}
    >

      {/* ── Atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-[500px] h-[320px] opacity-[0.07]"
          style={{ background: `radial-gradient(ellipse,${PRIMARY} 0%,transparent 70%)`, filter: "blur(80px)" }} />
        <div className="absolute top-1/2 -right-40 w-[380px] h-[380px] rounded-full opacity-[0.05]"
          style={{ background: `radial-gradient(circle,${SECONDARY} 0%,transparent 70%)`, filter: "blur(70px)" }} />
        <div className="absolute -bottom-28 left-0 w-[300px] h-[300px] rounded-full opacity-[0.04]"
          style={{ background: `radial-gradient(circle,${SUCCESS} 0%,transparent 70%)`, filter: "blur(70px)" }} />
        <div className="absolute inset-0 opacity-[0.022]"
          style={{ backgroundImage: "radial-gradient(circle,#94a3b8 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">

        {/* ── Section Header ── */}
        <motion.div
          className="mb-12 relative pl-5"
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
                Work History
              </span>
            </div>
            <div className="h-px w-10"
              style={{ background: `linear-gradient(90deg,${PRIMARY},transparent)` }} />
          </div>

          <h2
            className="text-4xl md:text-6xl lg:text-[64px] font-black leading-[0.92] mb-4"
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.04em" }}
          >
            <span style={{ background: "linear-gradient(135deg,#ffffff 0%,#94a3b8 55%,#475569 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Professional
            </span>
            <br />
            <span style={{ background: `linear-gradient(135deg,${PRIMARY} 0%,${SECONDARY} 100%)`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Experience
            </span>
          </h2>

          <p className="text-[#64748b] text-sm md:text-base max-w-lg leading-relaxed"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Full-stack development, corporate training, and Android engineering roles.{" "}
            <span className="text-[#475569]">Click any card to expand responsibilities.</span>
          </p>

          {/* Quick stats inline */}
          <motion.div
            className="flex flex-wrap gap-6 mt-7"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.22 }}
          >
            {[
              ["4", "Total Roles"],
              ["3+", "Years Active"],
              ["2", "Current Positions"],
            ].map(([val, lbl]) => (
              <div key={lbl} className="flex items-baseline gap-2">
                <span className="text-2xl font-black"
                  style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.03em", color: PRIMARY }}>
                  {val}
                </span>
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#475569]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {lbl}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Stat Cards ── */}
        <StatBar />

        {/* ── Timeline ── */}
        <div>
          {experiences.map((item, i) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={i}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>

        {/* ── CTA ── */}
        <motion.div
          className="relative mt-12 p-7 md:p-9 rounded-2xl border border-[#1e293b] overflow-hidden text-center"
          style={{ background: toRgba(PRIMARY, 0.04) }}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(ellipse 60% 80% at 50% 110%,${toRgba(PRIMARY, 0.12)} 0%,transparent 70%)` }} />
          <div className="absolute top-0 left-0 right-0 h-[1.5px]"
            style={{ background: `linear-gradient(90deg,transparent,${PRIMARY},${SECONDARY},transparent)` }} />
          <div className="absolute inset-0 opacity-[0.022] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle,#94a3b8 1px,transparent 1px)", backgroundSize: "28px 28px" }} />

          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#475569] mb-2 relative z-10"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Open to new opportunities
          </p>
          <h3 className="text-xl md:text-2xl font-black text-[#f1f5f9] mb-5 relative z-10"
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.03em" }}>
            Let's build something{" "}
            <span style={{ background: `linear-gradient(135deg,${PRIMARY},${SECONDARY})`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              great together.
            </span>
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-3 relative z-10">
            <a href="/contact">
              <motion.div
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-black text-sm text-white"
                style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.02em",
                  background: `linear-gradient(135deg,${PRIMARY},${SECONDARY})`,
                  boxShadow: `0 6px 22px ${toRgba(PRIMARY, 0.3)}` }}
                whileHover={{ scale: 1.04, y: -1, boxShadow: `0 14px 32px ${toRgba(PRIMARY, 0.44)}` }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}>
                Get In Touch <ArrowRight className="w-3.5 h-3.5" />
              </motion.div>
            </a>
            <a href="/cv.pdf" download>
              <motion.div
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm border border-[#1e293b] bg-[#080b12] text-[#64748b] hover:text-[#f1f5f9] hover:border-[rgba(37,99,235,0.35)] transition-all duration-250"
                style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem" }}
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <ExternalLink className="w-3.5 h-3.5" /> Download CV
              </motion.div>
            </a>
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.div
          className="flex items-center justify-center gap-4 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="h-px w-12 bg-[#1e293b]" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#334155]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            {experiences.length} roles · {experiences.filter(e => e.current).length} active
          </span>
          <div className="h-px w-12 bg-[#1e293b]" />
        </motion.div>

      </div>
    </section>
  );
}

export default WorkExperience;