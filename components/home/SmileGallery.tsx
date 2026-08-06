'use me';
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  treatment: string;
  duration: string;
  objective: string;
  outcome: string;
  beforeImage: string;
  afterImage: string;
}

export const SmileGallery: React.FC = () => {
  // Max 3 featured cases on homepage
  const cases: CaseStudy[] = [
    {
      id: 'case-1',
      title: 'Full Smile Alignment & Whitening',
      treatment: 'Invisalign + Boutique Whitening',
      duration: '6 Months',
      objective: 'Correct crowded lower teeth and brighten natural enamel shade.',
      outcome: 'Seamless arch alignment with 4 shades lighter natural smile.',
      beforeImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'case-2',
      title: 'Edge Sculpting & Chip Repair',
      treatment: 'Composite Edge Bonding (6 Teeth)',
      duration: '1 Single Appointment',
      objective: 'Fix uneven edges and close small central gap without tooth removal.',
      outcome: 'Symmetrical smile contouring preserving 100% natural tooth structure.',
      beforeImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'case-3',
      title: 'Single Front Tooth Restoration',
      treatment: 'Titanium Dental Implant + Porcelain Crown',
      duration: '4 Months',
      objective: 'Replace missing upper incisor lost to sports injury.',
      outcome: 'Flawless ceramic shade-matching matching adjacent natural teeth.',
      beforeImage: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const [sliderPositions, setSliderPositions] = useState<{ [key: string]: number }>({
    'case-1': 50,
    'case-2': 50,
    'case-3': 50,
  });

  const handleSliderChange = (id: string, value: number) => {
    setSliderPositions((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <section className="py-16 lg:py-20 bg-[#F5F2EB] border-b border-[#CCD6CF]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#CCD6CF] text-xs font-semibold text-[#143C3A]">
            <Sparkles className="w-3.5 h-3.5 text-[#B8926A]" />
            <span>Clinical Results & Transformations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1B1D1D] tracking-tight">
            Smile Transformations
          </h2>
          <p className="text-sm sm:text-base text-[#1B1D1D]/75 font-normal">
            Drag the interactive slider on each case to view the before and after clinical results.
          </p>
        </div>

        {/* 3 Featured Cases */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((c) => {
            const position = sliderPositions[c.id] || 50;
            return (
              <div
                key={c.id}
                className="bg-white border border-[#CCD6CF] rounded-3xl overflow-hidden shadow-clinic-card space-y-4 p-5 flex flex-col justify-between"
              >
                {/* Interactive Slider Container */}
                <div className="relative h-64 w-full rounded-2xl overflow-hidden select-none border border-[#CCD6CF]/40">
                  {/* Before Image */}
                  <Image
                    src={c.beforeImage}
                    alt={`${c.title} Before`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase">
                    Before
                  </div>

                  {/* After Image (Clipped) */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${position}%` }}
                  >
                    <Image
                      src={c.afterImage}
                      alt={`${c.title} After`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-[#143C3A] text-white px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase">
                      After
                    </div>
                  </div>

                  {/* Range Slider Control */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={position}
                    onChange={(e) => handleSliderChange(c.id, Number(e.target.value))}
                    className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-10"
                    aria-label="Before and after slider handle"
                  />

                  {/* Slider Divider Line */}
                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-white shadow-md pointer-events-none"
                    style={{ left: `${position}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#143C3A] border-2 border-white shadow-lg flex items-center justify-center text-white text-xs">
                      ↔
                    </div>
                  </div>
                </div>

                {/* Case Info */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-[#143C3A] uppercase tracking-wider block">
                    {c.treatment} • {c.duration}
                  </span>
                  <h3 className="font-serif font-bold text-xl text-[#1B1D1D]">
                    {c.title}
                  </h3>
                  <div className="text-xs text-[#1B1D1D]/75 space-y-1 pt-1 font-normal">
                    <p><strong className="text-[#143C3A]">Objective:</strong> {c.objective}</p>
                    <p><strong className="text-[#143C3A]">Outcome:</strong> {c.outcome}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Smile Transformations Button */}
        <div className="text-center pt-2">
          <Link href="/reviews" className="btn-primary text-xs py-3.5 px-8 shadow-clinic-card">
            <span>View All Smile Transformations</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#B8926A]" />
          </Link>
        </div>
      </div>
    </section>
  );
};
