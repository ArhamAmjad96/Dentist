'use me';
'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, Shield, Cpu, Coffee, HeartHandshake } from 'lucide-react';

export const ClinicExperience: React.FC = () => {
  const highlights = [
    {
      title: 'Relaxed Reception Lounge',
      sub: 'Warm, quiet waiting environment with complimentary organic teas and Wi-Fi.',
      image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80',
      span: 'md:col-span-8',
      height: 'h-[320px] sm:h-[400px]',
      icon: Coffee,
    },
    {
      title: '3D Intraoral Technology',
      sub: 'Impression-free digital 3D scans replacing messy traditional dental trays.',
      image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80',
      span: 'md:col-span-4',
      height: 'h-[320px] sm:h-[400px]',
      icon: Cpu,
    },
    {
      title: 'State-of-the-Art Treatment Suites',
      sub: 'Ultra-quiet dental equipment with overhead entertainment screens and gentle lighting.',
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
      span: 'md:col-span-5',
      height: 'h-[300px] sm:h-[360px]',
      icon: Sparkles,
    },
    {
      title: 'Anxiety-Free Patient Protocol',
      sub: 'Considerate clinical approach with optional dental sedation and warm scented towels.',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
      span: 'md:col-span-7',
      height: 'h-[300px] sm:h-[360px]',
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="py-24 bg-white border-b border-[#CCD6CF]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold text-[#143C3A] uppercase tracking-widest block">
            Clinical Environment
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1B1D1D] tracking-tight">
            Designed for comfort, privacy and precision.
          </h2>
          <p className="text-sm sm:text-base text-[#1B1D1D]/70 font-normal">
            Step inside our Mayfair clinic — crafted to feel more like a calm wellness retreat than a clinical dentist practice.
          </p>
        </div>

        {/* Mixed-Size Editorial Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`${item.span} relative ${item.height} rounded-3xl overflow-hidden border border-[#CCD6CF] shadow-clinic-card group`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#143C3A]/90 via-[#143C3A]/30 to-transparent p-6 sm:p-8 flex flex-col justify-end text-white">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-[#B8926A] mb-3">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/85 max-w-md font-normal leading-relaxed">
                    {item.sub}
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
