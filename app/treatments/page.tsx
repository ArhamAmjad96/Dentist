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
    <div className="bg-white text-slate-900 min-h-screen">
      {/* Hero Banner */}
      <section className="py-16 bg-gradient-to-b from-cyan-50/60 via-white to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest block">
            Clinical Services Directory
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-950">
            Treatments & Procedures
          </h1>
          <p className="text-slate-700 text-base max-w-2xl leading-relaxed font-normal">
            Explore our range of general, restorative, surgical, and cosmetic dental treatments. All treatments begin with a thorough clinical examination.
          </p>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Category Filter Bar */}
          <div className="flex flex-wrap gap-2.5 border-b border-slate-200 pb-5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4.5 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-800 hover:bg-cyan-600 hover:text-white border border-slate-200 shadow-sm'
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
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={treatment.image}
                      alt={treatment.name}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-cyan-600 text-white px-3 py-1 rounded-full text-[11px] font-bold shadow-sm uppercase tracking-wide">
                      {treatment.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="font-serif font-bold text-xl text-slate-950 group-hover:text-cyan-700 transition-colors">
                      {treatment.name}
                    </h3>
                    <p className="text-slate-700 text-xs leading-relaxed line-clamp-3 font-normal">
                      {treatment.shortDescription}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-slate-100">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                        Suitable For:
                      </span>
                      <p className="text-xs text-slate-700 flex items-start gap-1.5 font-normal">
                        <Check className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                        <span>{treatment.suitableFor[0]}</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase font-medium">Guide Price</span>
                    <span className="text-sm font-bold text-cyan-700">From {formatPrice(treatment.priceFrom)}</span>
                  </div>

                  <Link
                    href={`/treatments/${treatment.slug}`}
                    className="inline-flex items-center gap-1.5 text-white font-bold text-xs py-2.5 px-4 rounded-xl bg-cyan-950 hover:bg-cyan-900 transition-colors shadow-sm"
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
