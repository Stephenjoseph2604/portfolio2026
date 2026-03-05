// import { motion } from 'framer-motion';
// import { Award, Code, Film, Palette, Search, Target, TrendingUp, Users,Zap, } from 'lucide-react';

// const trainingItems = [
// {
//   id: 1,
//   title: 'Team Workshop',
//   category: 'Collaboration',
//   description:
//   'Interactive sessions designed to align cross-functional teams and foster creative problem-solving.',
//   gradient: 'from-blue-800/40 via-blue-900/60 to-[#18181b]',
//   span: 'col-span-1 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2',
//   icon: Users,
//   isLarge: true
// },
// {
//   id: 2,
//   title: 'Design Sprint',
//   category: 'Process',
//   description: 'Rapid prototyping and user testing.',
//   gradient: 'from-violet-800/40 to-[#18181b]',
//   span: 'col-span-1 row-span-1',
//   icon: Zap,
//   isLarge: false
// },
// {
//   id: 3,
//   title: 'UX Research Lab',
//   category: 'Research',
//   description: 'Deep dives into user behavior.',
//   gradient: 'from-teal-800/40 to-[#18181b]',
//   span: 'col-span-1 row-span-1',
//   icon: Search,
//   isLarge: false
// },
// {
//   id: 4,
//   title: 'Leadership Program',
//   category: 'Management',
//   description:
//   'Empowering the next generation of creative directors and design leads.',
//   gradient: 'from-amber-800/40 to-[#18181b]',
//   span: 'col-span-1 row-span-1 md:row-span-2',
//   icon: Award,
//   isLarge: false
// },
// {
//   id: 5,
//   title: 'Creative Bootcamp',
//   category: 'Skills',
//   description:
//   'Intensive hands-on training for modern design tools and methodologies.',
//   gradient: 'from-rose-800/40 to-[#18181b]',
//   span: 'col-span-1 md:col-span-2 lg:col-span-2 row-span-1',
//   icon: Palette,
//   isLarge: false
// },
// {
//   id: 6,
//   title: 'Brand Strategy',
//   category: 'Strategy',
//   description: 'Building cohesive brand narratives.',
//   gradient: 'from-emerald-800/40 to-[#18181b]',
//   span: 'col-span-1 row-span-1',
//   icon: Target,
//   isLarge: false
// },
// {
//   id: 7,
//   title: 'Digital Marketing Masterclass',
//   category: 'Marketing',
//   description:
//   'Advanced strategies for growth, acquisition, and retention in digital channels.',
//   gradient: 'from-cyan-800/40 to-[#18181b]',
//   span: 'col-span-1 md:col-span-2 lg:col-span-2 row-span-1',
//   icon: TrendingUp,
//   isLarge: false
// },
// {
//   id: 8,
//   title: 'Frontend Development',
//   category: 'Engineering',
//   description: 'Bridging design and code.',
//   gradient: 'from-orange-800/40 to-[#18181b]',
//   span: 'col-span-1 row-span-1',
//   icon: Code,
//   isLarge: false
// },
// {
//   id: 9,
//   title: 'Motion Design',
//   category: 'Animation',
//   description: 'Bringing interfaces to life.',
//   gradient: 'from-pink-800/40 to-[#18181b]',
//   span: 'col-span-1 row-span-1',
//   icon: Film,
//   isLarge: false
// }];

// export default function TrainingBentoGrid() {
//   // Assuming trainingItems array is defined elsewhere
//   return (
//     <section className="py-24 md:py-32 border-t border-[#27272a] mt-12">
//       <div className="mb-16 md:mb-24">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-3xl md:text-5xl font-light text-white mb-6"
//         >
//           Training Gallery
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.1 }}
//           className="text-lg text-[#a1a1aa] max-w-2xl mb-8"
//         >
//           A glimpse into our immersive workshops, bootcamps, and collaborative
//           sessions where ideas come to life.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, width: 0 }}
//           whileInView={{ opacity: 1, width: '100px' }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2 }}
//           className="h-px bg-[#2563eb]"
//         />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[220px] md:auto-rows-[240px]">
//         {trainingItems.map((item, index) => {
//           const Icon = item.icon;
//           return (
//             <motion.div
//               key={item.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: '-50px' }}
//               transition={{ duration: 0.5, delay: index * 0.05 }}
//               className={`group relative overflow-hidden rounded-2xl border border-[#27272a] bg-[#18181b] cursor-pointer hover:border-[#2563eb]/40 transition-colors duration-500 ${item.span}`}
//             >
//               {/* Background Gradient */}
//               <div
//                 className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-40 group-hover:opacity-70 transition-opacity duration-500`}
//               />

