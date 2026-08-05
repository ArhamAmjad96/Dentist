import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { teamData } from '@/data/team';
import { practiceConfig } from '@/data/practice';
import { SchemaOrg } from '@/components/ui/SchemaOrg';
import { generatePersonSchema } from '@/lib/schema';
import { ShieldCheck, Award, Calendar, Languages } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Our Clinical Team | ${practiceConfig.name}`,
  description: `Meet the experienced dentists, hygienists, orthodontists, and dental care team at ${practiceConfig.name} in ${practiceConfig.city}.`,
};

export default function TeamPage() {
  const personSchemas = teamData.map((m) => generatePersonSchema(m));

  const groups = [
    { id: 'dentists', title: 'Dentists & Clinical Directors' },
    { id: 'orthodontists', title: 'Specialist Orthodontists' },
    { id: 'hygienists', title: 'Dental Hygienists & Therapists' },
    { id: 'technicians', title: 'Dental Technicians' },
    { id: 'management', title: 'Practice Management & Reception' },
  ];

  return (
    <div className="bg-navy-900 text-ivory min-h-screen">
      <SchemaOrg schema={personSchemas} />

      {/* Hero */}
      <section className="py-16 bg-navy-950 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-semibold text-brass uppercase tracking-widest block">
            Qualified Healthcare Professionals
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ivory">
            Meet Our Clinical Team
          </h1>
          <p className="text-sage text-base max-w-2xl leading-relaxed">
            Our team consists of dedicated UK-registered dental professionals committed to considerate, evidence-backed oral care.
          </p>
        </div>
      </section>

      {/* Team Roster Grouped */}
      <section className="py-20 bg-ivory text-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {groups.map((grp) => {
            const members = teamData.filter((m) => m.group === grp.id);
            if (members.length === 0) return null;

            return (
              <div key={grp.id} className="space-y-6">
                <div className="border-b border-stone-dark/30 pb-3">
                  <h2 className="font-serif text-2xl font-bold text-navy-900">
                    {grp.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {members.map((member) => (
                    <div
                      key={member.id}
                      className="p-6 rounded-2xl bg-white border border-stone-dark/30 shadow-soft hover:shadow-medium transition-all flex flex-col justify-between space-y-4 group"
                    >
                      <div className="space-y-4">
                        <div className="relative h-64 w-full rounded-xl overflow-hidden bg-stone">
                          <Image
                            src={member.photo}
                            alt={member.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        <div className="space-y-1">
                          <h3 className="font-serif font-bold text-xl text-navy-900 group-hover:text-teal transition-colors">
                            {member.name}
                          </h3>
                          <p className="text-xs font-semibold text-teal">
                            {member.role}
                          </p>
                          <p className="text-[11px] text-charcoal-muted font-mono">
                            {member.qualifications}
                          </p>
                          <span className="inline-block text-[10px] font-mono text-navy-900 bg-stone/60 px-2 py-0.5 rounded">
                            {member.gdcNumber}
                          </span>
                        </div>

                        <p className="text-xs text-charcoal-muted leading-relaxed line-clamp-3">
                          {member.bio}
                        </p>

                        <div className="pt-2 border-t border-stone-dark/20 text-[11px] space-y-1 text-charcoal-muted">
                          <div className="flex items-center gap-1.5">
                            <Languages className="w-3.5 h-3.5 text-teal" />
                            <span>Languages: {member.languagesSpoken.join(', ')}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-teal" />
                            <span>Days: {member.workingDays.join(', ')}</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-stone-dark/20">
                        <Link
                          href={`/team/${member.id}`}
                          className="inline-flex items-center gap-1 text-teal hover:text-teal-dark font-semibold text-xs"
                        >
                          <span>Full Profile</span>
                          <span>&rarr;</span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
