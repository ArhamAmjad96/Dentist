'use me';
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, Shield, Smile, Stethoscope, Layers, Check } from 'lucide-react';

export const FeaturedTreatments: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-[#CCD6CF]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-semibold text-[#143C3A] uppercase tracking-widest block">
              Bespoke Clinical Dentistry
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1B1D1D] tracking-tight">
              Featured Treatments & Transformations
            </h2>
          </div>
          <Link
            href="/treatments"
            className="btn-secondary text-xs py-3 px-6 shrink-0 self-start md:self-auto"
          >
            <span>View All Clinical Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Item 1: Large Featured - Invisalign (Span 7) */}
          <div className="md:col-span-7 bg-[#F5F2EB] border border-[#CCD6CF] rounded-3xl overflow-hidden shadow-clinic-card hover:border-[#143C3A] transition-all duration-300 group flex flex-col justify-between p-6 sm:p-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#143C3A] uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-[#CCD6CF]">
                  Orthodontics
                </span>
                <span className="text-xs font-bold text-[#143C3A]">From £2,800</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B1D1D] group-hover:text-[#143C3A] transition-colors">
                Invisalign Clear Aligners
              </h3>
              <p className="text-sm text-[#1B1D1D]/80 leading-relaxed max-w-xl font-normal">
                Near-invisible removable aligners engineered to straighten teeth with digital precision. Includes full 3D outcome simulation, teeth whitening, and retainers.
              </p>
            </div>

            <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden my-6 border border-[#CCD6CF]/60">
              <Image
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80"
                alt="Invisalign clear aligners"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-[#CCD6CF]/50">
              <span className="text-xs text-[#1B1D1D]/70 font-medium">0% APR Finance available from £116/mo</span>
              <Link
                href="/treatments/invisalign-aligners"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#143C3A] hover:underline"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B8926A]" />
              </Link>
            </div>
          </div>

          {/* Item 2: Dental Implants (Span 5) */}
          <div className="md:col-span-5 bg-[#143C3A] text-white rounded-3xl overflow-hidden shadow-clinic-elevated p-6 sm:p-8 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-white/80 uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full border border-white/20">
                  Implantology
                </span>
                <span className="text-xs font-bold text-[#B8926A]">From £2,450</span>
              </div>
              <h3 className="font-serif text-3xl font-bold text-white group-hover:text-[#B8926A] transition-colors">
                Dental Implants
              </h3>
              <p className="text-sm text-white/80 leading-relaxed font-normal">
                Permanent titanium post restorations replacing missing teeth naturally. Restores 100% natural chewing function without grinding healthy teeth.
              </p>
            </div>

            <div className="relative h-56 w-full rounded-2xl overflow-hidden my-6 border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80"
                alt="Dental Implants procedure"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <span className="text-xs text-white/70">3D Guided Computer Surgery</span>
              <Link
                href="/treatments/dental-implants"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#B8926A] hover:underline"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Item 3: Composite Bonding (Span 4) */}
          <div className="md:col-span-4 bg-[#F5F2EB] border border-[#CCD6CF] rounded-3xl p-6 shadow-clinic-card hover:border-[#143C3A] transition-all group flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-semibold text-[#143C3A] uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-[#CCD6CF]">
                Cosmetic
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1B1D1D] group-hover:text-[#143C3A] transition-colors">
                Composite Bonding
              </h3>
              <p className="text-xs text-[#1B1D1D]/80 leading-relaxed font-normal">
                Artistic resin sculpting in 1 single appointment. Fixes chips, gaps, and worn edges with zero drilling.
              </p>
            </div>

            <div className="relative h-44 w-full rounded-xl overflow-hidden my-4 border border-[#CCD6CF]/50">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
                alt="Composite Bonding"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-[#CCD6CF]/40 text-xs">
              <span className="font-bold text-[#143C3A]">From £220 / tooth</span>
              <Link href="/treatments/composite-bonding" className="font-bold text-[#143C3A] hover:underline flex items-center gap-1">
                <span>Details</span>
                <ArrowRight className="w-3 h-3 text-[#B8926A]" />
              </Link>
            </div>
          </div>

          {/* Item 4: Porcelain Veneers (Span 4) */}
          <div className="md:col-span-4 bg-[#F5F2EB] border border-[#CCD6CF] rounded-3xl p-6 shadow-clinic-card hover:border-[#143C3A] transition-all group flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-semibold text-[#143C3A] uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-[#CCD6CF]">
                Porcelain Aesthetics
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1B1D1D] group-hover:text-[#143C3A] transition-colors">
                Porcelain Veneers
              </h3>
              <p className="text-xs text-[#1B1D1D]/80 leading-relaxed font-normal">
                Hand-crafted ceramic ultra-thin shells for permanent stain-resistant alignment and natural light reflection.
              </p>
            </div>

            <div className="relative h-44 w-full rounded-xl overflow-hidden my-4 border border-[#CCD6CF]/50">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                alt="Porcelain Veneers"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-[#CCD6CF]/40 text-xs">
              <span className="font-bold text-[#143C3A]">Bespoke Craftsmanship</span>
              <Link href="/treatments/composite-bonding" className="font-bold text-[#143C3A] hover:underline flex items-center gap-1">
                <span>Details</span>
                <ArrowRight className="w-3 h-3 text-[#B8926A]" />
              </Link>
            </div>
          </div>

          {/* Item 5: Teeth Whitening & General Hygiene (Span 4) */}
          <div className="md:col-span-4 bg-[#F5F2EB] border border-[#CCD6CF] rounded-3xl p-6 shadow-clinic-card hover:border-[#143C3A] transition-all group flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-semibold text-[#143C3A] uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-[#CCD6CF]">
                Whitening & Hygiene
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1B1D1D] group-hover:text-[#143C3A] transition-colors">
                Whitening & Airflow
              </h3>
              <p className="text-xs text-[#1B1D1D]/80 leading-relaxed font-normal">
                Dentist-prescribed home whitening trays combined with gentle Airflow biofilm stain removal.
              </p>
            </div>

            <div className="relative h-44 w-full rounded-xl overflow-hidden my-4 border border-[#CCD6CF]/50">
              <Image
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
                alt="Teeth Whitening"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-[#CCD6CF]/40 text-xs">
              <span className="font-bold text-[#143C3A]">From £395</span>
              <Link href="/treatments/teeth-whitening" className="font-bold text-[#143C3A] hover:underline flex items-center gap-1">
                <span>Details</span>
                <ArrowRight className="w-3 h-3 text-[#B8926A]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
