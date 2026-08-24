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

export const PORTFOLIO = {
  initials: "TQT",
  name: "Trịnh Quang Tâm",
  role: "Full-Stack Web Developer",
  roleTagline: "React, Next.js & Node.js",
  status: "Available for internships & junior roles",
  avatarText: "TQT",
  // Swapped automatically based on the active theme. Both point at the same
  // photo for now — drop in a distinct light/dark variant if you want one.
  avatarLightUrl: "/avatars/avatar-light.png",
  avatarDarkUrl: "/avatars/avatar-dark.png",

  bio: "Final-year Information Technology student at FPT University and a full-stack web developer building end-to-end products with React, Next.js, Node.js, MySQL and MongoDB. I designed, built, and deployed my graduation project, TMPMS, solo — from requirements analysis and database design to API development and UI implementation.",

  socials: {
    github: "https://github.com/tamak4go",
    linkedin: "https://www.linkedin.com/in/tâm-trịnh-70b052381",
    twitter: "",
    email: "ng.tammail@gmail.com",
  },

  resumeUrl: "/resume.pdf",

  nav: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Writing", href: "#writing" },
    { label: "Contact", href: "#contact" },
  ],

  featured: {
    label: "FEATURED BUILD",
    title: "TMPMS: my graduation project, live in production.",
    description:
      "A full-stack system I designed and built solo, from database schema to deployment.",
    tech: ["React", "Next.js", "Node.js", "MySQL", "MongoDB"],
    thumbnail: "",
    caseStudyUrl: "https://tmpms.io.vn/",
  } satisfies FeaturedProject,

  projects: [
    {
      title: "TMPMS",
      role: "Creator & Sole Developer",
      year: "2026",
      status: "live",
      description:
        "Graduation project for FPT University — a full-stack system I designed and built solo: React/Next.js/Vue.js frontend, a Node.js backend with RESTful APIs, and MySQL/MongoDB databases. Covered the full cycle from requirements analysis and database design to API development, UI implementation, and production deployment.",
      tech: ["React", "Next.js", "Node.js", "MySQL", "MongoDB"],
      thumbnail: "",
      liveUrl: "https://tmpms.io.vn/",
      repoUrl: "https://github.com/tamak4go",
    },
    {
      title: "Tracking Phượt",
      role: "Creator & Sole Developer",
      year: "2026",
      status: "live",
      description:
        "Upload trip photos and it reconstructs the route from the GPS data embedded in them, generating a shareable link so friends can view the trip — no login required. Supports batch/folder uploads, Google Takeout exports, and HEIC photos.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "MapLibre GL"],
      thumbnail: "",
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

  githubUsername: "tamak4go",

  contact: {
    blurb:
      "Final-year IT student open to internships and junior full-stack web developer roles.",
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
};
