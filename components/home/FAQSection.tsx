'use me';
'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

export const FAQSection: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      q: 'Do you accept new private patients?',
      a: 'Yes, we welcome new private patients for general dentistry, cosmetic consultations, Invisalign, and dental implants. You can book directly online or by calling reception.',
    },
    {
      q: 'Do you offer 0% finance for treatment costs?',
      a: 'Yes, 0% APR financing is available over 6, 10, or 12 months for eligible private treatment plans exceeding £500. Application takes minutes with instant decisions.',
    },
    {
      q: 'Is dental treatment at St. James Clinic painful?',
      a: 'Your comfort is our top priority. We use modern local anaesthetics, gentle techniques, and optional topical numbing gel. Dental sedation is also available for anxious patients.',
    },
    {
      q: 'How long does Invisalign treatment take?',
      a: 'Most adult clear aligner cases take between 6 to 12 months, depending on the degree of tooth movement required. A digital 3D outcome preview provides your exact timeline during consultation.',
    },
    {
      q: 'Do you offer same-day emergency appointments?',
      a: 'Yes, we reserve dedicated emergency appointment slots daily for patients experiencing severe toothache, swelling, dental trauma, or broken teeth.',
    },
    {
      q: 'How do I book an initial consultation?',
      a: 'You can request an appointment online via our 24/7 booking form, call our reception team on 020 7946 0198, or contact us via WhatsApp.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#F5F2EB] border-b border-[#CCD6CF]/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 space-y-3">
          <span className="text-xs font-semibold text-[#143C3A] uppercase tracking-widest block">
            Common Questions
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1B1D1D] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#1B1D1D]/70 font-normal">
            Everything you need to know about booking, financing, and clinical care at our clinic.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white border rounded-2xl transition-all shadow-clinic-soft overflow-hidden ${
                  isOpen ? 'border-[#143C3A]' : 'border-[#CCD6CF]/60 hover:border-[#143C3A]'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-[#143C3A]">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#F5F2EB] flex items-center justify-center text-[#143C3A] shrink-0 transition-transform ${isOpen ? 'rotate-180 bg-[#143C3A] text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 pt-1 text-xs sm:text-sm text-[#1B1D1D]/80 leading-relaxed font-normal border-t border-[#CCD6CF]/30 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
