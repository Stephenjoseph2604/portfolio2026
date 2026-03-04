import reactLogo from "../assets/skills/react.png";
import reduxLogo from "../assets/skills/redux.png";
import androidLogo from "../assets/skills/android.png";
import cssLogo from "../assets/skills/css.png";
import htmlLogo from "../assets/skills/html.png";
import nodeLogo from "../assets/skills/node.png";
import dataLogo from "../assets/skills/data.png";
import expressLogo from "../assets/skills/express.png";
import eclipseLogo from "../assets/skills/eclipse.png";
import javaLogo from "../assets/skills/java.png";
import tailwindLogo from "../assets/skills/tailwind.png";
import jwtLogo from "../assets/skills/jwt.png";
import jsLogo from "../assets/skills/js.png";
import ktLogo from "../assets/skills/kt.png";
import intellijLogo from "../assets/skills/intellij.png";
import mysqlLogo from "../assets/skills/mysql.png";
import postmanLogo from "../assets/skills/postman.png";
import mongoLogo from "../assets/skills/mongo.png";
import springLogo from "../assets/skills/spring.png";
import securityLogo from "../assets/skills/security.png";
import springbootLogo from "../assets/skills/springboot.png";
import vsLogo from "../assets/skills/vs.png";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

/* ─────────────────────────────────────────
   Skill data  –  each skill keeps its own
   accent colour for personalised glow/badge
───────────────────────────────────────── */
const skillsData = [
  { id: 1,  image: reactLogo,      title: "React",            category: "Frontend", accent: "#61dafb" },
  { id: 2,  image: jsLogo,         title: "JavaScript",       category: "Language", accent: "#f7df1e" },
  { id: 3,  image: tailwindLogo,   title: "Tailwind CSS",     category: "Styling",  accent: "#38bdf8" },
  { id: 4,  image: nodeLogo,       title: "Node.js",          category: "Backend",  accent: "#84cc16" },
  { id: 5,  image: springbootLogo, title: "Spring Boot",      category: "Backend",  accent: "#6db33f" },
  { id: 6,  image: javaLogo,       title: "Java",             category: "Language", accent: "#f89820" },
  { id: 7,  image: expressLogo,    title: "Express.js",       category: "Backend",  accent: "#94a3b8" },
  { id: 8,  image: mysqlLogo,      title: "MySQL",            category: "Database", accent: "#00758f" },
  { id: 9,  image: mongoLogo,      title: "MongoDB",          category: "Database", accent: "#4db33d" },
  { id: 10, image: androidLogo,    title: "Android",          category: "Mobile",   accent: "#3ddc84" },
  { id: 11, image: jwtLogo,        title: "JWT Auth",         category: "Security", accent: "#e11d48" },
  { id: 12, image: reduxLogo,      title: "Redux",            category: "State",    accent: "#764abc" },
  { id: 13, image: cssLogo,        title: "CSS",              category: "Styling",  accent: "#264de4" },
  { id: 14, image: htmlLogo,       title: "HTML",             category: "Frontend", accent: "#e34c26" },
  { id: 15, image: vsLogo,         title: "VS Code",          category: "Tools",    accent: "#007acc" },
  { id: 16, image: intellijLogo,   title: "IntelliJ IDEA",    category: "Tools",    accent: "#fe315d" },
  { id: 17, image: postmanLogo,    title: "Postman",          category: "Tools",    accent: "#ff6c37" },
  { id: 18, image: springLogo,     title: "Spring Framework", category: "Backend",  accent: "#6db33f" },
  { id: 19, image: ktLogo,         title: "Kotlin",           category: "Mobile",   accent: "#7f52ff" },
  { id: 20, image: securityLogo,   title: "Spring Security",  category: "Security", accent: "#e11d48" },
  { id: 21, image: eclipseLogo,    title: "Eclipse IDE",      category: "Tools",    accent: "#9b59b6" },
  { id: 22, image: dataLogo,       title: "Data Structures",  category: "Core",     accent: "#0f766e" },
];

/* ─────────────────────────────────────────
   6-column bento layout pattern (repeating)
───────────────────────────────────────── */
const layoutPattern = [
  { col: "col-span-2", row: "row-span-1" },
  { col: "col-span-1", row: "row-span-2" },
  { col: "col-span-1", row: "row-span-1" },
  { col: "col-span-2", row: "row-span-1" },
  { col: "col-span-1", row: "row-span-1" },
  { col: "col-span-1", row: "row-span-1" },
  { col: "col-span-1", row: "row-span-1" },
  { col: "col-span-2", row: "row-span-1" },
  { col: "col-span-1", row: "row-span-1" },
  { col: "col-span-2", row: "row-span-2" },
  { col: "col-span-1", row: "row-span-1" },
  { col: "col-span-1", row: "row-span-1" },
];

