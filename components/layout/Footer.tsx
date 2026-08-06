'use me';
'use client';

import React from 'react';
import Link from 'next/link';
import { practiceConfig } from '@/data/practice';
import { Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1B1D1D] text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Registration (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#143C3A] text-white flex items-center justify-center font-serif text-xl font-bold">
                S
              </div>
              <span className="font-serif text-2xl font-bold text-white tracking-tight">
                St. James Clinic
              </span>
            </Link>

            <p className="text-xs text-white/70 leading-relaxed font-normal max-w-sm">
              {practiceConfig.description}
            </p>

            <div className="pt-2 space-y-1.5 text-xs text-white/60">
              <p className="flex items-center gap-1.5 text-[#B8926A] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#B8926A]" />
                <span>{practiceConfig.cqcInfo.status}</span>
              </p>
              <p>Principal Dentist: {practiceConfig.principalDentist.name} ({practiceConfig.principalDentist.gdcNumber})</p>
              <p>GDC Registration: 248912 • CQC Certificate: {practiceConfig.cqcInfo.certificateNumber}</p>
            </div>
          </div>

          {/* Column 2: Clinical Treatments (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif text-lg font-bold text-white mb-2">
              Treatments & Services
            </h3>
            <ul className="space-y-2 text-xs font-normal text-white/70">
              <li>
                <Link href="/treatments/invisalign-aligners" className="hover:text-[#B8926A] transition-colors">
                  Invisalign Clear Aligners
                </Link>
              </li>
              <li>
                <Link href="/treatments/dental-implants" className="hover:text-[#B8926A] transition-colors">
                  Single & Multiple Dental Implants
                </Link>
              </li>
              <li>
                <Link href="/treatments/composite-bonding" className="hover:text-[#B8926A] transition-colors">
                  Composite Bonding & Reshaping
                </Link>
              </li>
              <li>
                <Link href="/treatments/teeth-whitening" className="hover:text-[#B8926A] transition-colors">
                  Professional Teeth Whitening
                </Link>
              </li>
              <li>
                <Link href="/treatments/dental-checkups" className="hover:text-[#B8926A] transition-colors">
                  Dental Examinations & Maintenance
                </Link>
              </li>
              <li>
                <Link href="/treatments/hygiene-appointments" className="hover:text-[#B8926A] transition-colors">
                  Airflow Stain Removal Hygiene
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Patient Information (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-serif text-lg font-bold text-white mb-2">
              Patient Care
            </h3>
            <ul className="space-y-2 text-xs font-normal text-white/70">
              <li>
                <Link href="/about" className="hover:text-[#B8926A] transition-colors">
                  About Our Practice
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-[#B8926A] transition-colors">
                  Our Clinical Team
                </Link>
              </li>
              <li>
                <Link href="/fees" className="hover:text-[#B8926A] transition-colors">
                  Fees & 0% Finance
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-[#B8926A] transition-colors">
                  Smile Transformations
                </Link>
              </li>
              <li>
                <Link href="/emergency-dentist" className="hover:text-[#B8926A] transition-colors">
                  Emergency Dental Triage
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#B8926A] transition-colors">
                  Contact & Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif text-lg font-bold text-white mb-2">
              Contact & Hours
            </h3>
            <div className="space-y-2 text-xs text-white/70">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B8926A] shrink-0 mt-0.5" />
                <span>{practiceConfig.address}, {practiceConfig.city}, {practiceConfig.postcode}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#B8926A] shrink-0" />
                <span>{practiceConfig.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#B8926A] shrink-0" />
                <span>{practiceConfig.email}</span>
              </p>
            </div>

            <div className="pt-2 text-xs text-white/60 border-t border-white/10">
              <span className="font-bold text-white block mb-1">Opening Hours:</span>
              <p>Mon - Thu: 08:30 – 18:00</p>
              <p>Friday: 08:30 – 17:00</p>
              <p>Sat - Sun: Emergency triage by appointment</p>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Regulatory Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© {new Date().getFullYear()} St. James Clinic London. All rights reserved. Registered in England & Wales.</p>
          <div className="flex flex-wrap gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/complaints" className="hover:text-white transition-colors">
              Complaints Procedure
            </Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
