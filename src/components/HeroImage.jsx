import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { GitBranch, Database, Zap, Terminal, Code, Brain } from "lucide-react";
import { useMotionValueEvent } from "framer-motion";

function ParticleTrail({ containerRef }) {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    const resize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      for (let i = 0; i < 4; i++) {
        particles.current.push({
          x: mx + (Math.random() - 0.5) * 16,
          y: my + (Math.random() - 0.5) * 16,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2 - 0.8,
          life: 1,
          size: Math.random() * 3 + 0.5,
          hue: 210 + Math.random() * 60,
        });
      }
    };
    container.addEventListener("mousemove", onMouseMove);

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current = particles.current.filter((p) => p.life > 0);
      particles.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.022;
        p.vy -= 0.03;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 100%, 70%, ${p.life * 0.7})`;
        ctx.fill();
      });
      rafRef.current = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener("resize", resize);
      container.removeEventListener("mousemove", onMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-30 pointer-events-none"
    />
  );
}

function GlitchLines() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-secondary/20"
          style={{ top: `${12 + i * 15}%` }}
          animate={{
            opacity: [0, 0.9, 0, 0.5, 0],
            scaleX: [0.2, 1, 0.7, 1, 0.3],
            x: ["-8%", "0%", "4%", "-2%", "0%"],
          }}
          transition={{
            duration: 3.5 + i * 0.6,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function Brackets() {
  const positions = [
    { top: -1, left: -1, cls: "border-t-2 border-l-2" },
    { top: -1, right: -1, cls: "border-t-2 border-r-2" },
    { bottom: -1, left: -1, cls: "border-b-2 border-l-2" },
    { bottom: -1, right: -1, cls: "border-b-2 border-r-2" },
  ];

  return (
    <>
      {positions.map((pos, i) => (
        <motion.div
          key={i}
          className={`absolute w-7 h-7 border-primary ${pos.cls} z-40`}
          style={{
            top: pos.top,
            left: pos.left,
            right: pos.right,
            bottom: pos.bottom,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1 + i * 0.08, type: "spring", stiffness: 300 }}
        />
      ))}
    </>
  );
}

function FloatingChips() {
  const chips = [
    // Mobile/Desktop responsive positions
    {
      Icon: Code,
      label: "200+ Commits",
      style: {
        top: "5%",
        left: "-8%",
      
        "@media (max-width: 640px)": { left: "-5%" },
      },
      delay: 0.9,
    },
    {
      Icon: Database,
      label: "PostgreSQL",
      style: {
        top: "28%",
        right: "-10%",
        
        "@media (max-width: 640px)": { top: "25%", right: "-6%" },
      },
      delay: 1.1,
    },
    {
      Icon: Zap,
      label: "Performance",
      style: {
        bottom: "22%",
        left: "-8%",
       
        "@media (max-width: 640px)": { bottom: "20%", left: "-5%" },
      },
      delay: 1.3,
    },
    {
      Icon: Terminal,
      label: "CLI Expert",
      style: {
        bottom: "5%",
        right: "-10%",
       
        "@media (max-width: 640px)": { bottom: "3%", right: "-6%" },
      },
      delay: 1.5,
    },
  ];

  return (
    <>
      {chips.map(({ Icon, label, style, delay }, i) => (
        <motion.div
          key={i}
          className="absolute z-40 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl border-border bg-bg-secondary/50 backdrop-blur-md shadow-xl whitespace-nowrap text-[11px] sm:text-xs font-semibold text-fg-muted hover:text-primary hover:border-primary hover:shadow-primary/30 transition-all duration-300 max-sm:max-w-[90vw]"
          style={{
            ...style,
            // Mobile responsive positioning
            "@media (max-width: 640px)": {
              left: style["@media (max-width: 640px)"]?.left || style.left,
              right: style["@media (max-width: 640px)"]?.right || style.right,
              top: style["@media (max-width: 640px)"]?.top || style.top,
              bottom:
                style["@media (max-width: 640px)"]?.bottom || style.bottom,
              fontSize: "10px",
              padding: "0.25rem 0.75rem",
            },
          }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay, type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            className="flex-shrink-0"
            animate={{ rotate: [0, 12, -12, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity }}
          >
            <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
          </motion.div>
          <span className="tracking-wider font-medium leading-tight max-sm:truncate">
            {label}
          </span>
        </motion.div>
      ))}
    </>
  );
}

function StatusBar() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 2500;
    const animate = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setPct(Math.round(eased * 100));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);

    return () => {};
  }, []);

  return (
    <div className="absolute bottom-0 left-0 right-0 z-20 px-4 pb-3">
      <div className="bg-bg-secondary/90 backdrop-blur-md rounded-xl p-3 border-border/80">
        <div className="flex justify-between mb-1.5">
          <span className="text-xs font-bold tracking-widest uppercase text-primary">
            Profile Loaded
          </span>
          <span className="text-xs font-mono text-success">{pct}%</span>
        </div>
        <div className="w-full h-1 bg-border/50 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-success rounded-full shadow-sm"
            style={{ width: `${pct}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-xs text-fg-muted/70 font-mono">
            fullstack.dev
          </span>
          <span className="text-xs text-fg-muted/70 font-mono">SJ_v2.0</span>
        </div>
      </div>
    </div>
  );
}

