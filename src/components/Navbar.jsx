// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import {  CircleQuestionMark, Contact2,  HomeIcon, Info, Menu, User2, X } from "lucide-react";
// import { Link, useLocation } from "react-router-dom";
// import logoImage from "/sjlogo.png";
// export function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "Home", path: "/" ,icon:<HomeIcon className="h-6/10" /> },
//     { name: "About", path: "/#about",icon:<Info className="h-6/10" /> },
//     { name: "Portfolio", path: "/portfolio",icon:<User2 className="h-6/10" /> },
//     { name: "Contact", path: "/contact",icon:<Contact2 className="h-6/10" /> },
//     { name: "FAQ", path: "/#faq",icon:<CircleQuestionMark className="h-6/10" /> },
//   ];

//   const isActive = (path) => {
//     if (path.startsWith("/#")) {
//       return location.pathname === "/" && location.hash === path.substring(1);
//     }
//     if (path === "/") {
//       return location.pathname === "/" && !location.hash;
//     }
//     return location.pathname === path;
//   };

//   return (
//     <motion.header
//       className={`fixed top-0 left-0 right-0 z-150 transition-all duration-500 ${
//         isScrolled
//           ? "bg-bg-card/85 backdrop-blur-xl border-b-border shadow-lg"
//           : "bg-transparent/80 backdrop-blur-xl"
//       }`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//     >
//       <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
//         {/* Logo */}
//         <Link
//           to="/"
//           className="flex items-center gap-2 group p-2 -m-2 rounded-xl hover:bg-bg-secondary/50 transition-all duration-300"
//         >
//           <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 overflow-hidden">
//             <img
//               src={logoImage}
//               alt="SJ Logo"
//               className="w-6 h-6 md:w-8 md:h-8 scale-200 object-contain drop-shadow-sm"
//             />
//           </div>
//           <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-fg-primary to-primary bg-clip-text text-transparent hidden md:block">
//             SJ Developer
//           </span>
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex items-center gap-2 lg:gap-4">
//           {navLinks.map((link, i) => (
//             <motion.div
//               key={link.name}
//               className="relative"
//               whileHover={{ scale: 1.05 }}
//             >
//               {isActive(link.path) && (
//                 <div className="absolute  bg-primary/60 h-4 w-4 -right-1 -top-1 rounded-full flex items-center justify-center text-fg-primary ">
                 
//                   {link?.icon}
//                 </div>
//               )}
//               <Link
//                 to={link.path}
//                 className={`px-4 py-2 rounded-full text-sm lg:text-base font-medium transition-all duration-300 flex items-center gap-1 ${
//                   isActive(link.path)
//                     ? "text-fg-primary bg-primary/10 shadow-md"
//                     : "text-fg-muted hover:text-fg-primary hover:bg-bg-secondary/50"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//               {isActive(link.path) && (
//                 <motion.div
//                   className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary w-1 h-1 rounded-full"
//                   layoutId="activeNavIndicator"
//                   transition={{ type: "spring", bounce: 0.3 }}
//                 />
//               )}
//             </motion.div>
//           ))}
//         </nav>

//         {/* CTA Button */}
//         <motion.div
//           className="hidden lg:flex items-center gap-3"
//           whileHover={{ scale: 1.05 }}
//           transition={{ type: "spring", stiffness: 400 }}
//         >
//           <Link
//             to="/contact"
//             className="group relative px-6 py-2.5 text-sm font-semibold rounded-full bg-gradient-primary text-fg-primary shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
//           >
//             <span className="relative z-10">Get In Touch</span>
//             <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent -skew-x-12 group-hover:translate-x-2 transition-transform duration-700" />
//           </Link>
//         </motion.div>

//         {/* Mobile Menu Toggle */}
//         <motion.button
//           className="md:hidden p-2 rounded-xl hover:bg-bg-secondary/50 transition-all duration-300 group"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           whileTap={{ scale: 0.95 }}
//           whileHover={{ scale: 1.1 }}
//         >
//           {mobileMenuOpen ? (
//             <X className="w-6 h-6 text-fg-primary" />
//           ) : (
//             <Menu className="w-6 h-6 text-fg-muted group-hover:text-fg-primary" />
//           )}
//         </motion.button>
//       </div>

//       {/* Mobile Menu */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95, y: -10 }}
//         animate={{
//           opacity: mobileMenuOpen ? 1 : 0,
//           scale: mobileMenuOpen ? 1 : 0.95,
//           y: mobileMenuOpen ? 0 : -10,
//         }}
//         transition={{ duration: 0.2, type: "spring" }}
//         className="md:hidden absolute top-full left-0 right-0 mt-1 bg-bg-card/95 backdrop-blur-2xl border-t-border shadow-2xl py-6 px-6 rounded-b-2xl"
//       >
//         <nav className="flex flex-col gap-3">
//           {navLinks.map((link) => (
//             <motion.div
//               key={link.name}
//               whileTap={{ scale: 0.98 }}
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               <Link
//                 to={link.path}
//                 className={`block py-3 px-4 rounded-xl text-lg font-semibold transition-all duration-300 ${
//                   isActive(link.path)
//                     ? "text-primary bg-primary/10 shadow-md"
//                     : "text-fg-muted hover:text-fg-primary hover:bg-bg-secondary"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             </motion.div>
//           ))}
//           <motion.div whileTap={{ scale: 0.98 }}>
//             <Link
//               to="/contact"
//               onClick={() => setMobileMenuOpen(false)}
//               className="mt-4 inline-flex items-center justify-center px-8 py-3 text-base font-semibold rounded-xl bg-linear-90 to-primary text-fg-primary shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
//             >
//               Get In Touch
//             </Link>
//           </motion.div>
//         </nav>
//       </motion.div>
//     </motion.header>
//   );
// }



