'use me';
'use client';

import React from 'react';
import { Star, Award, Users, Cpu, CreditCard } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    { icon: Star, text: '4.9 Google Rating', sub: '420+ Patient Reviews' },
    { icon: Award, text: '18+ Years Clinical Practice', sub: 'Mayfair Excellence' },
    { icon: Users, text: '12,000+ Smiles Restored', sub: 'Trusted UK Care' },
    { icon: Cpu, text: '3D Guided Technology', sub: 'Low-Dose Digital Scans' },
    { icon: CreditCard, text: '0% APR Finance', sub: 'Up to 12 Months' },
  ];

  return (
    <section className="bg-white py-6 border-b border-[#CCD6CF]/50 shadow-clinic-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6 divide-y md:divide-y-0 md:divide-x divide-[#CCD6CF]/50">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 pt-4 md:pt-0 md:px-4 first:pl-0 last:pr-0 min-w-[180px]"
              >
                <div className="w-8 h-8 rounded-full bg-[#F5F2EB] border border-[#CCD6CF] flex items-center justify-center text-[#143C3A] shrink-0">
                  <Icon className="w-4 h-4 text-[#143C3A]" />
                </div>
                <div>
                  <span className="block text-xs sm:text-sm font-bold text-[#143C3A] tracking-tight">
                    {item.text}
                  </span>
                  <span className="block text-[11px] text-[#1B1D1D]/60 font-medium">
                    {item.sub}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
