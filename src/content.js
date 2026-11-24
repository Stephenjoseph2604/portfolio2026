/* ═══════════════════════════════════════════════════════════════════════════
   PORTFOLIO CONTENT — the only file you need to edit
   ───────────────────────────────────────────────────────────────────────────
   Every word, link, number and image on the site comes from this file.
   Layout, colours and animation live in the components and index.css.

   How to edit
   • Text      → change the string.
   • Emphasis  → wrap words in asterisks: "Services & *expertise*".
                 In headings they turn italic + brass; in paragraphs they get
                 a soft highlighter.
   • Images    → drop the file in src/assets, import it below, use the name.
   • Lists     → add or remove items freely; the layout adapts.
   • Links     → `to: "/contact"` for pages on this site,
                 `href: "https://…"` for anything external.
   • Theme     → colours live in src/index.css (":root" = light, dark below).
═══════════════════════════════════════════════════════════════════════════ */

/* ── Images: brand & portraits ──────────────────────────────────────────── */
import logoImage from "/sjlogo.png";
import portraitStudio from "./assets/training/prof.webp";
import portraitAbout from "./assets/logo/sj2.webp";
import classroomPhoto from "./assets/training/t29.webp";

/* ── Images: training / gallery ─────────────────────────────────────────── */
import t1 from "./assets/training/t1.webp";
import t2 from "./assets/training/t2.webp";
import t3 from "./assets/training/t3.webp";
import t4 from "./assets/training/t4.webp";
import t5 from "./assets/training/t5.webp";
import t6 from "./assets/training/t6.webp";
import t7 from "./assets/training/t7.webp";
import t8 from "./assets/training/t8.webp";
import t10 from "./assets/training/t10.webp";
import t11 from "./assets/training/t11.webp";
import t12 from "./assets/training/t12.webp";
import t13 from "./assets/training/t13.webp";
import t16 from "./assets/training/t16.webp";
import t17 from "./assets/training/t17.webp";
import t18 from "./assets/training/t18.webp";
import t19 from "./assets/training/t19.webp";
import t20 from "./assets/training/t20.webp";
import t21 from "./assets/training/t21.webp";
import t22 from "./assets/training/t22.webp";
import t23 from "./assets/training/t23.webp";
import t24 from "./assets/training/t24.webp";
import t25 from "./assets/training/t25.webp";
import t26 from "./assets/training/t26.webp";
import t27 from "./assets/training/t27.webp";
import t28 from "./assets/training/t28.webp";
import t29 from "./assets/training/t29.webp";
import t30 from "./assets/training/t30.webp";
import t31 from "./assets/training/t31.webp";
import t51 from "./assets/training/t51.webp";

/* ── Images: projects ───────────────────────────────────────────────────── */
import imgCrm from "./assets/projects/xamify.webp";
import imgJob from "./assets/projects/skillbridge.webp";
import imgProfile from "./assets/projects/profile.webp";
import imgAdminMcq from "./assets/projects/adminmcq.webp";
import imgCodeEditor from "./assets/projects/codeeditor.webp";
import imgNotes from "./assets/projects/notes1.webp";
import imgExplain from "./assets/projects/explain.webp";
import imgQuiz from "./assets/projects/quiz.webp";
import imgAlgo1 from "./assets/projects/algo1.webp";
import imgAlgo2 from "./assets/projects/algo2.webp";
import imgVv from "./assets/projects/vv.webp";

/* ── Images: skill logos ────────────────────────────────────────────────── */
import reactLogo from "./assets/skills/react.png";
import reduxLogo from "./assets/skills/redux.png";
import androidLogo from "./assets/skills/android.png";
import cssLogo from "./assets/skills/css.png";
import htmlLogo from "./assets/skills/html.png";
import nodeLogo from "./assets/skills/node.png";
import dataLogo from "./assets/skills/data.png";
import expressLogo from "./assets/skills/express.png";
import eclipseLogo from "./assets/skills/eclipse.png";
import javaLogo from "./assets/skills/java.png";
import tailwindLogo from "./assets/skills/tailwind.png";
import jwtLogo from "./assets/skills/jwt.png";
import jsLogo from "./assets/skills/js.png";
import ktLogo from "./assets/skills/kt.png";
import intellijLogo from "./assets/skills/intellij.png";
import mysqlLogo from "./assets/skills/mysql.png";
import postmanLogo from "./assets/skills/postman.png";
import mongoLogo from "./assets/skills/mongo.png";
import springLogo from "./assets/skills/spring.png";
import securityLogo from "./assets/skills/security.png";
import springbootLogo from "./assets/skills/springboot.png";
import vsLogo from "./assets/skills/vs.png";

/* ── Images: certificates & hobbies ─────────────────────────────────────── */
import certImage from "./assets/certificate/cert1.webp";
import hobbyChess from "./assets/hobbies/chess.webp";
import hobbyCube from "./assets/hobbies/cube.webp";
import hobbyKeys from "./assets/hobbies/keys.webp";

/* Icons are only used by the (currently unrouted) project-detail page below */
import { Code2, Layers, Database, Shield, Globe, Zap, Star } from "lucide-react";


/* ═══════════════════════════════════════════════════════════════════════════
   1. WHO YOU ARE — reused across the whole site
═══════════════════════════════════════════════════════════════════════════ */
export const SITE = {
  firstName: "Stephen",
  lastName: "Joseph M",
  fullName: "Stephen Joseph M",
  legalName: "Stephenjoseph M",              // © line in the footer
  initials: "SJ",
  logo: logoImage,
  role: "Full-stack developer & corporate trainer",
  roleShort: "Full Stack · Trainer",
  location: "Coimbatore, Tamil Nadu",
  locationShort: "Coimbatore, IN",
  timeZone: "Asia/Kolkata",                    // drives the live clock
  timeZoneLabel: "IST",
  email: "stephenjosephm@gmail.com",
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  cvUrl: "/cv.pdf",                            // put the PDF in /public
  available: true,                             // false hides the availability dot
  availability: "Available for projects & training",
  builtWith: "Built with React & Tailwind",
};

export const SOCIALS = [
  { label: "GitHub",    href: "https://github.com/stephenjosephm" },
  { label: "LinkedIn",  href: "https://linkedin.com/in/stephenjosephm" },
  { label: "Twitter",   href: "https://twitter.com/stephenjosephm" },
];

export const PLATFORMS = [
  { label: "LeetCode",   href: "https://leetcode.com/yourusername" },
  { label: "HackerRank", href: "https://hackerrank.com/yourusername" },
  { label: "GitHub",     href: "https://github.com/stephenjosephm" },
];


