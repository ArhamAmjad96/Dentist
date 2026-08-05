import React from 'react';
import Link from 'next/link';
import { practiceConfig } from '@/data/practice';
import { AppointmentForm } from '@/components/forms/AppointmentForm';
import { ShieldCheck, UserPlus, CheckCircle2, FileText, Calendar, Clock, HeartHandshake } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `New Patients | ${practiceConfig.name}`,
  description: `Welcome to ${practiceConfig.name}. Information on registering as a new patient, what to expect at your first visit, and booking your initial consultation in ${practiceConfig.city}.`,
};

export default function NewPatientsPage() {
  const steps = [
    { step: 1, title: 'Book Your Initial Consultation', detail: 'Complete our online enquiry form or call reception. We will send you a secure digital medical history form to complete beforehand.' },
    { step: 2, title: 'Welcome & Medical History Review', detail: 'Arrive 10 minutes early to enjoy a warm drink in our reception. We will review your medical history and discuss any anxieties or goals.' },
    { step: 3, title: 'Comprehensive Examination', detail: 'Your dentist performs a thorough check of your teeth, gums, soft tissues, jaw joint, and bite relationship.' },
    { step: 4, title: 'Low-Dose Digital X-Rays', detail: 'If clinically required, digital radiographs will be taken to check between teeth and underneath existing fillings.' },
    { step: 5, title: 'Discussion & Treatment Plan', detail: 'We explain our findings using intraoral photos and provide a written estimate detailing any recommended care with transparent fees.' },
  ];

  return (
    <div className="bg-navy-900 text-ivory min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-navy-950 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2">
            <span className="bg-brass/20 text-brass text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              {practiceConfig.acceptingNewPatients ? 'Now Accepting New Patients' : 'Registration Open'}
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ivory">
            Welcome to {practiceConfig.name}
          </h1>
          <p className="text-sage text-base max-w-2xl leading-relaxed">
            We look forward to welcoming you to our clinic. Here is everything you need to know about joining our practice and what to expect during your first visit.
          </p>
        </div>
      </section>

      {/* First Visit Timeline */}
      <section className="py-20 bg-ivory text-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-teal uppercase tracking-widest block">
              Step-By-Step Journey
            </span>
            <h2 className="font-serif text-3xl font-bold text-navy-900">
              Your First Visit Timeline
            </h2>
            <p className="text-xs text-charcoal-muted">
              We structure your first appointment to be thorough, relaxed, and unhurried.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="p-5 rounded-2xl bg-white border border-stone-dark/30 shadow-soft space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-navy-900 text-brass font-bold text-base flex items-center justify-center">
                    {s.step}
                  </div>
                  <h3 className="font-serif font-bold text-base text-navy-900">
                    {s.title}
                  </h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {s.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Practical Checklist Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-stone-dark/20">
            <div className="p-6 rounded-2xl bg-white border border-stone-dark/30 space-y-3 shadow-soft">
              <FileText className="w-8 h-8 text-teal" />
              <h3 className="font-serif font-bold text-lg text-navy-900">
                What to Bring
              </h3>
              <ul className="text-xs text-charcoal-muted space-y-1.5 list-disc pl-4">
                <li>A list of current prescription medications</li>
                <li>Details of your GP practice name & address</li>
                <li>Photo ID (for initial registration)</li>
                <li>Dental insurance or plan details if applicable</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-dark/30 space-y-3 shadow-soft">
              <Clock className="w-8 h-8 text-brass" />
              <h3 className="font-serif font-bold text-lg text-navy-900">
                Cancellation Policy
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                We kindly request at least 24 to 48 hours notice if you need to reschedule your appointment so that another patient in need may use the time slot.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-dark/30 space-y-3 shadow-soft">
              <HeartHandshake className="w-8 h-8 text-teal" />
              <h3 className="font-serif font-bold text-lg text-navy-900">
                Children's Appointments
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                We welcome children of all ages! We make early visits fun and stress-free to build positive lifelong habits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Request Form */}
      <section className="py-20 bg-navy-950 border-t border-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AppointmentForm />
        </div>
      </section>
    </div>
  );
}
