// import React from 'react';
// import reactLogo from '../assets/skills/react.png';
// import reduxLogo from '../assets/skills/redux.png';
// import androidLogo from '../assets/skills/android.png';
// import cssLogo from '../assets/skills/css.png';
// import htmlLogo from '../assets/skills/html.png';
// import nodeLogo from '../assets/skills/node.png';
// import dataLogo from '../assets/skills/data.png';
// import expressLogo from '../assets/skills/express.png';
// import eclipseLogo from '../assets/skills/eclipse.png';
// import node1Logo from '../assets/skills/node1.png';
// import javaLogo from '../assets/skills/java.png';
// import tailwindLogo from '../assets/skills/tailwind.png';
// import jwtLogo from '../assets/skills/jwt.png';
// import jsLogo from '../assets/skills/js.png';
// import ktLogo from '../assets/skills/kt.png';
// import react2Logo from '../assets/skills/react.png'; // renamed to avoid conflict
// import intellijLogo from '../assets/skills/intellij.png';
// import mysqlLogo from '../assets/skills/mysql.png';
// import postmanLogo from '../assets/skills/postman.png';
// import mongoLogo from '../assets/skills/mongo.png';
// import springLogo from '../assets/skills/spring.png';
// import securityLogo from '../assets/skills/security.png';
// import springbootLogo from '../assets/skills/springboot.png';
// import vsLogo from '../assets/skills/vs.png';


// const skillLogos = [
//   { src: reactLogo, name: 'React' },
//   { src: reduxLogo, name: 'Redux' },
//   { src: androidLogo, name: 'Android' },
//   { src: htmlLogo, name: 'HTML' },
//   { src: cssLogo, name: 'CSS' },
//   { src: nodeLogo, name: 'Node.js' },
//   { src: dataLogo, name: 'Data Science' },
//   { src: expressLogo, name: 'Express.js' },
//   { src: eclipseLogo, name: 'Eclipse' },
//   { src: node1Logo, name: 'Docker' },
//   { src: javaLogo, name: 'Java' },
//   { src: tailwindLogo, name: 'Tailwind CSS' },
//   { src: jwtLogo, name: 'JWT' },
//   { src: jsLogo, name: 'JavaScript' },
//   { src: ktLogo, name: 'Kotlin' },
//   { src: react2Logo, name: 'React Native' },
//   { src: intellijLogo, name: 'IntelliJ' },
//   { src: mysqlLogo, name: 'MySQL' },
//   { src: postmanLogo, name: 'Postman' },
//   { src: mongoLogo, name: 'MongoDB' },
//   { src: springLogo, name: 'Spring' },
//   { src: securityLogo, name: 'Security' },
//   { src: springbootLogo, name: 'Spring Boot' },
//   { src: vsLogo, name: 'VS Code' },
// ];


// export function LogoStrip() {
//   return (
//     <section className="w-full border-border bg-bg-secondary/70 py-12 overflow-hidden">
//       <div className="relative flex ">
//         {/* Fade edges */}
//         <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-fade-l z-10 pointer-events-none" />
//         <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-fade-r z-10 pointer-events-none" />

//         {/* Scrolling track 1 */}
//         <div className="flex animate-marquee [animation-play-state:running]">
//           {[...skillLogos, ...skillLogos].map(({ src, name }, index) => (
//             <div key={index} className="flex-shrink-0 mx-6 relative">
//               <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 rounded-2xl hover:border-2   border-primary/20 hover:grayscale-0 transition-all duration-500 flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-bg-card/60 p-3 group">
//                 <img 
//                   src={src} 
//                   alt={name}
//                   className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 object-contain grayscale-20  flex-shrink-0 rounded-lg transition-all duration-300 group-hover:scale-110"
//                 />
                
//                 {/* Small absolute name chip */}
//                 <div className="absolute -bottom-2 -right-2 bg-primary/10 backdrop-blur-sm border border-primary/50 px-2 py-0.5 rounded-full shadow-lg z-20 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 transform -translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0">
//                   <span className="text-[10px] md:text-[11px] lg:text-xs font-semibold tracking-wider text-fg-primary whitespace-nowrap">
//                     {name}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Scrolling track 2 */}
//         <div className="flex animate-marquee [animation-play-state:running] [animation-delay:-18s]" aria-hidden="true">
//           {[...skillLogos, ...skillLogos].map(({ src, name }, index) => (
//             <div key={`dup-${index}`} className="flex-shrink-0 mx-6 relative">
//               <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 rounded-2xl border-2 border-border bg-bg-card/60 hover:border-primary/60 hover:grayscale-0 transition-all duration-500 flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-bg-card p-3 group">
//                 <img 
//                   src={src} 
//                   alt={name}
//                   className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 object-contain grayscale flex-shrink-0 rounded-lg transition-all duration-300 group-hover:scale-110"
//                 />
                
