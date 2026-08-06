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
    <section className="py-24 bg-ivory text-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-semibold text-gradient-teal uppercase tracking-widest block">
            Why Patients Choose Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
            High-standard clinical care delivered with genuine consideration.
          </h2>
          <p className="text-charcoal-muted text-base">
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
              className="p-6 rounded-2xl bg-white border border-stone-dark/30 shadow-soft hover:shadow-medium transition-all space-y-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal/15 to-brass/15 border border-teal/20 flex items-center justify-center text-teal group-hover:bg-gradient-to-br group-hover:from-teal group-hover:to-teal-dark group-hover:text-ivory transition-all shadow-soft">
                <reason.icon className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif font-bold text-lg text-navy-900 group-hover:text-teal transition-colors">
                  {reason.title}
                </h3>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Factual Gradient Stats Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-animated-gradient text-ivory rounded-3xl p-8 border-2 border-brass/30 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center shadow-elevated"
        >
          <div className="space-y-1">
            <span className="font-serif font-bold text-3xl sm:text-4xl text-gradient-brass block">
              {practiceConfig.yearsEstablished}+ Years
            </span>
            <p className="text-xs text-sage">Serving our local community</p>
          </div>

          <div className="space-y-1 border-l border-navy-700/60 pl-4">
            <span className="font-serif font-bold text-3xl sm:text-4xl text-gradient-brass block">
              {practiceConfig.googleRating} / 5.0
            </span>
            <p className="text-xs text-sage">Google Rating ({practiceConfig.reviewCount}+ reviews)</p>
          </div>

          <div className="space-y-1 border-l border-navy-700/60 pl-4">
            <span className="font-serif font-bold text-3xl sm:text-4xl text-gradient-brass block">
              100%
            </span>
            <p className="text-xs text-sage">GDC Registered Clinicians</p>
          </div>

          <div className="space-y-1 border-l border-navy-700/60 pl-4">
            <span className="font-serif font-bold text-3xl sm:text-4xl text-gradient-brass block">
              {practiceConfig.acceptingNewPatients ? 'Open' : 'Full'}
            </span>
            <p className="text-xs text-sage">New patient registration</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
