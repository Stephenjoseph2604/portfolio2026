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
import react2Logo from "../assets/skills/react.png";
import intellijLogo from "../assets/skills/intellij.png";
import mysqlLogo from "../assets/skills/mysql.png";
import postmanLogo from "../assets/skills/postman.png";
import mongoLogo from "../assets/skills/mongo.png";
import springLogo from "../assets/skills/spring.png";
import securityLogo from "../assets/skills/security.png";
import springbootLogo from "../assets/skills/springboot.png";
import vsLogo from "../assets/skills/vs.png";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
const skillsData = [
  // Core Frontend Stack (Most Important)
  {
    id: 1,
    image: reactLogo,
    title: "React",
    category: "Frontend",
    gradient: "from-blue-500/20 to-purple-600/20",
    span: "lg:col-span-1",
  },
  {
    id: 2,
    image: reduxLogo,
    title: "Redux",
    category: "State",
    gradient: "from-purple-500/20 to-pink-500/20",
    span: "",
  },
  {
    id: 3,
    image: jsLogo,
    title: "JavaScript",
    category: "Frontend",
    gradient: "from-yellow-400/20 to-amber-500/20",
    span: "",
  },
  
  // Backend Stack
  {
    id: 4,
    image: nodeLogo,
    title: "Node.js",
    category: "Backend",
    gradient: "from-green-500/20 to-emerald-600/20",
    span: "lg:col-span-2 md:row-span-2",
  },
  {
    id: 5,
    image: springbootLogo,
    title: "Spring Boot",
    category: "Backend",
    gradient: "from-orange-500/20 to-red-500/20",
    span: "",
  },
  {
    id: 6,
    image: expressLogo,
    title: "Express.js",
    category: "Backend",
    gradient: "from-indigo-500/20 to-purple-600/20",
    span: "",
  },
  
  // Core Languages
  {
    id: 7,
    image: javaLogo,
    title: "Java",
    category: "Core",
    gradient: "from-yellow-500/20 to-orange-500/20",
    span: "",
  },
  
  // Styling & UI
  {
    id: 8,
    image: tailwindLogo,
    title: "Tailwind CSS",
    category: "Styling",
    gradient: "from-cyan-500/20 to-blue-500/20",
    span: "",
  },
  {
    id: 9,
    image: cssLogo,
    title: "CSS",
    category: "Styling",
    gradient: "from-blue-400/20 to-indigo-500/20",
    span: "",
  },
  {
    id: 10,
    image: htmlLogo,
    title: "HTML",
    category: "Frontend",
    gradient: "from-orange-400/20 to-red-500/20",
    span: "",
  },
  
  // Databases
  {
    id: 11,
    image: mysqlLogo,
    title: "MySQL",
    category: "Database",
    gradient: "from-blue-600/20 to-cyan-500/20",
    span: "lg:col-span-1",
  },
  {
    id: 12,
    image: mongoLogo,
    title: "MongoDB",
    category: "Database",
    gradient: "from-green-500/20 to-emerald-500/20",
    span: "",
  },
  
  // Mobile Development
  {
    id: 13,
    image: androidLogo,
    title: "Android",
    category: "Mobile",
    gradient: "from-green-400/20 to-emerald-400/20",
    span: "lg:col-span-2 md:row-span-2",
  },
  {
    id: 14,
    image: ktLogo,
    title: "Kotlin",
    category: "Mobile",
    gradient: "from-purple-400/20 to-violet-500/20",
    span: "",
  },
  
  // Security
  {
    id: 15,
    image: jwtLogo,
    title: "JWT Auth",
    category: "Security",
    gradient: "from-pink-500/20 to-rose-500/20",
    span: "",
  },
  {
    id: 16,
    image: securityLogo,
    title: "Spring Security",
    category: "Security",
    gradient: "from-red-500/20 to-rose-600/20",
    span: "",
  },
  
  // Backend Frameworks
  {
    id: 17,
    image: springLogo,
    title: "Spring Framework",
    category: "Backend",
    gradient: "from-green-500/20 to-emerald-600/20",
    span: "",
  },
  
  // Core Concepts
  {
    id: 18,
    image: dataLogo,
    title: "Data Structures",
    category: "Core",
    gradient: "from-teal-500/20 to-cyan-500/20",
    span: "",
  },
  
  // Development Tools (Least prominent)
  {
    id: 19,
    image: vsLogo,
    title: "VS Code",
    category: "Tools",
    gradient: "from-blue-500/20 to-sky-500/20",
    span: "",
  },
  {
    id: 20,
    image: intellijLogo,
    title: "IntelliJ IDEA",
    category: "Tools",
    gradient: "from-purple-500/20 to-indigo-600/20",
    span: "",
  },
  {
    id: 21,
    image: postmanLogo,
    title: "Postman",
    category: "Tools",
    gradient: "from-orange-500/20 to-yellow-500/20",
    span: "",
  },
  {
    id: 22,
    image: eclipseLogo,
    title: "Eclipse IDE",
    category: "Tools",
    gradient: "from-indigo-400/20 to-blue-500/20",
    span: "",
  },
];


