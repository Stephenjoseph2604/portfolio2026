// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Star, ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

// const testimonials = [
//   {
//     quote:
//       "Stephen delivered our CRM Dashboard with exceptional backend architecture and clean frontend implementation. The system is secure, scalable, and performs flawlessly in production.",
//     author: "Ramesh Kumar",
//     role: "Operations Manager",
//     company: "PrimeBuild Solutions",
//     rating: 5,
//     googleLink: "#",
//   },
//   {
//     quote:
//       "The Job Portal system he built with React and Spring Boot exceeded our expectations. The role-based access control and JWT security were implemented perfectly.",
//     author: "Arun Prakash",
//     role: "Technical Lead",
//     company: "NextGen Technologies",
//     rating: 5,
//     googleLink: "#",
//   },
//   {
//     quote:
//       "Stephen’s corporate training sessions on Java Full Stack were highly practical and industry-focused. Students gained real confidence in building complete applications.",
//     author: "Dr. Meena Joseph",
//     role: "Head of Department",
//     company: "St. Xavier’s College",
//     rating: 5,
//     googleLink: "#",
//   },
//   {
//     quote:
//       "His explanation of REST APIs, database design, and authentication mechanisms like JWT made complex concepts very easy to understand. A true mentor for aspiring developers.",
//     author: "Karthik Raj",
//     role: "Software Developer",
//     company: "Alumni Trainee",
//     rating: 5,
//     googleLink: "#",
//   },
//   {
//     quote:
//       "From requirement analysis to deployment, Stephen handled our full-stack project professionally. His attention to architecture and performance optimization stood out.",
//     author: "Priya Nair",
//     role: "Project Coordinator",
//     company: "Innovate Systems",
//     rating: 5,
//     googleLink: "#",
//   },
//   {
//     quote:
//       "His training programs combine real-time project building with strong fundamentals. Many students from our batch successfully transitioned into developer roles.",
//     author: "Vignesh S",
//     role: "Placement Coordinator",
//     company: "TechBridge Institute",
//     rating: 5,
//     googleLink: "#",
//   }
// ];

// export function TestimonialsSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Auto-slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//     }, 10000);
//     return () => clearInterval(interval);
//   }, []);

//   const nextSlide = () =>
//     setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//   const prevSlide = () =>
//     setCurrentSlide(
//       (prev) => (prev - 1 + testimonials.length) % testimonials.length,
//     );

//   return (
//     <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-bg-primary to-bg-secondary/20 relative ">
//       {/* Background elements */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-16 left-8 w-16 h-16 border border-primary/20 rounded-full animate-pulse" />
//         <div className="absolute bottom-16 right-16 w-24 h-24 border-2 border-success/20 rounded-full animate-ping [animation-delay:1s]" />
//       </div>

//       <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-12 md:mb-16 lg:mb-20"
//         >
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-fg-primary mb-4 font-['Syne',sans-serif] bg-gradient-to-r from-fg-primary to-primary bg-clip-text text-transparent">
//             What Clients Say
//           </h2>
//           <div className="h-px w-20 bg-gradient-to-r from-primary to-transparent mx-auto" />
//         </motion.div>

//         {/* MAIN CAROUSEL CONTAINER */}
//         <div className="relative">
//           {/* LEFT & RIGHT ARROW BUTTONS */}
//           <motion.button
//             onClick={prevSlide}
//             className="absolute -left-12 top-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-bg-card/90 backdrop-blur-xl border-2 border-primary/40 hover:border-primary/70 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-primary/30 hover:bg-primary/10  transition-all duration-400 z-20 group lg:hover:-left-16"
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <ArrowLeft className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:text-fg-primary transition-all duration-300" />
//           </motion.button>

//           <motion.button
//             onClick={nextSlide}
//             className="absolute -right-12 top-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-bg-card/90 backdrop-blur-xl border-2 border-primary/40 hover:border-primary/70 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-primary/30 hover:bg-primary/10  transition-all duration-400 z-20 group lg:hover:-right-16"
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <ArrowRight className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:text-fg-primary transition-all duration-300" />
//           </motion.button>

