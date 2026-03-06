import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import {
  Briefcase, GraduationCap, MapPin, Calendar,
  ChevronDown, Award, Code2, Users, Star,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════
   HELPERS
══════════════════════════════════════════════════════════ */
const PRIMARY   = "#2563eb";
const SECONDARY = "#7c3aed";
const SUCCESS   = "#10b981";
const AMBER     = "#d97706";

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
    location: "Coimbatore, Tamil Nadu",
    period: "2022 — Present",
    type: "Full-time",
    current: true,
    accent: PRIMARY,
    icon: Code2,
    summary: "Building enterprise-grade full-stack applications and delivering corporate training programs for colleges and tech institutions across Tamil Nadu.",
    highlights: [
      "Designed and delivered Java Full Stack & MERN training for 200+ students",
      "Built CRM, Job Portal, and Fleet Management platforms from scratch",
      "Implemented JWT, Redis, and RBAC authentication systems",
      "Mentored students into developer roles at product companies",
    ],
    tags: ["React", "Spring Boot", "MySQL", "JWT", "Node.js"],
  },
  {
    id: "exp-2",
    role: "Java Full Stack Developer",
    company: "TechBridge Institute",
    location: "Coimbatore, Tamil Nadu",
    period: "2021 — 2022",
    type: "Contract",
    current: false,
    accent: SECONDARY,
    icon: Briefcase,
    summary: "Developed and maintained web applications using Java Spring Boot backend and React frontend. Led a small team of junior developers on client projects.",
    highlights: [
      "Developed RESTful APIs consumed by React SPA frontends",
      "Integrated payment gateways and third-party services",
      "Conducted internal code reviews and architecture sessions",
      "Reduced API response time by 40% through query optimisation",
    ],
    tags: ["Java", "Spring Boot", "React", "MySQL", "REST API"],
  },
  {
    id: "exp-3",
    role: "Android Developer (Intern)",
    company: "Innovate Systems",
    location: "Coimbatore, Tamil Nadu",
    period: "2020 — 2021",
    type: "Internship",
    current: false,
    accent: SUCCESS,
    icon: Star,
    summary: "Developed Android applications using Kotlin and Java. Worked on UI/UX implementation, REST API integration, and publishing apps to Google Play.",
    highlights: [
      "Built 3 production Android apps using Kotlin",
      "Integrated Retrofit for REST API consumption",
      "Implemented Firebase Auth and Realtime Database",
      "Collaborated with designers on Material Design UI",
    ],
    tags: ["Kotlin", "Android", "Firebase", "Retrofit", "Java"],
  },
];

const education = [
  {
    id: "edu-1",
    degree: "Bachelor of Engineering",
    field: "Computer Science & Engineering",
    institution: "Anna University",
    location: "Tamil Nadu, India",
    period: "2017 — 2021",
    grade: "7.8 CGPA",
    current: false,
    accent: PRIMARY,
    icon: GraduationCap,
    summary: "Studied core computer science fundamentals including data structures, algorithms, operating systems, and database management systems.",
    highlights: [
      "Major project: Real-Time Bus Tracking System (Android + Firebase)",
      "Participated in national-level hackathons",
      "Coursework: DBMS, Operating Systems, Computer Networks, OOP",
      "Active member of the Coding Club",
    ],
    tags: ["C", "Java", "Python", "DBMS", "Algorithms"],
  },
  {
    id: "edu-2",
    degree: "Higher Secondary Certificate",
    field: "Computer Science (PCM + CS)",
    institution: "St. Xavier's Higher Secondary School",
    location: "Coimbatore, Tamil Nadu",
    period: "2015 — 2017",
    grade: "88.4%",
    current: false,
    accent: AMBER,
    icon: Award,
    summary: "Studied Physics, Chemistry, Mathematics, and Computer Science. Developed early programming foundations in C and Java.",
    highlights: [
      "School topper in Computer Science",
      "Built first programs in C and Java",
      "Represented school in district-level Science Exhibition",
    ],
    tags: ["C", "Java", "Mathematics", "Physics"],
  },
];

