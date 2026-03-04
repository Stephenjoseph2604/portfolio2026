// import React from 'react';
// import { motion } from 'framer-motion';
// import { BookOpen, Globe, Layers, Layout, PenTool, ShieldCheck, Smartphone, TrendingUp } from 'lucide-react';

// const services = [
//   {
//     icon: Layers,
//     title: 'Enterprise Application Development',
//     description: 'End-to-end development of secure, scalable enterprise systems using Spring Boot, Microservices principles, RESTful APIs, authentication, and database integration.'
//   },
//   {
//     icon: Globe,
//     title: 'Modern Web Application Development',
//     description: 'Developing dynamic and high-performance web applications using React.js and MERN stack with modular architecture and reusable components.'
//   },
//   {
//     icon: ShieldCheck,
//     title: 'API Security & Architecture',
//     description: 'Implementing JWT authentication, role-based access control, Redis-based token management, and clean backend architecture for secure systems.'
//   },
//   {
//     icon: BookOpen,
//     title: 'Technical Training & Curriculum Design',
//     description: 'Designing industry-oriented training programs and mentoring developers in full-stack development, database design, and real-world project implementation.'
//   }
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.2 }
//   }
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: 'easeOut' }
//   }
// };

// export function ServicesSection() {
//   return (
//     <section id="about" className="py-20 md:py-28 bg-bg-primary">
//       <div className="max-w-7xl mx-auto px-4 md:px-8">
//         {/* Header */}
//         <div className="mb-12 md:mb-20 text-center md:text-left">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-3xl md:text-4xl lg:text-5xl font-medium text-fg-primary mb-4 font-['Syne',sans-serif]"
//           >
//             What I Do
//           </motion.h2>
//           <motion.div
//             initial={{ opacity: 0, scaleX: 0 }}
//             whileInView={{ opacity: 1, scaleX: 1 }}
//             viewport={{ once: true }}
//             className="h-1 w-20 bg-primary mx-auto md:ml-0 rounded-full"
//           />
//         </div>

//         {/* Modern card grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: '-100px' }}
//           className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto"
//         >
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               className="group bg-bg-card/80 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-border/50 hover:border-primary/70 hover:bg-bg-card hover:shadow-lg transition-all duration-400 h-full flex flex-col"
//               whileHover={{ y: -8 }}
//             >
//               {/* Simple icon */}
//               <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 border border-primary/20">
//                 <service.icon className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
//               </div>
              
//               {/* Content */}
//               <h3 className="text-lg md:text-xl font-semibold text-fg-primary mb-4 leading-tight group-hover:text-primary transition-colors">
//                 {service.title}
//               </h3>
//               <p className="text-fg-muted flex-1 mb-6 leading-relaxed text-sm md:text-base">
//                 {service.description}
//               </p>
              
//               {/* Subtle hover accent */}
//               <div className="h-px w-12 bg-gradient-to-r from-primary/30 to-transparent group-hover:w-20 transition-all duration-300" />
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }



// ============ New ==================


import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { BookOpen, Globe, Layers, ShieldCheck, ArrowUpRight } from "lucide-react";

/* ─── Data ───────────────────────────────────────────────── */
const services = [
  {
    icon: Layers,
    title: "Enterprise Application Development",
    description:
      "End-to-end development of secure, scalable enterprise systems using Spring Boot, Microservices, RESTful APIs, authentication, and deep database integration.",
    tag: "Full-Stack",
    accent: "#2563eb",
    stats: [{ val: "10+", lbl: "Systems Built" }, { val: "99%", lbl: "Uptime" }],
    keywords: ["Spring Boot", "Microservices", "REST APIs", "JWT"],
  },
  {
    icon: Globe,
    title: "Modern Web Application Development",
    description:
      "Dynamic, high-performance web applications built with React.js and the MERN stack using modular architecture and fully reusable component systems.",
    tag: "Web Dev",
    accent: "#7c3aed",
    stats: [{ val: "15+", lbl: "Apps Shipped" }, { val: "React", lbl: "Primary Stack" }],
    keywords: ["React.js", "Node.js", "MongoDB", "MERN"],
  },
  {
    icon: ShieldCheck,
    title: "API Security & Architecture",
    description:
      "JWT authentication, role-based access control, Redis-based token management, and clean backend architecture designed for hardened, production-ready systems.",
    tag: "Security",
    accent: "#0f766e",
    stats: [{ val: "Zero", lbl: "Breaches" }, { val: "RBAC", lbl: "Auth Model" }],
    keywords: ["JWT", "Redis", "RBAC", "OAuth2"],
  },
  {
    icon: BookOpen,
    title: "Technical Training & Curriculum Design",
    description:
      "Industry-oriented training programs and developer mentorship across full-stack development, database design, and real-world project implementation.",
    tag: "Training",
    accent: "#d97706",
    stats: [{ val: "200+", lbl: "Trained" }, { val: "5★", lbl: "Rating" }],
    keywords: ["Java", "Full-Stack", "Mentorship", "Curriculum"],
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

/* ─── Magnetic tilt hook ──────────────────────────────────── */
function useTilt(strength = 7) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 28 });
  const sy = useSpring(y, { stiffness: 260, damping: 28 });
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

