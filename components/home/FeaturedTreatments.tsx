'use me';
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { treatmentsData } from '@/data/treatments';
import { practiceConfig } from '@/data/practice';
import { formatPrice } from '@/lib/utils';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const FeaturedTreatments: React.FC = () => {
  const isLab = practiceConfig.type === 'dental-laboratory';
  const featured = treatmentsData.filter((t) => t.featured || true).slice(0, 6);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white text-slate-900 relative border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-200 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest block">
              {isLab ? 'Laboratory Capabilities' : 'Comprehensive Clinical Care'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              {isLab ? 'Precision Dental Prosthetics' : 'Featured Treatments & Services'}
            </h2>
            <p className="text-slate-600 text-base">
              {isLab
                ? 'High-precision restorative prosthetics crafted by experienced UK technicians.'
                : 'From routine check-ups to advanced implant surgery and cosmetic alignment.'}
            </p>
          </div>

          <Link
            href="/treatments"
            className="inline-flex items-center gap-2 text-cyan-700 hover:text-cyan-600 font-semibold text-sm group shrink-0"
          >
            <span>View All Treatments ({treatmentsData.length})</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

        {/* Treatment Cards Animated Grid (Clean Neutral Borders) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featured.map((treatment) => (
            <motion.div
              key={treatment.slug}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group border border-slate-200"
            >
              {/* Card Image with Gradient Overlay */}
              <div>
                <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={treatment.image}
                    alt={treatment.name}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 bg-cyan-600 text-white px-3 py-1 rounded-full text-[11px] font-bold shadow-sm uppercase tracking-wide">
                    {treatment.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif font-bold text-xl text-slate-900 group-hover:text-cyan-700 transition-colors">
                      {treatment.name}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                      {treatment.shortDescription}
                    </p>
                  </div>

                  {/* Suitable For Summary */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                      Ideal For:
                    </span>
                    <p className="text-xs text-slate-700 flex items-start gap-1.5 line-clamp-2">
                      <Check className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                      <span>{treatment.suitableFor[0]}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Price & CTA Footer */}
              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase tracking-wider">
                    Guide Price
                  </span>
                  <span className="text-sm font-bold text-cyan-700">
                    From {formatPrice(treatment.priceFrom)}
                  </span>
                </div>

                <Link
                  href={`/treatments/${treatment.slug}`}
                  className="inline-flex items-center gap-1.5 text-white font-bold text-xs py-2 px-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 transition-all shadow-sm"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
