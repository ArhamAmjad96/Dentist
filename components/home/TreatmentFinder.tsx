'use me';
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Sparkles, Smile, Shield, Stethoscope, RefreshCw, Layers } from 'lucide-react';

interface Option {
  id: string;
  label: string;
  icon: any;
  treatmentName: string;
  slug: string;
  description: string;
  priceFrom: string;
  duration: string;
  benefits: string[];
  image: string;
}

export const TreatmentFinder: React.FC = () => {
  const options: Option[] = [
    {
      id: 'straighten',
      label: 'Straighten my teeth',
      icon: RefreshCw,
      treatmentName: 'Invisalign & Clear Aligners',
      slug: 'invisalign-aligners',
      description: 'Discreet, removable clear aligners designed to straighten crowded or misaligned teeth comfortably without metal wires.',
      priceFrom: 'From £2,800 or £116/mo',
      duration: '6 – 12 Months',
      benefits: ['Near-invisible removable aligners', '3D outcome preview before starting', 'No metal bracket irritation'],
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'replace',
      label: 'Replace missing teeth',
      icon: Smile,
      treatmentName: 'Single & Multiple Dental Implants',
      slug: 'dental-implants',
      description: 'Permanent titanium post restorations that integrate with your jawbone to support realistic crowns, bridges, or dentures.',
      priceFrom: 'From £2,450 or £102/mo',
      duration: '3 – 6 Months',
      benefits: ['Restores full natural bite strength', 'Prevents jawbone loss', 'Does not alter adjacent teeth'],
      image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'whiten',
      label: 'Whiten my smile',
      icon: Sparkles,
      treatmentName: 'Professional Teeth Whitening',
      slug: 'teeth-whitening',
      description: 'Dentist-supervised home whitening using custom-moulded trays and high-grade peroxide gel for a natural, bright smile.',
      priceFrom: 'From £395',
      duration: '2 – 3 Weeks',
      benefits: ['Safely lifts stubborn stains', 'Custom trays for even gel fit', 'Enamel-safe dental gel'],
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'repair',
      label: 'Repair damaged teeth',
      icon: Layers,
      treatmentName: 'Composite Bonding & Sculpting',
      slug: 'composite-bonding',
      description: 'Minimally invasive resin sculpting to fix chips, close gaps, and reshape worn tooth edges in a single visit.',
      priceFrom: 'From £220 per tooth',
      duration: 'Single Visit (1 – 2 Hours)',
      benefits: ['Completed in 1 appointment', 'Zero enamel drilling required', 'Shade-matched micro-composite'],
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'makeover',
      label: 'Improve my entire smile',
      icon: Shield,
      treatmentName: 'Porcelain Veneers & Smile Makeovers',
      slug: 'composite-bonding',
      description: 'Custom handcrafted ultra-thin ceramic veneers designed to transform shape, alignment, and shade for long-lasting harmony.',
      priceFrom: 'From £850 per tooth',
      duration: '2 – 3 Weeks',
      benefits: ['Stain-resistant porcelain ceramic', 'Bespoke hand-crafted aesthetics', 'Symmetrical smile proportions'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'checkup',
      label: 'Book a routine check-up',
      icon: Stethoscope,
      treatmentName: 'Dental Examination & Hygiene',
      slug: 'dental-checkups',
      description: 'Comprehensive oral health assessment including oral cancer soft-tissue screening and Airflow biofilm therapy.',
      priceFrom: 'From £85',
      duration: '45 Minutes',
      benefits: ['Detailed clinical examination', 'Low-dose digital X-rays included', 'Airflow stain removal hygiene'],
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const [activeId, setActiveId] = useState<string>('straighten');
  const activeOption = options.find((o) => o.id === activeId) || options[0];

  return (
    <section className="py-20 bg-[#F5F2EB] border-b border-[#CCD6CF]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-semibold text-[#143C3A] uppercase tracking-widest block">
            Interactive Treatment Selector
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1B1D1D]">
            What would you like to improve?
          </h2>
          <p className="text-sm sm:text-base text-[#1B1D1D]/70">
            Select your primary smile goal below to discover the most appropriate clinical treatment path.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Goal Selector Buttons (Left) */}
          <div className="lg:col-span-5 space-y-3">
            {options.map((opt) => {
              const Icon = opt.icon;
              const isSelected = activeId === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setActiveId(opt.id)}
                  onMouseEnter={() => setActiveId(opt.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all flex items-center justify-between border ${
                    isSelected
                      ? 'bg-[#143C3A] text-white border-[#143C3A] shadow-clinic-card translate-x-1'
                      : 'bg-white text-[#1B1D1D] border-[#CCD6CF]/60 hover:border-[#143C3A] hover:bg-white/80'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        isSelected ? 'bg-white/15 text-[#B8926A]' : 'bg-[#F5F2EB] text-[#143C3A]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-sm sm:text-base">{opt.label}</span>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-[#B8926A] translate-x-1' : 'text-[#1B1D1D]/30'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Treatment Card Reveal (Right) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#CCD6CF] rounded-3xl p-6 sm:p-8 shadow-clinic-elevated space-y-6 animate-fadeIn">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-7 space-y-4">
                  <div className="inline-block px-3 py-1 rounded-full bg-[#F5F2EB] border border-[#CCD6CF] text-xs font-semibold text-[#143C3A]">
                    Recommended Clinical Treatment
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#143C3A]">
                    {activeOption.treatmentName}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#1B1D1D]/80 leading-relaxed font-normal">
                    {activeOption.description}
                  </p>

                  <div className="flex items-center gap-4 text-xs font-semibold pt-1 text-[#143C3A]">
                    <div className="bg-[#F5F2EB] px-3 py-1.5 rounded-lg border border-[#CCD6CF]/50">
                      <span>Price: </span>
                      <span className="font-bold text-[#143C3A]">{activeOption.priceFrom}</span>
                    </div>
                    <div className="bg-[#F5F2EB] px-3 py-1.5 rounded-lg border border-[#CCD6CF]/50">
                      <span>Duration: </span>
                      <span className="font-bold text-[#143C3A]">{activeOption.duration}</span>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-[#CCD6CF]/40">
                    {activeOption.benefits.map((b, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#1B1D1D]/90 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#143C3A] shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <Link
                      href={`/treatments/${activeOption.slug}`}
                      className="btn-primary text-xs py-3 px-6"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#B8926A]" />
                    </Link>

                    <Link
                      href="/contact#appointment-form"
                      className="btn-secondary text-xs py-3 px-6"
                    >
                      <span>Book Consultation</span>
                    </Link>
                  </div>
                </div>

                <div className="sm:col-span-5">
                  <div className="relative h-[280px] w-full rounded-2xl overflow-hidden border border-[#CCD6CF] shadow-clinic-card">
                    <Image
                      src={activeOption.image}
                      alt={activeOption.treatmentName}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
