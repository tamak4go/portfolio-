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
  role: "Full-Stack Web Developer",
  roleTagline: "React, Next.js & Node.js",
  status: "Available for internship & fresher roles",
  avatarText: "TQT",
  // Distinct light/dark photos, swapped automatically based on the active theme.
  avatarLightUrl: "/avatars/avatar-light.png",
  avatarDarkUrl: "/avatars/avatar-dark.png",

  bio: "Final-year Information Technology student at FPT University and a full-stack web developer working across React/Vite and ASP.NET Core. I designed, built, and deployed my graduation project, TMPMS, solo, covering everything from requirements analysis and database design to API development and UI implementation.",

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
    title: "TMPMS: a production pharmacy platform, built solo.",
    description:
      "Traditional-medicine pharmacy management system: e-commerce, Đông Y diagnosis, appointment booking, and full nhà thuốc operations, live at tmpms.io.vn.",
    tech: ["ASP.NET Core", "SQL Server", "React", "SignalR", "PayOS", "Gemini AI", "Docker"],
    thumbnail: "/projects/tmpms.png",
    caseStudyUrl: "/projects/tmpms",
  } satisfies FeaturedProject,

  projects: [
    {
      title: "TMPMS",
      role: "Creator & Sole Developer",
      year: "2026",
      status: "live",
      description:
        "Graduation project for FPT University, a production pharmacy platform combining traditional (Đông Y) and Western medicine: e-commerce, online diagnosis, appointment booking with deposits, and full nhà thuốc operations. Designed and built solo, live at tmpms.io.vn.",
      highlights: [
        "ASP.NET Core 8 / EF Core backend on SQL Server",
        "Real-time pharmacist chat & AI (Gemini) via SignalR",
        "PayOS payments with idempotent webhooks",
      ],
      tech: ["ASP.NET Core", "SQL Server", "React", "SignalR", "PayOS", "Docker"],
      thumbnail: "/projects/tmpms.png",
      liveUrl: "https://tmpms.io.vn/",
      repoUrl: "https://github.com/tamak4go",
    },
    {
      title: "Tracking Phượt",
      role: "Creator & Sole Developer",
      year: "2026",
      status: "live",
      description:
        "Upload trip photos and it reconstructs the route from the GPS data embedded in them. Redesigned into a full app with Google sign-in, a dashboard (map view, gallery, stats), social features (an Explore feed of public rides and a Community page), and a Pro tier.",
      highlights: [
        "GPS route reconstruction from photo EXIF data",
        "Google sign-in, dashboard & Pro tier",
        "Explore feed & Community stats",
      ],
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "MapLibre GL", "Vitest"],
      thumbnail: "/projects/trackingtours.png",
      liveUrl: "https://trackingtours.vercel.app",
      repoUrl: "https://github.com/tamak4go/trackingtours",
    },
    {
      title: "Next Build",
      role: "Creator & Sole Developer",
      year: "2026",
      status: "coming-soon",
      description: "Something new is taking shape behind the scenes. Stay tuned.",
      tech: [],
      thumbnail: "",
    },
  ] satisfies Project[],

  technologies: [
    ["React", "Next.js", "Vue.js", "JavaScript", "HTML/CSS"],
    ["Node.js", "Java", "MySQL", "MongoDB"],
    ["Git", "GitHub", "REST API", "Postman", "Agile/Scrum"],
  ],

  experience: [
    {
      role: "Java Developer Intern",
      company: "FPT Software",
      location: "Đà Nẵng, Vietnam",
      dates: "Jan 2025",
      bullets: [
        "Developed and maintained Java application modules in a real enterprise environment.",
        "Debugged, tested, and optimized code on large-scale systems.",
        "Collaborated with the team following a professional Agile/Scrum process.",
      ],
    },
  ] satisfies ExperienceItem[],

  education: [
    {
      degree: "Bachelor of Information Technology",
      school: "FPT University",
      location: "Đà Nẵng, Vietnam",
      dates: "Expected graduation: Dec 2026",
    },
  ],

  // Add real posts here to populate the Writing section — leave empty to hide it.
  writing: [] as WritingItem[],

  // Add real certificates/events here — the section hides itself while empty.
  events: [] as EventItem[],

  outside: {
    blurb: "When I step away from the screen, I recharge through {{tags}}, which keeps my work fresh and my head clear.",
    tags: ["traveling", "photography", "football", "gaming"],
  } satisfies OutsideData,

  githubUsername: "tamak4go",

  contact: {
    blurb:
      "Final-year IT student open to internship and fresher full-stack web developer roles.",
    phone: "+84 862 544 627",
  },

  chat: {
    enabled: true,
    botName: "Tam",
    greeting: "Hey! I'm Tam — ask me about TMPMS, my stack, or anything else on this site.",
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
  mysql: "#4479A1",
  mongodb: "#47A248",
  git: "#F05032",
  github: "#ffffff",
  "rest api": "#0EA5E9",
  postman: "#FF6C37",
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
