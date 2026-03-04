// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import TrainingBentoGrid from "../components/TrainingBentoGrid";
// import Crm from "../assets/projects/xamify.png";
// import job from "../assets/projects/skillbridge.png";
// import profile from "../assets/projects/profile.png";
// import book from "../assets/projects/book3.png";
// import bus from "../assets/projects/bus3.png";
// import student from "../assets/projects/student6.png";
// import bus1 from "../assets/projects/bus10.png";
// import password from "../assets/projects/password3.png";
// // import portfolio from "../assets/projects/portfolio9.png";
// const categories = [
//   "All",
//   "Web Design",
//   "Mobile App",
//   "Brand Identity",
//   "UI/UX",
// ];

// const allProjects = [
//   {
//     id: 1,
//     title: "Fintech Dashboard",
//     image: Crm,
//     category: "UI/UX",
//     description:
//       "A comprehensive financial dashboard for tracking investments and managing portfolios with real-time data visualization.",
//     gradient: "from-blue-900 to-[#09090b]",
//   },
//   {
//     id: 2,
//     title: "E-commerce App",
//     image: job,
//     category: "Mobile App",
//     description:
//       "A seamless shopping experience with intuitive navigation, personalized recommendations, and one-click checkout.",
//     gradient: "from-purple-900 to-[#09090b]",
//   },
//   {
//     id: 3,
//     title: "Brand Evolution",
//     image: book,
//     category: "Brand Identity",
//     description:
//       "Complete rebranding for a legacy tech company, including logo design, typography, and brand guidelines.",
//     gradient: "from-emerald-900 to-[#09090b]",
//   },
//   {
//     id: 4,
//     title: "SaaS Platform",
//     image: bus,
//     category: "Web Design",
//     description:
//       "A modern, high-converting landing page and web application interface for a B2B software startup.",
//     gradient: "from-rose-900 to-[#09090b]",
//   },
//   {
//     id: 5,
//     title: "Health & Fitness App",
//     image: bus1,
//     category: "Mobile App",
//     description:
//       "Workout tracking and nutrition planning application with social features and progress analytics.",
//     gradient: "from-amber-900 to-[#09090b]",
//   },
//   {
//     id: 6,
//     title: "Luxury Brand Site",
//     image: profile,
//     category: "Web Design",
//     description:
//       "An immersive, highly visual e-commerce experience for a premium fashion and accessories brand.",
//     gradient: "from-cyan-900 to-[#09090b]",
//   },
//   {
//     id: 7,
//     title: "Crypto Exchange",
//     image: job,
//     category: "UI/UX",
//     description:
//       "Secure and user-friendly interface for trading cryptocurrencies with advanced charting tools.",
//     gradient: "from-indigo-900 to-[#09090b]",
//   },
//   {
//     id: 8,
//     title: "Restaurant Chain",
//     image: bus1,
//     category: "Brand Identity",
//     description:
//       "Cohesive visual identity across digital menus, packaging, and interior signage for a national chain.",
//     gradient: "from-orange-900 to-[#09090b]",
//   },
// ];
// export default function PortfolioPage() {
//   const [activeFilter, setActiveFilter] = useState("All");

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const filteredProjects =
//     activeFilter === "All"
//       ? allProjects
//       : allProjects.filter((project) => project.category === activeFilter);

//   return (
//     <div className="pt-32 pb-20 md:pt-40 md:pb-32">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Hero Section */}
//         <div className="mb-16 md:mb-24 text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6"
//           >
//             Our Portfolio
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-lg md:text-xl text-[#a1a1aa] max-w-2xl mx-auto mb-8"
//           >
//             Explore our latest projects and see how we've helped businesses
//             transform their digital presence and achieve their goals.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, width: 0 }}
//             animate={{ opacity: 1, width: "100px" }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="h-px bg-[#2563eb] mx-auto"
//           />
//         </div>

//         {/* Filters */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="flex flex-wrap justify-center gap-3 mb-16"
//         >
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveFilter(category)}
//               className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
//                 activeFilter === category
//                   ? "bg-[#2563eb] text-white shadow-[0_0_15px_rgba(37,99,235,0.3)]"
//                   : "bg-[#18181b] text-[#a1a1aa] border border-[#27272a] hover:border-[#2563eb]/50 hover:text-white"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </motion.div>

