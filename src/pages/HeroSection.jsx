// import React, { useEffect, useRef, useState, useCallback } from 'react';
// import { motion, useMotionValue, useSpring, useTransform, animate } from 'framer-motion';
// import { ArrowRight, Download, Code2, Zap, Terminal, GitBranch, Star, Award, Coffee } from 'lucide-react';
// import sj from '../assets/logo/sj2.jpeg';
// import {  Users, GraduationCap } from 'lucide-react';

// /* ─── Replace these with your different photos later ───────── */
// const PHOTOS = {
//   main:    sj,   /* tall main photo  */
//   top1:    sj,   /* wide top-right   */
//   mid1:    sj,   /* square middle    */
//   mid2:    sj,   /* square middle    */
//   bottom1: sj,   /* wide bottom-left */
//   bottom2: sj,   /* small corner     */
// };

// /* ─── Data ─────────────────────────────────────────────────── */
// const SKILLS = ['React', 'Node.js', 'TypeScript', 'Next.js', 'PostgreSQL', 'Docker'];
// const STATS  = [
//   { label: 'Projects Shipped', value: '48+' },
//   { label: 'Teams Trained',    value: '120+' },
//   { label: 'Years XP',         value: '7+'  },
// ];

// /* ═══════════════════════════════════════════════════════════════
//    BACKGROUND
// ═══════════════════════════════════════════════════════════════ */
// function MeshBackground() {
//   return (
//     <div className="fixed inset-0 -z-10 overflow-hidden bg-bg-primary">
//       {[
//         { color: 'var(--color-primary-light)', cx: '20%', cy: '30%', r: '38%', dur: 18 },
//         { color: 'var(--color-secondary)', cx: '75%', cy: '20%', r: '28%', dur: 22 },
//         { color: 'var(--color-teal)', cx: '58%', cy: '72%', r: '32%', dur: 26 },
//       ].map(({ color, cx, cy, r, dur }, i) => (
//         <motion.div 
//           key={i}
//           className="absolute rounded-full blur-[140px] opacity-[0.16]"
//           style={{ 
//             backgroundColor: color, 
//             left: cx, 
//             top: cy, 
//             width: r, 
//             height: r, 
//             left: '50%', 
//             top: '50%', 
//             transform: 'translate(-50%, -50%)' 
//           }}
//           animate={{ x: [0, 50, -30, 0], y: [0, -35, 45, 0], scale: [1, 1.15, 0.9, 1] }}
//           transition={{ duration: dur, repeat: Infinity, ease: 'easeInOut', delay: i * 2 }}
//         />
//       ))}
//       <div 
//         className="absolute inset-0 opacity-[0.055] bg-[length:28px_28px]"
//         style={{ backgroundImage: 'radial-gradient(circle,#a1a1aa 1px,transparent 1px)' }} 
//       />
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,theme(colors.bg-primary)_85%)]" />
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════
//    LEFT SIDE
// ═══════════════════════════════════════════════════════════════ */
// function AvailableBadge() {
//   const [tick, setTick] = useState(true);
//   useEffect(() => { 
//     const id = setInterval(() => setTick(t => !t), 900); 
//     return () => clearInterval(id); 
//   }, []);
  
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: -12 }} 
//       animate={{ opacity: 1, y: 0 }} 
//       transition={{ delay: 0.1, duration: 0.6 }}
//       className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border-border bg-bg-card/80 backdrop-blur-md mb-9"
//     >
//       <span className="relative flex h-2.5 w-2.5">
//         <span className={`absolute inset-0 rounded-full bg-success ${tick ? 'animate-ping' : ''} opacity-75`} />
//         <span className="relative inset-0 rounded-full block h-2.5 w-2.5 bg-success" />
//       </span>
//       <span className="text-xs font-semibold tracking-[0.18em] uppercase text-success whitespace-nowrap">Available</span>
//       <span className="text-xs text-fg-muted">· Open for Projects & Training</span>
//     </motion.div>
//   );
// }


// function Headline() {
//   const lines = [
//     { text: "Hi, I'm", cls: 'font-light text-fg-secondary' },
//     { text: 'Stephenjoseph', cls: 'font-semibold text-fg-primary' },
//   ];

//   const roles = [
//     {sno:1, text: 'Fullstack Developer', Icon: Code2, color: 'text-primary', bg: 'bg-primary/10 border-primary/30', pulse: 'border-primary/50' },
//     {sno:2, text: 'Corporate Trainer', Icon: Users, color: 'text-success', bg: 'bg-success/10 border-success/30', pulse: 'border-success/50' },
//   ];

//   return (
//     <div className="space-y-4 mb-6">
//       {/* Name section */}
//       <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight font-['Syne',sans-serif]">
//         {lines.map((line, i) => (
//           <motion.span 
//             key={i} 
//             className={`block ${line.cls}`}
//             initial={{ opacity: 0, x: -40, filter: 'blur(10px)' }}
//             animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
//             transition={{ delay: 0.25 + i * 0.18, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
//           >
//             {line.text}
//           </motion.span>
//         ))}
//       </h1>

