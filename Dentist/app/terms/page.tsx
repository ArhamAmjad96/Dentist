import React from 'react';
import { practiceConfig } from '@/data/practice';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Terms of Use | ${practiceConfig.name}`,
  description: `Terms of Website Use for ${practiceConfig.name}. Medical disclaimer and website usage conditions.`,
};

export default function TermsPage() {
  return (
    <div className="bg-navy-900 text-ivory min-h-screen">
      <section className="py-16 bg-navy-950 border-b border-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-semibold text-brass uppercase tracking-widest block">
            Legal Terms
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ivory">
            Terms of Website Use
          </h1>
        </div>
      </section>

      <section className="py-16 bg-ivory text-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-xs text-charcoal-muted leading-relaxed">
          <h2 className="font-serif text-xl font-bold text-navy-900">1. Medical & Educational Disclaimer</h2>
          <p>
            The content provided on this website is for general informational and educational purposes only. It does not constitute formal medical or dental advice and should not replace a face-to-face clinical examination by a qualified dental professional.
          </p>

          <h2 className="font-serif text-xl font-bold text-navy-900">2. Intellectual Property</h2>
          <p>
            All content, logo designs, text, and layout architecture on this website are the property of {practiceConfig.name}.
          </p>
        </div>
      </section>
    </div>
  );
}
