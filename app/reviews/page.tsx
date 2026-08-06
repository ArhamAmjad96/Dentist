import React from 'react';
import { reviewsData } from '@/data/reviews';
import { practiceConfig } from '@/data/practice';
import { SmileGallery } from '@/components/home/SmileGallery';
import { Star, Quote, ExternalLink, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Smile Transformations & Reviews | ${practiceConfig.name}`,
  description: `View before-and-after smile transformations and read genuine Google reviews for ${practiceConfig.name} in ${practiceConfig.city}. Rated ${practiceConfig.googleRating}/5.0 based on ${practiceConfig.reviewCount}+ reviews.`,
};

export default function ReviewsPage() {
  return (
    <div className="bg-[#F5F2EB] text-[#1B1D1D] min-h-screen">
      {/* Page Hero */}
      <section className="py-20 bg-white border-b border-[#CCD6CF]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-semibold text-[#143C3A] uppercase tracking-widest block">
            Verified Clinical Outcomes
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#1B1D1D]">
            Smile Transformations & Patient Reviews
          </h1>
          <p className="text-[#1B1D1D]/75 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
            We take immense pride in creating natural, long-lasting smile transformations. Inspect our before-and-after cases and verified patient feedback below.
          </p>

          <div className="pt-4 flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-[#B8926A] font-bold text-xl">
              <Star className="w-5 h-5 fill-[#B8926A] text-[#B8926A]" />
              <span className="text-[#143C3A]">{practiceConfig.googleRating} / 5.0</span>
            </div>
            <span className="text-xs text-[#1B1D1D]/70 font-semibold">({practiceConfig.reviewCount}+ Google Reviews)</span>
            <a
              href={practiceConfig.googleReviewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-2 px-4 shadow-sm"
            >
              <span>Read on Google</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#B8926A]" />
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Before & After Section */}
      <SmileGallery />

      {/* Verified Reviews Grid */}
      <section className="py-20 bg-white border-t border-[#CCD6CF]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-[#143C3A] mb-12 text-center">
            Verified Patient Testimonials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviewsData.map((review) => (
              <div key={review.id} className="p-8 rounded-3xl bg-[#F5F2EB] border border-[#CCD6CF] shadow-clinic-card space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex text-[#B8926A] gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#B8926A]" />
                    ))}
                  </div>
                  <span className="text-xs text-[#143C3A] font-semibold bg-white px-3 py-1 rounded-full border border-[#CCD6CF]">
                    {review.source}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-[#143C3A]/20" />
                <p className="text-sm text-[#1B1D1D]/90 leading-relaxed italic font-normal">
                  “{review.comment}”
                </p>

                <div className="pt-4 border-t border-[#CCD6CF]/40 flex justify-between items-center text-xs">
                  <div>
                    <span className="font-serif font-bold text-[#143C3A] text-base block">{review.author}</span>
                    <span className="text-[#143C3A] font-semibold">{review.treatment}</span>
                  </div>
                  <span className="text-[#1B1D1D]/60">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
