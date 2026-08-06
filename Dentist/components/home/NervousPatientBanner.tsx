'use me';
'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, Hand, Shield, MessageCircle, Clock, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const NervousPatientBanner: React.FC = () => {
  return (
    <section className="py-16 bg-navy-950 text-ivory border-y border-navy-800 relative overflow-hidden">
      {/* Glow */}
      <div className="mesh-glow-brass top-1/2 left-10 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card-dark border-2 border-brass/40 rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-glow-brass"
        >
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-brass text-xs font-semibold uppercase tracking-wider">
              <Heart className="w-4 h-4 text-brass animate-pulse" />
              <span>Dedicated Dental Anxiety Support</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ivory">
              Nervous about visiting the dentist? You are in{' '}
              <span className="text-gradient-brass italic">safe, considerate hands.</span>
            </h2>

            <p className="text-sage text-sm leading-relaxed max-w-2xl">
              We understand that dental anxiety is common and very real. Our clinical team takes a gentle, non-judgmental approach, ensuring you feel completely in control throughout your time with us.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-ivory/90">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brass shrink-0" />
                <span>Discuss concerns before sitting in the dental chair</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brass shrink-0" />
                <span>Agree on a clear hand signal to stop at any time</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brass shrink-0" />
                <span>Move at your pace with no pressure</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brass shrink-0" />
                <span>Clear step-by-step explanations beforehand</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center space-y-4">
            <div className="p-4 rounded-xl bg-navy-950/80 border border-navy-700 text-xs text-sage space-y-1">
              <span className="font-semibold text-ivory block">Sedation Options:</span>
              <p>
                Dental sedation options can be assessed during consultation for highly anxious patients.
              </p>
            </div>

            <Link
              href="/nervous-patients"
              className="bg-gradient-to-r from-brass via-brass-light to-brass text-navy-950 font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-glow-brass hover:scale-[1.02] inline-flex items-center gap-2"
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
