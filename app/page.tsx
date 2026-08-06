import React from 'react';
import { Hero } from '@/components/home/Hero';
import { TrustSlider } from '@/components/home/TrustSlider';
import { TreatmentFinder } from '@/components/home/TreatmentFinder';
import { SmileGallery } from '@/components/home/SmileGallery';
import { MeetDentist } from '@/components/home/MeetDentist';
import { PatientJourney } from '@/components/home/PatientJourney';
import { Testimonials } from '@/components/home/Testimonials';
import { FeesFinanceFAQ } from '@/components/home/FeesFinanceFAQ';
import { LocationContact } from '@/components/home/LocationContact';
import { generateDentistSchema } from '@/lib/schema';
import { SchemaOrg } from '@/components/ui/SchemaOrg';

export default function HomePage() {
  const schema = generateDentistSchema();

  return (
    <main className="bg-[#F8FAFA] min-h-screen text-[#122A38] overflow-hidden">
      <SchemaOrg schema={schema} />

      {/* 1. Hero */}
      <Hero />

      {/* Premium Infinite-Scrolling Trust Slider (Replacing static strip) */}
      <TrustSlider />

      {/* 2. Treatment Finder & Core Treatments */}
      <TreatmentFinder />

      {/* 3. Smile Transformations */}
      <SmileGallery />

      {/* 4. Dentist & Clinic Story */}
      <MeetDentist />

      {/* 5. Your Treatment Journey */}
      <PatientJourney />

      {/* 6. Patient Stories & Reviews */}
      <Testimonials />

      {/* 7. Fees, Finance & FAQs */}
      <FeesFinanceFAQ />

      {/* 8. Contact & Location */}
      <LocationContact />
    </main>
  );
}