//               {/* Decorative Elements */}
//               {item.isLarge ? (
//                 <div className="absolute inset-0 opacity-20 group-hover:scale-110 transition-transform duration-700 ease-out pointer-events-none">
//                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/20 rounded-full" />
//                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10 rounded-full" />
//                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/5 rounded-full" />
//                 </div>
//               ) : (
//                 <div
//                   className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
//                   style={{
//                     backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)',
//                     backgroundSize: '24px 24px'
//                   }}
//                 />
//               )}

//               {/* Large Background Icon */}
//               <div className="absolute -top-6 -right-6 md:top-4 md:right-4 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500 pointer-events-none">
//                 <Icon className="w-32 h-32 md:w-24 md:h-24 text-white" strokeWidth={1} />
//               </div>

//               {/* Bottom Gradient Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />

//               {/* Content */}
//               <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-10">
//                 <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
//                   <div className="mb-3">
//                     <span className="inline-block px-3 py-1 text-xs font-medium text-[#2563eb] bg-[#2563eb]/10 rounded-full border border-[#2563eb]/20 backdrop-blur-sm">
//                       {item.category}
//                     </span>
//                   </div>
//                   <h3 className={`font-medium text-white mb-2 ${item.isLarge ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
//                     {item.title}
//                   </h3>
//                   <p className={`text-[#a1a1aa] leading-relaxed line-clamp-2 ${item.isLarge ? 'text-base' : 'text-sm'}`}>
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// ================== New =======================
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  Code,
  Film,
  Palette,
  Search,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import t5 from "../assets/training/t51.png";
const trainingItems = [
  {
    id: 1,
    title: "Team Workshop",
    category: "Collaboration",
    description:
      "Interactive sessions designed to align cross-functional teams and foster creative problem-solving at every layer.",
    span: "col-span-1 md:col-span-2 row-span-1 md:row-span-2",
    icon: Users,
    accent: "#2563eb",
    isLarge: true,
    image: t5,
  },
  {
    id: 2,
    title: "Design Sprint",
    category: "Process",
    description:
      "Rapid prototyping and user testing compressed into high-output cycles.",
    span: "col-span-1 row-span-1",
    icon: Zap,
    accent: "#7c3aed",
    isLarge: false,
    image: t5,
  },
  {
    id: 3,
    title: "UX Research Lab",
    category: "Research",
    description: "Deep dives into user behaviour patterns and mental models.",
    span: "col-span-1 row-span-1",
    icon: Search,
    accent: "#0f766e",
    isLarge: false,
    image: t5,
  },
  {
    id: 4,
    title: "Leadership Program",
    category: "Management",
    description:
      "Empowering the next generation of creative directors and design leads.",
    span: "col-span-1 row-span-1 md:row-span-2",
    icon: Award,
    accent: "#d97706",
    isLarge: false,
    image: t5,
  },
  {
    id: 5,
    title: "Creative Bootcamp",
    category: "Skills",
    description:
      "Intensive hands-on training for modern design tools and methodologies.",
    span: "col-span-1 md:col-span-2 row-span-1",
    icon: Palette,
    accent: "#e11d48",
    isLarge: false,
    image: t5,
  },
  {
    id: 6,
    title: "Brand Strategy",
    category: "Strategy",
    description:
      "Building cohesive brand narratives that resonate and convert.",
    span: "col-span-1 row-span-1",
    icon: Target,
    accent: "#10b981",
    isLarge: false,
    image: t5,
  },
  {
    id: 7,
    title: "Digital Marketing Masterclass",
    category: "Marketing",
    description:
      "Advanced strategies for growth, acquisition, and retention in digital channels.",
    span: "col-span-1 md:col-span-2 row-span-1",
    icon: TrendingUp,
    accent: "#06b6d4",
    isLarge: false,
    image: t5,
  },
  {
    id: 8,
    title: "Frontend Development",
    category: "Engineering",
    description:
      "Bridging the gap between pixel-perfect design and production code.",
    span: "col-span-1 row-span-1",
    icon: Code,
    accent: "#f97316",
    isLarge: false,
    image: t5,
  },
  {
    id: 9,
    title: "Motion Design",
    category: "Animation",
    description:
      "Bringing interfaces to life with purposeful, delightful motion.",
    span: "col-span-1 row-span-1",
    icon: Film,
    accent: "#ec4899",
    isLarge: false,
    image: t5,
  },
];

