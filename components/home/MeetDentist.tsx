'use me';
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { teamData } from '@/data/team';

export const MeetDentist: React.FC = () => {
  const leadDentist = teamData[0] || {
    name: 'Dr. Alistair Vance',
    role: 'Principal Cosmetic Dentist & Clinical Director',
    qualifications: 'BDS (Lond), MSc Implant Dentistry',
    gdcNumber: '198421',
    experienceYears: 18,
    photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    quote: 'Great dentistry should improve your confidence without changing what makes your smile yours.',
    bio: 'Dr. Vance leads St. James Clinic with over 18 years of clinical experience in advanced restorative, clear aligner orthodontics, and implant dentistry across London and the UK.',
  };

  const clinicPhotos = [
    {
      title: 'Serene Treatment Suite',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: '3D iTero Intraoral Scanner',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-white border-b border-[#CCD6CF]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold text-[#143C3A] uppercase tracking-widest block">
            Clinical Leadership & Environment
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1B1D1D] tracking-tight">
            Meet the Dentist & Clinic Experience
          </h2>
          <p className="text-sm sm:text-base text-[#1B1D1D]/75 font-normal">
            Personalised care guided by clinical expertise in a calm, modern Mayfair setting.
          </p>
        </div>

        {/* Unified Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Lead Dentist Profile */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              {/* Dentist Photo */}
              <div className="relative w-36 h-44 sm:w-44 sm:h-52 rounded-2xl overflow-hidden border border-[#CCD6CF] shadow-clinic-card shrink-0">
                <Image
                  src={leadDentist.photo}
                  alt={leadDentist.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Bio & Credentials */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F2EB] border border-[#CCD6CF] text-[11px] font-semibold text-[#143C3A]">
                  <Award className="w-3.5 h-3.5 text-[#B8926A]" />
                  <span>18+ Years Clinical Excellence • GDC {leadDentist.gdcNumber}</span>
                </div>

                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#143C3A]">
                  {leadDentist.name}
                </h3>

                <p className="text-xs font-semibold text-[#143C3A]/80">
                  {leadDentist.role} — <span className="text-[#1B1D1D]/70 font-normal">{leadDentist.qualifications}</span>
                </p>

                <p className="text-xs sm:text-sm text-[#1B1D1D]/80 leading-relaxed font-normal">
                  {leadDentist.bio}
                </p>
              </div>
            </div>

            {/* Quote Block */}
            <div className="bg-[#F5F2EB] border-l-4 border-[#143C3A] p-5 rounded-r-2xl space-y-2">
              <p className="font-serif italic text-sm sm:text-base text-[#143C3A] leading-relaxed">
                &ldquo;Great dentistry should improve your confidence without changing what makes your smile yours.&rdquo;
              </p>
              <span className="text-xs font-semibold text-[#1B1D1D]/70 block">— {leadDentist.name}</span>
            </div>

            <div className="pt-2">
              <Link href="/about" className="btn-secondary text-xs py-3 px-6">
                <span>View Full Team & Biography</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#143C3A]" />
              </Link>
            </div>
          </div>

          {/* Right Column: 2 Clinic Experience Photos */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
            {clinicPhotos.map((item, idx) => (
              <div
                key={idx}
                className="relative h-44 sm:h-48 rounded-2xl overflow-hidden border border-[#CCD6CF] shadow-clinic-card group"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs font-bold text-white tracking-wide">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
