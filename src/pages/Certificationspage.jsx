import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award, ExternalLink, Search, Filter,
  CheckCircle2, Calendar, Shield, Star,
  Code2, Database, Globe, Layers, BookOpen, Zap,
} from "lucide-react";

/* ── dummy cert images (replace paths) ────────────────────── */
import cert1 from "../assets/certificate/cert1.png";
import cert2 from "../assets/certificate/cert1.png";
import cert3 from "../assets/certificate/cert1.png";
import cert4 from "../assets/certificate/cert1.png";
import cert5 from "../assets/certificate/cert1.png";
import cert6 from "../assets/certificate/cert1.png";
import cert7 from "../assets/certificate/cert1.png";
import cert8 from "../assets/certificate/cert1.png";

/* ═══════════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════════ */
const CERTS = [
  {
    id: 1,
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    issuerShort: "AWS",
    date: "Mar 2024",
    expires: "Mar 2027",
    credentialId: "AWS-DEV-2024-7823",
    category: "Cloud",
    accent: "#f89820",
    icon: Globe,
    image: cert1,
    skills: ["EC2", "S3", "Lambda", "DynamoDB", "CloudFormation"],
    verified: true,
    featured: true,
    verifyUrl: "#",
  },
  {
    id: 2,
    title: "Meta React Developer Certificate",
    issuer: "Meta / Coursera",
    issuerShort: "Meta",
    date: "Jan 2024",
    expires: "No Expiry",
    credentialId: "META-REACT-9912",
    category: "Frontend",
    accent: "#61dafb",
    icon: Code2,
    image: cert2,
    skills: ["React", "Hooks", "Redux", "Testing", "Performance"],
    verified: true,
    featured: true,
    verifyUrl: "#",
  },
  {
    id: 3,
    title: "Spring Professional Certification",
    issuer: "VMware / Broadcom",
    issuerShort: "VMware",
    date: "Nov 2023",
    expires: "Nov 2026",
    credentialId: "SPR-PRO-2023-4411",
    category: "Backend",
    accent: "#6db33f",
    icon: Layers,
    image: cert3,
    skills: ["Spring Boot", "Spring Security", "JPA", "REST", "Testing"],
    verified: true,
    featured: true,
    verifyUrl: "#",
  },
  {
    id: 4,
    title: "Oracle Certified Java SE 17",
    issuer: "Oracle Corporation",
    issuerShort: "Oracle",
    date: "Sep 2023",
    expires: "No Expiry",
    credentialId: "OCP-JAVA17-6634",
    category: "Backend",
    accent: "#f80000",
    icon: Code2,
    image: cert4,
    skills: ["Java 17", "OOP", "Collections", "Streams", "Concurrency"],
    verified: true,
    featured: false,
    verifyUrl: "#",
  },
  {
    id: 5,
    title: "MongoDB Associate Developer",
    issuer: "MongoDB University",
    issuerShort: "MongoDB",
    date: "Jul 2023",
    expires: "Jul 2026",
    credentialId: "MDB-DEV-2023-3391",
    category: "Database",
    accent: "#4db33d",
    icon: Database,
    image: cert5,
    skills: ["Atlas", "Aggregation", "Indexing", "Transactions", "CRUD"],
    verified: true,
    featured: false,
    verifyUrl: "#",
  },
  {
    id: 6,
    title: "Certified Kubernetes Application Developer",
    issuer: "Cloud Native Computing Foundation",
    issuerShort: "CNCF",
    date: "May 2023",
    expires: "May 2026",
    credentialId: "CKAD-2023-8821",
    category: "DevOps",
    accent: "#326ce5",
    icon: Shield,
    image: cert6,
    skills: ["Kubernetes", "Pods", "Services", "Deployments", "ConfigMaps"],
    verified: true,
    featured: false,
    verifyUrl: "#",
  },
  {
    id: 7,
    title: "Google UX Design Professional",
    issuer: "Google / Coursera",
    issuerShort: "Google",
    date: "Feb 2023",
    expires: "No Expiry",
    credentialId: "GGL-UX-2023-5542",
    category: "Design",
    accent: "#4285f4",
    icon: Zap,
    image: cert7,
    skills: ["Figma", "Wireframing", "Prototyping", "Research", "A/B Testing"],
    verified: true,
    featured: false,
    verifyUrl: "#",
  },
  {
    id: 8,
    title: "Node.js Application Developer",
    issuer: "OpenJS Foundation",
    issuerShort: "OpenJS",
    date: "Dec 2022",
    expires: "No Expiry",
    credentialId: "OJSF-NODE-2022-1193",
    category: "Backend",
    accent: "#84cc16",
    icon: BookOpen,
    image: cert8,
    skills: ["Node.js", "Express", "Streams", "Worker Threads", "Testing"],
    verified: true,
    featured: false,
    verifyUrl: "#",
  },
];

