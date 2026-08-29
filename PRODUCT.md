# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary audience is recruiters and hiring managers — Vietnamese and international — screening for internship and fresher full-stack web developer roles. They should walk away wanting to interview Trịnh Quang Tâm (the site owner). The chat widget, resume download, and contact details exist to move that reader toward reaching out.

## Product Purpose

A personal developer portfolio for Trịnh Quang Tâm, a final-year Information Technology student at FPT University (Đà Nẵng, Vietnam; expected graduation Dec 2026). It exists to get him hired into an internship or fresher full-stack role by presenting his real projects, experience, and stack credibly. Success is a recruiter or hiring manager contacting him or downloading his CV after browsing.

## Positioning

The differentiating claim: TMPMS is a real, live, solo-built production system (tmpms.io.vn) — a traditional-medicine (Đông Y) pharmacy platform with e-commerce, appointment booking with deposits, real-time pharmacist chat, AI diagnosis support (Gemini), and PayOS payment integration with idempotent webhooks — not a tutorial clone or a slice of a group project. A student portfolio built around toy or group-assigned projects could not truthfully make this claim. This positioning must be preserved and never diluted back toward generic "learned X, Y, Z" student-project framing.

## Operating Context

- Deployed at `tamagok4.vercel.app`, auto-deployed via Vercel on push to `main`.
- Content (name, bio, projects, experience, education, socials, GitHub username) is centralized in `lib/data.ts`; editing that file updates the whole site without touching components.
- Resume/CV is bilingual: separate English and Vietnamese PDFs (`public/Trinh-Quang-Tam-CV-EN.pdf`, `public/Trinh-Quang-Tam-CV-VI.pdf`), selected via a language dropdown in the Hero component.
- TMPMS's real stack is ASP.NET Core 8 / EF Core on SQL Server, React front end, SignalR for real-time chat, Gemini AI, PayOS payments, Docker — this must stay accurate in any future copy about it (a prior, since-corrected version of the site described it inaccurately as Node.js/MySQL/MongoDB).
- Chat widget (`components/ChatWidget.tsx`) currently answers with keyword-matched canned replies about TMPMS, stack, etc. — no external API key wired in yet.
- Writing and Events sections exist in the data model but are intentionally empty; each section hides itself automatically while its array is empty.

## Capabilities and Constraints

- Sections: Hero (identity, role, status, bilingual resume download), Featured project (TMPMS), Projects grid, Experience, Events (currently hidden — empty), Writing (currently hidden — empty), Outside-of-work blurb, GitHub activity, tech marquee, chat widget, footer.
- Real, shippable projects only: TMPMS (live), Tracking Phượt (live, GPS route reconstruction from photo EXIF data), and a "Next Build" placeholder marked coming-soon.
- Dark-by-default with a light-mode toggle (`next-themes`).
- Do not fabricate testimonials, press mentions, client quotes, or benchmarks. The absence of a Writing/Events history is real and should stay reflected by those sections staying hidden, not filled with invented content.
- Do not regress TMPMS's tech-stack accuracy (ASP.NET Core 8, not Node.js) in any future copy edits.

## Brand Commitments

- Name: Trịnh Quang Tâm, initials "TQT" used as the avatar/icon fallback.
- Role framing: "Full-Stack Web Developer" tagline "React, Next.js & Node.js" alongside the ASP.NET Core reality of TMPMS — both stacks are genuinely used and should coexist in copy rather than one displacing the other.
- Bilingual identity (English/Vietnamese) is a standing commitment, not a one-off feature — both CV languages must stay accurate and in sync going forward.

## Evidence on Hand

- TMPMS: live at `tmpms.io.vn`, solo-built graduation project, GIF preview at `public/projects/tmpms.gif`.
- Tracking Phượt: live at `trackingtours.vercel.app`, solo-built, repo public on GitHub.
- Experience: one internship (Java Developer Intern, FPT Software, Đà Nẵng, Jan 2025).
- No testimonials, press, certifications, or blog posts exist yet — Events and Writing sections are correctly empty and must not be populated with invented entries.

## Product Principles

1. Real work over polish theater — every project claim must be independently verifiable (live URL, repo, or both); never dress up a toy project as production.
2. Recruiter-first legibility — a hiring manager skimming for 60 seconds should immediately grasp role, stack, and the TMPMS production claim.
3. Bilingual parity — English and Vietnamese materials (CV, and any future bilingual content) carry equal weight and must never drift out of sync.
4. Accurate technical specificity — stack claims (especially TMPMS's ASP.NET Core backend) are exact, not approximated, because a technical reader will check.
5. Honest absence — empty sections (Writing, Events) stay hidden rather than padded with fabricated content.

## Accessibility & Inclusion

No project-specific accessibility requirement has been established beyond standard web accessibility practice.
