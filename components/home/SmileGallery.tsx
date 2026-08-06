'use me';
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2, Clock } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  treatment: string;
  duration: string;
  objective: string;
  result: string;
  beforeImg: string;
  afterImg: string;
}

export const SmileGallery: React.FC = () => {
  const cases: CaseStudy[] = [
    {
      id: 'case-1',
      title: 'Smile Realignment & Edge Sculpting',
      treatment: 'Invisalign & Composite Bonding',
      duration: '7 Months',
      objective: 'Correct front tooth crowding, repair chipped incisor edges, and brighten natural shade.',
      result: 'Straight, symmetrical smile with hand-sculpted composite edges and uniform shade.',
      beforeImg: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
      afterImg: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'case-2',
      title: 'Full Arch Restoration',
      treatment: 'Implant-Retained Ceramic Bridge',
      duration: '5 Months',
      objective: 'Replace failing lower bridge and restore natural chewing stability and lip support.',
      result: 'Fixed ceramic implant bridge providing 100% natural bite strength and confident aesthetics.',
      beforeImg: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
      afterImg: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'case-3',
      title: 'Diastema Closure & Whitening',
      treatment: 'Teeth Whitening & 4 Composite Veneers',
      duration: '3 Weeks',
      objective: 'Close gap between upper central teeth while enhancing overall smile brightness.',
      result: 'Harmonious gap closure preserving natural enamel texture and light translucency.',
      beforeImg: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      afterImg: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage

  const currentCase = cases[activeCaseIndex];

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  return (
    <section className="py-24 bg-[#F5F2EB] border-b border-[#CCD6CF]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-semibold text-[#143C3A] uppercase tracking-widest block">
              Patient Case Studies
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1B1D1D] tracking-tight">
              Real smiles. Natural transformations.
            </h2>
            <p className="text-sm sm:text-base text-[#1B1D1D]/70 font-normal">
              Drag the interactive slider below to inspect real patient before-and-after results.
            </p>
          </div>

          {/* Case Navigation Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setActiveCaseIndex((prev) => (prev > 0 ? prev - 1 : cases.length - 1))}
              className="w-10 h-10 rounded-full bg-white border border-[#CCD6CF] text-[#143C3A] flex items-center justify-center hover:bg-[#143C3A] hover:text-white transition-colors shadow-sm"
              aria-label="Previous Case"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-bold text-[#143C3A] px-2">
              0{activeCaseIndex + 1} / 0{cases.length}
            </span>
            <button
              onClick={() => setActiveCaseIndex((prev) => (prev < cases.length - 1 ? prev + 1 : 0))}
              className="w-10 h-10 rounded-full bg-white border border-[#CCD6CF] text-[#143C3A] flex items-center justify-center hover:bg-[#143C3A] hover:text-white transition-colors shadow-sm"
              aria-label="Next Case"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Interactive Before & After Slider Card */}
        <div className="bg-white border border-[#CCD6CF] rounded-3xl p-6 sm:p-10 shadow-clinic-elevated grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Slider Container (Left 7 Cols) */}
          <div className="lg:col-span-7">
            <div
              className="relative h-[320px] sm:h-[420px] w-full rounded-2xl overflow-hidden cursor-ew-resize select-none border border-[#CCD6CF]/80 shadow-clinic-card"
              onMouseMove={handleSliderMove}
              onTouchMove={handleSliderMove}
            >
              {/* After Image (Full background) */}
              <Image
                src={currentCase.afterImg}
                alt={`${currentCase.title} After Treatment`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-4 right-4 bg-[#143C3A] text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                AFTER
              </div>

              {/* Before Image (Clipped by slider position) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="relative h-full w-[700px] sm:w-[850px]">
                  <Image
                    src={currentCase.beforeImg}
                    alt={`${currentCase.title} Before Treatment`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#1B1D1D] px-3 py-1 rounded-full text-xs font-bold shadow-sm border border-[#CCD6CF]">
                  BEFORE
                </div>
              </div>

              {/* Slider Handle Divider Line */}
              <div
                className="absolute inset-y-0 w-0.5 bg-white shadow-xl z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-[#143C3A] shadow-clinic-elevated border border-[#CCD6CF] flex items-center justify-center text-xs font-bold">
                  ↔
                </div>
              </div>
            </div>
            <p className="text-center text-xs text-[#1B1D1D]/50 mt-3 font-medium">
              Click & drag horizontally on image to compare Before & After
            </p>
          </div>

          {/* Case Details (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F2EB] border border-[#CCD6CF] text-xs font-semibold text-[#143C3A]">
              <Clock className="w-3.5 h-3.5" />
              <span>Treatment Time: {currentCase.duration}</span>
            </div>

            <h3 className="font-serif text-3xl font-bold text-[#143C3A]">
              {currentCase.title}
            </h3>

            <div className="space-y-3 border-t border-[#CCD6CF]/40 pt-4 text-xs sm:text-sm">
              <div>
                <span className="font-bold text-[#143C3A] block uppercase text-[10px] tracking-wider mb-1">
                  Treatment Performed
                </span>
                <p className="text-[#1B1D1D] font-semibold">{currentCase.treatment}</p>
              </div>

              <div>
                <span className="font-bold text-[#143C3A] block uppercase text-[10px] tracking-wider mb-1">
                  Patient Objective
                </span>
                <p className="text-[#1B1D1D]/80 font-normal leading-relaxed">{currentCase.objective}</p>
              </div>

              <div>
                <span className="font-bold text-[#143C3A] block uppercase text-[10px] tracking-wider mb-1">
                  Clinical Outcome
                </span>
                <p className="text-[#1B1D1D]/80 font-normal leading-relaxed">{currentCase.result}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#CCD6CF]/40 flex items-center gap-4">
              <Link href="/reviews" className="btn-primary text-xs py-3 px-6">
                <span>View Full Smile Gallery</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B8926A]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
