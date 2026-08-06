'use me';
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight, Star, CreditCard, Clock, CheckCircle2 } from 'lucide-react';
import { practiceConfig } from '@/data/practice';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#F5F2EB] pt-8 pb-12 lg:pt-14 lg:pb-16 overflow-hidden border-b border-[#CCD6CF]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#CCD6CF] shadow-clinic-soft text-xs font-semibold text-[#143C3A] tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#143C3A] animate-pulse" />
              <span>Mayfair & Central London • Private Dental Care</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl xl:text-[76px] font-bold text-[#1B1D1D] tracking-tight leading-[1.05]">
              Smile freely.<br />
              <span className="italic font-normal text-[#143C3A]">Live confidently.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#1B1D1D]/80 max-w-2xl leading-relaxed font-normal">
              Advanced cosmetic and general dentistry, delivered with clinical precision and a genuinely personal approach.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Link
                href="/contact#appointment-form"
                className="btn-primary text-sm sm:text-base py-3.5 px-7 shadow-clinic-card"
              >
                <Calendar className="w-4 h-4 text-[#B8926A]" />
                <span>Book a Consultation</span>
              </Link>

              <Link
                href="/treatments"
                className="btn-secondary text-sm sm:text-base py-3.5 px-7"
              >
                <span>Explore Treatments</span>
                <ArrowRight className="w-4 h-4 text-[#143C3A]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Image with Floating Review Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[400px] sm:h-[480px] w-full rounded-3xl overflow-hidden border border-[#CCD6CF] shadow-clinic-elevated group">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
                alt="St. James Clinic modern dental suite and patient care"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-102 filter brightness-[0.98] contrast-[1.03]"
                priority
              />
              {/* Warm Soft Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#143C3A]/45 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Overlapping Floating Review Card */}
            <div className="absolute -bottom-5 -left-3 sm:-left-6 bg-white border border-[#CCD6CF] shadow-clinic-elevated p-4 sm:p-5 rounded-2xl max-w-[280px] animate-fadeIn hidden sm:block">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="flex text-[#B8926A]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#B8926A]" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#143C3A]">Verified Patient</span>
              </div>
              <p className="text-xs text-[#1B1D1D]/90 italic font-serif leading-relaxed mb-2">
                &ldquo;The team made me feel relaxed from day one. My bonding looks entirely natural.&rdquo;
              </p>
              <div className="flex items-center justify-between text-[11px] text-[#1B1D1D]/70 pt-1.5 border-t border-[#CCD6CF]/40 font-medium">
                <span className="font-semibold text-[#143C3A]">Charlotte M. • Mayfair Patient</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Significantly Enlarged 3-Item Trust Row Inside Hero */}
        <div className="mt-10 sm:mt-12 pt-8 pb-4 border-t border-[#CCD6CF]/60">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#CCD6CF]/60">
            {/* Item 1: 4.9 Google Rating */}
            <div className="flex items-center gap-4 pt-4 md:pt-0 md:pr-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white border border-[#CCD6CF] flex items-center justify-center text-[#B8926A] shrink-0 shadow-clinic-soft">
                <Star className="w-6 h-6 sm:w-7 sm:h-7 fill-[#B8926A]" />
              </div>
              <div>
                <span className="block text-base sm:text-lg font-bold text-[#143C3A] tracking-tight leading-snug">
                  4.9 Google Rating
                </span>
                <span className="block text-xs sm:text-sm text-[#1B1D1D]/75 font-normal">
                  420+ verified reviews
                </span>
              </div>
            </div>

            {/* Item 2: Flexible Finance */}
            <div className="flex items-center gap-4 pt-4 md:pt-0 md:px-6">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white border border-[#CCD6CF] flex items-center justify-center text-[#143C3A] shrink-0 shadow-clinic-soft">
                <CreditCard className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <span className="block text-base sm:text-lg font-bold text-[#143C3A] tracking-tight leading-snug">
                  Flexible Finance
                </span>
                <span className="block text-xs sm:text-sm text-[#1B1D1D]/75 font-normal">
                  0% APR available
                </span>
              </div>
            </div>

            {/* Item 3: Same-Week Appointments */}
            <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white border border-[#CCD6CF] flex items-center justify-center text-[#143C3A] shrink-0 shadow-clinic-soft">
                <Clock className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <span className="block text-base sm:text-lg font-bold text-[#143C3A] tracking-tight leading-snug">
                  Same-Week Appointments
                </span>
                <span className="block text-xs sm:text-sm text-[#1B1D1D]/75 font-normal">
                  New patient slots available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