/* ═══════════════════════════════════════════════════════════════════════════
   2. NAVIGATION
═══════════════════════════════════════════════════════════════════════════ */
export const NAV = {
  links: [
    { label: "Home",      to: "/" },
    { label: "About",     to: "/about" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "Others",    to: "/others" },
    { label: "Contact",   to: "/contact" },
  ],
  cta: { label: "Get in touch", to: "/contact" },
  themeLabel: "Theme",
};


/* ═══════════════════════════════════════════════════════════════════════════
   3. HOME — HERO
═══════════════════════════════════════════════════════════════════════════ */
export const HERO = {
  eyebrow: "Full-stack developer & corporate trainer",
  tagline: "Engineering *production-ready* software — and training the developers who build it.",
  bio: "I build *scalable full-stack applications* and empower teams through hands-on corporate training in modern web technologies, clean architecture, and real-world delivery.",
  ctaPrimary: { label: "Let's work together", to: "/contact" },
  ctaSecondary: { label: "Download CV", href: "/cv.pdf" },
  // The brass seal on the portrait + the highlighted first stat
  experience: {
    value: "3+",
    unit: "Years",
    label: "Years of experience",
    note: "Building software & training developers",
    ring: "Years of experience • Developer • Trainer • ",
  },
  stats: [
    { value: "2000+", label: "Students trained" },
    { value: "10+",   label: "Projects shipped" },
  ],
  stackLabel: "Core stack",
  stack: ["Java", "Spring Boot", "React", "Node.js", "MySQL", "MongoDB", "Kotlin"],
  portrait: { src: portraitStudio, alt: "Portrait of Stephen Joseph", caption: "Fig. 01 — Developer" },
  inset:    { src: classroomPhoto, alt: "Stephen Joseph leading a classroom session", caption: "Fig. 02 — Trainer" },
  scrollHint: "Scroll to explore",
};


/* ═══════════════════════════════════════════════════════════════════════════
   4. HOME — TOOLKIT MARQUEE
═══════════════════════════════════════════════════════════════════════════ */
export const TOOLKIT = {
  label: "Technologies I work with",
  items: [
    "React", "JavaScript", "Java", "Spring Boot", "Node.js", "MongoDB", "MySQL",
    "Tailwind CSS", "Redux", "Express.js", "JWT", "Kotlin", "Android", "Docker",
  ],
};


/* ═══════════════════════════════════════════════════════════════════════════
   4b. HOME — TRAINING IMPACT (the band right under the hero)
   Built to look strong even with only a couple of institutions:
   a real classroom photo + impact numbers + "Trusted by" + a short quote.
   • institutions: add as many as you have (1–6 look good). `logo` is
     optional — import an image at the top of this file and set `logo: kitLogo`.
   • metrics: replace the sample numbers with your real ones.
═══════════════════════════════════════════════════════════════════════════ */
export const TRAINED_AT = {
  label: "Training impact",
  action: { label: "See the training gallery", to: "/portfolio#training" },
  photo: {
    src: t10,
    alt: "Stephen Joseph with a batch of students at KIT-CBE",
    tag: "Live classroom",
    caption: "Full-stack workshop · KIT-CBE, Coimbatore",
  },
  metrics: [
    { value: "2000+", label: "Students trained",    note: "Colleges & corporate batches" },
    { value: "50+",   label: "Workshops delivered", note: "On-site and online" },
    { value: "6",     label: "Training programs",   note: "Java, MERN, Python & more" },
    { value: "5★",    label: "Trainee feedback",    note: "Average session rating" },
  ],
  trustedLabel: "Trusted by",
  institutions: [
    { name: "KIT-CBE",        note: "College training",  logo: null },
    { name: "Xplore IT Corp", note: "Corporate trainer", logo: null },
  ],
  more: "Plus independent batches for students and working professionals.",
  quote: {
    text: "Students gained real confidence in building complete applications.",
    author: "Dr. Meena Joseph",
    role: "Head of Department, St. Xavier's College",
  },
};


/* ═══════════════════════════════════════════════════════════════════════════
   4c. HOME — PROJECT IMPACT (second band, photo on the right)
   Same layout as the training band. `clients` works like `institutions`.
   photo.position: which part of the image stays visible, e.g. "left top", "center".
═══════════════════════════════════════════════════════════════════════════ */
export const PROJECT_IMPACT = {
  label: "Project impact",
  action: { label: "View all projects", to: "/portfolio" },
  photo: {
    src: imgCrm,
    alt: "Xamify CRM dashboard built by Stephen Joseph",
    tag: "Live product",
    caption: "Xamify CRM · Enterprise dashboard",
    position: "left top",   // which part of the image stays in view (CSS object-position)
  },
  metrics: [
    { value: "10+",  label: "Projects shipped",    note: "Web apps, dashboards & platforms" },
    { value: "22+",  label: "Technologies",        note: "Java, React, Node.js & more" },
    { value: "99%",  label: "Uptime",              note: "Across production systems" },
    { value: "Zero", label: "Security breaches",   note: "JWT, RBAC & hardened APIs" },
  ],
  trustedLabel: "Built for",
  clients: [
    { name: "PrimeBuild Solutions", note: "CRM dashboard", logo: null },
    { name: "NextGen Technologies", note: "Job portal",    logo: null },
  ],
  more: "Plus learning platforms and internal tools for training institutes.",
  quote: {
    text: "The system is secure, scalable, and performs flawlessly in production.",
    author: "Ramesh Kumar",
    role: "Operations Manager, PrimeBuild Solutions",
  },
};


/* ═══════════════════════════════════════════════════════════════════════════
   5. HOME — SERVICES
═══════════════════════════════════════════════════════════════════════════ */
export const SERVICES = {
  eyebrow: "What I do",
  title: "Services & *expertise*",
  intro: "End-to-end software solutions and industry-focused training. *Built for production*, designed to last.",
  items: [
    {
      title: "Enterprise Application Development",
      description: "End-to-end development of secure, scalable enterprise systems using Spring Boot, microservices, RESTful APIs, authentication, and deep database integration.",
      tags: ["Spring Boot", "Microservices", "REST APIs", "JWT"],
      stats: [{ value: "10+", label: "Systems built" }, { value: "99%", label: "Uptime" }],
    },
    {
      title: "Modern Web Application Development",
      description: "Dynamic, high-performance web applications built with React.js and the MERN stack using modular architecture and fully reusable component systems.",
      tags: ["React.js", "Node.js", "MongoDB", "MERN"],
      stats: [{ value: "15+", label: "Apps shipped" }, { value: "React", label: "Primary stack" }],
    },
    {
      title: "API Security & Architecture",
      description: "JWT authentication, role-based access control, Redis-based token management, and clean backend architecture designed for hardened, production-ready systems.",
      tags: ["JWT", "Redis", "RBAC", "OAuth2"],
      stats: [{ value: "Zero", label: "Breaches" }, { value: "RBAC", label: "Auth model" }],
    },
    {
      title: "Technical Training & Curriculum Design",
      description: "Industry-oriented training programs and developer mentorship across full-stack development, database design, and real-world project implementation.",
      tags: ["Java", "Full-Stack", "Mentorship", "Curriculum"],
      stats: [{ value: "200+", label: "Trained" }, { value: "5★", label: "Rating" }],
    },
  ],
};


