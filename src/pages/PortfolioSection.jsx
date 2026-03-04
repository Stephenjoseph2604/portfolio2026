// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import crmDashboard from "../assets/projects/xamify.png";
// import jobPortal from "../assets/projects/skillbridge.png";
// import personalProfile from "../assets/projects/profile.png";
// const projects = [
//   {
//     title: "CRM Dashboard System",
//     category: "Full Stack Java Application",
//     image: crmDashboard, // ← ADD YOUR CRM IMAGE
//     gradient: "bg-gradient-crm",
//     span: "md:col-span-2 md:row-span-2",
//   },
//   {
//     title: "Job Portal Platform",
//     category: "React + Spring Boot",
//     image: jobPortal, // ← ADD YOUR JOB PORTAL IMAGE
//     gradient: "bg-gradient-jobportal",
//     span: "md:col-span-1 md:row-span-1",
//   },
//   {
//     title: "Personal Developer Portfolio",
//     category: "MERN / React Application",
//     image: personalProfile, // ← ADD YOUR PORTFOLIO IMAGE
//     gradient: "bg-gradient-portfolio",
//     span: "md:col-span-1 md:row-span-1",
//   },
// ];

// export function PortfolioSection() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <section id="portfolio" className="py-24 md:py-32">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
//           <div>
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-3xl md:text-5xl font-light text-fg-primary mb-6 font-['Syne',sans-serif]"
//             >
//               Selected Work
//             </motion.h2>
//             <motion.div
//               initial={{ opacity: 0, width: 0 }}
//               whileInView={{ opacity: 1, width: "100px" }}
//               viewport={{ once: true }}
//               className="h-px bg-primary w-24"
//             />
//           </div>
//           <motion.a
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             href="#"
//             className="inline-flex items-center gap-2 text-fg-muted hover:text-fg-primary transition-colors group"
//           >
//             View All Projects
//             <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//           </motion.a>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
//           {projects.map((project, index) => {
//             const isHovered = hoveredIndex === index;

//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 1, y: 0 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className={`group relative overflow-hidden rounded-2xl border-border bg-bg-card cursor-pointer transition-all duration-500 z-10 hover:z-20 ${project.span} ${
//                   // ← YOUR LAYOUT BACK
//                   isHovered
//                     ? "scale-[1.05] shadow-2xl shadow-primary/40 blur-none z-30 border-primary/50"
//                     : hoveredIndex !== null && !isHovered
//                       ? "scale-90 opacity-60" // ← NO blur-md on container (this fixes image blur)
//                       : "scale-100 opacity-100 blur-none hover:scale-[1.02] hover:shadow-xl hover:z-20"
//                 }`}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//               >
//                 {/* PROJECT IMAGE */}
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ${
//                     isHovered
//                       ? "scale-110 brightness-125"
//                       : hoveredIndex !== null && !isHovered
//                         ? "scale-95 brightness-75 blur-sm"
//                         : "group-hover:scale-105 group-hover:brightness-110"
//                   }`}
//                   onError={(e) => {
//                     e.currentTarget.style.display = "none";
//                     e.currentTarget.nextElementSibling.style.display = "block";
//                   }}
//                 />

//                 {/* Gradient Fallback */}
//                 <div
//                   className={`absolute inset-0 ${project.gradient} transition-all duration-500 ${
//                     isHovered
//                       ? "opacity-20"
//                       : hoveredIndex !== null && !isHovered
//                         ? "opacity-20 blur-sm"
//                         : "opacity-40 hidden"
//                   }`}
//                 />

//                 {/* Abstract shapes */}
//                 <div
//                   className={`absolute inset-0 transition-all duration-700 pointer-events-none ${
//                     isHovered
//                       ? "opacity-25 scale-110"
//                       : hoveredIndex !== null && !isHovered
//                         ? "opacity-5 scale-90 blur-xl"
//                         : "opacity-10 group-hover:scale-110 group-hover:opacity-20"
//                   }`}
//                 >
//                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-fg-primary/20 rounded-full blur-xl" />
//                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-fg-primary/10 rounded-full blur-2xl" />
//                 </div>

//                 {/* Content Overlay */}
//                 <div
//                   className={`absolute inset-0 p-6 md:p-8 flex flex-col justify-end bg-gradient-to-t from-bg-primary/90 via-transparent/60 to-transparent transition-all duration-500 ${
//                     hoveredIndex !== null && !isHovered
//                       ? "blur-sm opacity-70 backdrop-blur-sm"
//                       : ""
//                   }`}
//                 >
//                   <div
//                     className={`transform transition-all duration-500 ${
//                       isHovered
//                         ? "translate-y-0 scale-105 opacity-100"
//                         : hoveredIndex !== null && !isHovered
//                           ? "translate-y-12 scale-90 opacity-50 blur-sm"
//                           : "translate-y-8 group-hover:translate-y-0 opacity-100"
//                     }`}
//                   >
//                     <span
//                       className={`inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/20 rounded-full mb-3 border border-primary/40 backdrop-blur-sm shadow-md transition-all duration-300 ${
//                         isHovered
//                           ? "bg-primary/30 shadow-primary/40 scale-105"
//                           : hoveredIndex !== null && !isHovered
//                             ? "opacity-50 blur-sm scale-90"
//                             : "group-hover:bg-primary/25 group-hover:shadow-primary/20"
//                       }`}
//                     >
//                       {project.category}
//                     </span>
//                     <h3 className="text-xl md:text-2xl font-semibold text-fg-primary flex items-center justify-between leading-tight drop-shadow-md transition-all duration-300 group-hover:drop-shadow-lg">
//                       {project.title}
//                       <ArrowRight
//                         className={`w-5 h-5 transition-all duration-300 ml-4 ${
//                           isHovered
//                             ? "opacity-100 translate-x-2 scale-110 text-primary"
//                             : hoveredIndex !== null && !isHovered
//                               ? "opacity-0 translate-x-0 scale-75 blur-sm"
//                               : "opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
//                         }`}
//                       />
//                     </h3>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


// ========================== New ======================

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, ExternalLink } from "lucide-react";
import crmDashboard from "../assets/projects/xamify.png";
import jobPortal from "../assets/projects/skillbridge.png";
import personalProfile from "../assets/projects/profile.png";

