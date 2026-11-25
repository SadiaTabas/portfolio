# Tabassum Aktar Sadia — Personal Developer Portfolio

> **Premium, Modern, Fully Responsive Multi-Page Developer Portfolio Website**  
> Architected for **Tabassum Aktar Sadia** — Full-Stack Web Developer, Backend Engineer & Software Quality Assurance Specialist.

---

## 🎨 Design System & Visual Direction

This portfolio follows a distinctive **editorial agency aesthetic** inspired by minimalist yet bold typography, asymmetric compositions, warm tones, and refined micro-interactions:

| Token | Hex Value | Usage |
| :--- | :--- | :--- |
| **Warm Ivory** | `#F3EEEA` | Primary background, clean editorial canvas |
| **Charcoal Black** | `#171717` | Secondary background, dark capability sections, buttons |
| **Vibrant Orange** | `#FF8500` | Strategic accent, highlights, logos, active states |
| **Card White** | `#FFFFFF` | Project cards, client cards, contact containers |
| **Muted Gray** | `#777777` | Editorial labels, metadata, secondary copy |

---

## 📑 Cross-CV Synthesis & Content Inventory

The website consolidates information from all three specialized CVs:
1. `Tabassum_Aktar_Sadia_Web_Developer_CV-v3.docx`
2. `Tabassum_Aktar_Sadia_Backend_CV.docx`
3. `Tabassum_Aktar_Sadia_SQT_CV-v3.docx`

### 🔍 Flagged Discrepancies & Centralized Configuration
As requested, differing details across the three CVs have not been combined silently; they are managed in [`data/profile.ts`](file:///f:/Portfolio/data/profile.ts) and surfaced via the interactive transparency panel on the website:

- **CGPA**: **3.97 / 4.00** at AIUB (Dean's Honorable Mention for Academic Excellence)
- **Primary Live Project**: **Dhaka Metro Rail Ticketing System** deployed at [https://metro-rail-dhaka.vercel.app](https://metro-rail-dhaka.vercel.app)
- **Official Resume**: [`/cv/Tabassum_Aktar_Sadia_Backend_CV.pdf`](file:///f:/Portfolio/public/cv/Tabassum_Aktar_Sadia_Backend_CV.pdf)
2. **Internship Position Title**:
   - `Web Developer CV-v3` & `Backend CV`: **Web Development Intern**
   - `SQT CV-v3`: **Software Development & Quality Assurance Intern**
   - *Displayed with dual competencies across full-stack engineering and SQA.*
3. **Internship Date Range**:
   - `Web Developer CV-v3` & `SQT CV-v3`: **September 2026 – November 2026 (Completed 3-Month Internship)** *(Currently active on site)*
   - `Backend CV`: **September 2026 – December 2026 (On-going)**

---

## 🌐 Multi-Page Website Routes

- [`/` — **Home**](file:///f:/Portfolio/app/page.tsx): First-impression hero with oversized typography (`BUILDING DIGITAL EXPERIENCES THAT WORK.`), grayscale portrait with orange geometric backdrop, career highlights (7+ client repositories), 3 core disciplines, and 3 featured project previews.
- [`/about` — **About Me**](file:///f:/Portfolio/app/about/page.tsx): Full-width charcoal two-column section with portrait photography, professional bio synthesized from all 3 summaries, 3 focus cards (Full-Stack, Backend, SQA), and "What I Enjoy Working On".
- [`/experience` — **Professional Experience**](file:///f:/Portfolio/app/experience/page.tsx): Modern timeline for Dcastalia Limited (Webcare Studio), detailed breakdown into 5 responsibility categories (Full-Stack, Backend, SQA, Technical SEO, Deployment), and 6 expandable client cards (*Akhter Properties, Rock Energy, Concord Ready Mix, ACE Advisory, SD Inventory, Solution 360*).
- [`/projects` — **Projects**](file:///f:/Portfolio/app/projects/page.tsx): Dynamic interactive catalogue featuring all **10 distinct projects** across the CVs with real-time category filtering (*All, Full-Stack, Backend, Web Apps, Software Testing*), search, and architectural modal views.
- [`/skills` — **Technical Toolkit**](file:///f:/Portfolio/app/skills/page.tsx): 6 structured skill cards (*Frontend, Backend, Databases, SQA Testing, Security/SEO, Tools*) without arbitrary progress bars, plus an engineering convergence overview.
- [`/education` — **Education & Honors**](file:///f:/Portfolio/app/education/page.tsx): Academic timeline for BSc CSE (AIUB), HSC (5.00), SSC (5.00), and verified certificate asset for the **Dean's Honorable Mention for Academic Excellence**.
- [`/contact` — **Contact & Inquiries**](file:///f:/Portfolio/app/contact/page.tsx): Direct channels (Email, Phone, LinkedIn, GitHub), one-click clipboard copy, and interactive contact form with validation, feedback, and clear backend integration documentation.

---

## 📥 Resume Download System

All three official PDF resumes are stored in [`public/cv/`](file:///f:/Portfolio/public/cv/):
1. **Web Development CV**: [`/cv/Tabassum_Aktar_Sadia_Web_Developer_CV.pdf`](file:///f:/Portfolio/public/cv/Tabassum_Aktar_Sadia_Web_Developer_CV.pdf) *(Primary Navbar action)*
2. **Backend Development CV**: [`/cv/Tabassum_Aktar_Sadia_Backend_CV.pdf`](file:///f:/Portfolio/public/cv/Tabassum_Aktar_Sadia_Backend_CV.pdf)
3. **Software Quality Assurance CV**: [`/cv/Tabassum_Aktar_Sadia_SQT_CV.pdf`](file:///f:/Portfolio/public/cv/Tabassum_Aktar_Sadia_SQT_CV.pdf)

---

## 🛠️ Project Structure

```
Portfolio/
├── app/
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── education/page.tsx
│   ├── experience/page.tsx
│   ├── projects/page.tsx
│   ├── skills/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components/
│   ├── contact/
│   │   └── ContactForm.tsx
│   ├── experience/
│   │   └── ClientCards.tsx
│   ├── layout/
│   │   └── Footer.tsx
│   ├── navigation/
│   │   └── Navbar.tsx
│   ├── projects/
│   │   └── ProjectsList.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── HomeCapabilities.tsx
│   │   └── HomeFeaturedProjects.tsx
│   └── ui/
│       └── DiscrepancyNotice.tsx
├── data/
│   ├── education.ts
│   ├── experience.ts
│   ├── profile.ts
│   ├── projects.ts
│   ├── skills.ts
│   └── socials.ts
├── public/
│   ├── cv/
│   ├── images/
│   └── icon.svg
├── next.config.mjs
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## 🚀 Development & Build Commands

```bash
# Start development server
npm run dev

# Run production build
npm run build

# Start production server
npm run start
```
