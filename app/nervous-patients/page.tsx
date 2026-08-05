import React from 'react';
import Link from 'next/link';
import { practiceConfig } from '@/data/practice';
import { AppointmentForm } from '@/components/forms/AppointmentForm';
import { Heart, ShieldCheck, CheckCircle2, MessageCircle, Clock, Smile } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Nervous Patient Support | ${practiceConfig.name}`,
  description: `Gentle, compassionate dental care for anxious patients in ${practiceConfig.city}. We take appointments at your pace with full control.`,
};

export default function NervousPatientsPage() {
  return (
    <div className="bg-navy-900 text-ivory min-h-screen">
      <section className="py-16 bg-navy-950 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-semibold text-brass uppercase tracking-widest block">
            Compassionate Dental Care
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ivory">
            Support for Nervous & Anxious Patients
          </h1>
          <p className="text-sage text-base max-w-2xl leading-relaxed">
            Dental anxiety affects millions of people in the UK. At {practiceConfig.shortName}, we create a calm, supportive environment where you are always in complete control.
          </p>
        </div>
      </section>

      <section className="py-20 bg-ivory text-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-white border border-stone-dark/30 shadow-soft space-y-3">
              <Heart className="w-8 h-8 text-teal" />
              <h3 className="font-serif font-bold text-xl text-navy-900">
                You Are Always in Control
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Before any procedure begins, we agree on a simple hand signal. If you need a pause, drink of water, or extra explanation at any point, simply raise your hand and we stop immediately.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-dark/30 shadow-soft space-y-3">
              <Clock className="w-8 h-8 text-brass" />
              <h3 className="font-serif font-bold text-xl text-navy-900">
                Unhurried Appointments
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                We schedule longer appointment slots for nervous patients so you never feel rushed. We take time to chat, answer questions, and build trust naturally.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-dark/30 shadow-soft space-y-3">
              <MessageCircle className="w-8 h-8 text-teal" />
              <h3 className="font-serif font-bold text-xl text-navy-900">
                Clear Explanations
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Fear of the unknown is a major source of anxiety. We explain every step in plain language beforehand, showing you instruments and intraoral photos so there are no surprises.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-dark/30 shadow-soft space-y-3">
              <ShieldCheck className="w-8 h-8 text-brass" />
              <h3 className="font-serif font-bold text-xl text-navy-900">
                Topical Anaesthetic Gels
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                We apply pleasant-tasting numbing gels to the gums before local anaesthetic injections so you feel maximum comfort throughout treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-950 border-t border-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AppointmentForm />
        </div>
      </section>
    </div>
  );
}
