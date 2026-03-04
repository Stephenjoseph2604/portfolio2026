import { useState, useRef, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  motion, useMotionValue, useSpring,
  useTransform, AnimatePresence,
} from "framer-motion";
import {
  ArrowLeft, ExternalLink, Github, Calendar,
  CheckCircle2, ChevronLeft, ChevronRight, Layers,
  Shield, Zap, Users, Code2, Database, Globe,
  Tag, ArrowRight, Star,
} from "lucide-react";

/* ── swap these for real assets ─────────────────────────── */
import crmImg     from "../assets/projects/xamify.png";
import jobImg     from "../assets/projects/skillbridge.png";
import profileImg from "../assets/projects/profile.png";

/* ═══════════════════════════════════════════════════════════
   HELPERS
══════════════════════════════════════════════════════════ */
const PRIMARY   = "#2563eb";
const SECONDARY = "#7c3aed";
const SUCCESS   = "#10b981";

function toRgba(hex, a) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
}

/* ═══════════════════════════════════════════════════════════
   PROJECT DATA
══════════════════════════════════════════════════════════ */
const PROJECTS = [
  {
    id: "xamify-crm",
    title: "Xamify CRM",
    subtitle: "Dashboard System",
    tagline: "Enterprise CRM for managing clients, leads, operations and real-time analytics — built for scale.",
    category: "Full Stack Java Application",
    tag: "Enterprise",
    year: "2024",
    status: "Live",
    accent: PRIMARY,
    images: [crmImg, crmImg, crmImg],
    overview: "Xamify is a comprehensive CRM Dashboard built to manage clients, track leads, automate workflows, and provide real-time business intelligence. Designed for mid-to-large enterprise teams with multi-role access and audit-grade security.",
    challenge: "The client needed a single unified platform to replace five disconnected tools — Excel sheets, email chains, a legacy CRM, a manual invoicing system, and a reporting dashboard — all operating in silos with zero shared data.",
    solution: "Designed a modular Spring Boot backend with domain-driven architecture, a React frontend with role-based UI rendering, and a MySQL database with optimised indexing for sub-100ms query performance across 500k+ records.",
    features: [
      "Role-based access control (Admin / Manager / Sales / Viewer)",
      "Real-time analytics dashboard with drill-down charts",
      "Lead lifecycle tracking with automated status updates",
      "JWT + Redis session management with token rotation",
      "Full audit log for every critical action",
      "RESTful API with OpenAPI 3.0 documentation",
      "Email notification system with templating engine",
      "One-click export to PDF / Excel",
    ],
    techStack: [
      { name: "React.js",     Icon: Code2,    accent: "#61dafb", cat: "Frontend"  },
      { name: "Spring Boot",  Icon: Layers,   accent: "#6db33f", cat: "Backend"   },
      { name: "MySQL",        Icon: Database, accent: "#00758f", cat: "Database"  },
      { name: "JWT + Redis",  Icon: Shield,   accent: "#e11d48", cat: "Security"  },
      { name: "REST API",     Icon: Globe,    accent: PRIMARY,   cat: "API"       },
      { name: "Tailwind CSS", Icon: Zap,      accent: "#38bdf8", cat: "Styling"   },
    ],
    metrics: [
      { val: "500k+",  lbl: "Records handled" },
      { val: "<100ms", lbl: "Query latency"   },
      { val: "4",      lbl: "User roles"      },
      { val: "99.9%",  lbl: "Uptime SLA"      },
    ],
    github: "https://github.com/stephenjosephm",
    live: "#",
  },
  {
    id: "skillbridge",
    title: "SkillBridge",
    subtitle: "Job Portal Platform",
    tagline: "Full-stack job portal connecting developers with opportunities via smart skill-based matching.",
    category: "React + Spring Boot",
    tag: "Web App",
    year: "2024",
    status: "Live",
    accent: SECONDARY,
    images: [jobImg, jobImg, jobImg],
    overview: "SkillBridge is a job-matching platform built for developers. Candidates upload profiles, take skill assessments, and get matched with roles posted by verified companies — no more spray-and-pray applications.",
    challenge: "Traditional portals required candidates to manually apply to hundreds of roles while companies drowned in unfiltered applications. Both sides wasted enormous time with zero quality filtering.",
    solution: "Built a smart matching engine using skill-tag intersection scoring, a Spring Boot REST backend, lazy-loading React SPA, and a JWT-secured multi-tenant auth system with separate Candidate and Recruiter dashboards.",
    features: [
      "Smart skill-based job-matching algorithm",
      "Separate dashboards for candidates and recruiters",
      "Resume upload and auto-parsing",
      "Kanban-style application pipeline tracker",
      "Company profile and job-posting management",
      "Real-time notification system",
      "Admin panel for platform moderation",
    ],
    techStack: [
      { name: "React.js",    Icon: Code2,    accent: "#61dafb", cat: "Frontend" },
      { name: "Spring Boot", Icon: Layers,   accent: "#6db33f", cat: "Backend"  },
      { name: "MySQL",       Icon: Database, accent: "#00758f", cat: "Database" },
      { name: "JWT Auth",    Icon: Shield,   accent: "#e11d48", cat: "Security" },
      { name: "REST API",    Icon: Globe,    accent: PRIMARY,   cat: "API"      },
    ],
    metrics: [
      { val: "3",   lbl: "User roles"       },
      { val: "95%", lbl: "Match accuracy"   },
      { val: "2×",  lbl: "Hire rate lift"   },
      { val: "40%", lbl: "Time-to-hire cut" },
    ],
    github: "https://github.com/stephenjosephm",
    live: "#",
  },
  {
    id: "dev-portfolio",
    title: "Developer",
    subtitle: "Portfolio Site",
    tagline: "Personal developer portfolio built with React, Tailwind CSS, and Framer Motion.",
    category: "MERN / React Application",
    tag: "Portfolio",
    year: "2023",
    status: "Live",
    accent: SUCCESS,
    images: [profileImg, profileImg, profileImg],
    overview: "A performant, animated personal portfolio showcasing projects, skills, and corporate training work. Designed with a dark-luxury aesthetic and fully responsive across all breakpoints.",
    challenge: "Most developer portfolios feel generic — cookie-cutter templates with identical layouts. The goal was a distinctive, memorable experience that communicates both technical depth and design sensibility.",
    solution: "Committed to a dark-luxury editorial aesthetic with Syne + JetBrains Mono typography, magnetic 3D tilt interactions, per-section accent colours, and cohesive atmospheric backgrounds across every section.",
    features: [
      "Magnetic 3D tilt interactions on all cards",
      "Animated bento grid hero section",
      "Skills bento with per-skill accent colours",
      "Portfolio section with filter and reveal system",
      "FAQ, Testimonials, and Services sections",
      "Fully responsive across mobile, tablet, desktop",
      "Optimised performance — Lighthouse 95+",
    ],
    techStack: [
      { name: "React.js",      Icon: Code2,  accent: "#61dafb", cat: "Frontend"  },
      { name: "Tailwind CSS",  Icon: Zap,    accent: "#38bdf8", cat: "Styling"   },
      { name: "Framer Motion", Icon: Star,   accent: SUCCESS,   cat: "Animation" },
      { name: "Vite",          Icon: Layers, accent: "#f59e0b", cat: "Build"     },
    ],
    metrics: [
      { val: "95+",  lbl: "Lighthouse score" },
      { val: "100%", lbl: "Responsive"        },
      { val: "8+",   lbl: "Sections"          },
      { val: "0ms",  lbl: "CLS score"         },
    ],
    github: "https://github.com/stephenjosephm",
    live: "#",
  },
];

