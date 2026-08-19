/**
 * ============================================================
 *  EDIT THIS FILE to make the site yours. Nothing else in the
 *  project needs to change for basic customization.
 * ============================================================
 */

const PORTFOLIO = {
  // ---- Identity ----
  initials: "TQT",              // shown in the top-left logo mark
  name: "Trịnh Quang Tâm",
  verified: true,               // shows a little checkmark badge next to your name, like the video
  role: "AI-Native Full-Stack Developer",
  roleTagline: "React, Next.js & Node.js", // shown after the em-dash next to role
  avatarText: "TQT",            // fallback initials avatar (used until you swap in assets/avatar.jpg)

  socials: {
    github: "https://github.com/tamak4go",
    linkedin: "",               // add yours to show the icon, e.g. "https://linkedin.com/in/..."
    email: "ng.tammail@gmail.com", // NOTE: this is the email from your CV — double check it's not a typo for ng.tamgame@gmail.com
  },

  // Bio paragraph. Use {{badge:Label}} inline to render an inline skill pill, like the video does.
  bio: "I'm a final-year Information Technology student at FPT University and a full-stack developer building end-to-end products with {{badge:React}} {{badge:Next.js}} {{badge:Node.js}} and {{badge:MySQL}}. I work in an AI-Native way — using Claude and Antigravity throughout the dev lifecycle to design, code, test, and ship faster. Currently running my graduation project, TMPMS, in production.",

  resumeUrl: "assets/resume.pdf", // generated from your CV — swap the file to update it

  // ---- Featured build (the big card right under the hero) ----
  featured: {
    label: "FEATURED BUILD",
    title: "TMPMS: my graduation project, live in production.",
    description: "An end-to-end system I designed and built solo — frontend, backend, database, deployment — using an AI-Native workflow with Claude and Antigravity to move faster through architecture, code, and testing.",
    tech: ["React", "Next.js", "Node.js", "MySQL", "MongoDB"],
    thumbnail: "", // path to an image, e.g. "assets/projects/featured.png" — leave blank to use the placeholder
    caseStudyUrl: "https://tmpms.io.vn/",
  },

  // ---- Projects grid ----
  projects: [
    {
      title: "TMPMS",
      status: "live", // "live" | "in-progress" | "coming-soon"
      description: "Graduation project for FPT University — full-stack system I designed, built, and deployed end-to-end.",
      tech: ["React", "Next.js", "Node.js", "MySQL"],
      thumbnail: "",
      url: "https://tmpms.io.vn/",
    },
    {
      title: "Next Build",
      status: "coming-soon",
      description: "Something new is taking shape behind the scenes. Stay tuned.",
      tech: [],
      thumbnail: "",
      url: "",
    },
  ],

  // ---- Technologies ----
  // Each inner array becomes its own auto-scrolling row (rows alternate
  // scroll direction automatically), like the reference site's tech marquee.
  technologies: [
    ["React", "Next.js", "Vue.js", "JavaScript", "HTML/CSS"],
    ["Node.js", "Java", "MySQL", "MongoDB"],
    ["Git", "GitHub", "Claude", "Antigravity", "Agile/Scrum"],
  ],

  // ---- Experience ----
  experience: [
    {
      role: "Java Developer Intern",
      company: "FPT Software",
      location: "Đà Nẵng, Vietnam",
      dates: "Jan 2025",
    },
  ],

  // ---- Education ----
  education: [
    {
      degree: "Bachelor of Information Technology",
      school: "FPT University",
      location: "Đà Nẵng, Vietnam",
      dates: "Expected graduation: Dec 2026",
    },
  ],

  // ---- Events / Talks (used by the "Events" nav link) ----
  // Leave empty to hide the section entirely.
  events: [],

  // ---- Outside the IDE ----
  // Leave tags empty to hide this section — add your real hobbies to show it.
  outside: {
    blurb: "When I step away from the screen, I recharge through {{tags}} — it keeps my work fresh and my head clear.",
    tags: [],
    photo: "", // e.g. "assets/outside.jpg"
  },

  // ---- GitHub activity ----
  // Uses the public ghchart.rshah.org image service — just needs your GitHub username.
  githubUsername: "tamak4go",

  // ---- Contact ----
  contact: {
    blurb: "Final-year IT student open to internships and junior full-stack roles — especially teams building with AI-native workflows.",
    secondaryLabel: "PHONE",
    secondaryValue: "+84 862 544 627",
    secondaryUrl: "tel:+84862544627",
  },

  // ---- Chat widget ----
  chat: {
    enabled: true,
    botName: "Tam", // the assistant will introduce itself with this name
    greeting: "Hey! I'm Tam — ask me about TMPMS, my stack, or how I use AI-native workflows to build.",
  },
};
