import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { localAreasData } from '@/data/areas';
import { practiceConfig } from '@/data/practice';
import { AppointmentForm } from '@/components/forms/AppointmentForm';
import { MapPin, ShieldCheck, CheckCircle2, Phone, Calendar } from 'lucide-react';
import type { Metadata } from 'next';

interface AreaPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: AreaPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const area = localAreasData.find((a) => a.slug === resolvedParams.slug);

  if (!area) return { title: 'Area Not Found' };

  return {
    title: `Dentist near ${area.name} | ${practiceConfig.name}`,
    description: `Looking for a dentist near ${area.name}? ${practiceConfig.name} is ${area.distance} away, offering private dental examinations, clear aligners, and implants.`,
  };
}

export async function generateStaticParams() {
  return localAreasData.map((a) => ({ slug: a.slug }));
}

export default async function LocalAreaPage({ params }: AreaPageProps) {
  const resolvedParams = await params;
  const area = localAreasData.find((a) => a.slug === resolvedParams.slug);

  if (!area) notFound();

  return (
    <div className="bg-navy-900 text-ivory min-h-screen">
      <section className="py-16 bg-navy-950 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-semibold text-brass uppercase tracking-widest block">
            Local Dental Care
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ivory">
            Dentist near {area.name}
          </h1>
          <p className="text-sage text-base max-w-2xl leading-relaxed">
            {practiceConfig.name} is conveniently located just {area.distance} from {area.name}. We provide comprehensive general, restorative, and cosmetic dental treatments.
          </p>
        </div>
      </section>

      <section className="py-20 bg-ivory text-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-stone-dark/30 rounded-2xl p-6 shadow-soft space-y-4">
                <h2 className="font-serif font-bold text-xl text-navy-900">
                  Getting to Us from {area.name}
                </h2>
                <div className="space-y-2 text-xs text-charcoal-muted">
                  <p><strong>Distance:</strong> {area.distance}</p>
                  <p><strong>Transport:</strong> {area.transportInfo}</p>
                  <p><strong>Address:</strong> {practiceConfig.address}, {practiceConfig.postcode}</p>
                </div>
              </div>

              <div className="bg-white border border-stone-dark/30 rounded-2xl p-6 shadow-soft space-y-3">
                <h3 className="font-serif font-bold text-lg text-navy-900">
                  Services Available to {area.name} Residents
                </h3>
                <ul className="text-xs text-charcoal-muted space-y-1.5">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal" />
                    <span>New Patient Comprehensive Examinations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal" />
                    <span>Same-day Emergency Dental Triage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal" />
                    <span>Invisalign & Clear Aligner Consultations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal" />
                    <span>Single & Multiple Dental Implants</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