/* ═══════════════════════════════════════════════════════════════════════════
   5b. HOME — TRAINING PROGRAMS
   `id` goes in the booking link (/contact?program=id) — keep it lowercase
   with dashes and unique. "Book a workshop" opens the contact form with
   the program's name, duration and format already filled in.
═══════════════════════════════════════════════════════════════════════════ */
export const PROGRAMS = {
  eyebrow: "Training programs",
  title: "Programs I *teach*",
  intro: "Hands-on, project-based training for colleges and corporate teams. Every program can be tailored in *length, depth and format*.",
  bookLabel: "Book a workshop",
  nextLabel: "Next",
  labels: {
    duration: "Duration",
    format: "Format",
    level: "Level",
    audience: "Ideal for",
    tech: "Technologies",
    syllabus: "Syllabus",
    outcome: "Outcome",
  },
  items: [
    {
      id: "java-full-stack",
      title: "Java Full Stack",
      tagline: "From Core Java to Spring Boot and React — build and ship a complete application.",
      duration: "60 days",
      format: "On-site · Online",
      level: "Beginner → Advanced",
      audience: "Final-year students, freshers, career switchers",
      tech: ["Java", "Spring Boot", "Hibernate / JPA", "MySQL", "React", "REST APIs", "Git"],
      syllabus: [
        "Core Java, OOP & collections",
        "JDBC, SQL & MySQL database design",
        "Spring Boot, REST APIs & JPA",
        "Spring Security with JWT authentication",
        "React fundamentals, hooks & routing",
        "Capstone project, deployment & interview prep",
      ],
      outcome: "A deployed full-stack project with authentication and a production-style codebase.",
    },
    {
      id: "mern-stack",
      title: "MERN Stack",
      tagline: "MongoDB, Express, React and Node.js — modern JavaScript, end to end.",
      duration: "45 days",
      format: "On-site · Online",
      level: "Beginner → Intermediate",
      audience: "Students and web developers moving to full stack",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Redux", "JWT", "Tailwind CSS"],
      syllabus: [
        "Modern JavaScript (ES6+) & async patterns",
        "Node.js & Express REST API design",
        "MongoDB data modelling with Mongoose",
        "React components, state & Redux",
        "Authentication, file uploads & payments",
        "Capstone project & cloud deployment",
      ],
      outcome: "A complete MERN application deployed to the cloud, ready for a portfolio.",
    },
    {
      id: "core-java",
      title: "Core Java & OOP",
      tagline: "Strong programming foundations with Java and object-oriented design.",
      duration: "30 days",
      format: "On-site · Online",
      level: "Beginner",
      audience: "First- and second-year students",
      tech: ["Java", "OOP", "Collections", "Exceptions", "Multithreading"],
      syllabus: [
        "Java syntax, data types & control flow",
        "Classes, objects, inheritance & polymorphism",
        "Collections framework & generics",
        "Exception handling & file I/O",
        "Multithreading basics & Java 8+ streams",
        "Mini projects & coding assessments",
      ],
      outcome: "Confidence to write clean Java code and tackle coding rounds.",
    },
    {
      id: "python",
      title: "Python Programming",
      tagline: "Python from first principles to practical automation and web basics.",
      duration: "30 days",
      format: "On-site · Online",
      level: "Beginner → Intermediate",
      audience: "Students, analysts and non-CS graduates",
      tech: ["Python", "OOP", "File handling", "APIs", "Flask"],
      syllabus: [
        "Python basics, data types & functions",
        "Lists, dictionaries & comprehensions",
        "Object-oriented Python",
        "Files, modules & error handling",
        "Working with APIs & automation scripts",
        "Intro to Flask & a mini web project",
      ],
      outcome: "Practical Python skills with small real-world projects.",
    },
    {
      id: "web-development",
      title: "Web Development",
      tagline: "Responsive websites with HTML, CSS, JavaScript and React.",
      duration: "30 days",
      format: "On-site · Online",
      level: "Beginner",
      audience: "Beginners and design-minded students",
      tech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "React", "Git"],
      syllabus: [
        "Semantic HTML & accessibility basics",
        "CSS layout — Flexbox, Grid & responsive design",
        "JavaScript fundamentals & the DOM",
        "Tailwind CSS & component design",
        "Introduction to React",
        "Portfolio website project & hosting",
      ],
      outcome: "A responsive, deployed personal website built from scratch.",
    },
    {
      id: "mysql",
      title: "MySQL & Database Design",
      tagline: "Design, query and optimise relational databases with confidence.",
      duration: "15 days",
      format: "On-site · Online",
      level: "Beginner → Intermediate",
      audience: "Developers and students working with data",
      tech: ["MySQL", "SQL", "ER modelling", "Normalisation", "Indexing"],
      syllabus: [
        "Relational concepts & ER diagrams",
        "DDL, DML & constraints",
        "Joins, subqueries & aggregation",
        "Normalisation & schema design",
        "Indexes, views & stored procedures",
        "Query optimisation & a case-study schema",
      ],
      outcome: "The ability to design a clean schema and write efficient SQL.",
    },
  ],
};


/* ═══════════════════════════════════════════════════════════════════════════
   6. HOME — SELECTED WORK
   The first project is shown large; the rest sit two per row.
═══════════════════════════════════════════════════════════════════════════ */
export const SELECTED_WORK = {
  eyebrow: "Selected work",
  title: "Built for *production*",
  intro: "A few projects I'm proud of — real systems, real users, real constraints.",
  action: { label: "View all projects", to: "/portfolio" },
  viewLabel: "View project",   // text in the hover pill
  projects: [
    {
      title: "CRM Dashboard System",
      category: "Full Stack Java Application",
      year: "2024",
      image: imgCrm,
      tags: ["Spring Boot", "React", "MySQL", "JWT"],
      to: "/portfolio",
    },
    {
      title: "Job Portal Platform",
      category: "React + Spring Boot",
      year: "2024",
      image: imgJob,
      tags: ["React", "Spring Boot", "REST API"],
      to: "/portfolio",
    },
    {
      title: "Developer Portfolio",
      category: "MERN / React Application",
      year: "2023",
      image: imgProfile,
      tags: ["React", "Tailwind", "Framer Motion"],
      to: "/portfolio",
    },
  ],
};


