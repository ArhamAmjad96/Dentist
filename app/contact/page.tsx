import React from 'react';
import { practiceConfig } from '@/data/practice';
import { AppointmentForm } from '@/components/forms/AppointmentForm';
import { MapPin, Phone, Mail, Clock, Car, Accessibility, Train, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Contact & Location | ${practiceConfig.name}`,
  description: `Contact ${practiceConfig.name} in ${practiceConfig.city}. Practice address, phone number, opening hours, map directions, and appointment enquiry form.`,
};

export default function ContactPage() {
  return (
    <div className="bg-navy-900 text-ivory min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-navy-950 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-semibold text-brass uppercase tracking-widest block">
            Get In Touch
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ivory">
            Contact & Directions
          </h1>
          <p className="text-sage text-base max-w-2xl leading-relaxed">
            Our reception team is available to assist with appointment requests, emergency triage, treatment enquiries, and directions.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 bg-ivory text-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Contact Information & Maps */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white border border-stone-dark/30 rounded-2xl p-6 shadow-soft space-y-6">
                <h2 className="font-serif font-bold text-xl text-navy-900 border-b border-stone-dark/20 pb-3">
                  Practice Details
                </h2>

                <div className="space-y-4 text-xs text-charcoal-muted">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-navy-900 text-sm block">Address</span>
                      <span>{practiceConfig.address}</span>
                      <br />
                      <span>{practiceConfig.city}, {practiceConfig.county}</span>
                      <br />
                      <span className="font-mono font-bold text-navy-900">{practiceConfig.postcode}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 border-t border-stone-dark/20 pt-3">
                    <Phone className="w-5 h-5 text-teal shrink-0" />
                    <div>
                      <span className="font-bold text-navy-900 text-sm block">Telephone</span>
                      <a href={`tel:${practiceConfig.phone.replace(/\s+/g, '')}`} className="font-mono text-navy-900 font-bold text-sm hover:underline">
                        {practiceConfig.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 border-t border-stone-dark/20 pt-3">
                    <Mail className="w-5 h-5 text-teal shrink-0" />
                    <div>
                      <span className="font-bold text-navy-900 text-sm block">Email Reception</span>
                      <a href={`mailto:${practiceConfig.email}`} className="text-navy-900 font-medium hover:underline">
                        {practiceConfig.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-t border-stone-dark/20 pt-3">
                    <Clock className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-navy-900 text-sm block">Opening Hours</span>
                      <ul className="space-y-1 text-xs pt-1">
                        {practiceConfig.openingHours.map((oh, idx) => (
                          <li key={idx} className="flex justify-between gap-4">
                            <span className="font-medium text-navy-900">{oh.day}:</span>
                            <span>{oh.hours}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Parking & Accessibility Box */}
              <div className="bg-white border border-stone-dark/30 rounded-2xl p-6 shadow-soft space-y-4">
                <h3 className="font-serif font-bold text-lg text-navy-900 flex items-center gap-2">
                  <Car className="w-5 h-5 text-teal" />
                  <span>Parking & Accessibility</span>
                </h3>
                <div className="space-y-3 text-xs text-charcoal-muted">
                  <p><strong>Parking:</strong> {practiceConfig.parkingInfo}</p>
                  <p><strong>Accessibility:</strong> {practiceConfig.accessibilityInfo}</p>
                  <p><strong>Nearby Transport:</strong> Short walk from main station / bus lines on St. James's Square.</p>
                </div>
              </div>

              {/* Directions Map CTA */}
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  `${practiceConfig.name} ${practiceConfig.postcode}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy-900 hover:bg-navy-800 text-ivory font-bold p-4 rounded-2xl text-center block text-xs shadow-soft transition-colors"
              >
                Open Practice Location in Google Maps &rarr;
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
