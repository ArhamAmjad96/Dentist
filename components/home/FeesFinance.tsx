'use me';
'use client';

import React from 'react';
import Link from 'next/link';
import { CreditCard, CheckCircle2, ArrowRight, ShieldCheck, Calculator } from 'lucide-react';

export const FeesFinance: React.FC = () => {
  const priceItems = [
    { title: 'New Patient Consultation', price: '£85', note: 'Includes full clinical exam & 3D digital radiographs' },
    { title: 'Dental Hygiene & Airflow', price: '£95', note: 'Gentle stain removal & periodontal deep clean' },
    { title: 'Invisalign Aligners', price: 'From £2,800', note: 'Includes 3D scan, whitening & retainers (or £116/mo)' },
    { title: 'Single Dental Implant', price: 'From £2,450', note: 'Includes titanium implant post, abutment & crown' },
    { title: 'Composite Bonding', price: 'From £220', note: 'Per tooth, completed in 1 single appointment' },
    { title: 'Home Teeth Whitening', price: 'From £395', note: 'Custom trays & dentist-supervised gel' },
  ];

  return (
    <section className="py-24 bg-white border-b border-[#CCD6CF]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold text-[#143C3A] uppercase tracking-widest block">
            Transparent Pricing & Investment
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1B1D1D] tracking-tight">
            Transparent fees, flexible financing.
          </h2>
          <p className="text-sm sm:text-base text-[#1B1D1D]/70 font-normal">
            No hidden costs. Every treatment begins with a detailed written estimate following your clinical consultation.
          </p>
        </div>

        {/* Grid: 0% Finance Highlight Card + Price Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* 0% APR Finance Card (Left 5 Cols) */}
          <div className="lg:col-span-5 bg-[#143C3A] text-white rounded-3xl p-8 sm:p-10 shadow-clinic-elevated space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[#B8926A]">
              <CreditCard className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-semibold text-[#B8926A] uppercase tracking-wider block">
                Flexible Monthly Payments
              </span>
              <h3 className="font-serif text-3xl font-bold text-white">
                0% APR Finance Available
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                Spread the cost of your treatment over 6, 10, or 12 monthly instalments with zero interest. Quick digital application with instant decisions.
              </p>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs">
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="w-4 h-4 text-[#B8926A]" />
                <span>Available for treatments over £500</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="w-4 h-4 text-[#B8926A]" />
                <span>Zero deposit options available</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="w-4 h-4 text-[#B8926A]" />
                <span>Pay in manageable monthly steps</span>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/fees" className="w-full btn-secondary justify-center text-xs py-3.5">
                <Calculator className="w-3.5 h-3.5 text-[#143C3A]" />
                <span>Calculate Monthly Finance</span>
              </Link>
            </div>
          </div>

          {/* Key Starting Prices Table (Right 7 Cols) */}
          <div className="lg:col-span-7 bg-[#F5F2EB] border border-[#CCD6CF] rounded-3xl p-6 sm:p-8 shadow-clinic-card space-y-4">
            <h3 className="font-serif text-2xl font-bold text-[#143C3A] mb-4">
              Guide Treatment Starting Fees
            </h3>

            <div className="divide-y divide-[#CCD6CF]/50 space-y-1">
              {priceItems.map((item, idx) => (
                <div key={idx} className="py-3 flex items-center justify-between gap-4">
                  <div>
                    <span className="font-bold text-sm text-[#1B1D1D] block">{item.title}</span>
                    <span className="text-xs text-[#1B1D1D]/60 font-normal">{item.note}</span>
                  </div>
                  <span className="font-serif font-bold text-base text-[#143C3A] shrink-0 bg-white px-3 py-1 rounded-xl border border-[#CCD6CF]">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-6 text-center border-t border-[#CCD6CF]/50">
              <Link href="/fees" className="btn-primary text-xs py-3.5 px-8">
                <span>Explore Full Fees & Finance</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B8926A]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