//           {/* WIDER TESTIMONIAL CARD */}
//           <div className="relative h-[380px] md:h-[420px] lg:h-[460px] xl:h-[480px] flex items-center justify-center px-8 md:px-12 lg:px-20">
//             <motion.div
//               key={currentSlide}
//               className="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl p-6 md:p-8 lg:p-10 xl:p-12 rounded-3xl bg-gradient-to-br from-bg-card/95 via-bg-card/80 to-bg-secondary/60 backdrop-blur-2xl border border-primary/30 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(37,99,235,0.25)] group hover:border-primary/50 transition-all duration-700 relative "
//               initial={{ opacity: 0, scale: 0.99, x: 50 }}
//               animate={{ opacity: 1, scale: 1, x: 0 }}
//               exit={{ opacity: 0, scale: 0.99, x: -50 }}
//               transition={{ duration: 0.6, ease: "easeInOut" }}
//             >
//               {/* Floating particles */}
//               <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-1000 pointer-events-none">
//                 <div className="absolute top-4 left-4 w-2 h-2 bg-primary/40 rounded-full animate-ping [animation-delay:0s]" />
//                 <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-primary/30 rounded-full animate-pulse [animation-delay:1s]" />
//                 <div className="absolute bottom-6 left-6 w-3 h-3 bg-primary/20 rounded-full animate-bounce [animation-delay:2s]" />
//                 <div className="absolute bottom-12 right-12 w-2.5 h-2.5 bg-secondary/30 rounded-full animate-ping [animation-delay:1.5s]" />
//               </div>

//               {/* Quote bubble */}
//               <div className="absolute -top-4 -right-4 w-14 h-14 lg:w-16 lg:h-16 bg-gradient-primary/30 border-2 border-primary/50 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-sm rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500 z-20">
//                 <svg className="w-6 h-6 lg:w-7 lg:h-7 text-primary drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M20 2H10a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 6H10V4h10v4zM4 12H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2zm0 6H2a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2zm0 6H2a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2z" />
//                 </svg>
//               </div>

//               {/* Quote text */}
//               <p className="text-lg md:text-xl lg:text-2xl text-fg-primary/95 leading-[1.6] flex-1 my-8 lg:my-10 relative z-10 bg-bg-card/50 backdrop-blur-sm rounded-2xl p-5 md:p-6 lg:p-8 border border-primary/10 shadow-inner group-hover:shadow-primary/20 transition-all duration-500 font-light">
//                 "{testimonials[currentSlide].quote}"
//               </p>

//               {/* Star rating */}
//               <div className="flex gap-1.5 mb-8 relative z-10">
//                 {[...Array(5)].map((_, i) => (
//                   <motion.div
//                     key={i}
//                     className={`relative ${i < testimonials[currentSlide].rating ? "text-primary" : "text-fg-muted/70"}`}
//                     whileHover={{ scale: 1.3, y: -3 }}
//                   >
//                     <Star className={`w-5 h-5 lg:w-6 lg:h-6 ${i < testimonials[currentSlide].rating ? "fill-primary drop-shadow-glow" : ""}`} />
//                     {i < testimonials[currentSlide].rating && (
//                       <div className="absolute inset-0 bg-primary/40 blur-sm rounded-full -z-10 animate-ping opacity-70" />
//                     )}
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Bottom author bar */}
//               <div className="py-5 lg:py-6 border-t bg-gradient-to-t from-primary/10 via-transparent to-transparent backdrop-blur-sm -mx-2 lg:-mx-3 rounded-b-2xl mt-auto">
//                 <div className="px-2 lg:px-3 flex items-center justify-between">
//                   <div className="flex items-center gap-4 flex-1 min-w-0">
//                     <div className="relative w-12 h-12 lg:w-14 lg:h-14 flex-shrink-0 rounded-2xl bg-gradient-to-br from-primary via-primary/80 to-secondary ring-2 ring-primary/40 shadow-2xl hover:scale-110 transition-all duration-400 overflow-hidden">
//                       <div className="absolute inset-0 bg-gradient-radial from-primary/30 to-transparent opacity-90" />
//                       <div className="relative z-10 flex items-center pt-3 justify-center text-fg-primary font-black text-xl lg:text-2xl">
//                         {testimonials[currentSlide].author.charAt(0)}
//                       </div>
//                     </div>