export function HeroImage({ imageSrc, fallbackImage }) {
  const containerRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 140, damping: 24 });
  const smy = useSpring(my, { stiffness: 140, damping: 24 });
  const rotateY = useTransform(smx, [-1, 1], [-14, 14]);
  const rotateX = useTransform(smy, [-1, 1], [14, -14]);
  const glowX = useTransform(smx, [-1, 1], ["30%", "70%"]);
  const glowY = useTransform(smy, [-1, 1], ["30%", "70%"]);

  useMotionValueEvent(mx, "change", (latest) => {
    // Glow effect handled by Tailwind
  });

  const onMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    my.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <>
      {/* RIGHT: Perfect Height Hero Image Canvas */}
      <div
        ref={containerRef}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="relative flex items-start justify-center h-[580px] md:h-[680px] lg:h-[720px] px-8 lg:px-0"
      >
        <ParticleTrail containerRef={containerRef} />
        <FloatingChips />

        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
            perspective: 1200,
          }}
          className="relative w-[280px] md:w-[320px] lg:w-[450px] z-10 origin-center"
          initial={{ opacity: 0, y: 70, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.4, ease: "easeOut" }}
        >
          {/* Shadow cards */}
          <motion.div
            className="absolute -bottom-6 -right-6 w-full h-full rounded-2xl border border-primary/20 bg-primary/5 z-0"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-bg-secondary/70 bg-bg-secondary/60 z-0" />

          {/* Main card - Perfect height */}
          <div className="relative rounded-2xl overflow-hidden border-border bg-bg-primary shadow-2xl shadow-black/50 z-10 hover:shadow-primary/20">
            {/* MacOS-style top bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-bg-secondary/80 border-b-border">
              <div className="flex gap-1">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-success/80" />
              </div>
              <div className="flex-1 mx-3 h-4 rounded-md bg-bg-secondary/50 border-border flex items-center justify-center">
                <span className="text-xs font-mono text-fg-muted/70 tracking-wider">
                  stephenjoseph.dev
                </span>
              </div>
              <motion.div
                className="w-2 h-2 rounded-full bg-success"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>

            {/* Perfect Image area - Matches total card height */}
            <div className="relative h-[460px] md:h-[540px] lg:h-[580px]">
              <motion.div className="absolute inset-0 pointer-events-none z-10 opacity-30 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />

              <img
                src={imageSrc}
                alt="Stephenjoseph M"
                className="w-full h-full object-cover object-center relative z-20 rounded-b-2xl"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling.style.display = "flex";
                }}
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-gradient-to-br from-bg-secondary to-bg-primary rounded-b-2xl hidden">
                <div className="text-5xl font-bold  text-primary">
                  SJ
                </div>
              </div>

              {/* <GlitchLines /> */}

              {/* Left labels */}
              <div className="absolute left-3 top-1/3 z-30 flex flex-col gap-1">
                {["DEV", "UX", "ML"].map((t, i) => (
                  <motion.div
                    key={t}
                    className="px-2 py-1 text-xs font-bold tracking-widest text-primary border border-primary/40 bg-bg-secondary/10 rounded backdrop-blur-sm shadow-md"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.6 + i * 0.12 }}
                  >
                    {t}
                  </motion.div>
                ))}
              </div>

              {/* Right tick marks */}
              <div className="absolute right-3 top-0 bottom-0 z-30 flex flex-col justify-evenly pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`ml-auto h-px bg-gradient-to-l from-primary/60 to-transparent ${i % 3 === 0 ? "w-6" : "w-3"}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      delay: 1.3 + i * 0.07,
                      transformOrigin: "right",
                    }}
                  />
                ))}
              </div>

              <StatusBar />
            </div>

            {/* Bottom strip - Perfect fit */}
            <div className="flex items-center justify-between px-4 py-3 bg-bg-secondary/80 border-t-border">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/30">
                  <span className="text-xs font-bold text-fg-primary">SJ</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-fg-primary leading-none">
                    Stephenjoseph M
                  </p>
                  <p className="text-xs text-fg-muted mt-1">
                    Fullstack · Trainer
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-success"
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                />
                <span className="text-xs text-success font-mono font-semibold">
                  LIVE
                </span>
              </div>
            </div>
          </div>

          <Brackets />
        </motion.div>
      </div>
    </>
  );
}
