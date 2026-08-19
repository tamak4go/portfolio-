# Portfolio

A minimal, single-page developer portfolio (hero, featured project, projects grid,
technologies, experience, education, events, "outside the IDE", GitHub activity,
contact, and a floating chat widget) with a light/dark toggle. No build step —
plain HTML/CSS/JS.

## Customize

Edit **`js/data.js`** — that's the only file you need to touch for content.
It covers your name, bio, socials, resume link, projects, experience,
education, events, hobbies, GitHub username, and contact info.

To add real images:
- `assets/avatar.jpg` — set `avatarText` aside and change the avatar markup in
  `index.html`/`main.js` if you want a photo instead of initials.
- `assets/resume.pdf` — your resume; referenced by `resumeUrl` in `data.js`.
- Project thumbnails — put images anywhere under `assets/` and point each
  project's `thumbnail` field at the path.

## Run locally

Just open `index.html` in a browser, or serve it:

```bash
npx serve .
```

## Deploy

Any static host works — no build step required:
- **GitHub Pages**: push this folder to a repo and enable Pages on the `main` branch.
- **Netlify / Vercel**: drag-and-drop the folder or connect the repo.

## The chat widget

The floating "Chat" button currently uses simple keyword-matched canned
responses (see `reply()` in `js/main.js`) — no API key required. If you want a
real AI-backed assistant like the one in the reference video, swap that
function for a `fetch()` call to an LLM API (e.g. the Claude API), keeping the
API key on a small backend/serverless function rather than in client-side code.
