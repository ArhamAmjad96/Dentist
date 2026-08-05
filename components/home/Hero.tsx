'use me';
'use client';

import React, { useState, useRef } from 'react';
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
  Volume2,
  VolumeX,
  Play,
  Video,
} from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative bg-slate-900 text-white overflow-hidden pt-12 pb-20 lg:py-28 border-b border-cyan-200">
      {/* Background HTML5 Video Layer with Poster Fallback */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          poster={practiceConfig.images.hero}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 transition-all duration-1000"
        >
          <source src={practiceConfig.videos.heroBackground} type="video/mp4" />
        </video>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: High-Contrast Frosted Glass Card Container */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-cyan-950/90 backdrop-blur-2xl border-2 border-cyan-400/50 p-8 sm:p-10 rounded-3xl shadow-glow-cyan space-y-6"
          >
            {/* Eyebrow & Status Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap items-center gap-3"
            >
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-cyan-400 text-cyan-950 uppercase tracking-wider shadow-soft">
                <Sparkles className="w-3.5 h-3.5 text-cyan-950" />
                {eyebrow}
              </span>

              <span className="inline-flex items-center gap-1 text-xs text-white bg-cyan-900/90 backdrop-blur px-3.5 py-1.5 rounded-full border border-cyan-600 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                {practiceConfig.status === 'private'
                  ? 'Private Clinic'
                  : practiceConfig.status === 'mixed'
                  ? 'NHS & Private Care'
                  : 'NHS Dentist'}
              </span>
            </motion.div>

            {/* Main Headline - Crisp White with Vibrant Electric Cyan Shimmer */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]"
            >
              Modern dentistry with a{' '}
              <span className="text-cyan-300 italic font-semibold drop-shadow-sm">
                calm, personal
              </span>{' '}
              approach.
            </motion.h1>

            {/* Supporting Copy - High Contrast Light Ice Cyan */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-cyan-100 font-sans font-normal leading-relaxed"
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
                className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 text-cyan-950 font-bold px-7 py-4 rounded-xl text-base transition-all duration-300 shadow-glow-cyan hover:scale-[1.03] flex items-center gap-2 group"
              >
                <Calendar className="w-5 h-5 text-cyan-950" />
                <span>{primaryCta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>

              <Link
                href="/treatments"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-4 rounded-xl text-base border border-white/30 transition-all duration-300 hover:scale-[1.02]"
              >
                {isLab ? 'Explore Lab Services' : 'Explore Treatments'}
              </Link>

              {/* Sound Toggle Control Button */}
              <button
                onClick={toggleSound}
                className="p-3.5 rounded-xl bg-white/10 text-cyan-300 hover:text-white border border-cyan-400/40 transition-all hover:scale-105 flex items-center gap-2 text-xs font-semibold"
                title={isMuted ? "Unmute background video sound" : "Mute background video sound"}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" />}
                <span className="hidden sm:inline">{isMuted ? 'Video Muted' : 'Sound On'}</span>
              </button>
            </motion.div>

            {/* Hero Reassurance Bullet Line */}
            <div className="pt-4 border-t border-cyan-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-cyan-100 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>
                  {practiceConfig.acceptingNewPatients
                    ? 'Accepting new patients'
                    : 'Waitlist operating'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>
                  {practiceConfig.emergencyAvailable
                    ? 'Emergency triage available'
                    : 'Contact practice for emergency slot'}
                </span>
              </div>
            </div>

            {/* High Contrast Trust Stats Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-cyan-900/90 border border-cyan-400/40 rounded-2xl p-5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center sm:text-left shadow-soft"
            >
              {/* Stat 1: Google Rating */}
              <div className="space-y-0.5">
                <div className="flex items-center justify-center sm:justify-start gap-1 text-cyan-300 font-bold text-lg">
                  <Star className="w-4.5 h-4.5 fill-cyan-300 text-cyan-300 animate-bounce" style={{ animationDuration: '2s' }} />
                  <span className="text-white">{practiceConfig.googleRating} / 5.0</span>
                </div>
                <p className="text-[11px] text-cyan-200">
                  Based on {practiceConfig.reviewCount}+ verified reviews
                </p>
              </div>

              {/* Stat 2: GDC Registration */}
              <div className="space-y-0.5 border-l border-cyan-800 pl-3">
                <span className="font-bold text-white text-sm block">GDC Registered</span>
                <p className="text-[11px] text-cyan-200">Fully qualified UK team</p>
              </div>

              {/* Stat 3: Accessibility */}
              <div className="space-y-0.5 border-l border-cyan-800 pl-3">
                <span className="font-bold text-white text-sm block">Step-Free Access</span>
                <p className="text-[11px] text-cyan-200">Wheelchair accessible</p>
              </div>

              {/* Stat 4: Finance */}
              <div className="space-y-0.5 border-l border-cyan-800 pl-3">
                <span className="font-bold text-cyan-300 font-serif text-base block">0% Finance</span>
                <p className="text-[11px] text-cyan-200">Subject to status & plan</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: High Contrast Procedure Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-glow-cyan border-2 border-cyan-400 group bg-slate-900">
              <video
                poster={practiceConfig.images.dentistWithPatient}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[440px] sm:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
              >
                <source src={practiceConfig.videos.dentistCare} type="video/mp4" />
              </video>

              {/* Top Live Video Badge */}
              <div className="absolute top-4 left-4 bg-cyan-400 text-cyan-950 font-bold text-[11px] px-3.5 py-1.5 rounded-full shadow-soft uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-950 animate-ping" />
                <Video className="w-3.5 h-3.5 text-cyan-950" />
                <span>Live Dental Procedure Footage</span>
              </div>

              {/* Floating Glassmorphism Status Card */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-4 left-4 right-4 bg-cyan-950/90 backdrop-blur-md p-4 rounded-2xl border-2 border-cyan-400/50 flex items-center justify-between shadow-glow-cyan"
              >
                <div>
                  <p className="text-xs font-serif font-bold text-white">
                    {practiceConfig.name}
                  </p>
                  <p className="text-[11px] text-cyan-200">
                    {practiceConfig.address}, {practiceConfig.postcode}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-cyan-400 text-cyan-950 flex items-center justify-center font-bold shadow-soft">
                  <ShieldCheck className="w-5 h-5 text-cyan-950" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
