import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { practiceConfig } from '@/data/practice';
import { ShieldCheck, Heart, Award, MapPin, CheckCircle2, Calendar, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `About Us | ${practiceConfig.name}`,
  description: `Learn about the history, clinical philosophy, facilities, and team values at ${practiceConfig.name} in ${practiceConfig.city}.`,
};

export default function AboutPage() {
  return (
    <div className="bg-[#F5F2EB] text-[#1B1D1D] min-h-screen">
      {/* Page Hero */}
      <section className="py-20 bg-white border-b border-[#CCD6CF]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-semibold text-[#143C3A] uppercase tracking-widest block">
            Practice Heritage & Philosophy
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#1B1D1D]">
            About {practiceConfig.name}
          </h1>
          <p className="text-[#1B1D1D]/75 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
            Founded with a commitment to patient-centred dentistry, our Mayfair clinic combines modern clinical technology with warm, personal care.
          </p>
        </div>
      </section>

      {/* Main Story & Values */}
      <section className="py-20 bg-[#F5F2EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold text-[#143C3A] uppercase tracking-widest block">
                Our Story
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#143C3A]">
                Eighteen years of dedicated oral healthcare in {practiceConfig.city}.
              </h2>
              <p className="text-[#1B1D1D]/80 leading-relaxed text-sm font-normal">
                Since establishing {practiceConfig.name} {practiceConfig.yearsEstablished} years ago, our focus has never wavered: providing high-quality dental care in an unhurried, reassuring environment. We believe that visits to the dentist should be clear, collaborative, and entirely transparent.
              </p>
              <p className="text-[#1B1D1D]/80 leading-relaxed text-sm font-normal">
                Our principal dentist, {practiceConfig.principalDentist.name} ({practiceConfig.principalDentist.qualifications}), leads a team of passionate clinicians and support staff dedicated to maintaining the highest standards of infection control, clinical precision, and patient safety.
              </p>

              <div className="p-4 rounded-2xl bg-white border border-[#CCD6CF] shadow-clinic-soft flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#143C3A] shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-[#143C3A] block">CQC Registered & Inspected</span>
                  <span className="text-[#1B1D1D]/70">{practiceConfig.cqcInfo.status}. GDC Registration: {practiceConfig.principalDentist.gdcNumber}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-clinic-elevated border border-[#CCD6CF] h-[420px]">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#CCD6CF]/50">
            <div className="p-6 rounded-3xl bg-white border border-[#CCD6CF] space-y-3 shadow-clinic-card">
              <Heart className="w-8 h-8 text-[#143C3A]" />
              <h3 className="font-serif font-bold text-xl text-[#143C3A]">
                Patient Comfort
              </h3>
              <p className="text-xs text-[#1B1D1D]/80 leading-relaxed font-normal">
                We take the anxiety out of dental appointments with gentle techniques, clear communication, and unhurried appointments.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#CCD6CF] space-y-3 shadow-clinic-card">
              <Award className="w-8 h-8 text-[#B8926A]" />
              <h3 className="font-serif font-bold text-xl text-[#143C3A]">
                Clinical Excellence
              </h3>
              <p className="text-xs text-[#1B1D1D]/80 leading-relaxed font-normal">
                Our clinical team maintains continuous professional development to deliver evidence-backed restorative and preventive care.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#CCD6CF] space-y-3 shadow-clinic-card">
              <ShieldCheck className="w-8 h-8 text-[#143C3A]" />
              <h3 className="font-serif font-bold text-xl text-[#143C3A]">
                Full Transparency
              </h3>
              <p className="text-xs text-[#1B1D1D]/80 leading-relaxed font-normal">
                Written treatment estimates and clear explanations of risks, benefits, and alternatives before any clinical procedure begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities & Practice Gallery */}
      <section className="py-20 bg-white border-t border-[#CCD6CF]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-[#143C3A] uppercase tracking-widest block">
              Clinic Environment
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B1D1D]">
              Our Practice & Facilities
            </h2>
            <p className="text-[#1B1D1D]/70 text-xs sm:text-sm font-normal">
              Designed for patient relaxation and equipped with modern 3D diagnostic technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="relative h-64 rounded-2xl overflow-hidden border border-[#CCD6CF] shadow-clinic-card">
                <Image
                  src={practiceConfig.images.treatmentRoom}
                  alt="Modern treatment room"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-serif font-bold text-base text-[#143C3A] block">Modern Treatment Rooms</span>
              <p className="text-xs text-[#1B1D1D]/70 font-normal">Equipped with low-dose digital X-rays and intraoral scanners.</p>
            </div>

            <div className="space-y-2">
              <div className="relative h-64 rounded-2xl overflow-hidden border border-[#CCD6CF] shadow-clinic-card">
                <Image
                  src={practiceConfig.images.reception}
                  alt="Relaxing reception area"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-serif font-bold text-base text-[#143C3A] block">Welcoming Reception</span>
              <p className="text-xs text-[#1B1D1D]/70 font-normal">Comfortable seating, calm acoustics, and attentive reception staff.</p>
            </div>

            <div className="space-y-2">
              <div className="relative h-64 rounded-2xl overflow-hidden border border-[#CCD6CF] shadow-clinic-card">
                <Image
                  src={practiceConfig.images.exterior}
                  alt="Clinic exterior"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-serif font-bold text-base text-[#143C3A] block">Accessible Entrance</span>
              <p className="text-xs text-[#1B1D1D]/70 font-normal">Step-free ground floor access with dedicated patient parking.</p>
            </div>
          </div>

          <div className="text-center pt-6">
            <Link href="/contact#appointment-form" className="btn-primary text-xs py-3.5 px-8">
              <Calendar className="w-4 h-4 text-[#B8926A]" />
              <span>Book a Consultation</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
