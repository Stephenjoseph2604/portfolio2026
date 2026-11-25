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
// import t13 from "./assets/training/t13.webp";
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
import t34 from "./assets/training/t34.png";
import t35 from "./assets/training/t35.png";
import t51 from "./assets/training/t51.webp";

/* ── Images: projects (covers + screenshots) ─────────────────────────────── */
import imgCrm from "./assets/projects/xamify.webp";
import imgJob from "./assets/projects/skillbridge.webp";
import imgJobList from "./assets/projects/jobportal.webp";
import imgJobProfile from "./assets/projects/profile.webp";
import imgMcqHome from "./assets/projects/homemcq.webp";
import imgMcqQuiz from "./assets/projects/quiz.webp";
import imgMcqAdmin from "./assets/projects/adminmcq.webp";
import imgMcqStudents from "./assets/projects/stmcq.webp";
import imgContestHome from "./assets/projects/code1.webp";
import imgContestStart from "./assets/projects/code2.webp";
import imgContestEditor from "./assets/projects/codeeditor.webp";
import imgAlgo1 from "./assets/projects/algo1.webp";
import imgAlgo2 from "./assets/projects/algo2.webp";
import imgExplain from "./assets/projects/explain.webp";
import imgExplain2 from "./assets/projects/explain2.webp";
import imgNotes1 from "./assets/projects/notes1.webp";
import imgNotes2 from "./assets/projects/notes2.webp";
import imgBus3 from "./assets/projects/bus3.webp";
import imgBus10 from "./assets/projects/bus10.webp";
import imgBooks from "./assets/projects/book3.webp";
import imgVv from "./assets/projects/vv.webp";
import imgPassword from "./assets/projects/password3.webp";
import imgStudentDash from "./assets/projects/student6.webp";
import imgOldPortfolio from "./assets/projects/porfolio9.webp";

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
  email: "sj9824384@gmail.com",
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
  stack: ["Java", "Spring Boot", "Java Script", "React", "Node.js", "MySQL", "MongoDB", "Kotlin", "Type Script", "Python"],
  portrait: { src: portraitStudio, alt: "Portrait of Stephen Joseph", caption: " Developer" },
  inset:    { src: classroomPhoto, alt: "Stephen Joseph leading a classroom session", caption: " Trainer" },
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
   Picks projects from the Portfolio list (section 9) by slug.
   The first one is shown large; the rest sit two per row.
