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
  AlertCircle,
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
    <section className="relative bg-slate-950 text-white overflow-hidden pt-16 pb-24 lg:py-32 border-b border-slate-800">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Spacious High-Contrast Glass Dashboard Container */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-cyan-950/90 backdrop-blur-2xl border border-white/10 p-8 sm:p-12 rounded-[2.5rem] shadow-2xl space-y-8"
          >
            {/* Eyebrow & Status Badges */}
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap items-center gap-3"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold bg-cyan-500 text-cyan-950 uppercase tracking-wider shadow-md">
                <Sparkles className="w-4 h-4 text-cyan-950" />
                {eyebrow}
              </span>

              <span className="inline-flex items-center gap-1.5 text-xs text-white bg-cyan-900/90 backdrop-blur px-4 py-2 rounded-2xl border border-white/20 font-medium">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                {practiceConfig.status === 'private'
                  ? 'Private Clinic'
                  : practiceConfig.status === 'mixed'
                  ? 'NHS & Private Care'
                  : 'NHS Dentist'}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]"
            >
              Modern dentistry with a{' '}
              <span className="text-cyan-300 italic font-semibold">
                calm, personal
              </span>{' '}
              approach.
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-cyan-100 font-sans font-normal leading-relaxed max-w-2xl"
            >
              {practiceConfig.description}
            </motion.p>

            {/* Interactive Action Buttons with Custom Border Radii */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* Button 1: Primary Appointment Booking */}
              <Link
                href={practiceConfig.bookingLink}
                className="bg-cyan-400 hover:bg-cyan-300 text-cyan-950 font-bold px-8 py-4 rounded-2xl text-base transition-all duration-300 shadow-xl hover:scale-[1.03] flex items-center gap-2.5 group"
              >
                <Calendar className="w-5 h-5 text-cyan-950" />
                <span>{primaryCta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>

              {/* Button 2: Explore Treatments */}
              <Link
                href="/treatments"
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-4 rounded-2xl text-base border border-white/20 transition-all duration-300 hover:scale-[1.02]"
              >
                {isLab ? 'Explore Lab Services' : 'Explore Treatments'}
              </Link>

              {/* Button 3: Emergency Triage */}
              <Link
                href="/emergency-dentist"
                className="bg-cyan-900/90 hover:bg-cyan-900 text-cyan-300 font-bold px-6 py-4 rounded-2xl text-base border border-white/20 transition-all duration-300 flex items-center gap-2"
              >
                <AlertCircle className="w-4 h-4 text-cyan-400" />
                <span>Emergency Slots</span>
              </Link>

              {/* Button 4: Background Video Sound Control */}
              <button
                onClick={toggleSound}
                className="p-4 rounded-2xl bg-white/10 text-cyan-300 hover:text-white border border-white/20 transition-all hover:scale-105 flex items-center gap-2 text-xs font-bold"
                title={isMuted ? "Unmute background video sound" : "Mute background video sound"}
              >
                {isMuted ? <VolumeX className="w-4.5 h-4.5" /> : <Volume2 className="w-4.5 h-4.5 text-cyan-400 animate-pulse" />}
                <span className="hidden sm:inline">{isMuted ? 'Muted' : 'Sound On'}</span>
              </button>
            </motion.div>

            {/* Hero Reassurance Bullet Line */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-cyan-100 font-medium">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4.5 h-4.5 text-cyan-400 shrink-0" />
                <span>
                  {practiceConfig.acceptingNewPatients
                    ? 'Accepting new patients'
                    : 'Waitlist operating'}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4.5 h-4.5 text-cyan-400 shrink-0" />
                <span>
                  {practiceConfig.emergencyAvailable
                    ? 'Emergency triage available'
                    : 'Contact practice for emergency slot'}
                </span>
              </div>
            </div>

            {/* Spacious Trust Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-cyan-900/90 border border-white/10 rounded-[2rem] p-6 sm:p-8 grid grid-cols-2 sm:grid-cols-4 gap-6 shadow-xl"
            >
              {/* Stat 1: Google Rating */}
              <div className="space-y-1 p-3 rounded-2xl bg-slate-900/40 border border-white/10 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1.5 text-cyan-300 font-bold text-lg">
                  <Star className="w-4.5 h-4.5 fill-cyan-300 text-cyan-300 animate-bounce" style={{ animationDuration: '2s' }} />
                  <span className="text-white">{practiceConfig.googleRating} / 5.0</span>
                </div>
                <p className="text-[11px] text-cyan-200">
                  {practiceConfig.reviewCount}+ Google reviews
                </p>
              </div>

              {/* Stat 2: GDC Registration */}
              <div className="space-y-1 p-3 rounded-2xl bg-slate-900/40 border border-white/10 text-center sm:text-left">
                <span className="font-bold text-white text-sm block">GDC Registered</span>
                <p className="text-[11px] text-cyan-200">Qualified UK team</p>
              </div>

              {/* Stat 3: Accessibility */}
              <div className="space-y-1 p-3 rounded-2xl bg-slate-900/40 border border-white/10 text-center sm:text-left">
                <span className="font-bold text-white text-sm block">Step-Free Access</span>
                <p className="text-[11px] text-cyan-200">Wheelchair accessible</p>
              </div>

              {/* Stat 4: Finance */}
              <div className="space-y-1 p-3 rounded-2xl bg-slate-900/40 border border-white/10 text-center sm:text-left">
                <span className="font-bold text-cyan-300 text-base block">0% Finance</span>
                <p className="text-[11px] text-cyan-200">Payment options</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Spacious Procedure Frame Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20 group bg-slate-900">
              <video
                poster={practiceConfig.images.dentistWithPatient}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[460px] sm:h-[540px] object-cover transition-transform duration-700 group-hover:scale-105"
              >
                <source src={practiceConfig.videos.dentistCare} type="video/mp4" />
              </video>

              {/* Top Live Video Badge */}
              <div className="absolute top-5 left-5 bg-cyan-400 text-cyan-950 font-bold text-[11px] px-4 py-2 rounded-2xl shadow-md uppercase tracking-wider flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-950 animate-ping" />
                <Video className="w-4 h-4 text-cyan-950" />
                <span>Live Dental Procedure Footage</span>
              </div>

              {/* Floating Glassmorphism Status Card */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-5 left-5 right-5 bg-cyan-950/90 backdrop-blur-md p-5 rounded-2xl border border-white/20 flex items-center justify-between shadow-2xl"
              >
                <div>
                  <p className="text-xs font-serif font-bold text-white">
                    {practiceConfig.name}
                  </p>
                  <p className="text-[11px] text-cyan-200">
                    {practiceConfig.address}, {practiceConfig.postcode}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-cyan-400 text-cyan-950 flex items-center justify-center font-bold shadow-md">
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