//         {/* Professional Bento Grid with Images */}
//         <motion.div
//           layout
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[minmax(200px,auto)] mb-24"
//         >
//           <AnimatePresence mode="popLayout">
//             {filteredProjects.map((project, index) => {
//               const isLarge = index % 4 === 0 || index % 5 === 1;
//               return (
//                 <motion.div
//                   key={project.id}
//                   layout
//                   initial={{ opacity: 0, y: 30, scale: 0.95 }}
//                   animate={{ opacity: 1, y: 0, scale: 1 }}
//                   exit={{ opacity: 0, y: 30, scale: 0.95 }}
//                   transition={{ duration: 0.5, delay: index * 0.06 }}
//                   className={`group relative overflow-hidden rounded-2xl border border-[#27272a] bg-[#18181b] cursor-pointer hover:border-[#2563eb]/50 transition-all duration-500 h-full shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 ${isLarge ? "md:row-span-2 lg:col-span-2 xl:col-span-1" : ""}`}
//                   style={{ minHeight: isLarge ? "420px" : "auto" }}
//                 >
//                   {/* PROJECT IMAGE - CRISP with subtle hover blur */}
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="absolute inset-0 w-full h-full object-cover object-center scale-100 group-hover:scale-110 group-hover:blur-lg transition-all duration-700"
//                     onError={(e) => {
//                       e.currentTarget.style.display = "none";
//                     }}
//                   />

//                   {/* Content Overlay - ONLY on hover */}
//                   <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20 flex flex-col justify-end p-6 md:p-8">
//                     <div
//                       className={`transform transition-all duration-700 ease-out ${isLarge ? "group-hover:scale-105" : "group-hover:scale-100"} ${isLarge ? "translate-y-6 group-hover:translate-y-0" : "translate-y-4 group-hover:translate-y-0"}`}
//                     >
//                       {/* Category Badge */}
//                       <div className="mb-4">
//                         <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold text-[#2563eb] bg-[#2563eb]/20 rounded-2xl border border-[#2563eb]/30">
//                           {project.category}
//                         </span>
//                       </div>

//                       {/* Title & Arrow */}
//                       <div className="flex items-end justify-between mb-4">
//                         <h3
//                           className={`font-semibold transition-all duration-500 ${isLarge ? "text-2xl md:text-3xl lg:text-4xl leading-tight" : "text-xl md:text-2xl leading-tight"} text-white group-hover:text-[#2563eb]`}
//                         >
//                           {project.title}
//                         </h3>
//                         <ArrowRight
//                           className={`w-6 h-6 md:w-7 md:h-7 transition-all duration-500 flex-shrink-0 ${isLarge ? "text-lg" : "text-base"} opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-2 text-white group-hover:text-[#2563eb]`}
//                         />
//                       </div>

//                       {/* Description - Only on large cards */}
//                       {isLarge && (
//                         <p
//                           className={`text-[#e4e4e7] ${isLarge ? "text-base md:text-lg leading-relaxed max-w-md line-clamp-3" : "text-sm leading-relaxed line-clamp-2"}`}
//                         >
//                           {project.description}
//                         </p>
//                       )}
//                     </div>
//                   </div>

//                   {/* Gradient Fallback ONLY for broken images */}
//                   <div
//                     className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 ${isLarge ? "opacity-20" : "opacity-10"} hidden`}
//                   />

//                   {/* Corner accents - subtle */}
//                   <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-[#2563eb]/10 to-transparent rounded-xl blur-sm group-hover:scale-110 transition-transform duration-500 pointer-events-none" />
//                   <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-t from-[#2563eb]/5 to-transparent rounded-full blur-sm group-hover:scale-110 transition-transform duration-500 pointer-events-none" />
//                 </motion.div>
//               );
//             })}
//           </AnimatePresence>
//         </motion.div>

//         <TrainingBentoGrid />
//       </div>
//     </div>
//   );
// }



// ======================= New =================================
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import TrainingBentoGrid from "../components/TrainingBentoGrid";

import Crm from "../assets/projects/xamify.png";
import job from "../assets/projects/skillbridge.png";
import profile from "../assets/projects/profile.png";
import book from "../assets/projects/book3.png";
import bus from "../assets/projects/bus3.png";
import student from "../assets/projects/student6.png";
import bus1 from "../assets/projects/bus10.png";
import password from "../assets/projects/password3.png";

/* ─── Data ──────────────────────────────────────────────── */
const categories = ["All", "Web Design", "Mobile App", "Brand Identity", "UI/UX"];

const allProjects = [
  { id: 1, title: "Xamify CRM",          image: Crm,      category: "UI/UX",           year: "2024", tag: "Live Product" },
  { id: 2, title: "SkillBridge App",     image: job,      category: "Mobile App",      year: "2024", tag: "Case Study"   },
  { id: 3, title: "Book Shelf",          image: book,     category: "Brand Identity",  year: "2023", tag: "Branding"     },
  { id: 4, title: "BusTrack SaaS",       image: bus,      category: "Web Design",      year: "2024", tag: "Web App"      },
  { id: 5, title: "Transit Hub",         image: bus1,     category: "Mobile App",      year: "2023", tag: "Mobile"       },
  { id: 6, title: "Dev Portfolio",       image: profile,  category: "Web Design",      year: "2024", tag: "Portfolio"    },
  { id: 7, title: "SkillBridge v2",      image: job,      category: "UI/UX",           year: "2024", tag: "Redesign"     },
  { id: 8, title: "Transit Brand",       image: bus1,     category: "Brand Identity",  year: "2023", tag: "Identity"     },
];