const SkillsBentoGrid = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Subtle background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-bg-primary/50 to-primary/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-light text-white mb-6"
          >
            Skills Mastery
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#a1a1aa] max-w-2xl mb-8"
          >
            Cutting-edge technologies powering modern development excellence
          </motion.p>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-px bg-[#2563eb]"
          />
        </div>

        {/* Animated Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(6,1fr)] gap-2 lg:gap-4 [grid-auto-rows:160px] lg:[grid-auto-rows:200px]">
          {skillsData.map((skill, index) => {
            const positions = [
              "col-span-1 row-span-1",
              "col-span-1 row-span-1",
              "col-span-2 row-span-1",
              "col-span-1 row-span-2",
              "col-span-2 row-span-1",
              "col-span-1 row-span-1",
            ];

            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.03,
                  y: -6,
                  rotateX: 2,
                  transition: { type: "spring", stiffness: 420, damping: 22 },
                }}
                className={`group/card relative rounded-2xl overflow-hidden rounded-2xl/4 border border-border/60 bg-gradient-to-br from-bg-card/95 via-bg-glass/90 to-primary/5 backdrop-blur-xs hover:border-primary/80 hover:shadow-2xl hover:shadow-[0_20px_40px_var(--color-primary/25)] hover:bg-primary/2 transition-all duration-500 cursor-pointer will-change-transform ${positions[index % positions.length]}`}
              >
                {/* Floating skill icon */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center p-3 lg:p-5"
                  initial={{ rotateY: -10 }}
                  whileHover={{ rotateY: 0, scale: 1.08 }}
                >
                  <motion.img
                    src={skill.image}
                    alt={skill.title}
                    className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain drop-shadow-2xl filter brightness-[1.15] saturate-[1.3] group-hover/card:blur-xs group-hover/card:brightness-90 transition-all duration-400"
                    whileHover={{
                      scale: 1.25,
                      rotate: 8,
                      y: -8,
                      filter:
                        "drop-shadow(0 12px 24px var(--color-primary/40)) brightness(1.2)",
                    }}
                    transition={{ type: "spring", stiffness: 450, damping: 20 }}
                  />
                </motion.div>

                {/* Glassmorphism overlay */}
                <motion.div
                  className="absolute inset-0   border-b border-primary/20 flex flex-col justify-center items-center p-4 text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileHover={{
                    opacity: 1,
                    scale: 1,
                    backgroundColor: "rgba(5,5,8,0.95)",
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {/* Elevated icon */}
                  <motion.img
                    src={skill.image}
                    alt={skill.title}
                    className="w-12 h-12 lg:w-16 lg:h-16 object-contain filter brightness-0 invert-[1] mx-auto mb-4 drop-shadow-2xl shadow-primary/30 rounded-xl p-2 bg-fg-primary/5 border border-fg-primary/10"
                    whileHover={{
                      scale: 1.15,
                      rotate: 360,
                      boxShadow: "0 0 25px rgba(37,99,235,0.6)",
                    }}
                    transition={{ type: "spring", bounce: 0.3 }}
                  />

                  {/* Modern typography */}
                  <motion.h3
                    className="text-lg lg:text-xl font-[800] text-fg-primary mb-3 px-3 tracking-[-0.02em] bg-gradient-to-r from-fg-primary/90 via-fg-primary to-primary/80 bg-clip-text text-transparent drop-shadow-sm"
                    whileHover={{
                      y: -3,
                      scale: 1.03,
                      textShadow: "0 2px 8px rgba(37,99,235,0.5)",
                    }}
                  >
                    {skill.title}
                  </motion.h3>

                  {/* Neo-brutalist badge */}
                  <motion.span
                    className="px-4 py-1.5 text-xs font-[650] font-mono uppercase tracking-wider text-primary   backdrop-blur-xs rounded-xl/2 border-2 border-primary/50 shadow-[0_8px_20px_var(--color-primary/20)] hover:shadow-[0_12px_25px_var(--color-primary/30)]  transition-all duration-300"
                    whileHover={{
                      scale: 1.08,
                      y: -2,
                      borderColor: "rgba(37,99,235,1)",
                      backgroundColor: "rgba(37,99,235,0.15)",
                    }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    {skill.category}
                  </motion.span>
                </motion.div>

                {/* Cyber edge glow */}
                <div className="absolute inset-0 rounded-[16px] bg-gradient-circular-primary opacity-0 group-hover/card:opacity-100 blur-xs scale-125 animate-pulse duration-1000 -z-10" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsBentoGrid;
