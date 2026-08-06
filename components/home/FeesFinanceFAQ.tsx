'use me';
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calculator, ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';
import { faqsData } from '@/data/faqs';

export const FeesFinanceFAQ: React.FC = () => {
  // Top 5 essential FAQs for homepage
  const homepageFaqs = faqsData.slice(0, 5);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const guidePrices = [
    { service: 'New Patient Consultation & 3D Scan', price: '£95' },
    { service: 'Invisalign Clear Aligners', price: 'From £2,800' },
    { service: 'Single Titanium Dental Implant', price: 'From £2,450' },
    { service: 'Composite Bonding (per tooth)', price: 'From £220' },
    { service: 'Professional Teeth Whitening', price: 'From £395' },
  ];

  return (
    <section className="py-16 lg:py-20 bg-[#F5F2EB] border-b border-[#CCD6CF]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold text-[#143C3A] uppercase tracking-widest block">
            Transparent Care & Guidance
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1B1D1D] tracking-tight">
            Fees, Finance & Essential Questions
          </h2>
          <p className="text-sm sm:text-base text-[#1B1D1D]/75 font-normal">
            Clear, upfront guide pricing, flexible 0% interest finance, and answers to common patient enquiries.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Fees & Finance */}
          <div className="lg:col-span-6 space-y-6">
            {/* Price Table Card */}
            <div className="bg-white border border-[#CCD6CF] rounded-3xl p-6 sm:p-7 shadow-clinic-card space-y-5">
              <div className="flex items-center justify-between border-b border-[#CCD6CF]/40 pb-4">
                <div>
                  <h3 className="font-serif font-bold text-2xl text-[#143C3A]">Guide Starting Prices</h3>
                  <p className="text-xs text-[#1B1D1D]/70 font-normal">Transparent fee guide with written treatment estimates</p>
                </div>
                <span className="text-xs font-bold text-[#B8926A] bg-[#F5F2EB] px-3 py-1 rounded-full border border-[#CCD6CF]">
                  Fixed Rates
                </span>
              </div>

              <div className="divide-y divide-[#CCD6CF]/40">
                {guidePrices.map((item, idx) => (
                  <div key={idx} className="py-3 flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-medium text-[#1B1D1D]">{item.service}</span>
                    <span className="font-bold text-[#143C3A]">{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link href="/fees" className="btn-secondary text-xs w-full justify-center py-3">
                  <span>View Complete Price List</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#143C3A]" />
                </Link>
              </div>
            </div>

            {/* 0% Finance Card */}
            <div className="bg-[#143C3A] text-white rounded-3xl p-6 sm:p-7 shadow-clinic-card space-y-3">
              <div className="flex items-center gap-2 text-[#B8926A]">
                <Calculator className="w-5 h-5" />
                <span className="text-xs font-semibold uppercase tracking-wider">Flexible Payments</span>
              </div>
              <h4 className="font-serif font-bold text-2xl">0% Interest Finance Options</h4>
              <p className="text-xs text-white/80 leading-relaxed font-normal">
                Spread your dental treatment costs over 6, 10, or 12 monthly interest-free instalments with instant digital application.
              </p>
              <div className="pt-1">
                <span className="text-xs font-bold text-[#B8926A] block">Example: Invisalign at £2,800 = £116.66 / month over 24 months</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4-5 FAQ Accordions */}
          <div className="lg:col-span-6 bg-white border border-[#CCD6CF] rounded-3xl p-6 sm:p-7 shadow-clinic-card space-y-5">
            <div className="border-b border-[#CCD6CF]/40 pb-4 flex items-center justify-between">
              <div>
                <h3 className="font-serif font-bold text-2xl text-[#143C3A]">Frequently Asked Questions</h3>
                <p className="text-xs text-[#1B1D1D]/70 font-normal">Quick answers to common patient questions</p>
              </div>
              <HelpCircle className="w-5 h-5 text-[#B8926A]" />
            </div>

            <div className="space-y-3">
              {homepageFaqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="border border-[#CCD6CF]/60 rounded-2xl overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full p-4 text-left flex items-center justify-between bg-[#F5F2EB]/50 hover:bg-[#F5F2EB] transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="font-serif font-semibold text-sm sm:text-base text-[#143C3A] pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#143C3A] shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="p-4 pt-2 bg-white text-xs sm:text-sm text-[#1B1D1D]/80 leading-relaxed border-t border-[#CCD6CF]/40 font-normal">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <Link href="/faqs" className="btn-secondary text-xs w-full justify-center py-3">
                <span>View All Frequently Asked Questions</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#143C3A]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
