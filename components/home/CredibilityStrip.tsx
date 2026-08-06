'use me';
'use client';

import React from 'react';
import { Award, Cpu, Heart, ShieldCheck } from 'lucide-react';

export const CredibilityStrip: React.FC = () => {
  const points = [
    { title: '18+ years of clinical experience', icon: Award },
    { title: 'Modern digital dentistry', icon: Cpu },
    { title: 'Personalised treatment plans', icon: Heart },
    { title: 'UK professional standards', icon: ShieldCheck },
  ];

  return (
    <div className="bg-white border-b border-[#DDE4E6] py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-between text-center md:text-left">
          {points.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="flex items-center justify-center md:justify-start gap-2.5">
                <Icon className="w-4 h-4 text-[#70AEB3] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#122A38]">
                  {p.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
