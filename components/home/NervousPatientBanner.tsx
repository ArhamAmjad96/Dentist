'use me';
'use client';

import React from 'react';
import Link from 'next/link';
import { practiceConfig } from '@/data/practice';
import { Heart, Hand, Shield, MessageCircle, Clock, Check, Video } from 'lucide-react';
import { motion } from 'framer-motion';

export const NervousPatientBanner: React.FC = () => {
  return (
    <section className="py-20 bg-cyan-950 text-white border-y border-slate-800 relative overflow-hidden">
      {/* Section Background HTML5 Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          poster={practiceConfig.images.treatmentRoom}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-25 scale-105"
        >
          <source src={practiceConfig.videos.clinicTour} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-950/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-cyan-900/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl"
        >
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              <Heart className="w-4 h-4 text-cyan-300 animate-pulse" />
              <span>Dedicated Dental Anxiety Support</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Nervous about visiting the dentist? You are in{' '}
              <span className="text-cyan-300 italic">safe, considerate hands.</span>
            </h2>

            <p className="text-cyan-100 text-sm leading-relaxed max-w-2xl">
              We understand that dental anxiety is common and very real. Our clinical team takes a gentle, non-judgmental approach, ensuring you feel completely in control throughout your time with us.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-white">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Discuss concerns before sitting in the dental chair</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Agree on a clear hand signal to stop at any time</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Move at your pace with no pressure</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Clear step-by-step explanations beforehand</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center space-y-4">
            <div className="p-4 rounded-xl bg-slate-950/80 border border-white/10 text-xs text-cyan-100 space-y-1">
              <span className="font-semibold text-white block">Sedation Options:</span>
              <p>
                Dental sedation options can be assessed during consultation for highly anxious patients.
              </p>
            </div>

            <Link
              href="/nervous-patients"
              className="bg-cyan-400 text-cyan-950 font-bold px-6 py-3.5 rounded-xl text-sm transition-all hover:bg-cyan-300 shadow-md inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Tell Us How We Can Help</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
