'use me';
'use client';

import React from 'react';
import { Calendar, FileText, Sparkles, ShieldCheck } from 'lucide-react';

export const PatientJourney: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Book your consultation',
      description: 'Schedule your initial appointment online or by phone with our friendly Mayfair reception team.',
      icon: Calendar,
    },
    {
      number: '02',
      title: 'Receive your personalised plan',
      description: 'Undergo a 3D intraoral scan and receive a transparent treatment plan with fixed fees.',
      icon: FileText,
    },
    {
      number: '03',
      title: 'Begin your treatment',
      description: 'Relax in our tranquil care suites as your bespoke dental treatment is precisely delivered.',
      icon: Sparkles,
    },
    {
      number: '04',
      title: 'Enjoy ongoing aftercare',
      description: 'Benefit from comprehensive post-treatment care and dedicated long-term smile support.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-[#F5F2EB] border-b border-[#CCD6CF]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-semibold text-[#143C3A] uppercase tracking-widest block">
            Seamless Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B1D1D] tracking-tight">
            Your Patient Journey
          </h2>
          <p className="text-xs sm:text-sm text-[#1B1D1D]/75 font-normal">
            Four simple steps from your first enquiry to a lifetime of confident smiles.
          </p>
        </div>

        {/* Compact 4-Step Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white border border-[#CCD6CF] rounded-2xl p-6 shadow-clinic-card relative flex flex-col justify-between space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#B8926A] tracking-wider uppercase">
                    Step {step.number}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-[#F5F2EB] flex items-center justify-center text-[#143C3A]">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-serif font-bold text-lg text-[#143C3A]">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#1B1D1D]/75 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