//                 {/* Small absolute name chip */}
//                 <div className="absolute -bottom-2 -right-2 bg-primary/90 backdrop-blur-sm border border-primary/50 px-2 py-0.5 rounded-full shadow-lg z-20 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 transform -translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0">
//                   <span className="text-[10px] md:text-[11px] lg:text-xs font-semibold tracking-wider text-fg-primary whitespace-nowrap">
//                     {name}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



// ============= New ================

import { useState } from "react";
import reactLogo from "../assets/skills/react.png";
import reduxLogo from "../assets/skills/redux.png";
import androidLogo from "../assets/skills/android.png";
import cssLogo from "../assets/skills/css.png";
import htmlLogo from "../assets/skills/html.png";
import nodeLogo from "../assets/skills/node.png";
import dataLogo from "../assets/skills/data.png";
import expressLogo from "../assets/skills/express.png";
import eclipseLogo from "../assets/skills/eclipse.png";
import node1Logo from "../assets/skills/node1.png";
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

/* ─── Data ───────────────────────────────────────────────── */
const skillLogos = [
  { src: reactLogo,      name: "React",       category: "Frontend" },
  { src: jsLogo,         name: "JavaScript",  category: "Language" },
  { src: javaLogo,       name: "Java",        category: "Language" },
  { src: springbootLogo, name: "Spring Boot", category: "Backend"  },
  { src: nodeLogo,       name: "Node.js",     category: "Backend"  },
  { src: mongoLogo,      name: "MongoDB",     category: "Database" },
  { src: mysqlLogo,      name: "MySQL",       category: "Database" },
  { src: tailwindLogo,   name: "Tailwind CSS",category: "Styling"  },
  { src: reduxLogo,      name: "Redux",       category: "State"    },
  { src: expressLogo,    name: "Express.js",  category: "Backend"  },
  { src: jwtLogo,        name: "JWT Auth",    category: "Security" },
  { src: springLogo,     name: "Spring",      category: "Backend"  },
  { src: androidLogo,    name: "Android",     category: "Mobile"   },
  { src: ktLogo,         name: "Kotlin",      category: "Mobile"   },
  { src: htmlLogo,       name: "HTML",        category: "Frontend" },
  { src: cssLogo,        name: "CSS",         category: "Styling"  },
  { src: vsLogo,         name: "VS Code",     category: "Tools"    },
  { src: intellijLogo,   name: "IntelliJ",    category: "Tools"    },
  { src: postmanLogo,    name: "Postman",     category: "Tools"    },
  { src: securityLogo,   name: "Security",    category: "Security" },
  { src: eclipseLogo,    name: "Eclipse",     category: "Tools"    },
  { src: dataLogo,       name: "Data Struct", category: "Core"     },
  { src: node1Logo,      name: "Docker",      category: "DevOps"   },
];

/* Accent per category */
const catColor = {
  Frontend: "#61dafb",
  Language: "#f89820",
  Backend:  "#84cc16",
  Database: "#00758f",
  Styling:  "#38bdf8",
  State:    "#764abc",
  Security: "#e11d48",
  Mobile:   "#3ddc84",
  Tools:    "#007acc",
  DevOps:   "#2496ed",
  Core:     "#0f766e",
};

function toRgba(hex, a) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
}

