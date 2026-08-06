'use me';
'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { practiceConfig } from '@/data/practice';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-[#143C3A] text-white relative overflow-hidden">
      {/* Subtle Pattern Background Accent */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#CCD6CF_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-[#B8926A]">
          <ShieldCheck className="w-4 h-4" />
          <span>Private Dentistry in Mayfair, London</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-6xl font-bold text-white tracking-tight leading-tight">
          Ready to feel confident<br className="hidden sm:block" /> about your smile?
        </h2>

        <p className="text-base sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-normal">
          Start with a relaxed consultation and discover the treatment options that are right for you.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/contact#appointment-form"
            className="btn-secondary text-sm sm:text-base py-4 px-8 bg-white text-[#143C3A] hover:bg-[#F5F2EB] shadow-clinic-elevated"
          >
            <Calendar className="w-4 h-4 text-[#B8926A]" />
            <span>Book a Consultation</span>
          </Link>

          <a
            href={`tel:${practiceConfig.phone.replace(/\s+/g, '')}`}
            className="btn-outline-light text-sm sm:text-base py-4 px-8"
          >
            <Phone className="w-4 h-4" />
            <span>Call {practiceConfig.phone}</span>
          </a>
        </div>

        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-white/70">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#B8926A]" />
            <span>4.9 Google Rating (420+ Reviews)</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#B8926A]" />
            <span>0% APR Finance Available</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#B8926A]" />
            <span>Same-Week Appointments</span>
          </span>
        </div>
      </div>
    </section>
  );
};
