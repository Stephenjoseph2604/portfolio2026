// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronDown } from 'lucide-react';

// const faqs = [
//   {
//     question: "What makes your development approach different?",
//     answer: "I focus on scalable architecture, clean code structure, security implementation, and performance optimization. My solutions are designed for real-world production environments."
//   },
//   {
//     question: "What is your experience as a corporate trainer?",
//     answer: "I have trained students and professionals in Java Full Stack and MERN stack technologies, emphasizing hands-on coding, live project demonstrations, and industry-standard best practices."
//   },
//   {
//     question: "Do you design complete system architecture?",
//     answer: "Yes. I design RESTful backend architecture, database schemas, authentication flows, and frontend folder structures for maintainable and scalable applications."
//   },
//   {
//     question: "Can you assist with interview preparation?",
//     answer: "Yes, I provide structured guidance in Java, Spring Boot, React, SQL, and system design to help candidates prepare for technical interviews."
//   },
//   {
//     question: "Do you offer end-to-end project development?",
//     answer: "Yes, from requirement analysis to deployment, including frontend, backend, database integration, API security, and cloud basics."
//   }
// ];

// export function FAQSection() {
//   const [openIndex, setOpenIndex] = useState(0);

//   return (
//     <section id="faq" className="py-24 md:py-32 bg-bg-primary/40">
//       <div className="max-w-3xl mx-auto px-6">
//         <div className="mb-16 text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-3xl md:text-5xl font-light text-fg-primary mb-6 font-['Syne',sans-serif]"
//           >
//             Frequently Asked Questions
//           </motion.h2>
//           <motion.div
//             initial={{ opacity: 0, width: 0 }}
//             whileInView={{ opacity: 1, width: '100px' }}
//             viewport={{ once: true }}
//             className="h-px bg-primary mx-auto w-24"
//           />
//         </div>

//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="group border-border rounded-2xl bg-bg-card hover:bg-bg-card/80 backdrop-blur-sm hover:shadow-xl hover:border-primary/50 overflow-hidden transition-all duration-300"
//             >
//               <button
//                 onClick={() => setOpenIndex(openIndex === index ? null : index)}
//                 className="w-full px-6 py-6 md:py-7 flex items-center justify-between text-left focus:outline-none hover:bg-bg-secondary/50 transition-colors duration-200"
//                 aria-expanded={openIndex === index}
//               >
//                 <span className="text-lg md:text-xl font-semibold text-fg-primary group-hover:text-primary pr-8 leading-tight">
//                   {faq.question}
//                 </span>
//                 <motion.div
//                   animate={{ rotate: openIndex === index ? 180 : 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <ChevronDown className={`w-6 h-6 text-fg-muted group-hover:text-primary transition-colors flex-shrink-0 ${openIndex === index ? 'text-primary' : ''}`} />
//                 </motion.div>
//               </button>

//               <AnimatePresence>
//                 {openIndex === index && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: 'auto', opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.3, ease: 'easeInOut' }}
//                     className="overflow-hidden"
//                   >
//                     <div className="px-6 pb-8 pt-2 text-fg-muted leading-relaxed text-base md:text-lg border-t border-border/50 bg-bg-secondary/30">
//                       {faq.answer}
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// ======= New =======================



import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

