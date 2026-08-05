import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { practiceConfig } from '@/data/practice';
import { ShieldCheck, Heart, Award, MapPin, CheckCircle2, Calendar } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `About Us | ${practiceConfig.name}`,
  description: `Learn about the history, clinical philosophy, facilities, and team values at ${practiceConfig.name} in ${practiceConfig.city}.`,
};

export default function AboutPage() {
  return (
    <div className="bg-navy-900 text-ivory min-h-screen">
      {/* Page Hero */}
      <section className="py-16 bg-navy-950 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-semibold text-brass uppercase tracking-widest block">
            Practice Heritage & Philosophy
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ivory">
            About {practiceConfig.name}
          </h1>
          <p className="text-sage text-base max-w-2xl leading-relaxed">
            Founded with a commitment to patient-centred dentistry, our clinic combines modern clinical technology with warm, personal care.
          </p>
        </div>
      </section>

      {/* Main Story & Values */}
      <section className="py-20 bg-ivory text-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold text-teal uppercase tracking-widest block">
                Our Story
              </span>
              <h2 className="font-serif text-3xl font-bold text-navy-900">
                Eighteen years of dedicated oral healthcare in {practiceConfig.city}.
              </h2>
              <p className="text-charcoal-muted leading-relaxed text-sm">
                Since establishing {practiceConfig.name} {practiceConfig.yearsEstablished} years ago, our focus has never wavered: providing high-quality dental care in an unhurried, reassuring environment. We believe that visits to the dentist should be clear, collaborative, and entirely transparent.
              </p>
              <p className="text-charcoal-muted leading-relaxed text-sm">
                Our principal dentist, {practiceConfig.principalDentist.name} ({practiceConfig.principalDentist.qualifications}), leads a team of passionate clinicians and support staff dedicated to maintaining the highest standards of infection control, clinical precision, and patient safety.
              </p>

              <div className="p-4 rounded-2xl bg-stone/50 border border-stone-dark/30 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-teal shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-navy-900 block">CQC Registered & Inspected</span>
                  <span className="text-charcoal-muted">{practiceConfig.cqcInfo.status}. GDC Registration: {practiceConfig.principalDentist.gdcNumber}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-medium border border-stone-dark/30 h-[400px]">
                <Image
                  src={practiceConfig.images.reception}
                  alt={`${practiceConfig.name} reception area`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Mission & Clinical Philosophy */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-stone-dark/20">
            <div className="p-6 rounded-2xl bg-white border border-stone-dark/30 space-y-3 shadow-soft">
              <Heart className="w-8 h-8 text-teal" />
              <h3 className="font-serif font-bold text-lg text-navy-900">
                Patient Comfort
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                We take the anxiety out of dental appointments with gentle techniques, clear communication, and unhurried appointments.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-dark/30 space-y-3 shadow-soft">
              <Award className="w-8 h-8 text-brass" />
              <h3 className="font-serif font-bold text-lg text-navy-900">
                Clinical Excellence
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Our clinical team maintains continuous professional development to deliver evidence-backed restorative and preventive care.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-dark/30 space-y-3 shadow-soft">
              <ShieldCheck className="w-8 h-8 text-teal" />
              <h3 className="font-serif font-bold text-lg text-navy-900">
                Full Transparency
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Written treatment estimates and clear explanations of risks, benefits, and alternatives before any clinical procedure begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities & Practice Gallery */}
      <section className="py-20 bg-navy-900 text-ivory border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-brass uppercase tracking-widest block">
              Clinic Environment
            </span>
            <h2 className="font-serif text-3xl font-bold text-ivory">
              Our Practice & Facilities
            </h2>
            <p className="text-sage text-xs">
              Designed for patient relaxation and equipped with modern diagnostic technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="relative h-64 rounded-2xl overflow-hidden border border-navy-800">
                <Image
                  src={practiceConfig.images.treatmentRoom}
                  alt="Modern treatment room"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-serif font-bold text-sm text-ivory block">Modern Treatment Rooms</span>
              <p className="text-xs text-sage">Equipped with low-dose digital X-rays and intraoral scanners.</p>
            </div>

            <div className="space-y-2">
              <div className="relative h-64 rounded-2xl overflow-hidden border border-navy-800">
                <Image
                  src={practiceConfig.images.reception}
                  alt="Relaxing reception area"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-serif font-bold text-sm text-ivory block">Welcoming Reception</span>
              <p className="text-xs text-sage">Comfortable seating, calm acoustics, and attentive reception staff.</p>
            </div>

            <div className="space-y-2">
              <div className="relative h-64 rounded-2xl overflow-hidden border border-navy-800">
                <Image
                  src={practiceConfig.images.exterior}
                  alt="Clinic exterior"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-serif font-bold text-sm text-ivory block">Accessible Entrance</span>
              <p className="text-xs text-sage">Step-free ground floor access with dedicated patient parking.</p>
            </div>
          </div>

          <div className="text-center pt-6">
            <Link
              href="/contact"
              className="bg-brass hover:bg-brass-dark text-navy-900 font-bold px-8 py-3.5 rounded-xl text-sm transition-colors inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book an Appointment</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
