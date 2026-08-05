import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { treatmentsData } from '@/data/treatments';
import { practiceConfig } from '@/data/practice';
import { formatPrice } from '@/lib/utils';
import { Accordion } from '@/components/ui/Accordion';
import { AppointmentForm } from '@/components/forms/AppointmentForm';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';
import { SchemaOrg } from '@/components/ui/SchemaOrg';
import {
  CheckCircle2,
  AlertTriangle,
  Clock,
  ShieldCheck,
  Calendar,
  ArrowRight,
  Sparkles,
  Info,
} from 'lucide-react';
import type { Metadata } from 'next';

interface TreatmentPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: TreatmentPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const treatment = treatmentsData.find((t) => t.slug === resolvedParams.slug);

  if (!treatment) {
    return {
      title: 'Treatment Not Found',
    };
  }

  return {
    title: `${treatment.name} in ${practiceConfig.city} | ${practiceConfig.name}`,
    description: treatment.shortDescription,
  };
}

export async function generateStaticParams() {
  return treatmentsData.map((treatment) => ({
    slug: treatment.slug,
  }));
}

export default async function TreatmentDetailPage({ params }: TreatmentPageProps) {
  const resolvedParams = await params;
  const treatment = treatmentsData.find((t) => t.slug === resolvedParams.slug);

  if (!treatment) {
    notFound();
  }

  const related = treatmentsData.filter((t) => treatment.relatedSlugs.includes(t.slug));
  const faqSchema = generateFAQSchema(treatment.faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Treatments', url: '/treatments' },
    { name: treatment.name, url: `/treatments/${treatment.slug}` },
  ]);

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      <SchemaOrg schema={[faqSchema, breadcrumbSchema]} />

      {/* Hero Banner */}
      <section className="py-16 bg-gradient-to-b from-cyan-50/60 via-white to-white border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 font-medium">
                <Link href="/treatments" className="text-xs text-cyan-700 font-bold hover:underline">
                  Treatments
                </Link>
                <span className="text-xs text-slate-400">/</span>
                <span className="text-xs text-slate-600 capitalize font-semibold">{treatment.category}</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-950">
                {treatment.name}
              </h1>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                {treatment.fullDescription}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl text-xs">
                  <span className="text-slate-500 block font-medium">Guide Price:</span>
                  <span className="font-bold text-cyan-700 text-sm">From {formatPrice(treatment.priceFrom)}</span>
                </div>

                <a
                  href="#book-cta"
                  className="bg-cyan-950 hover:bg-cyan-900 text-white font-bold px-6 py-3 rounded-xl text-xs transition-colors inline-flex items-center gap-2 shadow-sm"
                >
                  <Calendar className="w-4 h-4 text-cyan-300" />
                  <span>Request Consultation</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative h-[320px] rounded-3xl overflow-hidden border border-slate-200 shadow-md">
                <Image
                  src={treatment.image}
                  alt={treatment.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Treatment Details */}
      <section className="py-20 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-12">
              {/* Who It May Be Suitable For */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-slate-950">
                  Who This Treatment May Be Suitable For
                </h2>
                <div className="grid grid-cols-1 gap-3">
                  {treatment.suitableFor.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-800 font-normal">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-slate-500 italic font-medium">
                  *Suitability is assessed during a comprehensive clinical consultation. Individual patient suitability depends on dental and medical history.
                </p>
              </div>

              {/* Possible Benefits */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-slate-950">
                  Key Potential Benefits
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {treatment.benefits.map((benefit, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
                      <span className="font-serif font-bold text-slate-950 text-sm block">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consultation & Typical Treatment Stages */}
              <div className="space-y-6">
                <h2 className="font-serif text-2xl font-bold text-slate-950">
                  Typical Treatment Stages
                </h2>
                <div className="space-y-4">
                  {treatment.typicalStages.map((stage) => (
                    <div key={stage.step} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                      <div className="w-9 h-9 rounded-full bg-cyan-600 text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-sm">
                        {stage.step}
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-serif font-bold text-base text-slate-950">
                          {stage.title}
                        </h3>
                        <p className="text-xs text-slate-700 leading-relaxed font-normal">
                          {stage.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recovery & Aftercare */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="font-serif font-bold text-lg text-slate-950 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-cyan-600" />
                  <span>Recovery & Aftercare Information</span>
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed font-normal">
                  {treatment.recoveryAftercare}
                </p>
              </div>

              {/* Risks, Limitations & Alternatives */}
              <div className="p-6 rounded-2xl bg-cyan-950 text-white space-y-3 border border-white/10 shadow-xl">
                <h3 className="font-serif font-bold text-lg text-cyan-300 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-cyan-300" />
                  <span>Risks, Limitations & Alternatives</span>
                </h3>
                <p className="text-xs text-cyan-100 leading-relaxed font-normal">
                  {treatment.risksLimitations}
                </p>
                <p className="text-[11px] text-cyan-200 leading-normal pt-2 border-t border-white/10 font-medium">
                  All dental procedures carry potential clinical risks. Your dentist will explain relevant alternative options, expected prognosis, and potential complications during your clinical consultation prior to securing your informed consent.
                </p>
              </div>

              {/* FAQs Accordion */}
              {treatment.faqs.length > 0 && (
                <div className="space-y-4">
                  <h2 className="font-serif text-2xl font-bold text-slate-950">
                    Frequently Asked Questions
                  </h2>
                  <Accordion
                    items={treatment.faqs.map((faq, idx) => ({
                      id: `faq-${idx}`,
                      title: faq.question,
                      content: <p className="text-xs text-slate-700 leading-relaxed font-normal">{faq.answer}</p>,
                    }))}
                  />
                </div>
              )}
            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-cyan-950 text-white p-6 rounded-2xl border border-white/10 shadow-xl space-y-4 sticky top-28">
                <h3 className="font-serif font-bold text-xl text-white">
                  Request a Consultation
                </h3>
                <p className="text-xs text-cyan-100 font-normal">
                  Speak with our clinical team about {treatment.name.toLowerCase()} in {practiceConfig.city}.
                </p>
                <div className="p-3.5 bg-slate-900 rounded-xl text-xs space-y-1">
                  <span className="text-cyan-200 block font-medium">Treatment Fee Guide</span>
                  <span className="font-bold text-cyan-300 text-base">From {formatPrice(treatment.priceFrom)}</span>
                </div>
                <a
                  href="#book-cta"
                  className="w-full bg-cyan-400 hover:bg-cyan-300 text-cyan-950 font-bold py-3.5 rounded-xl text-center block text-xs transition-colors shadow-md"
                >
                  Book Assessment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contextual CTA Section */}
      <section id="book-cta" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AppointmentForm />
        </div>
      </section>
    </div>
  );
}