function toRgba(hex, a) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
}

function TrainingCard({ item, index }) {
  const [hovered, setHovered] = useState(false);
  const [imgErr, setImgErr] = useState(false); // ← NEW: graceful fallback
  const Icon = item.icon;
  const { accent, isLarge } = item;

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl border border-[#1e293b] bg-[#080b12] cursor-pointer ${item.span}`}
      initial={{ opacity: 0, y: 28, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.055,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        boxShadow: hovered
          ? `0 0 0 1.5px ${toRgba(accent, 0.55)}, 0 20px 50px ${toRgba(accent, 0.15)}`
          : "none",
        transition: "box-shadow 0.4s ease",
      }}
    >
      {/* ══════════════════════════════════════════════════════
          NEW ①  — Full-card background image (subtle, always)
          Sits behind every existing layer. Idle: near-invisible.
          Hover: slightly brighter + slow zoom. Text stays safe.
      ══════════════════════════════════════════════════════ */}
      {item.image && !imgErr && (
        <img
          src={item.image}
          alt={item.title}
          draggable={false}
          onError={() => setImgErr(true)}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          style={{
            opacity: hovered ? 0.6 : 0.4,
            transform: hovered ? "scale(1.06)" : "scale(1.0)",
            transition: "opacity 0.75s ease, transform 0.75s ease",
            filter: "saturate(0.6) blur(0px)",
          }}
        />
      )}

      {/* ══════════════════════════════════════════════════════
          NEW ②  — Floating thumbnail (top-right corner)
          Small cards → 64 × 44 px pill
          Large cards → 110 × 74 px pill (more screen real-estate)
          Animates in on hover, hidden at rest (opacity 0.45→1)
      ══════════════════════════════════════════════════════ */}
      {item.image && !imgErr && (
        <motion.div
          className="absolute z-20 overflow-hidden rounded-xl border pointer-events-none"
          style={{
            top: isLarge ? 20 : 16,
            right: isLarge ? 20 : 16,
            width: isLarge ? 110 : 64,
            height: isLarge ? 74 : 44,
            borderColor: hovered ? toRgba(accent, 0.65) : toRgba(accent, 0.2),
            boxShadow: hovered ? `0 0 18px ${toRgba(accent, 0.4)}` : "none",
            transition: "border-color 0.38s, box-shadow 0.38s",
          }}
          animate={{
            opacity: hovered ? 1 : 0.75,
            y: hovered ? 0 : 5,
            scale: hovered ? 1 : 0.96,
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={item.image}
            alt=""
            draggable={false}
            className="w-full h-full object-cover"
          />
          {/* accent colour wash */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${toRgba(accent, 0.22)} 0%, transparent 85%)`,
            }}
          />
          {/* top sweep line */}
          <div
            className="absolute top-0 left-0 right-0 h-[1.5px]"
            style={{
              background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
            }}
          />
        </motion.div>
      )}

      {/* ─────────── everything below is UNCHANGED ─────────── */}

      {/* Dot-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Accent radial glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.45 }}
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 110%, ${toRgba(accent, 0.22)} 0%, transparent 70%)`,
        }}
      />

      {/* Large ghost icon */}
      <motion.div
        className="absolute pointer-events-none"
        style={
          isLarge
            ? { top: "50%", left: "50%", transform: "translate(-50%,-50%)" }
            : { top: "-10%", right: "-8%", transform: "none" }
        }
        animate={{ opacity: hovered ? 0.14 : 0.06, scale: hovered ? 1.12 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <Icon
          style={{
            width: isLarge ? 220 : 120,
            height: isLarge ? 220 : 120,
            color: accent,
          }}
          strokeWidth={0.8}
        />
      </motion.div>

      {/* Concentric rings for large card */}
      {isLarge && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          animate={{
            opacity: hovered ? 0.18 : 0.08,
            scale: hovered ? 1.06 : 1,
          }}
          transition={{ duration: 0.6 }}
        >
          {[240, 180, 120].map((size, i) => (
            <div
              key={i}
              className="absolute rounded-full border"
              style={{
                width: size,
                height: size,
                borderColor: toRgba(accent, 0.35 - i * 0.1),
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Bottom gradient veil */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/70 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 p-5 md:p-7 flex flex-col justify-end z-10">
        <motion.div
          animate={{ y: hovered ? 0 : 6 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge */}
          <motion.span
            className="inline-flex items-center gap-1.5 px-2.5 py-1 mb-3 text-[10px] font-bold font-mono uppercase tracking-[0.14em] rounded-lg border"
            style={{
              color: accent,
              borderColor: toRgba(accent, 0.4),
              background: toRgba(accent, 0.09),
            }}
            animate={{ opacity: hovered ? 1 : 0.7 }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: accent, boxShadow: `0 0 5px ${accent}` }}
            />
            {item.category}
          </motion.span>

          {/* Title */}
          <h3
            className={`font-black text-[#f1f5f9] leading-tight mb-2 ${isLarge ? "text-2xl md:text-3xl lg:text-4xl" : "text-lg md:text-xl"}`}
            style={{
              fontFamily: "'Syne', sans-serif",
              letterSpacing: "-0.03em",
              textShadow: hovered
                ? `0 2px 16px ${toRgba(accent, 0.4)}`
                : "none",
              transition: "text-shadow 0.4s",
            }}
          >
            {item.title}
          </h3>

          {/* Description */}
          <motion.p
            className={`text-[#64748b] leading-relaxed ${isLarge ? "text-sm md:text-base max-w-sm" : "text-xs md:text-sm line-clamp-2"}`}
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
            animate={{ opacity: hovered ? 1 : 0.6 }}
            transition={{ duration: 0.3 }}
          >
            {item.description}
          </motion.p>
        </motion.div>

        {/* Bottom sweep line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px]"
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
            transformOrigin: "left",
          }}
        />
      </div>

      {/* Corner accents */}
      <motion.div
        className="absolute top-0 left-0 w-5 h-5 border-t-[1.5px] border-l-[1.5px] rounded-tl-2xl pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        style={{ borderColor: toRgba(accent, 0.7) }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-5 h-5 border-b-[1.5px] border-r-[1.5px] rounded-br-2xl pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        style={{ borderColor: toRgba(accent, 0.7) }}
      />
    </motion.div>
  );
}

export default function TrainingBentoGrid() {
  return (
    <section className="py-20 md:py-28  mt-8">
      {/* Header */}
      <div className="mb-14 md:mb-20 relative pl-5">
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full"
          style={{ background: "linear-gradient(180deg,#2563eb,#7c3aed)" }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.div
          className="flex items-center gap-3 mb-5"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1e293b] bg-[#080b12]">
            <span
              className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"
              style={{ boxShadow: "0 0 8px #10b981" }}
            />
            <span
              className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#64748b]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Training Gallery
            </span>
          </div>
          <div
            className="h-px w-12"
            style={{ background: "linear-gradient(90deg,#2563eb,transparent)" }}
          />
        </motion.div>

        <motion.h2
          className="text-4xl md:text-6xl lg:text-[68px] font-black leading-[0.92] mb-5"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.62, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.04em" }}
        >
          <span
            style={{
              background:
                "linear-gradient(135deg,#ffffff 0%,#94a3b8 60%,#475569 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Where Ideas
          </span>
          <br />
          <span
            style={{
              background: "linear-gradient(135deg,#2563eb 0%,#7c3aed 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Come to Life
          </span>
        </motion.h2>

        <motion.p
          className="text-[#64748b] text-sm md:text-base max-w-lg leading-relaxed"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.18 }}
        >
          Immersive workshops, bootcamps, and collaborative sessions engineered
          for creative excellence.
        </motion.p>
      </div>

      {/* Bento Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
        style={{ gridAutoRows: "clamp(180px, 20vw, 240px)" }}
      >
        {trainingItems.map((item, index) => (
          <TrainingCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
