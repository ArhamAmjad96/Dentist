import React from 'react';
import { practiceConfig } from '@/data/practice';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Accessibility Statement | ${practiceConfig.name}`,
  description: `Accessibility Statement for ${practiceConfig.name}. Information on physical practice access and WCAG 2.2 AA digital accessibility compliance.`,
};

export default function AccessibilityPage() {
  return (
    <div className="bg-navy-900 text-ivory min-h-screen">
      <section className="py-16 bg-navy-950 border-b border-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-semibold text-brass uppercase tracking-widest block">
            Equal Access
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ivory">
            Accessibility Statement
          </h1>
        </div>
      </section>

      <section className="py-16 bg-ivory text-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-xs text-charcoal-muted leading-relaxed">
          <div className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-navy-900">1. Digital Website Accessibility (WCAG 2.2 AA)</h2>
            <p>
              {practiceConfig.name} is committed to ensuring digital accessibility for people of all abilities. We continuously improve user experience for everyone, applying the Web Content Accessibility Guidelines (WCAG 2.2 AA standards).
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Keyboard-navigable menus, accordions, and modals</li>
              <li>High-contrast text against background colors</li>
              <li>Visible focus indicators on interactive buttons and inputs</li>
              <li>Skip to main content link for keyboard and screen reader users</li>
              <li>Respect for user prefers-reduced-motion animation settings</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-navy-900">2. Physical Clinic Accessibility</h2>
            <p>
              {practiceConfig.accessibilityInfo}
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-navy-900">3. Feedback & Contact</h2>
            <p>
              If you experience any accessibility barriers on our website or require assistance visiting our clinic, please email {practiceConfig.email} or call {practiceConfig.phone}.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
