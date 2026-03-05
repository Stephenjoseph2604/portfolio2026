// import {
//   ArrowRight,
//   Code2,
//   Shield,
//   Users,
//   MessageCircle,
//   Sparkles,
// } from "lucide-react";
// import { motion } from "framer-motion";

// const ReadyToStart = () => {
//   return (
//     <div className="mx-auto w-7xl p-8 md:p-12 rounded-3xl bg-gradient-to-br from-bg-card/10 to-bg-primary/20 backdrop-blur-sm shadow-2xl relative">
//       {/* Header - Fade up animation */}
//       <motion.div
//         className="text-center mb-12"
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, margin: "-100px" }}
//         transition={{ duration: 0.6 }}
//       >
//         <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-2xl border border-primary/30 backdrop-blur-sm mb-6">
//           <Sparkles className="w-5 h-5 text-primary" />
//           <span className="text-sm font-semibold text-primary tracking-wide">
//             Ready to Build or Upskill?
//           </span>
//         </div>
//         <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-fg-primary to-fg-secondary bg-clip-text text-transparent mb-6">
//           Ready to Start?
//         </h2>
//         <p className="text-lg text-fg-secondary max-w-2xl mx-auto leading-relaxed">
//           Have a project in mind? Need enterprise-grade solutions or team
//           training?
//         </p>
//       </motion.div>

//       {/* Feature Cards - Staggered animation */}
//       <motion.div
//         className="grid md:grid-cols-2 gap-6 mb-12"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true, margin: "-100px" }}
//         transition={{ duration: 0.6 }}
//       >
//         <motion.div
//           className="group flex items-start gap-4 p-6 rounded-2xl border border-border/50 bg-bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
//           initial={{ opacity: 0, x: -20, scale: 0.95 }}
//           whileInView={{ opacity: 1, x: 0, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//         >
//           <Shield className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
//           <div>
//             <h3 className="text-xl font-semibold text-fg-primary mb-2 group-hover:text-primary transition-colors">
//               Secure, Scalable Solutions
//             </h3>
//             <p className="text-fg-secondary leading-relaxed">
//               Enterprise-grade full-stack applications built for performance and
//               security.
//             </p>
//           </div>
//         </motion.div>

//         <motion.div
//           className="group flex items-start gap-4 p-6 rounded-2xl border border-border/50 bg-bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
//           initial={{ opacity: 0, x: -20, scale: 0.95 }}
//           whileInView={{ opacity: 1, x: 0, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           <Users className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
//           <div>
//             <h3 className="text-xl font-semibold text-fg-primary mb-2 group-hover:text-primary transition-colors">
//               Corporate Training Programs
//             </h3>
//             <p className="text-fg-secondary leading-relaxed">
//               Practical, industry-focused training in Java Full Stack & MERN for
//               teams.
//             </p>
//           </div>
//         </motion.div>

//         <motion.div
//           className="group flex items-start gap-4 p-6 rounded-2xl border border-border/50 bg-bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 md:col-span-2"
//           initial={{ opacity: 0, x: -20, scale: 0.95 }}
//           whileInView={{ opacity: 1, x: 0, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//         >
//           <Code2 className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
//           <div className="flex-1">
//             <h3 className="text-xl font-semibold text-fg-primary mb-2 group-hover:text-primary transition-colors">
//               From Architecture to Deployment
//             </h3>
//             <p className="text-fg-secondary leading-relaxed">
//               Complete lifecycle support — fundamentals to advanced systems,
//               design to production.
//             </p>
//           </div>
//         </motion.div>
//       </motion.div>

//       {/* CTA Section - Slide up animation */}
//       <motion.div
//         className="text-center pt-8 border-t border-border/50"
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, margin: "-100px" }}
//         transition={{ duration: 0.6, delay: 0.4 }}
//       >
//         <p className="text-fg-secondary mb-8 max-w-2xl mx-auto leading-relaxed text-lg">
//           I specialize in developing enterprise-grade applications and
//           delivering practical, industry-focused training. Let's collaborate to
//           build powerful software solutions and future-ready developers.
//         </p>

//         <button className="group text-primary inline-flex items-center gap-3 bg-primary/10 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/30 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98]">
//           <span>Start the Conversation Today</span>
//           <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
//         </button>
//       </motion.div>

//       {/* Subtle accent - unchanged */}
//       <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-3xl blur-xl" />
//       <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-2xl" />
//     </div>
//   );
// };

// export default ReadyToStart;




// ===================== New =======================

