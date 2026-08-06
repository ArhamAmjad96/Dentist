'use me';
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, ShieldCheck, Cpu } from 'lucide-react';
import { teamData } from '@/data/team';

export const MeetDentist: React.FC = () => {
  const leadDentist = teamData[0] || {
    name: 'Dr. Alistair Vance',
    role: 'Principal Dentist & Clinical Director',
    qualifications: 'BDS (Lond), MJDF RCS (Eng), MSc Implant Dentistry',
    gdcNumber: 'GDC No: 198421',
    photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    bio: 'Dr. Vance qualified from King’s College London Dental Institute with Honours. With over 18 years of clinical experience in advanced restorative dentistry and clear aligner orthodontics, he leads St. James Clinic with a gentle, evidence-based approach.',
  };

  const clinicPhotos = [
    {
      title: 'Serene Care Suite',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: '3D Intraoral Scanning',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#122A38] text-white border-b border-[#DDE4E6]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold text-[#70AEB3] uppercase tracking-widest block">
            Clinical Leadership & Technology
          </span>
          <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Dentist & Clinic <span className="italic font-serif font-normal text-[#70AEB3]">Story</span>
          </h2>
          <p className="text-sm sm:text-base text-white/80 font-normal">
            Personalised care guided by clinical expertise and 3D digital technology in Central London.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Lead Dentist Profile */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              {/* Dentist Photo */}
              <div className="relative w-40 h-48 sm:w-48 sm:h-56 rounded-2xl overflow-hidden border border-white/20 shadow-nordic-elevated shrink-0">
                <Image
                  src={leadDentist.photo}
                  alt={leadDentist.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Bio */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] font-semibold text-[#70AEB3]">
                  <Award className="w-3.5 h-3.5" />
                  <span>18+ Years Experience • {leadDentist.gdcNumber}</span>
                </div>

                <h3 className="font-sans font-bold text-2xl sm:text-3xl text-white">
                  {leadDentist.name}
                </h3>

                <p className="text-xs font-semibold text-[#70AEB3]">
                  {leadDentist.role} — <span className="text-white/70 font-normal">{leadDentist.qualifications}</span>
                </p>

                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                  {leadDentist.bio}
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-white/5 border-l-4 border-[#70AEB3] p-5 rounded-r-2xl space-y-2">
              <p className="font-serif italic text-sm sm:text-base text-white/90 leading-relaxed">
                &ldquo;Great dentistry should improve your confidence without changing what makes your smile yours.&rdquo;
              </p>
              <span className="text-xs font-semibold text-[#70AEB3] block">— {leadDentist.name}</span>
            </div>

            <div>
              <Link href="/about" className="btn-dark text-xs py-3 px-6">
                <span>View Our Team & Biography</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: 2 Clinic Detail Photos */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
            {clinicPhotos.map((item, idx) => (
              <div
                key={idx}
                className="relative h-44 sm:h-48 rounded-2xl overflow-hidden border border-white/20 shadow-nordic-soft group"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#122A38]/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs font-bold text-white tracking-wide flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-[#70AEB3]" />
                  <span>{item.title}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
