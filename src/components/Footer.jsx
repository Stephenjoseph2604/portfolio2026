// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Github, Linkedin, Mail, Code2, Brain, Twitter, MapPin } from 'lucide-react';

// export function Footer() {
//   return (
//     <footer className="bg-bg-primary border-t-border pt-16 md:pt-20 pb-12 md:pb-16">
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-20">
//           {/* Brand Column */}
//           <div className="lg:col-span-1">
//             <Link
//               to="/"
//               className="flex items-center gap-3 mb-6 group p-3 -m-3 rounded-xl hover:bg-bg-secondary/50 transition-all duration-300"
//               aria-label="Stephenjoseph M Home"
//             >
//               <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
//                 <svg 
//                   className="w-6 h-6 md:w-7 md:h-7 text-fg-primary drop-shadow-sm"
//                   fill="none" 
//                   stroke="currentColor" 
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
//                   <path d="M16 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
//                   <path d="M8 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
//                   <path d="M16 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
//                 </svg>
//               </div>
//               <div>
//                 <span className="text-xl  font-bold text-fg-primary tracking-tight bg-gradient-to-r from-fg-primary to-primary bg-clip-text text-transparent">
//                   SJ Developer
//                 </span>
//                 <p className="text-xs text-fg-muted mt-1">Coimbatore, India</p>
//               </div>
//             </Link>
//             <p className="text-fg-muted text-sm leading-relaxed max-w-md">
//               Full-stack developer specializing in scalable web applications, enterprise systems, and technical training.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-fg-primary font-semibold mb-6 text-lg">Quick Links</h4>
//             <ul className="space-y-3">
//               <li><Link to="/#about" className="text-fg-muted hover:text-fg-primary text-sm transition-all duration-200 hover:translate-x-2 inline-flex items-center gap-2">About</Link></li>
//               <li><Link to="/portfolio" className="text-fg-muted hover:text-fg-primary text-sm transition-all duration-200 hover:translate-x-2 inline-flex items-center gap-2">Portfolio</Link></li>
//               <li><Link to="/#services" className="text-fg-muted hover:text-fg-primary text-sm transition-all duration-200 hover:translate-x-2 inline-flex items-center gap-2">Services</Link></li>
//               <li><Link to="/contact" className="text-fg-muted hover:text-fg-primary text-sm transition-all duration-200 hover:translate-x-2 inline-flex items-center gap-2">Contact</Link></li>
//             </ul>
//           </div>

//           {/* Platforms */}
//           <div>
//             <h4 className="text-fg-primary font-semibold mb-6 text-lg">Platforms</h4>
//             <ul className="space-y-3">
//               <li><a href="https://leetcode.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-fg-muted hover:text-primary text-sm transition-all duration-200 hover:translate-x-2 inline-flex items-center gap-2 group">LeetCode <Code2 className="w-4 h-4 group-hover:translate-x-1"/></a></li>
//               <li><a href="https://hackerrank.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-fg-muted hover:text-success text-sm transition-all duration-200 hover:translate-x-2 inline-flex items-center gap-2 group">HackerRank <Brain className="w-4 h-4 group-hover:translate-x-1"/></a></li>
//               <li><a href="https://github.com/stephenjosephm" target="_blank" rel="noopener noreferrer" className="text-fg-muted hover:text-secondary text-sm transition-all duration-200 hover:translate-x-2 inline-flex items-center gap-2 group">GitHub <Github className="w-4 h-4 group-hover:translate-x-1"/></a></li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="text-fg-primary font-semibold mb-6 text-lg">Connect</h4>
//             <div className="space-y-3 ">
//               <a href="mailto:stephenjosephm@gmail.com" className="text-fg-muted hover:text-primary text-sm transition-all duration-200 hover:translate-x-2 inline-flex items-center gap-2 mr-3 group">
//                 <Mail className="w-4 h-4"/> Email
//               </a>
//               <a href="https://linkedin.com/in/stephenjosephm" target="_bl  ank" rel="noopener noreferrer" className="text-fg-muted hover:text-blue-400 text-sm transition-all duration-200 mr-3 hover:translate-x-2 inline-flex items-center gap-2 group">
//                 <Linkedin className="w-4 h-4"/> LinkedIn
//               </a>
//               <a href="https://twitter.com/stephenjosephm" target="_blank" rel="noopener noreferrer" className="text-fg-muted hover:text-sky-400 text-sm transition-all duration-200 mr-3 hover:translate-x-2 inline-flex items-center gap-2 group">
//                 <Twitter className="w-4 h-4"/> Twitter
//               </a>
//               <div className="flex items-center gap-2 text-fg-muted text-xs pt-2 border-t border-border/50">
//                 <MapPin className="w-4 h-4"/> Coimbatore, Tamil Nadu
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="pt-10 border-t border-border/50 flex flex-col lg:flex-row items-center justify-between gap-4 pb-4">
//           <p className="text-fg-muted text-sm">
//             © {new Date().getFullYear()} Stephenjoseph M. Built with React & Tailwind.
//           </p>
//           <div className="flex gap-6 text-xs text-fg-muted">
//             <a href="#" className="hover:text-fg-primary transition-colors">Privacy</a>
//             <a href="#" className="hover:text-fg-primary transition-colors">Terms</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// ================= New ===========================

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Github, Linkedin, Mail, Code2, Brain,
  Twitter, MapPin, ArrowUpRight, ArrowRight,
} from "lucide-react";

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

