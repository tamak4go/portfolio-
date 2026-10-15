/**
 * ============================================================
 *  EDIT THIS FILE to make the site yours. Nothing else in the
 *  project needs to change for basic customization.
 * ============================================================
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- global consumed by main.js via <script> tag, not a module import
const PORTFOLIO = {
  // ---- Identity ----
  initials: "TQT",              // shown in the top-left logo mark
  name: "Trịnh Quang Tâm",
  verified: true,               // shows a little checkmark badge next to your name, like the video
  role: "Frontend Developer",
  roleTagline: "React, Next.js, TypeScript & ASP.NET Core", // shown after the em-dash next to role
  avatarText: "TQT",            // fallback initials avatar (used until you swap in assets/avatar.jpg)

  socials: {
    github: "https://github.com/tamak4go",
    linkedin: "https://www.linkedin.com/in/tâm-trịnh-70b052381",
    email: "ng.tammail@gmail.com",
  },

  // Bio paragraph. Use {{badge:Label}} inline to render an inline skill pill, like the video does.
  bio: "Frontend developer and recent Information Technology graduate of FPT University Đà Nẵng (10/2026), working with React, Next.js, and TypeScript, and able to work full-stack with ASP.NET Core. Completed a Java internship (Spring Boot, SQL) at FPT Software and worked in an Agile/Scrum process. Seeking a Frontend Developer role in Hà Nội.",

  resumeUrl: "assets/resume.pdf", // generated from your CV — swap the file to update it

  // ---- Featured build (the big card right under the hero) ----
  featured: {
    label: "FEATURED BUILD",
    title: "TMPMS: a production pharmacy platform.",
    description: "From a graduation brief to a live business tool: e-commerce, Đông Y diagnosis, appointment booking, and full nhà thuốc operations, running today at tmpms.io.vn.",
    tech: ["ASP.NET Core", "SQL Server", "React", "SignalR", "PayOS", "Docker"],
    thumbnail: "/projects/tmpms.png",
    video: "/videos/tmpms.mp4",
    caseStudyUrl: "https://tmpms.io.vn/",
  },

  // ---- Projects grid ----
  projects: [
    {
      title: "TMPMS",
      status: "live", // "live" | "in-progress" | "coming-soon"
      description: "Graduation project for FPT University (team of 4) — full-stack production pharmacy platform with e-commerce, diagnosis, appointment booking, and PayOS integration.",
      tech: ["ASP.NET Core", "SQL Server", "React", "SignalR", "PayOS", "Docker"],
      thumbnail: "/projects/tmpms.png",
      video: "/videos/tmpms.mp4",
      url: "https://tmpms.io.vn/",
    },
    {
      title: "Tracking Phượt",
      status: "live",
      description: "Top 500 — AI Riser Vietnam 2026 (Google for Developers). Reconstructs animated route maps from GPS photos with 3 video-export pipelines.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "MapLibre GL"],
      thumbnail: "/projects/trackingtours.png",
      video: "/videos/tracking-phuot.mp4",
      youtubeUrl: "https://youtu.be/56dwJ55X3eY",
      url: "https://trackingtours.vercel.app",
    },
    {
      title: "Việt Phục Các – Phòng Thử Đồ Cổ Phục",
      status: "live",
      description: "Interactive traditional Vietnamese costume fitting room (Cổ Phục triều Nguyễn) with paper doll multi-layer PNG stacking, 3D tilt depth, royal palette garment dyeing, and HD lookbook export.",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      thumbnail: "/projects/dressroom.png",
      video: "/videos/viet-phuc-cac.mp4",
      url: "https://dressroom-eight.vercel.app/",
    },
  ],

  // ---- Technologies ----
  technologies: [
    ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Vue.js"],
    ["ASP.NET Core", "EF Core", "Spring Boot", "Java", "SQL Server", "PostgreSQL", "Supabase"],
    ["Docker", "Git", "GitHub", "Vercel", "Claude Code", "Postman", "Agile/Scrum"],
  ],

  // ---- Experience ----
  experience: [
    {
      role: "Java Developer Intern",
      company: "FPT Software",
      location: "Đà Nẵng, Vietnam",
      dates: "01/2025 – 05/2025",
    },
  ],

  // ---- Education ----
  education: [
    {
      degree: "Bachelor of Information Technology",
      school: "FPT University",
      location: "Đà Nẵng, Vietnam",
      dates: "Graduated: 10/2026",
    },
  ],

  // ---- Events / Talks (used by the "Events" nav link) ----
  events: [
    {
      date: "10/2026",
      title: "Top 500 Finalist — AI Riser Vietnam 2026",
      issuer: "Google for Developers",
    },
  ],

  // ---- Outside the IDE ----
  outside: {
    blurb: "When I step away from the screen, I recharge through {{tags}} — it keeps my work fresh and my head clear.",
    tags: ["traveling", "photography", "football", "gaming"],
    photo: "",
  },

  // ---- GitHub activity ----
  githubUsername: "tamak4go",

  // ---- Contact ----
  contact: {
    blurb: "Frontend developer (full-stack capable) graduated from FPT University based in Hà Nội — open to opportunities.",
    secondaryLabel: "PHONE",
    secondaryValue: "+84 862 544 627",
    secondaryUrl: "tel:+84862544627",
  },

  // ---- Chat widget ----
  chat: {
    enabled: true,
    botName: "Tam",
    greeting: "Hey! I'm Tam — ask me about TMPMS, Tracking Phượt, Việt Phục Các, or my tech stack.",
  },
};