/* ═══════════════════════════════════════════════════════════════════════════
   7. ABOUT PAGE
═══════════════════════════════════════════════════════════════════════════ */
export const ABOUT = {
  eyebrow: "About me",
  title: "Hi, I'm Stephen *Joseph*.",
  photo: { src: portraitAbout, alt: "Stephen Joseph", caption: "Based in Coimbatore, India" },
  lead: "An experienced *Full Stack Developer* and *Corporate Trainer* passionate about building scalable, secure, and real-world software solutions.",
  paragraphs: [
    "I specialise in *Java Full Stack* and *MERN Stack* development, with strong expertise in databases, RESTful APIs, and modern frameworks.",
    "Hands-on experience managing the complete application lifecycle — from requirement analysis and system design to development, testing, deployment, and production support.",
    "Deeply involved in corporate training and academic mentoring. Conducted programs in colleges and institutions, mentoring *200+ students* through industry-ready projects.",
    "Currently expanding into *AI-driven development*, integrating intelligent solutions into modern software systems.",
  ],
  quote: "I believe in continuous learning, clean architecture, and empowering others through knowledge — whether through code or the classroom.",
  stats: [
    { value: "200+", label: "Trainees" },
    { value: "10+",  label: "Projects" },
    { value: "5+",   label: "Years XP" },
  ],
  ctaPrimary: { label: "Get in touch", to: "/contact" },
  ctaSecondary: { label: "See my work", to: "/portfolio" },
};


/* ═══════════════════════════════════════════════════════════════════════════
   8. ABOUT PAGE — TESTIMONIALS
   `link` is optional (e.g. a Google review URL). Leave "" to hide it.
═══════════════════════════════════════════════════════════════════════════ */
export const TESTIMONIALS = {
  eyebrow: "Client reviews",
  title: "What clients *say*",
  intro: "Real feedback from clients and students across projects and training programs.",
  autoplaySeconds: 8,
  items: [
    {
      quote: "Stephen delivered our CRM Dashboard with exceptional backend architecture and clean frontend implementation. The system is secure, scalable, and performs flawlessly in production.",
      author: "Ramesh Kumar", role: "Operations Manager", company: "PrimeBuild Solutions",
      tag: "Full-stack project", link: "",
    },
    {
      quote: "The Job Portal system he built with React and Spring Boot exceeded our expectations. The role-based access control and JWT security were implemented perfectly.",
      author: "Arun Prakash", role: "Technical Lead", company: "NextGen Technologies",
      tag: "Enterprise app", link: "",
    },
    {
      quote: "Stephen's corporate training sessions on Java Full Stack were highly practical and industry-focused. Students gained real confidence in building complete applications.",
      author: "Dr. Meena Joseph", role: "Head of Department", company: "St. Xavier's College",
      tag: "Corporate training", link: "",
    },
    {
      quote: "His explanation of REST APIs, database design, and authentication mechanisms like JWT made complex concepts very easy to understand. A true mentor for aspiring developers.",
      author: "Karthik Raj", role: "Software Developer", company: "Alumni Trainee",
      tag: "Mentorship", link: "",
    },
    {
      quote: "From requirement analysis to deployment, Stephen handled our full-stack project professionally. His attention to architecture and performance optimization stood out.",
      author: "Priya Nair", role: "Project Coordinator", company: "Innovate Systems",
      tag: "Architecture", link: "",
    },
    {
      quote: "His training programs combine real-time project building with strong fundamentals. Many students from our batch successfully transitioned into developer roles.",
      author: "Vignesh S", role: "Placement Coordinator", company: "TechBridge Institute",
      tag: "Placement training", link: "",
    },
  ],
};


/* ═══════════════════════════════════════════════════════════════════════════
   9. PORTFOLIO PAGE — ALL PROJECTS
   `category` must match one of the `filters` (except "All").
═══════════════════════════════════════════════════════════════════════════ */
export const PORTFOLIO = {
  eyebrow: "Portfolio",
  title: "Things I've *built*",
  intro: "Explore my latest projects and see how I've helped businesses transform their digital presence and achieve ambitious goals.",
  stats: [
    { value: "8+", label: "Projects" },
    { value: "4+", label: "Categories" },
    { value: "3+", label: "Years" },
  ],
  filters: ["All", "Web Design", "Mobile App", "Brand Identity", "UI/UX"],
  emptyText: "No projects in this category yet.",
  projects: [
    { title: "Xamify CRM",      image: imgCrm,        category: "UI/UX",          year: "2024", tag: "Live product" },
    { title: "SkillBridge App", image: imgJob,        category: "Mobile App",     year: "2024", tag: "Case study" },
    { title: "Book Shelf",      image: imgNotes,      category: "Brand Identity", year: "2023", tag: "Branding" },
    { title: "BusTrack SaaS",   image: imgQuiz,       category: "Web Design",     year: "2024", tag: "Web app" },
    { title: "Transit Hub",     image: imgAdminMcq,   category: "Mobile App",     year: "2023", tag: "Mobile" },
    { title: "AI Learning",     image: imgExplain,    category: "Web Design",     year: "2024", tag: "Platform" },
    { title: "SkillBridge v2",  image: imgAlgo1,      category: "UI/UX",          year: "2024", tag: "Redesign" },
    { title: "Transit Brand",   image: imgCodeEditor, category: "Brand Identity", year: "2023", tag: "Identity" },
    { title: "Transit Brand",   image: imgAlgo2,      category: "Brand Identity", year: "2023", tag: "Identity" },
    { title: "Transit Brand",   image: imgVv,         category: "Brand Identity", year: "2023", tag: "Identity" },
  ],
};


/* ═══════════════════════════════════════════════════════════════════════════
   10. PORTFOLIO PAGE — TRAINING GALLERY
═══════════════════════════════════════════════════════════════════════════ */
export const TRAINING = {
  eyebrow: "Training gallery",
  title: "Where ideas *come to life*",
  intro: "Immersive workshops, bootcamps, and collaborative sessions engineered for creative excellence.",
  items: [
    { title: "Team Workshop",                 category: "Collaboration", image: t10, description: "Interactive sessions designed to align cross-functional teams and foster creative problem-solving at every layer." },
    { title: "Design Sprint",                 category: "Process",       image: t28, description: "Rapid prototyping and user testing compressed into high-output cycles." },
    { title: "UX Research Lab",               category: "Research",      image: t51, description: "Deep dives into user behaviour patterns and mental models." },
    { title: "Leadership Program",            category: "Management",    image: t11, description: "Empowering the next generation of creative directors and design leads." },
    { title: "Creative Bootcamp",             category: "Skills",        image: t29, description: "Intensive hands-on training for modern design tools and methodologies." },
    { title: "Brand Strategy",                category: "Strategy",      image: t24, description: "Building cohesive brand narratives that resonate and convert." },
    { title: "Digital Marketing Masterclass", category: "Marketing",     image: t16, description: "Advanced strategies for growth, acquisition, and retention in digital channels." },
    { title: "Development",                   category: "Engineering",   image: t27, description: "Bridging the gap between pixel-perfect design and production code." },
    { title: "Motion Design",                 category: "Animation",     image: t1,  description: "Bringing interfaces to life with purposeful, delightful motion." },
  ],
};