/* ─────────────────────────────────────────
   Helper: hex → rgba string
───────────────────────────────────────── */
function toRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

/* ─────────────────────────────────────────
   Magnetic 3-D tilt hook
───────────────────────────────────────── */
function useTilt() {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 28 });
  const sy = useSpring(y, { stiffness: 260, damping: 28 });
  const rotateX = useTransform(sy, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(sx, [-0.5, 0.5], ["-10deg", "10deg"]);

  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return { ref, rotateX, rotateY, onMove, onLeave };
}

/* ─────────────────────────────────────────
   Individual skill card
───────────────────────────────────────── */
function SkillCard({ skill, colClass, rowClass, delay }) {
  const [hovered, setHovered] = useState(false);
  const { ref, rotateX, rotateY, onMove, onLeave } = useTilt();
  const { accent } = skill;

  return (
    <motion.div
      className={`${colClass} ${rowClass} relative`}
      style={{ perspective: "900px" }}
      initial={{ opacity: 0, y: 38, scale: 0.93 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.58, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        ref={ref}
        className="relative w-full h-full rounded-2xl overflow-hidden cursor-pointer border border-[#1e293b] bg-[#0d1117] group"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        animate={{ scale: hovered ? 1.025 : 1 }}
        transition={{ type: "spring", stiffness: 360, damping: 26 }}
        onMouseMove={onMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { onLeave(); setHovered(false); }}
      >
        {/* Dot-grid texture */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        {/* Per-skill ambient radial glow */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          style={{
            background: `radial-gradient(ellipse 75% 75% at 50% 100%, ${toRgba(accent, 0.18)} 0%, transparent 70%)`,
          }}
        />

        {/* Dynamic border ring */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            boxShadow: `inset 0 0 0 1.5px ${toRgba(accent, 0.5)}, 0 0 30px ${toRgba(accent, 0.18)}`,
          }}
        />

        {/* ── IDLE: icon + mono label ── */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 p-4"
          animate={{ opacity: hovered ? 0 : 1, y: hovered ? -10 : 0 }}
          transition={{ duration: 0.22 }}
        >
          {/* Soft glow halo behind icon */}
          <div className="relative flex items-center justify-center">
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                inset: "-50%",
                background: `radial-gradient(circle, ${toRgba(accent, 0.2)} 0%, transparent 65%)`,
                filter: "blur(10px)",
              }}
            />
            <img
              src={skill.image}
              alt={skill.title}
              draggable={false}
              className="w-12 h-12 md:w-14 md:h-14 lg:w-[60px] lg:h-[60px] object-contain relative z-10 select-none"
              style={{
                filter: `drop-shadow(0 6px 16px ${toRgba(accent, 0.45)}) brightness(1.08) saturate(1.18)`,
              }}
            />
          </div>

          <span
            className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.16em] text-[#64748b] select-none text-center leading-tight"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {skill.title}
          </span>
        </motion.div>

        {/* ── HOVER: reveal panel ── */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 z-20"
          animate={{
            opacity: hovered ? 1 : 0,
            y: hovered ? 0 : 16,
            scale: hovered ? 1 : 0.92,
          }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background:
              "linear-gradient(155deg, rgba(13,17,23,0.97) 0%, rgba(5,5,8,0.99) 100%)",
            backdropFilter: "blur(20px)",
          }}
        >
          {/* Icon badge */}
          <motion.div
            className="relative flex items-center justify-center rounded-xl p-2.5 border"
            style={{
              background: toRgba(accent, 0.1),
              borderColor: toRgba(accent, 0.32),
              boxShadow: `0 0 22px ${toRgba(accent, 0.22)}`,
            }}
            animate={{ scale: hovered ? 1 : 0.82 }}
            transition={{ type: "spring", stiffness: 440, damping: 24, delay: 0.04 }}
          >
            <img
              src={skill.image}
              alt={skill.title}
              draggable={false}
              className="w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain select-none"
              style={{ filter: "brightness(1.1) saturate(1.25)" }}
            />
          </motion.div>

          {/* Title */}
          <motion.h3
            className="text-sm md:text-base lg:text-[17px] font-black text-[#f1f5f9] text-center leading-tight select-none"
            style={{
              fontFamily: "'Syne', sans-serif",
              letterSpacing: "-0.025em",
              textShadow: `0 2px 14px ${toRgba(accent, 0.4)}`,
            }}
            animate={{ y: hovered ? 0 : 6 }}
            transition={{ type: "spring", stiffness: 420, damping: 26, delay: 0.06 }}
          >
            {skill.title}
          </motion.h3>

          {/* Category badge */}
          <motion.span
            className="flex items-center gap-1.5 px-2.5 py-1 text-[9px] md:text-[10px] font-bold font-mono uppercase tracking-[0.14em] rounded-lg border select-none"
            style={{
              color: accent,
              borderColor: toRgba(accent, 0.42),
              background: toRgba(accent, 0.08),
            }}
            animate={{ y: hovered ? 0 : 8, opacity: hovered ? 1 : 0 }}
            transition={{ delay: 0.1, duration: 0.24 }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: accent, boxShadow: `0 0 6px ${accent}` }}
            />
            {skill.category}
          </motion.span>

          {/* Bottom sweep line */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[2px]"
            animate={{ scaleX: hovered ? 1 : 0 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
            style={{
              background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
              transformOrigin: "left",
            }}
          />

          {/* Corner brackets */}
          <div
            className="absolute top-0 left-0 w-4 h-4 border-t-[1.5px] border-l-[1.5px] rounded-tl-2xl"
            style={{ borderColor: toRgba(accent, 0.65) }}
          />
          <div
            className="absolute bottom-0 right-0 w-4 h-4 border-b-[1.5px] border-r-[1.5px] rounded-br-2xl"
            style={{ borderColor: toRgba(accent, 0.65) }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   Section header
───────────────────────────────────────── */
function SectionHeader() {
  return (
    <div className="mb-14 md:mb-20 relative pl-5">
      {/* Left accent bar */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full"
        style={{ background: "linear-gradient(180deg, #2563eb, #7c3aed)" }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Eyebrow pill */}
      <motion.div
        className="flex items-center gap-3 mb-5"
        initial={{ opacity: 0, x: -18 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1e293b] bg-[#080b12]">
          <span
            className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"
            style={{ boxShadow: "0 0 8px #10b981, 0 0 18px rgba(16,185,129,0.35)" }}
          />
          <span
            className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#64748b]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Technical Arsenal
          </span>
        </div>
        <div
          className="h-px w-16"
          style={{ background: "linear-gradient(90deg, #2563eb, transparent)" }}
        />
      </motion.div>

      {/* Title */}
      <motion.h2
        className="text-4xl md:text-6xl lg:text-[72px] font-black leading-[0.92] mb-5"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.04em" }}
      >
        <span
          style={{
            background: "linear-gradient(135deg, #ffffff 0%, #94a3b8 60%, #475569 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Skills &amp;
        </span>
        <br />
        <span
          style={{
            background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Mastery
        </span>
      </motion.h2>

      {/* Sub-text */}
      <motion.p
        className="text-[#64748b] text-sm md:text-base max-w-lg leading-relaxed"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.18 }}
      >
        Cutting-edge technologies powering modern development excellence.{" "}
        <span className="text-[#475569]">Hover any card to explore.</span>
      </motion.p>

      {/* Stats */}
      <motion.div
        className="flex flex-wrap items-center gap-8 mt-8"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.28 }}
      >
        {[
          { value: "22+", label: "Technologies" },
          { value: "7+",  label: "Categories"   },
          { value: "3+",  label: "Years XP"     },
        ].map((s) => (
          <div key={s.label} className="flex items-baseline gap-2">
            <span
              className="text-2xl md:text-3xl font-black text-[#2563eb]"
              style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.03em" }}
            >
              {s.value}
            </span>
            <span
              className="text-[10px] uppercase tracking-[0.16em] text-[#475569]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {s.label}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Root component
───────────────────────────────────────── */
const SkillsBentoGrid1 = () => {
  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ background: "#050508" }}
    >
      {/* Font imports */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=JetBrains+Mono:wght@400;600;700&display=swap');
      `}</style>

      {/* ── Background atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Blue blob top-left */}
        <div
          className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #2563eb 0%, transparent 70%)", filter: "blur(70px)" }}
        />
        {/* Violet blob bottom-right */}
        <div
          className="absolute -bottom-40 -right-40 w-[440px] h-[440px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)", filter: "blur(70px)" }}
        />
        {/* Centre teal whisper */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[320px] opacity-[0.035]"
          style={{ background: "radial-gradient(ellipse, #0f766e 0%, transparent 70%)", filter: "blur(90px)" }}
        />
        {/* Dot-grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <SectionHeader />

        {/* ── Bento Grid ── */}
        <div
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3"
          style={{ gridAutoRows: "clamp(125px, 16.5vw, 192px)" }}
        >
          {skillsData.map((skill, index) => {
            const lp = layoutPattern[index % layoutPattern.length];
            return (
              <SkillCard
                key={skill.id}
                skill={skill}
                colClass={lp.col}
                rowClass={lp.row}
                delay={index * 0.038}
              />
            );
          })}
        </div>

        {/* ── Footer ── */}
        <motion.div
          className="flex items-center justify-center gap-4 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.85 }}
        >
          <div className="h-px w-16 bg-[#1e293b]" />
          <span
            className="text-[10px] uppercase tracking-[0.22em] text-[#334155]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {skillsData.length} technologies · always growing
          </span>
          <div className="h-px w-16 bg-[#1e293b]" />
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsBentoGrid1;