# Hritik Chauhan — Personal Portfolio

A premium, highly animated personal portfolio for **Hritik Chauhan** — Software Engineer with 3+ years of experience building scalable production-grade applications across fintech, insurance and SaaS.

Built with a modern, recruiter-friendly aesthetic inspired by Vercel, Linear, Apple and Stripe — fully responsive, accessible and production-ready.

---

## Tech Stack

- **React 18 + Vite + TypeScript** — fast, type-safe foundation
- **TailwindCSS** — utility-first styling with custom design system
- **Framer Motion** — smooth, premium animations
- **Shadcn/UI primitives** — Button, Card, Dialog, Badge, Input, Textarea, Toast
- **Lucide Icons** — modern icon set
- **React Router** — client-side routing with 404 page
- **EmailJS** — contact form delivery without a backend
- **Radix UI** — accessible primitives (Dialog, Slot, Toast)

---

## Features

### Design & UX
- Dark mode by default with a smooth light/dark toggle (system-aware)
- Black/gray theme with subtle gradients
- Glassmorphism, gradient borders, and noise overlay
- Animated background blobs and floating particles in the hero
- Mouse-following spotlight effect (desktop only)
- Scroll progress indicator
- Smooth scrolling between sections
- Section-aware active nav highlighting
- Typing animation for rotating titles in the hero
- Animated counters for stats
- Interactive project cards with modal details and hover effects
- Skeleton loading states for lazy-loaded sections
- Clean Inter + JetBrains Mono typography

### Sections
1. **Hero** — name, rotating titles, intro, CTAs (Resume / Contact / Projects), social links, glowing animated profile
2. **About** — long bio, specialties, animated statistics cards
3. **Skills** — grouped cards (Backend, Frontend, Databases, Cloud & DevOps, Tools, Security) with animated progress bars
4. **Experience** — animated timeline (Appinventiv Technologies)
5. **Projects** — Toki, Generali, Wicket.ai, Logging-Colorify with modals
6. **Achievements** — Budding Star, Squad, Technical Training rank
7. **Contact** — direct details + EmailJS-powered form with validation, spam prevention, toast notifications, loading state, and form reset
8. **Footer** — social icons, "Built with React + TypeScript + Tailwind", dynamic year

### Engineering
- Strict TypeScript with `noUnusedLocals`, `noUnusedParameters`
- Lazy-loaded route + section bundles (code splitting in `vite.config.ts`)
- SEO-optimized with OpenGraph, Twitter cards, JSON-LD Person schema, sitemap, robots
- `prefers-reduced-motion` respected throughout
- Focus rings, ARIA labels, semantic HTML, keyboard-navigable
- Reusable components, clean folder structure, design tokens via CSS variables
- Production-ready Vercel config with SPA rewrites and cache headers

---

## Getting Started

### Prerequisites
- Node.js **18+** (Node 20+ recommended)
- npm 9+

### Install & run

```bash
npm install
npm run dev
```

Open <http://localhost:5173>.

### Production build

```bash
npm run build
npm run preview
```

Build output is emitted to `dist/`.

---

## EmailJS Setup

