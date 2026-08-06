'use me';
'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Calendar, Clock, MapPin, X } from 'lucide-react';
import { practiceConfig } from '@/data/practice';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return (
    /* Fixed Sticky Mobile Bottom Action Bar */
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#DDE4E6] p-2.5 shadow-nordic-card">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={`tel:${practiceConfig.phone.replace(/\s+/g, '')}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#E7F1F3] text-[#122A38] text-[11px] font-bold"
        >
          <Phone className="w-4 h-4 text-[#70AEB3] mb-0.5" />
          <span>Call Us</span>
        </a>

        <a
          href={`https://wa.me/${practiceConfig.whatsapp.replace(/[^0-9]/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#E7F1F3] text-[#122A38] text-[11px] font-bold"
        >
          <MessageSquare className="w-4 h-4 text-[#70AEB3] mb-0.5" />
          <span>WhatsApp</span>
        </a>

        <Link
          href="/contact#appointment-form"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#70AEB3] text-white text-[11px] font-bold shadow-nordic-soft"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span>Book</span>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 bg-[#122A38] text-white flex flex-col justify-between p-6 overflow-y-auto animate-fadeIn">
      {/* Top Header inside overlay */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <span className="font-sans font-bold text-xl text-white">St. James Clinic</span>
        <button
          onClick={onClose}
          className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
          aria-label="Close Mobile Menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Links */}
      <nav className="space-y-4 my-8">
        <Link
          href="/"
          onClick={onClose}
          className="block font-sans font-bold text-2xl text-white hover:text-[#70AEB3] transition-colors"
        >
          Home
        </Link>
        <Link
          href="/treatments"
          onClick={onClose}
          className="block font-sans font-bold text-2xl text-white hover:text-[#70AEB3] transition-colors"
        >
          Treatments
        </Link>
        <Link
          href="/reviews"
          onClick={onClose}
          className="block font-sans font-bold text-2xl text-white hover:text-[#70AEB3] transition-colors"
        >
          Smile Gallery & Reviews
        </Link>
        <Link
          href="/about"
          onClick={onClose}
          className="block font-sans font-bold text-2xl text-white hover:text-[#70AEB3] transition-colors"
        >
          About Practice
        </Link>
        <Link
          href="/fees"
          onClick={onClose}
          className="block font-sans font-bold text-2xl text-white hover:text-[#70AEB3] transition-colors"
        >
          Fees & Finance
        </Link>
        <Link
          href="/contact"
          onClick={onClose}
          className="block font-sans font-bold text-2xl text-white hover:text-[#70AEB3] transition-colors"
        >
          Contact & Location
        </Link>
      </nav>

      {/* Practice Details & CTAs */}
      <div className="space-y-4 border-t border-white/10 pt-6">
        <div className="flex items-center gap-2 text-xs text-white/80">
          <Clock className="w-4 h-4 text-[#70AEB3]" />
          <span>Open Mon – Fri: 08:30 – 18:00</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-white/80">
          <MapPin className="w-4 h-4 text-[#70AEB3]" />
          <span>St. James's Square, Mayfair, London</span>
        </div>

        <div className="pt-2 grid grid-cols-2 gap-3">
          <a
            href={`tel:${practiceConfig.phone.replace(/\s+/g, '')}`}
            className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl border border-white/20 text-xs font-bold text-white hover:bg-white/10"
          >
            <Phone className="w-4 h-4 text-[#70AEB3]" />
            <span>Call Practice</span>
          </a>

          <Link
            href="/contact#appointment-form"
            onClick={onClose}
            className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#70AEB3] text-xs font-bold text-white shadow-nordic-soft"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Consultation</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
