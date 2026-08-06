'use me';
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { practiceConfig } from '@/data/practice';
import { Phone, Calendar, MessageCircle, X, ChevronRight, Star } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  if (!isOpen) {
    return (
      /* Mobile Sticky Bottom Action Bar */
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-[#CCD6CF]/70 p-3 shadow-clinic-elevated">
        <div className="grid grid-cols-3 gap-2">
          <a
            href={`tel:${practiceConfig.phone.replace(/\s+/g, '')}`}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#F5F2EB] text-[#143C3A] text-xs font-semibold hover:bg-[#CCD6CF]/50 transition-colors"
          >
            <Phone className="w-4 h-4 mb-0.5" />
            <span>Call</span>
          </a>

          <a
            href={`https://wa.me/${practiceConfig.whatsapp.replace(/\s+/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#F5F2EB] text-[#143C3A] text-xs font-semibold hover:bg-[#CCD6CF]/50 transition-colors"
          >
            <MessageCircle className="w-4 h-4 mb-0.5 text-emerald-600" />
            <span>WhatsApp</span>
          </a>

          <Link
            href="/contact#appointment-form"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#143C3A] text-white text-xs font-semibold shadow-sm"
          >
            <Calendar className="w-4 h-4 mb-0.5 text-[#B8926A]" />
            <span>Book</span>
          </Link>
        </div>
      </div>
    );
  }

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Treatments & Services', href: '/treatments' },
    { label: 'Smile Transformations', href: '/reviews' },
    { label: 'About Our Clinic', href: '/about' },
    { label: 'Fees & Financing', href: '/fees' },
    { label: 'Urgent Care & Emergency', href: '/emergency-dentist' },
    { label: 'Contact & Location', href: '/contact' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-[#F5F2EB] flex flex-col justify-between p-6 overflow-y-auto animate-fadeIn lg:hidden">
      {/* Header Bar inside Mobile Menu */}
      <div className="flex items-center justify-between pb-6 border-b border-[#CCD6CF]/60">
        <Link href="/" onClick={onClose} className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-[#143C3A] text-white flex items-center justify-center font-serif text-lg font-bold">
            S
          </div>
          <span className="font-serif text-lg font-bold text-[#1B1D1D]">
            St. James Clinic
          </span>
        </Link>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white border border-[#CCD6CF] text-[#1B1D1D] flex items-center justify-center shadow-sm"
          aria-label="Close Menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Menu Links */}
      <nav className="py-8 space-y-3">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`flex items-center justify-between p-3.5 rounded-xl text-base font-semibold transition-all ${
                isActive
                  ? 'bg-[#143C3A] text-white shadow-sm'
                  : 'bg-white text-[#1B1D1D] border border-[#CCD6CF]/50 hover:border-[#143C3A]'
              }`}
            >
              <span>{link.label}</span>
              <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#B8926A]' : 'text-[#1B1D1D]/40'}`} />
            </Link>
          );
        })}
      </nav>

      {/* Bottom CTA Block */}
      <div className="pt-6 border-t border-[#CCD6CF]/60 space-y-4">
        <div className="flex items-center justify-between text-xs text-[#1B1D1D]/80 bg-white p-3 rounded-xl border border-[#CCD6CF]/50">
          <div className="flex items-center gap-1 text-[#B8926A] font-bold">
            <Star className="w-4 h-4 fill-[#B8926A]" />
            <span>4.9 Google Rating</span>
          </div>
          <span>London SW1</span>
        </div>

        <Link
          href="/contact#appointment-form"
          onClick={onClose}
          className="w-full btn-primary justify-center text-sm py-3.5 shadow-md"
        >
          <Calendar className="w-4 h-4 text-[#B8926A]" />
          <span>Book a Consultation</span>
        </Link>

        <a
          href={`tel:${practiceConfig.phone.replace(/\s+/g, '')}`}
          className="w-full btn-secondary justify-center text-sm py-3"
        >
          <Phone className="w-4 h-4" />
          <span>Call {practiceConfig.phone}</span>
        </a>
      </div>
    </div>
  );
};