/* ═══════════════════════════════════════════════════════════
   HOOKS
══════════════════════════════════════════════════════════ */
function useTilt(strength = 4) {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 200, damping: 30 });
  const sy = useSpring(my, { stiffness: 200, damping: 30 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [`${strength}deg`, `-${strength}deg`]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [`-${strength}deg`, `${strength}deg`]);
  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };
  return { ref, rotateX, rotateY, onMove, onLeave };
}

/* ═══════════════════════════════════════════════════════════
   SHARED SMALL COMPONENTS
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

function GlassCard({ children, className = "", style = {}, delay = 0, accent }) {
  return (
    <motion.div
      className={`relative rounded-2xl border border-[#1e293b] bg-[#080b12] overflow-hidden ${className}`}
      style={{ boxShadow: `0 0 0 1px ${toRgba(accent || PRIMARY, 0.04)}`, ...style }}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.52, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none"
        style={{ background: `linear-gradient(90deg, transparent, ${toRgba(accent || PRIMARY, 0.5)}, transparent)` }} />
      <div className="absolute inset-0 opacity-[0.028] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle,#94a3b8 1px,transparent 1px)", backgroundSize: "22px 22px" }} />
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   IMAGE VIEWER
══════════════════════════════════════════════════════════ */
function ImageViewer({ images, accent }) {
  const [active, setActive] = useState(0);
  const { ref, rotateX, rotateY, onMove, onLeave } = useTilt(3);

  return (
    <div className="space-y-3">
      <div ref={ref} style={{ perspective: "900px" }} onMouseMove={onMove} onMouseLeave={onLeave}>
        <motion.div
          className="relative rounded-2xl overflow-hidden border border-[#1e293b]"
          style={{ rotateX, rotateY, transformStyle: "preserve-3d",
            boxShadow: `0 0 0 1px ${toRgba(accent, 0.18)}, 0 32px 72px rgba(0,0,0,0.55)` }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={active}
              src={images[active]}
              alt={`Screenshot ${active + 1}`}
              className="w-full object-cover select-none"
              style={{ height: "clamp(220px, 38vw, 440px)" }}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              draggable={false}
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/75 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: `linear-gradient(90deg,transparent,${accent},transparent)` }} />

          {/* Counter badge */}
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg border border-[#1e293b] bg-[#080b12]/90"
            style={{ backdropFilter: "blur(10px)" }}>
            <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#64748b]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              {active + 1} / {images.length}
            </span>
          </div>

          {images.length > 1 && (
            <>
              {[{ dir: -1, Icon: ChevronLeft, side: "left-3" }, { dir: 1, Icon: ChevronRight, side: "right-3" }].map(({ dir, Icon, side }) => (
                <button key={dir}
                  onClick={() => setActive((i) => (i + dir + images.length) % images.length)}
                  className={`absolute ${side} top-1/2 -translate-y-1/2 w-8 h-8 rounded-xl flex items-center justify-center border border-[#1e293b] bg-[#080b12]/90 text-[#64748b] hover:text-white hover:border-[rgba(37,99,235,0.45)] transition-all duration-250`}
                  style={{ backdropFilter: "blur(10px)" }}>
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </>
          )}
        </motion.div>
      </div>

      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((img, i) => (
            <button key={i} onClick={() => setActive(i)}
              className="relative flex-1 rounded-xl overflow-hidden border transition-all duration-300"
              style={{
                borderColor: i === active ? toRgba(accent, 0.65) : "#1e293b",
                boxShadow: i === active ? `0 0 12px ${toRgba(accent, 0.3)}` : "none",
              }}>
              <img src={img} alt="" className="w-full h-14 object-cover" draggable={false} />
              {i !== active && <div className="absolute inset-0 bg-[#050508]/55" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   METRIC CARD
══════════════════════════════════════════════════════════ */
function MetricCard({ val, lbl, accent, delay }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      className="relative flex flex-col items-center justify-center p-4 rounded-xl border text-center overflow-hidden cursor-default"
      style={{
        background: hovered ? toRgba(accent, 0.07) : "#0d1117",
        borderColor: hovered ? toRgba(accent, 0.5) : "#1e293b",
        boxShadow: hovered ? `0 0 0 1px ${toRgba(accent, 0.2)}, 0 8px 24px ${toRgba(accent, 0.12)}` : "none",
        transition: "all 0.32s ease",
      }}
      initial={{ opacity: 0, y: 14, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.05, y: -2 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute inset-0 pointer-events-none transition-opacity duration-400"
        style={{ background: `radial-gradient(ellipse 80% 60% at 50% 110%,${toRgba(accent, 0.22)} 0%,transparent 70%)`, opacity: hovered ? 1 : 0 }} />
      <p className="text-2xl font-black leading-none mb-1 relative z-10"
        style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.04em", color: accent,
          textShadow: hovered ? `0 0 18px ${toRgba(accent, 0.55)}` : "none", transition: "text-shadow 0.3s" }}>
        {val}
      </p>
      <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#475569] relative z-10"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}>{lbl}</p>
      <motion.div className="absolute bottom-0 left-0 right-0 h-[1.5px]"
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        style={{ background: `linear-gradient(90deg,transparent,${accent},transparent)`, transformOrigin: "left" }} />
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   TECH CARD
══════════════════════════════════════════════════════════ */
function TechCard({ item, delay }) {
  const [hovered, setHovered] = useState(false);
  const { Icon } = item;
  return (
    <motion.div
      className="relative flex flex-col items-center gap-2 p-4 rounded-xl border cursor-default overflow-hidden"
      style={{
        background: hovered ? toRgba(item.accent, 0.08) : "#0d1117",
        borderColor: hovered ? toRgba(item.accent, 0.5) : "#1e293b",
        boxShadow: hovered ? `0 0 0 1px ${toRgba(item.accent, 0.2)}, 0 8px 22px ${toRgba(item.accent, 0.14)}` : "none",
        transition: "all 0.32s ease",
      }}
      initial={{ opacity: 0, y: 16, scale: 0.93 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -3, scale: 1.06 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute inset-0 pointer-events-none transition-opacity duration-400"
        style={{ background: `radial-gradient(ellipse 80% 70% at 50% 110%,${toRgba(item.accent, 0.18)} 0%,transparent 70%)`, opacity: hovered ? 1 : 0 }} />
      <div className="w-9 h-9 rounded-xl flex items-center justify-center border flex-shrink-0"
        style={{ background: toRgba(item.accent, 0.1), borderColor: toRgba(item.accent, 0.3),
          boxShadow: hovered ? `0 0 14px ${toRgba(item.accent, 0.3)}` : "none", transition: "box-shadow 0.3s" }}>
        <Icon className="w-4 h-4" style={{ color: item.accent }} />
      </div>
      <span className="text-[11px] font-black text-[#f1f5f9] text-center leading-tight relative z-10"
        style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.015em" }}>{item.name}</span>
      <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#475569] relative z-10"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}>{item.cat}</span>
      <motion.div className="absolute bottom-0 left-0 right-0 h-[1.5px]"
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        style={{ background: `linear-gradient(90deg,transparent,${item.accent},transparent)`, transformOrigin: "left" }} />
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   FEATURE ITEM
══════════════════════════════════════════════════════════ */
function FeatureItem({ text, accent, delay }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      className="flex items-start gap-3 p-3.5 rounded-xl border transition-all duration-280 cursor-default"
      style={{
        background: hovered ? toRgba(accent, 0.05) : "transparent",
        borderColor: hovered ? toRgba(accent, 0.35) : "#1e293b",
      }}
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 transition-all duration-250"
        style={{ color: hovered ? accent : "#334155" }} />
      <span className="text-[12px] text-[#64748b] leading-snug"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}>{text}</span>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PROJECT NAV CARD
══════════════════════════════════════════════════════════ */
function ProjectNavCard({ project, label, dir }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link to={`/project/${project.id}`} className="flex-1 min-w-0">
      <motion.div
        className="relative flex items-center gap-4 p-5 rounded-2xl border border-[#1e293b] bg-[#080b12] overflow-hidden cursor-pointer"
        style={{
          borderColor: hovered ? toRgba(project.accent, 0.5) : "#1e293b",
          boxShadow: hovered ? `0 8px 28px ${toRgba(project.accent, 0.14)}` : "none",
          transition: "all 0.32s ease",
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 340, damping: 26 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="absolute inset-0 pointer-events-none transition-opacity duration-400"
          style={{ background: `radial-gradient(ellipse 70% 70% at 50% 110%,${toRgba(project.accent, 0.1)} 0%,transparent 70%)`, opacity: hovered ? 1 : 0 }} />
        <div className="absolute top-0 left-0 right-0 h-[1.5px]"
          style={{ background: `linear-gradient(90deg,transparent,${toRgba(project.accent, hovered ? 0.55 : 0.15)},transparent)`, transition: "all 0.35s" }} />
        {dir === -1 && <ChevronLeft className="w-4 h-4 text-[#475569] flex-shrink-0" />}
        <div className="flex-1 min-w-0">
          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#475569] block mb-0.5"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}>{label}</span>
          <span className="text-sm font-black text-[#f1f5f9] block leading-tight mb-0.5 truncate"
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.025em" }}>
            {project.title} {project.subtitle}
          </span>
          <span className="text-[10px] text-[#475569]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}>{project.category}</span>
        </div>
        {dir === 1 && <ChevronRight className="w-4 h-4 text-[#475569] flex-shrink-0" />}
      </motion.div>
    </Link>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN PAGE
══════════════════════════════════════════════════════════ */
export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.id === id) ?? PROJECTS[0];
  const { accent } = project;
  const idx  = PROJECTS.findIndex((p) => p.id === project.id);
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [id]);

  const infoRows = [
    { Icon: Tag,      label: "Category", val: project.category },
    { Icon: Calendar, label: "Year",     val: project.year     },
    { Icon: Zap,      label: "Status",   val: project.status   },
    { Icon: Users,    label: "Type",     val: "Full-Stack"     },
  ];

  return (
    <div className="min-h-screen  pt-24 pb-28 relative overflow-hidden" style={{ background: "#050508" }}>

      {/* ── Atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[700px] h-[400px] opacity-[0.09]"
          style={{ background: `radial-gradient(ellipse,${accent} 0%,transparent 70%)`, filter: "blur(90px)" }} />
        <div className="absolute top-1/2 -right-40 w-[420px] h-[420px] rounded-full opacity-[0.05]"
          style={{ background: `radial-gradient(circle,${SECONDARY} 0%,transparent 70%)`, filter: "blur(80px)" }} />
        <div className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: "radial-gradient(circle,#94a3b8 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* ── Breadcrumb ── */}
        <motion.div className="flex items-center gap-3 mb-10"
          initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
          <motion.button onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-3 py-2 rounded-xl border border-[#1e293b] bg-[#080b12] text-[#64748b] hover:text-[#f1f5f9] hover:border-[rgba(37,99,235,0.4)] transition-all duration-250"
            whileHover={{ scale: 1.04, x: -2 }} whileTap={{ scale: 0.95 }}>
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="text-[10px] font-bold uppercase tracking-[0.16em]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}>Back</span>
          </motion.button>
          <div className="flex items-center gap-1.5">
            <Link to="/portfolio"
              className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#334155] hover:text-[#64748b] transition-colors"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}>Portfolio</Link>
            <span className="text-[#1e293b]">/</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#475569]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}>{project.title}</span>
          </div>
        </motion.div>

        {/* ── Hero Header ── */}
        <motion.div className="mb-14 relative pl-5"
          initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}>
          <motion.div className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full"
            style={{ background: `linear-gradient(180deg,${accent},${SECONDARY})` }}
            initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }} />

          {/* Eyebrow */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1e293b] bg-[#080b12]">
              <span className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: project.status === "Live" ? SUCCESS : accent,
                  boxShadow: `0 0 8px ${project.status === "Live" ? SUCCESS : accent}` }} />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#64748b]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}>{project.status}</span>
            </div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-black font-mono uppercase tracking-[0.14em] rounded-lg border"
              style={{ color: accent, borderColor: toRgba(accent, 0.45), background: toRgba(accent, 0.08) }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent, boxShadow: `0 0 5px ${accent}` }} />
              {project.category}
            </span>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3 text-[#475569]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#475569]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}>{project.year}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-black leading-[0.9] mb-4"
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.045em", fontSize: "clamp(2.4rem,5.5vw,4.2rem)" }}>
            <span style={{ background: "linear-gradient(135deg,#ffffff 0%,#94a3b8 55%,#475569 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {project.title}
            </span>
            <br />
            <span style={{ background: `linear-gradient(135deg,${accent} 0%,${SECONDARY} 100%)`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {project.subtitle}
            </span>
          </h1>

          <p className="text-[#64748b] text-sm md:text-[15px] max-w-2xl leading-relaxed mb-8"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}>{project.tagline}</p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            <motion.a href={project.live} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-black text-sm text-white"
              style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.02em",
                background: `linear-gradient(135deg,${accent},${SECONDARY})`,
                boxShadow: `0 6px 22px ${toRgba(accent, 0.32)}` }}
              whileHover={{ scale: 1.04, y: -1, boxShadow: `0 14px 32px ${toRgba(accent, 0.44)}` }}
              whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 22 }}>
              <ExternalLink className="w-3.5 h-3.5" /> Live Demo
            </motion.a>
            <motion.a href={project.github} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm border border-[#1e293b] bg-[#080b12] text-[#64748b] hover:text-[#f1f5f9] hover:border-[rgba(37,99,235,0.35)] transition-all duration-250"
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.03em" }}
              whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}>
              <Github className="w-3.5 h-3.5" /> View Code
            </motion.a>
          </div>
        </motion.div>

        {/* ── Image + Sidebar ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5 mb-6">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}>
            <ImageViewer images={project.images} accent={accent} />
          </motion.div>

          <div className="flex flex-col gap-4">
            {/* Metrics */}
            <GlassCard accent={accent} delay={0.12}>
              <div className="p-5">
                <SectionLabel accent={accent}>Key Metrics</SectionLabel>
                <div className="grid grid-cols-2 gap-2">
                  {project.metrics.map((m, i) => (
                    <MetricCard key={m.lbl} {...m} accent={accent} delay={i * 0.055} />
                  ))}
                </div>
              </div>
            </GlassCard>

            {/* Info */}
            <GlassCard accent={accent} delay={0.18}>
              <div className="p-5">
                <SectionLabel accent={accent}>Project Info</SectionLabel>
                <div className="space-y-3">
                  {infoRows.map(({ Icon, label, val }) => (
                    <div key={label} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center border border-[#1e293b] bg-[#0d1117] flex-shrink-0">
                        <Icon className="w-3.5 h-3.5 text-[#475569]" />
                      </div>
                      <div className="flex-1 flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#475569]"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}>{label}</span>
                        <span className="text-[11px] font-bold text-[#94a3b8]"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}>{val}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* ── Overview / Challenge / Solution ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          {[
            { heading: "Overview",  body: project.overview,  a: accent    },
            { heading: "Challenge", body: project.challenge, a: "#d97706" },
            { heading: "Solution",  body: project.solution,  a: SUCCESS   },
          ].map(({ heading, body, a }, i) => (
            <GlassCard key={heading} accent={a} delay={i * 0.07}>
              <div className="p-6">
                <SectionLabel accent={a}>{heading}</SectionLabel>
                <p className="text-[#64748b] text-[13px] leading-relaxed"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}>{body}</p>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* ── Features ── */}
        <GlassCard accent={accent} className="mb-5">
          <div className="p-6 md:p-8">
            <SectionLabel accent={accent}>Core Features</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {project.features.map((f, i) => (
                <FeatureItem key={f} text={f} accent={accent} delay={i * 0.05} />
              ))}
            </div>
          </div>
        </GlassCard>

        {/* ── Tech Stack ── */}
        <GlassCard accent={SECONDARY} className="mb-14">
          <div className="p-6 md:p-8">
            <SectionLabel accent={SECONDARY}>Tech Stack</SectionLabel>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {project.techStack.map((t, i) => (
                <TechCard key={t.name} item={t} delay={i * 0.055} />
              ))}
            </div>
          </div>
        </GlassCard>

        {/* ── Prev / Next ── */}
        <motion.div className="flex flex-col sm:flex-row gap-3 mb-8"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <ProjectNavCard project={prev} label="← Previous Project" dir={-1} />
          <ProjectNavCard project={next} label="Next Project →"     dir={1}  />
        </motion.div>

        {/* ── Bottom CTA ── */}
        <motion.div
          className="relative p-8 md:p-10 rounded-2xl border border-[#1e293b] overflow-hidden text-center"
          style={{ background: toRgba(accent, 0.04) }}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(ellipse 60% 80% at 50% 110%,${toRgba(accent, 0.14)} 0%,transparent 70%)` }} />
          <div className="absolute top-0 left-0 right-0 h-[1.5px]"
            style={{ background: `linear-gradient(90deg,transparent,${accent},${SECONDARY},transparent)` }} />
          <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle,#94a3b8 1px,transparent 1px)", backgroundSize: "28px 28px" }} />

          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#475569] mb-3 relative z-10"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Interested in working together?
          </p>
          <h3 className="text-2xl md:text-3xl font-black text-[#f1f5f9] mb-6 relative z-10"
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.03em" }}>
            Let's build your next{" "}
            <span style={{ background: `linear-gradient(135deg,${accent},${SECONDARY})`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              project together.
            </span>
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-3 relative z-10">
            <Link to="/contact">
              <motion.div
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-sm text-white"
                style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.02em",
                  background: `linear-gradient(135deg,${accent},${SECONDARY})`,
                  boxShadow: `0 8px 26px ${toRgba(accent, 0.3)}` }}
                whileHover={{ scale: 1.04, y: -1, boxShadow: `0 14px 34px ${toRgba(accent, 0.44)}` }}
                whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 22 }}>
                Get In Touch <ArrowRight className="w-3.5 h-3.5" />
              </motion.div>
            </Link>
            <Link to="/portfolio">
              <motion.div
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border border-[#1e293b] bg-[#080b12] text-[#64748b] hover:text-[#f1f5f9] hover:border-[rgba(37,99,235,0.35)] transition-all duration-250"
                style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem" }}
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                View All Projects
              </motion.div>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}