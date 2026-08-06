'use me';
'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { practiceConfig } from '@/data/practice';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#122A38] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo & Overview */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#70AEB3] flex items-center justify-center text-white font-bold text-base">
                St
              </div>
              <span className="font-sans font-bold text-xl text-white">
                {practiceConfig.name}
              </span>
            </Link>
            <p className="text-xs text-white/75 leading-relaxed font-normal">
              Modern cosmetic and general dentistry delivered with Scandinavian clarity, clinical precision, and personal care in Mayfair, London.
            </p>
            {/* Smile-inspired subtle line graphic */}
            <svg className="w-24 h-4 text-[#70AEB3]" viewBox="0 0 100 20" fill="none">
              <path d="M5 5 Q 50 20 95 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          {/* Column 2: Clinical Treatments */}
          <div className="space-y-3">
            <h4 className="font-sans font-bold text-sm text-[#70AEB3] uppercase tracking-wider">
              Treatments
            </h4>
            <ul className="space-y-2 text-xs text-white/80 font-normal">
              <li>
                <Link href="/treatments/invisalign-aligners" className="hover:text-[#70AEB3] transition-colors">
                  Invisalign Clear Aligners
                </Link>
              </li>
              <li>
                <Link href="/treatments/dental-implants" className="hover:text-[#70AEB3] transition-colors">
                  Single & Arch Dental Implants
                </Link>
              </li>
              <li>
                <Link href="/treatments/composite-bonding" className="hover:text-[#70AEB3] transition-colors">
                  Composite Bonding & Sculpting
                </Link>
              </li>
              <li>
                <Link href="/treatments/composite-bonding" className="hover:text-[#70AEB3] transition-colors">
                  Porcelain Veneers
                </Link>
              </li>
              <li>
                <Link href="/treatments/teeth-whitening" className="hover:text-[#70AEB3] transition-colors">
                  Professional Teeth Whitening
                </Link>
              </li>
              <li>
                <Link href="/treatments/dental-checkups" className="hover:text-[#70AEB3] transition-colors">
                  General Exam & Hygiene Airflow
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Patient Information */}
          <div className="space-y-3">
            <h4 className="font-sans font-bold text-sm text-[#70AEB3] uppercase tracking-wider">
              Patient Info
            </h4>
            <ul className="space-y-2 text-xs text-white/80 font-normal">
              <li>
                <Link href="/about" className="hover:text-[#70AEB3] transition-colors">
                  About Our Team & Director
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-[#70AEB3] transition-colors">
                  Smile Transformations Gallery
                </Link>
              </li>
              <li>
                <Link href="/fees" className="hover:text-[#70AEB3] transition-colors">
                  Fees & 0% Finance Calculator
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-[#70AEB3] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#70AEB3] transition-colors">
                  Contact & Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Regulatory & Contact */}
          <div className="space-y-3">
            <h4 className="font-sans font-bold text-sm text-[#70AEB3] uppercase tracking-wider">
              Practice Information
            </h4>
            <div className="space-y-2 text-xs text-white/80 font-normal">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#70AEB3]" />
                <span>{practiceConfig.address}, {practiceConfig.postcode}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#70AEB3]" />
                <a href={`tel:${practiceConfig.phone.replace(/\s+/g, '')}`} className="hover:text-[#70AEB3] font-bold">
                  {practiceConfig.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#70AEB3]" />
                <span>{practiceConfig.email}</span>
              </p>
            </div>
            <div className="pt-2 text-[11px] text-white/60 space-y-1">
              <p>{practiceConfig.gdcNumber}</p>
              <p>{practiceConfig.cqcInfo.status}</p>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/60 gap-4 font-normal">
          <p>© {new Date().getFullYear()} {practiceConfig.name}. All rights reserved. Registered in England & Wales.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