const CATEGORIES = ["All", "Cloud", "Frontend", "Backend", "Database", "DevOps", "Design"];

/* ═══════════════════════════════════════════════════════════
   FEATURED CERT CARD  (large hero card)
══════════════════════════════════════════════════════════ */
function FeaturedCard({ cert, index }) {
  const [hovered, setHovered] = useState(false);
  const [imgErr, setImgErr]   = useState(false);
  const Icon = cert.icon;

  return (
    <motion.div
      className="relative rounded-2xl border overflow-hidden cursor-pointer group"
      style={{
        background: hovered
          ? `color-mix(in srgb, ${cert.accent} 6%, var(--color-bg-secondary))`
          : "var(--color-bg-secondary)",
        borderColor: hovered ? `${cert.accent}70` : "var(--color-border)",
        boxShadow: hovered
          ? `0 0 0 1px ${cert.accent}25, 0 24px 56px ${cert.accent}18`
          : "none",
        transition: "all 0.38s ease",
      }}
      initial={{ opacity: 0, y: 28, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.58, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* top accent line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] z-10"
        animate={{ opacity: hovered ? 1 : 0.4 }}
        style={{ background: `linear-gradient(90deg, transparent, ${cert.accent}, transparent)` }}
      />

      {/* ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${cert.accent}14 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* dot-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Image strip */}
      <div className="relative h-44 overflow-hidden bg-bg-card">
        {!imgErr ? (
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={() => setImgErr(true)}
            draggable={false}
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: `${cert.accent}12` }}
          >
            <Icon className="w-14 h-14 opacity-20" style={{ color: cert.accent }} />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-transparent" />

        {/* featured badge */}
        <div
          className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg border"
          style={{
            background: "var(--color-bg-card)",
            borderColor: `${cert.accent}55`,
            backdropFilter: "blur(10px)",
          }}
        >
          <Star className="w-3 h-3" style={{ color: cert.accent }} />
          <span
            className="text-[8px] font-black uppercase tracking-[0.18em]"
            style={{ color: cert.accent, fontFamily: "'JetBrains Mono', monospace" }}
          >
            Featured
          </span>
        </div>

        {/* verified badge */}
        {cert.verified && (
          <div
            className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-lg border"
            style={{
              background: "var(--color-bg-card)",
              borderColor: "var(--color-success)55",
              backdropFilter: "blur(10px)",
            }}
          >
            <CheckCircle2 className="w-3 h-3 text-success" />
            <span
              className="text-[8px] font-bold uppercase tracking-wider text-success"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Verified
            </span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-5">
        {/* category pill + issuer */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <span
            className="px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.16em] rounded-lg border"
            style={{
              color: cert.accent,
              borderColor: `${cert.accent}45`,
              background: `${cert.accent}10`,
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            {cert.category}
          </span>
          <span
            className="text-[10px] font-bold uppercase tracking-[0.12em] text-fg-muted-2"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {cert.issuer}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-base font-black text-fg-primary leading-tight mb-2"
          style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.02em" }}
        >
          {cert.title}
        </h3>

        {/* Date row */}
        <div className="flex items-center gap-3 mb-4 text-fg-muted-2">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3 h-3 flex-shrink-0" />
            <span
              className="text-[10px] font-bold uppercase tracking-[0.1em]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {cert.date}
            </span>
          </div>
          <span className="text-fg-muted-3">·</span>
          <span
            className="text-[10px] font-bold uppercase tracking-[0.1em]"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: cert.expires === "No Expiry" ? "var(--color-success)" : "var(--color-fg-muted-2)",
            }}
          >
            {cert.expires}
          </span>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {cert.skills.map((s) => (
            <span
              key={s}
              className="px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider rounded-md border border-border bg-bg-card text-fg-muted-2"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {s}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <span
            className="text-[9px] font-bold uppercase tracking-[0.12em] text-fg-muted-3"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            ID: {cert.credentialId}
          </span>
          <motion.a
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] font-black text-white"
            style={{
              fontFamily: "'Syne', sans-serif",
              background: `linear-gradient(135deg, ${cert.accent}, var(--color-secondary))`,
              boxShadow: `0 4px 14px ${cert.accent}35`,
            }}
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.96 }}
            onClick={(e) => e.stopPropagation()}
          >
            Verify <ExternalLink className="w-2.5 h-2.5" />
          </motion.a>
        </div>
      </div>

      {/* bottom sweep */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1.5px]"
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: `linear-gradient(90deg, transparent, ${cert.accent}, transparent)`,
          transformOrigin: "left",
        }}
      />
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   REGULAR CERT ROW  (compact list tile)
══════════════════════════════════════════════════════════ */
function CertRow({ cert, index }) {
  const [hovered, setHovered] = useState(false);
  const [imgErr,  setImgErr]  = useState(false);
  const Icon = cert.icon;

  return (
    <motion.div
      className="relative flex items-center gap-4 p-4 rounded-2xl border overflow-hidden cursor-pointer"
      style={{
        background: hovered
          ? `color-mix(in srgb, ${cert.accent} 5%, var(--color-bg-secondary))`
          : "var(--color-bg-secondary)",
        borderColor: hovered ? `${cert.accent}60` : "var(--color-border)",
        boxShadow: hovered
          ? `0 0 0 1px ${cert.accent}18, 0 12px 32px ${cert.accent}12`
          : "none",
        transition: "all 0.32s ease",
      }}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ x: 4 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* left accent bar */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full"
        animate={{ opacity: hovered ? 1 : 0, scaleY: hovered ? 1 : 0.3 }}
        transition={{ duration: 0.3 }}
        style={{ background: `linear-gradient(180deg, ${cert.accent}, transparent)`, transformOrigin: "top" }}
      />

      {/* ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-400"
        style={{
          background: `radial-gradient(ellipse 80% 80% at 0% 50%, ${cert.accent}0e 0%, transparent 65%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Cert thumbnail / icon */}
      <div
        className="w-14 h-14 rounded-xl overflow-hidden border flex-shrink-0 flex items-center justify-center"
        style={{
          borderColor: hovered ? `${cert.accent}55` : "var(--color-border)",
          background: imgErr ? `${cert.accent}12` : "transparent",
          transition: "border-color 0.3s",
        }}
      >
        {!imgErr ? (
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-full object-cover"
            onError={() => setImgErr(true)}
            draggable={false}
          />
        ) : (
          <Icon className="w-6 h-6" style={{ color: cert.accent }} />
        )}
      </div>

      {/* Main content */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h3
            className="text-sm font-black text-fg-primary leading-tight truncate"
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.018em" }}
          >
            {cert.title}
          </h3>
          {cert.verified && (
            <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 text-success" />
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span
            className="text-[10px] font-bold"
            style={{ color: cert.accent, fontFamily: "'JetBrains Mono', monospace" }}
          >
            {cert.issuer}
          </span>
          <span className="text-fg-muted-3">·</span>
          <div className="flex items-center gap-1">
            <Calendar className="w-2.5 h-2.5 text-fg-muted-2" />
            <span
              className="text-[9px] uppercase tracking-[0.12em] text-fg-muted-2 font-bold"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {cert.date}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {cert.skills.slice(0, 3).map((s) => (
            <span
              key={s}
              className="px-1.5 py-0.5 text-[7px] font-bold uppercase tracking-wider rounded border border-border bg-bg-card text-fg-muted-3"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {s}
            </span>
          ))}
          {cert.skills.length > 3 && (
            <span
              className="px-1.5 py-0.5 text-[7px] font-bold uppercase tracking-wider rounded border border-border bg-bg-card text-fg-muted-3"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              +{cert.skills.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Right side */}
      <div className="flex flex-col items-end gap-2 flex-shrink-0">
        <span
          className="px-2 py-0.5 text-[8px] font-black uppercase tracking-[0.14em] rounded-lg border"
          style={{
            color: cert.accent,
            borderColor: `${cert.accent}40`,
            background: `${cert.accent}0e`,
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          {cert.category}
        </span>

        <motion.a
          href={cert.verifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-fg-muted-2 hover:text-fg-primary transition-colors"
          whileHover={{ scale: 1.08 }}
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </motion.a>
      </div>

      {/* bottom sweep */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px]"
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: `linear-gradient(90deg, transparent, ${cert.accent}80, transparent)`,
          transformOrigin: "left",
        }}
      />
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   STAT BAR
══════════════════════════════════════════════════════════ */
function StatBar() {
  const stats = [
    { val: `${CERTS.length}`,                   lbl: "Certifications",   accent: "var(--color-primary)"   },
    { val: `${CERTS.filter(c=>c.verified).length}`, lbl: "Verified",     accent: "var(--color-success)"   },
    { val: `${CERTS.filter(c=>c.featured).length}`, lbl: "Featured",     accent: "var(--color-secondary)" },
    { val: `${[...new Set(CERTS.map(c=>c.category))].length}`, lbl: "Domains", accent: "var(--color-teal)" },
  ];

  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14"
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
              boxShadow: h ? `0 0 0 1px ${accent}25, 0 10px 28px ${accent}18` : "none",
              transition: "all 0.3s ease",
              background: h ? `color-mix(in srgb, ${typeof accent === 'string' && accent.startsWith('#') ? accent : 'var(--color-primary)'} 5%, var(--color-bg-secondary))` : "var(--color-bg-secondary)",
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
                background: `radial-gradient(ellipse 80% 60% at 50% 110%, ${accent}28 0%, transparent 70%)`,
                opacity: h ? 1 : 0,
              }}
            />
            <p
              className="text-2xl md:text-3xl font-black leading-none mb-1 relative z-10"
              style={{
                fontFamily: "'Syne', sans-serif",
                letterSpacing: "-0.04em",
                color: accent,
                textShadow: h ? `0 0 18px ${accent}80` : "none",
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
   FILTER BAR
══════════════════════════════════════════════════════════ */
function FilterBar({ active, setActive, query, setQuery }) {
  return (
    <motion.div
      className="flex flex-col sm:flex-row gap-3 mb-10"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Search */}
      <div className="relative flex-1">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-fg-muted-2 pointer-events-none" />
        <input
          type="text"
          placeholder="Search certificates..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-border bg-bg-secondary text-fg-primary text-sm placeholder:text-fg-muted-2 focus:outline-none focus:border-primary transition-colors"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem" }}
        />
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2">
        <div className="flex items-center gap-1.5 pr-2 text-fg-muted-2">
          <Filter className="w-3.5 h-3.5" />
        </div>
        {CATEGORIES.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setActive(cat)}
            className="px-3 py-2 rounded-xl border text-[10px] font-black uppercase tracking-[0.14em] transition-all duration-250"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              background: active === cat ? "var(--color-primary)" : "var(--color-bg-secondary)",
              borderColor: active === cat ? "var(--color-primary)" : "var(--color-border)",
              color: active === cat ? "#fff" : "var(--color-fg-muted)",
              boxShadow: active === cat ? "0 4px 16px var(--color-primary)/40" : "none",
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
          >
            {cat}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN PAGE
══════════════════════════════════════════════════════════ */
export function CertificationsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery,  setSearchQuery]  = useState("");

  const filtered = CERTS.filter((c) => {
    const matchCat   = activeFilter === "All" || c.category === activeFilter;
    const matchQuery = searchQuery === "" ||
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchQuery;
  });

  const featured = filtered.filter((c) => c.featured);
  const rest     = filtered.filter((c) => !c.featured);

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
          className="absolute -top-48 left-1/2 -translate-x-1/2 w-[680px] h-[380px] opacity-[0.08]"
          style={{
            background: "radial-gradient(ellipse, var(--color-primary) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
        <div
          className="absolute top-1/2 -right-40 w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, var(--color-secondary) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute -bottom-28 left-0 w-[320px] h-[320px] rounded-full opacity-[0.04]"
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

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">

        {/* ══ SECTION HEADER ══ */}
        <motion.div
          className="mb-12 relative pl-5"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Left accent bar */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full"
            style={{ background: "linear-gradient(180deg, var(--color-primary), var(--color-secondary))" }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Eyebrow pill */}
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
                Verified Credentials
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
              My
            </span>
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Certifications
            </span>
          </h1>

          <p
            className="text-fg-muted text-sm md:text-base max-w-lg leading-relaxed"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Industry-recognised credentials across cloud, backend, frontend, and DevOps.{" "}
            <span className="text-fg-muted-2">All verified and up to date.</span>
          </p>
        </motion.div>

        {/* ══ STAT BAR ══ */}
        <StatBar />

        {/* ══ FILTER BAR ══ */}
        <FilterBar
          active={activeFilter}
          setActive={setActiveFilter}
          query={searchQuery}
          setQuery={setSearchQuery}
        />

        {/* ══ NO RESULTS ══ */}
        <AnimatePresence mode="wait">
          {filtered.length === 0 && (
            <motion.div
              key="empty"
              className="flex flex-col items-center justify-center py-24 text-center"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <Award className="w-12 h-12 text-fg-muted-3 mb-4" />
              <p
                className="text-fg-muted text-sm mb-1"
                style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
              >
                No certificates found
              </p>
              <p
                className="text-[11px] text-fg-muted-2"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Try adjusting your search or filter
              </p>
            </motion.div>
          )}

          {filtered.length > 0 && (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              {/* Featured grid */}
              {featured.length > 0 && (
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Star className="w-3.5 h-3.5 text-fg-muted-2" />
                    <span
                      className="text-[9px] font-black uppercase tracking-[0.22em] text-fg-muted-2"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      Featured Certs
                    </span>
                    <div
                      className="flex-1 h-px"
                      style={{
                        background: "linear-gradient(90deg, var(--color-primary)/40, transparent)",
                      }}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {featured.map((c, i) => (
                      <FeaturedCard key={c.id} cert={c} index={i} />
                    ))}
                  </div>
                </div>
              )}

              {/* All others — compact list */}
              {rest.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="w-3.5 h-3.5 text-fg-muted-2" />
                    <span
                      className="text-[9px] font-black uppercase tracking-[0.22em] text-fg-muted-2"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      All Credentials
                    </span>
                    <div
                      className="flex-1 h-px"
                      style={{
                        background: "linear-gradient(90deg, var(--color-secondary)/40, transparent)",
                      }}
                    />
                    <span
                      className="text-[9px] font-bold text-fg-muted-3 uppercase tracking-wider"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {rest.length} certs
                    </span>
                  </div>
                  <div className="space-y-3">
                    {rest.map((c, i) => (
                      <CertRow key={c.id} cert={c} index={i} />
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ══ BOTTOM NOTE ══ */}
        <motion.div
          className="flex items-center justify-center gap-4 mt-14"
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
            {CERTS.length} certificates · {CERTS.filter((c) => c.verified).length} verified
          </span>
          <div className="h-px w-12 bg-border" />
        </motion.div>

      </div>
    </div>
  );
}

export default CertificationsPage;