import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera, Music, BookOpen, Code2, Plane, Coffee,
  Gamepad2, Brush, Mountain, Headphones, Film, Bike,
} from "lucide-react";

/* ── dummy images — swap paths ──────────────────────────── */
import h1  from "../assets/hobbies/chess.png";
// import h2  from "../assets/hobbies/music.jpg";
// import h3  from "../assets/hobbies/reading.jpg";
// import h4  from "../assets/hobbies/coding.jpg";
// import h5  from "../assets/hobbies/travel.jpg";
// import h6  from "../assets/hobbies/coffee.jpg";
// import h7  from "../assets/hobbies/gaming.jpg";
// import h8  from "../assets/hobbies/art.jpg";
// import h9  from "../assets/hobbies/hiking.jpg";
// import h10 from "../assets/hobbies/music2.jpg";
// import h11 from "../assets/hobbies/cinema.jpg";
// import h12 from "../assets/hobbies/cycling.jpg";

/* ═══════════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════════ */
const ROW_ONE = [
  {
    id: 1,
    title: "Photography",
    subtitle: "Capturing Moments",
    desc: "Street photography and golden-hour portraits. Every frame tells a story that words can't.",
    icon: Camera,
    image: h1,
    accent: "#f59e0b",
    tag: "Visual Art",
  },
  {
    id: 2,
    title: "Music",
    subtitle: "Playing & Producing",
    desc: "Acoustic guitar on weekends, lo-fi beats during late-night coding sessions.",
    icon: Music,
    image: h1,
    accent: "var(--color-secondary)",
    tag: "Creative",
  },
  {
    id: 3,
    title: "Reading",
    subtitle: "Books & Blogs",
    desc: "Tech deep-dives, system design papers, and the occasional sci-fi novel at midnight.",
    icon: BookOpen,
    image: h1,
    accent: "var(--color-teal)",
    tag: "Learning",
  },
  {
    id: 4,
    title: "Open Source",
    subtitle: "Building in Public",
    desc: "Contributing to developer tools, UI libraries, and writing technical articles.",
    icon: Code2,
    image: h1,
    accent: "var(--color-primary)",
    tag: "Tech",
  },
  {
    id: 5,
    title: "Travel",
    subtitle: "Exploring Places",
    desc: "Hill stations, coastal towns, and hidden cafés — always with a camera in hand.",
    icon: Plane,
    image: h1,
    accent: "#06b6d4",
    tag: "Adventure",
  },
  {
    id: 6,
    title: "Specialty Coffee",
    subtitle: "Brewing & Tasting",
    desc: "Pour-over at 6 am. Single-origin beans, precise ratios, the ritual of the first cup.",
    icon: Coffee,
    image: h1,
    accent: "#a16207",
    tag: "Lifestyle",
  },
];

const ROW_TWO = [
  {
    id: 7,
    title: "Gaming",
    subtitle: "Strategy & RPG",
    desc: "Chess puzzles, city-builders, and the occasional AAA RPG for world-building inspiration.",
    icon: Gamepad2,
    image: h1,
    accent: "#e11d48",
    tag: "Gaming",
  },
  {
    id: 8,
    title: "Digital Art",
    subtitle: "UI & Illustration",
    desc: "Figma explorations, icon sets, and UI concept designs on quiet Sunday afternoons.",
    icon: Brush,
    image: h1,
    accent: "var(--color-secondary)",
    tag: "Design",
  },
  {
    id: 9,
    title: "Hiking",
    subtitle: "Trails & Summits",
    desc: "Nilgiri trails and Western Ghats treks. Nature resets the developer brain.",
    icon: Mountain,
    image: h1,
    accent: "var(--color-teal)",
    tag: "Outdoors",
  },
  {
    id: 10,
    title: "Podcasts",
    subtitle: "Tech & Philosophy",
    desc: "Lex Fridman, Huberman Lab, and every good engineering podcast during commutes.",
    icon: Headphones,
    image: h1,
    accent: "var(--color-primary)",
    tag: "Learning",
  },
  {
    id: 11,
    title: "Cinema",
    subtitle: "Films & Stories",
    desc: "Christopher Nolan non-linearity, Tamil drama, and anything with great cinematography.",
    icon: Film,
    image: h1,
    accent: "#f59e0b",
    tag: "Visual Art",
  },
  {
    id: 12,
    title: "Cycling",
    subtitle: "Morning Rides",
    desc: "20 km before sunrise. Clears the mind better than any productivity app.",
    icon: Bike,
    image: h1,
    accent: "#84cc16",
    tag: "Fitness",
  },
];

