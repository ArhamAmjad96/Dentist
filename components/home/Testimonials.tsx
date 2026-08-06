'use me';
'use client';

import React from 'react';
import { Star, CheckCircle2, Quote } from 'lucide-react';
import { practiceConfig } from '@/data/practice';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      id: 'rev-1',
      author: 'Eleanor Vance',
      treatment: 'Invisalign & Teeth Whitening',
      rating: 5,
      date: '2 weeks ago',
      verified: true,
      text: 'I spent years feeling self-conscious about my crooked front teeth. Dr Alistair and the team at St. James Clinic made the entire clear aligner journey seamless. The 3D scan showed me exactly how my teeth would look before I even started. I couldn’t be happier with my new smile!',
      featured: true,
    },
    {
      id: 'rev-2',
      author: 'Marcus Holloway',
      treatment: 'Single Dental Implant',
      rating: 5,
      date: '1 month ago',
      verified: true,
      text: 'Extremely professional and virtually painless. I was nervous about implant surgery, but the 3D guided technology made it quick and straightforward. Highly recommended.',
      featured: false,
    },
    {
      id: 'rev-3',
      author: 'Sophia Chen',
      treatment: 'Composite Bonding',
      rating: 5,
      date: '3 weeks ago',
      verified: true,
      text: 'Had composite bonding done on 4 front teeth in one afternoon. The shape, shade match, and attention to detail were outstanding. Truly natural results.',
      featured: false,
    },
    {
      id: 'rev-4',
      author: 'James R. Sterling',
      treatment: 'General Hygiene & Airflow',
      rating: 5,
      date: '2 months ago',
      verified: true,
      text: 'The Airflow hygiene treatment removed all coffee stains with zero discomfort. The reception team is incredibly welcoming and punctual.',
      featured: false,
    },
  ];

  const featured = reviews.find((r) => r.featured) || reviews[0];
  const supporting = reviews.filter((r) => !r.featured);

  return (
    <section className="py-24 bg-[#F5F2EB] border-b border-[#CCD6CF]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#CCD6CF] text-xs font-bold text-[#143C3A] shadow-sm">
            <Star className="w-3.5 h-3.5 fill-[#B8926A] text-[#B8926A]" />
            <span>4.9 / 5.0 Rating on Google Reviews</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1B1D1D] tracking-tight">
            Patient Stories & Verified Reviews
          </h2>
          <p className="text-sm sm:text-base text-[#1B1D1D]/70 font-normal">
            Read authentic feedback from patients who have experienced our personalized, gentle care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Featured Testimonial (Left 7 Cols) */}
          <div className="lg:col-span-7 bg-[#143C3A] text-white rounded-3xl p-8 sm:p-10 shadow-clinic-elevated flex flex-col justify-between relative overflow-hidden">
            <Quote className="absolute top-6 right-6 w-20 h-20 text-white/5 pointer-events-none" />

            <div className="space-y-6 z-10">
              <div className="flex items-center justify-between">
                <div className="flex text-[#B8926A]">
                  {[...Array(featured.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#B8926A]" />
                  ))}
                </div>
                <span className="text-xs text-white/70 font-semibold">{featured.date}</span>
              </div>

              <blockquote className="font-serif text-xl sm:text-2xl text-white italic leading-relaxed">
                &ldquo;{featured.text}&rdquo;
              </blockquote>
            </div>

            <div className="pt-8 mt-6 border-t border-white/10 flex items-center justify-between z-10">
              <div>
                <span className="font-serif font-bold text-lg text-white block">{featured.author}</span>
                <span className="text-xs text-[#B8926A] font-semibold">{featured.treatment}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-white/10 px-3 py-1.5 rounded-full border border-white/20">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Patient</span>
              </div>
            </div>
          </div>

          {/* Supporting Testimonial Grid (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            {supporting.map((rev) => (
              <div
                key={rev.id}
                className="bg-white border border-[#CCD6CF] rounded-2xl p-6 shadow-clinic-card hover:border-[#143C3A] transition-all space-y-3"
              >
                <div className="flex items-center justify-between text-xs">
                  <div className="flex text-[#B8926A]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#B8926A]" />
                    ))}
                  </div>
                  <span className="text-[#1B1D1D]/50">{rev.date}</span>
                </div>

                <p className="text-xs text-[#1B1D1D]/80 leading-relaxed italic font-normal">
                  &ldquo;{rev.text}&rdquo;
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-[#CCD6CF]/40 text-xs">
                  <span className="font-bold text-[#143C3A]">{rev.author}</span>
                  <span className="text-[11px] text-[#1B1D1D]/60 font-medium">{rev.treatment}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
