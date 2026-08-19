/**
 * ============================================================
 *  EDIT THIS FILE to make the site yours.
 * ============================================================
 */

export interface Project {
  title: string;
  year: string;
  status: "live" | "in-progress" | "coming-soon";
  description: string;
  tech: string[];
  thumbnail?: string;
  liveUrl?: string;
  repoUrl?: string;
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
  role: "AI-Native Full-Stack Developer",
  roleTagline: "React, Next.js & Node.js",
  status: "Available for internships & junior roles",
  avatarText: "TQT",

  bio: "Final-year Information Technology student at FPT University and a full-stack developer building end-to-end products with React, Next.js, Node.js and MySQL. I work in an AI-Native way — using Claude and Antigravity throughout the dev lifecycle to design, code, test, and ship faster.",

  socials: {
    github: "https://github.com/tamak4go",
    linkedin: "",
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

  projects: [
    {
      title: "TMPMS",
      year: "2026",
      status: "live",
      description:
        "Graduation project for FPT University — an end-to-end system I designed, built, and deployed solo: frontend, backend, database, and production hosting. Built with an AI-Native workflow using Claude and Antigravity to move faster through architecture, code generation, refactoring, and testing.",
      tech: ["React", "Next.js", "Node.js", "MySQL", "MongoDB"],
      thumbnail: "",
      liveUrl: "https://tmpms.io.vn/",
      repoUrl: "https://github.com/tamak4go",
    },
    {
      title: "Next Build",
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
    ["Git", "GitHub", "Claude", "Antigravity", "Agile/Scrum"],
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
      "Final-year IT student open to internships and junior full-stack roles — especially teams building with AI-native workflows.",
    phone: "+84 862 544 627",
  },

  chat: {
    enabled: true,
    botName: "Tam",
    greeting: "Hey! I'm Tam — ask me about TMPMS, my stack, or how I use AI-native workflows to build.",
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
  claude: "#DE7356",
  antigravity: "#8B5CF6",
  "agile/scrum": "#0EA5E9",
};