/* ─── Data ───────────────────────────────────────────────── */
const projects = [
  {
    title: "CRM Dashboard System",
    category: "Full Stack Java Application",
    image: crmDashboard,
    tag: "Enterprise",
    year: "2024",
    tech: ["Spring Boot", "React", "MySQL", "JWT"],
    accent: "#2563eb",
    span: "md:col-span-2 md:row-span-2",
    isLarge: true,
  },
  {
    title: "Job Portal Platform",
    category: "React + Spring Boot",
    image: jobPortal,
    tag: "Web App",
    year: "2024",
    tech: ["React", "Spring Boot", "REST API"],
    accent: "#7c3aed",
    span: "md:col-span-1 md:row-span-1",
    isLarge: false,
  },
  {
    title: "Developer Portfolio",
    category: "MERN / React Application",
    image: personalProfile,
    tag: "Portfolio",
    year: "2023",
    tech: ["React", "Tailwind", "Framer Motion"],
    accent: "#0f766e",
    span: "md:col-span-1 md:row-span-1",
    isLarge: false,
  },
];

/* ─── Helpers ─────────────────────────────────────────────── */
const PRIMARY   = "#2563eb";
const SECONDARY = "#7c3aed";

function toRgba(hex, a) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
}

/* ─── Magnetic tilt hook ─────────────────────────────────── */
function useTilt(strength = 6) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 240, damping: 28 });
  const sy = useSpring(y, { stiffness: 240, damping: 28 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [`${strength}deg`, `-${strength}deg`]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [`-${strength}deg`, `${strength}deg`]);
  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { x.set(0); y.set(0); };
  return { ref, rotateX, rotateY, onMove, onLeave };
}

