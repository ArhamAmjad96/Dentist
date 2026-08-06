import React from 'react';
import { Hero } from '@/components/home/Hero';
import { CredibilityStrip } from '@/components/home/CredibilityStrip';
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

      {/* 1. Hero (Pearl White #F8FAFA) */}
      <Hero />

      {/* Compact Credibility Strip (White #FFFFFF) */}
      <CredibilityStrip />

      {/* 2. Treatment Finder & Core Treatments (Soft Ice Blue #E7F1F3) */}
      <TreatmentFinder />

      {/* 3. Smile Transformations (White #FFFFFF) */}
      <SmileGallery />

      {/* 4. Dentist & Clinic Story (Midnight Navy #122A38 with White Text) */}
      <MeetDentist />

      {/* 5. Your Treatment Journey (Pearl White #F8FAFA) */}
      <PatientJourney />

      {/* 6. Patient Stories & Reviews (Soft Ice Blue #E7F1F3) */}
      <Testimonials />

      {/* 7. Fees, Finance & FAQs (White #FFFFFF) */}
      <FeesFinanceFAQ />

      {/* 8. Contact & Location (Midnight Navy #122A38) */}
      <LocationContact />
    </main>
  );
}