//                     <div className="min-w-0 flex-1">
//                       <h4 className="text-lg lg:text-xl font-semibold text-fg-primary hover:text-primary transition-colors truncate leading-tight">
//                         {testimonials[currentSlide].author}
//                       </h4>
//                       <p className="text-sm lg:text-base text-fg-muted/90 font-medium truncate leading-tight">
//                         {testimonials[currentSlide].role}, {testimonials[currentSlide].company}
//                       </p>
//                     </div>
//                   </div>

//                   <motion.a
//                     href={testimonials[currentSlide].googleLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="group/google ml-4 flex-shrink-0 p-3 lg:p-3.5 rounded-2xl bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:shadow-xl hover:border-primary/50 backdrop-blur-sm transition-all duration-400 shadow-lg"
//                     whileHover={{
//                       scale: 1.1,
//                       y: -2,
//                       boxShadow: "0 12px 30px rgba(37,99,235,0.4)",
//                     }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <ExternalLink className="w-4 h-4 lg:w-5 lg:h-5 text-primary group-hover/google:translate-x-1 transition-all duration-300" />
//                   </motion.a>
//                 </div>
//               </div>

//               {/* Shimmer overlay */}
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 lg:via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />
//             </motion.div>
//           </div>
//         </div>

//         {/* BOTTOM CONTROLS - Responsive */}
//         <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-12 lg:mt-16 mb-10">
//           {/* Indicators */}
//           <div className="flex gap-2 order-2 sm:order-1">
//             {testimonials.map((_, index) => (
//               <motion.button
//                 key={index}
//                 className={`w-3 h-3 lg:w-3.5 lg:h-3.5 rounded-full transition-all duration-400 flex-shrink-0 ${
//                   index === currentSlide
//                     ? "bg-primary scale-125 shadow-lg"
//                     : "bg-fg-muted/50 hover:bg-fg-muted hover:scale-105"
//                 }`}
//                 onClick={() => setCurrentSlide(index)}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               />
//             ))}
//           </div>

//           {/* Progress Bar */}
//           <div className="w-24 md:w-32 lg:w-40 h-1.5 bg-bg-card/50 rounded-full shadow-inner order-1 sm:order-2 mx-auto sm:mx-0">
//             <motion.div
//               className="bg-gradient-to-r from-primary to-secondary h-full rounded-full shadow-md"
//               initial={{ scaleX: 0 }}
//               animate={{ scaleX: 1 }}
//               transition={{
//                 duration: 10,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//               style={{ originX: 0 }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// =========================== New =======================


import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Star, ArrowLeft, ArrowRight, ExternalLink, Quote } from "lucide-react";

