# Content Replacement & Personalisation Guide

This master template allows you to deploy a fully customised UK dental practice website in under 15 minutes by modifying structured data files instead of rewriting code.

## 1. Updating Master Practice Data (`data/practice.ts`)

Open `data/practice.ts` and update the `practiceConfig` object:

### Basic Identity & Contact
- `name`: Full practice name (e.g., `"Mayfair Dental Practice"`)
- `shortName`: Abbreviated practice name for mobile menus
- `type`: Select practice mode:
  - `'general'` | `'private'` | `'mixed'` | `'orthodontist'` | `'cosmetic'` | `'dental-laboratory'` | `'denture-clinic'` | `'hygienist'` | `'implant'` | `'emergency'` | `'family'` | `'specialist'`
- `status`: Select status:
  - `'private'` | `'mixed'` | `'nhs-focused'`
- `phone`, `emergencyPhone`, `email`, `whatsapp`
- `address`, `city`, `county`, `postcode`, `coordinates`

### GDC & Regulatory Verification
- `gdcNumber`: Practice or principal dentist GDC reference
- `cqcInfo`: CQC registration status and report URL
- `principalDentist`: Name, qualifications, and GDC number of the principal dentist
- `practiceManager`: Name of the practice manager for complaints

### Financial & Patient Status
- `acceptingNewPatients`: `true` or `false`
- `acceptingNhsPatients`: `true` or `false`
- `emergencyAvailable`: `true` or `false`
- `financeAvailable`: `true` or `false` (0% APR financing details)

---

## 2. Managing Treatments (`data/treatments.ts`)

To add, edit, or remove treatments:
1. Open `data/treatments.ts`.
2. Modify treatment objects in `treatmentsData`.
3. Set `featured: true` to display the treatment on the homepage.
4. Ensure `slug` matches the intended URL path (`/treatments/your-slug`).

---

## 3. Managing Clinical Team Members (`data/team.ts`)

1. Open `data/team.ts`.
2. Add or update team member objects in `teamData`.
3. Specify their role group (`'dentists'`, `'orthodontists'`, `'hygienists'`, `'nurses'`, `'technicians'`, `'management'`).
4. Ensure `gdcNumber` is accurate.

---

## 4. Local Area SEO Landing Pages (`data/areas.ts`)

To target surrounding neighbourhoods (e.g., "Dentist near Kensington"):
1. Open `data/areas.ts`.
2. Add a new area entry with `slug`, `name`, `distance`, `transportInfo`, and `description`.
3. The page will automatically be created at `/area/your-slug` and added to `sitemap.xml`.

---

## 5. Contact Form API Integration (`app/api/contact/route.ts`)

By default, form submissions return a successful JSON response. To send email notifications to the practice:
1. Obtain an API key from an email service like [Resend](https://resend.com) or [Formspree](https://formspree.io).
2. Set `RESEND_API_KEY` in your environment variables.
3. Uncomment the Resend integration block in `app/api/contact/route.ts`.
