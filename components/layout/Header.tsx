'use me';
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { practiceConfig } from '@/data/practice';
import {
  Calendar,
  ChevronDown,
  Menu,
  X,
  Phone,
  Sparkles,
  Shield,
  Stethoscope,
  Smile,
  CheckCircle,
} from 'lucide-react';
import { MobileNav } from './MobileNav';
import { treatmentsData } from '@/data/treatments';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();

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

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Treatments', href: '/treatments', hasDropdown: true },
    { name: 'Smile Gallery', href: '/reviews' },
    { name: 'About', href: '/about' },
    { name: 'Fees', href: '/fees' },
    { name: 'Contact', href: '/contact' },
  ];

  const categories = [
    { id: 'cosmetic', title: 'Cosmetic Dentistry', icon: Sparkles },
    { id: 'orthodontics', title: 'Invisalign & Aligners', icon: Sparkles },
    { id: 'implants', title: 'Dental Implants', icon: Smile },
    { id: 'general', title: 'General Dentistry', icon: Stethoscope },
    { id: 'restorative', title: 'Restorative Care', icon: Shield },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-clinic-soft py-3.5 border-b border-[#CCD6CF]/50'
            : 'bg-[#F5F2EB] py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none rounded-lg"
              aria-label="St. James Clinic Home"
            >
              <div className="w-10 h-10 rounded-full bg-[#143C3A] text-white flex items-center justify-center font-serif text-xl font-bold transition-transform group-hover:scale-105 shadow-sm">
                S
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-[#1B1D1D] tracking-tight group-hover:text-[#143C3A] transition-colors leading-tight">
                  St. James Clinic
                </span>
                <span className="text-[10px] text-[#143C3A] font-sans tracking-widest uppercase font-semibold">
                  Dental & Cosmetic
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setMegaMenuOpen(true)}
                      onMouseLeave={() => setMegaMenuOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className={`text-sm font-medium transition-colors flex items-center gap-1 py-1 ${
                          pathname.startsWith('/treatments')
                            ? 'text-[#143C3A] font-semibold border-b-2 border-[#143C3A]'
                            : 'text-[#1B1D1D] hover:text-[#143C3A]'
                        }`}
                        aria-expanded={megaMenuOpen}
                      >
                        {link.name}
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            megaMenuOpen ? 'rotate-180 text-[#143C3A]' : 'text-[#1B1D1D]/60'
                          }`}
                        />
                      </Link>

                      {/* Treatments Dropdown Menu */}
                      {megaMenuOpen && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-white border border-[#CCD6CF]/70 shadow-clinic-elevated rounded-2xl p-6 grid grid-cols-2 gap-6 animate-fadeIn mt-2 z-50">
                          {categories.map((cat) => {
                            const items = treatmentsData.filter((t) => t.category === cat.id);
                            if (items.length === 0) return null;
                            return (
                              <div key={cat.id} className="space-y-2.5">
                                <div className="flex items-center gap-2 pb-1.5 border-b border-[#CCD6CF]/40 text-[#143C3A] text-xs font-semibold uppercase tracking-wider">
                                  <cat.icon className="w-3.5 h-3.5 text-[#B8926A]" />
                                  {cat.title}
                                </div>
                                <ul className="space-y-1 text-xs">
                                  {items.map((treatment) => (
                                    <li key={treatment.slug}>
                                      <Link
                                        href={`/treatments/${treatment.slug}`}
                                        className="text-[#1B1D1D]/80 hover:text-[#143C3A] hover:translate-x-0.5 transition-all block py-1 font-medium"
                                      >
                                        {treatment.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            );
                          })}
                          <div className="col-span-2 pt-3 border-t border-[#CCD6CF]/40 flex items-center justify-between text-xs text-[#1B1D1D]/70">
                            <span>Private consultations & comprehensive written plans.</span>
                            <Link
                              href="/treatments"
                              className="text-[#143C3A] font-semibold hover:underline flex items-center gap-1"
                            >
                              Explore all treatments &rarr;
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-medium transition-colors py-1 ${
                      isActive
                        ? 'text-[#143C3A] font-semibold border-b-2 border-[#143C3A]'
                        : 'text-[#1B1D1D] hover:text-[#143C3A]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${practiceConfig.phone.replace(/\s+/g, '')}`}
                className="text-xs font-semibold text-[#143C3A] hover:text-[#0E2A29] flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-[#CCD6CF]/30 transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{practiceConfig.phone}</span>
              </a>

              <Link
                href="/contact#appointment-form"
                className="btn-primary text-xs font-semibold"
              >
                <Calendar className="w-3.5 h-3.5 text-[#B8926A]" />
                <span>Book Consultation</span>
              </Link>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href={`tel:${practiceConfig.phone.replace(/\s+/g, '')}`}
                className="w-9 h-9 rounded-full bg-[#143C3A] text-white flex items-center justify-center shadow-sm"
                aria-label="Call Clinic"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                className="w-10 h-10 rounded-xl bg-white border border-[#CCD6CF] text-[#1B1D1D] flex items-center justify-center shadow-sm"
                aria-label={mobileNavOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileNavOpen}
              >
                {mobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </>
  );
};
