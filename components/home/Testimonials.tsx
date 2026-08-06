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
    <section className="py-16 lg:py-24 bg-[#E7F1F3] border-b border-[#DDE4E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#DDE4E6] text-xs font-semibold text-[#122A38]">
            <Star className="w-3.5 h-3.5 fill-[#D6B99A] text-[#D6B99A]" />
            <span>4.9 / 5.0 Google Rating • 420+ Verified Reviews</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-[#122A38] tracking-tight">
            Patient <span className="italic font-serif font-normal text-[#70AEB3]">Stories</span>
          </h2>
          <p className="text-sm sm:text-base text-[#122A38]/70 font-normal">
            Read authentic feedback from patients who have experienced our clinical care.
          </p>
        </div>

        {/* 1 Large Featured + 3 Compact Supporting */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Featured Review */}
          <div className="lg:col-span-5 bg-white border border-[#DDE4E6] rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-nordic-soft relative">
            <Quote className="w-10 h-10 text-[#70AEB3]/20 absolute top-6 right-6" />
            <div className="space-y-4">
              <div className="flex items-center gap-1.5 text-[#D6B99A]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D6B99A]" />
                ))}
              </div>
              <p className="font-serif text-lg sm:text-xl text-[#122A38] leading-relaxed italic">
                &ldquo;{featuredReview.quote}&rdquo;
              </p>
            </div>

            <div className="pt-6 border-t border-[#DDE4E6] flex items-center justify-between mt-6">
              <div>
                <span className="font-bold text-sm text-[#122A38] block">{featuredReview.name}</span>
                <span className="text-xs text-[#122A38]/60">{featuredReview.patientType}</span>
              </div>
              <CheckCircle2 className="w-5 h-5 text-[#70AEB3] shrink-0" />
            </div>
          </div>

          {/* 3 Compact Supporting Reviews */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {supportingReviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#DDE4E6] rounded-2xl p-5 shadow-nordic-soft space-y-2.5 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <div className="flex text-[#D6B99A]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D6B99A]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#122A38]/50">{rev.date}</span>
                </div>

                <p className="text-xs text-[#122A38]/80 leading-relaxed italic font-serif">
                  &ldquo;{rev.quote}&rdquo;
                </p>

                <div className="pt-2 border-t border-[#DDE4E6]/50 flex items-center justify-between text-[11px]">
                  <span className="font-bold text-[#122A38]">{rev.name}</span>
                  <span className="text-[#122A38]/60">{rev.patientType}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Read More Google Reviews Button */}
        <div className="text-center pt-2">
          <Link href="/reviews" className="btn-primary text-xs py-3.5 px-8">
            <span>Read More Google Reviews</span>
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </Link>
        </div>
      </div>
    </section>
  );
};
