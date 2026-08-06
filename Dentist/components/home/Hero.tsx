'use me';
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { practiceConfig } from '@/data/practice';
import {
  Calendar,
  Star,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const isLab = practiceConfig.type === 'dental-laboratory';
  const isOrtho = practiceConfig.type === 'orthodontist';
  const isDenture = practiceConfig.type === 'denture-clinic';

  const eyebrow = isLab
    ? `Precision dental laboratory services in ${practiceConfig.city}`
    : isOrtho
    ? `Specialist orthodontic care in ${practiceConfig.city}`
    : isDenture
    ? `Dedicated denture care & prosthetics in ${practiceConfig.city}`
    : `Trusted dental care in ${practiceConfig.city}`;

  const primaryCta = isLab ? 'Submit Laboratory Referral' : 'Book an Appointment';

  return (
    <section className="relative bg-animated-gradient-fast text-ivory overflow-hidden pt-12 pb-20 lg:py-28 border-b border-navy-800">
      {/* Faster Animated Ambient Gradient Mesh Orbs */}
      <div className="mesh-glow-teal -top-20 -left-20 animate-pulse-glow" style={{ animationDuration: '2.5s' }} />
      <div className="mesh-glow-brass top-1/3 -right-20 animate-pulse-glow" style={{ animationDuration: '3s', animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Animated Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Eyebrow & Status Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap items-center gap-3"
            >
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-brass/30 via-teal/30 to-brass/30 text-brass-light border border-brass/50 uppercase tracking-wider shadow-glow-brass animate-pulse-glow" style={{ animationDuration: '3s' }}>
                <Sparkles className="w-3.5 h-3.5 text-brass" />
                {eyebrow}
              </span>

              <span className="inline-flex items-center gap-1 text-xs text-sage bg-navy-900/90 backdrop-blur px-3 py-1 rounded-full border border-navy-700">
                <ShieldCheck className="w-3.5 h-3.5 text-brass" />
                {practiceConfig.status === 'private'
                  ? 'Private Clinic'
                  : practiceConfig.status === 'mixed'
                  ? 'NHS & Private Care'
                  : 'NHS Dentist'}
              </span>
            </motion.div>

            {/* Main Headline with Shimmering Gradient Text */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ivory leading-[1.12]"
            >
              Modern dentistry with a{' '}
              <span className="text-gradient-brass italic font-semibold">
                calm, personal
              </span>{' '}
              approach.
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-sage font-sans font-normal leading-relaxed max-w-2xl"
            >
              {practiceConfig.description}
            </motion.p>

            {/* Interactive CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                href={practiceConfig.bookingLink}
                className="bg-gradient-to-r from-brass via-brass-light to-brass bg-[length:200%_auto] animate-gradient-shift text-navy-950 font-bold px-7 py-4 rounded-xl text-base transition-all duration-300 shadow-glow-brass hover:shadow-elevated hover:scale-[1.03] flex items-center gap-2 group"
              >
                <Calendar className="w-5 h-5 text-navy-950" />
                <span>{primaryCta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>

              <Link
                href="/treatments"
                className="glass-card-dark hover:bg-navy-800/90 text-ivory font-semibold px-6 py-4 rounded-xl text-base border border-navy-700/80 transition-all duration-300 hover:border-teal/60 hover:scale-[1.02]"
              >
                {isLab ? 'Explore Lab Services' : 'Explore Treatments'}
              </Link>
            </motion.div>

            {/* Hero Reassurance Bullet Line */}
            <div className="pt-4 border-t border-navy-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-sage">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brass shrink-0" />
                <span>
                  {practiceConfig.acceptingNewPatients
                    ? 'Accepting new patients'
                    : 'Waitlist operating'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brass shrink-0" />
                <span>
                  {practiceConfig.emergencyAvailable
                    ? 'Emergency triage available'
                    : 'Contact practice for emergency slot'}
                </span>
              </div>
            </div>

            {/* Glassmorphism Trust Panel Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass-card-dark rounded-2xl p-5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center sm:text-left shadow-elevated"
            >
              {/* Stat 1: Google Rating */}
              <div className="space-y-0.5">
                <div className="flex items-center justify-center sm:justify-start gap-1 text-brass font-bold text-lg">
                  <Star className="w-4.5 h-4.5 fill-brass text-brass animate-bounce" style={{ animationDuration: '2s' }} />
                  <span className="text-gradient-brass">{practiceConfig.googleRating} / 5.0</span>
                </div>
                <p className="text-[11px] text-sage">
                  Based on {practiceConfig.reviewCount}+ verified reviews
                </p>
              </div>

              {/* Stat 2: GDC Registration */}
              <div className="space-y-0.5 border-l border-navy-700/60 pl-3">
                <span className="font-bold text-ivory text-sm block">GDC Registered</span>
                <p className="text-[11px] text-sage">Fully qualified UK team</p>
              </div>

              {/* Stat 3: Accessibility */}
              <div className="space-y-0.5 border-l border-navy-700/60 pl-3">
                <span className="font-bold text-ivory text-sm block">Step-Free Access</span>
                <p className="text-[11px] text-sage">Wheelchair accessible</p>
              </div>

              {/* Stat 4: Finance */}
              <div className="space-y-0.5 border-l border-navy-700/60 pl-3">
                <span className="font-bold text-gradient-teal font-serif text-base block">0% Finance</span>
                <p className="text-[11px] text-sage">Subject to status & plan</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Photography with Floating Gradient Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elevated border-2 border-brass/40 group">
              <Image
                src={practiceConfig.images.hero}
                alt={`${practiceConfig.name} practice interior`}
                width={800}
                height={1000}
                className="w-full h-[440px] sm:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />

              {/* Glassmorphism Floating Badge */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-4 left-4 right-4 glass-card-dark p-4 rounded-2xl border-2 border-brass/40 flex items-center justify-between shadow-glow-brass"
              >
                <div>
                  <p className="text-xs font-serif font-bold text-ivory">
                    {practiceConfig.name}
                  </p>
                  <p className="text-[11px] text-sage">
                    {practiceConfig.address}, {practiceConfig.postcode}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brass to-teal text-navy-950 flex items-center justify-center font-bold shadow-soft">
                  <ShieldCheck className="w-5 h-5 text-navy-950" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
