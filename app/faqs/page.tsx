import React from 'react';
import { faqsData } from '@/data/faqs';
import { practiceConfig } from '@/data/practice';
import { Accordion } from '@/components/ui/Accordion';
import { SchemaOrg } from '@/components/ui/SchemaOrg';
import { generateFAQSchema } from '@/lib/schema';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Frequently Asked Questions | ${practiceConfig.name}`,
  description: `Find answers to common questions about appointments, fees, NHS availability, emergency care, and nervous patient support at ${practiceConfig.name}.`,
};

export default function FAQsPage() {
  const faqSchema = generateFAQSchema(faqsData);

  const categories = [
    { id: 'new-patients', title: 'New Patients & Registration' },
    { id: 'nhs-availability', title: 'NHS & Private Treatment Status' },
    { id: 'appointments', title: 'Booking & Appointments' },
    { id: 'emergency', title: 'Dental Emergencies' },
    { id: 'fees-payment', title: 'Fees, Payment & Finance' },
    { id: 'nervous-patients', title: 'Nervous Patients' },
    { id: 'parking', title: 'Parking & Accessibility' },
    { id: 'children', title: 'Children’s Dentistry' },
  ];

  return (
    <div className="bg-navy-900 text-ivory min-h-screen">
      <SchemaOrg schema={faqSchema} />

      <section className="py-16 bg-navy-950 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-semibold text-brass uppercase tracking-widest block">
            Clear Information
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ivory">
            Frequently Asked Questions
          </h1>
          <p className="text-sage text-base max-w-2xl leading-relaxed">
            Have a question about visiting our practice? Browse our categorised answers below or contact our reception team directly.
          </p>
        </div>
      </section>

      <section className="py-20 bg-ivory text-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {categories.map((cat) => {
            const items = faqsData.filter((f) => f.category === cat.id);
            if (items.length === 0) return null;

            return (
              <div key={cat.id} className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-navy-900 border-b border-stone-dark/30 pb-2">
                  {cat.title}
                </h2>
                <Accordion
                  items={items.map((faq) => ({
                    id: faq.id,
                    title: faq.question,
                    content: <p className="text-xs text-charcoal-muted leading-relaxed">{faq.answer}</p>,
                  }))}
                />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
