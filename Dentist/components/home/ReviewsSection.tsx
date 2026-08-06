'use me';
'use client';

import React from 'react';
import Link from 'next/link';
import { reviewsData } from '@/data/reviews';
import { practiceConfig } from '@/data/practice';
import { Star, Quote, ExternalLink, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-ivory to-stone/30 text-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Google Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-stone-dark/20 pb-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-semibold text-gradient-teal uppercase tracking-widest block">
              Patient Feedback & Testimonials
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
              What Our Patients Say
            </h2>
            <p className="text-charcoal-muted text-base">
              Read verified feedback from patients who have experienced our clinical care and practice environment.
            </p>
          </div>

          {/* Google Summary Badge */}
          <div className="p-5 rounded-2xl bg-white/90 backdrop-blur border border-stone-dark/30 shadow-medium flex items-center gap-4 shrink-0">
            <div className="space-y-0.5">
              <div className="flex items-center gap-1 text-brass font-bold text-lg">
                <Star className="w-4.5 h-4.5 fill-brass text-brass" />
                <span className="text-gradient-brass">{practiceConfig.googleRating} / 5.0</span>
              </div>
              <span className="text-xs text-charcoal-muted block">
                {practiceConfig.reviewCount}+ Google Reviews
              </span>
            </div>
            <a
              href={practiceConfig.googleReviewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy-900 hover:bg-navy-800 text-ivory font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-soft flex items-center gap-1.5 hover:scale-[1.02]"
            >
              <span>View All</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Reviews Animated Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviewsData.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-white border border-stone-dark/30 shadow-soft hover:shadow-medium transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-brass gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-brass text-brass" />
                    ))}
                  </div>
                  <span className="text-[10px] text-charcoal-muted font-bold bg-stone/60 px-2 py-0.5 rounded">
                    {review.source}
                  </span>
                </div>

                <Quote className="w-6 h-6 text-teal/40" />

                <p className="text-xs text-charcoal-muted italic leading-relaxed">
                  “{review.comment}”
                </p>
              </div>

              <div className="pt-3 border-t border-stone-dark/20 flex items-center justify-between text-xs">
                <div>
                  <span className="font-serif font-bold text-navy-900 block">
                    {review.author}
                  </span>
                  <span className="text-[11px] text-teal font-medium">
                    {review.treatment}
                  </span>
                </div>
                <span className="text-[10px] text-charcoal-muted">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