/* ═══════════════════════════════════════════════════════════════════════════
   11. PORTFOLIO PAGE — SKILLS (grouped automatically by `category`)
═══════════════════════════════════════════════════════════════════════════ */
export const SKILLS = {
  eyebrow: "Technical arsenal",
  title: "Skills & *mastery*",
  intro: "The languages, frameworks and tools I reach for every day — grouped by where they live in the stack.",
  items: [
    { name: "React",            category: "Frontend", logo: reactLogo },
    { name: "HTML",             category: "Frontend", logo: htmlLogo },
    { name: "CSS",              category: "Frontend", logo: cssLogo },
    { name: "Tailwind CSS",     category: "Frontend", logo: tailwindLogo },
    { name: "Redux",            category: "Frontend", logo: reduxLogo },
    { name: "JavaScript",       category: "Languages", logo: jsLogo },
    { name: "Java",             category: "Languages", logo: javaLogo },
    { name: "Kotlin",           category: "Languages", logo: ktLogo },
    { name: "Spring Boot",      category: "Backend", logo: springbootLogo },
    { name: "Spring Framework", category: "Backend", logo: springLogo },
    { name: "Node.js",          category: "Backend", logo: nodeLogo },
    { name: "Express.js",       category: "Backend", logo: expressLogo },
    { name: "MySQL",            category: "Databases", logo: mysqlLogo },
    { name: "MongoDB",          category: "Databases", logo: mongoLogo },
    { name: "JWT Auth",         category: "Security", logo: jwtLogo },
    { name: "Spring Security",  category: "Security", logo: securityLogo },
    { name: "Android",          category: "Mobile", logo: androidLogo },
    { name: "VS Code",          category: "Tools", logo: vsLogo },
    { name: "IntelliJ IDEA",    category: "Tools", logo: intellijLogo },
    { name: "Eclipse IDE",      category: "Tools", logo: eclipseLogo },
    { name: "Postman",          category: "Tools", logo: postmanLogo },
    { name: "Data Structures",  category: "Core", logo: dataLogo },
  ],
};


/* ═══════════════════════════════════════════════════════════════════════════
   12. PORTFOLIO PAGE — AWARDS & CERTIFICATES
   Every entry needs a `type`: "award" or "certificate".
   • image        photo of the award or a scan of the certificate.
                  Visitors can click it to see it full size.
   • description  optional — a line or two about what it was for.
   • featured     true = large card with the image at the top of the section.
                  Everything is also listed in the searchable list below.
   • credentialId, verifyUrl, skills, category — optional (mostly certificates).

   To add an award:
     1. Put the photo in src/assets/awards/  (create the folder once).
     2. Import it with the other images at the top of this file:
          import bestTrainer from "./assets/awards/best-trainer.webp";
     3. Copy this into `items` below and edit it:
          {
            type: "award",
            title: "Best Trainer of the Year",
            issuer: "Name of the college or company",
            date: "Mar 2025",
            image: bestTrainer,
            description: "Recognised for training 500+ students in Java Full Stack.",
            featured: true,
          },
═══════════════════════════════════════════════════════════════════════════ */
export const AWARDS = {
  eyebrow: "Recognition",
  title: "Awards & *certificates*",
  intro: "Recognition for my work as a developer and trainer, plus industry credentials across cloud, backend, frontend, and DevOps.",
  labels: { all: "All", award: "Awards", certificate: "Certificates" },
  typeNames: { award: "Award", certificate: "Certificate" },
  listTitle: "Full list",
  searchPlaceholder: "Search awards & certificates…",
  emptyText: "Nothing matches your search.",
  verifyLabel: "Verify",
  viewLabel: "View",
  items: [
    /* ── Awards — add yours here (see the template above) ── */

    /* ── Certificates ── */
    { type: "certificate", title: "AWS Certified Developer – Associate", issuer: "Amazon Web Services", date: "Mar 2024", credentialId: "AWS-DEV-2024-7823", category: "Cloud", image: certImage, skills: ["EC2", "S3", "Lambda", "DynamoDB", "CloudFormation"], featured: true, verifyUrl: "" },
    { type: "certificate", title: "Meta React Developer Certificate", issuer: "Meta / Coursera", date: "Jan 2024", credentialId: "META-REACT-9912", category: "Frontend", image: certImage, skills: ["React", "Hooks", "Redux", "Testing", "Performance"], featured: true, verifyUrl: "" },
    { type: "certificate", title: "Spring Professional Certification", issuer: "VMware / Broadcom", date: "Nov 2023", credentialId: "SPR-PRO-2023-4411", category: "Backend", image: certImage, skills: ["Spring Boot", "Spring Security", "JPA", "REST", "Testing"], featured: true, verifyUrl: "" },
    { type: "certificate", title: "Oracle Certified Java SE 17", issuer: "Oracle Corporation", date: "Sep 2023", credentialId: "OCP-JAVA17-6634", category: "Backend", image: certImage, skills: ["Java 17", "OOP", "Collections", "Streams", "Concurrency"], featured: false, verifyUrl: "" },
    { type: "certificate", title: "MongoDB Associate Developer", issuer: "MongoDB University", date: "Jul 2023", credentialId: "MDB-DEV-2023-3391", category: "Database", image: certImage, skills: ["Atlas", "Aggregation", "Indexing", "Transactions", "CRUD"], featured: false, verifyUrl: "" },
    { type: "certificate", title: "Certified Kubernetes Application Developer", issuer: "Cloud Native Computing Foundation", date: "May 2023", credentialId: "CKAD-2023-8821", category: "DevOps", image: certImage, skills: ["Kubernetes", "Pods", "Services", "Deployments", "ConfigMaps"], featured: false, verifyUrl: "" },
    { type: "certificate", title: "Google UX Design Professional", issuer: "Google / Coursera", date: "Feb 2023", credentialId: "GGL-UX-2023-5542", category: "Design", image: certImage, skills: ["Figma", "Wireframing", "Prototyping", "Research", "A/B Testing"], featured: false, verifyUrl: "" },
    { type: "certificate", title: "Node.js Application Developer", issuer: "OpenJS Foundation", date: "Dec 2022", credentialId: "OJSF-NODE-2022-1193", category: "Backend", image: certImage, skills: ["Node.js", "Express", "Streams", "Worker Threads", "Testing"], featured: false, verifyUrl: "" },
  ],
};


