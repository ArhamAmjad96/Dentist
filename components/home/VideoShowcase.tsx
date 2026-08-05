'use me';
'use client';

import React, { useState } from 'react';
import { practiceConfig } from '@/data/practice';
import { Play, Pause, Video, ShieldCheck, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

interface VideoItem {
  id: string;
  title: string;
  category: string;
  description: string;
  videoUrl: string;
  poster: string;
}

export const VideoShowcase: React.FC = () => {
  const videos: VideoItem[] = [
    {
      id: 'dentist-care',
      title: 'Precision Dental Examination & Fillings',
      category: 'Clinical Care',
      description: 'Watch our clinical team deliver gentle, highly precise restorative treatment in a calm setting.',
      videoUrl: practiceConfig.videos.dentistCare,
      poster: practiceConfig.images.dentistWithPatient,
    },
    {
      id: 'clinic-tour',
      title: 'State-of-the-Art Practice Tour',
      category: 'Facility Tour',
      description: 'Explore our Mayfair waiting lounge, step-free reception, and comfortable treatment rooms.',
      videoUrl: practiceConfig.videos.clinicTour,
      poster: practiceConfig.images.treatmentRoom,
    },
    {
      id: 'hygiene-airflow',
      title: 'Airflow Hygiene & 3D Scanning',
      category: 'Advanced Tech',
      description: 'Experience painless stain removal and impression-free 3D digital dental scans.',
      videoUrl: practiceConfig.videos.hygieneTherapy,
      poster: practiceConfig.images.hygienistCare,
    },
  ];

  return (
    <section className="py-24 bg-navy-950 text-ivory relative border-b border-navy-800 overflow-hidden">
      {/* Background Mesh Orbs */}
      <div className="mesh-glow-brass top-10 right-10 opacity-30" />
      <div className="mesh-glow-teal bottom-10 left-10 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-navy-800 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-brass/30 to-teal/30 text-brass-light border border-brass/40 uppercase tracking-wider">
              <Video className="w-3.5 h-3.5 text-brass" />
              Inside Our Practice
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-ivory">
              Experience Our Clinic in Motion
            </h2>
            <p className="text-sage text-base">
              Take an interactive video look inside {practiceConfig.name}. See our dentists at work, inspect our modern facilities, and witness gentle clinical care.
            </p>
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card-dark rounded-3xl overflow-hidden border-2 border-brass/30 shadow-elevated hover:shadow-glow-brass transition-all group flex flex-col justify-between"
            >
              <div className="relative h-60 w-full overflow-hidden bg-navy-900">
                {/* HTML5 Video Element with Poster Fallback */}
                <video
                  poster={item.poster}
                  loop
                  muted
                  playsInline
                  autoPlay
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                >
                  <source src={item.videoUrl} type="video/mp4" />
                </video>

                {/* Video Category Badge */}
                <div className="absolute top-3 left-3 bg-gradient-to-r from-brass to-brass-light text-navy-950 text-[11px] font-bold px-3 py-1 rounded-full shadow-soft uppercase tracking-wider">
                  {item.category}
                </div>

                {/* Live Video Indicator */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-navy-900/90 backdrop-blur-md border border-navy-700 px-2.5 py-1 rounded-full text-[10px] font-semibold text-brass">
                  <span className="w-2 h-2 rounded-full bg-brass animate-ping" />
                  <span>HD Live Video</span>
                </div>
              </div>

              {/* Card Description */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-xl text-ivory group-hover:text-brass transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-sage leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-navy-800/80 flex items-center justify-between text-xs text-sage">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-brass" />
                    <span>Real Clinic Footage</span>
                  </span>
                  <span className="font-mono text-brass font-bold">1080p HD</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
