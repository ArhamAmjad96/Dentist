import React from 'react';
import { practiceConfig } from '@/data/practice';
import { AppointmentForm } from '@/components/forms/AppointmentForm';
import { MapPin, Phone, Mail, Clock, Car, Accessibility, Train, ShieldCheck, Navigation } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Contact & Location | ${practiceConfig.name}`,
  description: `Contact ${practiceConfig.name} in ${practiceConfig.city}. Practice address, phone number, opening hours, map directions, and appointment enquiry form.`,
};

export default function ContactPage() {
  return (
    <div className="bg-[#F5F2EB] text-[#1B1D1D] min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-white border-b border-[#CCD6CF]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-semibold text-[#143C3A] uppercase tracking-widest block">
            Get In Touch
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#1B1D1D]">
            Contact & Directions
          </h1>
          <p className="text-[#1B1D1D]/75 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
            Our reception team is available to assist with appointment requests, emergency triage, treatment enquiries, and directions to our Mayfair clinic.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 bg-[#F5F2EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Contact Information & Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white border border-[#CCD6CF] rounded-3xl p-6 sm:p-8 shadow-clinic-card space-y-6">
                <h2 className="font-serif font-bold text-2xl text-[#143C3A] border-b border-[#CCD6CF]/40 pb-3">
                  Practice Details
                </h2>

                <div className="space-y-4 text-xs sm:text-sm text-[#1B1D1D]/80">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#143C3A] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#143C3A] text-sm block">Address</span>
                      <span>{practiceConfig.address}</span>
                      <br />
                      <span>{practiceConfig.city}, {practiceConfig.county}</span>
                      <br />
                      <span className="font-mono font-bold text-[#143C3A]">{practiceConfig.postcode}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 border-t border-[#CCD6CF]/40 pt-3">
                    <Phone className="w-5 h-5 text-[#143C3A] shrink-0" />
                    <div>
                      <span className="font-bold text-[#143C3A] text-sm block">Telephone</span>
                      <a href={`tel:${practiceConfig.phone.replace(/\s+/g, '')}`} className="font-mono text-[#143C3A] font-bold text-sm hover:underline">
                        {practiceConfig.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 border-t border-[#CCD6CF]/40 pt-3">
                    <Mail className="w-5 h-5 text-[#143C3A] shrink-0" />
                    <div>
                      <span className="font-bold text-[#143C3A] text-sm block">Email Reception</span>
                      <a href={`mailto:${practiceConfig.email}`} className="text-[#143C3A] font-medium hover:underline">
                        {practiceConfig.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-t border-[#CCD6CF]/40 pt-3">
                    <Clock className="w-5 h-5 text-[#143C3A] shrink-0 mt-0.5" />
                    <div className="w-full">
                      <span className="font-bold text-[#143C3A] text-sm block mb-1">Opening Hours</span>
                      <ul className="space-y-1 text-xs">
                        {practiceConfig.openingHours.map((oh, idx) => (
                          <li key={idx} className="flex justify-between gap-4 py-0.5 border-b border-[#CCD6CF]/30">
                            <span className="font-medium text-[#143C3A]">{oh.day}:</span>
                            <span>{oh.hours}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Parking & Accessibility Box */}
              <div className="bg-white border border-[#CCD6CF] rounded-3xl p-6 shadow-clinic-card space-y-3">
                <h3 className="font-serif font-bold text-lg text-[#143C3A] flex items-center gap-2">
                  <Car className="w-5 h-5 text-[#143C3A]" />
                  <span>Parking & Transport</span>
                </h3>
                <div className="space-y-2 text-xs text-[#1B1D1D]/80 font-normal leading-relaxed">
                  <p><strong>Parking:</strong> {practiceConfig.parkingInfo}</p>
                  <p><strong>Accessibility:</strong> {practiceConfig.accessibilityInfo}</p>
                  <p><strong>Underground:</strong> 5-minute walk from Green Park or Piccadilly Circus stations.</p>
                </div>
              </div>

              {/* Directions Map CTA */}
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  `${practiceConfig.name} ${practiceConfig.postcode}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center text-xs py-3.5 shadow-clinic-card"
              >
                <Navigation className="w-4 h-4 text-[#B8926A]" />
                <span>Open Directions in Google Maps</span>
              </a>
            </div>

            {/* Right Appointment Request Form */}
            <div className="lg:col-span-7">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