/* ─── Service Card ────────────────────────────────────────── */
function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false);
  const { ref, rotateX, rotateY, onMove, onLeave } = useTilt();
  const Icon = service.icon;
  const { accent } = service;

  return (
    <motion.div
      className="relative"
      style={{ perspective: "900px" }}
      initial={{ opacity: 0, y: 34, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.58, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        ref={ref}
        className="relative h-full rounded-2xl border border-[#1e293b] bg-[#080b12] overflow-hidden cursor-default"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          boxShadow: hovered
            ? `0 0 0 1.5px ${toRgba(accent, 0.55)}, 0 24px 55px ${toRgba(accent, 0.15)}`
            : "none",
          transition: "box-shadow 0.4s ease",
        }}
        animate={{ scale: hovered ? 1.018 : 1 }}
        transition={{ type: "spring", stiffness: 340, damping: 26 }}
        onMouseMove={onMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { onLeave(); setHovered(false); }}
      >
        {/* Dot-grid texture */}
        <div
          className="absolute inset-0 opacity-[0.032] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle,#94a3b8 1px,transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        {/* Ambient radial glow */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.45 }}
          style={{
            background: `radial-gradient(ellipse 75% 55% at 50% 110%, ${toRgba(accent, 0.2)} 0%, transparent 70%)`,
          }}
        />

        {/* Top accent line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px]"
          animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
            transformOrigin: "left",
          }}
        />

        {/* ── Card body ── */}
        <div className="relative z-10 p-6 md:p-8 flex flex-col h-full gap-5">

          {/* Top row: icon badge + tag + arrow */}
          <div className="flex items-start justify-between gap-3">
            <motion.div
              className="w-12 h-12 rounded-xl flex items-center justify-center border flex-shrink-0"
              style={{
                background: toRgba(accent, 0.1),
                borderColor: toRgba(accent, 0.3),
              }}
              animate={{
                boxShadow: hovered ? `0 0 22px ${toRgba(accent, 0.3)}` : "none",
                scale: hovered ? 1.08 : 1,
              }}
              transition={{ type: "spring", stiffness: 420, damping: 22 }}
            >
              <Icon className="w-5 h-5" style={{ color: accent }} />
            </motion.div>

            <div className="flex items-center gap-2 flex-shrink-0">
              {/* Tag */}
              <span
                className="px-2.5 py-1 text-[9px] font-bold font-mono uppercase tracking-[0.14em] rounded-lg border"
                style={{
                  color: accent,
                  borderColor: toRgba(accent, 0.4),
                  background: toRgba(accent, 0.08),
                }}
              >
                {service.tag}
              </span>

              {/* Arrow */}
              <motion.div
                className="w-7 h-7 rounded-lg flex items-center justify-center border border-[#1e293b]"
                animate={{
                  background: hovered ? toRgba(accent, 0.12) : "transparent",
                  borderColor: hovered ? toRgba(accent, 0.45) : "#1e293b",
                  rotate: hovered ? 0 : -15,
                  opacity: hovered ? 1 : 0.4,
                }}
                transition={{ duration: 0.3 }}
              >
                <ArrowUpRight className="w-3.5 h-3.5" style={{ color: hovered ? accent : "#64748b" }} />
              </motion.div>
            </div>
          </div>

          {/* Title */}
          <div>
            <motion.h3
              className="text-lg md:text-xl font-black text-[#f1f5f9] leading-snug mb-3"
              style={{
                fontFamily: "'Syne', sans-serif",
                letterSpacing: "-0.025em",
                textShadow: hovered ? `0 2px 14px ${toRgba(accent, 0.4)}` : "none",
                transition: "text-shadow 0.4s",
              }}
            >
              {service.title}
            </motion.h3>

            <p
              className="text-[#64748b] text-sm md:text-base leading-relaxed"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {service.description}
            </p>
          </div>

          {/* Keyword chips */}
          <div className="flex flex-wrap gap-1.5">
            {service.keywords.map((kw) => (
              <span
                key={kw}
                className="px-2 py-0.5 text-[9px] font-bold font-mono uppercase tracking-wider rounded border text-[#475569] border-[#1e293b] bg-[#0d1117]"
              >
                {kw}
              </span>
            ))}
          </div>

          {/* Stats row */}
          <div className="flex items-center gap-5 pt-4 border-t border-[#1e293b] mt-auto">
            {service.stats.map((s) => (
              <div key={s.lbl}>
                <p
                  className="text-lg md:text-xl font-black leading-none mb-0.5"
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    letterSpacing: "-0.03em",
                    color: accent,
                    textShadow: hovered ? `0 0 14px ${toRgba(accent, 0.5)}` : "none",
                    transition: "text-shadow 0.4s",
                  }}
                >
                  {s.val}
                </p>
                <p
                  className="text-[9px] uppercase tracking-[0.14em] text-[#475569]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {s.lbl}
                </p>
              </div>
            ))}

            {/* Bottom sweep line */}
            <motion.div
              className="ml-auto h-[2px] rounded-full"
              animate={{ width: hovered ? 48 : 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
            />
          </div>
        </div>

        {/* Corner brackets */}
        <motion.div
          className="absolute top-0 left-0 w-4 h-4 border-t-[1.5px] border-l-[1.5px] rounded-tl-2xl pointer-events-none"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.22 }}
          style={{ borderColor: toRgba(accent, 0.65) }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-4 h-4 border-b-[1.5px] border-r-[1.5px] rounded-br-2xl pointer-events-none"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.22 }}
          style={{ borderColor: toRgba(accent, 0.65) }}
        />
      </motion.div>
    </motion.div>
  );
}

