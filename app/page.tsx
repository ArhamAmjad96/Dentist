'use me';
'use client';

import React from 'react';
import { Hero } from '@/components/home/Hero';
import { TrustStrip } from '@/components/home/TrustStrip';
import { TreatmentFinder } from '@/components/home/TreatmentFinder';
import { FeaturedTreatments } from '@/components/home/FeaturedTreatments';
import { SmileGallery } from '@/components/home/SmileGallery';
import { MeetDentist } from '@/components/home/MeetDentist';
import { PatientJourney } from '@/components/home/PatientJourney';
import { ClinicExperience } from '@/components/home/ClinicExperience';
import { Testimonials } from '@/components/home/Testimonials';
import { FeesFinance } from '@/components/home/FeesFinance';
import { FAQSection } from '@/components/home/FAQSection';
import { LocationContact } from '@/components/home/LocationContact';
import { FinalCTA } from '@/components/home/FinalCTA';
import { generateDentistSchema } from '@/lib/schema';
import { SchemaOrg } from '@/components/ui/SchemaOrg';

export default function HomePage() {
  const schema = generateDentistSchema();

  return (
    <main className="bg-[#F5F2EB] min-h-screen text-[#1B1D1D] overflow-hidden">
      <SchemaOrg schema={schema} />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust Strip Immediately Below Hero */}
      <TrustStrip />

      {/* 3. Interactive Goal Selector - Treatment Finder */}
      <TreatmentFinder />

      {/* 4. Asymmetrical Bento Featured Treatments */}
      <FeaturedTreatments />

      {/* 5. Smile Transformations Before-and-After Sliders */}
      <SmileGallery />

      {/* 6. Editorial Meet the Lead Dentist */}
      <MeetDentist />

      {/* 7. 4-Step Patient Journey */}
      <PatientJourney />

      {/* 8. Mixed-Size Editorial Clinic Experience Gallery */}
      <ClinicExperience />

      {/* 9. Patient Stories & Testimonials */}
      <Testimonials />

      {/* 10. Transparent Fees & 0% Finance */}
      <FeesFinance />

      {/* 11. Accessible FAQs Accordion */}
      <FAQSection />

      {/* 12. Location, Directions & Contact */}
      <LocationContact />

      {/* 13. Full-Width Deep Teal Final CTA */}
      <FinalCTA />
    </main>
  );
}
