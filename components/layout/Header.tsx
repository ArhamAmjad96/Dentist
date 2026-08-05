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
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3.5 border-b border-slate-200'
            : 'bg-white text-slate-900 py-4.5 border-b border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none rounded-lg"
            >
              <div className="w-10 h-10 rounded-full bg-cyan-600 text-white flex items-center justify-center font-serif font-bold text-xl shadow-sm group-hover:scale-105 transition-all">
                <span>S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold text-slate-950 tracking-tight group-hover:text-cyan-700 transition-colors">
                  {practiceConfig.name}
                </span>
                <span className="text-[11px] text-slate-600 font-sans tracking-wide uppercase font-semibold">
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

            {/* Clean Desktop Navigation Bar */}
            <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
              <Link
                href="/"
                className={`text-sm font-bold transition-colors hover:text-cyan-700 ${
                  pathname === '/' ? 'text-cyan-700' : 'text-slate-800'
                }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`text-sm font-bold transition-colors hover:text-cyan-700 ${
                  pathname === '/about' ? 'text-cyan-700' : 'text-slate-800'
                }`}
              >
                About
              </Link>

              {/* Treatments Dropdown Menu */}
              <div
                className="relative"
                onMouseEnter={() => setMegaMenuOpen(true)}
                onMouseLeave={() => setMegaMenuOpen(false)}
              >
                <Link
                  href="/treatments"
                  className={`text-sm font-bold flex items-center gap-1 transition-colors hover:text-cyan-700 ${
                    pathname.startsWith('/treatments') ? 'text-cyan-700' : 'text-slate-800'
                  }`}
                  aria-expanded={megaMenuOpen}
                >
                  {isLab ? 'Lab Services' : 'Treatments'}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      megaMenuOpen ? 'rotate-180 text-cyan-700' : 'text-slate-500'
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

              <Link
                href="/new-patients"
                className={`text-sm font-bold transition-colors hover:text-cyan-700 ${
                  pathname === '/new-patients' ? 'text-cyan-700' : 'text-slate-800'
                }`}
              >
                {isLab ? 'Referrals' : 'New Patients'}
              </Link>

              <Link
                href="/fees"
                className={`text-sm font-bold transition-colors hover:text-cyan-700 ${
                  pathname === '/fees' ? 'text-cyan-700' : 'text-slate-800'
                }`}
              >
                Fees
              </Link>

              <Link
                href="/team"
                className={`text-sm font-bold transition-colors hover:text-cyan-700 ${
                  pathname === '/team' ? 'text-cyan-700' : 'text-slate-800'
                }`}
              >
                Our Team
              </Link>

              <Link
                href="/emergency-dentist"
                className={`text-sm font-bold transition-colors flex items-center gap-1 ${
                  pathname === '/emergency-dentist' ? 'text-cyan-700' : 'text-slate-800 hover:text-cyan-700'
                }`}
              >
                <AlertCircle className="w-4 h-4 text-cyan-600" />
                Emergency
              </Link>

              <Link
                href="/contact"
                className={`text-sm font-bold transition-colors hover:text-cyan-700 ${
                  pathname === '/contact' ? 'text-cyan-700' : 'text-slate-800'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href={`tel:${practiceConfig.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 text-slate-950 hover:text-cyan-700 transition-colors text-sm font-bold"
              >
                <div className="w-8.5 h-8.5 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-cyan-700">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>{practiceConfig.phone}</span>
              </a>

              <Link
                href={practiceConfig.bookingLink}
                className="bg-cyan-950 hover:bg-cyan-900 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all duration-300 shadow-sm hover:scale-[1.02] flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-cyan-300" />
                <span>{primaryCtaText}</span>
              </Link>
            </div>

            {/* Mobile Navigation Controls */}
            <div className="flex lg:hidden items-center gap-2">
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
