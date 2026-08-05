'use me';
'use client';

import React from 'react';
import { practiceConfig } from '@/data/practice';
import { Cpu, Scan, Sparkles, Shield, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const TechSection: React.FC = () => {
  const enabledTech = practiceConfig.technologyList.filter((t) => t.enabled);

  if (enabledTech.length === 0) return null;

  return (
    <section className="py-24 bg-cyan-950 text-white border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-800 pb-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">
              Advanced Clinical Facilities
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Modern Dental Technology
            </h2>
            <p className="text-cyan-100 text-base leading-relaxed">
              We invest in state-of-the-art diagnostic and treatment technology to improve diagnostic precision, enhance patient comfort, and reduce appointment times.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enabledTech.map((tech, idx) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-cyan-900/80 p-6 rounded-2xl border border-white/10 transition-all space-y-3 shadow-xl group"
            >
              <div className="w-11 h-11 rounded-xl bg-cyan-400 text-cyan-950 flex items-center justify-center font-bold shadow-sm">
                <Cpu className="w-5 h-5" />
              </div>

              <div className="space-y-1.5">
                <h3 className="font-serif font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                  {tech.title}
                </h3>
                <p className="text-xs text-cyan-100 leading-relaxed font-normal">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