import { ArrowRight, Code2, Shield, Users, Sparkles } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

/* ─── helpers ─────────────────────────────────── */
function toRgba(hex, a) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
}
const PRIMARY = "#2563eb";
const SECONDARY = "#7c3aed";

/* ─── Magnetic tilt hook ──────────────────────── */
function useTilt(strength = 8) {
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

/* ─── Feature cards data ──────────────────────── */
const features = [
  {
    icon: Shield,
    title: "Secure, Scalable Solutions",
    desc: "Enterprise-grade full-stack applications built for performance, resilience, and security at every layer.",
    accent: PRIMARY,
    span: false,
  },
  {
    icon: Users,
    title: "Corporate Training Programs",
    desc: "Practical, industry-focused training in Java Full Stack & MERN for teams ready to level up.",
    accent: SECONDARY,
    span: false,
  },
  {
    icon: Code2,
    title: "From Architecture to Deployment",
    desc: "Complete lifecycle support — fundamentals to advanced systems, design to production-grade delivery.",
    accent: "#0f766e",
    span: true,
  },
];

/* ─── Feature Card ────────────────────────────── */
function FeatureCard({ feat, index }) {
  const [hovered, setHovered] = useState(false);
  const { ref, rotateX, rotateY, onMove, onLeave } = useTilt(5);
  const Icon = feat.icon;

  return (
    <motion.div
      className={`${feat.span ? "md:col-span-2" : ""}`}
      style={{ perspective: "800px" }}
      initial={{ opacity: 0, y: 28, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: 0.1 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        ref={ref}
        className="relative h-full rounded-2xl border border-[#1e293b] bg-[#080b12] p-6 md:p-7 cursor-default overflow-hidden"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          boxShadow: hovered
            ? `0 0 0 1.5px ${toRgba(feat.accent, 0.5)}, 0 20px 50px ${toRgba(feat.accent, 0.14)}`
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
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle,#94a3b8 1px,transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        {/* Radial glow */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          style={{
            background: `radial-gradient(ellipse 70% 60% at 50% 110%, ${toRgba(feat.accent, 0.18)} 0%, transparent 70%)`,
          }}
        />

        {/* Content row */}
        <div className={`relative z-10 flex gap-5 ${feat.span ? "items-center" : "items-start"}`}>
          {/* Icon badge */}
          <motion.div
            className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border"
            style={{
              background: toRgba(feat.accent, 0.1),
              borderColor: toRgba(feat.accent, 0.35),
              boxShadow: hovered ? `0 0 20px ${toRgba(feat.accent, 0.25)}` : "none",
              transition: "box-shadow 0.4s",
            }}
            animate={{ scale: hovered ? 1.08 : 1 }}
            transition={{ type: "spring", stiffness: 420, damping: 22 }}
          >
            <Icon className="w-5 h-5" style={{ color: feat.accent }} />
          </motion.div>

          <div className="flex-1 min-w-0">
            <motion.h3
              className="text-base md:text-lg font-black text-[#f1f5f9] mb-1.5 leading-tight"
              style={{
                fontFamily: "'Syne', sans-serif",
                letterSpacing: "-0.025em",
                textShadow: hovered ? `0 2px 12px ${toRgba(feat.accent, 0.4)}` : "none",
                transition: "text-shadow 0.4s",
              }}
            >
              {feat.title}
            </motion.h3>
            <p
              className="text-[#64748b] text-sm leading-relaxed"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {feat.desc}
            </p>
          </div>
        </div>

        {/* Bottom sweep line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px]"
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: `linear-gradient(90deg, transparent, ${feat.accent}, transparent)`,
            transformOrigin: "left",
          }}
        />

        {/* Corner brackets */}
        <motion.div
          className="absolute top-0 left-0 w-4 h-4 border-t-[1.5px] border-l-[1.5px] rounded-tl-2xl pointer-events-none"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.22 }}
          style={{ borderColor: toRgba(feat.accent, 0.65) }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-4 h-4 border-b-[1.5px] border-r-[1.5px] rounded-br-2xl pointer-events-none"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.22 }}
          style={{ borderColor: toRgba(feat.accent, 0.65) }}
        />
      </motion.div>
    </motion.div>
  );
}

