# LEADLUX — Your Remote Growth Partners

> A complete, production-quality digital growth agency website built with React, Vite, and modern CSS.

LeadLux is a remote digital growth agency providing social media marketing, social media management, paid advertising, SEO, content creation, creative design, ecommerce/Shopify storefront engineering, Google Merchant Center feed optimization, web development, lead generation, analytics, and digital growth solutions.

---

## 🎨 Visual Identity & Brand Architecture

- **Primary Color:** Deep Dark Teal (`--leadlux-teal: #0A2625`)
- **Secondary Color:** Warm Ivory / Cream (`--leadlux-cream: #F7F4EC`)
- **Accent Color:** Muted Taupe / Dusty Beige (`--leadlux-taupe: #C89D5C`)
- **Supporting:** White (`--leadlux-white: #FFFFFF`)
- **Display Typography:** Editorial serif (`Playfair Display` & `Cinzel`)
- **Body Typography:** High-readability geometric sans (`Plus Jakarta Sans`) with native UTF-8 Bengali language support (`Noto Sans Bengali`).

---

## 🚀 Key Features

1. **Editorial Agency Hero**:
   - Desktop: Left 16:9 framed visual (48%) + Right content (52%).
   - Mobile: Stacks image first, content second.
2. **15 Dedicated Services**:
   - Full service detail pages (`/services/:serviceSlug`) with overview, deliverables, 5-step process, 3 pricing tiers (Starter, Growth, Premium), and FAQs.
3. **19 Real Verified Projects**:
   - Filterable portfolio: All, Shopify Storefronts, Social Media, Creative & Video, Web & AI Apps.
   - Real client links (`target="_blank" rel="noopener noreferrer"`), GitHub repositories, and drive assets.
4. **WhatsApp Conversion Engine**:
   - Company WhatsApp: `+880 1792 872188` (`01792872188`).
   - Dynamic, service-specific and project-specific pre-filled intent messages.
   - Floating WhatsApp button on desktop and mobile across all pages.
5. **Zero Backend / Zero Database**:
   - High-security, ultra-fast static frontend with zero maintenance costs.
   - Configurable central data layer: `src/data/services.js`, `src/data/projects.js`, `src/data/siteConfig.js`.
6. **100% GitHub Pages Compatible**:
   - Uses `HashRouter` to prevent broken routes or 404 reload errors on GitHub Pages.
   - Relative base paths in `vite.config.js`.

---

## 🛠️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```

### 3. Build Production Distribution
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📦 GitHub Pages Deployment

### Option A: Automated GitHub Actions (Recommended)
This repository includes a pre-configured `.github/workflows/deploy.yml`.
1. Push your repository to GitHub (`main` branch).
2. Go to repository **Settings** → **Pages**.
3. Under **Source**, select **GitHub Actions**.
4. The site will automatically build and deploy on every push.

### Option B: Manual Deploy via `gh-pages`
```bash
npm run build
npx -y gh-pages -d dist
```

---

## 📁 Project Structure

```
leadlux/
├── public/
│   ├── favicon.png
│   └── assets/
│       ├── brand/       # Official LeadLux logos & founder mockups
│       ├── hero/        # 16:9 high-res hero workstation visual
│       ├── services/    # 16:9 dedicated covers for all 15 services
│       ├── banners/     # About, Projects, Results that speak banners
│       └── projects/    # 19 real verified project screenshots & mockups
├── src/
│   ├── data/
│   │   ├── siteConfig.js # Contact info, WhatsApp, social links, founder bio
│   │   ├── services.js   # All 15 services with packages, deliverables & FAQs
│   │   └── projects.js   # 19 real projects with tags, categories & URLs
│   ├── utils/
│   │   └── whatsapp.js   # Pre-filled WhatsApp link generator
│   ├── styles/
│   │   ├── variables.css # CSS custom properties for palette & layout
│   │   └── index.css     # Global styles, typography & responsive classes
│   ├── components/       # Reusable components (Navbar, Footer, ServiceCard, ProjectCard, PricingCard, etc.)
│   ├── pages/            # Home, Services, ServiceDetail, Projects, About, Founder, Contact, NotFound
│   ├── App.jsx           # Main router & layout shell
│   └── main.jsx          # React DOM entrypoint with HashRouter
└── vite.config.js
```

---

## 📄 License & Ownership
Copyright © LeadLux Agency. All rights reserved.
