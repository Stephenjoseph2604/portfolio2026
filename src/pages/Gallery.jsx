import React from "react";
import DomeGallery from "../components/DomeGallery";

import prof from "../assets/training/prof.png";
import t1 from "../assets/training/t1.png";
import t2 from "../assets/training/t2.png";
import t3 from "../assets/training/t3.png";
import t4 from "../assets/training/t4.png";
import t5 from "../assets/training/t5.png";
import t6 from "../assets/training/t6.png";
import t7 from "../assets/training/t7.png";
import t8 from "../assets/training/t8.png";
import t10 from "../assets/training/t10.png";
import t11 from "../assets/training/t11.png";
import t12 from "../assets/training/t12.png";
import t13 from "../assets/training/t13.png";
import t16 from "../assets/training/t16.png";
import t17 from "../assets/training/t17.png";
import t18 from "../assets/training/t18.png";
import t19 from "../assets/training/t19.png";
import t20 from "../assets/training/t20.png";
import t21 from "../assets/training/t21.png";
import t22 from "../assets/training/t22.png";
import t23 from "../assets/training/t23.png";
import t24 from "../assets/training/t24.png";
import t25 from "../assets/training/t25.png";
import t26 from "../assets/training/t26.png";
import t27 from "../assets/training/t27.png";
import t28 from "../assets/training/t28.png";
import t29 from "../assets/training/t29.png";
import t30 from "../assets/training/t30.png";
import t31 from "../assets/training/t31.png";
import { motion } from "framer-motion";
const DEFAULT_IMAGES = [
  { src: prof, alt: "Training" },  
  { src: t1, alt: "Training" },
  { src: t2, alt: "Training" },
  { src: t3, alt: "Training" },
  { src: t4, alt: "Training" },
  { src: t5, alt: "Training" },
  { src: t6, alt: "Training" },
  { src: t7, alt: "Training" },
  { src: t8, alt: "Training" },
  { src: t10, alt: "Training" },
  { src: t11, alt: "Training" },
  { src: t12, alt: "Training" },
  { src: t13, alt: "Training" },

  { src: t16, alt: "Training" },
  { src: t17, alt: "Training" },
  { src: t18, alt: "Training" },
  { src: t19, alt: "Training" },
  { src: t20, alt: "Training" },
  { src: t21, alt: "Training" },
  { src: t22, alt: "Training" },
  { src: t23, alt: "Training" },
  { src: t24, alt: "Training" },
  { src: t25, alt: "Training" },
  { src: t26, alt: "Training" },
  { src: t27, alt: "Training" },
  { src: t28, alt: "Training" },
  { src: t29, alt: "Training" },
  { src: t30, alt: "Training" },
  { src: t31, alt: "Training" },
];
const Gallery = () => {
  return (
    <>
      <section className="min-h-screen pt-24 pb-24 relative overflow-hidden bg-bg-primary">
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
              style={{
                background:
                  "linear-gradient(180deg, var(--color-primary), var(--color-secondary))",
              }}
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
                  My Journey
                </span>
              </div>
              <div
                className="h-px w-10"
                style={{
                  background:
                    "linear-gradient(90deg, var(--color-primary), transparent)",
                }}
              />
            </div>

            {/* Title */}
            <h1
              className="text-4xl md:text-6xl lg:text-[64px] font-black leading-[0.92] mb-4"
              style={{
                fontFamily: "'Syne', sans-serif",
                letterSpacing: "-0.04em",
              }}
            >
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #94a3b8 55%, #475569 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Trainer &
              </span>
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Developer
              </span>
            </h1>

            <p
              className="text-fg-muted text-sm md:text-base max-w-lg leading-relaxed"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              My journey as a developer and trainer — building full-stack
              applications while guiding students to learn and grow in modern
              technologies.{" "}
              <span className="text-fg-muted-2">Click any card to view.</span>
            </p>
          </div>
        </motion.div>
        <div className="h-screen w-full">
          <DomeGallery
            images={DEFAULT_IMAGES}
            fit={0.85}
            minRadius={750}
            maxVerticalRotationDeg={2}
            segments={30}
            dragDampening={2}
            grayscale={false}
          />
        </div>
      </section>
    </>
  );
};

export default Gallery;
