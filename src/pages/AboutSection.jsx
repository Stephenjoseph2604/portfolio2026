// import { HeroImage } from "../components/HeroImage";
// import sj from "../assets/logo/sj2.jpeg";

// import { motion } from "framer-motion";
// export function AboutSection() {
//   return (
//     <section
//       id="about"
//       className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-bg-primary to-bg-secondary/20 relative overflow-hidden"
//     >
//       {/* Subtle background elements */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-20 left-10 w-24 h-24 border-2 border-primary/30 rounded-full animate-pulse [animation-delay:2s]" />
//         <div className="absolute bottom-32 right-20 w-20 h-20 border border-success/30 rounded-full animate-ping" />
//         <div className="absolute top-1/2 right-10 w-16 h-16 border border-secondary/30 rounded-full animate-bounce [animation-delay:1s]" />
//       </div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start min-h-[70vh]">
//           {/* LEFT: Your Bio */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="lg:pr-12 space-y-8"
//           >
//             <div className="max-w-lg">
//               {/* Section Intro */}
//               <div className="inline-flex items-center gap-3 mb-8 p-3 bg-primary/10 rounded-xl border border-primary/20 max-w-max">
//                 <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
//                 <span className="text-sm font-semibold text-primary tracking-wider uppercase">
//                   About Me
//                 </span>
//               </div>

//               <h2 className="text-4xl md:text-5xl lg:text-6xl font-light font-['Syne',sans-serif] bg-gradient-to-r from-fg-primary via-primary to-secondary bg-clip-text text-transparent leading-tight">
//                 Hi, I'm <br />
//                 <span className="font-semibold">Stephen Joseph</span>
//               </h2>

//               {/* Your Bio - Perfect Typography */}
//               <div className="space-y-6 mt-8 prose prose-lg max-w-2xl">
//                 <p className="text-xl text-fg-primary/90 leading-relaxed font-light">
//                   An experienced Full Stack Developer and Corporate Trainer
//                   passionate about building scalable, secure, and real-world
//                   software solutions.
//                 </p>

//                 <div className="grid md:grid-cols-2 gap-6 text-lg text-fg-muted/90 leading-relaxed space-y-4 md:space-y-0">
//                   <p>
//                     I specialize in{" "}
//                     <span className="font-semibold text-primary">
//                       Java Full Stack
//                     </span>{" "}
//                     and{" "}
//                     <span className="font-semibold text-secondary">
//                       MERN Stack
//                     </span>{" "}
//                     development, with strong expertise in databases, RESTful
//                     APIs, and modern frameworks.
//                   </p>
//                   <p>
//                     Hands-on experience managing the complete application
//                     lifecycle—from requirement analysis and system design to
//                     development, testing, deployment, and production support.
//                   </p>
//                   <p>
//                     Deeply involved in corporate training and academic
//                     mentoring. Conducted training programs in colleges and
//                     institutions, mentoring 200+ students through industry-ready
//                     projects.
//                   </p>
//                   <p>
//                     Currently expanding into{" "}
//                     <span className="font-semibold text-success bg-success/10 px-2 py-1 rounded-lg">
//                       AI-driven development
//                     </span>
//                     , integrating intelligent solutions into modern software
//                     systems.
//                   </p>
//                 </div>

//                 <p className="text-lg text-fg-primary/80 italic border-l-4 border-primary/30 pl-6 py-4 bg-bg-secondary/50 backdrop-blur-sm rounded-r-lg">
//                   "I believe in continuous learning, clean architecture, and
//                   empowering others through knowledge—whether through code or
//                   the classroom."
//                 </p>

//                 {/* Ultra-Compact Stats + CTA */}
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 pt-3 border-t border-border/50 mt-5 h-20">
//                   {/* Trainees */}
//                   <motion.div
//                     className="text-center p-1.5 md:p-2 rounded-lg bg-primary/5 border border-primary/20 group hover:bg-primary/10 hover:shadow-sm transition-all duration-300 flex flex-col justify-center"
//                     whileHover={{ scale: 1.02 }}
//                   >
//                     <div className="text-lg md:text-xl font-bold text-primary group-hover:text-fg-primary mb-0.5">
//                       200+
//                     </div>
//                     <div className="text-[9px] md:text-[10px] text-fg-muted/90 uppercase tracking-widest font-medium">
//                       Trainees
//                     </div>
//                   </motion.div>