//       {/* Animated role badges with border pulse */}
//       <div className="flex flex-wrap gap-3 pt-2">
//         {roles.map((role, i) => (
//           <motion.div
//             key={role.text}
//             className={`group inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 backdrop-blur-sm font-semibold tracking-wide text-sm md:text-base shadow-lg ${role.bg} ${role.color}  hover:border-${role.sno==2?'success':'primary'} hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-default animate-border-pulse`}
//             initial={{ opacity: 0, y: 20, scale: 0.9 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{ 
//               delay: 0.8 + i * 0.15, 
//               duration: 0.6, 
//               type: 'spring', 
//               stiffness: 300, 
//               damping: 20 
//             }}
//             whileHover={{ 
//               scale: 1.05, 
//               boxShadow: '0 10px 25px rgba(37, 99, 235, 0.3)' 
//             }}
//           >
//             <role.Icon className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
//             <span>{role.text}</span>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }



// function SkillStrip() {
//   return (
//     <motion.div 
//       className="flex flex-wrap gap-2 mb-10" 
//       initial={{ opacity: 0 }} 
//       animate={{ opacity: 1 }} 
//       transition={{ delay: 1.1 }}
//     >
//       {SKILLS.map((s, i) => (
//         <motion.span
//           key={s}
//           initial={{ opacity: 0, scale: 0.8 }} 
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 1.1 + i * 0.07, type: 'spring', stiffness: 260, damping: 22 }}
//           whileHover={{ y: -3, scale: 1.06 }}
//           className="px-3 py-1 text-[11px] font-semibold tracking-widest uppercase rounded-full border-border bg-bg-card text-fg-muted cursor-default transition-all hover:bg-primary hover:text-fg-primary"
//         >
//           {s}
//         </motion.span>
//       ))}
//     </motion.div>
//   );
// }

// function CTARow() {
//   return (
//     <motion.div 
//       className="flex flex-col sm:flex-row gap-4"
//       initial={{ opacity: 0, y: 20 }} 
//       animate={{ opacity: 1, y: 0 }} 
//       transition={{ delay: 1.45, duration: 0.6 }}
//     >
//       <motion.a 
//         href="#contact"
//         whileHover={{ scale: 1.04 }} 
//         whileTap={{ scale: 0.97 }}
//         className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-fg-primary bg-primary rounded-full shadow-[0_0_18px_rgba(37,99,235,0.35)] hover:shadow-[0_0_32px_rgba(37,99,235,0.55)] transition-all"
//       >
//         Let's Work Together <ArrowRight className="w-4 h-4" />
//       </motion.a>
//       <motion.a 
//         href="/cv.pdf"
//         whileHover={{ scale: 1.04 }} 
//         whileTap={{ scale: 0.97 }}
//         className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-fg-secondary border border-border bg-bg-card/60 backdrop-blur-sm rounded-full hover:border-primary hover:text-fg-primary transition-all"
//       >
//         <Download className="w-4 h-4" /> Download CV
//       </motion.a>
//     </motion.div>
//   );
// }

// function Stats() {
//   return (
//     <motion.div 
//       className="flex gap-8 mt-12 pt-8 border-t border-border"
//       initial={{ opacity: 0 }} 
//       animate={{ opacity: 1 }} 
//       transition={{ delay: 1.7 }}
//     >
//       {STATS.map(({ label, value }) => (
//         <div key={label} className="space-y-0.5">
//           <p className="text-2xl font-bold text-fg-primary font-['Syne',sans-serif] leading-none">{value}</p>
//           <p className="text-xs text-fg-muted-2 tracking-wide">{label}</p>
//         </div>
//       ))}
//     </motion.div>
//   );
// }


// /* ═══════════════════════════════════════════════════════════════
//    BENTO GRID CELLS
// ═══════════════════════════════════════════════════════════════ */

// /** Shared shimmer hover overlay */
// function ShimmerOverlay() {
//   return (
//     <motion.div className="absolute inset-0 bg-gradient-shimmer opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500" />
//   );
// }

// /** Glitch scan lines */
// function ScanLines() {
//   return (
//     <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
//       {[...Array(4)].map((_, i) => (
//         <motion.div 
//           key={i} 
//           className="absolute left-0 right-0 h-[1px]"
//           style={{ top: `${20 + i * 20}%` }}
//           animate={{ opacity: [0,0.8,0,0.4,0], x:['-5%','0%','3%','-1%','0%'] }}
//           transition={{ duration: 4+i*0.7, repeat: Infinity, delay: i*1.1, ease:'easeInOut' }}
//         />
//       ))}
//     </div>
//   );
// }

// /** Generic bento photo cell */
// function BentoPhoto({ src, alt='SJ', className='', delay=0, label='', labelIcon: Icon=null, objectPos='center top', badge=null, tall=false }) {
//   return (
//     <motion.div
//       className={`group relative overflow-hidden rounded-2xl border-border bg-bg-secondary backdrop-blur-md ${className}`}
//       initial={{ opacity: 0, y: 30, scale: 0.94 }}
//       animate={{ opacity: 1, y: 0, scale: 1 }}
//       transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//       whileHover={{ scale: 1.015 }}
//     >
//       <img 
//         src={src} 
//         alt={alt}
//         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//         style={{ objectPosition: objectPos }}
//       />

