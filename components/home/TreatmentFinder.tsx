'use me';
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Sparkles, Smile, Shield, Stethoscope, RefreshCw, Layers } from 'lucide-react';

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
      description: 'Discreet, removable clear aligners engineered to straighten teeth with 3D digital outcome simulations.',
      priceFrom: 'From £2,800 or £116/mo',
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
      icon: RefreshCw,
    },
    {
      goalId: 'replace',
      goalLabel: 'Replace missing teeth',
      name: 'Single & Arch Dental Implants',
      category: 'Implantology',
      slug: 'dental-implants',
      description: 'Permanent titanium post restorations that integrate naturally with your jawbone to restore 100% bite power.',
      priceFrom: 'From £2,450 or £102/mo',
      image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80',
      icon: Smile,
    },
    {
      goalId: 'whiten',
      goalLabel: 'Whiten my smile',
      name: 'Professional Teeth Whitening',
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
      name: 'Composite Bonding & Sculpting',
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
      name: 'Porcelain Veneers & Makeovers',
      category: 'Porcelain Ceramics',
      slug: 'composite-bonding',
      description: 'Handcrafted ultra-thin ceramic veneers for permanent, stain-resistant alignment and natural light reflection.',
      priceFrom: 'From £850 per tooth',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      icon: Shield,
    },
    {
      goalId: 'routine',
      goalLabel: 'Routine dental care',
      name: 'Dental Exam & Airflow Hygiene',
      category: 'General Care',
      slug: 'dental-checkups',
      description: 'Comprehensive oral health assessment including oral cancer screening and gentle Airflow stain removal hygiene.',
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
    <section className="py-16 lg:py-20 bg-white border-b border-[#CCD6CF]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold text-[#143C3A] uppercase tracking-widest block">
            Clinical Services & Treatments
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1B1D1D] tracking-tight">
            What would you like to improve?
          </h2>
          <p className="text-sm sm:text-base text-[#1B1D1D]/70 font-normal">
            Select your primary smile goal or explore our six core clinical treatment disciplines below.
          </p>
        </div>

        {/* Interactive Goal Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          <button
            onClick={() => setActiveGoal('all')}
            className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs font-semibold transition-all border ${
              activeGoal === 'all'
                ? 'bg-[#143C3A] text-white border-[#143C3A] shadow-clinic-card'
                : 'bg-[#F5F2EB] text-[#1B1D1D] border-[#CCD6CF]/60 hover:border-[#143C3A]'
            }`}
          >
            All Treatments
          </button>
          {treatments.map((t) => (
            <button
              key={t.goalId}
              onClick={() => setActiveGoal(t.goalId)}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs font-semibold transition-all border ${
                activeGoal === t.goalId
                  ? 'bg-[#143C3A] text-white border-[#143C3A] shadow-clinic-card'
                  : 'bg-[#F5F2EB] text-[#1B1D1D] border-[#CCD6CF]/60 hover:border-[#143C3A]'
              }`}
            >
              {t.goalLabel}
            </button>
          ))}
        </div>

        {/* 6 Main Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTreatments.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.slug + item.goalId}
                className="bg-[#F5F2EB] border border-[#CCD6CF] rounded-3xl overflow-hidden shadow-clinic-card hover:border-[#143C3A] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-slate-900 border-b border-[#CCD6CF]/40">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-[#143C3A] text-white px-3 py-1 rounded-full text-[11px] font-bold shadow-sm uppercase tracking-wide">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-[#143C3A]">
                      <Icon className="w-4 h-4 text-[#B8926A]" />
                      <span className="text-xs font-semibold text-[#143C3A]">{item.goalLabel}</span>
                    </div>

                    <h3 className="font-serif font-bold text-2xl text-[#1B1D1D] group-hover:text-[#143C3A] transition-colors">
                      {item.name}
                    </h3>

                    <p className="text-xs text-[#1B1D1D]/80 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#CCD6CF]/40 mt-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#143C3A]">{item.priceFrom}</span>
                  <Link
                    href={`/treatments/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#143C3A] hover:underline"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#B8926A]" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Clinical Services Button */}
        <div className="text-center pt-4">
          <Link href="/treatments" className="btn-secondary text-xs py-3.5 px-8">
            <span>Explore Full Treatment Directory</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#143C3A]" />
          </Link>
        </div>
      </div>
    </section>
  );
};
