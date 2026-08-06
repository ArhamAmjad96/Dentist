'use me';
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { practiceConfig } from '@/data/practice';
import { Quote, Heart, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const WelcomePhilosophy: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-ivory via-ivory-light to-stone/30 text-charcoal relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Editorial Image with Floating Quote */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elevated border-2 border-teal/20">
              <Image
                src={practiceConfig.images.welcome}
                alt={`${practiceConfig.name} clinical environment`}
                width={700}
                height={900}
                className="w-full h-[460px] object-cover"
              />
            </div>

            {/* Floating Editorial Quote Card with Gradient Border */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="mt-6 lg:-mt-16 lg:ml-6 relative z-10 bg-navy-900 text-ivory p-6 rounded-2xl shadow-elevated border-2 border-brass/40 space-y-3"
            >
              <Quote className="w-8 h-8 text-brass opacity-80" />
              <p className="font-serif italic text-base sm:text-lg leading-relaxed text-ivory/95">
                “We take time to understand your concerns, explain your options clearly, and help you feel comfortable at every stage of your care.”
              </p>
              <div className="flex items-center gap-2 pt-2 border-t border-navy-800 text-xs text-sage">
                <ShieldCheck className="w-4 h-4 text-brass" />
                <span>Our Clinical Patient Promise</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Editorial Philosophy Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-2">
              <span className="text-xs font-semibold text-gradient-teal uppercase tracking-widest block">
                Welcome to {practiceConfig.name}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight leading-tight">
                Considerate dentistry centered on your long-term health.
              </h2>
            </div>

            <p className="text-charcoal-muted leading-relaxed text-base">
              At {practiceConfig.name}, we believe that excellent dentistry relies on open communication, precision diagnostics, and genuine respect for every patient who steps through our doors. Whether you are returning after years away from a dentist or seeking advanced restorative treatment, our focus remains on preserving your natural teeth and maintaining your comfort.
            </p>

            {/* Core Values / Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white/80 backdrop-blur border border-stone-dark/30 shadow-soft hover:shadow-medium transition-all space-y-2">
                <div className="flex items-center gap-2 text-navy-900 font-serif font-bold text-base">
                  <CheckCircle2 className="w-4.5 h-4.5 text-teal" />
                  <span>Prevention-First Mindset</span>
                </div>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  We prioritize early detection and minimally invasive techniques to prevent unnecessary tooth loss or complex procedures down the line.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/80 backdrop-blur border border-stone-dark/30 shadow-soft hover:shadow-medium transition-all space-y-2">
                <div className="flex items-center gap-2 text-navy-900 font-serif font-bold text-base">
                  <Heart className="w-4.5 h-4.5 text-brass" />
                  <span>Gentle & Unhurried</span>
                </div>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  Appointments are structured so you never feel rushed. We encourage questions and explain proposed options with full cost transparency.
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/about"
                className="bg-navy-900 hover:bg-navy-800 text-ivory font-semibold px-6 py-3.5 rounded-xl text-sm transition-all shadow-medium hover:scale-[1.02]"
              >
                Read Our Story & Philosophy
              </Link>
              <Link
                href="/nervous-patients"
                className="text-teal hover:text-teal-dark font-semibold text-sm underline decoration-teal/30 underline-offset-4 hover:decoration-teal"
              >
                Nervous Patient Support &rarr;
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