//       {/* colour grade */}
//       <div className="absolute inset-0 bg-gradient-photo-t pointer-events-none" />
//       <div className="absolute inset-0 bg-gradient-photo-br pointer-events-none" />

//       <ScanLines />
//       <ShimmerOverlay />

//       {/* bottom label */}
//       {label && (
//         <motion.div
//           className="absolute bottom-2.5 left-2.5 z-20 flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border-border bg-bg-card/90 backdrop-blur-md"
//           initial={{ opacity: 0, y: 8 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ delay: delay + 0.3 }}
//         >
//           {Icon && <Icon className="w-3 h-3 text-primary flex-shrink-0" />}
//           <span className="text-[9px] font-semibold tracking-widest uppercase text-fg-secondary">{label}</span>
//         </motion.div>
//       )}

//       {/* corner badge */}
//       {badge && (
//         <motion.div
//           className="absolute top-2.5 right-2.5 z-20 px-2 py-0.5 rounded-full border-primary/40 bg-bg-card/90 backdrop-blur-md"
//           initial={{ opacity: 0, scale: 0 }} 
//           animate={{ opacity: 1, scale: 1 }} 
//           transition={{ delay: delay + 0.25, type: 'spring' }}
//         >
//           <span className="text-[8px] font-bold tracking-[0.15em] uppercase text-primary whitespace-nowrap">{badge}</span>
//         </motion.div>
//       )}
//     </motion.div>
//   );
// }

// /** Stat / info card cell */
// function BentoStatCard({ className='', delay=0, icon: Icon, value, label, accent='var(--color-primary)' }) {
//   const [count, setCount] = useState(0);
//   const numVal = parseInt(value);

//   useEffect(() => {
//     const ctrl = animate(0, numVal, {
//       duration: 2, delay: delay + 0.5, ease: [0.22, 1, 0.36, 1],
//       onUpdate: v => setCount(Math.round(v)),
//     });
//     return ctrl.stop;
//   }, []);

//   return (
//     <motion.div
//       className={`group relative  overflow-hidden rounded-2xl border-border bg-bg-secondary backdrop-blur-md flex flex-col items-start justify-between p-4 ${className}`}
//       initial={{ opacity: 0, y: 30, scale: 0.94 }}
//       animate={{ opacity: 1, y: 0, scale: 1 }}
//       transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//       whileHover={{ scale: 1.03 }}
//     >
//       {/* bg glow */}
//       <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full blur-2xl opacity-20" style={{ backgroundColor: accent }} />

//       <div className="w-8 h-8 rounded-xl flex items-center justify-center  bg-accent-20">
//         <Icon className="w-4 h-4 text-accent" style={{ color: accent }} />
//       </div>

//       <div>
//         <p className="text-2xl font-bold text-fg-primary  leading-none">{count}{value.includes('+') ? '+' : ''}</p>
//         <p className="text-[10px] text-fg-muted-2 tracking-wide mt-1">{label}</p>
//       </div>

//       <ShimmerOverlay />
//     </motion.div>
//   );
// }

// /** Profile identity card */
// function BentoProfileCard({ className='', delay=0 }) {
//   return (
//     <motion.div
//       className={`group relative overflow-hidden rounded-2xl border-border bg-bg-secondary backdrop-blur-md flex items-center gap-3 p-4 ${className}`}
//       initial={{ opacity: 0, y: 30, scale: 0.94 }}
//       animate={{ opacity: 1, y: 0, scale: 1 }}
//       transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//       whileHover={{ scale: 1.02 }}
//     >
//       <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-[0_0_14px_rgba(37,99,235,0.4)]">
//         <span className="text-[11px] font-bold text-fg-primary">SJ</span>
//       </div>
//       <div className="min-w-0">
//         <p className="text-[11px] font-semibold text-fg-primary truncate">Stephenjoseph</p>
//         <p className="text-[9px] text-fg-muted-2">Fullstack · Trainer</p>
//       </div>
//       <div className="ml-auto flex items-center gap-1.5 flex-shrink-0">
//         <motion.div 
//           className="w-1.5 h-1.5 rounded-full bg-success"
//           animate={{ opacity: [1, 0.2, 1] }} 
//           transition={{ duration: 1.3, repeat: Infinity }} 
//         />
//         <span className="text-[8px] font-mono font-bold text-success">LIVE</span>
//       </div>
//       <ShimmerOverlay />
//     </motion.div>
//   );
// }

// /** Marquee tech strip */
// const TECHS = ['React', 'Next.js', 'Node', 'TypeScript', 'Docker', 'PostgreSQL', 'Tailwind', 'GraphQL', 'AWS'];
// function BentoMarquee({ className='', delay=0 }) {
//   return (
//     <motion.div
//       className={`group relative overflow-hidden rounded-2xl border backdrop-blur-md flex items-center ${className}`}
//       style={{ 
//         borderColor: 'var(--color-border)', 
//         backgroundColor: 'var(--color-bg-secondary)' 
//       }}
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//     >
//       {/* fade edges */}
//       <div className="absolute left-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-r pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, var(--color-bg-secondary), transparent)' }} />
//       <div className="absolute right-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-l pointer-events-none" style={{ backgroundImage: 'linear-gradient(to left, var(--color-bg-secondary), transparent)' }} />