//                   {/* Projects */}
//                   <motion.div
//                     className="text-center p-1.5 md:p-2 rounded-lg bg-success/5 border border-success/20 group hover:bg-success/10 hover:shadow-sm transition-all duration-300 flex flex-col justify-center"
//                     whileHover={{ scale: 1.02 }}
//                   >
//                     <div className="text-lg md:text-xl font-bold text-success mb-0.5">
//                       10+
//                     </div>
//                     <div className="text-[9px] md:text-[10px] text-fg-muted/90 uppercase tracking-widest font-medium">
//                       Projects
//                     </div>
//                   </motion.div>

//                   {/* Years Exp */}
//                   <motion.div
//                     className="text-center p-1.5 md:p-2 rounded-lg bg-secondary/5 border border-secondary/20 group hover:bg-secondary/10 hover:shadow-sm transition-all duration-300 flex flex-col justify-center"
//                     whileHover={{ scale: 1.02 }}
//                   >
//                     <div className="text-lg md:text-xl font-bold text-secondary mb-0.5">
//                       5+
//                     </div>
//                     <div className="text-[9px] md:text-[10px] text-fg-muted/90 uppercase tracking-widest font-medium">
//                       Years Exp
//                     </div>
//                   </motion.div>

//                   {/* Get In Touch - Minimal */}
//                   <motion.a
//                     href="/contact"
//                     className="col-span-2 flex items-center justify-center md:col-auto text-center px-4 py-1.5 md:py-2 rounded-lg bg-primary/10  text-primary/98 font-medium text-xs md:text-sm shadow-sm hover:shadow-md hover:from-primary hover:to-secondary hover:-translate-y-0.5 border border-primary/40 hover:border-primary/60 transition-all duration-300 whitespace-nowrap"
//                     whileHover={{ y: -1, scale: 1.01 }}
//                     whileTap={{ scale: 0.99 }}
//                   >
//                     G I T →
//                   </motion.a>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* RIGHT: HeroImage Component */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="lg:pl-12"
//           >
//             <HeroImage imageSrc={sj} fallbackImage={sj} />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


// ======================= New =====================

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { HeroImage } from "../components/HeroImage";
import sj from "../assets/logo/sj2.jpeg";

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

/* ─── Stats data ──────────────────────────────────────────── */
const stats = [
  { val: "200+", lbl: "Trainees",  accent: PRIMARY   },
  { val: "10+",  lbl: "Projects",  accent: SUCCESS   },
  { val: "5+",   lbl: "Years XP",  accent: SECONDARY },
];

/* ─── Highlight tags inline ───────────────────────────────── */
function Tag({ children, color }) {
  return (
    <span
      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg font-bold"
      style={{
        color,
        background: toRgba(color, 0.1),
        border: `1px solid ${toRgba(color, 0.3)}`,
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "0.875em",
      }}
    >
      {children}
    </span>
  );
}

/* ─── Stat Card ───────────────────────────────────────────── */
function StatCard({ val, lbl, accent, delay }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      className="relative flex flex-col items-center justify-center rounded-2xl border p-4 cursor-default overflow-hidden"
      style={{
        background: hovered ? toRgba(accent, 0.08) : "#080b12",
        borderColor: hovered ? toRgba(accent, 0.5) : "#1e293b",
        boxShadow: hovered ? `0 0 0 1px ${toRgba(accent, 0.2)}, 0 12px 30px ${toRgba(accent, 0.14)}` : "none",
        transition: "all 0.35s ease",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.04, y: -3 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glow blob */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-400"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 110%, ${toRgba(accent, 0.2)} 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0,
        }}
      />
      <p
        className="relative z-10 text-2xl md:text-3xl font-black leading-none mb-1"
        style={{
          fontFamily: "'Syne', sans-serif",
          letterSpacing: "-0.04em",
          color: accent,
          textShadow: hovered ? `0 0 16px ${toRgba(accent, 0.5)}` : "none",
          transition: "text-shadow 0.35s",
        }}
      >
        {val}
      </p>
      <p
        className="relative z-10 text-[9px] font-bold uppercase tracking-[0.18em] text-[#475569]"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {lbl}
      </p>
      {/* Bottom sweep */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] transition-transform duration-500 origin-left"
        style={{
          background: `linear-gradient(90deg, ${accent}, transparent)`,
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
        }}
      />
    </motion.div>
  );
}

