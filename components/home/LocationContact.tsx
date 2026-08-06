'use me';
'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Navigation, Calendar, ExternalLink } from 'lucide-react';
import { practiceConfig } from '@/data/practice';

export const LocationContact: React.FC = () => {
  return (
    <section id="contact-location" className="py-16 lg:py-20 bg-white border-b border-[#CCD6CF]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold text-[#143C3A] uppercase tracking-widest block">
            Visit St. James Clinic
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1B1D1D] tracking-tight">
            Location, Directions & Booking
          </h2>
          <p className="text-sm sm:text-base text-[#1B1D1D]/75 font-normal">
            Located in Mayfair, Central London, easily accessible by tube, bus, and taxi.
          </p>
        </div>

        {/* 2-Column Compact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Practice Info, Hours & Booking */}
          <div className="lg:col-span-6 bg-[#F5F2EB] border border-[#CCD6CF] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-clinic-card space-y-6">
            <div className="space-y-5">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#143C3A] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#143C3A]">Practice Address</h3>
                  <p className="text-xs sm:text-sm text-[#1B1D1D]/80 leading-relaxed font-normal">
                    {practiceConfig.address}, {practiceConfig.city}, {practiceConfig.postcode}
                  </p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#CCD6CF]/50">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#143C3A]" />
                  <a href={`tel:${practiceConfig.phone.replace(/\s+/g, '')}`} className="text-xs font-bold text-[#143C3A] hover:underline">
                    {practiceConfig.phone}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#143C3A]" />
                  <a href={`mailto:${practiceConfig.email}`} className="text-xs font-medium text-[#1B1D1D]/80 hover:underline">
                    {practiceConfig.email}
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="space-y-2 pt-2 border-t border-[#CCD6CF]/50">
                <div className="flex items-center gap-2 text-xs font-bold text-[#143C3A]">
                  <Clock className="w-4 h-4 text-[#B8926A]" />
                  <span>Opening Hours</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-xs text-[#1B1D1D]/80 font-normal">
                  {practiceConfig.openingHours.map((oh, idx) => (
                    <div key={idx} className="flex justify-between">
                      <span>{oh.day}:</span>
                      <span className="font-semibold text-[#143C3A]">{oh.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Transport & Parking */}
              <div className="space-y-1 pt-2 border-t border-[#CCD6CF]/50 text-xs text-[#1B1D1D]/75 font-normal">
                <p><strong className="text-[#143C3A]">Underground:</strong> 3-min walk from Green Park or Piccadilly Circus tube stations.</p>
                <p><strong className="text-[#143C3A]">Parking:</strong> Q-Park Burlington Street (2-min walk, pre-booking available).</p>
              </div>
            </div>

            {/* Direct Booking CTA */}
            <div className="pt-4 border-t border-[#CCD6CF]/60 flex flex-wrap gap-3">
              <Link href="/contact#appointment-form" className="btn-primary text-xs py-3 px-6 shadow-sm">
                <Calendar className="w-4 h-4 text-[#B8926A]" />
                <span>Book Consultation</span>
              </Link>
              <a
                href={practiceConfig.googleReviewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs py-3 px-5"
              >
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#143C3A]" />
              </a>
            </div>
          </div>

          {/* Right Column: Controlled Height Map Embed */}
          <div className="lg:col-span-6">
            <div className="relative w-full h-[290px] sm:h-[320px] lg:h-[420px] rounded-3xl overflow-hidden border border-[#CCD6CF] shadow-clinic-card">
              <iframe
                title="St. James Clinic Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.275810452391!2d-0.13689492338166946!3d51.50814797181467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d3b6f2f2f7%3A0x89b6e8a2a8b9f9e1!2sSt%20James's%20Square%2C%20St.%20James's%2C%20London!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter brightness-95 contrast-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