The contact form uses [EmailJS](https://www.emailjs.com/) so it works as a static site, no backend required.

1. Create an EmailJS account, then create a **Service** (e.g. Gmail) and a **Template**.
2. In your template, use these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{reply_to}}`
   - `{{to_name}}`
   - `{{message}}`
3. Copy your **Service ID**, **Template ID** and **Public Key**.
4. Create a `.env` file at the project root:

   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

5. Restart the dev server.

A `.env.example` is provided as a template. Without these variables the form will fail with a clear toast error.

---

## Project Structure

```
hritik-chauhan-portfolio/
├── public/
│   ├── favicon.svg            # SVG favicon
│   ├── og-image.svg           # Open Graph / Twitter card image
│   ├── profile.svg            # Hero avatar placeholder
│   ├── resume.pdf             # Downloadable resume (replace with yours)
│   ├── resume.txt             # Plain-text fallback resume
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── App.tsx                # Routes, layout shell, global effects
│   ├── main.tsx               # Entry point with providers
│   ├── components/
│   │   ├── common/            # Section, SectionHeading, CountUp, SkeletonCard
│   │   ├── effects/           # ScrollProgress, SpotlightCursor, Particles, GradientBlobs
│   │   ├── layout/            # Navbar, Footer
│   │   ├── providers/         # ThemeProvider
│   │   ├── sections/          # Hero, About, Skills, Experience, Projects, Achievements, Contact
│   │   └── ui/                # Shadcn-style primitives (button, card, dialog, toast, etc.)
│   ├── lib/
│   │   ├── data.ts            # Single source of truth for content
│   │   └── utils.ts           # cn(), helpers
│   ├── pages/
│   │   ├── Home.tsx           # Composed home page (lazy-loaded sections)
│   │   └── NotFound.tsx       # 404
│   ├── styles/
│   │   └── globals.css        # Design tokens, base styles, utilities
│   └── vite-env.d.ts          # Vite env typings
├── index.html                 # SEO + OG + JSON-LD + theme bootstrap
├── tailwind.config.ts
├── tsconfig*.json
├── vite.config.ts
├── vercel.json                # Deployment config
├── .env.example
└── package.json
```

---

## Customising Content

All copy, projects, skills, stats and links live in **one file**: [`src/lib/data.ts`](./src/lib/data.ts).

To make the site your own:

1. **Replace assets in `/public`**:
   - `resume.pdf` — drop your actual resume PDF here
   - `profile.svg` — replace with your photo (`profile.jpg` / `profile.png`) and update `personal.avatarPath` in `data.ts`
   - `og-image.svg` — replace with a branded social share image (1200×630)
2. **Edit `src/lib/data.ts`**:
   - `personal` — name, bio, email, phone, links
   - `titles` — rotating hero titles
   - `stats`, `skillGroups`, `experiences`, `projects`, `achievements`, `contactDetails`
3. **Update `index.html`** with your canonical URL and JSON-LD metadata.

---

## Deployment

### Vercel (recommended)

1. Push the repo to GitHub.
2. On [vercel.com](https://vercel.com/new), import the repo.
3. Vercel auto-detects Vite. Settings (already configured in `vercel.json`):
   - **Framework**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Add the three EmailJS environment variables in **Project → Settings → Environment Variables**:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
5. Deploy. SPA rewrites and asset cache headers are already set in `vercel.json`.

### Netlify

1. New site from Git → pick the repo.
2. Build command: `npm run build`. Publish directory: `dist`.
3. Add the same `VITE_EMAILJS_*` environment variables.
4. Add a `_redirects` file or use `netlify.toml` for SPA fallback (Vercel users can skip this).

### Static hosting (any provider)

Run `npm run build` and upload the contents of `dist/`. Make sure your host serves `index.html` for unknown routes (SPA fallback).

---

## Scripts

| Script               | Description                                |
| -------------------- | ------------------------------------------ |
| `npm run dev`        | Start the Vite dev server                  |
| `npm run build`      | Type-check + build for production          |
| `npm run preview`    | Preview the production build               |
| `npm run lint`       | (Optional) ESLint                          |
| `npm run type-check` | TypeScript-only check, no emit             |

---

## Accessibility & Performance

- Semantic landmarks (`header`, `main`, `footer`, `nav`, `section[aria-label]`)
- Focus-visible rings on all interactive elements
- Toast notifications use `role="status"` with `aria-live="polite"`
- Form fields have proper labels, `aria-invalid`, and inline error messaging
- `prefers-reduced-motion` disables expensive animations
- Bundled into separate chunks (`react`, `motion`, `icons`, per-section)
- Critical hero markup ships eagerly; below-the-fold sections are lazy-loaded with skeleton placeholders

---

## Credits

- Design language inspired by Vercel, Linear, Apple, Stripe
- Icons by [Lucide](https://lucide.dev)
- Fonts: [Inter](https://rsms.me/inter/) + [JetBrains Mono](https://www.jetbrains.com/lp/mono/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

Built with ❤️ by **Hritik Chauhan** — React + TypeScript + Tailwind.