/* ─── Helpers ───────────────────────────────────────────── */
function toRgba(hex, a) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
}

const ACCENT = "#2563eb";

/* ─── Project Card ──────────────────────────────────────── */
function ProjectCard({ project, index, isLarge }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  // Magnetic tilt
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 240, damping: 28 });
  const sy = useSpring(my, { stiffness: 240, damping: 28 });
  const rotateX = useTransform(sy, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(sx, [-0.5, 0.5], ["-6deg", "6deg"]);

  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); setHovered(false); };

  return (
    <motion.div
      className={`relative ${isLarge ? "md:col-span-2 md:row-span-2" : ""}`}
      style={{ perspective: "900px" }}
      initial={{ opacity: 0, y: 36, scale: 0.93 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.55, delay: index * 0.055, ease: [0.16, 1, 0.3, 1] }}
      layout
    >
      <motion.div
        ref={ref}
        className="relative w-full h-full rounded-2xl overflow-hidden cursor-pointer border border-[#1e293b] bg-[#080b12] group"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          minHeight: isLarge ? "420px" : "260px",
          boxShadow: hovered
            ? `0 0 0 1.5px ${toRgba(ACCENT, 0.5)}, 0 28px 60px ${toRgba(ACCENT, 0.18)}`
            : "none",
          transition: "box-shadow 0.4s ease",
        }}
        animate={{ scale: hovered ? 1.015 : 1 }}
        transition={{ type: "spring", stiffness: 340, damping: 28 }}
        onMouseMove={onMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={onLeave}
      >
        {/* Project image */}
        <motion.img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover object-center rounded-2xl"
          animate={{ scale: hovered ? 1.08 : 1, filter: hovered ? "blur(6px) brightness(0.55)" : "blur(0px) brightness(0.75)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />

        {/* Permanent dark vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/90 via-[#050508]/30 to-transparent pointer-events-none" />

        {/* Dot-grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle,#94a3b8 1px,transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        {/* Hover accent glow */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          style={{
            background: `radial-gradient(ellipse 80% 50% at 50% 110%, ${toRgba(ACCENT, 0.22)} 0%, transparent 70%)`,
          }}
        />

        {/* ── Top-left: year tag ── */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
          <motion.span
            className="px-2.5 py-1 text-[9px] font-bold font-mono uppercase tracking-[0.18em] rounded-lg border text-[#64748b] border-[#1e293b] bg-[#080b12]/80"
            style={{ backdropFilter: "blur(8px)" }}
            animate={{ opacity: hovered ? 0 : 0.9 }}
          >
            {project.year}
          </motion.span>
        </div>

        {/* ── Top-right: arrow icon (hover) ── */}
        <motion.div
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-xl flex items-center justify-center border border-[#2563eb]/40 bg-[#2563eb]/10"
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.7, rotate: hovered ? 0 : -15 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <ArrowUpRight className="w-4 h-4 text-[#2563eb]" />
        </motion.div>

        {/* ── Bottom content ── */}
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-20">
          <motion.div
            animate={{ y: hovered ? 0 : 5 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Category + tag */}
            <div className="flex items-center gap-2 mb-2.5">
              <span
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-bold font-mono uppercase tracking-[0.12em] rounded-lg border"
                style={{
                  color: ACCENT,
                  borderColor: toRgba(ACCENT, 0.42),
                  background: toRgba(ACCENT, 0.09),
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: ACCENT, boxShadow: `0 0 6px ${ACCENT}` }}
                />
                {project.category}
              </span>
              <motion.span
                className="text-[10px] font-mono text-[#475569] uppercase tracking-wider"
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.25 }}
              >
                {project.tag}
              </motion.span>
            </div>

            {/* Title */}
            <div className="flex items-end justify-between gap-3">
              <h3
                className={`font-black text-[#f1f5f9] leading-tight ${isLarge ? "text-2xl md:text-3xl lg:text-4xl" : "text-lg md:text-2xl"}`}
                style={{
                  fontFamily: "'Syne', sans-serif",
                  letterSpacing: "-0.03em",
                  textShadow: hovered ? `0 2px 16px ${toRgba(ACCENT, 0.4)}` : "none",
                  transition: "text-shadow 0.4s",
                }}
              >
                {project.title}
              </h3>
            </div>
          </motion.div>

          {/* Bottom sweep */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[2px]"
            animate={{ scaleX: hovered ? 1 : 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)`,
              transformOrigin: "left",
            }}
          />
        </div>

        {/* Corner brackets */}
        <motion.div
          className="absolute top-0 left-0 w-4 h-4 border-t-[1.5px] border-l-[1.5px] rounded-tl-2xl pointer-events-none"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.22 }}
          style={{ borderColor: toRgba(ACCENT, 0.65) }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-4 h-4 border-b-[1.5px] border-r-[1.5px] rounded-br-2xl pointer-events-none"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.22 }}
          style={{ borderColor: toRgba(ACCENT, 0.65) }}
        />
      </motion.div>
    </motion.div>
  );
}

/* ─── Filter Pill ───────────────────────────────────────── */
function FilterPill({ label, active, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      className="relative px-5 py-2 rounded-full text-xs font-bold font-mono uppercase tracking-[0.14em] border transition-colors duration-300 overflow-hidden"
      style={{
        color: active ? "#ffffff" : "#64748b",
        borderColor: active ? ACCENT : "#1e293b",
        background: active ? ACCENT : "#080b12",
        boxShadow: active ? `0 0 20px ${toRgba(ACCENT, 0.3)}` : "none",
      }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
    >
      {label}
    </motion.button>
  );
}

/* ─── Page ──────────────────────────────────────────────── */
export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const filtered =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  return (
    <div
      className="min-h-screen pt-28 pb-20 md:pt-36 md:pb-32 relative overflow-hidden"
      style={{ background: "#050508" }}
    >

      {/* ── Background atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[700px] h-[400px] opacity-[0.07]"
          style={{ background: "radial-gradient(ellipse,#2563eb 0%,transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute top-1/3 -right-32 w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle,#7c3aed 0%,transparent 70%)", filter: "blur(70px)" }} />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle,#94a3b8 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* ── Hero ── */}
        <div className="mb-16 md:mb-24 relative pl-5">
          {/* Left accent bar */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full"
            style={{ background: "linear-gradient(180deg,#2563eb,#7c3aed)" }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Eyebrow */}
          <motion.div
            className="flex items-center gap-3 mb-5"
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1e293b] bg-[#080b12]">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"
                style={{ boxShadow: "0 0 8px #10b981" }} />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#64748b]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Selected Work
              </span>
            </div>
            <div className="h-px w-14" style={{ background: "linear-gradient(90deg,#2563eb,transparent)" }} />
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-[86px] font-black leading-[0.9] mb-6"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.04em" }}
          >
            <span style={{ background: "linear-gradient(135deg,#ffffff 0%,#94a3b8 55%,#475569 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Our
            </span>
            <br />
            <span style={{ background: "linear-gradient(135deg,#2563eb 0%,#7c3aed 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Portfolio
            </span>
          </motion.h1>

          <motion.p
            className="text-[#64748b] text-sm md:text-base max-w-lg leading-relaxed mb-8"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            Explore our latest projects and see how we've helped businesses transform
            their digital presence and achieve ambitious goals.
          </motion.p>

          {/* Stats row */}
          <motion.div
            className="flex flex-wrap gap-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {[["8+", "Projects"], ["4+", "Categories"], ["3+", "Years"]].map(([val, lbl]) => (
              <div key={lbl} className="flex items-baseline gap-2">
                <span className="text-2xl md:text-3xl font-black text-[#2563eb]"
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
        </div>

        {/* ── Filters ── */}
        <motion.div
          className="flex flex-wrap gap-2.5 mb-12"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.38 }}
        >
          {categories.map((cat) => (
            <FilterPill
              key={cat}
              label={cat}
              active={activeFilter === cat}
              onClick={() => setActiveFilter(cat)}
            />
          ))}

          {/* Count badge */}
          <div className="ml-auto flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1e293b] bg-[#080b12]">
            <span className="text-[10px] font-bold font-mono uppercase tracking-[0.16em] text-[#64748b]">
              {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        </motion.div>

        {/* ── Project Grid ── */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 mb-24"
          style={{ gridAutoRows: "minmax(260px, auto)" }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => {
              const isLarge = index % 4 === 0;
              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  isLarge={isLarge}
                />
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* ── Divider before training grid ── */}
        <motion.div
          className="flex items-center gap-4 mb-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="h-px flex-1 bg-[#1e293b]" />
          <span className="text-[10px] uppercase tracking-[0.22em] text-[#334155]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            More Work
          </span>
          <div className="h-px flex-1 bg-[#1e293b]" />
        </motion.div>

        <TrainingBentoGrid />
      </div>
    </div>
  );
}