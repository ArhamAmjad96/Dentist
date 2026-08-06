import React from 'react';
import Link from 'next/link';
import { practiceConfig } from '@/data/practice';
import { Phone, AlertCircle, Clock, MapPin, ShieldCheck, CheckCircle2, AlertTriangle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Emergency Dentist in ${practiceConfig.city} | ${practiceConfig.name}`,
  description: `Urgent dental care and same-day emergency appointments in ${practiceConfig.city}. Call ${practiceConfig.phone} for immediate advice and treatment.`,
};

export default function EmergencyPage() {
  const commonReasons = [
    { title: 'Severe Toothache', desc: 'Persistent throbbing pain keeping you awake or unmanaged by painkillers.' },
    { title: 'Facial or Gum Swelling', desc: 'Swollen gums, cheek, or jaw suggesting an infection or abscess.' },
    { title: 'Broken or Chipped Tooth', desc: 'Sharp edges causing pain to tongue or cheek requiring stabilization.' },
    { title: 'Lost Filling or Crown', desc: 'Exposed sensitive dentine causing acute temperature pain.' },
    { title: 'Knocked-Out (Avulsed) Tooth', desc: 'Dental trauma requiring urgent re-implantation within 60 minutes.' },
    { title: 'Post-Extraction Bleeding', desc: 'Persistent bleeding that does not stop with firm gauze pressure.' },
  ];

  return (
    <div className="bg-navy-900 text-ivory min-h-screen">
      {/* Red/Brass Urgent Care Hero */}
      <section className="py-16 bg-navy-950 border-b border-navy-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 bg-brass/20 text-brass text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <AlertCircle className="w-4 h-4" />
            <span>Urgent Dental Triage</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ivory">
            Need urgent dental help in {practiceConfig.city}?
          </h1>

          <p className="text-sage text-base max-w-2xl leading-relaxed">
            If you are experiencing severe dental pain, swelling, or trauma, contact our reception team immediately. We reserve daily emergency slots for urgent assessment.
          </p>

          {/* Call Now Banner */}
          <div className="p-6 rounded-2xl bg-navy-900 border-2 border-brass/50 shadow-elevated flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs text-brass font-semibold block uppercase">Call Practice Directly</span>
              <a
                href={`tel:${practiceConfig.phone.replace(/\s+/g, '')}`}
                className="font-serif text-3xl font-bold text-ivory hover:text-brass transition-colors font-mono"
              >
                {practiceConfig.phone}
              </a>
              <p className="text-[11px] text-sage">Out-of-Hours Emergency Line: {practiceConfig.emergencyPhone}</p>
            </div>

            <a
              href={`tel:${practiceConfig.phone.replace(/\s+/g, '')}`}
              className="bg-brass hover:bg-brass-dark text-navy-900 font-bold px-8 py-3.5 rounded-xl text-base transition-colors shadow-medium flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now for Triage</span>
            </a>
          </div>
        </div>
      </section>

      {/* Prominent Medical Safety Notice */}
      <section className="bg-red-950/80 border-y border-red-800 py-6 text-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-red-300 shrink-0 mt-1" />
            <div className="space-y-1 text-xs sm:text-sm">
              <h3 className="font-bold text-red-200 uppercase tracking-wide">
                Critical Medical Emergency Warning (Call 999 / Attend A&E)
              </h3>
              <p className="text-red-200/90 leading-relaxed">
                If you are experiencing <strong>severe facial swelling affecting your breathing or swallowing</strong>, heavy <strong>uncontrolled bleeding</strong>, or major facial trauma following an accident, please call <strong>999</strong> or attend your nearest hospital Accident & Emergency (A&E) department immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Emergency Reasons */}
      <section className="py-20 bg-ivory text-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-teal uppercase tracking-widest block">
              Common Dental Emergencies
            </span>
            <h2 className="font-serif text-3xl font-bold text-navy-900">
              Symptoms We Stabilize & Treat
            </h2>
            <p className="text-xs text-charcoal-muted">
              We provide immediate diagnostic evaluation and pain management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonReasons.map((reason, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-stone-dark/30 shadow-soft space-y-2">
                <h3 className="font-serif font-bold text-lg text-navy-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal" />
                  <span>{reason.title}</span>
                </h3>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Out of Hours Instructions */}
          <div className="p-8 rounded-3xl bg-navy-900 text-ivory border border-navy-800 space-y-4">
            <h3 className="font-serif font-bold text-xl text-brass flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Out-of-Hours Care Instructions</span>
            </h3>
            <p className="text-xs text-sage leading-relaxed">
              {practiceConfig.outOfHoursInstructions}
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs">
              <span className="font-bold text-ivory">NHS 111 Triage:</span>
              <span className="text-sage">Call 111 for 24/7 NHS dental advice if outside operating hours.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