/* ═══════════════════════════════════════════════════════════════════════════
   13. PORTFOLIO PAGE — EXPERIENCE & EDUCATION
═══════════════════════════════════════════════════════════════════════════ */
export const EXPERIENCE = {
  eyebrow: "Career journey",
  title: "Experience & *education*",
  intro: "A timeline of roles, projects, and learning milestones.",
  stats: [
    { value: "3+",   label: "Years XP" },
    { value: "200+", label: "Students trained" },
    { value: "10+",  label: "Projects built" },
    { value: "5★",   label: "Client rating" },
  ],
  workTitle: "Work",
  educationTitle: "Education",
  highlightsLabel: "Highlights",
  currentLabel: "Current",
  work: [
    {
      role: "Full Stack Developer & Corporate Trainer",
      company: "Freelance / Independent",
      location: "Coimbatore, Tamil Nadu",
      period: "2022 — Present",
      type: "Full-time",
      current: true,
      summary: "Building enterprise-grade full-stack applications and delivering corporate training programs for colleges and tech institutions across Tamil Nadu.",
      highlights: [
        "Designed and delivered Java Full Stack & MERN training for 200+ students",
        "Built CRM, Job Portal, and Fleet Management platforms from scratch",
        "Implemented JWT, Redis, and RBAC authentication systems",
        "Mentored students into developer roles at product companies",
      ],
      tags: ["React", "Spring Boot", "MySQL", "JWT", "Node.js"],
    },
    {
      role: "Java Full Stack Developer",
      company: "TechBridge Institute",
      location: "Coimbatore, Tamil Nadu",
      period: "2021 — 2022",
      type: "Contract",
      current: false,
      summary: "Developed and maintained web applications using Java Spring Boot backend and React frontend. Led a small team of junior developers on client projects.",
      highlights: [
        "Developed RESTful APIs consumed by React SPA frontends",
        "Integrated payment gateways and third-party services",
        "Conducted internal code reviews and architecture sessions",
        "Reduced API response time by 40% through query optimisation",
      ],
      tags: ["Java", "Spring Boot", "React", "MySQL", "REST API"],
    },
    {
      role: "Android Developer (Intern)",
      company: "Innovate Systems",
      location: "Coimbatore, Tamil Nadu",
      period: "2020 — 2021",
      type: "Internship",
      current: false,
      summary: "Developed Android applications using Kotlin and Java. Worked on UI/UX implementation, REST API integration, and publishing apps to Google Play.",
      highlights: [
        "Built 3 production Android apps using Kotlin",
        "Integrated Retrofit for REST API consumption",
        "Implemented Firebase Auth and Realtime Database",
        "Collaborated with designers on Material Design UI",
      ],
      tags: ["Kotlin", "Android", "Firebase", "Retrofit", "Java"],
    },
  ],
  education: [
    {
      role: "Bachelor of Engineering",
      company: "Anna University",
      field: "Computer Science & Engineering",
      location: "Tamil Nadu, India",
      period: "2017 — 2021",
      type: "7.8 CGPA",
      current: false,
      summary: "Studied core computer science fundamentals including data structures, algorithms, operating systems, and database management systems.",
      highlights: [
        "Major project: Real-Time Bus Tracking System (Android + Firebase)",
        "Participated in national-level hackathons",
        "Coursework: DBMS, Operating Systems, Computer Networks, OOP",
        "Active member of the Coding Club",
      ],
      tags: ["C", "Java", "Python", "DBMS", "Algorithms"],
    },
    {
      role: "Higher Secondary Certificate",
      company: "St. Xavier's Higher Secondary School",
      field: "Computer Science (PCM + CS)",
      location: "Coimbatore, Tamil Nadu",
      period: "2015 — 2017",
      type: "88.4%",
      current: false,
      summary: "Studied Physics, Chemistry, Mathematics, and Computer Science. Developed early programming foundations in C and Java.",
      highlights: [
        "School topper in Computer Science",
        "Built first programs in C and Java",
        "Represented school in district-level Science Exhibition",
      ],
      tags: ["C", "Java", "Mathematics", "Physics"],
    },
  ],
};


/* ═══════════════════════════════════════════════════════════════════════════
   14. CONTACT PAGE
   The form opens the visitor's email app with the message pre-filled and
   addressed to SITE.email — no backend needed.
═══════════════════════════════════════════════════════════════════════════ */
export const CONTACT = {
  eyebrow: "Contact",
  title: "Let's build something *together*.",
  intro: "Have a project or training requirement? I typically respond *within 24 hours*.",
  details: [
    { label: "Email",    value: SITE.email,    href: `mailto:${SITE.email}` },
    { label: "Phone",    value: SITE.phone,    href: SITE.phoneHref },
    { label: "Location", value: SITE.location, href: "" },
  ],
  availability: {
    title: "Currently available",
    text: "Open for full-stack development projects, corporate training programs, and technical mentorship engagements.",
    capacity: 72,                                  // percent, drives the bar
    capacityLabel: "72% capacity available this month",
  },
  socialsLabel: "Elsewhere",
  form: {
    title: "Send a message",
    note: "All fields are required.",
    labels: { name: "Your name", email: "Email address", subject: "What's it about?", message: "Message" },
    placeholders: {
      name: "Jane Doe",
      email: "you@company.com",
      message: "Tell me about your project or training requirement…",
    },
    subjects: ["Project Development", "Corporate Training", "Mentorship", "Collaboration", "Other"],
    errors: {
      name: "Please tell me your name.",
      email: "Please enter a valid email address.",
      subject: "Pick a topic.",
      message: "A short message helps me reply properly.",
    },
    maxLength: 1000,
    submitLabel: "Send message",
    successTitle: "Your email app is ready.",
    successText: "I've pre-filled a message with your details — just hit send. If nothing opened, write to me directly at",
    successReset: "Write another message",
    // Used when someone clicks "Book a workshop" on a training program.
    // {program}, {duration} and {format} are replaced automatically.
    booking: {
      label: "Booking request",
      clear: "Clear",
      subject: "Corporate Training",
      emailSubject: "Workshop booking: {program}",
      message:
        "Hi Stephen,\n\nI'd like to book the {program} program ({duration}, {format}).\n\nOrganisation / college: \nNumber of participants: \nPreferred dates: \nOnline or on-site: \n\nThanks!",
    },
  },
};


