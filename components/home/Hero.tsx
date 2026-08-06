'use me';
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight, Star, CheckCircle2, Heart, Award, Cpu, Smile, FileText, CreditCard, Clock, ShieldCheck, Shield } from 'lucide-react';
import { practiceConfig } from '@/data/practice';

export const Hero: React.FC = () => {
  const trustStatements = [
    { text: 'Patient-First Care', icon: Heart },
    { text: 'Experienced Dental Team', icon: Award },
    { text: 'Modern Digital Dentistry', icon: Cpu },
    { text: 'Gentle Treatment', icon: Smile },
    { text: 'Natural-Looking Results', icon: CheckCircle2 },
    { text: 'Personalised Care Plans', icon: FileText },
    { text: 'Flexible Finance Options', icon: CreditCard },
    { text: 'Same-Week Appointments', icon: Clock },
    { text: 'Transparent Pricing', icon: ShieldCheck },
    { text: 'Trusted UK Standards', icon: Shield },
  ];

  const doubleStatements = [...trustStatements, ...trustStatements];

  return (
    <section className="relative bg-[#F8FAFA] pt-4 pb-6 lg:pt-6 lg:pb-8 overflow-hidden border-b border-[#DDE4E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            {/* Location Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DDE4E6] shadow-nordic-soft text-xs font-bold text-[#122A38] tracking-wider uppercase">
              <span className="w-2.5 h-2.5 rounded-full bg-[#70AEB3] animate-pulse" />
              <span>Mayfair & Central London • Private Dental Care</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-sans text-3xl sm:text-5xl xl:text-[64px] font-extrabold text-[#122A38] tracking-tight leading-[1.08]">
              Modern dentistry,<br />
              designed around <span className="italic font-serif font-normal text-[#70AEB3]">you</span>.
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-lg text-[#122A38]/85 max-w-xl leading-relaxed font-medium">
              Personalised cosmetic and general dental care in a calm, contemporary environment.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <Link
                href="/contact#appointment-form"
                className="btn-primary text-xs sm:text-sm py-3.5 px-7 shadow-nordic-soft font-bold"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book a Consultation</span>
              </Link>

              <Link
                href="/treatments"
                className="btn-secondary text-xs sm:text-sm py-3.5 px-7 font-bold"
              >
                <span>Explore Treatments</span>
                <ArrowRight className="w-4 h-4 text-[#122A38]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Premium Bright Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[300px] sm:h-[360px] lg:h-[390px] w-full rounded-3xl overflow-hidden border border-[#DDE4E6] shadow-nordic-elevated group bg-white">
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
            <div className="absolute -bottom-4 -left-2 sm:-left-5 bg-white border border-[#DDE4E6] shadow-nordic-elevated p-3.5 rounded-2xl max-w-[260px] animate-fadeIn hidden sm:block">
              <div className="flex items-center gap-1.5 mb-1">
                <div className="flex text-[#D6B99A]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#D6B99A]" />
                  ))}
                </div>
                <span className="text-[11px] font-bold text-[#122A38]">Verified Patient</span>
              </div>
              <p className="text-[11px] text-[#122A38]/90 italic font-serif leading-snug mb-1.5">
                &ldquo;Calm atmosphere and brilliant results. My clear aligner journey was flawless.&rdquo;
              </p>
              <div className="flex items-center justify-between text-[10px] text-[#122A38]/70 pt-1 border-t border-[#DDE4E6] font-medium">
                <span className="font-semibold text-[#122A38]">Charlotte M. • Mayfair</span>
                <CheckCircle2 className="w-3 h-3 text-[#70AEB3]" />
              </div>
            </div>
          </div>
        </div>

        {/* Integrated Sliding Marquee Trust Slider at Bottom of Hero */}
        <div className="bg-[#122A38] text-white rounded-2xl lg:rounded-[36px] p-3 sm:p-3.5 lg:px-5 lg:py-3 shadow-nordic-card border border-[#DDE4E6]/20">
          <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-5">
            
            {/* Left Fixed Message */}
            <div className="w-full lg:w-[30%] shrink-0 text-center lg:text-left lg:border-r lg:border-white/15 lg:pr-5">
              <span className="text-[10px] font-bold text-[#70AEB3] uppercase tracking-widest block">
                Nordic Dental Wellness
              </span>
              <p className="hidden lg:block font-sans text-xs font-semibold text-white/90 leading-snug">
                Modern dental care designed around your comfort, confidence and long-term health.
              </p>
              <p className="lg:hidden font-sans text-xs font-semibold text-white/90">
                Care designed around you.
              </p>
            </div>

            {/* Right Moving Marquee Track */}
            <div className="w-full lg:w-[70%] overflow-hidden relative group rounded-xl bg-white/5 py-2 px-2">
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#122A38] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#122A38] to-transparent z-10 pointer-events-none" />

              <div className="flex items-center gap-8 sm:gap-10 animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
                {doubleStatements.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="inline-flex items-center gap-2.5 shrink-0 text-white"
                    >
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#70AEB3]/20 border border-[#70AEB3]/30 flex items-center justify-center text-[#70AEB3]">
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold tracking-tight">
                        {item.text}
                      </span>
                      <span className="text-white/20 pl-4 sm:pl-5 text-xs">|</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
