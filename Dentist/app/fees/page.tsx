import React from 'react';
import Link from 'next/link';
import { practiceConfig } from '@/data/practice';
import { treatmentsData } from '@/data/treatments';
import { formatPrice } from '@/lib/utils';
import { TabGroup } from '@/components/ui/TabGroup';
import { ShieldCheck, CreditCard, HelpCircle, Check, AlertCircle } from 'lucide-react';
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

  const nhsBandFees = [
    { band: 'Band 1 NHS (£26.80)', detail: 'Covers an examination, diagnosis, preventive advice, and X-rays where clinically necessary.' },
    { band: 'Band 2 NHS (£73.50)', detail: 'Covers everything in Band 1 plus fillings, root canal care, or extractions.' },
    { band: 'Band 3 NHS (£319.10)', detail: 'Covers everything in Bands 1 and 2 plus laboratory procedures like crowns, bridges, or dentures.' },
    { band: 'Urgent NHS (£26.80)', detail: 'Covers emergency triage, pain relief, temporary fillings, or urgent extraction.' },
  ];

  return (
    <div className="bg-navy-900 text-ivory min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-navy-950 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-semibold text-brass uppercase tracking-widest block">
            Transparent Pricing
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ivory">
            Fee Guide & Finance Options
          </h1>
          <p className="text-sage text-base max-w-2xl leading-relaxed">
            We believe in complete financial clarity. A full written treatment plan and itemised cost estimate will always be provided before treatment begins.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-ivory text-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Important Written Estimate Notice */}
          <div className="p-5 rounded-2xl bg-white border border-stone-dark/30 shadow-soft flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-teal shrink-0 mt-0.5" />
            <div className="text-xs text-charcoal-muted leading-relaxed">
              <span className="font-bold text-navy-900 block">Written Cost Estimates</span>
              Prices listed below represent guide starting fees. Fees may vary depending on individual clinical complexity. Your dentist will provide a formal written treatment plan outlining all options and costs following your clinical assessment.
            </div>
          </div>

          {/* Fee Tabs (Private vs NHS) */}
          <TabGroup
            tabs={[
              {
                id: 'private-fees',
                label: 'Private Fee Guide',
                badge: 'Primary Care',
                content: (
                  <div className="space-y-8">
                    {privateFees.map((group, idx) => (
                      <div key={idx} className="bg-white border border-stone-dark/30 rounded-2xl p-6 shadow-soft space-y-4">
                        <h2 className="font-serif font-bold text-lg text-navy-900 border-b border-stone-dark/20 pb-2">
                          {group.category}
                        </h2>
                        <div className="divide-y divide-stone-dark/20">
                          {group.items.map((item, itemIdx) => (
                            <div key={itemIdx} className="py-3 flex justify-between items-center text-xs sm:text-sm">
                              <span className="text-navy-900 font-medium">{item.name}</span>
                              <span className="font-serif font-bold text-teal">{formatPrice(item.price)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ),
              },
              ...(practiceConfig.status !== 'private'
                ? [
                    {
                      id: 'nhs-fees',
                      label: 'NHS Banded Charges',
                      badge: 'NHS Status',
                      content: (
                        <div className="bg-white border border-stone-dark/30 rounded-2xl p-6 shadow-soft space-y-4">
                          <div className="border-b border-stone-dark/20 pb-3">
                            <h2 className="font-serif font-bold text-lg text-navy-900">
                              Current Statutory NHS Dental Charges (England)
                            </h2>
                            <p className="text-xs text-charcoal-muted">
                              NHS dental charges are set nationally. Availability depends on practice NHS contract capacity.
                            </p>
                          </div>
                          <div className="space-y-4">
                            {nhsBandFees.map((nhs, i) => (
                              <div key={i} className="p-4 rounded-xl bg-stone/50 border border-stone-dark/20 space-y-1">
                                <span className="font-bold text-navy-900 text-sm block">{nhs.band}</span>
                                <p className="text-xs text-charcoal-muted">{nhs.detail}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ),
                    },
                  ]
                : []),
            ]}
          />

          {/* Finance Section */}
          {practiceConfig.financeAvailable && (
            <div className="bg-navy-900 text-ivory rounded-3xl p-8 border border-navy-800 space-y-6">
              <div className="flex items-center gap-3">
                <CreditCard className="w-8 h-8 text-brass" />
                <div>
                  <h2 className="font-serif text-2xl font-bold text-ivory">
                    0% APR Dental Finance Options
                  </h2>
                  <p className="text-xs text-sage">Spread the cost of your treatment into manageable monthly payments.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-sage">
                <div className="p-4 rounded-xl bg-navy-950 border border-navy-800 space-y-1">
                  <span className="font-bold text-ivory block">0% Interest Free</span>
                  <p>Available over 6, 10, or 12 monthly terms for treatment plans over £500.</p>
                </div>
                <div className="p-4 rounded-xl bg-navy-950 border border-navy-800 space-y-1">
                  <span className="font-bold text-ivory block">Quick Online Application</span>
                  <p>In-clinic or home application with fast decision turnaround.</p>
                </div>
                <div className="p-4 rounded-xl bg-navy-950 border border-navy-800 space-y-1">
                  <span className="font-bold text-ivory block">Accepted Payments</span>
                  <p>{practiceConfig.acceptedPaymentMethods.join(', ')}.</p>
                </div>
              </div>

              <p className="text-[11px] text-sage/70 italic border-t border-navy-800 pt-3">
                *Finance is subject to credit status, age, and affordability assessment. Terms and conditions apply. Written details available on request.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