/* ═══════════════════════════════════════════════════════════════════════════
   15. FAQ (shown on every page)
═══════════════════════════════════════════════════════════════════════════ */
export const FAQ = {
  eyebrow: "Questions",
  title: "Frequently *asked*",
  intro: "Everything you need to know about working together.",
  prompt: { text: "Can't find your answer?", label: "Ask me directly", to: "/contact" },
  items: [
    {
      question: "What makes your development approach different?",
      answer: "I focus on scalable architecture, clean code structure, security implementation, and performance optimization. My solutions are designed for real-world production environments — not just demos.",
    },
    {
      question: "What is your experience as a corporate trainer?",
      answer: "I have trained students and professionals in Java Full Stack and MERN stack technologies, emphasizing hands-on coding, live project demonstrations, and industry-standard best practices that translate directly to the workplace.",
    },
    {
      question: "Do you design complete system architecture?",
      answer: "Yes. I design RESTful backend architecture, database schemas, authentication flows, and frontend folder structures for maintainable and scalable applications — from day one to production.",
    },
    {
      question: "Can you assist with interview preparation?",
      answer: "Yes, I provide structured guidance in Java, Spring Boot, React, SQL, and system design to help candidates prepare for technical interviews with real confidence.",
    },
    {
      question: "Do you offer end-to-end project development?",
      answer: "Yes, from requirement analysis to deployment — including frontend, backend, database integration, API security, and cloud basics. Every phase, handled professionally.",
    },
  ],
};


/* ═══════════════════════════════════════════════════════════════════════════
   16. CALL-TO-ACTION BANNER (shown on every page, above the footer)
═══════════════════════════════════════════════════════════════════════════ */
export const CTA_BANNER = {
  eyebrow: "Ready to build or upskill?",
  title: "Have a project in *mind?*",
  text: "I specialise in enterprise-grade applications and practical, industry-focused training. Let's collaborate to build powerful software and future-ready developers.",
  points: [
    { title: "Secure, scalable solutions", text: "Enterprise-grade full-stack applications built for performance, resilience, and security at every layer." },
    { title: "Corporate training programs", text: "Practical, industry-focused training in Java Full Stack & MERN for teams ready to level up." },
    { title: "Architecture to deployment", text: "Complete lifecycle support — fundamentals to advanced systems, design to production-grade delivery." },
  ],
  cta: { label: "Start the conversation", to: "/contact" },
  note: "No commitment · just a conversation",
};


/* ═══════════════════════════════════════════════════════════════════════════
   17. OTHERS PAGE — HOBBIES
═══════════════════════════════════════════════════════════════════════════ */
export const HOBBIES = {
  eyebrow: "Beyond the code",
  title: "Things I *love* & do",
  intro: "Life outside the terminal — the creative pursuits, physical habits, and curious obsessions that keep the developer mind sharp.",
  stats: [
    { value: "13",    label: "Hobbies" },
    { value: "6+",    label: "Years exploring" },
    { value: "∞",     label: "Curiosity" },
    { value: "Daily", label: "Practice" },
  ],
  quote: { text: "The best developers are *curious humans first*, engineers second.", by: "Stephen Joseph" },
  items: [
    { title: "Music",            subtitle: "Playing & producing", tag: "Creative",   image: hobbyKeys,  text: "Acoustic guitar on weekends, lo-fi beats during late-night coding sessions." },
    { title: "Gaming",           subtitle: "Strategy & RPG",      tag: "Gaming",     image: hobbyChess, text: "Chess puzzles, city-builders, and the occasional AAA RPG for world-building inspiration." },
    { title: "Puzzles",          subtitle: "Cubes & logic",       tag: "Focus",      image: hobbyCube,  text: "Speed-cubing and logic puzzles — the same pattern-hunting that makes debugging fun." },
    { title: "Photography",      subtitle: "Capturing moments",   tag: "Visual art", image: null,       text: "Street photography and golden-hour portraits. Every frame tells a story that words can't." },
    { title: "Reading",          subtitle: "Books & blogs",       tag: "Learning",   image: null,       text: "Tech deep-dives, system design papers, and the occasional sci-fi novel at midnight." },
    { title: "Open Source",      subtitle: "Building in public",  tag: "Tech",       image: null,       text: "Contributing to developer tools, UI libraries, and writing technical articles." },
    { title: "Travel",           subtitle: "Exploring places",    tag: "Adventure",  image: null,       text: "Hill stations, coastal towns, and hidden cafés — always with a camera in hand." },
    { title: "Specialty Coffee", subtitle: "Brewing & tasting",   tag: "Lifestyle",  image: null,       text: "Pour-over at 6 am. Single-origin beans, precise ratios, the ritual of the first cup." },
    { title: "Digital Art",      subtitle: "UI & illustration",   tag: "Design",     image: null,       text: "Figma explorations, icon sets, and UI concept designs on quiet Sunday afternoons." },
    { title: "Hiking",           subtitle: "Trails & summits",    tag: "Outdoors",   image: null,       text: "Nilgiri trails and Western Ghats treks. Nature resets the developer brain." },
    { title: "Podcasts",         subtitle: "Tech & philosophy",   tag: "Learning",   image: null,       text: "Lex Fridman, Huberman Lab, and every good engineering podcast during commutes." },
    { title: "Cinema",           subtitle: "Films & stories",     tag: "Visual art", image: null,       text: "Christopher Nolan non-linearity, Tamil drama, and anything with great cinematography." },
    { title: "Cycling",          subtitle: "Morning rides",       tag: "Fitness",    image: null,       text: "20 km before sunrise. Clears the mind better than any productivity app." },
  ],
};


/* ═══════════════════════════════════════════════════════════════════════════
   18. OTHERS PAGE — 3D PHOTO GALLERY
═══════════════════════════════════════════════════════════════════════════ */
export const GALLERY = {
  eyebrow: "My journey",
  title: "Trainer & *developer*",
  intro: "My journey as a developer and trainer — building full-stack applications while guiding students to learn and grow in modern technologies.",
  hint: "Drag to explore · click a photo to open",
  images: [
    portraitStudio, t1, t2, t3, t4, t5, t6, t7, t8, t10, t11, t12, t13,
    t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27, t28, t29, t30, t31,
  ].map((src) => ({ src, alt: "Training session" })),
};


/* ═══════════════════════════════════════════════════════════════════════════
   19. FOOTER
═══════════════════════════════════════════════════════════════════════════ */
export const FOOTER = {
  headline: "Let's build something *exceptional.*",
  text: "Open for freelance projects, corporate training, and collaborations.",
  cta: { label: "Get in touch", to: "/contact" },
  columns: { pages: "Pages", platforms: "Platforms", connect: "Connect", local: "Local time" },
  backToTop: "Back to top",
};


/* ═══════════════════════════════════════════════════════════════════════════
   20. 404 PAGE
═══════════════════════════════════════════════════════════════════════════ */
export const NOT_FOUND = {
  eyebrow: "Error 404",
  title: "This page took a *wrong turn*.",
  text: "The link may be broken or the page may have moved.",
  cta: { label: "Back to home", to: "/" },
};