/* ─── Data ───────────────────────────────────────────────── */
const quickLinks = [
  { label: "Home",      to: "/"          },
  { label: "About",     to: "/#about"    },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Services",  to: "/#services" },
  { label: "FAQ",       to: "/#faq"      },
  { label: "Contact",   to: "/contact"   },
];

const platforms = [
  { label: "LeetCode",   href: "https://leetcode.com/yourusername",    Icon: Code2,  accent: "#f89820" },
  { label: "HackerRank", href: "https://hackerrank.com/yourusername",  Icon: Brain,  accent: SUCCESS   },
  { label: "GitHub",     href: "https://github.com/stephenjosephm",    Icon: Github, accent: "#94a3b8" },
];

const socials = [
  { label: "Email",    href: "mailto:stephenjosephm@gmail.com",          Icon: Mail,     accent: PRIMARY   },
  { label: "LinkedIn", href: "https://linkedin.com/in/stephenjosephm",   Icon: Linkedin, accent: "#0a66c2" },
  { label: "Twitter",  href: "https://twitter.com/stephenjosephm",       Icon: Twitter,  accent: "#38bdf8" },
];

/* ─── Reusable link row ──────────────────────────────────── */
function FooterLink({ label, href, to, Icon, accent, external = false }) {
  const [hovered, setHovered] = useState(false);
  const cls =
    "group flex items-center gap-2.5 py-2 transition-all duration-25 cursor-pointer";

  const inner = (
    <>
      {Icon && (
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center border flex-shrink-0 transition-all duration-300"
          style={{
            background: hovered ? toRgba(accent || PRIMARY, 0.12) : toRgba(PRIMARY, 0.04),
            borderColor: hovered ? toRgba(accent || PRIMARY, 0.45) : "#1e293b",
            boxShadow: hovered ? `0 0 10px ${toRgba(accent || PRIMARY, 0.2)}` : "none",
          }}
        >
          <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: hovered ? (accent || PRIMARY) : "#475569" }} />
        </div>
      )}
      <span
        className="text-[13px] font-bold transition-colors duration-250"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: hovered ? "#f1f5f9" : "#64748b",
          letterSpacing: "0.02em",
        }}
      >
        {label}
      </span>
      {external && (
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -4, y: hovered ? 0 : 4 }}
          transition={{ duration: 0.22 }}
          className="ml-auto"
        >
          <ArrowUpRight className="w-3 h-3" style={{ color: accent || PRIMARY }} />
        </motion.div>
      )}
      {!external && (
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -4 }}
          transition={{ duration: 0.22 }}
          className="ml-auto"
        >
          <ArrowRight className="w-3 h-3" style={{ color: PRIMARY }} />
        </motion.div>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cls} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={href} target={external ? "_blank" : undefined} rel="noopener noreferrer"
      className={cls} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {inner}
    </a>
  );
}

