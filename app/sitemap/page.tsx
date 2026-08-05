import React from 'react';
import Link from 'next/link';
import { treatmentsData } from '@/data/treatments';
import { teamData } from '@/data/team';
import { localAreasData } from '@/data/areas';
import { practiceConfig } from '@/data/practice';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Sitemap | ${practiceConfig.name}`,
  description: `Complete HTML sitemap directory for ${practiceConfig.name}. Browse all pages, treatment detail guides, team profiles, and area pages.`,
};

export default function SitemapPage() {
  return (
    <div className="bg-navy-900 text-ivory min-h-screen">
      <section className="py-16 bg-navy-950 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-semibold text-brass uppercase tracking-widest block">
            Navigation Index
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ivory">
            Website Sitemap
          </h1>
        </div>
      </section>

      <section className="py-20 bg-ivory text-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-xs">
          {/* Main Pages */}
          <div className="space-y-3 bg-white p-6 rounded-2xl border border-stone-dark/30 shadow-soft">
            <h2 className="font-serif font-bold text-lg text-navy-900 border-b border-stone-dark/20 pb-2">
              Main Pages
            </h2>
            <ul className="space-y-2 text-charcoal-muted">
              <li><Link href="/" className="hover:text-teal font-medium">Home</Link></li>
              <li><Link href="/about" className="hover:text-teal font-medium">About Us</Link></li>
              <li><Link href="/new-patients" className="hover:text-teal font-medium">New Patient Guide</Link></li>
              <li><Link href="/fees" className="hover:text-teal font-medium">Fees & Finance</Link></li>
              <li><Link href="/emergency-dentist" className="hover:text-teal font-medium">Emergency Care</Link></li>
              <li><Link href="/nervous-patients" className="hover:text-teal font-medium">Nervous Patients</Link></li>
              <li><Link href="/patient-information" className="hover:text-teal font-medium">Patient Information Hub</Link></li>
              <li><Link href="/faqs" className="hover:text-teal font-medium">FAQs</Link></li>
              <li><Link href="/reviews" className="hover:text-teal font-medium">Patient Reviews</Link></li>
              <li><Link href="/contact" className="hover:text-teal font-medium">Contact Us</Link></li>
            </ul>
          </div>

          {/* Treatment Pages */}
          <div className="space-y-3 bg-white p-6 rounded-2xl border border-stone-dark/30 shadow-soft">
            <h2 className="font-serif font-bold text-lg text-navy-900 border-b border-stone-dark/20 pb-2">
              Treatments
            </h2>
            <ul className="space-y-2 text-charcoal-muted">
              <li><Link href="/treatments" className="hover:text-teal font-bold">All Treatments Directory</Link></li>
              {treatmentsData.map((t) => (
                <li key={t.slug}>
                  <Link href={`/treatments/${t.slug}`} className="hover:text-teal">
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Team Pages */}
          <div className="space-y-3 bg-white p-6 rounded-2xl border border-stone-dark/30 shadow-soft">
            <h2 className="font-serif font-bold text-lg text-navy-900 border-b border-stone-dark/20 pb-2">
              Our Team
            </h2>
            <ul className="space-y-2 text-charcoal-muted">
              <li><Link href="/team" className="hover:text-teal font-bold">Team Overview Roster</Link></li>
              {teamData.map((m) => (
                <li key={m.id}>
                  <Link href={`/team/${m.id}`} className="hover:text-teal">
                    {m.name} ({m.role})
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Local Area SEO & Legal */}
          <div className="space-y-6">
            <div className="space-y-3 bg-white p-6 rounded-2xl border border-stone-dark/30 shadow-soft">
              <h2 className="font-serif font-bold text-lg text-navy-900 border-b border-stone-dark/20 pb-2">
                Local Areas
              </h2>
              <ul className="space-y-2 text-charcoal-muted">
                {localAreasData.map((a) => (
                  <li key={a.slug}>
                    <Link href={`/area/${a.slug}`} className="hover:text-teal">
                      Dentist near {a.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 bg-white p-6 rounded-2xl border border-stone-dark/30 shadow-soft">
              <h2 className="font-serif font-bold text-lg text-navy-900 border-b border-stone-dark/20 pb-2">
                Legal & Governance
              </h2>
              <ul className="space-y-2 text-charcoal-muted">
                <li><Link href="/privacy-policy" className="hover:text-teal">Privacy Policy</Link></li>
                <li><Link href="/cookie-policy" className="hover:text-teal">Cookie Policy</Link></li>
                <li><Link href="/complaints" className="hover:text-teal">Complaints Procedure</Link></li>
                <li><Link href="/accessibility" className="hover:text-teal">Accessibility Statement</Link></li>
                <li><Link href="/terms" className="hover:text-teal">Terms of Use</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
