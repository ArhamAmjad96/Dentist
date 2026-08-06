import React from 'react';
import { reviewsData } from '@/data/reviews';
import { practiceConfig } from '@/data/practice';
import { Star, Quote, ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Verified Patient Reviews | ${practiceConfig.name}`,
  description: `Read genuine Google reviews and patient feedback for ${practiceConfig.name} in ${practiceConfig.city}. Rated ${practiceConfig.googleRating}/5.0 based on ${practiceConfig.reviewCount}+ reviews.`,
};

export default function ReviewsPage() {
  return (
    <div className="bg-navy-900 text-ivory min-h-screen">
      <section className="py-16 bg-navy-950 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-semibold text-brass uppercase tracking-widest block">
            Verified Patient Testimonials
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ivory">
            Patient Feedback & Reviews
          </h1>
          <p className="text-sage text-base max-w-2xl leading-relaxed">
            We are proud of the relationships we build with our patients. Read verified feedback regarding our clinical care, team, and practice environment.
          </p>

          <div className="pt-4 flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-brass font-bold text-xl">
              <Star className="w-5 h-5 fill-brass text-brass" />
              <span>{practiceConfig.googleRating} / 5.0</span>
            </div>
            <span className="text-xs text-sage">({practiceConfig.reviewCount}+ Google Reviews)</span>
            <a
              href={practiceConfig.googleReviewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brass text-navy-900 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1"
            >
              <span>Read on Google</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-ivory text-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviewsData.map((review) => (
              <div key={review.id} className="p-8 rounded-2xl bg-white border border-stone-dark/30 shadow-soft space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex text-brass gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brass text-brass" />
                    ))}
                  </div>
                  <span className="text-xs text-charcoal-muted font-medium bg-stone/50 px-2.5 py-1 rounded">
                    {review.source}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-teal/30" />
                <p className="text-sm text-charcoal leading-relaxed italic">
                  “{review.comment}”
                </p>

                <div className="pt-4 border-t border-stone-dark/20 flex justify-between items-center text-xs">
                  <div>
                    <span className="font-serif font-bold text-navy-900 text-sm block">{review.author}</span>
                    <span className="text-teal font-medium">{review.treatment}</span>
                  </div>
                  <span className="text-charcoal-muted">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
