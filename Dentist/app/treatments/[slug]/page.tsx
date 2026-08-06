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
    <div className="bg-navy-900 text-ivory min-h-screen">
      <SchemaOrg schema={[faqSchema, breadcrumbSchema]} />

      {/* Hero Banner */}
      <section className="py-16 bg-navy-950 border-b border-navy-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <Link href="/treatments" className="text-xs text-brass hover:underline">
                  Treatments
                </Link>
                <span className="text-xs text-sage">/</span>
                <span className="text-xs text-sage capitalize">{treatment.category}</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ivory">
                {treatment.name}
              </h1>

              <p className="text-sage text-base sm:text-lg leading-relaxed">
                {treatment.fullDescription}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="bg-navy-900 border border-navy-800 px-4 py-2 rounded-xl text-xs">
                  <span className="text-sage block">Guide Price:</span>
                  <span className="font-bold text-ivory text-sm">From {formatPrice(treatment.priceFrom)}</span>
                </div>

                <a
                  href="#book-cta"
                  className="bg-brass hover:bg-brass-dark text-navy-900 font-bold px-6 py-3 rounded-xl text-xs transition-colors inline-flex items-center gap-2 shadow-soft"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Consultation</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative h-[320px] rounded-3xl overflow-hidden border border-navy-800 shadow-elevated">
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
      <section className="py-20 bg-ivory text-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-12">
              {/* Who It May Be Suitable For */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-navy-900">
                  Who This Treatment May Be Suitable For
                </h2>
                <div className="grid grid-cols-1 gap-3">
                  {treatment.suitableFor.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-stone/50 border border-stone-dark/30 flex items-start gap-3 text-xs text-charcoal">
                      <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-charcoal-muted italic">
                  *Suitability is assessed during a comprehensive clinical consultation. Individual patient suitability depends on dental and medical history.
                </p>
              </div>

              {/* Possible Benefits */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-navy-900">
                  Key Potential Benefits
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {treatment.benefits.map((benefit, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white border border-stone-dark/30 shadow-soft space-y-1">
                      <span className="font-serif font-bold text-navy-900 text-sm block">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consultation & Typical Treatment Stages */}
              <div className="space-y-6">
                <h2 className="font-serif text-2xl font-bold text-navy-900">
                  Typical Treatment Stages
                </h2>
                <div className="space-y-4">
                  {treatment.typicalStages.map((stage) => (
                    <div key={stage.step} className="p-5 rounded-2xl bg-white border border-stone-dark/30 shadow-soft flex items-start gap-4">
                      <div className="w-9 h-9 rounded-full bg-navy-900 text-brass font-bold text-sm flex items-center justify-center shrink-0">
                        {stage.step}
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-serif font-bold text-base text-navy-900">
                          {stage.title}
                        </h3>
                        <p className="text-xs text-charcoal-muted leading-relaxed">
                          {stage.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recovery & Aftercare */}
              <div className="p-6 rounded-2xl bg-stone/60 border border-stone-dark/30 space-y-3">
                <h3 className="font-serif font-bold text-lg text-navy-900 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-teal" />
                  <span>Recovery & Aftercare Information</span>
                </h3>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  {treatment.recoveryAftercare}
                </p>
              </div>

              {/* Risks, Limitations & Alternatives (Balanced Clinical Disclosure) */}
              <div className="p-6 rounded-2xl bg-navy-900 text-ivory space-y-3 border border-navy-800">
                <h3 className="font-serif font-bold text-lg text-brass flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-brass" />
                  <span>Risks, Limitations & Alternatives</span>
                </h3>
                <p className="text-xs text-sage leading-relaxed">
                  {treatment.risksLimitations}
                </p>
                <p className="text-[11px] text-sage/80 leading-normal pt-2 border-t border-navy-800">
                  All dental procedures carry potential clinical risks. Your dentist will explain relevant alternative options, expected prognosis, and potential complications during your clinical consultation prior to securing your informed consent.
                </p>
              </div>

              {/* FAQs Accordion */}
              {treatment.faqs.length > 0 && (
                <div className="space-y-4">
                  <h2 className="font-serif text-2xl font-bold text-navy-900">
                    Frequently Asked Questions
                  </h2>
                  <Accordion
                    items={treatment.faqs.map((faq, idx) => ({
                      id: `faq-${idx}`,
                      title: faq.question,
                      content: <p className="text-xs leading-relaxed">{faq.answer}</p>,
                    }))}
                  />
                </div>
              )}
            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-navy-900 text-ivory p-6 rounded-2xl border border-navy-800 space-y-4 sticky top-28">
                <h3 className="font-serif font-bold text-xl text-ivory">
                  Request a Consultation
                </h3>
                <p className="text-xs text-sage">
                  Speak with our clinical team about {treatment.name.toLowerCase()} in {practiceConfig.city}.
                </p>
                <div className="p-3 bg-navy-950 rounded-xl text-xs space-y-1">
                  <span className="text-sage block">Treatment Fee Guide</span>
                  <span className="font-bold text-brass text-base">From {formatPrice(treatment.priceFrom)}</span>
                </div>
                <a
                  href="#book-cta"
                  className="w-full bg-brass hover:bg-brass-dark text-navy-900 font-bold py-3 rounded-xl text-center block text-xs transition-colors shadow-soft"
                >
                  Book Assessment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contextual CTA Section */}
      <section id="book-cta" className="py-20 bg-navy-950 border-t border-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AppointmentForm />
        </div>
      </section>
    </div>
  );
}
