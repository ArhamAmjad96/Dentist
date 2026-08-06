'use me';
'use client';

import React from 'react';
import { Calendar, FileText, Sparkles, HeartHandshake, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const PatientJourney: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Book your consultation',
      icon: Calendar,
      description: 'Schedule a calm, comprehensive 45-minute clinical assessment at a time convenient for you.',
    },
    {
      number: '02',
      title: 'Receive your personalised plan',
      icon: FileText,
      description: 'Review low-dose 3D digital scans, treatment timelines, and transparent written fee estimates.',
    },
    {
      number: '03',
      title: 'Begin your treatment',
      icon: Sparkles,
      description: 'Experience gentle, evidence-based care delivered in a relaxed, comfortable environment.',
    },
    {
      number: '04',
      title: 'Enjoy ongoing aftercare',
      icon: HeartHandshake,
      description: 'Benefit from dedicated post-treatment follow-ups, warranty protection, and preventive maintenance.',
    },
  ];

  return (
    <section className="py-24 bg-[#F5F2EB] border-b border-[#CCD6CF]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold text-[#143C3A] uppercase tracking-widest block">
            Transparent Care Process
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1B1D1D] tracking-tight">
            Your Personalised Patient Journey
          </h2>
          <p className="text-sm sm:text-base text-[#1B1D1D]/70 font-normal">
            From your initial consultation through to aftercare, every step is designed for your comfort and clarity.
          </p>
        </div>

        {/* 4-Step Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white border border-[#CCD6CF] rounded-3xl p-6 sm:p-7 shadow-clinic-card hover:border-[#143C3A] transition-all group relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#F5F2EB] border border-[#CCD6CF] flex items-center justify-center text-[#143C3A] group-hover:bg-[#143C3A] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-serif font-bold text-2xl text-[#143C3A]/30 group-hover:text-[#143C3A] transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#143C3A] mb-2 group-hover:text-[#143C3A]">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#1B1D1D]/80 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#CCD6CF]/30 mt-6 flex items-center text-[11px] font-bold text-[#143C3A]">
                  <span>Step {idx + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link href="/contact#appointment-form" className="btn-primary text-xs py-3.5 px-8">
            <Calendar className="w-3.5 h-3.5 text-[#B8926A]" />
            <span>Start Your Journey — Book Consultation</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
