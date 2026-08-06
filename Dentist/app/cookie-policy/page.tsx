import React from 'react';
import { practiceConfig } from '@/data/practice';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Cookie Policy | ${practiceConfig.name}`,
  description: `Cookie Policy and preference management information for visitors to ${practiceConfig.name}.`,
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-navy-900 text-ivory min-h-screen">
      <section className="py-16 bg-navy-950 border-b border-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-semibold text-brass uppercase tracking-widest block">
            Legal & Compliance
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ivory">
            Cookie Policy
          </h1>
        </div>
      </section>

      <section className="py-16 bg-ivory text-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-xs text-charcoal-muted leading-relaxed">
          <h2 className="font-serif text-xl font-bold text-navy-900">What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your browser when visiting websites. Essential cookies are required for basic navigation and security, while optional analytics cookies help us understand site performance.
          </p>

          <h2 className="font-serif text-xl font-bold text-navy-900">Categories of Cookies We Use</h2>
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-white border border-stone-dark/30">
              <span className="font-bold text-navy-900 block">1. Strictly Necessary Cookies</span>
              <p>Essential for basic site operations, form submission security, and cookie consent state retention. Always active.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-stone-dark/30">
              <span className="font-bold text-navy-900 block">2. Performance & Analytics Cookies</span>
              <p>Anonymous page view measurement to help us improve user experience. Loaded only with your explicit consent.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