//       <motion.div
//         className="flex gap-4 whitespace-nowrap px-4"
//         animate={{ x: ['0%', '-50%'] }}
//         transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
//       >
//         {[...TECHS, ...TECHS].map((t, i) => (
//           <span key={i} className="text-[9px] font-bold tracking-[0.2em] uppercase flex items-center gap-2" style={{ color: 'var(--color-fg-muted-3)' }}>
//             <span className="w-1 h-1 rounded-full inline-block" style={{ backgroundColor: 'var(--color-primary)50' }} />
//             {t}
//           </span>
//         ))}
//       </motion.div>
//     </motion.div>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════
//    MAIN BENTO GRID
// ═══════════════════════════════════════════════════════════════ */
// function BentoGrid() {
//   return (
//    <div className="w-full h-full grid grid-cols-12 gap-2.5 grid-rows-[200px_160px_130px_1fr]">

//       {/* ── A: TALL MAIN PHOTO — col 1-5, row 1-3 ── */}
//       <BentoPhoto
//         src={PHOTOS.main}
//         delay={0.3}
//         label="Developer"
//         labelIcon={Code2}
//         badge="SJ"
//         objectPos="center top"
//         className="col-start-1 col-end-6 row-start-1 row-end-4"
//       />

//       {/* ── B: WIDE TOP-RIGHT — col 6-12, row 1-2 ── */}
//       <BentoPhoto
//         src={PHOTOS.top1}
//         delay={0.42}
//         label="Trainer"
//         labelIcon={Award}
//         objectPos="center 20%"
//         className="col-start-6 col-end-13 row-start-1 row-end-3"
//       />

//       {/* ── C: MID SQUARE LEFT — col 6-9, row 3 ── */}
//       <BentoPhoto
//         src={PHOTOS.mid1}
//         delay={0.54}
//         badge="CODE"
//         objectPos="center 35%"
//         className="col-start-6 col-end-10 row-start-3 row-end-4"
//       />

//       {/* ── D: MID SQUARE RIGHT — col 9-12, row 3 ── */}
//       <BentoPhoto
//         src={PHOTOS.mid2}
//         delay={0.62}
//         badge="UX"
//         objectPos="left 40%"
//         className="col-start-10 col-end-13 row-start-3 row-end-4"
//       />

//       {/* ── E: STAT CARD — col 1-4, row 4 ── */}
//       <BentoStatCard
//         icon={GitBranch}
//         value="48+"
//         label="Projects Shipped"
//         accent="var(--color-primary)"
//         delay={0.72}
//         className="col-start-1 col-end-5 row-start-4 row-end-5"
//       />

//       {/* ── F: STAT CARD — col 5-8, row 4 ── */}
//       <BentoStatCard
//         icon={Coffee}
//         value="120+"
//         label="Teams Trained"
//         accent="var(--color-secondary)"
//         delay={0.80}
//         className="col-start-5 col-end-9 row-start-4 row-end-5"
//       />

//       {/* ── G: PROFILE CHIP — col 9-12, row 4 ── */}
//       <BentoProfileCard
//         delay={0.88}
//         className="col-start-9 col-end-13 row-start-4 row-end-5"
//       />
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════
//    FLOATING AMBIENT CHIPS (outside grid)
// ═══════════════════════════════════════════════════════════════ */
// const CHIPS = [
//   { Icon: Zap,       label: 'Performance', style: { top: '-4%',  right: '-2%' }, delay: 1.2 },
//   { Icon: Terminal,  label: 'CLI Expert',  style: { bottom: '28%', left: '-4%' }, delay: 1.4 },
//   { Icon: Star,      label: '5★ Rating',   style: { top: '40%',  right: '-5%' }, delay: 1.6 },
// ];

// function FloatingChips() {
//   return (
//     <>
//       {CHIPS.map(({ Icon, label, style, delay }, i) => (
//         <motion.div key={i}
//           className="absolute z-50 flex items-center gap-2 px-3 py-2 rounded-xl border backdrop-blur-md shadow-lg whitespace-nowrap pointer-events-none"
//           style={{ 
//             ...style,
//             borderColor: 'var(--color-border)', 
//             backgroundColor: 'var(--color-bg-card, rgba(13,17,23,0.9))' 
//           }}
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay, type: 'spring', stiffness: 260, damping: 20 }}
//         >
//           <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}>
//             <Icon className="w-3.5 h-3.5" style={{ color: 'var(--color-primary)' }} />
//           </motion.div>
//           <span className="text-[10px] font-semibold tracking-wide" style={{ color: 'var(--color-fg-secondary)' }}>{label}</span>
//         </motion.div>
//       ))}
//     </>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════
//    RIGHT SECTION WRAPPER
// ═══════════════════════════════════════════════════════════════ */
// function HeroRight() {
//   return (
//     <motion.div
//       className="relative w-full"
//       initial={{ opacity: 0, x: 40 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
//     >
        
//       <FloatingChips />
//       <BentoGrid />


//       {/* subtle outer glow behind entire grid */}
//       <div className="absolute inset-0 -z-10 blur-[80px] opacity-20 rounded-3xl"
//         style={{ backgroundImage: 'radial-gradient(circle at 60% 40%, var(--color-primary), transparent 70%)' }} />
//     </motion.div>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════
//    MAIN EXPORT
// ═══════════════════════════════════════════════════════════════ */
// export function HeroSection() {
//   return (
//     <>


