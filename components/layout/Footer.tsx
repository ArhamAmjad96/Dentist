'use me';
'use client';

import React from 'react';
import Link from 'next/link';
import { practiceConfig } from '@/data/practice';
import { treatmentsData } from '@/data/treatments';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  ExternalLink,
  Heart,
  AlertCircle,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const isLab = practiceConfig.type === 'dental-laboratory';
  const isOrtho = practiceConfig.type === 'orthodontist';

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-24 lg:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Col 1: Practice Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-cyan-600 text-white flex items-center justify-center font-serif font-bold text-xl">
                S
              </div>
              <span className="font-serif text-xl font-bold text-white tracking-tight">
                {practiceConfig.name}
              </span>
            </Link>
            <p className="text-sm text-cyan-100 leading-relaxed max-w-sm font-normal">
              {practiceConfig.description}
            </p>

            {/* Regulatory Badge Box */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-cyan-300 font-bold">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>{practiceConfig.cqcInfo.status}</span>
              </div>
              <p className="text-cyan-100 text-[11px] leading-normal font-normal">
                Dental professionals at {practiceConfig.name} are registered and regulated by the General Dental Council (GDC).
              </p>
              {practiceConfig.gdcNumber && (
                <p className="text-cyan-300 font-mono text-[11px]">
                  {practiceConfig.gdcNumber}
                </p>
              )}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-white text-base border-b border-slate-800 pb-2">
              Practice Links
            </h3>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <Link href="/" className="text-cyan-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-cyan-100 hover:text-white transition-colors">
                  About Our Clinic
                </Link>
              </li>
              <li>
                <Link href="/new-patients" className="text-cyan-100 hover:text-white transition-colors">
                  {isLab ? 'Laboratory Referrals' : 'New Patient Guide'}
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-cyan-100 hover:text-white transition-colors">
                  Our Clinical Team
                </Link>
              </li>
              <li>
                <Link href="/fees" className="text-cyan-100 hover:text-white transition-colors">
                  Fee Guide & Financing
                </Link>
              </li>
              <li>
                <Link href="/emergency-dentist" className="text-cyan-300 hover:text-white transition-colors flex items-center gap-1.5 font-bold">
                  <AlertCircle className="w-3.5 h-3.5" />
                  Emergency Care
                </Link>
              </li>
              <li>
                <Link href="/nervous-patients" className="text-cyan-100 hover:text-white transition-colors">
                  Nervous Patients
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Treatments */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-white text-base border-b border-slate-800 pb-2">
              {isLab ? 'Lab Services' : 'Key Treatments'}
            </h3>
            <ul className="space-y-2 text-sm font-medium">
              {treatmentsData.slice(0, 6).map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/treatments/${t.slug}`}
                    className="text-cyan-100 hover:text-white transition-colors"
                  >
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-white text-base border-b border-slate-800 pb-2">
              Contact & Hours
            </h3>
            <ul className="space-y-2.5 text-xs text-cyan-100">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-white">
                  {practiceConfig.address}, {practiceConfig.city}, {practiceConfig.postcode}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`tel:${practiceConfig.phone.replace(/\s+/g, '')}`} className="text-white hover:text-cyan-300 transition-colors font-bold">
                  {practiceConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${practiceConfig.email}`} className="text-white hover:text-cyan-300 transition-colors">
                  {practiceConfig.email}
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <span className="text-xs font-bold text-white flex items-center gap-1 mb-1">
                <Clock className="w-3.5 h-3.5 text-cyan-400" /> Opening Hours
              </span>
              <ul className="text-[11px] space-y-1 text-cyan-100 font-medium">
                {practiceConfig.openingHours.slice(0, 5).map((oh, i) => (
                  <li key={i} className="flex justify-between">
                    <span>{oh.day}:</span>
                    <span className="text-white">{oh.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Legal & Compliance Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 text-xs text-cyan-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <p className="text-white font-medium">
              &copy; {new Date().getFullYear()} {practiceConfig.name}. All rights reserved.
            </p>
            <p className="text-[11px] text-cyan-200">
              {practiceConfig.status === 'private'
                ? 'This is a private dental practice. NHS treatment is not currently provided.'
                : practiceConfig.status === 'mixed'
                ? 'We provide a combination of NHS and private treatment. Availability and eligibility may vary.'
                : 'NHS appointment availability may change. Please contact the practice directly.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <Link href="/complaints" className="hover:text-white transition-colors">
              Complaints Procedure
            </Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">
              Accessibility
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