/* ─── Main Component ─────────────────────────────────────── */
export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ background: "#050508" }}
    >

      {/* ── Background atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{ background: `radial-gradient(circle,${PRIMARY} 0%,transparent 70%)`, filter: "blur(70px)" }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-[420px] h-[420px] rounded-full opacity-[0.06]"
          style={{ background: `radial-gradient(circle,${SECONDARY} 0%,transparent 70%)`, filter: "blur(70px)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] opacity-[0.03]"
          style={{ background: "radial-gradient(ellipse,#0f766e 0%,transparent 70%)", filter: "blur(90px)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{ backgroundImage: "radial-gradient(circle,#94a3b8 1px,transparent 1px)", backgroundSize: "36px 36px" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* ── Header ── */}
        <motion.div
          className="mb-14 md:mb-20 relative pl-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Left accent bar */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full"
            style={{ background: `linear-gradient(180deg,${PRIMARY},${SECONDARY})` }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1e293b] bg-[#080b12]">
              <span
                className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"
                style={{ boxShadow: "0 0 8px #10b981" }}
              />
              <span
                className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#64748b]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                What I Do
              </span>
            </div>
            <div
              className="h-px w-10"
              style={{ background: `linear-gradient(90deg,${PRIMARY},transparent)` }}
            />
          </div>

          {/* Title */}
          <h2
            className="text-4xl md:text-6xl lg:text-[68px] font-black leading-[0.92] mb-5"
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.04em" }}
          >
            <span
              style={{
                background: "linear-gradient(135deg,#ffffff 0%,#94a3b8 55%,#475569 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Services &amp;
            </span>
            <br />
            <span
              style={{
                background: `linear-gradient(135deg,${PRIMARY} 0%,${SECONDARY} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Expertise
            </span>
          </h2>

          <p
            className="text-[#64748b] text-sm md:text-base max-w-lg leading-relaxed"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            End-to-end software solutions and industry-focused training.{" "}
            <span className="text-[#475569]">Built for production. Designed to last.</span>
          </p>

          {/* Summary stats */}
          <motion.div
            className="flex flex-wrap gap-8 mt-8"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            {[
              ["4", "Core Services"],
              ["3+", "Years XP"],
              ["200+", "Developers Trained"],
            ].map(([val, lbl]) => (
              <div key={lbl} className="flex items-baseline gap-2">
                <span
                  className="text-2xl md:text-3xl font-black text-[#2563eb]"
                  style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.03em" }}
                >
                  {val}
                </span>
                <span
                  className="text-[10px] uppercase tracking-[0.16em] text-[#475569]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {lbl}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* ── Footer ── */}
        <motion.div
          className="flex items-center justify-center gap-4 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="h-px w-12 bg-[#1e293b]" />
          <span
            className="text-[10px] uppercase tracking-[0.2em] text-[#334155]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {services.length} specialisations · always evolving
          </span>
          <div className="h-px w-12 bg-[#1e293b]" />
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection;