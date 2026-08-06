'use me';
'use client';

import React from 'react';
import Link from 'next/link';
import { Star, ArrowRight, CheckCircle2, Quote } from 'lucide-react';
import { practiceConfig } from '@/data/practice';

export const Testimonials: React.FC = () => {
  const featuredReview = {
    name: 'Eleanor Vance',
    patientType: 'Invisalign & Whitening Patient',
    rating: 5,
    quote: 'From my initial consultation through to my final alignment check, the care at St. James Clinic was faultless. Dr. Vance listened to every concern and my teeth look naturally pristine.',
    date: '1 week ago',
  };

  const supportingReviews = [
    {
      name: 'James C.',
      patientType: 'Dental Implant Patient',
      quote: 'Extremely professional and reassuring experience. The 3D scan made the entire implant procedure completely transparent.',
      date: '2 weeks ago',
    },
    {
      name: 'Sophia T.',
      patientType: 'Composite Bonding Patient',
      quote: 'My bonding was completed in a single afternoon with zero discomfort. I cannot stop smiling!',
      date: '1 month ago',
    },
    {
      name: 'Oliver K.',
      patientType: 'Routine General Patient',
      quote: 'Clean, elegant practice in Mayfair with punctual, gentle care. Best hygiene Airflow treatment I have had in London.',
      date: '1 month ago',
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-white border-b border-[#CCD6CF]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F2EB] border border-[#CCD6CF] text-xs font-semibold text-[#143C3A]">
            <Star className="w-3.5 h-3.5 fill-[#B8926A] text-[#B8926A]" />
            <span>4.9 / 5.0 Google Rating • 420+ Verified Reviews</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1B1D1D] tracking-tight">
            Patient Stories & Reviews
          </h2>
          <p className="text-sm sm:text-base text-[#1B1D1D]/75 font-normal">
            Read real patient feedback on our clinical care, atmosphere, and smile results.
          </p>
        </div>

        {/* Reviews Layout: 1 Featured + 3 Supporting */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Featured Review */}
          <div className="lg:col-span-5 bg-[#F5F2EB] border border-[#CCD6CF] rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-clinic-card relative">
            <Quote className="w-10 h-10 text-[#143C3A]/15 absolute top-6 right-6" />
            <div className="space-y-4">
              <div className="flex items-center gap-1.5 text-[#B8926A]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#B8926A]" />
                ))}
              </div>
              <p className="font-serif text-lg sm:text-xl text-[#143C3A] leading-relaxed italic">
                &ldquo;{featuredReview.quote}&rdquo;
              </p>
            </div>

            <div className="pt-6 border-t border-[#CCD6CF]/50 flex items-center justify-between mt-6">
              <div>
                <span className="font-bold text-sm text-[#143C3A] block">{featuredReview.name}</span>
                <span className="text-xs text-[#1B1D1D]/70">{featuredReview.patientType}</span>
              </div>
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            </div>
          </div>

          {/* 3 Smaller Supporting Reviews */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {supportingReviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#CCD6CF] rounded-2xl p-5 shadow-clinic-soft space-y-2.5 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <div className="flex text-[#B8926A]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#B8926A]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#1B1D1D]/50">{rev.date}</span>
                </div>

                <p className="text-xs text-[#1B1D1D]/80 leading-relaxed italic font-serif">
                  &ldquo;{rev.quote}&rdquo;
                </p>

                <div className="pt-2 border-t border-[#CCD6CF]/30 flex items-center justify-between text-[11px]">
                  <span className="font-bold text-[#143C3A]">{rev.name}</span>
                  <span className="text-[#1B1D1D]/60">{rev.patientType}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Read More Google Reviews Button */}
        <div className="text-center pt-2">
          <Link href="/reviews" className="btn-secondary text-xs py-3.5 px-8">
            <span>Read More Google Reviews</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#143C3A]" />
          </Link>
        </div>
      </div>
    </section>
  );
};