/* ─── Image frame with tilt ──────────────────────────────── */
function ImageFrame({ imageSrc }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 30 });
  const sy = useSpring(y, { stiffness: 200, damping: 30 });
  const rotateX = useTransform(sy, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(sx, [-0.5, 0.5], ["-8deg", "8deg"]);

  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <div ref={ref} className="relative" style={{ perspective: "900px" }}
      onMouseMove={onMove} onMouseLeave={onLeave}>
      <motion.div
        className="relative rounded-3xl "
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        {/* Accent border glow */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none z-10"
          style={{ boxShadow: `inset 0 0 0 1px ${toRgba(PRIMARY, 0.2)}` }}
        />

        {/* Main image */}
        <HeroImage imageSrc={imageSrc} fallbackImage={imageSrc} />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/60 via-transparent to-transparent pointer-events-none z-10" />
      </motion.div>

      {/* Floating badge — top right */}
      <motion.div
        className="absolute -top-4 -right-4 z-20 flex items-center gap-2 px-3 py-2 rounded-xl bg-[#080b12]"
        style={{ backdropFilter: "blur(12px)", boxShadow: `0 8px 24px rgba(0,0,0,0.4)` }}
        initial={{ opacity: 0, scale: 0.8, y: 8 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <span
          className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"
          style={{ boxShadow: "0 0 8px #10b981" }}
        />
        <span
          className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#64748b]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Available for Projects
        </span>
      </motion.div>

      {/* Floating badge — bottom left */}
      <motion.div
        className="absolute -bottom-4 -left-4 z-20 flex items-center gap-2 px-3 py-2 rounded-xl border border-[#1e293b] bg-[#080b12]"
        style={{ backdropFilter: "blur(12px)", boxShadow: `0 8px 24px rgba(0,0,0,0.4)` }}
        initial={{ opacity: 0, scale: 0.8, y: -8 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.65, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <span
          className="text-[10px] font-bold uppercase tracking-[0.18em]"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: PRIMARY }}
        >
          Full Stack · Trainer
        </span>
        <div
          className="w-5 h-5 rounded-lg flex items-center justify-center border"
          style={{ borderColor: toRgba(PRIMARY, 0.4), background: toRgba(PRIMARY, 0.1) }}
        >
          <span className="text-[9px]" style={{ color: PRIMARY }}>✦</span>
        </div>
      </motion.div>

      {/* Decorative blobs behind frame */}
      <div
        className="absolute -inset-6 -z-10 rounded-3xl opacity-25"
        style={{ background: `radial-gradient(ellipse at 30% 50%, ${toRgba(PRIMARY, 0.35)} 0%, transparent 60%)`, filter: "blur(30px)" }}
      />
      <div
        className="absolute -inset-6 -z-10 rounded-3xl opacity-15"
        style={{ background: `radial-gradient(ellipse at 70% 60%, ${toRgba(SECONDARY, 0.4)} 0%, transparent 60%)`, filter: "blur(30px)" }}
      />
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────── */
export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden"
      style={{ background: "#050508" }}
    >

      {/* ── Background atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-0 w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{ background: `radial-gradient(circle,${PRIMARY} 0%,transparent 70%)`, filter: "blur(80px)" }} />
        <div className="absolute -bottom-32 right-0 w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{ background: `radial-gradient(circle,${SECONDARY} 0%,transparent 70%)`, filter: "blur(70px)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] opacity-[0.03]"
          style={{ background: "radial-gradient(ellipse,#0f766e 0%,transparent 70%)", filter: "blur(90px)" }} />
        <div className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: "radial-gradient(circle,#94a3b8 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* ── LEFT: Bio ── */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative pl-5"
          >
            {/* Left accent bar */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full"
              style={{ background: `linear-gradient(180deg,${PRIMARY},${SECONDARY})` }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1e293b] bg-[#080b12]">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"
                  style={{ boxShadow: "0 0 8px #10b981" }} />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#64748b]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  About Me
                </span>
              </div>
              <div className="h-px w-10" style={{ background: `linear-gradient(90deg,${PRIMARY},transparent)` }} />
            </div>

            {/* Name title */}
            <motion.h2
              className="text-4xl md:text-6xl lg:text-[64px] font-black leading-[0.9] mb-6"
              style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.04em" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <span style={{
                background: "linear-gradient(135deg,#ffffff 0%,#94a3b8 55%,#475569 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
              }}>
                Hi, I'm
              </span>
              <br />
              <span style={{
                background: `linear-gradient(135deg,${PRIMARY} 0%,${SECONDARY} 100%)`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
              }}>
                Stephen
              </span>
              <br />
              <span style={{
                background: "linear-gradient(135deg,#f1f5f9 0%,#94a3b8 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
              }}>
                Joseph
              </span>
            </motion.h2>

            {/* Lead paragraph */}
            <motion.p
              className="text-base md:text-lg text-[#94a3b8] leading-relaxed mb-8 max-w-xl"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.16 }}
            >
              An experienced <Tag color={PRIMARY}>Full Stack Developer</Tag> and{" "}
              <Tag color={SECONDARY}>Corporate Trainer</Tag> passionate about
              building scalable, secure, and real-world software solutions.
            </motion.p>

            {/* Body paragraphs */}
            <motion.div
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.22 }}
            >
              {[
                <>I specialise in <Tag color={PRIMARY}>Java Full Stack</Tag> and <Tag color={SECONDARY}>MERN Stack</Tag> development, with strong expertise in databases, RESTful APIs, and modern frameworks.</>,
                <>Hands-on experience managing the complete application lifecycle — from requirement analysis and system design to development, testing, deployment, and production support.</>,
                <>Deeply involved in corporate training and academic mentoring. Conducted programs in colleges and institutions, mentoring <Tag color={SUCCESS}>200+ students</Tag> through industry-ready projects.</>,
                <>Currently expanding into <Tag color={SUCCESS}>AI-driven development</Tag>, integrating intelligent solutions into modern software systems.</>,
              ].map((para, i) => (
                <p key={i} className="text-sm md:text-base text-[#64748b] leading-relaxed"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {para}
                </p>
              ))}
            </motion.div>

            {/* Quote block */}
            <motion.blockquote
              className="relative pl-5 py-4 mb-10 rounded-r-xl"
              style={{
                borderLeft: `2px solid ${toRgba(PRIMARY, 0.5)}`,
                background: `linear-gradient(90deg, ${toRgba(PRIMARY, 0.05)}, transparent)`,
              }}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.3 }}
            >
              <p className="text-sm md:text-base text-[#94a3b8] italic leading-relaxed"
                style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.01em" }}>
                "I believe in continuous learning, clean architecture, and empowering
                others through knowledge — whether through code or the classroom."
              </p>
            </motion.blockquote>

            {/* Stats + CTA */}
            <motion.div
              className="flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.36 }}
            >
              {stats.map((s, i) => (
                <StatCard key={s.lbl} {...s} delay={0.38 + i * 0.07} />
              ))}

              {/* CTA */}
              <motion.a
                href="/contact"
                className="relative inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-black text-sm text-[#ffffff] overflow-hidden flex-shrink-0"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  letterSpacing: "-0.02em",
                  background: `linear-gradient(135deg, ${PRIMARY} 0%, ${SECONDARY} 100%)`,
                  boxShadow: `0 8px 28px ${toRgba(PRIMARY, 0.28)}`,
                }}
                whileHover={{ scale: 1.05, y: -2, boxShadow: `0 14px 36px ${toRgba(PRIMARY, 0.38)}` }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
              >
                Get In Touch
                <span className="text-base">→</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Image ── */}
          <motion.div
            initial={{ opacity: 0, x: 36, scale: 0.94 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-sm md:max-w-md lg:max-w-full">
              <ImageFrame imageSrc={sj} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;