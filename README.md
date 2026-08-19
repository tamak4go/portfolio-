# Portfolio

A minimalist, editorial developer portfolio built with Next.js (App Router),
TypeScript, Tailwind CSS, and Framer Motion — dark by default with a
light-mode toggle.

## Stack

- **Next.js 16** (App Router) + React + TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for scroll reveals, hover micro-interactions, and the chat panel
- **lucide-react** for icons
- **next-themes** for the dark/light toggle

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Customize

Everything — name, bio, projects, experience, education, socials, GitHub
username — lives in **`lib/data.ts`**. Edit that file and the whole site
updates; you shouldn't need to touch the components for basic content changes.

- Resume: replace `public/resume.pdf`.
- Writing section: add entries to `PORTFOLIO.writing` in `lib/data.ts` — it's
  hidden automatically while that array is empty.
- Chat widget: `components/ChatWidget.tsx` currently uses simple
  keyword-matched canned replies (no API key needed). Swap the `reply()`
  function for a real API call when you want a live model behind it.
- Tech marquee brand colors: add entries to `BRAND_COLORS` in `lib/data.ts`.

## Build & deploy

```bash
npm run build
npm run start   # or deploy the .next output to Vercel/Netlify/etc.
```

Deploys cleanly to Vercel with zero config (it's a standard Next.js app).

## Previous version

`static-version/` contains the original plain HTML/CSS/JS build of this same
portfolio, kept as a reference/backup — it's not part of the Next.js app and
can be deleted if you don't need it.