/* ═══════════════════════════════════════════════════════════
   HELPER — resolve CSS var to hex for inline rgba use
   (we use opacity classes + direct var() in most places
   so raw rgba isn't needed — kept simple intentionally)
══════════════════════════════════════════════════════════ */
const ACCENT_GLOW = {
  "var(--color-primary)":   "37,99,235",
  "var(--color-secondary)": "124,58,237",
  "var(--color-teal)":      "15,118,110",
  "#f59e0b":                "245,158,11",
  "#06b6d4":                "6,182,212",
  "#a16207":                "161,98,7",
  "#e11d48":                "225,29,72",
  "#84cc16":                "132,204,22",
};
function glow(accent, a) {
  const rgb = ACCENT_GLOW[accent] || "37,99,235";
  return `rgba(${rgb},${a})`;
}

/* ═══════════════════════════════════════════════════════════
   SLIDE CARD
══════════════════════════════════════════════════════════ */
function HobbyCard({ item }) {
  const [hovered, setHovered] = useState(false);
  const [imgErr,  setImgErr]  = useState(false);
  const Icon = item.icon;

  return (
    <div
      className="relative flex-shrink-0 w-72 md:w-80 rounded-2xl border overflow-hidden cursor-default select-none"
      style={{
        background: hovered ? glow(item.accent, 0.07) : "var(--color-bg-secondary)",
        borderColor: hovered ? glow(item.accent, 0.55) : "var(--color-border)",
        boxShadow: hovered
          ? `0 0 0 1px ${glow(item.accent, 0.2)}, 0 20px 48px ${glow(item.accent, 0.15)}`
          : "none",
        transition: "all 0.38s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* top sweep line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] z-10 transition-opacity duration-400"
        style={{
          background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)`,
          opacity: hovered ? 1 : 0.35,
        }}
      />

      {/* dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse 80% 55% at 50% 0%, ${glow(item.accent, 0.14)} 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-bg-card">
        {!imgErr ? (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700"
            style={{ transform: hovered ? "scale(1.07)" : "scale(1)" }}
            onError={() => setImgErr(true)}
            draggable={false}
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: glow(item.accent, 0.1) }}
          >
            <Icon className="w-16 h-16 opacity-20" style={{ color: item.accent }} />
          </div>
        )}
        {/* gradient veil */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-bg-secondary/20 to-transparent" />

        {/* tag badge */}
        <div
          className="absolute top-3 left-3 px-2.5 py-1 rounded-lg border backdrop-blur-md"
          style={{
            background: "var(--color-bg-card)",
            borderColor: glow(item.accent, 0.45),
          }}
        >
          <span
            className="text-[8px] font-black uppercase tracking-[0.18em]"
            style={{ color: item.accent, fontFamily: "'JetBrains Mono', monospace" }}
          >
            {item.tag}
          </span>
        </div>

        {/* icon badge */}
        <div
          className="absolute bottom-3 right-3 w-9 h-9 rounded-xl flex items-center justify-center border backdrop-blur-md transition-all duration-300"
          style={{
            background: hovered ? glow(item.accent, 0.22) : "var(--color-bg-card)",
            borderColor: glow(item.accent, 0.45),
            boxShadow: hovered ? `0 0 14px ${glow(item.accent, 0.35)}` : "none",
          }}
        >
          <Icon className="w-4 h-4" style={{ color: item.accent }} />
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <h3
          className="text-base font-black text-fg-primary leading-tight mb-0.5"
          style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.025em" }}
        >
          {item.title}
        </h3>
        <p
          className="text-[10px] font-bold uppercase tracking-[0.16em] mb-3"
          style={{ color: item.accent, fontFamily: "'JetBrains Mono', monospace" }}
        >
          {item.subtitle}
        </p>
        <p
          className="text-fg-muted text-[12px] leading-relaxed"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {item.desc}
        </p>
      </div>

      {/* bottom sweep */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[1.5px] transition-transform duration-500 origin-left"
        style={{
          background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)`,
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
        }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   INFINITE MARQUEE STRIP
══════════════════════════════════════════════════════════ */
function MarqueeStrip({ items, direction = "left", speed = 40 }) {
  const [paused, setPaused] = useState(false);
  // triple the items so the seam is always off-screen
  const track = [...items, ...items, ...items];

  const translateFrom = direction === "left" ? "0%"    : "-33.333%";
  const translateTo   = direction === "left" ? "-33.333%" : "0%";

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, var(--color-bg-primary), transparent)" }} />
      {/* right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
        style={{ background: "linear-gradient(270deg, var(--color-bg-primary), transparent)" }} />

      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: [translateFrom, translateTo] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        style={{
          animationPlayState: paused ? "paused" : "running",
          willChange: "transform",
        }}
        // framer doesn't have animationPlayState so we use custom pause
        {...(paused ? { animate: false } : {})}
      >
        {track.map((item, i) => (
          <HobbyCard key={`${item.id}-${i}`} item={item} />
        ))}
      </motion.div>

      {/* paused indicator */}
      <AnimatePresence>
        {paused && (
          <motion.div
            className="absolute bottom-3 right-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-border bg-bg-card"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.22 }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-success"
              style={{ boxShadow: "0 0 6px var(--color-success)" }}
            />
            <span
              className="text-[8px] font-bold uppercase tracking-[0.18em] text-fg-muted-2"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              paused
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   CSS-ONLY MARQUEE (fallback / alternative approach)
   Used for row 2 (right-to-left) with CSS animation
══════════════════════════════════════════════════════════ */
function CSSMarqueeStrip({ items, direction = "right", speed = 45 }) {
  const [paused, setPaused] = useState(false);
  const track = [...items, ...items, ...items];

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <style>{`
        @keyframes marquee-ltr {
          from { transform: translateX(-33.333%); }
          to   { transform: translateX(0%); }
        }
        @keyframes marquee-rtl {
          from { transform: translateX(0%); }
          to   { transform: translateX(-33.333%); }
        }
        .marquee-ltr { animation: marquee-ltr ${speed}s linear infinite; }
        .marquee-rtl { animation: marquee-rtl ${speed}s linear infinite; }
        .marquee-paused { animation-play-state: paused !important; }
      `}</style>

      {/* left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, var(--color-bg-primary), transparent)" }} />
      {/* right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
        style={{ background: "linear-gradient(270deg, var(--color-bg-primary), transparent)" }} />

      <div
        className={`flex gap-4 w-max ${direction === "left" ? "marquee-rtl" : "marquee-ltr"} ${paused ? "marquee-paused" : ""}`}
      >
        {track.map((item, i) => (
          <HobbyCard key={`${item.id}-${i}`} item={item} />
        ))}
      </div>

      <AnimatePresence>
        {paused && (
          <motion.div
            className="absolute bottom-3 right-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-border bg-bg-card"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.22 }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-success"
              style={{ boxShadow: "0 0 6px var(--color-success)" }}
            />
            <span
              className="text-[8px] font-bold uppercase tracking-[0.18em] text-fg-muted-2"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              paused
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   STAT BAR
══════════════════════════════════════════════════════════ */
function StatBar() {
  const stats = [
    { val: "12",    lbl: "Hobbies",         accent: "var(--color-primary)"   },
    { val: "6+",    lbl: "Years Exploring",  accent: "var(--color-secondary)" },
    { val: "∞",     lbl: "Curiosity",        accent: "var(--color-teal)"      },
    { val: "Daily", lbl: "Practice",         accent: "#f59e0b"                },
  ];

  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
    >
      {stats.map(({ val, lbl, accent }, i) => {
        const [h, setH] = useState(false);
        return (
          <motion.div
            key={lbl}
            className="relative flex flex-col items-center justify-center py-5 rounded-2xl border border-border bg-bg-secondary overflow-hidden cursor-default"
            style={{
              borderColor: h ? accent : "var(--color-border)",
              boxShadow: h ? `0 0 0 1px ${glow(accent,0.2)}, 0 10px 28px ${glow(accent,0.14)}` : "none",
              transition: "all 0.3s ease",
            }}
            initial={{ opacity: 0, y: 14, scale: 0.93 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            whileHover={{ scale: 1.04, y: -2 }}
            onMouseEnter={() => setH(true)}
            onMouseLeave={() => setH(false)}
          >
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-400"
              style={{
                background: `radial-gradient(ellipse 80% 60% at 50% 110%, ${glow(accent,0.22)} 0%, transparent 70%)`,
                opacity: h ? 1 : 0,
              }}
            />
            <p
              className="text-2xl md:text-3xl font-black leading-none mb-1 relative z-10"
              style={{
                fontFamily: "'Syne', sans-serif",
                letterSpacing: "-0.04em",
                color: accent,
                textShadow: h ? `0 0 18px ${glow(accent,0.55)}` : "none",
                transition: "text-shadow 0.3s",
              }}
            >
              {val}
            </p>
            <p
              className="text-[9px] font-bold uppercase tracking-[0.16em] text-fg-muted-2 relative z-10"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {lbl}
            </p>
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-[1.5px]"
              animate={{ scaleX: h ? 1 : 0 }}
              transition={{ duration: 0.38 }}
              style={{
                background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
                transformOrigin: "left",
              }}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN PAGE
══════════════════════════════════════════════════════════ */
export function HobbiesPage() {
  return (
    <div
      className="min-h-screen pt-24 pb-24 relative overflow-hidden"
      style={{ background: "var(--color-bg-primary)" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=JetBrains+Mono:wght@400;600;700&display=swap');
      `}</style>

      {/* ── Atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-48 left-1/2 -translate-x-1/2 w-[700px] h-[380px] opacity-[0.08]"
          style={{
            background: "radial-gradient(ellipse, var(--color-primary) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
        <div
          className="absolute top-1/3 -right-40 w-[420px] h-[420px] rounded-full opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, var(--color-secondary) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute -bottom-28 left-0 w-[340px] h-[340px] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, var(--color-teal) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="relative z-10">

        {/* ══ SECTION HEADER ══ */}
        <motion.div
          className="max-w-6xl mx-auto px-4 md:px-8 mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative pl-5">
            {/* left accent bar */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full"
              style={{ background: "linear-gradient(180deg, var(--color-primary), var(--color-secondary))" }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* eyebrow pill */}
            <div className="flex items-center gap-3 mb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-bg-secondary">
                <span
                  className="w-2 h-2 rounded-full bg-success animate-pulse"
                  style={{ boxShadow: "0 0 8px var(--color-success)" }}
                />
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.22em] text-fg-muted"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Beyond The Code
                </span>
              </div>
              <div
                className="h-px w-10"
                style={{ background: "linear-gradient(90deg, var(--color-primary), transparent)" }}
              />
            </div>

            {/* Title */}
            <h1
              className="text-4xl md:text-6xl lg:text-[64px] font-black leading-[0.92] mb-4"
              style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.04em" }}
            >
              <span
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #94a3b8 55%, #475569 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Things I
              </span>
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Love & Do
              </span>
            </h1>

            <p
              className="text-fg-muted text-sm md:text-base max-w-lg leading-relaxed"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Life outside the terminal — the creative pursuits, physical habits, and curious
              obsessions that keep the developer mind sharp.{" "}
              <span className="text-fg-muted-2">Hover any card to pause.</span>
            </p>
          </div>
        </motion.div>

        {/* ══ STAT BAR ══ */}
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <StatBar />
        </div>

        {/* ══ ROW LABEL 1 ══ */}
        <motion.div
          className="max-w-6xl mx-auto px-4 md:px-8 mb-5"
          initial={{ opacity: 0, x: -14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: "var(--color-primary)",
                boxShadow: "0 0 6px var(--color-primary)",
              }}
            />
            <span
              className="text-[9px] font-black uppercase tracking-[0.24em] text-fg-muted-2"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Creative &amp; Lifestyle — left to right
            </span>
            <div
              className="flex-1 h-px"
              style={{ background: "linear-gradient(90deg, var(--color-primary)/40, transparent)" }}
            />
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-border bg-bg-secondary">
              <motion.div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--color-primary)" }}
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              />
              <span
                className="text-[8px] font-bold uppercase tracking-[0.16em] text-fg-muted-2"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                → moving
              </span>
            </div>
          </div>
        </motion.div>

        {/* ══ SLIDER ROW 1 — LEFT → RIGHT ══ */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <CSSMarqueeStrip items={ROW_ONE} direction="right" speed={50} />
        </motion.div>

        {/* ══ ROW LABEL 2 ══ */}
        <motion.div
          className="max-w-6xl mx-auto px-4 md:px-8 mb-5"
          initial={{ opacity: 0, x: 14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-border bg-bg-secondary">
              <motion.div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--color-secondary)" }}
                animate={{ x: [0, -6, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              />
              <span
                className="text-[8px] font-bold uppercase tracking-[0.16em] text-fg-muted-2"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                ← moving
              </span>
            </div>
            <div
              className="flex-1 h-px"
              style={{ background: "linear-gradient(270deg, var(--color-secondary)/40, transparent)" }}
            />
            <span
              className="text-[9px] font-black uppercase tracking-[0.24em] text-fg-muted-2"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Outdoor &amp; Tech — right to left
            </span>
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: "var(--color-secondary)",
                boxShadow: "0 0 6px var(--color-secondary)",
              }}
            />
          </div>
        </motion.div>

        {/* ══ SLIDER ROW 2 — RIGHT → LEFT ══ */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <CSSMarqueeStrip items={ROW_TWO} direction="left" speed={55} />
        </motion.div>

        {/* ══ QUOTE BLOCK ══ */}
        <motion.div
          className="max-w-3xl mx-auto px-4 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="relative p-8 md:p-10 rounded-2xl border border-border overflow-hidden text-center"
            style={{ background: "var(--color-bg-secondary)" }}
          >
            {/* top accent */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{
                background: "linear-gradient(90deg, transparent, var(--color-primary), var(--color-secondary), transparent)",
              }}
            />
            {/* ambient glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 60% 70% at 50% 110%, rgba(37,99,235,0.1) 0%, transparent 70%)",
              }}
            />
            {/* dot grid */}
            <div
              className="absolute inset-0 opacity-[0.025] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            <div className="relative z-10">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-bg-card mb-6"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background: "var(--color-teal)",
                    boxShadow: "0 0 6px var(--color-teal)",
                  }}
                />
                <span
                  className="text-[9px] font-bold uppercase tracking-[0.2em] text-fg-muted-2"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  My Belief
                </span>
              </div>

              <blockquote
                className="text-xl md:text-2xl font-black text-fg-primary leading-tight mb-4"
                style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.03em" }}
              >
                "The best developers are{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  curious humans first
                </span>
                , engineers second."
              </blockquote>

              <p
                className="text-[11px] font-bold uppercase tracking-[0.18em] text-fg-muted-2"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                — Stephen Joseph
              </p>
            </div>
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.div
          className="flex items-center justify-center gap-4 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="h-px w-12 bg-border" />
          <span
            className="text-[10px] uppercase tracking-[0.2em] text-fg-muted-3"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {ROW_ONE.length + ROW_TWO.length} hobbies · hover to pause
          </span>
          <div className="h-px w-12 bg-border" />
        </motion.div>

      </div>
    </div>
  );
}

export default HobbiesPage;