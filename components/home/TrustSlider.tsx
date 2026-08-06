'use me';
'use client';

import React from 'react';
import {
  Heart,
  Award,
  Cpu,
  Smile,
  CheckCircle2,
  FileText,
  CreditCard,
  Clock,
  ShieldCheck,
  Shield,
} from 'lucide-react';

export const TrustSlider: React.FC = () => {
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

  // Double the array for seamless infinite looping
  const doubleStatements = [...trustStatements, ...trustStatements];

  return (
    <section className="bg-[#F8FAFA] py-4 sm:py-6 border-b border-[#DDE4E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Rounded Container */}
        <div className="bg-[#122A38] text-white rounded-3xl lg:rounded-[48px] p-3 sm:p-4 lg:px-6 lg:py-4 shadow-nordic-card border border-[#DDE4E6]/20">
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
            
            {/* Left Fixed Introductory Message */}
            <div className="w-full lg:w-[30%] shrink-0 text-center lg:text-left lg:border-r lg:border-white/15 lg:pr-6 space-y-1">
              <span className="text-[11px] font-bold text-[#70AEB3] uppercase tracking-widest block">
                Nordic Dental Wellness
              </span>
              <p className="hidden lg:block font-sans text-xs xl:text-sm font-semibold text-white/90 leading-snug">
                Modern dental care designed around your comfort, confidence and long-term health.
              </p>
              <p className="lg:hidden font-sans text-xs font-semibold text-white/90">
                Care designed around you.
              </p>
            </div>

            {/* Right Infinite Marquee Slider */}
            <div className="w-full lg:w-[70%] overflow-hidden relative group rounded-2xl bg-white/5 py-2.5 px-2">
              {/* Fade Masks */}
              <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#122A38] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#122A38] to-transparent z-10 pointer-events-none" />

              {/* Moving Track */}
              <div className="flex items-center gap-8 sm:gap-12 animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
                {doubleStatements.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="inline-flex items-center gap-3 shrink-0 text-white"
                    >
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#70AEB3]/20 border border-[#70AEB3]/30 flex items-center justify-center text-[#70AEB3]">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <span className="text-sm sm:text-base xl:text-lg font-semibold tracking-tight">
                        {item.text}
                      </span>
                      <span className="text-white/20 pl-4 sm:pl-6 text-sm">|</span>
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
