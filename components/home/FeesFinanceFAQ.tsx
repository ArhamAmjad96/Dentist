'use me';
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calculator, ChevronDown, HelpCircle } from 'lucide-react';
import { faqsData } from '@/data/faqs';

export const FeesFinanceFAQ: React.FC = () => {
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
    <section className="py-16 lg:py-24 bg-white border-b border-[#DDE4E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold text-[#70AEB3] uppercase tracking-widest block">
            Transparent Pricing & FAQs
          </span>
          <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-[#122A38] tracking-tight">
            Fees, Finance & <span className="italic font-serif font-normal text-[#70AEB3]">Questions</span>
          </h2>
          <p className="text-sm sm:text-base text-[#122A38]/70 font-normal">
            Upfront pricing, 0% APR monthly finance, and instant answers to common patient questions.
          </p>
        </div>

        {/* 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Consultation & Guide Prices */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#F8FAFA] border border-[#DDE4E6] rounded-2xl p-6 sm:p-7 shadow-nordic-soft space-y-5">
              <div className="flex items-center justify-between border-b border-[#DDE4E6] pb-4">
                <div>
                  <h3 className="font-sans font-bold text-2xl text-[#122A38]">Starting Prices</h3>
                  <p className="text-xs text-[#122A38]/70 font-normal">Transparent fee estimates with written treatment plans</p>
                </div>
                <span className="text-xs font-bold text-[#70AEB3] bg-[#E7F1F3] px-3 py-1 rounded-lg">
                  Fixed Pricing
                </span>
              </div>

              <div className="divide-y divide-[#DDE4E6]/60">
                {guidePrices.map((item, idx) => (
                  <div key={idx} className="py-3 flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-medium text-[#122A38]">{item.service}</span>
                    <span className="font-bold text-[#70AEB3]">{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link href="/fees" className="btn-secondary text-xs w-full justify-center py-3">
                  <span>View Full Fees & Pricing</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Finance Card */}
            <div className="bg-[#122A38] text-white rounded-2xl p-6 sm:p-7 shadow-nordic-card space-y-3">
              <div className="flex items-center gap-2 text-[#70AEB3]">
                <Calculator className="w-5 h-5" />
                <span className="text-xs font-semibold uppercase tracking-wider">Flexible Payments</span>
              </div>
              <h4 className="font-sans font-bold text-2xl">0% Interest Finance Options</h4>
              <p className="text-xs text-white/80 leading-relaxed font-normal">
                Spread your treatment costs over 6, 10, or 12 monthly interest-free instalments with digital application.
              </p>
              <div className="pt-1">
                <span className="text-xs font-bold text-[#D6B99A] block">Example: Invisalign at £2,800 = £116.66 / month over 24 months</span>
              </div>
            </div>
          </div>

          {/* Right Column: Max 5 FAQ Accordions */}
          <div className="lg:col-span-6 bg-[#F8FAFA] border border-[#DDE4E6] rounded-2xl p-6 sm:p-7 shadow-nordic-soft space-y-5">
            <div className="border-b border-[#DDE4E6] pb-4 flex items-center justify-between">
              <div>
                <h3 className="font-sans font-bold text-2xl text-[#122A38]">Frequently Asked Questions</h3>
                <p className="text-xs text-[#122A38]/70 font-normal">Clear answers to your dental questions</p>
              </div>
              <HelpCircle className="w-5 h-5 text-[#70AEB3]" />
            </div>

            <div className="space-y-3">
              {homepageFaqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="border border-[#DDE4E6] rounded-xl overflow-hidden bg-white transition-colors"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full p-4 text-left flex items-center justify-between hover:bg-[#E7F1F3]/40 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="font-sans font-semibold text-sm text-[#122A38] pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#70AEB3] shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="p-4 pt-2 bg-white text-xs text-[#122A38]/80 leading-relaxed border-t border-[#DDE4E6]/50 font-normal">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <Link href="/faqs" className="btn-secondary text-xs w-full justify-center py-3">
                <span>View All FAQs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
