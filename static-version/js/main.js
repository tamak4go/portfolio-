(function () {
  const d = PORTFOLIO;

  /* ---------- Theme ---------- */
  const root = document.documentElement;
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(savedTheme || (prefersDark ? "dark" : "light"));

  document.getElementById("themeToggle").addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
  });

  function setTheme(mode) {
    root.setAttribute("data-theme", mode);
    const btn = document.getElementById("themeToggle");
    if (btn) btn.innerHTML = mode === "dark" ? "&#9789;" : "&#9728;";
  }

  /* ---------- Nav shadow on scroll ---------- */
  const nav = document.getElementById("nav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 8);
  });

  /* ---------- Helpers ---------- */
  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  // Approximate brand colors so skill pills get a bit of color instead of
  // being flat gray, e.g. "Laravel" -> its red, "React" -> its cyan.
  const BRAND_COLORS = {
    laravel: "#FF2D20", wordpress: "#21759B", postgresql: "#336791", postgres: "#336791",
    react: "#61DAFB", "node.js": "#3C873A", nodejs: "#3C873A", python: "#3776AB",
    typescript: "#3178C6", javascript: "#F7DF1E", mongodb: "#47A248", docker: "#2496ED",
    "tailwind css": "#38BDF8", tailwind: "#38BDF8", aws: "#FF9900", flutter: "#02569B",
    firebase: "#FFCA28", git: "#F05032", "next.js": "#ffffff", nextjs: "#ffffff",
    rust: "#DEA584", tauri: "#FFC131", sqlite: "#003B57", vue: "#42B883", "vue.js": "#42B883",
    graphql: "#E10098", figma: "#F24E1E", swift: "#F05138", kotlin: "#7F52FF", "c#": "#239120",
    csharp: "#239120", php: "#777BB4", go: "#00ADD8", golang: "#00ADD8", openai: "#412991",
  };
  function brandColor(label) {
    return BRAND_COLORS[label.trim().toLowerCase()] || null;
  }
  function badgeHtml(label) {
    const color = brandColor(label);
    const dot = color ? `<span class="badge-dot" style="background:${color}"></span>` : "";
    return `<span class="badge">${dot}${label}</span>`;
  }

  function renderBio(text) {
    return text.replace(/\{\{badge:(.*?)\}\}/g, (_, label) => badgeHtml(label));
  }

  const STATUS_LABEL = { live: "Live", "in-progress": "In Progress", "coming-soon": "Coming Soon" };

  function thumbStyle(path) {
    return path ? `background-image:url('${path}')` : "";
  }

  /* ---------- Nav / logo ---------- */
  document.getElementById("logoMark").textContent = d.initials;

  /* ---------- Hero ---------- */
  const avatar = document.getElementById("avatar");
  document.getElementById("heroName").textContent = d.name;
  document.getElementById("verifiedBadge").style.display = d.verified ? "inline-flex" : "none";
  document.getElementById("heroRole").innerHTML = `${d.role} <span>&mdash; ${d.roleTagline}</span>`;
  document.getElementById("heroBio").innerHTML = renderBio(d.bio);
  document.getElementById("resumeBtn").href = d.resumeUrl;
  avatar.textContent = d.avatarText;

  const socialRow = document.getElementById("socialRow");
  const ICONS = {
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.79-.25.79-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.07.78 2.15 0 1.56-.01 2.81-.01 3.19 0 .3.21.66.8.55A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"/></svg>',
    email: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5v-13Zm2.2.5 7.8 6.24L19.8 6H4.2Zm15.8 1.53-7.36 5.9a1.5 1.5 0 0 1-1.88 0L4.4 7.53V18h15.6V7.53Z"/></svg>',
  };
  if (d.socials.github) socialRow.appendChild(el("a", "", ICONS.github)).href = d.socials.github;
  if (d.socials.linkedin) socialRow.appendChild(el("a", "", ICONS.linkedin)).href = d.socials.linkedin;
  if (d.socials.email) socialRow.appendChild(el("a", "", ICONS.email)).href = `mailto:${d.socials.email}`;

  /* ---------- Featured ---------- */
  document.getElementById("featuredLabel").textContent = d.featured.label;
  document.getElementById("featuredTitle").textContent = d.featured.title;
  document.getElementById("featuredDesc").textContent = d.featured.description;
  document.getElementById("featuredThumb").setAttribute("style", thumbStyle(d.featured.thumbnail));
  document.getElementById("featuredLink").href = d.featured.caseStudyUrl;
  const featuredTech = document.getElementById("featuredTech");
  d.featured.tech.forEach((t) => featuredTech.insertAdjacentHTML("beforeend", badgeHtml(t)));

  /* ---------- Projects ---------- */
  const grid = document.getElementById("projectsGrid");
  d.projects.forEach((p) => {
    const card = el("a", "project-card");
    card.href = p.url || "javascript:void(0)";
    if (p.url) { card.target = "_blank"; card.rel = "noopener"; }
    card.innerHTML = `
      <div class="project-thumb" style="${thumbStyle(p.thumbnail)}">${p.thumbnail ? "" : p.title}</div>
      <div class="project-body">
        <div class="project-title-row">
          <h4>${p.title}</h4>
          <span class="status-pill status-${p.status}">${STATUS_LABEL[p.status]}</span>
        </div>
        <p>${p.description}</p>
        <div class="project-tech">${p.tech.map((t) => {
          const c = brandColor(t);
          return `<span>${c ? `<span class="badge-dot" style="background:${c}"></span>` : ""}${t}</span>`;
        }).join("")}</div>
      </div>`;
    grid.appendChild(card);
  });

  /* ---------- Technologies (auto-scrolling marquee rows) ---------- */
  const techMarquee = document.getElementById("techMarquee");
  function techPill(t) {
    const c = brandColor(t);
    return `<span>${c ? `<span class="badge-dot" style="background:${c}"></span>` : ""}${t}</span>`;
  }
  d.technologies.forEach((row, i) => {
    // Duplicate the row's items so the track can loop seamlessly at -50%.
    const pills = row.map(techPill).join("") + row.map(techPill).join("");
    const dir = i % 2 === 1 ? " tech-track-right" : "";
    techMarquee.insertAdjacentHTML(
      "beforeend",
      `<div class="tech-row"><div class="tech-track${dir}">${pills}</div></div>`
    );
  });
  document.getElementById("techViewAll").href = d.resumeUrl;

  /* ---------- Experience ---------- */
  document.getElementById("experienceViewDetails").href = d.resumeUrl;
  const expList = document.getElementById("experienceList");
  d.experience.forEach((e) => {
    expList.appendChild(el("div", "timeline-item", `
      <div class="timeline-date">${e.dates}</div>
      <div>
        <p class="timeline-role">${e.role}</p>
        <p class="timeline-company">${e.company}</p>
        <p class="timeline-loc">${e.location}</p>
      </div>`));
  });

  /* ---------- Education ---------- */
  const eduList = document.getElementById("educationList");
  d.education.forEach((e) => {
    eduList.appendChild(el("div", "timeline-item", `
      <div class="timeline-date">${e.dates}</div>
      <div>
        <p class="timeline-role">${e.degree}</p>
        <p class="timeline-company">${e.school}</p>
        <p class="timeline-loc">${e.location}</p>
      </div>`));
  });

  /* ---------- Events ---------- */
  const eventsList = document.getElementById("eventsList");
  if (d.events.length === 0) {
    document.getElementById("events").style.display = "none";
  } else {
    document.getElementById("certsViewAll").href = d.resumeUrl;
    d.events.forEach((ev) => {
      eventsList.appendChild(el("div", "timeline-item", `
        <div class="timeline-date">${ev.date}</div>
        <div>
          <p class="timeline-role">${ev.title}</p>
          <p class="timeline-company">${ev.issuer}</p>
        </div>`));
    });
  }

  /* ---------- Outside the IDE ---------- */
  if (d.outside.tags.length === 0) {
    document.getElementById("outside").style.display = "none";
  } else {
    document.getElementById("outsideBlurb").innerHTML = d.outside.blurb.replace("{{tags}}", d.outside.tags.join(", "));
    const outsideTags = document.getElementById("outsideTags");
    d.outside.tags.forEach((t) => outsideTags.appendChild(el("span", "", t)));
    document.getElementById("outsidePhoto").setAttribute("style", thumbStyle(d.outside.photo));
  }

  /* ---------- GitHub ---------- */
  if (d.githubUsername) {
    document.getElementById("ghChart").src = `https://ghchart.rshah.org/${d.githubUsername}`;
  } else {
    document.getElementById("github").style.display = "none";
  }

  /* ---------- Contact ---------- */
  document.getElementById("contactBlurb").textContent = d.contact.blurb;
  document.getElementById("emailValue").textContent = d.socials.email;
  document.getElementById("emailCard").href = `mailto:${d.socials.email}`;
  const scheduleCard = document.getElementById("scheduleCard");
  if (d.contact.secondaryUrl) {
    document.getElementById("scheduleLabel").textContent = d.contact.secondaryLabel || "Let's talk";
    document.getElementById("scheduleValue").textContent = d.contact.secondaryValue || "Schedule a Call";
    scheduleCard.href = d.contact.secondaryUrl;
  } else {
    scheduleCard.style.display = "none";
  }

  /* ---------- Footer ---------- */
  document.getElementById("footerText").textContent = `© ${new Date().getFullYear()} ${d.name}. Built with plain HTML, CSS & JS.`;

  /* ---------- Scroll reveal ---------- */
  // Fade + slide each section up into place the first time it enters the
  // viewport, mirroring the on-scroll motion from the reference site.
  const revealTargets = document.querySelectorAll(
    ".section-featured, #projects, #technologies, #experience, #education, #events, #outside, #github, #contact"
  );
  revealTargets.forEach((elm, i) => {
    elm.classList.add("reveal");
    elm.style.transitionDelay = `${Math.min(i * 40, 160)}ms`;
  });
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    revealTargets.forEach((elm) => io.observe(elm));
  } else {
    revealTargets.forEach((elm) => elm.classList.add("in-view"));
  }

  /* ---------- Chat widget ---------- */
  if (d.chat.enabled) {
    const fab = document.getElementById("chatFab");
    const panel = document.getElementById("chatPanel");
    const body = document.getElementById("chatBody");
    const input = document.getElementById("chatInput");
    const send = document.getElementById("chatSend");

    document.getElementById("chatFabLabel").textContent = `Chat with ${d.chat.botName}`;
    document.getElementById("chatTitle").textContent = `Chat with ${d.chat.botName}`;
    document.getElementById("chatAvatar").textContent = d.avatarText;

    let opened = false;
    fab.addEventListener("click", () => {
      panel.classList.add("open");
      if (!opened) {
        addMsg("bot", d.chat.greeting);
        opened = true;
      }
    });
    document.getElementById("chatClose").addEventListener("click", () => panel.classList.remove("open"));

    function addMsg(who, text) {
      body.appendChild(el("div", `chat-msg ${who}`, text));
      body.scrollTop = body.scrollHeight;
    }

    // Simple keyword-based canned responses. Swap this for a real API call
    // (e.g. to an LLM backend) when you're ready to wire up a live assistant.
    function reply(msg) {
      const m = msg.toLowerCase();
      if (m.includes("project")) {
        return `My main projects right now are ${d.projects.map((p) => p.title).join(", ")}. Check out the Projects section above for details.`;
      }
      if (m.includes("stack") || m.includes("tech")) {
        return `I mostly work with ${d.technologies.slice(0, 5).join(", ")}, among other tools.`;
      }
      if (m.includes("hire") || m.includes("work") || m.includes("contact")) {
        return `${d.contact.blurb} You can reach me at ${d.socials.email}.`;
      }
      if (m.includes("resume") || m.includes("cv")) {
        return `You can view my resume using the "View Resume" button near the top of the page.`;
      }
      return `Thanks for the message! I'm a simple demo assistant for now — wire me up to a real API in js/main.js to make me smarter.`;
    }

    function handleSend() {
      const val = input.value.trim();
      if (!val) return;
      addMsg("user", val);
      input.value = "";
      setTimeout(() => addMsg("bot", reply(val)), 400);
    }
    send.addEventListener("click", handleSend);
    input.addEventListener("keydown", (e) => { if (e.key === "Enter") handleSend(); });
  } else {
    document.getElementById("chatFab").style.display = "none";
  }
})();