/* ─── CTA Button ──────────────────────────────── */
function CTAButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.button
      className="relative group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-base md:text-lg text-[#ffffff] overflow-hidden"
      style={{
        fontFamily: "'Syne', sans-serif",
        letterSpacing: "-0.02em",
        background: `linear-gradient(135deg, ${PRIMARY} 0%, ${SECONDARY} 100%)`,
        boxShadow: hovered
          ? `0 0 0 1.5px ${toRgba(PRIMARY, 0.6)}, 0 20px 50px ${toRgba(PRIMARY, 0.35)}`
          : `0 8px 32px ${toRgba(PRIMARY, 0.25)}`,
        transition: "box-shadow 0.35s ease",
      }}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 420, damping: 22 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Shimmer sweep */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ x: hovered ? "100%" : "-100%" }}
        transition={{ duration: 0.55, ease: "easeInOut" }}
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
          width: "60%",
        }}
      />
      <span className="relative z-10">Start the Conversation Today</span>
      <motion.div
        className="relative z-10"
        animate={{ x: hovered ? 4 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <ArrowRight className="w-5 h-5" />
      </motion.div>
    </motion.button>
  );
}

/* ─── Main Component ──────────────────────────── */
const ReadyToStart = () => {
  return (
    <>
    <div className="bg-bg-primary">
    <div
      className="relative  overflow-hidden rounded-3xl border border-[#1e293b] bg-[#080b12] p-8 md:p-12 lg:p-16"
      style={{ boxShadow: `0 0 0 1px ${toRgba(PRIMARY, 0.08)}, 0 40px 80px rgba(0,0,0,0.5)` }}
    >

      {/* ── Background atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Blue top-left blob */}
        <div
          className="absolute -top-24 -left-24 w-80 h-80 rounded-full opacity-[0.1]"
          style={{ background: `radial-gradient(circle,${PRIMARY} 0%,transparent 70%)`, filter: "blur(60px)" }}
        />
        {/* Violet bottom-right blob */}
        <div
          className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full opacity-[0.08]"
          style={{ background: `radial-gradient(circle,${SECONDARY} 0%,transparent 70%)`, filter: "blur(60px)" }}
        />
        {/* Centre teal whisper */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] opacity-[0.04]"
          style={{ background: "radial-gradient(ellipse,#0f766e 0%,transparent 70%)", filter: "blur(80px)" }}
        />
        {/* Dot-grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle,#94a3b8 1px,transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* ── Header ── */}
      <motion.div
        className="text-center mb-14 relative z-10"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Eyebrow pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-[#1e293b] bg-[#0d1117]">
          <Sparkles className="w-3.5 h-3.5 text-[#2563eb]" />
          <span
            className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#64748b]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Ready to Build or Upskill?
          </span>
        </div>

        {/* Title */}
        <h2
          className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.92] mb-5"
          style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.04em" }}
        >
          <span
            style={{
              background: "linear-gradient(135deg,#ffffff 0%,#94a3b8 55%,#475569 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Ready to
          </span>
          <br />
          <span
            style={{
              background: `linear-gradient(135deg,${PRIMARY} 0%,${SECONDARY} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Start?
          </span>
        </h2>

        <p
          className="text-[#64748b] text-sm md:text-base max-w-xl mx-auto leading-relaxed"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Have a project in mind? Need enterprise-grade solutions or team training?{" "}
          <span className="text-[#475569]">Let's build something exceptional.</span>
        </p>
      </motion.div>

      {/* ── Feature Cards ── */}
      <div className="grid md:grid-cols-2 gap-3 md:gap-4 mb-12 relative z-10">
        {features.map((feat, i) => (
          <FeatureCard key={feat.title} feat={feat} index={i} />
        ))}
      </div>

      {/* ── CTA ── */}
      <motion.div
        className="relative z-10 text-center pt-10 border-t border-[#1e293b]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Decorative divider text */}
        <div className="flex items-center gap-4 justify-center mb-8">
          <div className="h-px w-12" style={{ background: `linear-gradient(90deg,transparent,${PRIMARY})` }} />
          <span
            className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#334155]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Let's collaborate
          </span>
          <div className="h-px w-12" style={{ background: `linear-gradient(90deg,${PRIMARY},transparent)` }} />
        </div>

        <p
          className="text-[#64748b] mb-8 max-w-2xl mx-auto leading-relaxed text-sm md:text-base"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          I specialise in enterprise-grade applications and practical, industry-focused training.
          Let's collaborate to build powerful software and future-ready developers.
        </p>

        <CTAButton />

        {/* Supporting micro-copy */}
        <p
          className="mt-4 text-[10px] uppercase tracking-[0.18em] text-[#334155]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          No commitment · Just a conversation
        </p>
      </motion.div>
    </div>
    </div>
    </>
  );
};

export default ReadyToStart;