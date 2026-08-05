import React from 'react';
import { practiceConfig } from '@/data/practice';
import { ShieldCheck, Mail, Phone, ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Complaints Procedure | ${practiceConfig.name}`,
  description: `Practice complaints procedure for ${practiceConfig.name}. Contact person, expected investigation timeline, and regulatory escalation routes.`,
};

export default function ComplaintsPage() {
  return (
    <div className="bg-navy-900 text-ivory min-h-screen">
      <section className="py-16 bg-navy-950 border-b border-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-semibold text-brass uppercase tracking-widest block">
            Patient Rights & Quality Assurance
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ivory">
            Complaints Procedure
          </h1>
          <p className="text-sage text-base max-w-2xl leading-relaxed">
            We welcome feedback and take any expression of dissatisfaction seriously. Our objective is to resolve concerns swiftly, fairly, and transparently.
          </p>
        </div>
      </section>

      <section className="py-16 bg-ivory text-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-xs text-charcoal-muted leading-relaxed">
          {/* Step 1: Raising a Concern */}
          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-navy-900">
              1. How to Raise a Concern
            </h2>
            <p>
              If you are unhappy with any aspect of your clinical care or practice experience, please inform our Practice Manager, <strong>{practiceConfig.practiceManager}</strong>, in writing or by telephone:
            </p>
            <div className="p-4 rounded-xl bg-white border border-stone-dark/30 space-y-1 text-xs">
              <p><strong>Practice Manager:</strong> {practiceConfig.practiceManager}</p>
              <p><strong>Address:</strong> {practiceConfig.name}, {practiceConfig.address}, {practiceConfig.city}, {practiceConfig.postcode}</p>
              <p><strong>Email:</strong> {practiceConfig.email}</p>
              <p><strong>Telephone:</strong> {practiceConfig.phone}</p>
            </div>
          </div>

          {/* Step 2: Response Timelines */}
          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-navy-900">
              2. Expected Response Process & Timeline
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-stone-dark/30 space-y-1">
                <span className="font-bold text-navy-900 text-sm block">Acknowledgement</span>
                <p>We will acknowledge your complaint in writing within 3 working days of receipt.</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-stone-dark/30 space-y-1">
                <span className="font-bold text-navy-900 text-sm block">Full Investigation Response</span>
                <p>A comprehensive written investigation response will be provided within 10 to 20 working days.</p>
              </div>
            </div>
          </div>

          {/* Step 3: External Escalation Routes */}
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-navy-900">
              3. Independent External Escalation Routes
            </h2>
            <p>
              If you remain dissatisfied following our internal review, you may escalate your concern to the relevant independent organisation:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Private Escalation */}
              <div className="p-5 rounded-2xl bg-white border border-stone-dark/30 space-y-2 shadow-soft">
                <span className="font-serif font-bold text-navy-900 text-base block">
                  For Private Treatment Concerns:
                </span>
                <p className="font-bold text-teal">Dental Complaints Service (DCS)</p>
                <p>Telephone: 020 8253 0800</p>
                <p>Website: www.dcs.gdc-uk.org</p>
              </div>

              {/* NHS Escalation */}
              <div className="p-5 rounded-2xl bg-white border border-stone-dark/30 space-y-2 shadow-soft">
                <span className="font-serif font-bold text-navy-900 text-base block">
                  For NHS Treatment Concerns:
                </span>
                <p className="font-bold text-teal">Parliamentary & Health Service Ombudsman (PHSO)</p>
                <p>Telephone: 0345 015 4033</p>
                <p>Website: www.ombudsman.org.uk</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