/* ─── Column header ──────────────────────────────────────── */
function ColHeader({ children }) {
  return (
    <div className="flex items-center gap-2 mb-5">
      <span
        className="text-[10px] font-black uppercase tracking-[0.2em] text-[#475569]"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {children}
      </span>
      <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, ${toRgba(PRIMARY, 0.4)}, transparent)` }} />
    </div>
  );
}

/* ─── Main Footer ─────────────────────────────────────────── */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden pt-16 md:pt-20 pb-8"
      style={{ background: "#050508", borderTop: `1px solid #1e293b` }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=JetBrains+Mono:wght@400;600;700&display=swap');`}</style>

      {/* ── Background atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-32 left-1/4 w-[420px] h-[280px] opacity-[0.06]"
          style={{ background: `radial-gradient(ellipse,${PRIMARY} 0%,transparent 70%)`, filter: "blur(70px)" }} />
        <div className="absolute -bottom-24 right-0 w-[300px] h-[300px] rounded-full opacity-[0.05]"
          style={{ background: `radial-gradient(circle,${SECONDARY} 0%,transparent 70%)`, filter: "blur(60px)" }} />
        <div className="absolute inset-0 opacity-[0.018]"
          style={{ backgroundImage: "radial-gradient(circle,#94a3b8 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">

        {/* ── Top CTA bar ── */}
        <motion.div
          className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-14 md:mb-16 p-6 md:p-8 rounded-2xl border border-[#1e293b] overflow-hidden"
          style={{ background: toRgba(PRIMARY, 0.04) }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(ellipse 60% 80% at 0% 50%, ${toRgba(PRIMARY, 0.12)} 0%, transparent 65%)` }} />
          <div className="absolute top-0 left-0 right-0 h-[1.5px]"
            style={{ background: `linear-gradient(90deg, ${PRIMARY}, ${SECONDARY}, transparent)` }} />

          <div className="relative z-10">
            <h3
              className="text-2xl md:text-3xl font-black text-[#f1f5f9] mb-1.5 leading-tight"
              style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.03em" }}
            >
              Let's build something
              <span style={{
                background: `linear-gradient(135deg,${PRIMARY},${SECONDARY})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}> exceptional.</span>
            </h3>
            <p className="text-[#64748b] text-sm" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              Open for freelance projects, corporate training, and collaborations.
            </p>
          </div>

          <Link to="/contact" className="relative z-10 flex-shrink-0">
            <motion.div
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-black text-sm text-white overflow-hidden"
              style={{
                fontFamily: "'Syne', sans-serif",
                letterSpacing: "-0.02em",
                background: `linear-gradient(135deg, ${PRIMARY} 0%, ${SECONDARY} 100%)`,
                boxShadow: `0 6px 22px ${toRgba(PRIMARY, 0.3)}`,
              }}
              whileHover={{ scale: 1.04, y: -1, boxShadow: `0 12px 30px ${toRgba(PRIMARY, 0.42)}` }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            >
              Get In Touch
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.div>
          </Link>
        </motion.div>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-14">

          {/* Brand column */}
          <motion.div
            className="sm:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            <Link to="/" className="flex items-center gap-2.5 mb-5 group">
              <motion.div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg,${PRIMARY},${SECONDARY})`,
                  boxShadow: `0 4px 14px ${toRgba(PRIMARY, 0.38)}`,
                }}
                whileHover={{ scale: 1.08, rotate: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
              >
                <span className="text-xs font-black text-white" style={{ fontFamily: "'Syne',sans-serif" }}>SJ</span>
              </motion.div>
              <div>
                <span
                  className="text-base font-black text-[#f1f5f9] block leading-none"
                  style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.03em" }}
                >
                  Stephen
                  <span style={{ background: `linear-gradient(135deg,${PRIMARY},${SECONDARY})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    {" "}Joseph
                  </span>
                </span>
                <span
                  className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#475569]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Full Stack · Trainer
                </span>
              </div>
            </Link>

            <p
              className="text-[#64748b] text-xs leading-relaxed mb-5 max-w-xs"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Full-stack developer specialising in scalable web applications, enterprise systems, and technical training.
            </p>

            {/* Location chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[#1e293b] bg-[#080b12]">
              <MapPin className="w-3 h-3 text-[#475569]" />
              <span
                className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#475569]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Coimbatore, Tamil Nadu
              </span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <ColHeader>Quick Links</ColHeader>
            <div className="space-y-0.5">
              {quickLinks.map((l) => (
                <FooterLink key={l.label} label={l.label} to={l.to} />
              ))}
            </div>
          </motion.div>

          {/* Platforms */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <ColHeader>Platforms</ColHeader>
            <div className="space-y-0.5">
              {platforms.map((p) => (
                <FooterLink key={p.label} label={p.label} href={p.href} Icon={p.Icon} accent={p.accent} external />
              ))}
            </div>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <ColHeader>Connect</ColHeader>
            <div className="space-y-0.5 mb-6">
              {socials.map((s) => (
                <FooterLink key={s.label} label={s.label} href={s.href} Icon={s.Icon} accent={s.accent} external />
              ))}
            </div>

            {/* Status pill */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl border border-[#1e293b] bg-[#080b12] w-fit">
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse flex-shrink-0"
                style={{ boxShadow: "0 0 6px #10b981" }}
              />
              <span
                className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#475569]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Open to opportunities
              </span>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom bar ── */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid #1e293b" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
        >
          {/* Left */}
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="text-[10px] uppercase tracking-[0.18em] text-[#334155]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              © {year} Stephenjoseph M.
            </span>
            <span className="text-[#1e293b]">·</span>
            <span
              className="text-[10px] uppercase tracking-[0.16em] text-[#334155]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Built with React &amp; Tailwind
            </span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            {["Privacy", "Terms"].map((lbl) => (
              <a
                key={lbl}
                href="#"
                className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#334155] hover:text-[#64748b] transition-colors duration-250"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {lbl}
              </a>
            ))}
            {/* Divider dot */}
            <div className="flex items-center gap-4">
              <div className="h-px w-8" style={{ background: `linear-gradient(90deg,transparent,${toRgba(PRIMARY,0.4)})` }} />
              <span
                className="text-[9px] uppercase tracking-[0.2em] text-[#334155]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                v2025
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