//       <MeshBackground />

//       <section
//         id="home"
//         className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden font-['DM_Sans',sans-serif]"
//       >
//         <div className="max-w-7xl mx-auto px-6 w-full">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-start">

//             {/* ── LEFT ── */}
//             <div className="flex flex-col items-start">
//               <AvailableBadge />
//               <Headline />

//               <motion.p
//                 className="text-lg leading-relaxed max-w-lg mb-8"
//                 style={{ color: 'var(--color-fg-muted)' }}
//                 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95, duration: 0.6 }}>
//                 I build scalable web applications and empower teams through hands-on corporate
//                 training in modern web technologies, UI/UX design, and agile development practices.
//               </motion.p>

//               <SkillStrip />
//               <CTARow />
//               <Stats />
//             </div>

//             {/* ── RIGHT BENTO ── */}
//             <HeroRight />
//           </div>
//         </div>

//         <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t pointer-events-none" style={{ backgroundImage: 'linear-gradient(to top, var(--color-bg-primary), transparent)' }} />
//       </section>
//     </>
//   );
// }

// export default HeroSection;





// ================= New =====================

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, animate } from "framer-motion";
import {
  ArrowRight, Download, Code2, Users, GitBranch,
  Coffee, Zap, Terminal, Star, Award,
} from "lucide-react";
import sj from "../assets/logo/sj2.jpeg";
import prof from '../assets/training/prof.png'
import t5 from '../assets/training/t51.png'
import t22 from '../assets/training/t22.png'
import t16 from '../assets/training/t16.png'
/* ─── Photos (swap in different shots later) ────────────── */
const PHOTOS = { main: prof, top1: t5, mid1: t22, mid2: t16 };

/* ─── Data ───────────────────────────────────────────────── */
const SKILLS = ["React", "Node.js", "Spring Boot", "MySQL", "MongoDB", "JWT", "Kotlin", "Docker"];
const STATS  = [
  { label: "Projects Shipped", value: "10", icon: GitBranch, accent: "#2563eb" },
  { label: "Students Trained",    value: "500", icon: Coffee,    accent: "#7c3aed" },
  { label: "Years XP",         value: "3",   icon: Award,     accent: "#10b981" },
];
const ROLES = [
  { text: "Full Stack Developer", Icon: Code2,  accent: "#2563eb" },
  { text: "Corporate Trainer",    Icon: Users,  accent: "#10b981" },
];
const CHIPS = [
  { Icon: Zap, label: "Excellence", style: { top: "2%", right: "-3%" }, delay: 1.1 },
  { Icon: Terminal, label: "Delivering Solutions", style: { top: "44%", right: "-5%" }, delay: 1.3 },
  { Icon: Star, label: "Proven Results", style: { bottom: "35%", left: "-4%" }, delay: 1.5 },
];
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

