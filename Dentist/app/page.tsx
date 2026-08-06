import React from 'react';
import { Hero } from '@/components/home/Hero';
import { TrustStrip } from '@/components/home/TrustStrip';
import { WelcomePhilosophy } from '@/components/home/WelcomePhilosophy';
import { FeaturedTreatments } from '@/components/home/FeaturedTreatments';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { NervousPatientBanner } from '@/components/home/NervousPatientBanner';
import { BeforeAfterGallery } from '@/components/home/BeforeAfterGallery';
import { TechSection } from '@/components/home/TechSection';
import { ReviewsSection } from '@/components/home/ReviewsSection';
import { AppointmentForm } from '@/components/forms/AppointmentForm';
import { practiceConfig } from '@/data/practice';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* Hero Banner Section */}
      <Hero />

      {/* Immediate Reassurance Trust Strip */}
      <TrustStrip />

      {/* Welcome & Philosophy Editorial Section */}
      <WelcomePhilosophy />

      {/* Featured Treatments Grid */}
      <FeaturedTreatments />

      {/* Why Choose the Practice */}
      <WhyChooseUs />

      {/* Dedicated Nervous Patient Support */}
      <NervousPatientBanner />

      {/* Consent-Checked Before & After Gallery */}
      <BeforeAfterGallery />

      {/* Verified Technology Section */}
      <TechSection />

      {/* Patient Reviews & Google Rating */}
      <ReviewsSection />

      {/* Bottom Conversion Section: Appointment Request */}
      <section className="py-20 bg-navy-950 border-t border-navy-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Contact & Address Reassurance */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <span className="text-xs font-semibold text-brass uppercase tracking-widest block">
                Get In Touch
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ivory">
                Start your journey with {practiceConfig.shortName}
              </h2>
              <p className="text-sage text-sm leading-relaxed">
                Whether you have a specific question about treatment options, wish to register as a new patient, or need urgent dental care, our team is here to assist.
              </p>

              <div className="space-y-4 pt-4 border-t border-navy-800 text-xs text-sage">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-navy-800 text-brass flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-ivory block">Practice Address</span>
                    <span>{practiceConfig.address}, {practiceConfig.city}, {practiceConfig.postcode}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-navy-800 text-brass flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-ivory block">Telephone</span>
                    <a href={`tel:${practiceConfig.phone.replace(/\s+/g, '')}`} className="hover:text-brass transition-colors text-ivory font-mono">
                      {practiceConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-navy-800 text-brass flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-ivory block">Email</span>
                    <a href={`mailto:${practiceConfig.email}`} className="hover:text-brass transition-colors text-ivory">
                      {practiceConfig.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Appointment Request Form */}
            <div className="lg:col-span-7">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