/* ═══════════════════════════════════════════════════════════
   SECTION LABEL
══════════════════════════════════════════════════════════ */
function SectionLabel({ children, accent }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ background: accent, boxShadow: `0 0 6px ${accent}` }} />
      <span className="text-[9px] font-black uppercase tracking-[0.24em] text-[#475569]"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        {children}
      </span>
      <div className="flex-1 h-px"
        style={{ background: `linear-gradient(90deg, ${toRgba(accent, 0.45)}, transparent)` }} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   TIMELINE ITEM
══════════════════════════════════════════════════════════ */
function TimelineItem({ item, index, isLast, type }) {
  const [expanded, setExpanded] = useState(index === 0);
  const [hovered, setHovered] = useState(false);
  const { accent, icon: Icon } = item;

  return (
    <div className="relative flex gap-5 md:gap-7">

      {/* ── Vertical spine ── */}
      <div className="flex flex-col items-center flex-shrink-0">
        {/* Node dot */}
        <motion.div
          className="relative w-10 h-10 rounded-xl flex items-center justify-center border z-10 flex-shrink-0"
          style={{
            background: expanded || hovered ? toRgba(accent, 0.15) : "#0d1117",
            borderColor: expanded || hovered ? toRgba(accent, 0.6) : "#1e293b",
            boxShadow: expanded ? `0 0 18px ${toRgba(accent, 0.35)}, 0 0 0 1px ${toRgba(accent, 0.2)}` : "none",
            transition: "all 0.35s ease",
          }}
          animate={{ scale: expanded ? 1.08 : 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
        >
          <Icon className="w-4 h-4" style={{ color: expanded || hovered ? accent : "#475569" }} />
          {item.current && (
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#10b981] border-2 border-[#050508]"
              style={{ boxShadow: "0 0 6px #10b981" }} />
          )}
        </motion.div>

        {/* Spine line */}
        {!isLast && (
          <div className="w-px flex-1 mt-3" style={{ minHeight: "32px" }}>
            <motion.div
              className="w-full h-full rounded-full"
              style={{ background: `linear-gradient(180deg,${toRgba(accent, 0.5)},${toRgba(accent, 0.08)})` }}
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        )}
      </div>

      {/* ── Card ── */}
      <motion.div
        className="relative flex-1 mb-6 md:mb-8 rounded-2xl border overflow-hidden cursor-pointer"
        style={{
          background: expanded ? toRgba(accent, 0.04) : "#080b12",
          borderColor: expanded ? toRgba(accent, 0.45) : hovered ? toRgba(accent, 0.25) : "#1e293b",
          boxShadow: expanded
            ? `0 0 0 1px ${toRgba(accent, 0.15)}, 0 16px 40px ${toRgba(accent, 0.1)}`
            : hovered ? `0 0 0 1px ${toRgba(accent, 0.08)}` : "none",
          transition: "all 0.35s ease",
        }}
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        onClick={() => setExpanded((e) => !e)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Top accent line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[1.5px]"
          animate={{ opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ background: `linear-gradient(90deg,transparent,${accent},transparent)` }}
        />

        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none transition-opacity duration-400"
          style={{ background: `radial-gradient(ellipse 70% 60% at 50% 0%,${toRgba(accent, 0.08)} 0%,transparent 70%)`,
            opacity: expanded ? 1 : 0 }} />

        {/* Dot-grid */}
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle,#94a3b8 1px,transparent 1px)", backgroundSize: "20px 20px" }} />

        {/* ── Header row ── */}
        <div className="relative z-10 p-5 md:p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              {/* Role / Degree */}
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <h3 className="text-base md:text-lg font-black text-[#f1f5f9] leading-tight"
                  style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.025em" }}>
                  {item.role || item.degree}
                </h3>
                {item.current && (
                  <span className="px-2 py-0.5 text-[8px] font-black uppercase tracking-[0.18em] rounded-full"
                    style={{ color: SUCCESS, background: toRgba(SUCCESS, 0.1), border: `1px solid ${toRgba(SUCCESS, 0.4)}`,
                      fontFamily: "'JetBrains Mono', monospace" }}>
                    Current
                  </span>
                )}
              </div>

              {/* Company / Field */}
              <p className="text-sm font-bold mb-2"
                style={{ color: accent, fontFamily: "'JetBrains Mono', monospace" }}>
                {item.company || item.field}
              </p>

              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-3 text-[#475569]">
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
                {(item.type || item.grade) && (
                  <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em] rounded-lg border"
                    style={{ color: accent, borderColor: toRgba(accent, 0.35), background: toRgba(accent, 0.07),
                      fontFamily: "'JetBrains Mono', monospace" }}>
                    {item.type || item.grade}
                  </span>
                )}
              </div>
            </div>

            {/* Expand chevron */}
            <motion.div
              className="w-8 h-8 rounded-xl flex items-center justify-center border flex-shrink-0 mt-0.5"
              animate={{
                background: expanded ? toRgba(accent, 0.12) : toRgba(PRIMARY, 0.04),
                borderColor: expanded ? toRgba(accent, 0.45) : "#1e293b",
                rotate: expanded ? 180 : 0,
              }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <ChevronDown className="w-3.5 h-3.5" style={{ color: expanded ? accent : "#475569" }} />
            </motion.div>
          </div>

          {/* Summary — always visible */}
          <p className="text-[#64748b] text-[13px] leading-relaxed mt-4"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            {item.summary}
          </p>
        </div>

        {/* ── Expandable detail ── */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="px-5 md:px-6 pb-5 md:pb-6 relative z-10">
                {/* Divider */}
                <div className="mb-5 h-px"
                  style={{ background: `linear-gradient(90deg,${toRgba(accent, 0.4)},transparent)` }} />

                {/* Highlights */}
                <SectionLabel accent={accent}>Highlights</SectionLabel>
                <div className="space-y-2 mb-5">
                  {item.highlights.map((h, i) => (
                    <motion.div key={i}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.055, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                        style={{ background: accent, boxShadow: `0 0 5px ${accent}` }} />
                      <span className="text-[12px] text-[#64748b] leading-snug"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}>{h}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag}
                      className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] rounded-lg border"
                      style={{ color: accent, borderColor: toRgba(accent, 0.35), background: toRgba(accent, 0.07),
                        fontFamily: "'JetBrains Mono', monospace" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom sweep */}
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
   TIMELINE COLUMN
══════════════════════════════════════════════════════════ */
function TimelineColumn({ title, subtitle, accentBar, eyebrow, items, type, statsRow }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Column header */}
      <div className="relative pl-5 mb-10">
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full"
          style={{ background: `linear-gradient(180deg,${accentBar},transparent)` }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1e293b] bg-[#080b12]">
            <span className="w-2 h-2 rounded-full"
              style={{ background: accentBar, boxShadow: `0 0 7px ${accentBar}` }} />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#64748b]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              {eyebrow}
            </span>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[0.92] mb-3"
          style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.04em" }}>
          <span style={{ background: "linear-gradient(135deg,#ffffff 0%,#94a3b8 55%,#475569 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            {title}
          </span>
          <br />
          <span style={{ background: `linear-gradient(135deg,${accentBar} 0%,${SECONDARY} 100%)`,
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            {subtitle}
          </span>
        </h2>

        <p className="text-[#64748b] text-sm max-w-sm"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}>{statsRow}</p>
      </div>

      {/* Timeline items */}
      <div>
        {items.map((item, i) => (
          <TimelineItem
            key={item.id}
            item={item}
            index={i}
            isLast={i === items.length - 1}
            type={type}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   STAT BAR (top summary strip)
══════════════════════════════════════════════════════════ */
function StatBar() {
  const stats = [
    { val: "3+",   lbl: "Years XP",       accent: PRIMARY   },
    { val: "200+", lbl: "Students Trained",accent: SECONDARY },
    { val: "10+",  lbl: "Projects Built",  accent: SUCCESS   },
    { val: "5★",   lbl: "Client Rating",   accent: AMBER     },
  ];

  return (
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-16"
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
              boxShadow: hovered ? `0 0 0 1px ${toRgba(accent, 0.18)}, 0 10px 28px ${toRgba(accent, 0.12)}` : "none",
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
                textShadow: hovered ? `0 0 18px ${toRgba(accent, 0.55)}` : "none", transition: "text-shadow 0.3s" }}>
              {val}
            </p>
            <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#475569] relative z-10"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}>{lbl}</p>
            <motion.div className="absolute bottom-0 left-0 right-0 h-[1.5px]"
              animate={{ scaleX: hovered ? 1 : 0 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              style={{ background: `linear-gradient(90deg,transparent,${accent},transparent)`, transformOrigin: "left" }} />
          </motion.div>
        );
      })}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════════════════════ */
export function ExperienceEducation() {
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
        <div className="absolute -bottom-32 right-0 w-[380px] h-[380px] rounded-full opacity-[0.05]"
          style={{ background: `radial-gradient(circle,${SECONDARY} 0%,transparent 70%)`, filter: "blur(70px)" }} />
        <div className="absolute top-1/3 left-0 w-[280px] h-[280px] rounded-full opacity-[0.04]"
          style={{ background: `radial-gradient(circle,${SUCCESS} 0%,transparent 70%)`, filter: "blur(70px)" }} />
        <div className="absolute inset-0 opacity-[0.022]"
          style={{ backgroundImage: "radial-gradient(circle,#94a3b8 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">

        {/* ── Page header ── */}
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
                Career Journey
              </span>
            </div>
            <div className="h-px w-10"
              style={{ background: `linear-gradient(90deg,${PRIMARY},transparent)` }} />
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-[64px] font-black leading-[0.92] mb-4"
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.04em" }}>
            <span style={{ background: "linear-gradient(135deg,#ffffff 0%,#94a3b8 55%,#475569 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Experience &amp;
            </span>
            <br />
            <span style={{ background: `linear-gradient(135deg,${PRIMARY} 0%,${SECONDARY} 100%)`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Education
            </span>
          </h2>

          <p className="text-[#64748b] text-sm md:text-base max-w-lg leading-relaxed"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            A timeline of roles, projects, and learning milestones.{" "}
            <span className="text-[#475569]">Click any card to expand details.</span>
          </p>
        </motion.div>

        {/* ── Stat bar ── */}
        <StatBar />

        {/* ── Two-column timeline ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Experience */}
          <TimelineColumn
            title="Professional"
            subtitle="Experience"
            accentBar={PRIMARY}
            eyebrow="Work History"
            items={experiences}
            type="experience"
            statsRow={`${experiences.length} roles · ${experiences.filter(e => e.current).length} active`}
          />

          {/* Education */}
          <TimelineColumn
            title="Academic"
            subtitle="Education"
            accentBar={AMBER}
            eyebrow="Qualifications"
            items={education}
            type="education"
            statsRow={`${education.length} qualifications · Anna University alumni`}
          />
        </div>

        {/* ── Footer note ── */}
        <motion.div
          className="flex items-center justify-center gap-4 mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="h-px w-12 bg-[#1e293b]" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#334155]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            {experiences.length + education.length} milestones · always growing
          </span>
          <div className="h-px w-12 bg-[#1e293b]" />
        </motion.div>

      </div>
    </section>
  );
}

export default ExperienceEducation;