═══════════════════════════════════════════════════════════════════════════ */
export const SELECTED_WORK = {
  eyebrow: "Selected work",
  title: "Built for *production*",
  intro: "A few projects I'm proud of — real systems, real users, real constraints.",
  action: { label: "View all projects", to: "/portfolio" },
  viewLabel: "View project",   // text in the hover pill
  // Slugs from PORTFOLIO.projects (section 9). The first one is shown large.
  featured: ["xamify-crm", "skillbridge", "developer-portfolio"],
}


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
    { value: "2000+", label: "Trainees" },
    { value: "10+",  label: "Projects" },
    { value: "3+",   label: "Years XP" },
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
   9. PORTFOLIO PAGE — ALL PROJECTS (+ each project's detail page)
   Every project gets its own page at /portfolio/<slug>.
   Only `slug`, `title`, `category` and `cover` are required — every other
   field is optional, and any section you leave out simply isn't shown.

   • slug         the URL name: lowercase-with-dashes, unique
   • category     must match one of `filters` (except "All")
   • type         one-line description shown under the title
   • links        { live: "https://…", github: "https://…" } — "" hides a button
   • stack        technologies used (shown as tags)
   • overview / challenge / solution   paragraphs; *word* adds a highlight
   • features     bullet list
   • results      big numbers: [{ value: "40%", label: "Faster" }]
   • screenshots  gallery — import images at the top of this file:
                  [{ src: myImage, caption: "Admin dashboard" }]
                  Visitors can click a screenshot to view it full size.
═══════════════════════════════════════════════════════════════════════════ */
export const PORTFOLIO = {
  eyebrow: "Portfolio",
  title: "Things I've *built*",
  intro: "Explore my latest projects and see how I've helped businesses transform their digital presence and achieve ambitious goals.",
  stats: [
    { value: "13", label: "Projects" },
    { value: "4",  label: "Categories" },
    { value: "3+", label: "Years" },
  ],
  filters: ["All", "Full Stack", "EdTech", "Web Apps", "Websites & Tools"],
  emptyText: "No projects in this category yet.",
  viewLabel: "View project",

  // Labels used on every project detail page
  detail: {
    back: "All projects",
    eyebrow: "Case study",
    meta: { type: "Type", year: "Year", role: "Role", client: "Client", duration: "Duration", status: "Status" },
    sections: {
      overview: "Overview",
      challenge: "The challenge",
      solution: "The solution",
      features: "Key features",
      stack: "Tech stack",
      results: "Results",
      screenshots: "Screenshots",
    },
    live: "Visit live site",
    github: "View source",
    prev: "Previous project",
    next: "Next project",
    contact: { text: "Want something like this built — or taught to your team?", label: "Start a conversation", to: "/contact" },
    notFound: { title: "This project *doesn't exist*.", text: "It may have been renamed or removed.", label: "See all projects" },
  },

  // projects: [
  //   {
  //     slug: "xamify-crm",
  //     title: "Xamify",
  //     type: "Training management CRM",
  //     category: "Full Stack",
  //     year: "2024",
  //     status: "Live",
  //     cover: imgCrm,
  //     summary: "An admin dashboard for running a training institute — trainers, students, colleges, batches, courses, quizzes and payments in one place.",
  //     links: { live: "", github: "" },
  //     stack: ["Spring Boot", "React", "MySQL", "JWT"],
  //     overview: "Xamify brings the day-to-day operations of a training institute into a *single dashboard*. Admins see active students, running and completed batches, courses and quizzes at a glance, and manage everything from one sidebar.",
  //     features: [
  //       "At-a-glance dashboard: active students, active and completed batches, courses and quizzes",
  //       "Trainer profiles with contact details",
  //       "Student, college and batch management",
  //       "Courses, assignments and attendance tracking",
  //       "Quiz scheduling with an upcoming-quizzes panel",
  //       "Messages, notifications and payments modules",
  //     ],
  //     screenshots: [{ src: imgCrm, caption: "Admin dashboard" }],
  //   },
  //   {
  //     slug: "skillbridge",
  //     title: "SkillBridge",
  //     type: "Job portal platform",
  //     category: "Full Stack",
  //     year: "2024",
  //     status: "Live",
  //     cover: imgJob,
  //     summary: "Full-stack job portal connecting developers with opportunities via smart skill-based matching.",
  //     links: { live: "", github: "" },
  //     stack: ["React", "Spring Boot", "MySQL", "JWT Auth", "REST API"],
  //     overview: "SkillBridge is a job-matching platform built for developers. Candidates upload profiles, take skill assessments, and get matched with roles posted by verified companies — no more spray-and-pray applications.",
  //     challenge: "Traditional portals required candidates to manually apply to hundreds of roles while companies drowned in unfiltered applications. Both sides wasted enormous time with zero quality filtering.",
  //     solution: "Built a smart matching engine using skill-tag intersection scoring, a Spring Boot REST backend, lazy-loading React SPA, and a JWT-secured multi-tenant auth system with separate Candidate and Recruiter dashboards.",
  //     features: [
  //       "Smart skill-based job-matching algorithm",
  //       "Separate dashboards for candidates and recruiters",
  //       "Resume upload and auto-parsing",
  //       "Kanban-style application pipeline tracker",
  //       "Company profile and job-posting management",
  //       "Real-time notification system",
  //       "Admin panel for platform moderation",
  //     ],
  //     results: [
  //       { value: "3",   label: "User roles" },
  //       { value: "95%", label: "Match accuracy" },
  //       { value: "2×",  label: "Hire rate lift" },
  //       { value: "40%", label: "Time-to-hire cut" },
  //     ],
  //     screenshots: [
  //       { src: imgJob, caption: "Job search with filters — dark theme" },
  //       { src: imgJobList, caption: "Job search — light theme" },
  //       { src: imgJobProfile, caption: "Candidate profile & applications" },
  //     ],
  //   },
  //   {
  //     slug: "xplore-mcq-platform",
  //     title: "Xplore MCQ Platform",
  //     type: "Online assessment platform",
  //     category: "EdTech",
  //     year: "2026",
  //     cover: imgMcqHome,
  //     summary: "Test your skills with comprehensive MCQs across technical, aptitude, logical and English topics.",
  //     links: { live: "", github: "" },
  //     features: [
  //       "Topic-wise tests: technical, aptitude, logical and English",
  //       "Timed quizzes with a question navigator",
  //       "Admin dashboard for categories, questions, quizzes and students",
  //       "Student management with search and department filters",
  //     ],
  //     screenshots: [
  //       { src: imgMcqHome, caption: "Landing page" },
  //       { src: imgMcqQuiz, caption: "Quiz with question navigator" },
  //       { src: imgMcqAdmin, caption: "Admin dashboard" },
  //       { src: imgMcqStudents, caption: "Student management" },
  //     ],
  //   },
  //   {
  //     slug: "xplore-coding-contest",
  //     title: "Xplore Coding Contest 2026",
  //     type: "Coding contest platform",
  //     category: "EdTech",
  //     year: "2026",
  //     cover: imgContestStart,
  //     summary: "Solve real-world coding challenges using your own logic, speed and problem-solving skills.",
  //     links: { live: "", github: "" },
  //     features: [
  //       "In-browser code editor beside the problem statement",
  //       "Time-bound contest rounds",
  //       "Skill-based challenges with examples and test cases",
  //     ],
  //     screenshots: [
  //       { src: imgContestHome, caption: "Contest welcome screen" },
  //       { src: imgContestStart, caption: "Start screen" },
  //       { src: imgContestEditor, caption: "Problem & code editor" },
  //     ],
  //   },
  //   {
  //     slug: "algoprep",
  //     title: "AlgoPrep",
  //     type: "Interview preparation platform",
  //     category: "EdTech",
  //     cover: imgAlgo1,
  //     summary: "Ace interviews, land the job — practise top interview coding questions with detailed solutions and approaches.",
  //     links: { live: "", github: "" },
  //     screenshots: [
  //       { src: imgAlgo1, caption: "Landing page" },
  //       { src: imgAlgo2, caption: "Problem list by difficulty" },
  //     ],
  //   },
  //   {
  //     slug: "explain-it-back",
  //     title: "Explain It Back",
  //     type: "AI-powered learning app",
  //     category: "EdTech",
  //     cover: imgExplain,
  //     summary: "Master any subject by teaching it back to AI — it spots the gaps in your understanding and helps you learn faster.",
  //     links: { live: "", github: "" },
  //     features: [
  //       "Explain a concept in your own words",
  //       "AI analysis report with an understanding score",
  //       "See what you got right and what you missed",
  //     ],
  //     screenshots: [
  //       { src: imgExplain, caption: "Landing page" },
  //       { src: imgExplain2, caption: "Explanation & analysis report" },
  //     ],
  //   },
  //   {
  //     slug: "notesshare",
  //     title: "NotesShare",
  //     type: "Notes sharing platform",
  //     category: "Web Apps",
  //     cover: imgNotes1,
  //     summary: "A platform where admins share educational notes and students access them instantly — download, learn and excel.",
  //     links: { live: "", github: "" },
  //     screenshots: [
  //       { src: imgNotes1, caption: "Landing page" },
  //       { src: imgNotes2, caption: "Notes library" },
  //     ],
  //   },
  //   {
  //     slug: "busbuddy",
  //     title: "BusBuddy",
  //     type: "Bus ticket booking",
  //     category: "Web Apps",
  //     cover: imgBus10,
  //     summary: "Bus ticket booking with seat selection and journey details.",
  //     links: { live: "", github: "" },
  //     screenshots: [
  //       { src: imgBus10, caption: "Seat selection" },
  //       { src: imgBus3, caption: "Services overview" },
  //     ],
  //   },
  //   {
  //     slug: "student-dashboard",
  //     title: "Student Performance Dashboard",
  //     type: "Academic analytics",
  //     category: "Web Apps",
  //     cover: imgStudentDash,
  //     summary: "A student's attendance, academic scores and assignment status at a glance.",
  //     links: { live: "", github: "" },
  //     screenshots: [{ src: imgStudentDash, caption: "Performance dashboard" }],
  //   },
  //   {
  //     slug: "vergevector",
  //     title: "VergeVector",
  //     type: "Marketing agency website",
  //     category: "Websites & Tools",
  //     cover: imgVv,
  //     summary: "Website for a B2B marketing-automation agency — Marketo-first marketing automation that turns intent into revenue.",
  //     links: { live: "", github: "" },
  //     screenshots: [{ src: imgVv, caption: "Home page" }],
  //   },
  //   {
  //     slug: "sj-pagehub",
  //     title: "SJ PageHub",
  //     type: "Book catalogue",
  //     category: "Websites & Tools",
  //     cover: imgBooks,
  //     summary: "A book catalogue listing titles, authors, book numbers and prices.",
  //     links: { live: "", github: "" },
  //     screenshots: [{ src: imgBooks, caption: "Catalogue" }],
  //   },
  //   {
  //     slug: "password-generator",
  //     title: "Strong Password Generator",
  //     type: "Utility tool",
  //     category: "Websites & Tools",
  //     cover: imgPassword,
  //     summary: "Generate strong passwords with a custom length and character options.",
  //     links: { live: "", github: "" },
  //     screenshots: [{ src: imgPassword, caption: "Generator" }],
  //   },
  //   {
  //     slug: "developer-portfolio",
  //     title: "Developer Portfolio",
  //     type: "Personal portfolio website (previous version)",
  //     category: "Websites & Tools",
  //     year: "2023",
  //     status: "Archived",
  //     cover: imgOldPortfolio,
  //     summary: "Personal developer portfolio built with React, Tailwind CSS, and Framer Motion.",
  //     links: { live: "", github: "" },
  //     stack: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
  //     overview: "A performant, animated personal portfolio showcasing projects, skills, and corporate training work. Designed with a dark-luxury aesthetic and fully responsive across all breakpoints.",
  //     challenge: "Most developer portfolios feel generic — cookie-cutter templates with identical layouts. The goal was a distinctive, memorable experience that communicates both technical depth and design sensibility.",
  //     solution: "Committed to a dark-luxury editorial aesthetic with Syne + JetBrains Mono typography, magnetic 3D tilt interactions, per-section accent colours, and cohesive atmospheric backgrounds across every section.",
  //     features: [
  //       "Magnetic 3D tilt interactions on all cards",
  //       "Animated bento grid hero section",
  //       "Skills bento with per-skill accent colours",
  //       "Portfolio section with filter and reveal system",
  //       "FAQ, Testimonials, and Services sections",
  //       "Fully responsive across mobile, tablet, desktop",
  //     ],
  //     screenshots: [{ src: imgOldPortfolio, caption: "Home page" }],
  //   },
  // ],
    projects: [
    {
      slug: "unified-field-crm",
      title: "Unified Field CRM",
      type: "Multi-platform enterprise CRM",
      category: "Full Stack",
      year: "2026",
      status: "Live",
      cover: imgCrm,
      summary: "One enterprise application that replaces three separate tools: employee tracking, customer management and accounting, with GPS attendance, quotations, invoicing and finance built in.",
      links: { live: "", github: "" },
      stack: ["React", "Node.js", "Express", "MySQL", "GPS & Maps API", "MilesWeb"],
      overview: "A client was running its business across *three disconnected platforms*: Trackolap for employee attendance and tracking, Odoo for customers, and Tally for financial work. I brought all of it into a *single enterprise application* with one login, one database and one dashboard.",
      challenge: "Attendance and field tracking lived in Trackolap, customer records in Odoo, and accounts in Tally. Staff switched between tools all day, data was duplicated, and management had no single view of field activity, enquiries, quotations and revenue.",
      solution: "Built a unified React and Node.js platform on MySQL that brings the three systems' workflows into one app. It adds GPS-based login and logout, live field-visit tracking, enquiry-to-quotation-to-invoice flow, and financial management, and it is hosted on MilesWeb.",
      features: [
        "GPS-based employee login and logout with location capture",
        "Field-visit tracking with GPS check-ins",
        "Attendance management for the whole workforce",
        "Customer and enquiry management",
        "Quotation creation and tracking",
        "Invoice generation",
        "Financial management in the same application",
        "Integrations with third-party services and libraries",
      ],
      results: [
        { value: "3→1", label: "Tools replaced" },
        { value: "GPS", label: "Live field tracking" },
        { value: "1",   label: "Single login" },
      ],
      screenshots: [
        { src: imgCrm, caption: "Dashboard" },
        { src: imgJob, caption: "Attendance & GPS tracking" },
        { src: imgStudentDash, caption: "Quotations & invoices" },
      ],
    },
    {
      slug: "xplore-360",
      title: "Xplore 360",
      type: "CRM & institute management platform",
      category: "Full Stack",
      year: "2026",
      status: "Live",
      cover: imgCrm,
      summary: "A complete CRM and institute management system covering leads, sales, students, batches, placements, finance and HR, replacing Excel sheets and paper records.",
      links: { live: "", github: "" },
      stack: ["React", "Node.js", "Express", "MySQL", "Email Integration", "MilesWeb"],
      overview: "Xplore 360 runs an entire training institute from *one system*. Leads, sales, students, batches, staff and finances now live in a single platform, with analytics on every module.",
      challenge: "The institute tracked leads, students and sales in Excel sheets and hard copies. Information was scattered, hard to search and impossible to analyse, and there was no clear picture of revenue, attendance or placements.",
      solution: "Designed a role-based platform with a clean, modern UI and analytics in every module. Registrations trigger automatic emails with the student's details, invoices are generated in the system, and access is controlled by customised roles and permissions. Hosted on MilesWeb.",
      features: [
        "Lead management and sales analysis",
        "Student registration with automatic email confirmation",
        "Invoice generation and revenue management",
        "Institute and batch management",
        "Attendance and holiday management",
        "Placement management",
        "Customised roles and access control",
        "Finance management",
        "Employee and HR management",
        "Analytics and reports across every module",
      ],
      results: [
        { value: "Excel→App", label: "Paper to digital" },
        { value: "10+",       label: "Modules in one app" },
        { value: "Custom",    label: "Role-based access" },
      ],
      screenshots: [
        { src: imgCrm, caption: "Admin dashboard" },
        { src: imgMcqStudents, caption: "Student management" },
        { src: imgJobList, caption: "Lead & sales analysis" },
      ],
    },
    {
      slug: "xamify",
      title: "Xamify",
      type: "Online test & live quiz platform",
      category: "EdTech",
      year: "2026",
      status: "Live",
      cover: imgMcqHome,
      summary: "An enterprise platform for online tests with anti-cheat detection, plus live multi-team quiz games with real-time scoreboards.",
      links: { live: "", github: "" },
      stack: ["React", "Node.js", "Express", "MySQL", "WebSockets", "MilesWeb"],
      overview: "Xamify has two parts: a *secure online test engine* for colleges and companies, and a *live quiz game* where several teams play at once. Everything needed to run an assessment, from creating it to analysing results, is included.",
      challenge: "Running online tests fairly is hard: candidates switch tabs, resize windows or look things up. Organisers also needed engaging live quizzes and results they could analyse without manual work.",
      solution: "Added anti-cheat detection for tab switching and screen resizing, with the events recorded in reports. A WebSocket-based quiz engine lets multiple teams compete live with an instant scoreboard, and results export to Excel for easy analysis. Hosted on MilesWeb.",
      features: [
        "Online tests with timers and question navigation",
        "Anti-cheat detection: tab switching and screen resize",
        "Live quiz game for multiple teams at the same time",
        "Real-time scoreboards over WebSockets",
        "Report management and result analysis",
        "Excel report downloads",
        "Admin controls for quizzes, questions and students",
      ],
      results: [
        { value: "Live",  label: "Multi-team quiz" },
        { value: "Real-time", label: "Scoreboards" },
        { value: "Excel", label: "Report export" },
      ],
      screenshots: [
        { src: imgMcqHome, caption: "Landing page" },
        { src: imgMcqQuiz, caption: "Test with question navigator" },
        { src: imgMcqAdmin, caption: "Admin dashboard" },
        { src: imgCrm, caption: "Live scoreboard" },
      ],
    },
    {
      slug: "vergevector",
      title: "VergeVector",
      type: "Sales web application",
      category: "Web Apps",
      year: "2026",
      status: "Live",
      cover: imgVv,
      summary: "A fully responsive sales web application for a marketing-automation client, with email integration and an admin dashboard.",
      links: { live: "", github: "" },
      stack: ["React", "Node.js", "Express", "MongoDB Atlas", "Netlify", "Render"],
      overview: "VergeVector is a client-facing web application built to support sales. It combines a polished, fully responsive front end with *email integration* and an *admin dashboard* for managing the business side.",
      solution: "Built with React, Node.js and Express on MongoDB Atlas. The front end is deployed on Netlify and the backend on Render, with a custom domain purchased through GoDaddy.",
      features: [
        "Fully responsive design on mobile, tablet and desktop",
        "Email integration for enquiries and notifications",
        "Admin dashboard for managing the application",
        "Custom domain with production hosting",
      ],
      screenshots: [
        { src: imgVv, caption: "Home page" },
        { src: imgStudentDash, caption: "Admin dashboard" },
      ],
    },
    {
      slug: "explain-it-back",
      title: "Explain It Back",
      type: "AI-powered learning app",
      category: "EdTech",
      year: "2026",
      status: "Live",
      cover: imgExplain,
      summary: "Explain a concept in your own words and get instant AI analysis showing what you understood and what you missed.",
      links: { live: "", github: "" },
      stack: ["React", "Node.js", "Express", "Google Gemini AI", "Netlify", "Render"],
      overview: "Explain It Back turns learning around: you *teach the concept back*, and AI reviews your explanation. It shows what you got right, where the gaps are, and gives quick, clear feedback.",
      solution: "Integrated the Google Gemini API through a Node.js and Express backend to analyse each explanation and return a structured report. The React front end is deployed on Netlify and the backend on Render.",
      features: [
        "Explain any concept in your own words",
        "Instant analysis powered by Gemini AI",
        "Clear view of what you got right and what you missed",
        "Quick, simple interface built for fast feedback",
      ],
      screenshots: [
        { src: imgExplain, caption: "Landing page" },
        { src: imgExplain2, caption: "Explanation & analysis report" },
      ],
    },
    {
      slug: "student-management-system",
      title: "Student Management System",
      type: "College management system",
      category: "EdTech",
      year: "2026",
      status: "Live",
      cover: imgStudentDash,
      summary: "A system for colleges to manage staff and students, exam marks, assignments, mark analysis and upcoming events.",
      links: { live: "", github: "" },
      overview: "A single system where colleges manage *staff, students, exams and assignments*, with mark analysis and event updates built in.",
      features: [
        "Staff and student management",
        "Exam marks entry and management",
        "Assignment management",
        "Student mark analysis",
        "Upcoming event updates",
      ],
      screenshots: [
        { src: imgStudentDash, caption: "Performance dashboard" },
        { src: imgMcqStudents, caption: "Student management" },
      ],
    },
  ],
};


/* ═══════════════════════════════════════════════════════════════════════════
   10. PORTFOLIO PAGE — TRAINING GALLERY
═══════════════════════════════════════════════════════════════════════════ */
/* ═══════════════════════════════════════════════════════════════════════════
   10. PORTFOLIO PAGE — TRAINING GALLERY
   One card per college / company engagement.
   • title / category / image / description  → used by the current gallery
   • college / location / duration           → extra data, available if you
                                               want to show them separately
═══════════════════════════════════════════════════════════════════════════ */
export const TRAINING = {
  eyebrow: "Training gallery",
  title: "Where ideas *come to life*",
  intro: "Workshops, bootcamps and long-term programs delivered at colleges and companies across Tamil Nadu and Karnataka — from one-day sessions to three-month courses.",
  items: [
    {
      title: "MERN Stack Development",
      category: "3 Months",
      college: "Maharaja Institute of Technology",
      location: "Mysuru, Karnataka",
      duration: "3 months",
      image: t10,
      description: "Maharaja Institute of Technology, Mysuru, Karnataka · 3 months. A long-term, project-based program covering MongoDB, Express, React and Node.js, from fundamentals to a deployed full-stack application.",
    },
    {
      title: "MERN Stack Development",
      category: "1 Month",
      college: "Karunanidhi Institute of Technology",
      location: "Coimbatore, Tamil Nadu",
      duration: "1 month",
      image: t11,
      description: "Karunanidhi Institute of Technology, Coimbatore, Tamil Nadu · 1 month. Hands-on MERN training where students build and ship a complete web application.",
    },
    {
      title: "Java Full Stack Workshop",
      category: "1 Week",
      college: "Akshaya College of Engineering",
      location: "Coimbatore, Tamil Nadu",
      duration: "1 week",
      image: t28,
      description: "Akshaya College of Engineering, Coimbatore, Tamil Nadu · 1 week. A weekday workshop on Java, Spring Boot and React with live coding and a mini project.",
    },
    {
      title: "Web Development",
      category: "1 Week",
      college: "Akshaya College of Engineering",
      location: "Coimbatore, Tamil Nadu",
      duration: "1 week",
      image: t29,
      description: "Akshaya College of Engineering, Coimbatore, Tamil Nadu · 1 week. Responsive websites with HTML, CSS and JavaScript, built step by step.",
    },
    {
      title: "MySQL & RDBMS",
      category: "1 Week",
      college: "Kongu Nadu Engineering College",
      location: "Namakkal, Tamil Nadu",
      duration: "1 week",
      image: t24,
      description: "Kongu Nadu Engineering College, Namakkal, Tamil Nadu · 1 week. Relational database concepts, SQL queries, joins and schema design with practical exercises.",
    },
    {
      title: "Resume & Portfolio Building",
      category: "1 Week",
      college: "Xplore IT Corp",
      location: "Coimbatore, Tamil Nadu",
      duration: "1 week",
      image: t16,
      description: "Xplore IT Corp, Coimbatore, Tamil Nadu · 1 week (weekdays). Helping learners craft job-ready resumes and build personal portfolio websites.",
    },
    {
      title: "Coding Contest",
      category: "1 Week",
      college: "Xplore IT Corp",
      location: "Coimbatore, Tamil Nadu",
      duration: "1 week",
      image: t27,
      description: "Xplore IT Corp, Coimbatore, Tamil Nadu · 1 week. A week-long coding contest with timed rounds and problem-solving challenges.",
    },
    {
      title: "Android Development Workshop",
      category: "1 Day",
      college: "PSG College of Arts and Science",
      location: "Coimbatore, Tamil Nadu",
      duration: "1 day",
      image: t1,
      description: "PSG College of Arts and Science, Coimbatore, Tamil Nadu · 1 day. An introduction to building Android apps, from setup to a working first app.",
    },
    {
      title: "MongoDB Workshop",
      category: "1 Day",
      college: "Karpagam College of Engineering",
      location: "Coimbatore, Tamil Nadu",
      duration: "1 day",
      image: t51,
      description: "Karpagam College of Engineering, Coimbatore, Tamil Nadu · 1 day. NoSQL fundamentals, document modelling and CRUD operations in MongoDB.",
    },
    {
      title: "Prompt Engineering",
      category: "1 Day",
      college: "Rathinam College of Engineering",
      location: "Coimbatore, Tamil Nadu",
      duration: "1 day",
      image: t12,
      description: "Rathinam College of Engineering, Coimbatore, Tamil Nadu · 1 day. Practical techniques for writing effective prompts and using AI tools in study and development.",
    },
    {
      title: "Career Guidance Workshop",
      category: "1 Day",
      college: "Sri Ranganathar Institute of Engineering and Technology",
      location: "Coimbatore, Tamil Nadu",
      duration: "1 day",
      image: t17,
      description: "Sri Ranganathar Institute of Engineering and Technology, Coimbatore, Tamil Nadu · 1 day. Guidance on career paths, skills to build and preparing for placements.",
    },
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
    { value: "2000+", label: "Students trained" },
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
   The form sends straight to your inbox through EmailJS (see .env.example).
   The email subject becomes "Portfolio Contact Form: <title>", where title is
   the chosen topic — or "Workshop booking: <program>" for bookings.
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
    sendingLabel: "Sending…",
    successTitle: "Message sent.",
    successText: "Thanks for reaching out — your message is in my inbox and I'll reply within 24 hours. Anything urgent? Write to me directly at",
    successReset: "Write another message",
    sendError: "Sorry — your message couldn't be sent. Please try again in a moment, or email me directly at",
    rateLimited: "Your message was just sent — please wait half a minute before sending another.",
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
    portraitStudio, t1, t2, t3, t4, t5, t6, t7, t8, t10, t11, t12, 
    t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27, t28, t29, t30, t31, t34, t35, t51
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
   20a. LAUNCH LOADER (shown before the site appears)
   • enabled         false turns the loader off completely
   • durationMs      how long the counter runs from 0 to 100. The curtain lift
                     adds about 1.5s, so 5000 ≈ a 6.5-second intro in total.
   • oncePerSession  true = only on the first visit in a browser tab;
                     false = on every full page load / refresh
   • messages        status lines shown one after another while it loads
   Visitors can skip it, and people who prefer reduced motion get a short version.
═══════════════════════════════════════════════════════════════════════════ */
export const LOADER = {
  enabled: true,
  durationMs: 5000,
  oncePerSession: true,
  label: "Launching portfolio",
  ring: "Launching portfolio • Developer • Trainer • ",
  messages: [
    "Initialising workspace",
    "Compiling projects",
    "Loading training programs",
    "Polishing the details",
    "Ready for launch",
  ],
  skipLabel: "Skip intro",
};


/* ═══════════════════════════════════════════════════════════════════════════
   20b. COMING SOON PAGE
   Shown instead of the whole site when SITE_LIVE is false in src/App.jsx.
   • launchDate: ISO date with your time zone. Leave "" to hide the countdown.
   • progress:   0–100, drives the launch progress bar (set null to hide).
   • The notify form opens the visitor's email app addressed to SITE.email.
═══════════════════════════════════════════════════════════════════════════ */
export const COMING_SOON = {
  pageTitle: "Stephen Joseph — Coming soon",
  eyebrow: "New portfolio · Coming soon",
  title: "Something *worth the wait* is on its way.",
  text: "I'm putting the finishing touches on a new home for my work as a full-stack developer and corporate trainer. Projects, programs and case studies — launching shortly.",
  launchDate: "2026-12-15T10:00:00+05:30",
  countdownLabels: { days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds" },
  launchedText: "Launching any moment now.",
  progress: 85,
  progressLabel: "Build progress",
  ring: "Portfolio launching soon • Developer • Trainer • ",
  notify: {
    label: "Get notified at launch",
    placeholder: "you@company.com",
    button: "Notify me",
    error: "Please enter a valid email address.",
    emailSubject: "Notify me when your portfolio launches",
    emailBody: "Hi Stephen,\n\nPlease let me know when your new portfolio is live.\n\nMy email: {email}",
    success: "Thanks! Your email app has opened — just hit send and I'll let you know at launch.",
  },
  directLabel: "Need something now? Write to me at",
};