/* ─── Single logo pill ───────────────────────────────────── */
function LogoPill({ skill, paused, onEnter, onLeave }) {
  const [hovered, setHovered] = useState(false);
  const accent = catColor[skill.category] || "#2563eb";

  return (
    <div
      className="relative flex-shrink-0 mx-3"
      onMouseEnter={() => { setHovered(true);  onEnter(); }}
      onMouseLeave={() => { setHovered(false); onLeave(); }}
    >
      {/* Card */}
      <div
        className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center p-3 transition-all duration-400 cursor-pointer overflow-hidden"
        style={{
          background: hovered ? toRgba(accent, 0.1) : "#0d1117",
          border: `1.5px solid ${hovered ? toRgba(accent, 0.55) : "#1e293b"}`,
          boxShadow: hovered
            ? `0 0 0 1px ${toRgba(accent, 0.3)}, 0 12px 32px ${toRgba(accent, 0.2)}`
            : "none",
          transform: hovered ? "translateY(-5px) scale(1.08)" : "translateY(0) scale(1)",
          transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-400"
          style={{
            background: `radial-gradient(ellipse 80% 70% at 50% 110%, ${toRgba(accent, 0.22)} 0%, transparent 70%)`,
            opacity: hovered ? 1 : 0,
          }}
        />

        {/* Dot-grid */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle,#94a3b8 1px,transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        />

        {/* Icon */}
        <img
          src={skill.src}
          alt={skill.name}
          className="relative z-10 w-10 h-10 md:w-12 md:h-12 object-contain transition-all duration-350 select-none"
          style={{
            filter: hovered
              ? `drop-shadow(0 4px 12px ${toRgba(accent, 0.55)}) brightness(1.12) saturate(1.2)`
              : "brightness(0.75) saturate(0.6)",
            transform: hovered ? "scale(1.12)" : "scale(1)",
            transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
          }}
          draggable={false}
        />

        {/* Top-right corner accent */}
        <div
          className="absolute top-0 right-0 w-3 h-3 border-t-[1.5px] border-r-[1.5px] rounded-tr-2xl pointer-events-none transition-opacity duration-300"
          style={{ borderColor: toRgba(accent, 0.65), opacity: hovered ? 1 : 0 }}
        />
        <div
          className="absolute bottom-0 left-0 w-3 h-3 border-b-[1.5px] border-l-[1.5px] rounded-bl-2xl pointer-events-none transition-opacity duration-300"
          style={{ borderColor: toRgba(accent, 0.65), opacity: hovered ? 1 : 0 }}
        />
      </div>

      {/* Name tooltip */}
      <div
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 pointer-events-none transition-all duration-300 whitespace-nowrap z-30"
        style={{ opacity: hovered ? 1 : 0, transform: `translateX(-50%) translateY(${hovered ? 0 : 4}px)` }}
      >
        <div
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border"
          style={{
            background: "#080b12",
            borderColor: toRgba(accent, 0.45),
            boxShadow: `0 4px 14px ${toRgba(accent, 0.2)}`,
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: accent, boxShadow: `0 0 5px ${accent}` }}
          />
          <span
            className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#f1f5f9]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {skill.name}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Marquee row ────────────────────────────────────────── */
function MarqueeRow({ items, duration, delay = "0s", reverse = false, paused }) {
  return (
    <div
      className="flex"
      style={{
        animation: `marquee${reverse ? "Rev" : ""} ${duration}s linear infinite`,
        animationDelay: delay,
        animationPlayState: paused ? "paused" : "running",
        willChange: "transform",
      }}
    >
      {[...items, ...items].map((skill, i) => (
        <LogoPill
          key={i}
          skill={skill}
          paused={paused}
          onEnter={() => {}}
          onLeave={() => {}}
        />
      ))}
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────── */
export function LogoStrip() {
  const [paused, setPaused] = useState(false);

  // Split into two rows
  const row1 = skillLogos.slice(0, Math.ceil(skillLogos.length / 2));
  const row2 = skillLogos.slice(Math.ceil(skillLogos.length / 2));

  return (
    <section
      className="relative w-full py-10 md:py-14 overflow-hidden"
      style={{ background: "#050508", borderTop: "1px solid #1e293b", borderBottom: "1px solid #1e293b" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&display=swap');

        @keyframes marquee {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRev {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
      `}</style>

      {/* ── Fade edges ── */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 md:w-48 z-20 pointer-events-none"
        style={{ background: "linear-gradient(90deg, #050508 0%, transparent 100%)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 md:w-48 z-20 pointer-events-none"
        style={{ background: "linear-gradient(270deg, #050508 0%, transparent 100%)" }}
      />

      {/* ── Eyebrow label ── */}
      <div className="relative z-10 flex justify-center mb-8">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1e293b] bg-[#080b12]">
          <span
            className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"
            style={{ boxShadow: "0 0 8px #10b981" }}
          />
          <span
            className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#64748b]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Technologies I Work With
          </span>
          <span className="ml-1 text-[9px] font-bold font-mono uppercase tracking-wider text-[#334155]">
            · hover to explore
          </span>
        </div>
      </div>

      {/* ── Row 1 — forward ── */}
      <div className="relative mb-4 " style={{ paddingBottom: "36px" }}>
        <MarqueeRow items={row1} duration={38} paused={paused} />
      </div>

      {/* ── Row 2 — reverse ── */}
      <div className="relative " style={{ paddingBottom: "36px" }}>
        <MarqueeRow items={row2} duration={42} delay="-8s" reverse paused={paused} />
      </div>

      {/* ── Pause indicator ── */}
      <div
        className="relative z-10 flex justify-center mt-6 transition-opacity duration-300"
        style={{ opacity: paused ? 1 : 0 }}
      >
        <span
          className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#334155]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <span className="w-1 h-1 rounded-full bg-[#475569]" />
          paused
          <span className="w-1 h-1 rounded-full bg-[#475569]" />
        </span>
      </div>
    </section>
  );
}

export default LogoStrip;