/* ─── Data ───────────────────────────────────────────────── */
const testimonials = [
  {
    quote: "Stephen delivered our CRM Dashboard with exceptional backend architecture and clean frontend implementation. The system is secure, scalable, and performs flawlessly in production.",
    author: "Ramesh Kumar",
    role: "Operations Manager",
    company: "PrimeBuild Solutions",
    rating: 5,
    googleLink: "#",
    tag: "Full-Stack Project",
  },
  {
    quote: "The Job Portal system he built with React and Spring Boot exceeded our expectations. The role-based access control and JWT security were implemented perfectly.",
    author: "Arun Prakash",
    role: "Technical Lead",
    company: "NextGen Technologies",
    rating: 5,
    googleLink: "#",
    tag: "Enterprise App",
  },
  {
    quote: "Stephen's corporate training sessions on Java Full Stack were highly practical and industry-focused. Students gained real confidence in building complete applications.",
    author: "Dr. Meena Joseph",
    role: "Head of Department",
    company: "St. Xavier's College",
    rating: 5,
    googleLink: "#",
    tag: "Corporate Training",
  },
  {
    quote: "His explanation of REST APIs, database design, and authentication mechanisms like JWT made complex concepts very easy to understand. A true mentor for aspiring developers.",
    author: "Karthik Raj",
    role: "Software Developer",
    company: "Alumni Trainee",
    rating: 5,
    googleLink: "#",
    tag: "Mentorship",
  },
  {
    quote: "From requirement analysis to deployment, Stephen handled our full-stack project professionally. His attention to architecture and performance optimization stood out.",
    author: "Priya Nair",
    role: "Project Coordinator",
    company: "Innovate Systems",
    rating: 5,
    googleLink: "#",
    tag: "Architecture",
  },
  {
    quote: "His training programs combine real-time project building with strong fundamentals. Many students from our batch successfully transitioned into developer roles.",
    author: "Vignesh S",
    role: "Placement Coordinator",
    company: "TechBridge Institute",
    rating: 5,
    googleLink: "#",
    tag: "Placement Training",
  },
];

/* ─── Helpers ────────────────────────────────────────────── */
const PRIMARY   = "#2563eb";
const SECONDARY = "#7c3aed";
const AUTO_INTERVAL = 8000;

function toRgba(hex, a) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
}

