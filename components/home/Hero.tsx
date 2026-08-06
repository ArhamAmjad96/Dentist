'use me';
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight, Star, CreditCard, Clock, CheckCircle2, Shield } from 'lucide-react';
import { practiceConfig } from '@/data/practice';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#F8FAFA] pt-8 pb-12 lg:pt-14 lg:pb-16 overflow-hidden border-b border-[#DDE4E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Small Location Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DDE4E6] shadow-nordic-soft text-xs font-semibold text-[#122A38] tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#70AEB3] animate-pulse" />
              <span>Mayfair & Central London • Private Dental Care</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-sans text-4xl sm:text-6xl xl:text-[74px] font-extrabold text-[#122A38] tracking-tight leading-[1.06]">
              Modern dentistry,<br />
              designed around <span className="italic font-serif font-normal text-[#70AEB3]">you</span>.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#122A38]/80 max-w-2xl leading-relaxed font-normal">
              Personalised cosmetic and general dental care in a calm, contemporary environment.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Link
                href="/contact#appointment-form"
                className="btn-primary text-sm sm:text-base py-3.5 px-7 shadow-nordic-soft"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book a Consultation</span>
              </Link>

              <Link
                href="/treatments"
                className="btn-secondary text-sm sm:text-base py-3.5 px-7"
              >
                <span>Explore Treatments</span>
                <ArrowRight className="w-4 h-4 text-[#122A38]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Premium Bright Image with Floating Review Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[400px] sm:h-[480px] w-full rounded-3xl overflow-hidden border border-[#DDE4E6] shadow-nordic-elevated group bg-white">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
                alt="St. James Clinic modern dental suite and patient care"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-102 filter brightness-[1.02] contrast-[1.01]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#122A38]/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Review Card */}
            <div className="absolute -bottom-5 -left-3 sm:-left-6 bg-white border border-[#DDE4E6] shadow-nordic-elevated p-4 sm:p-5 rounded-2xl max-w-[280px] animate-fadeIn hidden sm:block">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="flex text-[#D6B99A]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D6B99A]" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#122A38]">Verified Patient</span>
              </div>
              <p className="text-xs text-[#122A38]/90 italic font-serif leading-relaxed mb-2">
                &ldquo;Calm atmosphere and brilliant results. My clear aligner journey was flawless.&rdquo;
              </p>
              <div className="flex items-center justify-between text-[11px] text-[#122A38]/70 pt-1.5 border-t border-[#DDE4E6] font-medium">
                <span className="font-semibold text-[#122A38]">Charlotte M. • Mayfair</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#70AEB3]" />
              </div>
            </div>
          </div>
        </div>

        {/* Significantly Enlarged 3 Trust Indicators */}
        <div className="mt-10 sm:mt-12 pt-8 pb-4 border-t border-[#DDE4E6]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#DDE4E6]">
            {/* 1. 4.9 Google Rating */}
            <div className="flex items-center gap-4 pt-4 md:pt-0 md:pr-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#E7F1F3] border border-[#DDE4E6] flex items-center justify-center text-[#D6B99A] shrink-0 shadow-nordic-soft">
                <Star className="w-6 h-6 sm:w-7 sm:h-7 fill-[#D6B99A]" />
              </div>
              <div>
                <span className="block text-base sm:text-lg font-bold text-[#122A38] tracking-tight leading-snug">
                  4.9 Google Rating
                </span>
                <span className="block text-xs sm:text-sm text-[#122A38]/70 font-normal">
                  420+ verified reviews
                </span>
              </div>
            </div>

            {/* 2. Flexible Finance */}
            <div className="flex items-center gap-4 pt-4 md:pt-0 md:px-6">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#E7F1F3] border border-[#DDE4E6] flex items-center justify-center text-[#70AEB3] shrink-0 shadow-nordic-soft">
                <CreditCard className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <span className="block text-base sm:text-lg font-bold text-[#122A38] tracking-tight leading-snug">
                  Flexible Finance
                </span>
                <span className="block text-xs sm:text-sm text-[#122A38]/70 font-normal">
                  0% APR options available
                </span>
              </div>
            </div>

            {/* 3. Same-Week Appointments */}
            <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#E7F1F3] border border-[#DDE4E6] flex items-center justify-center text-[#70AEB3] shrink-0 shadow-nordic-soft">
                <Clock className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <span className="block text-base sm:text-lg font-bold text-[#122A38] tracking-tight leading-snug">
                  Same-Week Appointments
                </span>
                <span className="block text-xs sm:text-sm text-[#122A38]/70 font-normal">
                  New patient spaces
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
