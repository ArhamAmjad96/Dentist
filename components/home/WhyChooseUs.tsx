'use me';
'use client';

import React from 'react';
import { practiceConfig } from '@/data/practice';
import {
  FileSpreadsheet,
  Award,
  Cpu,
  HelpCircle,
  Heart,
  MapPin,
  CheckCircle2,
  Calendar,
} from 'lucide-react';
import { motion } from 'framer-motion';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: FileSpreadsheet,
      title: 'Personalised Treatment Planning',
      description: 'Every patient receives a custom written treatment plan outlining all options, benefits, and itemised costs before any treatment begins.',
    },
    {
      icon: Award,
      title: 'Experienced Clinical Team',
      description: 'Our clinicians maintain active GDC registrations and undertake ongoing post-graduate training in restorative, surgical, and preventive dentistry.',
    },
    {
      icon: Cpu,
      title: 'Modern Dental Technology',
      description: 'Utilising low-dose digital X-rays, 3D intraoral scanners, and Airflow therapy for comfortable, accurate, and gentle diagnostics.',
    },
    {
      icon: HelpCircle,
      title: 'Clear Explanations & Transparency',
      description: 'We demystify dental jargon, using intraoral camera photos to show you exactly what we see and explain why treatment is recommended.',
    },
    {
      icon: Heart,
      title: 'Dedicated Nervous-Patient Support',
      description: 'We work at your pace. You control the speed of appointments and can request pauses at any point during your visit.',
    },
    {
      icon: MapPin,
      title: 'Convenient Local Care',
      description: `Located conveniently in central ${practiceConfig.city} with nearby parking, step-free access, and flexible early morning/evening appointments.`,
    },
  ];

  return (
    <section className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest block">
            Why Patients Choose Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
            High-standard clinical care delivered with genuine consideration.
          </h2>
          <p className="text-slate-700 text-base font-normal">
            We hold ourselves to strict clinical standards while maintaining a warm, welcoming practice environment.
          </p>
        </div>

        {/* Reasons Animated Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 group-hover:bg-cyan-700 group-hover:text-white transition-all shadow-sm">
                <reason.icon className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif font-bold text-lg text-slate-950 group-hover:text-cyan-800 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed font-normal">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Factual Stats Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-cyan-950 text-white rounded-3xl p-8 border border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center shadow-xl"
        >
          <div className="space-y-1">
            <span className="font-serif font-bold text-3xl sm:text-4xl text-cyan-300 block">
              {practiceConfig.yearsEstablished}+ Years
            </span>
            <p className="text-xs text-cyan-100 font-medium">Serving our local community</p>
          </div>

          <div className="space-y-1 border-l border-white/10 pl-4">
            <span className="font-serif font-bold text-3xl sm:text-4xl text-cyan-300 block">
              {practiceConfig.googleRating} / 5.0
            </span>
            <p className="text-xs text-cyan-100 font-medium">Google Rating ({practiceConfig.reviewCount}+ reviews)</p>
          </div>

          <div className="space-y-1 border-l border-white/10 pl-4">
            <span className="font-serif font-bold text-3xl sm:text-4xl text-cyan-300 block">
              100%
            </span>
            <p className="text-xs text-cyan-100 font-medium">GDC Registered Clinicians</p>
          </div>

          <div className="space-y-1 border-l border-white/10 pl-4">
            <span className="font-serif font-bold text-3xl sm:text-4xl text-cyan-300 block">
              {practiceConfig.acceptingNewPatients ? 'Open' : 'Full'}
            </span>
            <p className="text-xs text-cyan-100 font-medium">New patient registration</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