/* ═══════════════════════════════════════════════════════
   BACKGROUND
════════════════════════════════════════════════════════ */
function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" style={{ background: "#050508" }}>
      {[
        { color: PRIMARY,   x: "18%", y: "25%", dur: 18 },
        { color: SECONDARY, x: "72%", y: "18%", dur: 22 },
        { color: "#0f766e", x: "55%", y: "70%", dur: 26 },
      ].map(({ color, x, y, dur }, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            backgroundColor: color,
            left: x, top: y,
            width: "36%", height: "36%",
            filter: "blur(130px)",
            opacity: 0.1,
          }}
          animate={{ x: [0, 40, -25, 0], y: [0, -30, 38, 0], scale: [1, 1.12, 0.92, 1] }}
          transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay: i * 2 }}
        />
      ))}
      <div
        className="absolute inset-0 opacity-[0.022]"
        style={{ backgroundImage: "radial-gradient(circle,#94a3b8 1px,transparent 1px)", backgroundSize: "36px 36px" }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   LEFT SIDE COMPONENTS
════════════════════════════════════════════════════════ */

function AvailableBadge() {
  return (
    <motion.div
      className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#1e293b] bg-[#080b12] mb-7"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="relative flex h-2 w-2 flex-shrink-0">
        <span className="absolute inset-0 rounded-full bg-[#10b981] animate-ping opacity-75" />
        <span className="relative rounded-full block h-2 w-2 bg-[#10b981]" style={{ boxShadow: "0 0 6px #10b981" }} />
      </span>
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#10b981]">Available</span>
      <span className="text-[10px] text-[#475569]">· Open for Projects & Training</span>
    </motion.div>
  );
}

function Headline() {
  return (
    <div className="mb-6 relative pl-4">
      {/* Left accent bar */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full"
        style={{ background: `linear-gradient(180deg,${PRIMARY},${SECONDARY})` }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.3, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Name */}
      <h1
        className="leading-[0.95] mb-4"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        {[
          { text: "Hi, I'm",       style: { fontSize: "clamp(1.5rem,3vw,2.2rem)", background: "linear-gradient(135deg,#94a3b8,#64748b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: 700, letterSpacing: "-0.02em" } },
          { text: "Stephen",       style: { fontSize: "clamp(2.6rem,5.5vw,4rem)",  background: `linear-gradient(135deg,${PRIMARY} 0%,${SECONDARY} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: 900, letterSpacing: "-0.04em" } },
          { text: "Joseph",        style: { fontSize: "clamp(2.6rem,5.5vw,4rem)",  background: "linear-gradient(135deg,#ffffff 0%,#94a3b8 70%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: 900, letterSpacing: "-0.04em" } },
        ].map(({ text, style }, i) => (
          <motion.span
            key={i}
            className="block"
            style={style}
            initial={{ opacity: 0, x: -28, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.28 + i * 0.14, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            {text}
          </motion.span>
        ))}
      </h1>

      {/* Role badges */}
      <div className="flex flex-wrap gap-2.5">
        {ROLES.map(({ text, Icon, accent }, i) => (
          <motion.div
            key={text}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border text-sm font-bold"
            style={{
              color: accent,
              borderColor: toRgba(accent, 0.4),
              background: toRgba(accent, 0.08),
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.72rem",
              letterSpacing: "0.04em",
            }}
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.72 + i * 0.12, type: "spring", stiffness: 300, damping: 22 }}
            whileHover={{ scale: 1.04, boxShadow: `0 6px 18px ${toRgba(accent, 0.25)}` }}
          >
            <Icon className="w-3.5 h-3.5 flex-shrink-0" />
            {text}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Bio() {
  return (
    <motion.p
      className="text-sm md:text-[15px] leading-relaxed max-w-md mb-7 text-[#64748b]"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.55 }}
    >
      I build scalable full-stack applications and empower teams through hands-on corporate
      training in modern web technologies, clean architecture, and real-world delivery.
    </motion.p>
  );
}

function SkillStrip() {
  return (
    <motion.div
      className="flex flex-wrap gap-1.5 mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.05 }}
    >
      {SKILLS.map((s, i) => (
        <motion.span
          key={s}
          className="px-2.5 py-1 text-[9px] font-bold tracking-[0.15em] uppercase rounded-lg border border-[#1e293b] bg-[#080b12] text-[#475569] cursor-default transition-all duration-300 hover:border-[rgba(37,99,235,0.45)] hover:text-[#f1f5f9] hover:bg-[rgba(37,99,235,0.08)]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.05 + i * 0.055, type: "spring", stiffness: 260, damping: 22 }}
          whileHover={{ y: -2, scale: 1.05 }}
        >
          {s}
        </motion.span>
      ))}
    </motion.div>
  );
}

function CTARow() {
  return (
    <motion.div
      className="flex flex-col sm:flex-row gap-3 mb-10"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.3, duration: 0.55 }}
    >
      {/* Primary */}
      <motion.a
        href="#contact"
        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-[750] text-sm text-white overflow-hidden relative"
        style={{
          fontFamily: "'Syne', sans-serif",
          letterSpacing: "-0.02em",
          background: `linear-gradient(135deg, ${PRIMARY} 0%, ${SECONDARY} 100%)`,
          boxShadow: `0 8px 26px ${toRgba(PRIMARY, 0.3)}`,
        }}
        whileHover={{ scale: 1.04, y: -2, boxShadow: `0 14px 34px ${toRgba(PRIMARY, 0.42)}` }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 420, damping: 22 }}
      >
        Let's Work Together
        <ArrowRight className="w-3.5 h-3.5" />
      </motion.a>

      {/* Secondary */}
      <motion.a
        href="/cv.pdf"
        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border border-[#1e293b] bg-[#080b12] text-[#64748b] hover:border-[rgba(37,99,235,0.45)] hover:text-[#f1f5f9] transition-all duration-300"
        style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.03em" }}
        whileHover={{ scale: 1.03, y: -1 }}
        whileTap={{ scale: 0.97 }}
      >
        <Download className="w-3.5 h-3.5" />
        Download CV
      </motion.a>
    </motion.div>
  );
}

/* ─── Animated counter ─────────────────────────────────── */
function AnimatedNumber({ value, delay }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const ctrl = animate(0, parseInt(value), {
      duration: 1.8, delay: delay + 0.4, ease: [0.22, 1, 0.36, 1],
      onUpdate: v => setCount(Math.round(v)),
    });
    return ctrl.stop;
  }, []);
  return <>{count}+</>;
}

function StatsRow() {
  return (
    <motion.div
      className="flex flex-wrap gap-5 pt-7 border-t border-[#1e293b]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.55 }}
    >
      {STATS.map(({ label, value, icon: Icon, accent }, i) => (
        <div key={label} className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center border flex-shrink-0"
            style={{ background: toRgba(accent, 0.1), borderColor: toRgba(accent, 0.3) }}
          >
            <Icon className="w-3.5 h-3.5" style={{ color: accent }} />
          </div>
          <div>
            <p
              className="text-xl font-black leading-none"
              style={{
                fontFamily: "'Syne', sans-serif",
                letterSpacing: "-0.04em",
                color: accent,
              }}
            >
              <AnimatedNumber value={value} delay={1.55 + i * 0.1} />
            </p>
            <p
              className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#475569]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {label}
            </p>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   BENTO GRID — RIGHT SIDE
════════════════════════════════════════════════════════ */

/** Shared cell wrapper */
function BentoCell({ className = "", delay = 0, children, style = {} }) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl border border-[#1e293b] bg-[#080b12] ${className}`}
      style={style}
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.015 }}
    >
      {children}
    </motion.div>
  );
}

/** Photo cell */
function PhotoCell({ src, label, labelIcon: Icon, badge, objectPos = "center top", className = "", delay = 0 }) {
  const [hovered, setHovered] = useState(false);
  return (
    <BentoCell
      className={`group cursor-default ${className}`}
      delay={delay}
      style={{
        boxShadow: hovered ? `0 0 0 1.5px ${toRgba(PRIMARY, 0.4)}, 0 16px 40px ${toRgba(PRIMARY, 0.1)}` : "none",
        transition: "box-shadow 0.4s ease",
      }}
    >
      <motion.img
        src={src} alt={label || "Photo"}
        className="w-full h-full object-cover"
        style={{ objectPosition: objectPos }}
        animate={{ scale: hovered ? 1.06 : 1 }}
        transition={{ duration: 0.6 }}
        draggable={false}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/80 via-[#050508]/20 to-transparent pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle,#94a3b8 1px,transparent 1px)", backgroundSize: "16px 16px" }} />
      {/* Label */}
      {label && (
        <div className="absolute bottom-2.5 left-2.5 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-xl border border-[#1e293b] bg-[#080b12]/90"
          style={{ backdropFilter: "blur(10px)" }}>
          {Icon && <Icon className="w-3 h-3 flex-shrink-0" style={{ color: PRIMARY }} />}
          <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#64748b]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}>{label}</span>
        </div>
      )}
      {/* Badge */}
      {badge && (
        <div className="absolute top-2.5 right-2.5 z-10 px-2 py-0.5 rounded-lg border border-[#1e293b] bg-[#080b12]/90"
          style={{ backdropFilter: "blur(10px)" }}>
          <span className="text-[8px] font-bold uppercase tracking-[0.16em]"
            style={{ color: PRIMARY, fontFamily: "'JetBrains Mono', monospace" }}>{badge}</span>
        </div>
      )}
    </BentoCell>
  );
}

/** Stat cell with animated counter */
function StatCell({ icon: Icon, value, label, accent, className = "", delay = 0 }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const ctrl = animate(0, parseInt(value), {
      duration: 1.8, delay: delay + 0.5, ease: [0.22, 1, 0.36, 1],
      onUpdate: v => setCount(Math.round(v)),
    });
    return ctrl.stop;
  }, []);

  const [hovered, setHovered] = useState(false);

  return (
    <BentoCell
      className={`flex flex-col p-4 cursor-default ${className}`}
      delay={delay}
      style={{
        boxShadow: hovered ? `0 0 0 1.5px ${toRgba(accent, 0.45)}, 0 12px 30px ${toRgba(accent, 0.12)}` : "none",
        transition: "box-shadow 0.35s ease",
      }}
    >
      <div
        className="relative w-full h-full"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="absolute inset-0 pointer-events-none transition-opacity duration-400"
          style={{ background: `radial-gradient(ellipse 80% 70% at 50% 110%, ${toRgba(accent, 0.18)} 0%, transparent 70%)`, opacity: hovered ? 1 : 0 }} />

        <div className="w-8 h-8 rounded-xl flex items-center justify-center border mb-auto"
          style={{ background: toRgba(accent, 0.1), borderColor: toRgba(accent, 0.3) }}>
          <Icon className="w-4 h-4" style={{ color: accent }} />
        </div>

        <div className=" pt-2">
          <p className="text-2xl font-black leading-none mb-0.5"
            style={{
              fontFamily: "'Syne', sans-serif",
              letterSpacing: "-0.04em",
              color: accent,
              textShadow: hovered ? `0 0 16px ${toRgba(accent, 0.5)}` : "none",
              transition: "text-shadow 0.35s",
            }}>
            {count}+
          </p>
          <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#475569]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}>{label}</p>
        </div>

        <motion.div className="absolute bottom-0 left-0 right-0 h-[2px]"
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ background: `linear-gradient(90deg, ${accent}, transparent)`, transformOrigin: "left" }} />
      </div>
    </BentoCell>
  );
}

/** Profile identity chip */
function ProfileCell({ className = "", delay = 0 }) {
  return (
    <BentoCell className={`flex items-center gap-3 p-3 cursor-default ${className}`} delay={delay}>
      {/* Avatar */}
      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 font-black text-sm text-white"
        style={{ background: `linear-gradient(135deg,${PRIMARY},${SECONDARY})`, boxShadow: `0 4px 14px ${toRgba(PRIMARY, 0.4)}`, fontFamily: "'Syne',sans-serif" }}>
        SJ
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[11px] font-black text-[#f1f5f9] truncate" style={{ fontFamily: "'Syne',sans-serif", letterSpacing: "-0.02em" }}>
          Stephen Joseph
        </p>
        <p className="text-[9px] text-[#475569]" style={{ fontFamily: "'JetBrains Mono',monospace" }}>
          Full Stack · Trainer
        </p>
      </div>
      <div className="flex items-center gap-1.5 flex-shrink-0">
        <motion.div className="w-1.5 h-1.5 rounded-full bg-[#10b981]"
          animate={{ opacity: [1, 0.25, 1] }} transition={{ duration: 1.3, repeat: Infinity }} />
        <span className="text-[8px] font-bold text-[#10b981]" style={{ fontFamily: "'JetBrains Mono',monospace" }}>LIVE</span>
      </div>
    </BentoCell>
  );
}

/** Marquee cell */
const TECHS = ["React", "Spring Boot", "Node.js", "MySQL", "MongoDB", "Kotlin", "Tailwind", "JWT", "Docker"];
function MarqueeCell({ className = "", delay = 0 }) {
  return (
    <BentoCell className={`flex items-center overflow-hidden ${className}`} delay={delay}>
      <div className="absolute left-0 top-0 bottom-0 w-8 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg,#080b12,transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-8 z-10 pointer-events-none"
        style={{ background: "linear-gradient(270deg,#080b12,transparent)" }} />
      <motion.div
        className="flex gap-5 whitespace-nowrap px-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      >
        {[...TECHS, ...TECHS].map((t, i) => (
          <span key={i} className="text-[8px] font-bold uppercase tracking-[0.2em] flex items-center gap-1.5"
            style={{ color: "#334155", fontFamily: "'JetBrains Mono',monospace" }}>
            <span className="w-1 h-1 rounded-full inline-block" style={{ background: toRgba(PRIMARY, 0.5) }} />
            {t}
          </span>
        ))}
      </motion.div>
    </BentoCell>
  );
}

/* ─── Floating ambient chips ─────────────────────────── */
function FloatingChips() {
  return (
    <>
      {CHIPS.map(({ Icon, label, style, delay }, i) => (
        <motion.div
          key={i}
          className="absolute z-40 flex items-center gap-2 px-3 py-2 rounded-xl border border-[#1e293b] bg-[#080b12] pointer-events-none whitespace-nowrap"
          style={{ ...style, backdropFilter: "blur(12px)", boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay, type: "spring", stiffness: 240, damping: 20 }}
        >
          <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 2.4 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}>
            <Icon className="w-3 h-3" style={{ color: PRIMARY }} />
          </motion.div>
          <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#64748b]"
            style={{ fontFamily: "'JetBrains Mono',monospace" }}>{label}</span>
        </motion.div>
      ))}
    </>
  );
}

/* ─── Bento grid layout ──────────────────────────────── */
function BentoGrid() {
  return (
    <div
      className="w-full grid gap-2.5"
      style={{
        gridTemplateColumns: "repeat(12, 1fr)",
        gridTemplateRows: "190px 150px 115px auto",
      }}
    >
      {/* Main tall photo */}
      <PhotoCell src={PHOTOS.main} label="Developer" labelIcon={Code2} badge="SJ"
        objectPos="center top"
        className="col-start-1 col-end-6 row-start-1 row-end-4"
        delay={0.3}
      />

      {/* Wide top-right */}
      <PhotoCell src={PHOTOS.top1} label="Trainer" labelIcon={Award}
        objectPos="center 20%"
        className="col-start-6 col-end-13 row-start-1 row-end-3"
        delay={0.42}
      />

      {/* Mid left */}
      <PhotoCell src={PHOTOS.mid1} badge="CODE"
        objectPos="center 35%"
        className="col-start-6 col-end-10 row-start-3 row-end-4"
        delay={0.54}
      />

      {/* Mid right */}
      <PhotoCell src={PHOTOS.mid2} badge="UX"
        objectPos="left 40%"
        className="col-start-10 col-end-13 row-start-3 row-end-4"
        delay={0.62}
      />

      {/* Stat cards */}
      <StatCell icon={GitBranch} value='10' label="Projects Shipped" accent={PRIMARY}
        className="col-start-1 col-end-5 row-start-4 row-end-5" delay={0.72} />
      <StatCell icon={Coffee}    value="500" label="Students Trained" accent={SECONDARY}
        className="col-start-5 col-end-9 row-start-4 row-end-5" delay={0.80} />

      {/* Profile chip */}
      <ProfileCell className="col-start-9 col-end-13 row-start-4 row-end-5" delay={0.88} />

      {/* Marquee strip */}
      <MarqueeCell className="col-start-1 col-end-13 row-start-5 row-end-6 h-10" delay={0.96} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN EXPORT
════════════════════════════════════════════════════════ */
export function HeroSection() {
  return (
    <>
      <Background />

      <section
        id="home"
        className="relative min-h-screen  flex items-center pt-24 pb-20 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-start">

            {/* ── LEFT ── */}
            <div className="flex flex-col items-start">
              <AvailableBadge />
              <Headline />
              <Bio />
              <SkillStrip />
              <CTARow />
              <StatsRow />
            </div>

            {/* ── RIGHT ── */}
            <motion.div
              className="relative w-full hidden lg:block"
              initial={{ opacity: 0, x: 36 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <FloatingChips />
              <BentoGrid />
              {/* Outer glow */}
              <div className="absolute inset-0 -z-10 blur-[80px] opacity-15 rounded-3xl pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 60% 40%, ${PRIMARY}, transparent 70%)` }} />
            </motion.div>

          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(to top, #050508, transparent)" }} />
      </section>
    </>
  );
}

export default HeroSection;