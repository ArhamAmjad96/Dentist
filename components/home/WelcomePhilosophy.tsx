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
    <section className="py-24 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200">
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
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200">
              <Image
                src={practiceConfig.images.welcome}
                alt={`${practiceConfig.name} clinical environment`}
                width={700}
                height={900}
                className="w-full h-[460px] object-cover"
              />
            </div>

            {/* Floating Quote Card */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="mt-6 lg:-mt-16 lg:ml-6 relative z-10 bg-cyan-950 text-white p-6 rounded-2xl shadow-xl border border-white/20 space-y-3"
            >
              <Quote className="w-8 h-8 text-cyan-400 opacity-90" />
              <p className="font-serif italic text-base sm:text-lg leading-relaxed text-white">
                “We take time to understand your concerns, explain your options clearly, and help you feel comfortable at every stage of your care.”
              </p>
              <div className="flex items-center gap-2 pt-2 border-t border-white/10 text-xs text-cyan-200 font-medium">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
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
              <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest block">
                Welcome to {practiceConfig.name}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight leading-tight">
                Considerate dentistry centered on your long-term health.
              </h2>
            </div>

            <p className="text-slate-800 leading-relaxed text-base font-normal">
              At {practiceConfig.name}, we believe that excellent dentistry relies on open communication, precision diagnostics, and genuine respect for every patient who steps through our doors. Whether you are returning after years away from a dentist or seeking advanced restorative treatment, our focus remains on preserving your natural teeth and maintaining your comfort.
            </p>

            {/* Core Values / Pillars (High Contrast Crisp White Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-slate-950 font-serif font-bold text-base">
                  <CheckCircle2 className="w-4.5 h-4.5 text-cyan-700" />
                  <span>Prevention-First Mindset</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-normal">
                  We prioritize early detection and minimally invasive techniques to prevent unnecessary tooth loss or complex procedures down the line.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-slate-950 font-serif font-bold text-base">
                  <Heart className="w-4.5 h-4.5 text-cyan-700" />
                  <span>Gentle & Unhurried</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-normal">
                  Appointments are structured so you never feel rushed. We encourage questions and explain proposed options with full cost transparency.
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/about"
                className="bg-cyan-950 hover:bg-cyan-900 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-md hover:scale-[1.02]"
              >
                Read Our Story & Philosophy
              </Link>
              <Link
                href="/nervous-patients"
                className="text-cyan-800 hover:text-cyan-900 font-bold text-sm underline decoration-cyan-700/40 underline-offset-4 hover:decoration-cyan-700"
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