// ================== New ======================

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HomeIcon, Info, User2, Contact2, CircleHelp, Menu, X, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoImage from "/sjlogo.png";

/* ─── Helpers ─────────────────────────────────────────────── */
const PRIMARY   = "#2563eb";
const SECONDARY = "#7c3aed";

function toRgba(hex, a) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
}

/* ─── Nav links ───────────────────────────────────────────── */
const navLinks = [
  { name: "Home",      path: "/",         Icon: HomeIcon    },
  { name: "About",     path: "/#about",   Icon: Info        },
  { name: "Portfolio", path: "/portfolio",Icon: User2       },
  { name: "Contact",   path: "/contact",  Icon: Contact2    },
  { name: "FAQ",       path: "/#faq",     Icon: CircleHelp  },
];

/* ─── Desktop nav link ────────────────────────────────────── */
function NavLink({ link, active }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={link.path}
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="relative flex items-center gap-1.5 px-4 py-2 rounded-xl text-[13px] font-bold transition-colors duration-250"
        animate={{
          color: active ? "#f1f5f9" : hovered ? "#f1f5f9" : "#64748b",
          background: active
            ? toRgba(PRIMARY, 0.1)
            : hovered
            ? toRgba(PRIMARY, 0.06)
            : "transparent",
        }}
        transition={{ duration: 0.22 }}
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: "0.04em",
          border: active ? `1px solid ${toRgba(PRIMARY, 0.35)}` : "1px solid transparent",
          boxShadow: active ? `0 0 0 1px ${toRgba(PRIMARY, 0.1)}, 0 4px 14px ${toRgba(PRIMARY, 0.1)}` : "none",
          transition: "all 0.25s ease",
        }}
      >
        {/* Active dot */}
        {active && (
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: PRIMARY, boxShadow: `0 0 6px ${PRIMARY}` }}
          />
        )}
        {link.name}

        {/* Hover underline */}
        <motion.div
          className="absolute bottom-0 left-3 right-3 h-[1.5px] rounded-full"
          animate={{ scaleX: (hovered || active) ? 1 : 0, opacity: active ? 0.6 : 0.4 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: `linear-gradient(90deg, ${PRIMARY}, ${SECONDARY})`,
            transformOrigin: "left",
          }}
        />
      </motion.div>
    </Link>
  );
}

/* ─── CTA button ──────────────────────────────────────────── */
function CTAButton({ onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link to="/contact" onClick={onClick}>
      <motion.div
        className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-black text-[12px] text-white overflow-hidden cursor-pointer"
        style={{
          fontFamily: "'Syne', sans-serif",
          letterSpacing: "-0.01em",
          background: `linear-gradient(135deg, ${PRIMARY} 0%, ${SECONDARY} 100%)`,
          boxShadow: hovered
            ? `0 0 0 1.5px ${toRgba(PRIMARY, 0.5)}, 0 10px 28px ${toRgba(PRIMARY, 0.38)}`
            : `0 4px 18px ${toRgba(PRIMARY, 0.25)}`,
          transition: "box-shadow 0.3s ease",
        }}
        whileHover={{ scale: 1.04, y: -1 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 420, damping: 22 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Shimmer */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ x: hovered ? "100%" : "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent)", width: "60%" }}
        />
        <span className="relative z-10">Get In Touch</span>
        <motion.div
          className="relative z-10"
          animate={{ x: hovered ? 3 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <ArrowRight className="w-3.5 h-3.5" />
        </motion.div>
      </motion.div>
    </Link>
  );
}

/* ─── Mobile menu item ─────────────────────────────────────── */
function MobileNavLink({ link, active, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -8 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <Link
        to={link.path}
        className="flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-250"
        style={{
          background: active ? toRgba(PRIMARY, 0.08) : "transparent",
          border: active ? `1px solid ${toRgba(PRIMARY, 0.3)}` : "1px solid transparent",
        }}
      >
        {/* Icon badge */}
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 border"
          style={{
            background: active ? toRgba(PRIMARY, 0.12) : toRgba(PRIMARY, 0.05),
            borderColor: active ? toRgba(PRIMARY, 0.4) : "#1e293b",
          }}
        >
          <link.Icon
            className="w-3.5 h-3.5"
            style={{ color: active ? PRIMARY : "#475569" }}
          />
        </div>

        <span
          className="font-bold text-sm flex-1"
          style={{
            fontFamily: "'Syne', sans-serif",
            letterSpacing: "-0.01em",
            color: active ? "#f1f5f9" : "#64748b",
          }}
        >
          {link.name}
        </span>

        {active && (
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: PRIMARY, boxShadow: `0 0 6px ${PRIMARY}` }}
          />
        )}
      </Link>
    </motion.div>
  );
}

