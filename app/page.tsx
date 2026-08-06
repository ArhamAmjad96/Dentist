import React from 'react';
import { Hero } from '@/components/home/Hero';
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
    <main className="bg-[#F5F2EB] min-h-screen text-[#1B1D1D] overflow-hidden">
      <SchemaOrg schema={schema} />

      {/* Section 1 — Hero with enlarged 3-item trust row */}
      <Hero />

      {/* Section 2 — Merged Treatment Finder and 6 Core Treatments */}
      <TreatmentFinder />

      {/* Section 3 — Smile Transformations (Max 3 cases + button) */}
      <SmileGallery />

      {/* Section 4 — Merged Lead Dentist & Clinic Experience */}
      <MeetDentist />

      {/* Section 5 — Compact Patient Journey */}
      <PatientJourney />

      {/* Section 6 — Patient Reviews (1 Featured + 3 Supporting) */}
      <Testimonials />

      {/* Section 7 — Merged Fees, Finance & FAQ */}
      <FeesFinanceFAQ />

      {/* Section 8 — Compact Contact, Directions & Map */}
      <LocationContact />
    </main>
  );
}
