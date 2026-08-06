import React from 'react';
import { practiceConfig } from '@/data/practice';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Privacy Policy | ${practiceConfig.name}`,
  description: `UK GDPR Privacy Policy for ${practiceConfig.name}. Information on how patient personal data is collected, stored, and protected.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-navy-900 text-ivory min-h-screen">
      <section className="py-16 bg-navy-950 border-b border-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-semibold text-brass uppercase tracking-widest block">
            Legal & Compliance
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ivory">
            Privacy Policy & Data Protection
          </h1>
          <p className="text-sage text-xs">Last updated: August 2026</p>
        </div>
      </section>

      <section className="py-16 bg-ivory text-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-xs leading-relaxed text-charcoal-muted">
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-medium">
            Note for Practice Customisation: This policy template covers UK GDPR requirements for dental practices. The practice manager should review and confirm specific data processor details before publication.
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-navy-900">1. Data Controller Details</h2>
            <p>
              {practiceConfig.name} is the Data Controller responsible for your personal data. Practice Manager: {practiceConfig.practiceManager}. Address: {practiceConfig.address}, {practiceConfig.city}, {practiceConfig.postcode}. Contact Email: {practiceConfig.email}. Phone: {practiceConfig.phone}.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-navy-900">2. Information We Collect</h2>
            <p>
              We collect personal data necessary to provide safe dental care, including:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Contact details (name, address, telephone, email, emergency contact)</li>
              <li>Medical and dental history (prescriptions, clinical notes, X-rays)</li>
              <li>Appointment enquiry forms submitted via our website</li>
              <li>Financial payment transaction records</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-navy-900">3. Lawful Basis for Processing</h2>
            <p>
              We process personal data for healthcare under Article 6(1)(f) (Legitimate Interests) and Article 9(2)(h) (Provision of Health or Social Care) of the UK GDPR.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-navy-900">4. Your Data Rights</h2>
            <p>
              Under UK GDPR, you have the right to request access to your clinical records (Subject Access Request), request correction of inaccurate data, or lodge a complaint with the Information Commissioner's Office (ICO).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