/* ─── Animated progress bar (resets on slide change) ─────── */
function ProgressBar({ current, total, duration }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className="relative h-[3px] rounded-full overflow-hidden"
          style={{ width: i === current ? 36 : 12, transition: "width 0.4s ease", background: toRgba(PRIMARY, 0.15) }}
        >
          {i === current && (
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{ background: `linear-gradient(90deg, ${PRIMARY}, ${SECONDARY})` }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              key={current}
              transition={{ duration: duration / 1000, ease: "linear" }}
            />
          )}
          {i < current && (
            <div className="absolute inset-0 rounded-full" style={{ background: toRgba(PRIMARY, 0.6) }} />
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── Avatar ─────────────────────────────────────────────── */
function Avatar({ name, size = "md" }) {
  const sz = size === "lg" ? "w-14 h-14 md:w-16 md:h-16 text-2xl" : "w-9 h-9 text-sm";
  return (
    <div
      className={`${sz} rounded-2xl flex items-center justify-center font-black text-white flex-shrink-0`}
      style={{ background: `linear-gradient(135deg, ${PRIMARY} 0%, ${SECONDARY} 100%)`, boxShadow: `0 6px 20px ${toRgba(PRIMARY, 0.35)}` }}
    >
      {name.charAt(0)}
    </div>
  );
}

/* ─── Star Rating ─────────────────────────────────────────── */
function StarRating({ rating, size = "sm" }) {
  const sz = size === "lg" ? "w-5 h-5 md:w-6 md:h-6" : "w-4 h-4";
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${sz} ${i < rating ? "fill-[#2563eb] text-[#2563eb]" : "text-[#334155]"}`}
        />
      ))}
    </div>
  );
}

/* ─── Nav Button ─────────────────────────────────────────── */
function NavBtn({ onClick, children, label }) {
  return (
    <motion.button
      onClick={onClick}
      aria-label={label}
      className="w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center border border-[#1e293b] bg-[#080b12] text-[#64748b] hover:text-[#ffffff] hover:border-[rgba(37,99,235,0.5)] transition-colors duration-300 flex-shrink-0"
      whileHover={{ scale: 1.06, boxShadow: `0 0 18px ${toRgba(PRIMARY, 0.25)}` }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
    >
      {children}
    </motion.button>
  );
}

/* ─── Thumbnail strip ─────────────────────────────────────── */
function ThumbnailStrip({ testimonials, current, onSelect }) {
  return (
    <div className="flex gap-2.5 overflow-x-auto pb-1 scrollbar-none justify-center flex-wrap">
      {testimonials.map((t, i) => (
        <motion.button
          key={i}
          onClick={() => onSelect(i)}
          className="flex items-center gap-2 px-3 py-2 rounded-xl border flex-shrink-0 transition-all duration-300"
          style={{
            borderColor: i === current ? toRgba(PRIMARY, 0.55) : "#1e293b",
            background: i === current ? toRgba(PRIMARY, 0.08) : "#080b12",
            boxShadow: i === current ? `0 0 14px ${toRgba(PRIMARY, 0.2)}` : "none",
          }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
        >
          <Avatar name={t.author} size="sm" />
          <div className="text-left hidden sm:block">
            <p
              className="text-[11px] font-black leading-tight"
              style={{
                fontFamily: "'Syne', sans-serif",
                color: i === current ? "#f1f5f9" : "#64748b",
              }}
            >
              {t.author.split(" ")[0]}
            </p>
            <p
              className="text-[9px] uppercase tracking-wider"
              style={{ fontFamily: "'JetBrains Mono', monospace", color: "#475569" }}
            >
              {t.tag}
            </p>
          </div>
        </motion.button>
      ))}
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────── */
export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);
  const timerRef = useRef(null);

  const goto = (idx, direction = 1) => {
    setDir(direction);
    setCurrent((idx + testimonials.length) % testimonials.length);
  };

  const next = () => goto(current + 1, 1);
  const prev = () => goto(current - 1, -1);

  // Auto-advance
  useEffect(() => {
    timerRef.current = setInterval(next, AUTO_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [current]);

  const t = testimonials[current];

  const variants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 60 : -60, scale: 0.96 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit:  (d) => ({ opacity: 0, x: d > 0 ? -60 : 60, scale: 0.96 }),
  };

  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ background: "#050508" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=JetBrains+Mono:wght@400;600&display=swap');`}</style>

      {/* ── Background atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-80 h-80 rounded-full opacity-[0.07]"
          style={{ background: `radial-gradient(circle,${PRIMARY} 0%,transparent 70%)`, filter: "blur(70px)" }} />
        <div className="absolute -bottom-32 right-1/4 w-72 h-72 rounded-full opacity-[0.06]"
          style={{ background: `radial-gradient(circle,${SECONDARY} 0%,transparent 70%)`, filter: "blur(70px)" }} />
        <div className="absolute inset-0 opacity-[0.022]"
          style={{ backgroundImage: "radial-gradient(circle,#94a3b8 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">

        {/* ── Header ── */}
        <motion.div
          className="mb-12 md:mb-16 relative pl-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
                Client Reviews
              </span>
            </div>
            <div className="h-px w-10" style={{ background: `linear-gradient(90deg,${PRIMARY},transparent)` }} />
          </div>

          <h2
            className="text-4xl md:text-6xl lg:text-[68px] font-black leading-[0.92] mb-4"
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.04em" }}
          >
            <span style={{ background: "linear-gradient(135deg,#ffffff 0%,#94a3b8 60%,#475569 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              What Clients
            </span>
            <br />
            <span style={{ background: `linear-gradient(135deg,${PRIMARY} 0%,${SECONDARY} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Say
            </span>
          </h2>

          <p className="text-[#64748b] text-sm md:text-base max-w-lg"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Real feedback from clients and students across projects and training programs.
          </p>
        </motion.div>

        {/* ── Thumbnail strip ── */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <ThumbnailStrip
            testimonials={testimonials}
            current={current}
            onSelect={(i) => goto(i, i > current ? 1 : -1)}
          />
        </motion.div>

        {/* ── Main card ── */}
        <div className="relative">
          <AnimatePresence custom={dir} mode="wait">
            <motion.div
              key={current}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl border border-[#1e293b] bg-[#080b12] overflow-hidden"
              style={{ boxShadow: `0 0 0 1px ${toRgba(PRIMARY, 0.08)}, 0 30px 70px rgba(0,0,0,0.5)` }}
            >
              {/* Card inner glow */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: `radial-gradient(ellipse 80% 50% at 50% 110%, ${toRgba(PRIMARY, 0.1)} 0%, transparent 70%)` }} />

              {/* Dot-grid texture */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: "radial-gradient(circle,#94a3b8 1px,transparent 1px)", backgroundSize: "22px 22px" }} />

              {/* Top accent bar */}
              <div className="h-[2px] w-full"
                style={{ background: `linear-gradient(90deg, transparent, ${PRIMARY}, ${SECONDARY}, transparent)` }} />

              <div className="p-6 md:p-10 lg:p-12">
                {/* Top row: tag + stars */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold font-mono uppercase tracking-[0.14em] rounded-lg border"
                    style={{ color: PRIMARY, borderColor: toRgba(PRIMARY, 0.4), background: toRgba(PRIMARY, 0.08) }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: PRIMARY, boxShadow: `0 0 6px ${PRIMARY}` }} />
                    {t.tag}
                  </span>
                  <StarRating rating={t.rating} size="lg" />
                </div>

                {/* Quote icon */}
                <div className="mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center border"
                    style={{ background: toRgba(PRIMARY, 0.08), borderColor: toRgba(PRIMARY, 0.3) }}
                  >
                    <Quote className="w-4 h-4 text-[#2563eb]" />
                  </div>
                </div>

                {/* Quote text */}
                <blockquote
                  className="text-lg md:text-xl lg:text-2xl text-[#e2e8f0] leading-[1.65] mb-10 font-light"
                  style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.01em" }}
                >
                  "{t.quote}"
                </blockquote>

                {/* Author row + nav */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-7 border-t border-[#1e293b]">
                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <Avatar name={t.author} size="lg" />
                    <div>
                      <h4
                        className="text-base md:text-lg font-black text-[#f1f5f9] leading-tight mb-0.5"
                        style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.02em" }}
                      >
                        {t.author}
                      </h4>
                      <p
                        className="text-xs md:text-sm text-[#64748b]"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {t.role} · {t.company}
                      </p>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center gap-3 flex-shrink-0">
                    {/* External link */}
                    <motion.a
                      href={t.googleLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl flex items-center justify-center border border-[#1e293b] bg-[#0d1117] text-[#64748b] hover:text-[#2563eb] hover:border-[rgba(37,99,235,0.45)] transition-colors duration-300"
                      whileHover={{ scale: 1.06, boxShadow: `0 0 14px ${toRgba(PRIMARY, 0.22)}` }}
                      whileTap={{ scale: 0.94 }}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </motion.a>

                    {/* Prev / Next */}
                    <NavBtn onClick={prev} label="Previous testimonial">
                      <ArrowLeft className="w-4 h-4" />
                    </NavBtn>
                    <NavBtn onClick={next} label="Next testimonial">
                      <ArrowRight className="w-4 h-4" />
                    </NavBtn>
                  </div>
                </div>
              </div>

              {/* Bottom sweep line */}
              <div className="h-[2px] w-full"
                style={{ background: `linear-gradient(90deg, transparent, ${toRgba(PRIMARY, 0.4)}, transparent)` }} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Footer controls ── */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-5 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {/* Count */}
          <span
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#334155]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {current + 1} / {testimonials.length} reviews
          </span>

          {/* Progress dots */}
          <ProgressBar current={current} total={testimonials.length} duration={AUTO_INTERVAL} />

          {/* Rating summary */}
          <div className="flex items-center gap-2">
            <StarRating rating={5} />
            <span
              className="text-[10px] uppercase tracking-[0.18em] text-[#475569]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              5.0 avg
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TestimonialsSection;