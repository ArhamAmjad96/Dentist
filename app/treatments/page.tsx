'use me';
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { treatmentsData, TreatmentCategory } from '@/data/treatments';
import { practiceConfig } from '@/data/practice';
import { formatPrice } from '@/lib/utils';
import { ArrowRight, Check, Sparkles, Shield, Stethoscope, Smile } from 'lucide-react';

export default function TreatmentsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'general', label: 'General Dentistry' },
    { id: 'cosmetic', label: 'Cosmetic Dentistry' },
    { id: 'restorative', label: 'Restorative Care' },
    { id: 'implants', label: 'Dental Implants' },
    { id: 'orthodontics', label: 'Orthodontics' },
    { id: 'dentures', label: 'Dentures' },
  ];

  const filtered = selectedCategory === 'all'
    ? treatmentsData
    : treatmentsData.filter((t) => t.category === selectedCategory);

  return (
    <div className="bg-navy-900 text-ivory min-h-screen">
      {/* Hero Banner */}
      <section className="py-16 bg-navy-950 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-semibold text-brass uppercase tracking-widest block">
            Clinical Services Directory
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ivory">
            Treatments & Procedures
          </h1>
          <p className="text-sage text-base max-w-2xl leading-relaxed">
            Explore our range of general, restorative, surgical, and cosmetic dental treatments. All treatments begin with a thorough clinical examination.
          </p>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Category Filter Bar */}
          <div className="flex flex-wrap gap-2 border-b border-navy-800 pb-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-brass text-navy-900 shadow-soft'
                    : 'bg-navy-950 text-sage hover:text-ivory border border-navy-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Treatment Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((treatment) => (
              <div
                key={treatment.slug}
                className="bg-navy-950 border border-navy-800 rounded-2xl overflow-hidden hover:border-brass/40 transition-all duration-300 shadow-soft flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-navy-900">
                    <Image
                      src={treatment.image}
                      alt={treatment.name}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-navy-900/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-brass border border-brass/30 uppercase tracking-wide">
                      {treatment.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="font-serif font-bold text-xl text-ivory group-hover:text-brass transition-colors">
                      {treatment.name}
                    </h3>
                    <p className="text-sage text-xs leading-relaxed line-clamp-3">
                      {treatment.shortDescription}
                    </p>

                    <div className="space-y-1 pt-2 border-t border-navy-800">
                      <span className="text-[10px] font-semibold text-ivory/80 uppercase tracking-wider block">
                        Suitable For:
                      </span>
                      <p className="text-xs text-sage flex items-start gap-1">
                        <Check className="w-3.5 h-3.5 text-brass shrink-0 mt-0.5" />
                        <span>{treatment.suitableFor[0]}</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-navy-800/60 mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-sage block uppercase">Guide Price</span>
                    <span className="text-sm font-semibold text-ivory">From {formatPrice(treatment.priceFrom)}</span>
                  </div>

                  <Link
                    href={`/treatments/${treatment.slug}`}
                    className="inline-flex items-center gap-1 text-brass hover:text-brass-light font-semibold text-xs py-2 px-3 rounded-lg bg-navy-900 border border-navy-800 group-hover:border-brass/40 transition-colors"
                  >
                    <span>View Treatment</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