/* ═══════════════════════════════════════════════════════════════════════════
   21. PROJECT DETAIL PAGES
   Used by src/pages/ProjectDetails.jsx, which is not linked in the router yet.
═══════════════════════════════════════════════════════════════════════════ */
const PRIMARY = "#2563eb";
const SECONDARY = "#7c3aed";
const SUCCESS = "#10b981";

export const PROJECT_DETAILS = [
  {
    id: "xamify-crm",
    title: "Xamify CRM",
    subtitle: "Dashboard System",
    tagline: "Enterprise CRM for managing clients, leads, operations and real-time analytics — built for scale.",
    category: "Full Stack Java Application",
    tag: "Enterprise",
    year: "2024",
    status: "Live",
    accent: PRIMARY,
    images: [imgCrm, imgCrm, imgCrm],
    overview: "Xamify is a comprehensive CRM Dashboard built to manage clients, track leads, automate workflows, and provide real-time business intelligence. Designed for mid-to-large enterprise teams with multi-role access and audit-grade security.",
    challenge: "The client needed a single unified platform to replace five disconnected tools — Excel sheets, email chains, a legacy CRM, a manual invoicing system, and a reporting dashboard — all operating in silos with zero shared data.",
    solution: "Designed a modular Spring Boot backend with domain-driven architecture, a React frontend with role-based UI rendering, and a MySQL database with optimised indexing for sub-100ms query performance across 500k+ records.",
    features: [
      "Role-based access control (Admin / Manager / Sales / Viewer)",
      "Real-time analytics dashboard with drill-down charts",
      "Lead lifecycle tracking with automated status updates",
      "JWT + Redis session management with token rotation",
      "Full audit log for every critical action",
      "RESTful API with OpenAPI 3.0 documentation",
      "Email notification system with templating engine",
      "One-click export to PDF / Excel",
    ],
    techStack: [
      { name: "React.js",     Icon: Code2,    accent: "#61dafb", cat: "Frontend" },
      { name: "Spring Boot",  Icon: Layers,   accent: "#6db33f", cat: "Backend"  },
      { name: "MySQL",        Icon: Database, accent: "#00758f", cat: "Database" },
      { name: "JWT + Redis",  Icon: Shield,   accent: "#e11d48", cat: "Security" },
      { name: "REST API",     Icon: Globe,    accent: PRIMARY,   cat: "API"      },
      { name: "Tailwind CSS", Icon: Zap,      accent: "#38bdf8", cat: "Styling"  },
    ],
    metrics: [
      { val: "500k+",  lbl: "Records handled" },
      { val: "<100ms", lbl: "Query latency"   },
      { val: "4",      lbl: "User roles"      },
      { val: "99.9%",  lbl: "Uptime SLA"      },
    ],
    github: "https://github.com/stephenjosephm",
    live: "#",
  },
  {
    id: "skillbridge",
    title: "SkillBridge",
    subtitle: "Job Portal Platform",
    tagline: "Full-stack job portal connecting developers with opportunities via smart skill-based matching.",
    category: "React + Spring Boot",
    tag: "Web App",
    year: "2024",
    status: "Live",
    accent: SECONDARY,
    images: [imgJob, imgJob, imgJob],
    overview: "SkillBridge is a job-matching platform built for developers. Candidates upload profiles, take skill assessments, and get matched with roles posted by verified companies — no more spray-and-pray applications.",
    challenge: "Traditional portals required candidates to manually apply to hundreds of roles while companies drowned in unfiltered applications. Both sides wasted enormous time with zero quality filtering.",
    solution: "Built a smart matching engine using skill-tag intersection scoring, a Spring Boot REST backend, lazy-loading React SPA, and a JWT-secured multi-tenant auth system with separate Candidate and Recruiter dashboards.",
    features: [
      "Smart skill-based job-matching algorithm",
      "Separate dashboards for candidates and recruiters",
      "Resume upload and auto-parsing",
      "Kanban-style application pipeline tracker",
      "Company profile and job-posting management",
      "Real-time notification system",
      "Admin panel for platform moderation",
    ],
    techStack: [
      { name: "React.js",    Icon: Code2,    accent: "#61dafb", cat: "Frontend" },
      { name: "Spring Boot", Icon: Layers,   accent: "#6db33f", cat: "Backend"  },
      { name: "MySQL",       Icon: Database, accent: "#00758f", cat: "Database" },
      { name: "JWT Auth",    Icon: Shield,   accent: "#e11d48", cat: "Security" },
      { name: "REST API",    Icon: Globe,    accent: PRIMARY,   cat: "API"      },
    ],
    metrics: [
      { val: "3",   lbl: "User roles"       },
      { val: "95%", lbl: "Match accuracy"   },
      { val: "2×",  lbl: "Hire rate lift"   },
      { val: "40%", lbl: "Time-to-hire cut" },
    ],
    github: "https://github.com/stephenjosephm",
    live: "#",
  },
  {
    id: "dev-portfolio",
    title: "Developer",
    subtitle: "Portfolio Site",
    tagline: "Personal developer portfolio built with React, Tailwind CSS, and Framer Motion.",
    category: "MERN / React Application",
    tag: "Portfolio",
    year: "2023",
    status: "Live",
    accent: SUCCESS,
    images: [imgProfile, imgProfile, imgProfile],
    overview: "A performant, animated personal portfolio showcasing projects, skills, and corporate training work. Designed with a dark-luxury aesthetic and fully responsive across all breakpoints.",
    challenge: "Most developer portfolios feel generic — cookie-cutter templates with identical layouts. The goal was a distinctive, memorable experience that communicates both technical depth and design sensibility.",
    solution: "Committed to a dark-luxury editorial aesthetic with Syne + JetBrains Mono typography, magnetic 3D tilt interactions, per-section accent colours, and cohesive atmospheric backgrounds across every section.",
    features: [
      "Magnetic 3D tilt interactions on all cards",
      "Animated bento grid hero section",
      "Skills bento with per-skill accent colours",
      "Portfolio section with filter and reveal system",
      "FAQ, Testimonials, and Services sections",
      "Fully responsive across mobile, tablet, desktop",
      "Optimised performance — Lighthouse 95+",
    ],
    techStack: [
      { name: "React.js",      Icon: Code2,  accent: "#61dafb", cat: "Frontend"  },
      { name: "Tailwind CSS",  Icon: Zap,    accent: "#38bdf8", cat: "Styling"   },
      { name: "Framer Motion", Icon: Star,   accent: SUCCESS,   cat: "Animation" },
      { name: "Vite",          Icon: Layers, accent: "#f59e0b", cat: "Build"     },
    ],
    metrics: [
      { val: "95+",  lbl: "Lighthouse score" },
      { val: "100%", lbl: "Responsive"       },
      { val: "8+",   lbl: "Sections"         },
      { val: "0ms",  lbl: "CLS score"        },
    ],
    github: "https://github.com/stephenjosephm",
    live: "#",
  },
];
