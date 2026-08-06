'use me';
'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Car, Calendar, Navigation, MessageCircle } from 'lucide-react';
import { practiceConfig } from '@/data/practice';

export const LocationContact: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-[#CCD6CF]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold text-[#143C3A] uppercase tracking-widest block">
            Visit Our Mayfair Practice
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1B1D1D] tracking-tight">
            Convenient central London location.
          </h2>
          <p className="text-sm sm:text-base text-[#1B1D1D]/70 font-normal">
            Located in St. James’s Square, close to Green Park and Piccadilly Circus underground stations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Details Card (Left 6 Cols) */}
          <div className="lg:col-span-6 bg-[#F5F2EB] border border-[#CCD6CF] rounded-3xl p-8 sm:p-10 shadow-clinic-card space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-[#CCD6CF] flex items-center justify-center text-[#143C3A] shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-serif font-bold text-lg text-[#143C3A] block">Clinic Address</span>
                  <p className="text-xs sm:text-sm text-[#1B1D1D]/80 font-normal leading-relaxed">
                    {practiceConfig.address}, {practiceConfig.city}, {practiceConfig.postcode}
                  </p>
                  <span className="text-xs text-[#143C3A] font-semibold block mt-1">
                    5 min walk from Green Park & Piccadilly Circus Station
                  </span>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-[#CCD6CF] flex items-center justify-center text-[#143C3A] shrink-0 shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <span className="font-serif font-bold text-lg text-[#143C3A] block mb-2">Opening Hours</span>
                  <div className="space-y-1 text-xs text-[#1B1D1D]/80 font-normal max-w-sm">
                    {practiceConfig.openingHours.map((h, i) => (
                      <div key={i} className="flex justify-between py-0.5 border-b border-[#CCD6CF]/30">
                        <span className="font-semibold text-[#143C3A]">{h.day}:</span>
                        <span>{h.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Transport & Parking */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-[#CCD6CF] flex items-center justify-center text-[#143C3A] shrink-0 shadow-sm">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-serif font-bold text-lg text-[#143C3A] block">Parking & Transport</span>
                  <p className="text-xs text-[#1B1D1D]/80 leading-relaxed font-normal">
                    {practiceConfig.parkingInfo}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-[#CCD6CF]/50 flex flex-wrap gap-4">
              <Link href="/contact#appointment-form" className="btn-primary text-xs py-3.5 px-6">
                <Calendar className="w-3.5 h-3.5 text-[#B8926A]" />
                <span>Book Consultation</span>
              </Link>
              <a href={`tel:${practiceConfig.phone.replace(/\s+/g, '')}`} className="btn-secondary text-xs py-3.5 px-6">
                <Phone className="w-3.5 h-3.5" />
                <span>Call {practiceConfig.phone}</span>
              </a>
            </div>
          </div>

          {/* Interactive Google Map Embed (Right 6 Cols) */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-[#CCD6CF] shadow-clinic-elevated min-h-[380px] relative">
            <iframe
              title="St. James Clinic Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.541315891461!2d-0.137021!3d51.507402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d306b4b455%3A0xb3ff76c66c3c52a0!2sSt%20James&#39;s%20Square%2C%20London!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
