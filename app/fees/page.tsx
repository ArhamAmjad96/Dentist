import React from 'react';
import Link from 'next/link';
import { practiceConfig } from '@/data/practice';
import { formatPrice } from '@/lib/utils';
import { TabGroup } from '@/components/ui/TabGroup';
import { ShieldCheck, CreditCard, HelpCircle, Check, AlertCircle, Calendar } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Fees & Financing | ${practiceConfig.name}`,
  description: `Transparent fee guide and 0% APR payment options at ${practiceConfig.name} in ${practiceConfig.city}. Itemised written estimates provided before treatment.`,
};

export default function FeesPage() {
  const privateFees = [
    { category: 'Examinations & Diagnostics', items: [
      { name: 'New Patient Comprehensive Examination (inc. X-rays)', price: 95 },
      { name: 'Routine Patient Dental Examination', price: 85 },
      { name: 'Emergency Dental Triage & Assessment', price: 110 },
      { name: 'Digital Intraoral X-ray (per film)', price: 20 },
      { name: '3D CBCT Implant Scan (single arch)', price: 195 },
    ]},
    { category: 'Hygiene & Preventive Care', items: [
      { name: 'Standard Hygiene Appointment (30 mins)', price: 95 },
      { name: 'Airflow Guided Biofilm Therapy & Stain Removal', price: 135 },
      { name: 'Periodontal Debridement & Deep Gum Cleaning', price: 220 },
    ]},
    { category: 'Restorative & General Dentistry', items: [
      { name: 'Composite (White) Filling (simple)', price: 140 },
      { name: 'Composite (White) Filling (complex)', price: 210 },
      { name: 'Root Canal Treatment (Incisor / Premolar)', price: 420 },
      { name: 'Root Canal Treatment (Molar)', price: 650 },
      { name: 'Simple Routine Extraction', price: 160 },
      { name: 'Surgical / Complex Extraction', price: 280 },
    ]},
    { category: 'Cosmetic & Advanced Care', items: [
      { name: 'Professional Supervised Home Teeth Whitening', price: 395 },
      { name: 'Composite Bonding (per tooth)', price: 220 },
      { name: 'Porcelain Ceramic Crown / Veneer', price: 850 },
      { name: 'Single Dental Implant & Ceramic Crown', price: 2450 },
      { name: 'Clear Aligner Orthodontics (Invisalign)', price: 2800 },
      { name: 'Custom Acrylic / Chrome Dentures', price: 750 },
    ]},
  ];

  return (
    <div className="bg-[#F5F2EB] text-[#1B1D1D] min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-white border-b border-[#CCD6CF]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-semibold text-[#143C3A] uppercase tracking-widest block">
            Transparent Pricing
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#1B1D1D]">
            Fee Guide & Finance Options
          </h1>
          <p className="text-[#1B1D1D]/75 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
            We believe in complete financial clarity. A full written treatment plan and itemised cost estimate will always be provided before treatment begins.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-[#F5F2EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Important Written Estimate Notice */}
          <div className="p-5 rounded-2xl bg-white border border-[#CCD6CF] shadow-clinic-soft flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#143C3A] shrink-0 mt-0.5" />
            <div className="text-xs text-[#1B1D1D]/80 leading-relaxed font-normal">
              <span className="font-bold text-[#143C3A] block">Written Cost Estimates</span>
              Prices listed below represent guide starting fees. Fees may vary depending on individual clinical complexity. Your dentist will provide a formal written treatment plan outlining all options and costs following your clinical assessment.
            </div>
          </div>

          {/* Private Fee Table */}
          <div className="space-y-8">
            {privateFees.map((group, idx) => (
              <div key={idx} className="bg-white border border-[#CCD6CF] rounded-3xl p-6 sm:p-8 shadow-clinic-card space-y-4">
                <h2 className="font-serif font-bold text-2xl text-[#143C3A] border-b border-[#CCD6CF]/40 pb-3">
                  {group.category}
                </h2>
                <div className="divide-y divide-[#CCD6CF]/40">
                  {group.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="py-3 flex justify-between items-center text-xs sm:text-sm">
                      <span className="text-[#1B1D1D] font-medium">{item.name}</span>
                      <span className="font-serif font-bold text-[#143C3A] bg-[#F5F2EB] px-3 py-1 rounded-xl border border-[#CCD6CF]">
                        {formatPrice(item.price)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 0% APR Finance Section */}
          <div className="bg-[#143C3A] text-white rounded-3xl p-8 sm:p-10 shadow-clinic-elevated space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[#B8926A]">
                <CreditCard className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  0% APR Dental Finance Options
                </h2>
                <p className="text-xs sm:text-sm text-white/80 font-normal">Spread the cost of your treatment into manageable monthly payments.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-white/80">
              <div className="p-5 rounded-2xl bg-white/10 border border-white/20 space-y-1">
                <span className="font-bold text-[#B8926A] block text-sm">0% Interest Free</span>
                <p>Available over 6, 10, or 12 monthly terms for treatment plans over £500.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/10 border border-white/20 space-y-1">
                <span className="font-bold text-[#B8926A] block text-sm">Quick Online Application</span>
                <p>In-clinic or home application with fast decision turnaround.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/10 border border-white/20 space-y-1">
                <span className="font-bold text-[#B8926A] block text-sm">Accepted Payments</span>
                <p>{practiceConfig.acceptedPaymentMethods.join(', ')}.</p>
              </div>
            </div>

            <div className="pt-4 text-center">
              <Link href="/contact#appointment-form" className="btn-secondary text-xs py-3.5 px-8 bg-white text-[#143C3A]">
                <Calendar className="w-4 h-4 text-[#143C3A]" />
                <span>Book Consultation & Discuss Financing</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
