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
      if (window.window.scrollY > 20) {
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
    ? 'Submit Referral'
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
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200'
            : 'bg-white text-slate-900 py-4 border-b border-slate-200'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            {/* Left Side: Favicon & Clinic Name */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none rounded-lg shrink-0"
            >
              <div className="w-10 h-10 rounded-2xl bg-cyan-600 text-white flex items-center justify-center font-serif font-bold text-xl shadow-md group-hover:scale-105 transition-all">
                <span>S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base sm:text-lg font-bold text-slate-950 tracking-tight group-hover:text-cyan-700 transition-colors whitespace-nowrap">
                  {practiceConfig.name}
                </span>
                <span className="text-[10px] sm:text-[11px] text-slate-600 font-sans tracking-wide uppercase font-semibold whitespace-nowrap">
                  {isLab
                    ? 'Dental Laboratory'
                    : isOrtho
                    ? 'Specialist Orthodontics'
                    : isDenture
                    ? 'Denture Care Clinic'
                    : `${practiceConfig.city} Clinic`}
                </span>
              </div>
            </Link>

            {/* Middle Section: Button Pills for Navigation Items with Space Between */}
            <nav className="hidden xl:flex items-center gap-2.5 2xl:gap-3 shrink-0" aria-label="Main Navigation">
              {/* Home Pill Button */}
              <Link
                href="/"
                className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all shadow-sm ${
                  pathname === '/'
                    ? 'bg-cyan-600 text-white shadow-md'
                    : 'bg-slate-100 hover:bg-cyan-600 hover:text-white text-slate-800 border border-slate-200'
                }`}
              >
                Home
              </Link>

              {/* About Pill Button */}
              <Link
                href="/about"
                className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all shadow-sm ${
                  pathname === '/about'
                    ? 'bg-cyan-600 text-white shadow-md'
                    : 'bg-slate-100 hover:bg-cyan-600 hover:text-white text-slate-800 border border-slate-200'
                }`}
              >
                About
              </Link>

              {/* Treatments Pill Button (with Dropdown) */}
              <div
                className="relative"
                onMouseEnter={() => setMegaMenuOpen(true)}
                onMouseLeave={() => setMegaMenuOpen(false)}
              >
                <Link
                  href="/treatments"
                  className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap flex items-center gap-1.5 transition-all shadow-sm ${
                    pathname.startsWith('/treatments')
                      ? 'bg-cyan-600 text-white shadow-md'
                      : 'bg-slate-100 hover:bg-cyan-600 hover:text-white text-slate-800 border border-slate-200'
                  }`}
                  aria-expanded={megaMenuOpen}
                >
                  <span>{isLab ? 'Lab Services' : 'Treatments'}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      megaMenuOpen ? 'rotate-180' : ''
                    }`}
                  />
                </Link>

                {/* Clean Mega Menu Panel */}
                {megaMenuOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[760px] bg-white border border-slate-200 shadow-2xl rounded-2xl p-6 grid grid-cols-3 gap-6 animate-fadeIn mt-2 z-50">
                    {categories.map((cat) => {
                      const items = treatmentsData.filter(
                        (t) => t.category === cat.id
                      );
                      if (items.length === 0) return null;
                      return (
                        <div key={cat.id} className="space-y-3">
                          <div className="flex items-center gap-2 pb-2 border-b border-slate-100 text-cyan-700 text-xs font-bold uppercase tracking-wider">
                            <cat.icon className="w-4 h-4 text-cyan-600" />
                            {cat.title}
                          </div>
                          <ul className="space-y-1.5 text-xs font-medium">
                            {items.map((treatment) => (
                              <li key={treatment.slug}>
                                <Link
                                  href={`/treatments/${treatment.slug}`}
                                  className="text-slate-700 hover:text-cyan-700 hover:translate-x-1 transition-all block py-1 font-sans"
                                >
                                  {treatment.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                    <div className="col-span-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                      <span>Full written estimates provided following clinical consultation.</span>
                      <Link
                        href="/treatments"
                        className="text-cyan-700 hover:text-cyan-800 font-bold flex items-center gap-1 underline"
                      >
                        View all treatments &rarr;
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* New Patients Pill Button */}
              <Link
                href="/new-patients"
                className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all shadow-sm ${
                  pathname === '/new-patients'
                    ? 'bg-cyan-600 text-white shadow-md'
                    : 'bg-slate-100 hover:bg-cyan-600 hover:text-white text-slate-800 border border-slate-200'
                }`}
              >
                {isLab ? 'Referrals' : 'New Patients'}
              </Link>

              {/* Fees Pill Button */}
              <Link
                href="/fees"
                className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all shadow-sm ${
                  pathname === '/fees'
                    ? 'bg-cyan-600 text-white shadow-md'
                    : 'bg-slate-100 hover:bg-cyan-600 hover:text-white text-slate-800 border border-slate-200'
                }`}
              >
                Fees
              </Link>

              {/* Our Team Pill Button */}
              <Link
                href="/team"
                className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all shadow-sm ${
                  pathname === '/team'
                    ? 'bg-cyan-600 text-white shadow-md'
                    : 'bg-slate-100 hover:bg-cyan-600 hover:text-white text-slate-800 border border-slate-200'
                }`}
              >
                Our Team
              </Link>

              {/* Emergency Pill Button */}
              <Link
                href="/emergency-dentist"
                className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap flex items-center gap-1.5 transition-all shadow-sm ${
                  pathname === '/emergency-dentist'
                    ? 'bg-cyan-600 text-white shadow-md'
                    : 'bg-slate-100 hover:bg-cyan-600 hover:text-white text-slate-800 border border-slate-200'
                }`}
              >
                <AlertCircle className="w-3.5 h-3.5 text-cyan-600 group-hover:text-white" />
                <span>Emergency</span>
              </Link>

              {/* Contact Pill Button */}
              <Link
                href="/contact"
                className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all shadow-sm ${
                  pathname === '/contact'
                    ? 'bg-cyan-600 text-white shadow-md'
                    : 'bg-slate-100 hover:bg-cyan-600 hover:text-white text-slate-800 border border-slate-200'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right Side: Phone Badge & Book an Appointment Button */}
            <div className="hidden lg:flex items-center gap-4 shrink-0">
              <a
                href={`tel:${practiceConfig.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-slate-50 border border-slate-200 text-slate-950 hover:text-cyan-700 transition-all text-xs font-bold whitespace-nowrap shadow-sm"
              >
                <div className="w-6.5 h-6.5 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700 shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>{practiceConfig.phone}</span>
              </a>

              <Link
                href={practiceConfig.bookingLink}
                className="bg-cyan-950 hover:bg-cyan-900 text-white font-bold px-6 py-2.5 rounded-2xl text-xs sm:text-sm transition-all duration-300 shadow-md hover:scale-[1.02] flex items-center gap-2 whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 text-cyan-300" />
                <span>{primaryCtaText}</span>
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="flex xl:hidden items-center gap-2">
              <a
                href={`tel:${practiceConfig.phone.replace(/\s+/g, '')}`}
                className="w-10 h-10 rounded-xl bg-cyan-600 text-white flex items-center justify-center font-bold shadow-sm"
                aria-label="Call Practice"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 flex items-center justify-center"
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
