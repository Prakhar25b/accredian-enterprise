# Accredian Enterprise – Partial Clone

A high-fidelity partial clone of the [Accredian Enterprise](https://enterprise.accredian.com/) website, built with **Next.js 14 App Router**, **Tailwind CSS**, and a **Next.js API route** for lead capture.

## 🚀 Live Demo

🔗 [Vercel](https://accredian-enterprise-umber.vercel.app/), [GitHub](https://github.com/Prakhar25b/accredian-enterprise)

---

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS v3 |
| Language | TypeScript |
| Fonts | Google Fonts (Inter + Outfit) |
| Icons | Lucide React |
| API | Next.js Route Handlers |
| Deployment | Vercel |

---

## 📦 Setup Instructions

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/accredian-enterprise.git
cd accredian-enterprise

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗂️ Project Structure

```
accredian-enterprise/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Main page (composition root)
│   ├── globals.css         # Global styles + animations
│   └── api/
│       └── leads/
│           └── route.ts    # POST /api/leads (lead capture API)
├── components/
│   └── sections/
│       ├── Navbar.tsx      # Sticky responsive navbar
│       ├── Hero.tsx        # Hero with animated dashboard card
│       ├── Stats.tsx       # Key stats bar
│       ├── Features.tsx    # 8-feature grid
│       ├── HowItWorks.tsx  # 4-step process
│       ├── Programs.tsx    # Program cards
│       ├── Testimonials.tsx# Testimonial cards
│       ├── Partners.tsx    # Marquee scrolling partners
│       ├── LeadForm.tsx    # Lead capture form (calls API)
│       └── Footer.tsx      # Full footer with links
├── tailwind.config.ts
├── next.config.mjs
└── tsconfig.json
```

---

## 🎯 Approach Taken

### 1. Content First
Studied the reference site to identify all sections and content hierarchy before writing a single line of code.

### 2. Component-Driven Architecture
Each page section is its own isolated component. The `app/page.tsx` is a clean composition of these components — no logic bleeds between sections.

### 3. Styling Philosophy
- Tailwind CSS utility classes for consistent spacing and typography
- CSS animations defined in `globals.css` for smooth page load effects
- CSS custom properties for theme colors to allow easy rebranding

### 4. API Design
`POST /api/leads` captures leads in-memory (swap with Supabase/Prisma for production). Includes server-side validation, typed data structures, and proper HTTP status codes.

### 5. Responsiveness
Every section uses a mobile-first grid. Navbar collapses to a hamburger menu on mobile. Cards stack vertically on small screens.

---

## 🤖 AI Usage Explanation

This project was built using **Claude (claude.ai)** as the primary AI assistant.

### Where AI helped:
- **Component scaffolding**: Generated initial TypeScript component structure for all 10 sections in sequence
- **Tailwind class combinations**: AI suggested responsive grid classes and hover transition patterns
- **API route**: Generated the lead validation logic and TypeScript types for the API handler
- **README**: AI drafted the initial structure of this document

### What I modified/improved manually:
- Reviewed every component for design coherence and adjusted colors, spacing, and typography to better match the reference
- Verified the mobile responsiveness by testing in DevTools and fixing breakpoints
- Adjusted the hero section's glassmorphism card to better reflect a real analytics dashboard
- Added the `animate-marquee` CSS animation for partners and tuned the timing
- Cleaned up unnecessary props and simplified component interfaces

---

## ⏫ Improvements I Would Make With More Time

1. **Database integration**: Replace in-memory lead store with Supabase (Postgres) + Prisma ORM
2. **Email notifications**: Trigger a transactional email via Resend or Nodemailer on lead submission
3. **Framer Motion animations**: Add scroll-triggered animations with Framer Motion for section reveals
4. **Auth-gated admin panel**: Dashboard to view all captured leads at `/admin`
5. **Real program data via CMS**: Integrate Contentful or Sanity to make programs editable by non-devs
6. **A/B test CTAs**: Add PostHog or Vercel Analytics to test CTA button copy
7. **i18n support**: Add Next.js internationalization for Hindi/regional languages
8. **Accessibility audit**: Full WCAG 2.1 AA audit with axe-core

---

## 🌐 Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments on push.