/* ─── Project Card ───────────────────────────────────────── */
function ProjectCard({ project, index, hoveredIndex, setHoveredIndex }) {
  const { ref, rotateX, rotateY, onMove, onLeave } = useTilt(project.isLarge ? 4 : 7);
  const isHovered = hoveredIndex === index;
  const isDimmed  = hoveredIndex !== null && !isHovered;
  const { accent, isLarge } = project;

  return (
    <motion.div
      className={`relative ${project.span}`}
      style={{ perspective: "900px" }}
      initial={{ opacity: 0, y: 36, scale: 0.93 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.58, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        ref={ref}
        className="relative w-full h-full rounded-2xl overflow-hidden cursor-pointer border border-[#1e293b]"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          boxShadow: isHovered
            ? `0 0 0 1.5px ${toRgba(accent, 0.55)}, 0 28px 60px ${toRgba(accent, 0.2)}`
            : "none",
          transition: "box-shadow 0.4s ease",
        }}
        animate={{
          scale: isHovered ? 1.02 : isDimmed ? 0.96 : 1,
          opacity: isDimmed ? 0.55 : 1,
          zIndex: isHovered ? 20 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 26 }}
        onMouseMove={onMove}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => { onLeave(); setHoveredIndex(null); }}
      >
        {/* ── Image ── */}
        <motion.img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
          animate={{
            scale: isHovered ? 1.09 : isDimmed ? 0.97 : 1.01,
            filter: isHovered
              ? "blur(5px) brightness(0.5)"
              : isDimmed
              ? "blur(2px) brightness(0.4)"
              : "blur(0px) brightness(0.72)",
          }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />

        {/* Dot-grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle,#94a3b8 1px,transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        {/* Permanent dark vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/95 via-[#050508]/30 to-transparent pointer-events-none" />

        {/* Accent glow on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          style={{
            background: `radial-gradient(ellipse 80% 55% at 50% 110%, ${toRgba(accent, 0.25)} 0%, transparent 70%)`,
          }}
        />

        {/* Dynamic border glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ boxShadow: `inset 0 0 0 1.5px ${toRgba(accent, 0.5)}` }}
        />

        {/* ── Top-left: year badge ── */}
        <motion.div
          className="absolute top-4 left-4 z-20"
          animate={{ opacity: isHovered ? 0 : 0.85 }}
          transition={{ duration: 0.22 }}
        >
          <span
            className="px-2.5 py-1 text-[9px] font-bold font-mono uppercase tracking-[0.18em] rounded-lg border text-[#64748b] border-[#1e293b] bg-[#080b12]/80"
            style={{ backdropFilter: "blur(8px)" }}
          >
            {project.year}
          </span>
        </motion.div>

        {/* ── Top-right: arrow icon on hover ── */}
        <motion.div
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-xl flex items-center justify-center border"
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.6,
            rotate: isHovered ? 0 : -20,
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            borderColor: toRgba(accent, 0.45),
            background: toRgba(accent, 0.1),
            boxShadow: `0 0 14px ${toRgba(accent, 0.25)}`,
          }}
        >
          <ArrowUpRight className="w-4 h-4" style={{ color: accent }} />
        </motion.div>

        {/* ── Bottom content ── */}
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 z-20">
          <motion.div
            animate={{ y: isHovered ? 0 : 6 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Category badge + tag */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[9px] font-bold font-mono uppercase tracking-[0.13em] rounded-lg border"
                style={{ color: accent, borderColor: toRgba(accent, 0.45), background: toRgba(accent, 0.09) }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent, boxShadow: `0 0 5px ${accent}` }} />
                {project.category}
              </span>
              <motion.span
                className="text-[9px] font-mono uppercase tracking-wider text-[#475569]"
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.22 }}
              >
                {project.tag}
              </motion.span>
            </div>

            {/* Title */}
            <h3
              className={`font-black text-[#f1f5f9] leading-tight mb-3 ${isLarge ? "text-2xl md:text-3xl lg:text-4xl" : "text-xl md:text-2xl"}`}
              style={{
                fontFamily: "'Syne', sans-serif",
                letterSpacing: "-0.03em",
                textShadow: isHovered ? `0 2px 18px ${toRgba(accent, 0.45)}` : "none",
                transition: "text-shadow 0.4s",
              }}
            >
              {project.title}
            </h3>

            {/* Tech chips — only on hover */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  className="flex flex-wrap gap-1.5 mb-1"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[9px] font-bold font-mono uppercase tracking-wider rounded border text-[#475569] border-[#1e293b] bg-[#0d1117]/90"
                    >
                      {t}
                    </span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Bottom sweep line */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[2px]"
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
            style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)`, transformOrigin: "left" }}
          />
        </div>

        {/* Corner brackets */}
        <motion.div
          className="absolute top-0 left-0 w-5 h-5 border-t-[1.5px] border-l-[1.5px] rounded-tl-2xl pointer-events-none"
          animate={{ opacity: isHovered ? 1 : 0 }}
          style={{ borderColor: toRgba(accent, 0.65) }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-5 h-5 border-b-[1.5px] border-r-[1.5px] rounded-br-2xl pointer-events-none"
          animate={{ opacity: isHovered ? 1 : 0 }}
          style={{ borderColor: toRgba(accent, 0.65) }}
        />
      </motion.div>
    </motion.div>
  );
}

/* ─── Main Component ─────────────────────────────────────── */
export function PortfolioSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="portfolio"
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ background: "#050508" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=JetBrains+Mono:wght@400;600&display=swap');`}</style>

      {/* ── Background atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-[480px] h-[300px] opacity-[0.07]"
          style={{ background: `radial-gradient(ellipse,${PRIMARY} 0%,transparent 70%)`, filter: "blur(70px)" }} />
        <div className="absolute -bottom-32 right-1/4 w-[360px] h-[360px] rounded-full opacity-[0.05]"
          style={{ background: `radial-gradient(circle,${SECONDARY} 0%,transparent 70%)`, filter: "blur(70px)" }} />
        <div className="absolute inset-0 opacity-[0.022]"
          style={{ backgroundImage: "radial-gradient(circle,#94a3b8 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

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

          {/* Eyebrow + "View All" in same row */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1e293b] bg-[#080b12]">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"
                  style={{ boxShadow: "0 0 8px #10b981" }} />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#64748b]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Selected Work
                </span>
              </div>
              <div className="h-px w-10"
                style={{ background: `linear-gradient(90deg,${PRIMARY},transparent)` }} />
            </div>

            {/* View all link */}
            <motion.a
              href="#"
              className="group inline-flex items-center gap-2 text-[#64748b] hover:text-[#f1f5f9] transition-colors duration-300"
              whileHover={{ x: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.18em]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                View All Projects
              </span>
              <motion.div
                className="w-6 h-6 rounded-lg flex items-center justify-center border border-[#1e293b] bg-[#080b12]"
                whileHover={{ borderColor: toRgba(PRIMARY, 0.5), background: toRgba(PRIMARY, 0.08) }}
              >
                <ArrowRight className="w-3 h-3" />
              </motion.div>
            </motion.a>
          </div>

          {/* Title */}
          <h2
            className="text-4xl md:text-6xl lg:text-[68px] font-black leading-[0.92] mb-5"
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.04em" }}
          >
            <span style={{ background: "linear-gradient(135deg,#ffffff 0%,#94a3b8 55%,#475569 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Selected
            </span>
            <br />
            <span style={{ background: `linear-gradient(135deg,${PRIMARY} 0%,${SECONDARY} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Work
            </span>
          </h2>

          <p className="text-[#64748b] text-sm md:text-base max-w-lg leading-relaxed"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Projects built for production — hover to explore tech stack and details.
          </p>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap gap-8 mt-7"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            {[["3+", "Featured Projects"], ["Full-Stack", "Approach"], ["Prod-Ready", "Delivery"]].map(([val, lbl]) => (
              <div key={lbl} className="flex items-baseline gap-2">
                <span className="text-xl md:text-2xl font-black text-[#2563eb]"
                  style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.03em" }}>
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

        {/* ── Project Grid ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4"
          style={{ gridAutoRows: "clamp(240px, 28vw, 340px)" }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>

        {/* ── Footer ── */}
        <motion.div
          className="flex items-center justify-center gap-4 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="h-px w-12 bg-[#1e293b]" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#334155]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            {projects.length} projects · more on request
          </span>
          <div className="h-px w-12 bg-[#1e293b]" />
        </motion.div>
      </div>
    </section>
  );
}

export default PortfolioSection;