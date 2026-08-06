import React from 'react';
import Link from 'next/link';
import { practiceConfig } from '@/data/practice';
import { FileText, ShieldCheck, Heart, Sparkles, AlertCircle, HelpCircle, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Patient Information Hub | ${practiceConfig.name}`,
  description: `Patient guides, post-treatment instructions, oral hygiene advice, and policy documents for patients at ${practiceConfig.name}.`,
};

export default function PatientInformationPage() {
  const cards = [
    { title: 'New Patient Journey', desc: 'What to expect during your first examination and joining our clinic.', href: '/new-patients' },
    { title: 'Post-Treatment Instructions', desc: 'Aftercare advice following fillings, extractions, or root canal care.', href: '/faqs' },
    { title: 'Children’s Oral Health', desc: 'Preventive dentistry tips and building healthy habits for kids.', href: '/faqs' },
    { title: 'Dental Emergencies', desc: 'Urgent advice for toothache, facial swelling, or dental trauma.', href: '/emergency-dentist' },
    { title: 'Nervous Patients Guide', desc: 'Our gentle approach and control protocols for anxious visitors.', href: '/nervous-patients' },
    { title: 'Oral Hygiene Advice', desc: 'Brossing, interdental brushing, and Airflow stain prevention.', href: '/treatments/hygiene-appointments' },
    { title: 'Implant Aftercare', desc: 'Maintaining your dental implants for long-term health and stability.', href: '/treatments/dental-implants' },
    { title: 'Denture Care Guide', desc: 'Cleaning, storing, and adjusting modern acrylic and chrome dentures.', href: '/treatments/dentures' },
    { title: 'Clear Aligner Care', desc: 'Tips for wearing, cleaning, and tracking clear aligner trays.', href: '/treatments/invisalign-aligners' },
    { title: 'Cancellation Policy', desc: 'Rescheduling guidelines and notice period expectations.', href: '/new-patients' },
    { title: 'Complaints Procedure', desc: 'How to raise concerns and escalation routes to Ombudsman/GDC.', href: '/complaints' },
    { title: 'Accessibility Statement', desc: 'Wheelchair access, parking details, and facility accommodations.', href: '/accessibility' },
  ];

  return (
    <div className="bg-navy-900 text-ivory min-h-screen">
      <section className="py-16 bg-navy-950 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-semibold text-brass uppercase tracking-widest block">
            Resource Center
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ivory">
            Patient Information Hub
          </h1>
          <p className="text-sage text-base max-w-2xl leading-relaxed">
            Access post-treatment advice, oral hygiene guides, practice policies, and clinical resources to support your oral health.
          </p>
        </div>
      </section>

      <section className="py-20 bg-ivory text-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-stone-dark/30 shadow-soft hover:shadow-medium transition-all space-y-3 flex flex-col justify-between group">
                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-lg text-navy-900 group-hover:text-teal transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {card.desc}
                  </p>
                </div>
                <Link href={card.href} className="inline-flex items-center gap-1 text-teal font-semibold text-xs pt-2">
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
