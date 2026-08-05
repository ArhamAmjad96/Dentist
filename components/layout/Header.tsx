'use me';
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { practiceConfig } from '@/data/practice';
import { treatmentsData } from '@/data/treatments';
import {
  Phone,
  Calendar,
  ChevronDown,
  Menu,
  X,
  MapPin,
  Clock,
  Sparkles,
  Shield,
  Stethoscope,
  Smile,
  AlertCircle,
} from 'lucide-react';
import { MobileNav } from './MobileNav';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();

  const isLab = practiceConfig.type === 'dental-laboratory';
  const isOrtho = practiceConfig.type === 'orthodontist';
  const isDenture = practiceConfig.type === 'denture-clinic';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMegaMenuOpen(false);
    setMobileNavOpen(false);
  }, [pathname]);

  const primaryCtaText = isLab
    ? 'Submit Laboratory Referral'
    : 'Book an Appointment';

  const categories = [
    { id: 'general', title: 'General Dentistry', icon: Stethoscope },
    { id: 'cosmetic', title: 'Cosmetic Dentistry', icon: Sparkles },
    { id: 'restorative', title: 'Restorative Care', icon: Shield },
    { id: 'implants', title: 'Dental Implants', icon: Smile },
    { id: 'orthodontics', title: 'Orthodontics', icon: Sparkles },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-navy-900/90 backdrop-blur-xl shadow-elevated border-b border-brass/20 py-3'
            : 'bg-navy-900 text-ivory py-4 border-b border-navy-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo with Gradient Icon */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brass rounded-lg p-1"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brass to-brass-dark text-navy-950 flex items-center justify-center font-serif font-bold text-xl shadow-glow-brass group-hover:scale-105 transition-all">
                <span>S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold text-ivory tracking-tight group-hover:text-brass transition-colors">
                  {practiceConfig.name}
                </span>
                <span className="text-[11px] text-sage font-sans tracking-wide uppercase">
                  {isLab
                    ? 'Dental Prosthetics Lab'
                    : isOrtho
                    ? 'Specialist Orthodontics'
                    : isDenture
                    ? 'Denture Care Clinic'
                    : `${practiceConfig.city} Clinic`}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
              <Link
                href="/"
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-brass ${
                  pathname === '/' ? 'text-brass font-semibold' : 'text-ivory/90'
                }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-brass ${
                  pathname === '/about' ? 'text-brass font-semibold' : 'text-ivory/90'
                }`}
              >
                About
              </Link>

              {/* Treatments Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => setMegaMenuOpen(true)}
                onMouseLeave={() => setMegaMenuOpen(false)}
              >
                <Link
                  href="/treatments"
                  className={`px-3 py-2 text-sm font-medium flex items-center gap-1 transition-colors hover:text-brass ${
                    pathname.startsWith('/treatments') ? 'text-brass font-semibold' : 'text-ivory/90'
                  }`}
                  aria-expanded={megaMenuOpen}
                >
                  {isLab ? 'Lab Services' : 'Treatments'}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      megaMenuOpen ? 'rotate-180 text-brass' : 'text-ivory/60'
                    }`}
                  />
                </Link>

                {/* Mega Menu Panel */}
                {megaMenuOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[780px] bg-navy-900/95 backdrop-blur-2xl border border-brass/30 shadow-elevated rounded-2xl p-6 grid grid-cols-3 gap-6 animate-fadeIn">
                    {categories.map((cat) => {
                      const items = treatmentsData.filter(
                        (t) => t.category === cat.id
                      );
                      if (items.length === 0) return null;
                      return (
                        <div key={cat.id} className="space-y-3">
                          <div className="flex items-center gap-2 pb-2 border-b border-navy-800 text-brass text-xs font-bold uppercase tracking-wider">
                            <cat.icon className="w-4 h-4 text-brass" />
                            {cat.title}
                          </div>
                          <ul className="space-y-1.5 text-sm">
                            {items.map((treatment) => (
                              <li key={treatment.slug}>
                                <Link
                                  href={`/treatments/${treatment.slug}`}
                                  className="text-ivory/80 hover:text-brass hover:translate-x-1 transition-all block py-1 font-sans text-xs"
                                >
                                  {treatment.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                    <div className="col-span-3 pt-3 border-t border-navy-800 flex items-center justify-between text-xs text-sage">
                      <span>Full written treatment estimates provided following clinical assessment.</span>
                      <Link
                        href="/treatments"
                        className="text-brass hover:underline font-semibold flex items-center gap-1"
                      >
                        View all treatments &rarr;
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/new-patients"
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-brass ${
                  pathname === '/new-patients' ? 'text-brass font-semibold' : 'text-ivory/90'
                }`}
              >
                {isLab ? 'Referrals' : 'New Patients'}
              </Link>

              <Link
                href="/fees"
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-brass ${
                  pathname === '/fees' ? 'text-brass font-semibold' : 'text-ivory/90'
                }`}
              >
                Fees
              </Link>

              <Link
                href="/team"
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-brass ${
                  pathname === '/team' ? 'text-brass font-semibold' : 'text-ivory/90'
                }`}
              >
                Our Team
              </Link>

              <Link
                href="/emergency-dentist"
                className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
                  pathname === '/emergency-dentist' ? 'text-brass font-semibold' : 'text-ivory/90 hover:text-brass'
                }`}
              >
                <AlertCircle className="w-3.5 h-3.5 text-brass" />
                Emergency
              </Link>

              <Link
                href="/contact"
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-brass ${
                  pathname === '/contact' ? 'text-brass font-semibold' : 'text-ivory/90'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Header Right CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${practiceConfig.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 text-ivory/90 hover:text-brass transition-colors text-sm font-medium"
              >
                <div className="w-8.5 h-8.5 rounded-full bg-navy-800 border border-navy-700 flex items-center justify-center text-brass">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>{practiceConfig.phone}</span>
              </a>

              <Link
                href={practiceConfig.bookingLink}
                className="bg-gradient-to-r from-brass via-brass-light to-brass text-navy-950 font-bold px-5 py-2.5 rounded-xl text-sm transition-all duration-300 shadow-glow-brass hover:scale-[1.02] flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-navy-950" />
                <span>{primaryCtaText}</span>
              </Link>
            </div>

            {/* Mobile Actions Header */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={`tel:${practiceConfig.phone.replace(/\s+/g, '')}`}
                className="w-10 h-10 rounded-xl bg-gradient-to-r from-brass to-brass-light text-navy-950 flex items-center justify-center font-bold shadow-soft"
                aria-label="Call Practice"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                className="w-10 h-10 rounded-xl bg-navy-800 border border-navy-700 text-ivory flex items-center justify-center"
                aria-label={mobileNavOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileNavOpen}
              >
                {mobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </>
  );
};
