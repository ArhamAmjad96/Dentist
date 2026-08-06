'use me';
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight, Star, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { practiceConfig } from '@/data/practice';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#F5F2EB] pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden border-b border-[#CCD6CF]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#CCD6CF] shadow-clinic-soft text-xs font-semibold text-[#143C3A] tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#143C3A] animate-pulse" />
              <span>Mayfair & Central London • Private Dental Care</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl xl:text-[82px] font-bold text-[#1B1D1D] tracking-tight leading-[1.05]">
              Smile freely.<br />
              <span className="italic font-normal text-[#143C3A]">Live confidently.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-xl text-[#1B1D1D]/80 max-w-2xl leading-relaxed font-normal">
              Advanced cosmetic and general dentistry, delivered with clinical precision and a genuinely personal approach.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact#appointment-form"
                className="btn-primary text-sm sm:text-base py-4 px-8 shadow-clinic-card"
              >
                <Calendar className="w-4 h-4 text-[#B8926A]" />
                <span>Book a Consultation</span>
              </Link>

              <Link
                href="/treatments"
                className="btn-secondary text-sm sm:text-base py-4 px-8"
              >
                <span>Explore Treatments</span>
                <ArrowRight className="w-4 h-4 text-[#143C3A]" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-[#CCD6CF]/60 grid grid-cols-3 gap-4 text-xs sm:text-sm font-semibold text-[#1B1D1D]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-white border border-[#CCD6CF] flex items-center justify-center text-[#B8926A] shrink-0 shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-[#B8926A]" />
                </div>
                <div>
                  <span className="block font-bold text-[#143C3A]">4.9 Google Rating</span>
                  <span className="text-[11px] text-[#1B1D1D]/60 font-normal">420+ Verified Reviews</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-white border border-[#CCD6CF] flex items-center justify-center text-[#143C3A] shrink-0 shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block font-bold text-[#143C3A]">Flexible Finance</span>
                  <span className="text-[11px] text-[#1B1D1D]/60 font-normal">0% APR Available</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-white border border-[#CCD6CF] flex items-center justify-center text-[#143C3A] shrink-0 shadow-sm">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block font-bold text-[#143C3A]">Same-Week</span>
                  <span className="text-[11px] text-[#1B1D1D]/60 font-normal">New Patient Slots</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image with Floating Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[440px] sm:h-[540px] w-full rounded-3xl overflow-hidden border border-[#CCD6CF]/80 shadow-clinic-elevated group">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
                alt="St. James Clinic modern dental suite and patient care"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-102"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#143C3A]/40 via-transparent to-transparent" />
            </div>

            {/* Overlapping Floating Consultation Card */}
            <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white border border-[#CCD6CF] shadow-clinic-elevated p-5 rounded-2xl max-w-[290px] animate-fadeIn hidden sm:block">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-[#B8926A]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#B8926A]" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#143C3A]">Verified Patient</span>
              </div>
              <p className="text-xs text-[#1B1D1D]/90 italic font-serif leading-relaxed mb-3">
                &ldquo;The team made me feel relaxed from day one. My composite bonding looks entirely natural.&rdquo;
              </p>
              <div className="flex items-center justify-between text-[11px] text-[#1B1D1D]/70 pt-2 border-t border-[#CCD6CF]/40">
                <span className="font-semibold text-[#143C3A]">Charlotte M. • Invisalign & Bonding</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
