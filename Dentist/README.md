# Premium UK Dental & Oral Health Practice Master Website Template

A complete, production-ready, highly polished Next.js 16 (App Router) website master template for UK dental and oral health practices. Built with TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.

Designed to serve as a reusable master template that can be rapidly personalized for different dental businesses by updating central structured data (`data/practice.ts`, `data/treatments.ts`, `data/team.ts`, `data/faqs.ts`, etc.) without redesigning the site.

## Key Features

- **Dynamic Practice Type Adaptation**: Supports General Dental Practices, Private Dental Clinics, Mixed NHS/Private, Orthodontists, Dental Laboratories, Denture Clinics, Hygienists, Implant Clinics, and Emergency Dentists.
- **UK Compliance & Regulatory Integration**: Built-in disclaimers for GDC registration numbers, CQC status, NHS Banded charges, complaints escalation (DCS / NHS Ombudsman), and emergency triage warnings (111 / 999).
- **Structured Data System**: Central configuration in `data/practice.ts` updates header, footer, hero, contact info, schema metadata, and treatment cards automatically.
- **UK Dental Aesthetic**: Sophisticated palette using Deep Ink Navy (`#12202E`), Warm Ivory (`#F7F4EE`), Soft Stone (`#E8E4DC`), Muted Sage (`#AAB8AA`), Refined Teal (`#296C6B`), and Warm Brass accents (`#B79762`).
- **High-Converting Appointment Journey**: Client and server-side validated enquiry forms with honeypot anti-spam protection.
- **Accessibility & SEO**: WCAG 2.2 AA compliant keyboard navigation, ARIA accordions, skip-to-content links, Schema.org JSON-LD (Dentist, MedicalBusiness, Person, FAQPage, BreadcrumbList), XML sitemap, and robots.txt.
- **GDPR Cookie Management**: Granular cookie banner and preference modal blocking non-essential analytics prior to explicit user consent.

---

## Directory Structure

```
.
├── app/
│   ├── layout.tsx                  # Global layout with SEO metadata & Cookie consent
│   ├── page.tsx                    # Homepage
│   ├── about/page.tsx              # Practice history, philosophy, facilities
│   ├── treatments/page.tsx         # Treatment directory with category filters
│   ├── treatments/[slug]/page.tsx  # Dynamic treatment detail pages
│   ├── team/page.tsx               # Full clinical team roster
│   ├── team/[id]/page.tsx          # Individual clinician profiles
│   ├── fees/page.tsx               # Fee guide with NHS/Private tabs & 0% finance
│   ├── new-patients/page.tsx       # First visit journey & checklist
│   ├── emergency-dentist/page.tsx  # Urgent care triage & emergency contact
│   ├── nervous-patients/page.tsx   # Supportive dental anxiety care
│   ├── patient-information/page.tsx# Resource hub
│   ├── faqs/page.tsx               # Grouped ARIA accordion FAQs
│   ├── reviews/page.tsx            # Verified patient feedback
│   ├── contact/page.tsx            # Contact details & interactive appointment form
│   ├── area/[slug]/page.tsx        # Local SEO area landing pages
│   ├── privacy-policy/page.tsx     # UK GDPR Privacy Policy
│   ├── cookie-policy/page.tsx      # Cookie Policy
│   ├── complaints/page.tsx         # Complaints procedure & Ombudsman routes
│   ├── accessibility/page.tsx      # WCAG 2.2 AA Accessibility Statement
│   ├── terms/page.tsx              # Terms of Website Use
│   ├── sitemap/page.tsx            # Visual HTML sitemap
│   ├── sitemap.ts                  # Dynamic Next.js XML sitemap
│   ├── robots.ts                   # Search engine instructions
│   └── api/
│       └── contact/route.ts        # Form processing API endpoint
├── components/
│   ├── layout/                     # Header, Footer, AnnouncementBar, MobileNav, CookieBanner
│   ├── home/                       # Hero, TrustStrip, Welcome, Treatments, WhyChooseUs, Nervous, Tech, Reviews
│   ├── ui/                         # Accordion, TabGroup, SchemaOrg
│   └── forms/                      # AppointmentForm
├── data/
│   ├── practice.ts                 # Master Practice Configuration
│   ├── treatments.ts               # Treatment database
│   ├── team.ts                     # Team database
│   ├── faqs.ts                     # FAQ database
│   ├── reviews.ts                  # Reviews database
│   └── areas.ts                    # Local SEO areas
└── lib/
    ├── utils.ts                    # Formatting & utility functions
    └── schema.ts                   # Schema.org structured data generators
```

---

## Local Development Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run dev server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Start Production Server**:
   ```bash
   npm run start
   ```

---

## Deploying to Vercel

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Log into your [Vercel Dashboard](https://vercel.com) and click **Add New Project**.
3. Import the repository.
4. Framework Preset will be automatically detected as **Next.js**.
5. Click **Deploy**.

For detailed instructions on personalizing the business data for a new practice lead, refer to `CONTENT_REPLACEMENT_GUIDE.md`.
