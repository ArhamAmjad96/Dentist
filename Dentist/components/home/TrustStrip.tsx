'use me';
'use client';

import React from 'react';
import { practiceConfig } from '@/data/practice';
import {
  ShieldCheck,
  UserPlus,
  Clock,
  Receipt,
  HeartHandshake,
  CreditCard,
  Accessibility,
  Car,
  CalendarCheck,
} from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: ShieldCheck,
      label: 'GDC-Registered Team',
      enabled: true,
    },
    {
      icon: UserPlus,
      label: 'New Patients Welcome',
      enabled: practiceConfig.acceptingNewPatients,
    },
    {
      icon: Clock,
      label: 'Emergency Triage',
      enabled: practiceConfig.emergencyAvailable,
    },
    {
      icon: Receipt,
      label: 'Transparent Fee Guide',
      enabled: true,
    },
    {
      icon: HeartHandshake,
      label: 'Family-Friendly Care',
      enabled: true,
    },
    {
      icon: CreditCard,
      label: 'Flexible Finance',
      enabled: practiceConfig.financeAvailable,
    },
    {
      icon: Accessibility,
      label: 'Step-Free Access',
      enabled: true,
    },
    {
      icon: Car,
      label: 'Patient Parking',
      enabled: !!practiceConfig.parkingInfo,
    },
    {
      icon: CalendarCheck,
      label: 'Extended Hours',
      enabled: true,
    },
  ].filter((item) => item.enabled);

  return (
    <section className="bg-navy-950 py-6 border-b border-navy-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {trustItems.slice(0, 6).map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 rounded-xl bg-navy-900/60 border border-navy-800/80 hover:border-brass/40 transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg bg-navy-800 flex items-center justify-center text-brass group-hover:bg-brass group-hover:text-navy-900 transition-all shrink-0">
                <item.icon className="w-4 h-4" />
              </div>
              <span className="text-xs font-medium text-ivory/90 group-hover:text-brass transition-colors leading-tight">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