/* ─── Data ───────────────────────────────────────────────── */
const faqs = [
  {
    question: "What makes your development approach different?",
    answer:
      "I focus on scalable architecture, clean code structure, security implementation, and performance optimization. My solutions are designed for real-world production environments — not just demos.",
    tag: "Development",
  },
  {
    question: "What is your experience as a corporate trainer?",
    answer:
      "I have trained students and professionals in Java Full Stack and MERN stack technologies, emphasizing hands-on coding, live project demonstrations, and industry-standard best practices that translate directly to the workplace.",
    tag: "Training",
  },
  {
    question: "Do you design complete system architecture?",
    answer:
      "Yes. I design RESTful backend architecture, database schemas, authentication flows, and frontend folder structures for maintainable and scalable applications — from day one to production.",
    tag: "Architecture",
  },
  {
    question: "Can you assist with interview preparation?",
    answer:
      "Yes, I provide structured guidance in Java, Spring Boot, React, SQL, and system design to help candidates prepare for technical interviews with real confidence.",
    tag: "Mentorship",
  },
  {
    question: "Do you offer end-to-end project development?",
    answer:
      "Yes, from requirement analysis to deployment — including frontend, backend, database integration, API security, and cloud basics. Every phase, handled professionally.",
    tag: "Full-Stack",
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

/* ─── Single FAQ item ─────────────────────────────────────── */
function FAQItem({ faq, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.52, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="relative rounded-2xl border overflow-hidden transition-all duration-400"
        style={{
          borderColor: isOpen ? toRgba(PRIMARY, 0.5) : "#1e293b",
          background: isOpen ? toRgba(PRIMARY, 0.04) : "#080b12",
          boxShadow: isOpen
            ? `0 0 0 1px ${toRgba(PRIMARY, 0.2)}, 0 16px 40px ${toRgba(PRIMARY, 0.1)}`
            : "none",
          transition: "border-color 0.35s, box-shadow 0.35s, background 0.35s",
        }}
      >
        {/* Left accent bar */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-[2px] rounded-l-full"
          animate={{
            background: isOpen
              ? `linear-gradient(180deg, ${PRIMARY}, ${SECONDARY})`
              : "#1e293b",
            opacity: isOpen ? 1 : 0.4,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Dot-grid texture (subtle) */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle,#94a3b8 1px,transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Inner glow when open */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${toRgba(PRIMARY, 0.1)} 0%, transparent 70%)`,
          }}
        />

        {/* ── Trigger ── */}
        <button
          className="relative z-10 w-full pl-7 pr-5 py-5 md:py-6 flex items-center justify-between gap-4 text-left focus:outline-none"
          onClick={onToggle}
          aria-expanded={isOpen}
        >
          {/* Index + question */}
          <div className="flex items-start gap-4 flex-1 min-w-0">
            {/* Number badge */}
            <span
              className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-black font-mono border mt-0.5"
              style={{
                color: isOpen ? "#ffffff" : "#475569",
                borderColor: isOpen ? toRgba(PRIMARY, 0.6) : "#1e293b",
                background: isOpen
                  ? `linear-gradient(135deg, ${PRIMARY}, ${SECONDARY})`
                  : toRgba(PRIMARY, 0.06),
                boxShadow: isOpen ? `0 0 12px ${toRgba(PRIMARY, 0.35)}` : "none",
                transition: "all 0.3s",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="flex-1 min-w-0">
              {/* Tag */}
              <span
                className="inline-flex items-center gap-1.5 mb-2 text-[9px] font-bold font-mono uppercase tracking-[0.16em] px-2 py-0.5 rounded-md border"
                style={{
                  color: isOpen ? PRIMARY : "#475569",
                  borderColor: isOpen ? toRgba(PRIMARY, 0.4) : "#1e293b",
                  background: isOpen ? toRgba(PRIMARY, 0.08) : "transparent",
                  transition: "all 0.3s",
                }}
              >
                <span
                  className="w-1 h-1 rounded-full flex-shrink-0"
                  style={{ background: isOpen ? PRIMARY : "#475569" }}
                />
                {faq.tag}
              </span>

              {/* Question */}
              <p
                className="text-base md:text-lg font-black leading-snug"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  letterSpacing: "-0.02em",
                  color: isOpen ? "#f1f5f9" : "#94a3b8",
                  transition: "color 0.3s",
                }}
              >
                {faq.question}
              </p>
            </div>
          </div>

          {/* Toggle icon */}
          <motion.div
            className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center border transition-all duration-300"
            animate={{
              background: isOpen ? `linear-gradient(135deg, ${PRIMARY}, ${SECONDARY})` : toRgba(PRIMARY, 0.06),
              borderColor: isOpen ? "transparent" : "#1e293b",
              boxShadow: isOpen ? `0 4px 16px ${toRgba(PRIMARY, 0.35)}` : "none",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {isOpen
                ? <Minus className="w-3.5 h-3.5 text-white" />
                : <Plus className="w-3.5 h-3.5 text-[#64748b]" />
              }
            </motion.div>
          </motion.div>
        </button>

        {/* ── Answer ── */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div
                className="relative pl-7 pr-6 pb-6 pt-1"
              >
                {/* Top divider */}
                <div
                  className="mb-4 h-px"
                  style={{ background: `linear-gradient(90deg, ${toRgba(PRIMARY, 0.4)}, transparent)` }}
                />

                <p
                  className="text-sm md:text-base text-[#64748b] leading-relaxed pl-11"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {faq.answer}
                </p>

                {/* Bottom sweep */}
                <motion.div
                  className="absolute bottom-0 left-7 right-6 h-[1.5px]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                  style={{
                    background: `linear-gradient(90deg, ${PRIMARY}, transparent)`,
                    transformOrigin: "left",
                  }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

/* ─── Main Component ─────────────────────────────────────── */
export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ background: "#050508" }}
    >

      {/* ── Background atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[560px] h-72 opacity-[0.07]"
          style={{ background: `radial-gradient(ellipse,${PRIMARY} 0%,transparent 70%)`, filter: "blur(70px)" }}
        />
        <div
          className="absolute -bottom-24 right-0 w-72 h-72 rounded-full opacity-[0.05]"
          style={{ background: `radial-gradient(circle,${SECONDARY} 0%,transparent 70%)`, filter: "blur(70px)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{ backgroundImage: "radial-gradient(circle,#94a3b8 1px,transparent 1px)", backgroundSize: "36px 36px" }}
        />
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
                Got Questions?
              </span>
            </div>
            <div
              className="h-px w-10"
              style={{ background: `linear-gradient(90deg,${PRIMARY},transparent)` }}
            />
          </div>

          {/* Title */}
          <h2
            className="text-4xl md:text-6xl lg:text-[64px] font-black leading-[0.92] mb-4"
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.04em" }}
          >
            <span
              style={{
                background: "linear-gradient(135deg,#ffffff 0%,#94a3b8 60%,#475569 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Frequently
            </span>
            <br />
            <span
              style={{
                background: `linear-gradient(135deg,${PRIMARY} 0%,${SECONDARY} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Asked
            </span>
          </h2>

          <p
            className="text-[#64748b] text-sm md:text-base max-w-md"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Everything you need to know about working together.{" "}
            <span className="text-[#475569]">Can't find your answer? Just reach out.</span>
          </p>
        </motion.div>

        {/* ── FAQ List ── */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>

        {/* ── Footer note ── */}
        <motion.div
          className="flex items-center justify-center gap-4 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="h-px w-12 bg-[#1e293b]" />
          <span
            className="text-[10px] uppercase tracking-[0.2em] text-[#334155]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {faqs.length} questions answered
          </span>
          <div className="h-px w-12 bg-[#1e293b]" />
        </motion.div>
      </div>
    </section>
  );
}

export default FAQSection;