'use me';
'use client';

import React from 'react';
import Link from 'next/link';
import { practiceConfig } from '@/data/practice';
import { treatmentsData } from '@/data/treatments';
import {
  Phone,
  Calendar,
  MapPin,
  X,
  ChevronRight,
  Shield,
  Clock,
  AlertCircle,
  HelpCircle,
  FileText,
  Users,
} from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const isLab = practiceConfig.type === 'dental-laboratory';
  const primaryCtaText = isLab ? 'Submit Referral' : 'Book';

  return (
    <>
      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 lg:hidden animate-fadeIn"
          onClick={onClose}
        />
      )}

      {/* Mobile Drawer Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-5/6 max-w-md bg-slate-950 text-white z-50 transform transition-transform duration-300 ease-in-out shadow-2xl flex flex-col lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold font-serif text-sm">
              S
            </div>
            <span className="font-serif font-bold text-sm tracking-tight text-white">
              {practiceConfig.name}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-900 text-white hover:text-cyan-300"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Links Scrollable */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          <div className="space-y-1">
            <Link
              href="/"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-900 font-bold text-sm text-white"
            >
              <span>Home</span>
              <ChevronRight className="w-4 h-4 text-cyan-400" />
            </Link>

            <Link
              href="/about"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-900 font-bold text-sm text-white"
            >
              <span>About Us</span>
              <ChevronRight className="w-4 h-4 text-cyan-400" />
            </Link>

            <Link
              href="/treatments"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-900 font-bold text-sm text-white"
            >
              <span>{isLab ? 'Laboratory Services' : 'Treatments & Services'}</span>
              <ChevronRight className="w-4 h-4 text-cyan-400" />
            </Link>

            <Link
              href="/new-patients"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-900 font-bold text-sm text-white"
            >
              <span>{isLab ? 'Dental Referrals' : 'New Patients'}</span>
              <ChevronRight className="w-4 h-4 text-cyan-400" />
            </Link>

            <Link
              href="/fees"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-900 font-bold text-sm text-white"
            >
              <span>Fee Guide & Finance</span>
              <ChevronRight className="w-4 h-4 text-cyan-400" />
            </Link>

            <Link
              href="/team"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-900 font-bold text-sm text-white"
            >
              <span>Meet Our Team</span>
              <ChevronRight className="w-4 h-4 text-cyan-400" />
            </Link>

            <Link
              href="/emergency-dentist"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-lg bg-cyan-900/60 border border-cyan-400/40 font-bold text-sm text-cyan-300"
            >
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-cyan-400" />
                <span>Emergency Dental Care</span>
              </div>
              <ChevronRight className="w-4 h-4 text-cyan-400" />
            </Link>

            <Link
              href="/nervous-patients"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-900 font-bold text-sm text-white"
            >
              <span>Support for Nervous Patients</span>
              <ChevronRight className="w-4 h-4 text-cyan-400" />
            </Link>

            <Link
              href="/patient-information"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-900 font-bold text-sm text-white"
            >
              <span>Patient Information Hub</span>
              <ChevronRight className="w-4 h-4 text-cyan-400" />
            </Link>

            <Link
              href="/faqs"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-900 font-bold text-sm text-white"
            >
              <span>Frequently Asked Questions</span>
              <ChevronRight className="w-4 h-4 text-cyan-400" />
            </Link>

            <Link
              href="/contact"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-900 font-bold text-sm text-white"
            >
              <span>Contact & Directions</span>
              <ChevronRight className="w-4 h-4 text-cyan-400" />
            </Link>
          </div>

          {/* Practice Info Summary */}
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3 text-xs text-cyan-100 font-medium">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                {practiceConfig.address}, {practiceConfig.city}, {practiceConfig.postcode}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
              <a href={`tel:${practiceConfig.phone.replace(/\s+/g, '')}`} className="hover:underline text-white font-bold">
                {practiceConfig.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Mon-Fri: 08:30 – 18:00</span>
            </div>
          </div>
        </div>

        {/* Drawer Footer CTA */}
        <div className="p-4 border-t border-slate-800 bg-slate-950">
          <Link
            href={practiceConfig.bookingLink}
            onClick={onClose}
            className="w-full bg-cyan-400 text-cyan-950 font-bold py-3 rounded-lg text-center block text-sm shadow-md"
          >
            {primaryCtaText} An Appointment
          </Link>
        </div>
      </div>

      {/* Persistent Bottom Mobile Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-slate-950 border-t border-slate-800 shadow-2xl p-2">
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
          <a
            href={`tel:${practiceConfig.phone.replace(/\s+/g, '')}`}
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-slate-900 text-white hover:text-cyan-300 text-xs font-bold"
          >
            <Phone className="w-4 h-4 text-cyan-400 mb-0.5" />
            <span>Call Us</span>
          </a>

          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(
              `${practiceConfig.name} ${practiceConfig.postcode}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-slate-900 text-white hover:text-cyan-300 text-xs font-bold"
          >
            <MapPin className="w-4 h-4 text-cyan-400 mb-0.5" />
            <span>Directions</span>
          </a>

          <Link
            href={practiceConfig.bookingLink}
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-cyan-400 text-cyan-950 font-bold text-xs shadow-md"
          >
            <Calendar className="w-4 h-4 mb-0.5" />
            <span>{primaryCtaText}</span>
          </Link>
        </div>
      </div>
    </>
  );
};
