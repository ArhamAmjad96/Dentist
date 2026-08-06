'use me';
'use client';

import React from 'react';
import { Calendar, FileText, Sparkles, ShieldCheck } from 'lucide-react';

export const PatientJourney: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'Initial consultation and 3D digital oral health examination with our dental team.',
      icon: Calendar,
    },
    {
      number: '02',
      title: 'Personalised plan',
      description: 'Receive a bespoke treatment plan detailing options, 3D simulations, and fixed transparent pricing.',
      icon: FileText,
    },
    {
      number: '03',
      title: 'Treatment',
      description: 'Experience precise, gentle dental care inside our tranquil Mayfair treatment suites.',
      icon: Sparkles,
    },
    {
      number: '04',
      title: 'Aftercare',
      description: 'Enjoy ongoing post-treatment review and long-term preventive care support.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-[#F8FAFA] border-b border-[#DDE4E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-semibold text-[#70AEB3] uppercase tracking-widest block">
            Considerate Care
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-[#122A38] tracking-tight">
            Your Treatment <span className="italic font-serif font-normal text-[#70AEB3]">Journey</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#122A38]/70 font-normal">
            Four simple stages from your first enquiry to your finished smile.
          </p>
        </div>

        {/* Compact 4-Stage Horizontal Timeline */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Subtle connecting line SVG on desktop */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-[#70AEB3]/30 pointer-events-none" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white border border-[#DDE4E6] rounded-2xl p-6 shadow-nordic-soft relative flex flex-col justify-between space-y-4"
              >
                <div className="flex items-center justify-between z-10">
                  <span className="text-xs font-bold text-[#70AEB3] tracking-wider uppercase">
                    Stage {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#E7F1F3] flex items-center justify-center text-[#70AEB3]">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-sans font-bold text-lg text-[#122A38]">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#122A38]/75 leading-relaxed font-normal">
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
