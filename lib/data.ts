/**
 * ============================================================
 *  EDIT THIS FILE to make the site yours.
 * ============================================================
 */

export interface Project {
  title: string;
  role: string;
  year: string;
  status: "live" | "in-progress" | "coming-soon";
  description: string;
  highlights?: string[];
  tech: string[];
  thumbnail?: string;
  liveUrl?: string;
  repoUrl?: string;
  caseStudyUrl?: string;
}

export interface FeaturedProject {
  label: string;
  title: string;
  description: string;
  tech: string[];
  thumbnail?: string;
  caseStudyUrl: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
}

export interface WritingItem {
  title: string;
  date: string;
  readTime: string;
  url: string;
}

export interface EventItem {
  date: string;
  title: string;
  issuer: string;
}

export interface OutsideData {
  blurb: string;
  tags: string[];
}

export const PORTFOLIO = {
  initials: "TQT",
  name: "Trịnh Quang Tâm",
  role: "Frontend Developer",
  roleTagline: "React, Next.js, TypeScript & ASP.NET Core",
  status: "Graduated (10/2026) · Seeking Frontend Developer role in Hà Nội",
  avatarText: "TQT",
  // Distinct light/dark photos, swapped automatically based on the active theme.
  avatarLightUrl: "/avatars/avatar-light.png",
  avatarDarkUrl: "/avatars/avatar-dark.png",

  bio: "Frontend developer and recent Information Technology graduate of FPT University Đà Nẵng (10/2026), working with React, Next.js, and TypeScript, and able to work full-stack with ASP.NET Core. Completed a Java internship (Spring Boot, SQL) at FPT Software and worked in an Agile/Scrum process. Seeking a Frontend Developer role in Hà Nội.",

  socials: {
    github: "https://github.com/tamak4go",
    linkedin: "https://www.linkedin.com/in/tâm-trịnh-70b052381",
    twitter: "",
    email: "ng.tammail@gmail.com",
  },

  resumeUrlEn: "/Trinh-Quang-Tam-CV-EN.pdf",
  resumeUrlVi: "/Trinh-Quang-Tam-CV-VI.pdf",

  nav: [
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Events", href: "/events" },
  ],

  featured: {
    label: "FEATURED BUILD",
    title: "TMPMS: a production pharmacy platform.",
    description:
      "From a graduation brief to a live business tool: e-commerce, Đông Y diagnosis, appointment booking, and full nhà thuốc operations, running today at tmpms.io.vn.",
    tech: ["ASP.NET Core", "SQL Server", "React", "SignalR", "PayOS", "Gemini AI", "Docker"],
    thumbnail: "/projects/tmpms.png",
    caseStudyUrl: "/projects/tmpms",
  } satisfies FeaturedProject,

  projects: [
    {
      title: "TMPMS",
      role: "Full-Stack Developer (Team of 4)",
      year: "06/2026 – 10/2026",
      status: "live",
      description:
        "Graduation project for FPT University (team of 4), a production pharmacy platform combining traditional (Đông Y) and Western medicine: e-commerce, online diagnosis, appointment booking with deposits, and full nhà thuốc operations. Handled end-to-end development (frontend, backend, database), live at tmpms.io.vn.",
      highlights: [
        "ASP.NET Core 8 / EF Core backend on SQL Server with JWT + Identity",
        "Real-time pharmacist chat & AI (Gemini) via SignalR",
        "FEFO inventory, deposit booking & PayOS payments with idempotent webhooks",
      ],
      tech: ["ASP.NET Core", "SQL Server", "React", "SignalR", "PayOS", "Docker"],
      thumbnail: "/projects/tmpms.png",
      liveUrl: "https://tmpms.io.vn/",
      repoUrl: "https://github.com/TMPMS/TMPMS",
    },
    {
      title: "Tracking Phượt",
      role: "Creator & Sole Developer",
      year: "10/2026",
      status: "live",
      description:
        "Top 500 — AI Riser Vietnam 2026 (Google for Developers). Upload trip photos and it reconstructs the route from embedded GPS data (including HEIC). Features 3 video-export pipelines and automatic TikTok posting.",
      highlights: [
        "Top 500 Finalist — AI Riser Vietnam 2026 (Google for Developers)",
        "GPS route reconstruction with MapLibre GL & OSRM",
        "3 video-export pipelines & TikTok Content Posting API",
      ],
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "MapLibre GL"],
      thumbnail: "/projects/trackingtours.png",
      liveUrl: "https://trackingtours.vercel.app",
      repoUrl: "https://github.com/tamak4go/trackingtours",
      caseStudyUrl: "/projects/tracking-phuot",
    },
    {
      title: "Việt Phục Các – Phòng Thử Đồ Cổ Phục",
      role: "Creator & Sole Developer",
      year: "09/2026",
      status: "live",
      description:
        "Interactive traditional Vietnamese costume fitting room (Cổ Phục triều Nguyễn) with paper doll multi-layer PNG stacking, 3D tilt depth, royal palette garment dyeing, and HD lookbook export.",
      highlights: [
        "Multi-layer PNG costume system with 3D Paper Shadow-Box tilt (ThreeUI)",
        "Nguyễn Dynasty royal dye studio with isolated garment CSS filters",
        "HD Lookbook export (768x1376) via HTML5 Canvas 2D & royal seal stamping",
      ],
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      thumbnail: "/projects/dressroom.png",
      liveUrl: "https://dressroom-eight.vercel.app/",
      repoUrl: "https://github.com/tamak4go/dressroom",
    },
  ] satisfies Project[],

  technologies: [
    ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Vue.js"],
    ["ASP.NET Core", "EF Core", "Spring Boot", "Java", "SQL Server", "PostgreSQL", "Supabase"],
    ["Docker", "Git", "GitHub", "Vercel", "Claude Code", "Postman", "Agile/Scrum"],
  ],

  experience: [
    {
      role: "Java Developer Intern",
      company: "FPT Software",
      location: "Đà Nẵng, Vietnam",
      dates: "01/2025 – 05/2025",
      bullets: [
        "Developed and maintained Java application modules using Spring Boot and SQL databases.",
        "Collaborated within the engineering team following the Agile/Scrum process.",
      ],
    },
  ] satisfies ExperienceItem[],

  education: [
    {
      degree: "Bachelor of Information Technology",
      school: "FPT University",
      location: "Đà Nẵng, Vietnam",
      dates: "Graduated: 10/2026",
    },
  ],

  // Add real posts here to populate the Writing section — leave empty to hide it.
  writing: [] as WritingItem[],

  // Add real certificates/events here — the section hides itself while empty.
  events: [
    {
      date: "10/2026",
      title: "Top 500 Finalist — AI Riser Vietnam 2026",
      issuer: "Google for Developers",
    },
  ] satisfies EventItem[],

  outside: {
    blurb: "When I step away from the screen, I recharge through {{tags}}, which keeps my work fresh and my head clear.",
    tags: ["traveling", "photography", "football", "gaming"],
  } satisfies OutsideData,

  githubUsername: "tamak4go",

  contact: {
    blurb:
      "Looking for a frontend developer (with full-stack capability) who ships to production? I'm an IT graduate from FPT University based in Hà Nội — let's talk.",
    phone: "+84 862 544 627",
  },

  chat: {
    enabled: true,
    botName: "Tam",
    greeting: "Hey! I'm Tam. Ask me about TMPMS, Tracking Phượt, Việt Phục Các, or my tech stack.",
  },
};

export const BRAND_COLORS: Record<string, string> = {
  react: "#61DAFB",
  "next.js": "#ffffff",
  "vue.js": "#42B883",
  javascript: "#F7DF1E",
  typescript: "#3178C6",
  "html/css": "#E34F26",
  "node.js": "#3C873A",
  java: "#f89820",
  "spring boot": "#6DB33F",
  mysql: "#4479A1",
  postgresql: "#4169E1",
  mongodb: "#47A248",
  git: "#F05032",
  github: "#ffffff",
  "rest api": "#0EA5E9",
  postman: "#FF6C37",
  "claude code": "#D97706",
  "agile/scrum": "#22C55E",
  "tailwind css": "#38BDF8",
  supabase: "#3ECF8E",
  "maplibre gl": "#396CB2",
  vitest: "#6E9F18",
  "asp.net core": "#512BD4",
  "asp.net core 8": "#512BD4",
  "ef core": "#512BD4",
  docker: "#2496ED",
  vite: "#646CFF",
  "gemini ai": "#8E75B2",
  "sql server": "#CC2927",
  signalr: "#512BD4",
  payos: "#00B14F",
};
