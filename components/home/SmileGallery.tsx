'use me';
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  treatment: string;
  duration: string;
  goal: string;
  slug: string;
  beforeImage: string;
  afterImage: string;
}

export const SmileGallery: React.FC = () => {
  const cases: CaseStudy[] = [
    {
      id: 'case-1',
      title: 'Full Smile Alignment',
      treatment: 'Invisalign + Boutique Whitening',
      duration: '6 Months',
      goal: 'Correct lower crowding and brighten tooth shade.',
      slug: 'invisalign-aligners',
      beforeImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'case-2',
      title: 'Single Visit Edge Sculpting',
      treatment: 'Composite Bonding (6 Teeth)',
      duration: '1 Appointment',
      goal: 'Repair uneven edges and close central gap without drilling.',
      slug: 'composite-bonding',
      beforeImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'case-3',
      title: 'Front Incisor Restoration',
      treatment: 'Dental Implant + Ceramic Crown',
      duration: '4 Months',
      goal: 'Replace missing incisor with natural ceramic shade match.',
      slug: 'dental-implants',
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
    <section className="py-16 lg:py-24 bg-white border-b border-[#DDE4E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E7F1F3] border border-[#DDE4E6] text-xs font-semibold text-[#122A38]">
            <Sparkles className="w-3.5 h-3.5 text-[#D6B99A]" />
            <span>Clinical Results & Aesthetics</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-[#122A38] tracking-tight">
            Smile <span className="italic font-serif font-normal text-[#70AEB3]">Transformations</span>
          </h2>
          <p className="text-sm sm:text-base text-[#122A38]/70 font-normal">
            Drag the interactive handle on each case to explore before and after clinical outcomes.
          </p>
        </div>

        {/* 3 Featured Case Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((c) => {
            const position = sliderPositions[c.id] || 50;
            return (
              <div
                key={c.id}
                className="bg-[#F8FAFA] border border-[#DDE4E6] rounded-2xl overflow-hidden shadow-nordic-soft space-y-4 p-5 flex flex-col justify-between"
              >
                {/* Before/After Slider */}
                <div className="relative h-64 w-full rounded-xl overflow-hidden select-none border border-[#DDE4E6]">
                  <Image src={c.beforeImage} alt={`${c.title} Before`} fill className="object-cover" />
                  <div className="absolute top-3 left-3 bg-black/60 text-white px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                    Before
                  </div>

                  <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
                    <Image src={c.afterImage} alt={`${c.title} After`} fill className="object-cover" />
                    <div className="absolute top-3 left-3 bg-[#70AEB3] text-white px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                      After
                    </div>
                  </div>

                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={position}
                    onChange={(e) => handleSliderChange(c.id, Number(e.target.value))}
                    className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-10"
                    aria-label="Before and after slider handle"
                  />

                  <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-md pointer-events-none" style={{ left: `${position}%` }}>
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#122A38] border-2 border-white flex items-center justify-center text-white text-xs">
                      ↔
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-[#70AEB3] uppercase tracking-wider block">
                    {c.treatment} • {c.duration}
                  </span>
                  <h3 className="font-sans font-bold text-xl text-[#122A38]">
                    {c.title}
                  </h3>
                  <p className="text-xs text-[#122A38]/75 font-normal">
                    <strong className="text-[#122A38]">Goal:</strong> {c.goal}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#DDE4E6]">
                  <Link href={`/treatments/${c.slug}`} className="btn-secondary text-xs w-full justify-center py-2.5">
                    <span>View Case Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Transformations Button */}
        <div className="text-center pt-2">
          <Link href="/reviews" className="btn-primary text-xs py-3.5 px-8">
            <span>View All Transformations</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
