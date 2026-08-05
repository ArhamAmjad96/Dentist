import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { teamData } from '@/data/team';
import { practiceConfig } from '@/data/practice';
import { SchemaOrg } from '@/components/ui/SchemaOrg';
import { generatePersonSchema } from '@/lib/schema';
import { ShieldCheck, Calendar, Languages, Award, ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

interface MemberPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: MemberPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const member = teamData.find((m) => m.id === resolvedParams.id);

  if (!member) {
    return { title: 'Team Member Not Found' };
  }

  return {
    title: `${member.name} | ${practiceConfig.name}`,
    description: `${member.name} - ${member.role} at ${practiceConfig.name}. ${member.qualifications}. ${member.gdcNumber}.`,
  };
}

export async function generateStaticParams() {
  return teamData.map((member) => ({
    id: member.id,
  }));
}

export default async function TeamMemberPage({ params }: MemberPageProps) {
  const resolvedParams = await params;
  const member = teamData.find((m) => m.id === resolvedParams.id);

  if (!member) {
    notFound();
  }

  const personSchema = generatePersonSchema(member);

  return (
    <div className="bg-navy-900 text-ivory min-h-screen">
      <SchemaOrg schema={personSchema} />

      <section className="py-16 bg-navy-950 border-b border-navy-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Link href="/team" className="inline-flex items-center gap-1.5 text-xs text-brass hover:underline">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Team Members</span>
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4">
              <div className="relative h-80 rounded-2xl overflow-hidden border border-navy-800 shadow-elevated">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="md:col-span-8 space-y-4">
              <div className="space-y-1">
                <span className="text-xs text-brass uppercase tracking-widest block font-semibold">
                  {member.role}
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ivory">
                  {member.name}
                </h1>
                <p className="text-sm font-mono text-sage">{member.qualifications}</p>
                <span className="inline-block text-xs font-mono text-brass bg-navy-900 px-3 py-1 rounded border border-navy-800">
                  {member.gdcNumber}
                </span>
              </div>

              <div className="pt-4 border-t border-navy-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-sage">
                <div className="flex items-center gap-2">
                  <Languages className="w-4 h-4 text-brass" />
                  <span>Languages: {member.languagesSpoken.join(', ')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brass" />
                  <span>Working Days: {member.workingDays.join(', ')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-ivory text-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-navy-900">
              Biography & Experience
            </h2>
            <p className="text-charcoal-muted leading-relaxed text-sm">
              {member.bio}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-navy-900">
              Clinical Interests
            </h2>
            <div className="flex flex-wrap gap-2">
              {member.clinicalInterests.map((interest, idx) => (
                <span
                  key={idx}
                  className="bg-white border border-stone-dark/30 text-navy-900 text-xs font-semibold px-3 py-1.5 rounded-xl shadow-soft"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-stone-dark/20 flex justify-between items-center">
            <Link
              href={practiceConfig.bookingLink}
              className="bg-navy-900 hover:bg-navy-800 text-ivory font-bold px-6 py-3 rounded-xl text-xs transition-colors"
            >
              Book an Appointment with {member.name}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