/* ─── Main Navbar ──────────────────────────────────────────── */
export function Navbar() {
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [location.pathname, location.hash]);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/" && !location.hash;
    if (path.startsWith("/#")) return location.pathname === "/" && location.hash === path.slice(1);
    return location.pathname === path;
  };

  return (
    <>

      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* ── Outer wrapper — adds top spacing + horizontal padding ── */}
        <div className="px-3 md:px-6 pt-3">
          <div
            className="max-w-6xl mx-auto rounded-2xl border transition-all duration-500"
            style={{
           
              borderColor: scrolled ? toRgba(PRIMARY, 0.18) : "#1e293b",
              backdropFilter: "blur(10px)",
              boxShadow: scrolled
                ? `0 0 0 1px ${toRgba(PRIMARY, 0.06)}, 0 16px 40px rgba(0,0,0,0.45)`
                : "0 8px 24px rgba(0,0,0,0.25)",
              transition: "all 0.45s ease",
            }}
          >
            <div className="h-14 md:h-16 flex items-center justify-between px-4 md:px-5">

              {/* ── Logo ── */}
              <Link to="/" className="flex items-center gap-2.5 group">
                {/* Logo mark */}
                <motion.div
                  className="w-8 h-8 scale-150 rounded-xl overflow-hidden flex items-center justify-center flex-shrink-0"
                 
                  whileHover={{ scale: 1.08, rotate: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 22 }}
                >
                  <img
                    src={logoImage}
                    alt="SJ"
                    className="w-6 h-6 object-contain scale-150"
                  />
                </motion.div>

                {/* Brand name */}
                <div className="hidden sm:block">
                  <span
                    className="text-base font-bold text-[#f1f5f9] leading-none block"
                    style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.03em" }}
                  >
                    SJ
                    <span
                      style={{
                        background: `linear-gradient(135deg, ${PRIMARY}, ${SECONDARY})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {" "}Developer
                    </span>
                  </span>
                  <span
                    className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#475569] block"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Full Stack · Trainer
                  </span>
                </div>
              </Link>

              {/* ── Desktop Nav ── */}
              <nav className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                  <NavLink key={link.name} link={link} active={isActive(link.path)} />
                ))}
              </nav>

              {/* ── Right: CTA + hamburger ── */}
              <div className="flex items-center gap-2.5">
                <div className="hidden lg:block">
                  <CTAButton />
                </div>

                {/* Status dot — desktop only */}
                <div className="hidden md:flex lg:hidden items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-[#1e293b] bg-[#080b12]">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse"
                    style={{ boxShadow: "0 0 6px #10b981" }}
                  />
                  <span
                    className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#64748b]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Live
                  </span>
                </div>

                {/* Hamburger */}
                <motion.button
                  className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center border border-[#1e293b] bg-[#080b12] text-[#64748b] hover:text-[#f1f5f9] hover:border-[rgba(37,99,235,0.4)] transition-all duration-250"
                  onClick={() => setMobileOpen((o) => !o)}
                  whileTap={{ scale: 0.93 }}
                  whileHover={{ scale: 1.06 }}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={mobileOpen ? "x" : "menu"}
                      initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                      transition={{ duration: 0.22 }}
                    >
                      {mobileOpen
                        ? <X className="w-4 h-4" />
                        : <Menu className="w-4 h-4" />
                      }
                    </motion.div>
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>

            {/* ── Mobile Menu ── */}
            <AnimatePresence>
              {mobileOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden md:hidden"
                >
                  {/* Divider */}
                  <div
                    className="mx-4 h-px"
                    style={{ background: `linear-gradient(90deg, transparent, ${toRgba(PRIMARY, 0.4)}, transparent)` }}
                  />

                  <div className="px-3 pb-4 pt-3 space-y-1">
                    {navLinks.map((link, i) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -14 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.055, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <MobileNavLink
                          link={link}
                          active={isActive(link.path)}
                          onClick={() => setMobileOpen(false)}
                        />
                      </motion.div>
                    ))}

                    {/* Mobile CTA */}
                    <motion.div
                      className="pt-2"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: navLinks.length * 0.055 + 0.05 }}
                    >
                      <CTAButton onClick={() => setMobileOpen(false)} />
                    </motion.div>

                    {/* Status + count */}
                    <motion.div
                      className="flex items-center justify-between pt-2 px-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.35 }}
                    >
                      <div className="flex items-center gap-1.5">
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse"
                          style={{ boxShadow: "0 0 6px #10b981" }}
                        />
                        <span
                          className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#475569]"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          Available for projects
                        </span>
                      </div>
                      <span
                        className="text-[9px] uppercase tracking-wider text-[#334155]"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {navLinks.length} pages
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </motion.header>
    </>
  );
}

export default Navbar;