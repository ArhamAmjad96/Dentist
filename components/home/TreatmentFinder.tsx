'use me';
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, RefreshCw, Smile, Sparkles, Layers, Shield, Stethoscope } from 'lucide-react';

interface TreatmentCard {
  goalId: string;
  goalLabel: string;
  name: string;
  category: string;
  slug: string;
  description: string;
  priceFrom: string;
  image: string;
  icon: any;
}

export const TreatmentFinder: React.FC = () => {
  const treatments: TreatmentCard[] = [
    {
      goalId: 'straighten',
      goalLabel: 'Straighten my teeth',
      name: 'Invisalign Clear Aligners',
      category: 'Orthodontics',
      slug: 'invisalign-aligners',
      description: 'Discreet, removable clear aligners engineered to align teeth with 3D digital outcome preview.',
      priceFrom: 'From £2,800 or £116/mo',
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
      icon: RefreshCw,
    },
    {
      goalId: 'replace',
      goalLabel: 'Replace missing teeth',
      name: 'Dental Implants',
      category: 'Implantology',
      slug: 'dental-implants',
      description: 'Permanent titanium post restorations that integrate naturally with your jawbone for full strength.',
      priceFrom: 'From £2,450 or £102/mo',
      image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80',
      icon: Smile,
    },
    {
      goalId: 'colour',
      goalLabel: 'Improve tooth colour',
      name: 'Teeth Whitening',
      category: 'Cosmetic',
      slug: 'teeth-whitening',
      description: 'Dentist-supervised home whitening trays and custom gel to safely brighten natural tooth shade.',
      priceFrom: 'From £395',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
      icon: Sparkles,
    },
    {
      goalId: 'repair',
      goalLabel: 'Repair damaged teeth',
      name: 'Composite Bonding',
      category: 'Cosmetic',
      slug: 'composite-bonding',
      description: 'Artistic resin sculpting in 1 single appointment to repair chips, gaps, and worn edges with zero drilling.',
      priceFrom: 'From £220 per tooth',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
      icon: Layers,
    },
    {
      goalId: 'transform',
      goalLabel: 'Transform my smile',
      name: 'Porcelain Veneers',
      category: 'Ceramics',
      slug: 'composite-bonding',
      description: 'Handcrafted ultra-thin ceramic veneers for permanent, stain-resistant alignment and natural luster.',
      priceFrom: 'From £850 per tooth',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      icon: Shield,
    },
    {
      goalId: 'maintain',
      goalLabel: 'Maintain my dental health',
      name: 'General Dentistry & Hygiene',
      category: 'General Care',
      slug: 'dental-checkups',
      description: 'Comprehensive oral health assessment including health screening and gentle Airflow stain removal hygiene.',
      priceFrom: 'From £85',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
      icon: Stethoscope,
    },
  ];

  const [activeGoal, setActiveGoal] = useState<string>('all');

  const filteredTreatments = activeGoal === 'all'
    ? treatments
    : treatments.filter((t) => t.goalId === activeGoal);

  return (
    <section className="py-16 lg:py-24 bg-[#E7F1F3] border-b border-[#DDE4E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold text-[#70AEB3] uppercase tracking-widest block">
            Clinical Disciplines
          </span>
          <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-[#122A38] tracking-tight">
            What would you like to <span className="italic font-serif font-normal text-[#70AEB3]">change</span>?
          </h2>
          <p className="text-sm sm:text-base text-[#122A38]/70 font-normal">
            Select your personal dental objective below to view our six core clinical treatments.
          </p>
        </div>

        {/* Goal Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          <button
            onClick={() => setActiveGoal('all')}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all border ${
              activeGoal === 'all'
                ? 'bg-[#70AEB3] text-white border-[#70AEB3] shadow-nordic-soft'
                : 'bg-white text-[#122A38] border-[#DDE4E6] hover:border-[#70AEB3]'
            }`}
          >
            All Treatments
          </button>
          {treatments.map((t) => (
            <button
              key={t.goalId}
              onClick={() => setActiveGoal(t.goalId)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all border ${
                activeGoal === t.goalId
                  ? 'bg-[#70AEB3] text-white border-[#70AEB3] shadow-nordic-soft'
                  : 'bg-white text-[#122A38] border-[#DDE4E6] hover:border-[#70AEB3]'
              }`}
            >
              {t.goalLabel}
            </button>
          ))}
        </div>

        {/* 6 Large Visual Treatment Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTreatments.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.slug + item.goalId}
                className="bg-white border border-[#DDE4E6] rounded-2xl overflow-hidden shadow-nordic-soft hover:border-[#70AEB3] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-[#122A38] text-white px-3 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-[#70AEB3]">
                      <Icon className="w-4 h-4" />
                      <span className="text-xs font-semibold">{item.goalLabel}</span>
                    </div>

                    <h3 className="font-sans font-bold text-2xl text-[#122A38] group-hover:text-[#70AEB3] transition-colors">
                      {item.name}
                    </h3>

                    <p className="text-xs text-[#122A38]/75 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#DDE4E6]/60 mt-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#122A38]">{item.priceFrom}</span>
                  <Link
                    href={`/treatments/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#70AEB3] group-hover:translate-x-1 transition-transform"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
