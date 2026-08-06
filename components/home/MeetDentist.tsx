'use me';
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { practiceConfig } from '@/data/practice';

export const MeetDentist: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-[#CCD6CF]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Column (Left 5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[480px] sm:h-[580px] w-full rounded-3xl overflow-hidden border border-[#CCD6CF] shadow-clinic-elevated group">
              <Image
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=80"
                alt="Dr. Alistair Vance Principal Dentist"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#143C3A]/60 via-transparent to-transparent" />
            </div>

            {/* Overlapping Badge */}
            <div className="absolute -bottom-6 -right-4 bg-[#143C3A] text-white p-5 rounded-2xl border border-white/20 shadow-clinic-elevated max-w-[240px]">
              <span className="block text-2xl font-bold font-serif text-[#B8926A]">18+ Years</span>
              <span className="text-xs text-white/80 font-medium">Of Private Clinical Experience in London</span>
            </div>
          </div>

          {/* Editorial Biography Column (Right 7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F2EB] border border-[#CCD6CF] text-xs font-semibold text-[#143C3A]">
              <Award className="w-3.5 h-3.5" />
              <span>Lead Principal Clinician</span>
            </div>

            <div>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1B1D1D] tracking-tight">
                {practiceConfig.principalDentist.name}
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-[#143C3A] mt-1">
                {practiceConfig.principalDentist.qualifications} • {practiceConfig.principalDentist.gdcNumber}
              </p>
            </div>

            {/* Quote Block */}
            <blockquote className="border-l-2 border-[#B8926A] pl-5 py-1 italic font-serif text-xl sm:text-2xl text-[#143C3A] leading-relaxed">
              &ldquo;Great dentistry should improve your confidence without changing what makes your smile yours.&rdquo;
            </blockquote>

            {/* Bio Paragraphs */}
            <div className="space-y-4 text-xs sm:text-base text-[#1B1D1D]/80 leading-relaxed font-normal">
              <p>
                Dr Alistair Vance qualified from King’s College London Dental Institute and completed advanced postgraduate qualifications in Implant Dentistry at the Royal College of Surgeons of England.
              </p>
              <p>
                His clinical focus centers on minimally invasive cosmetic restorative care, computer-guided dental implantology, and anxiety-free patient care. He believes in thorough diagnostic consultations, where treatment plans are explained clearly with zero pressure.
              </p>
            </div>

            {/* Credentials Pill Row */}
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-[#143C3A]">
              <div className="flex items-center gap-1.5 bg-[#F5F2EB] px-3.5 py-2 rounded-xl border border-[#CCD6CF]/50">
                <CheckCircle2 className="w-4 h-4 text-[#143C3A]" />
                <span>MSc Implant Dentistry</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#F5F2EB] px-3.5 py-2 rounded-xl border border-[#CCD6CF]/50">
                <CheckCircle2 className="w-4 h-4 text-[#143C3A]" />
                <span>MJDF RCS (Eng)</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#F5F2EB] px-3.5 py-2 rounded-xl border border-[#CCD6CF]/50">
                <CheckCircle2 className="w-4 h-4 text-[#143C3A]" />
                <span>Full GDC & CQC Registered</span>
              </div>
            </div>

            {/* Profile CTA */}
            <div className="pt-4 flex items-center gap-4">
              <Link href="/team" className="btn-primary text-xs py-3.5 px-7">
                <span>View Full Clinical Team</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B8926A]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
