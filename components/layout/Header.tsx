'use me';
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Calendar, Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { practiceConfig } from '@/data/practice';
import { MobileNav } from './MobileNav';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isTreatmentsHovered, setIsTreatmentsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/treatments', label: 'Treatments', hasDropdown: true },
    { href: '/reviews', label: 'Smile Gallery' },
    { href: '/about', label: 'About' },
    { href: '/fees', label: 'Fees' },
    { href: '/contact', label: 'Contact' },
  ];

  const featuredTreatments = [
    { title: 'Invisalign Clear Aligners', href: '/treatments/invisalign-aligners' },
    { title: 'Dental Implants', href: '/treatments/dental-implants' },
    { title: 'Composite Bonding', href: '/treatments/composite-bonding' },
    { title: 'Porcelain Veneers', href: '/treatments/composite-bonding' },
    { title: 'Teeth Whitening', href: '/treatments/teeth-whitening' },
    { title: 'General & Airflow Hygiene', href: '/treatments/dental-checkups' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white border-b border-[#DDE4E6] shadow-nordic-soft py-3.5'
            : 'bg-[#F8FAFA]/90 backdrop-blur-md border-b border-[#DDE4E6]/60 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-[#70AEB3] flex items-center justify-center text-white font-bold text-lg shadow-nordic-soft group-hover:bg-[#5A9499] transition-colors">
                St
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-lg sm:text-xl text-[#122A38] tracking-tight group-hover:text-[#70AEB3] transition-colors">
                  {practiceConfig.name}
                </span>
                <span className="text-[10px] text-[#122A38]/60 uppercase tracking-widest font-medium">
                  Dental Wellness • Mayfair
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.href}
                      className="relative py-2"
                      onMouseEnter={() => setIsTreatmentsHovered(true)}
                      onMouseLeave={() => setIsTreatmentsHovered(false)}
                    >
                      <Link
                        href={link.href}
                        className={`inline-flex items-center gap-1 text-sm font-semibold transition-colors ${
                          isActive || isTreatmentsHovered
                            ? 'text-[#70AEB3]'
                            : 'text-[#122A38] hover:text-[#70AEB3]'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isTreatmentsHovered ? 'rotate-180' : ''}`} />
                      </Link>

                      {/* Treatments Mega Menu */}
                      {isTreatmentsHovered && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white border border-[#DDE4E6] rounded-2xl p-3 shadow-nordic-card animate-fadeIn">
                          <div className="space-y-1">
                            {featuredTreatments.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block px-3 py-2 rounded-xl text-xs font-semibold text-[#122A38] hover:bg-[#E7F1F3] hover:text-[#70AEB3] transition-colors"
                              >
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-semibold transition-colors ${
                      isActive ? 'text-[#70AEB3]' : 'text-[#122A38] hover:text-[#70AEB3]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Right Action Bar */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href={`tel:${practiceConfig.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 text-xs font-bold text-[#122A38] hover:text-[#70AEB3] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#70AEB3]" />
                <span>{practiceConfig.phone}</span>
              </a>

              <Link href="/contact#appointment-form" className="btn-primary text-xs py-2.5 px-5">
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Consultation</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              className="lg:hidden p-2 rounded-xl text-[#122A38] hover:bg-[#E7F1F3] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Spacer to prevent header overlay */}
      <div className="h-16 sm:h-20" />

      {/* Mobile Nav Overlay */}
      <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />
    </>
  );
};
