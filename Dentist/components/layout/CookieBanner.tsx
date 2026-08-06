'use me';
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, Settings, Check, X } from 'lucide-react';

interface CookiePreferences {
  essential: boolean; // Always true
  analytics: boolean;
  marketing: boolean;
}

export const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem('cookie_consent_preferences');
    if (!saved) {
      setShowBanner(true);
    } else {
      try {
        setPreferences(JSON.parse(saved));
      } catch (e) {
        setShowBanner(true);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const newPrefs = { essential: true, analytics: true, marketing: true };
    localStorage.setItem('cookie_consent_preferences', JSON.stringify(newPrefs));
    setPreferences(newPrefs);
    setShowBanner(false);
    setShowModal(false);
  };

  const handleRejectAll = () => {
    const newPrefs = { essential: true, analytics: false, marketing: false };
    localStorage.setItem('cookie_consent_preferences', JSON.stringify(newPrefs));
    setPreferences(newPrefs);
    setShowBanner(false);
    setShowModal(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie_consent_preferences', JSON.stringify(preferences));
    setShowBanner(false);
    setShowModal(false);
  };

  if (!showBanner && !showModal) return null;

  return (
    <>
      {/* Banner */}
      {showBanner && !showModal && (
        <div className="fixed bottom-16 lg:bottom-6 left-4 right-4 max-w-2xl mx-auto bg-navy-900/95 backdrop-blur-md border border-navy-700 text-ivory p-5 rounded-2xl shadow-elevated z-50 animate-fadeIn">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-brass/20 text-brass flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-3 text-sm">
              <h3 className="font-serif font-semibold text-ivory text-base">
                Your Privacy & Cookie Preferences
              </h3>
              <p className="text-sage text-xs leading-relaxed">
                We use essential cookies to make our website work securely. With your consent, we also use optional analytics cookies to help us improve site performance and patient experience.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <button
                  onClick={handleAcceptAll}
                  className="bg-brass hover:bg-brass-dark text-navy-900 font-bold px-4 py-2 rounded-lg text-xs transition-colors"
                >
                  Accept All
                </button>
                <button
                  onClick={handleRejectAll}
                  className="bg-navy-800 hover:bg-navy-700 text-ivory font-medium px-4 py-2 rounded-lg text-xs border border-navy-700 transition-colors"
                >
                  Reject Non-Essential
                </button>
                <button
                  onClick={() => setShowModal(true)}
                  className="text-brass hover:underline font-medium text-xs px-2 py-2 flex items-center gap-1"
                >
                  <Settings className="w-3.5 h-3.5" />
                  Manage Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Preferences Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-navy-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-navy-900 border border-navy-700 text-ivory max-w-lg w-full rounded-2xl p-6 shadow-elevated space-y-6">
            <div className="flex items-center justify-between border-b border-navy-800 pb-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brass" />
                <h3 className="font-serif font-semibold text-lg">
                  Cookie Settings
                </h3>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-sage hover:text-ivory p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm">
              {/* Category 1: Essential */}
              <div className="p-3 rounded-xl bg-navy-800/60 border border-navy-700/60 flex items-center justify-between">
                <div className="space-y-1">
                  <span className="font-semibold text-ivory block text-xs">
                    Strictly Necessary Cookies
                  </span>
                  <p className="text-sage text-[11px]">
                    Required for core website security, session management, and basic functionality. Cannot be disabled.
                  </p>
                </div>
                <span className="bg-navy-700 text-sage text-[10px] font-bold px-2 py-1 rounded">
                  Always Active
                </span>
              </div>

              {/* Category 2: Analytics */}
              <div className="p-3 rounded-xl bg-navy-800/60 border border-navy-700/60 flex items-center justify-between">
                <div className="space-y-1 pr-4">
                  <span className="font-semibold text-ivory block text-xs">
                    Analytics & Performance
                  </span>
                  <p className="text-sage text-[11px]">
                    Helps us understand how visitors interact with the site anonymously to improve patient service.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) =>
                      setPreferences({ ...preferences, analytics: e.target.checked })
                    }
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-navy-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brass"></div>
                </label>
              </div>

              {/* Category 3: Marketing */}
              <div className="p-3 rounded-xl bg-navy-800/60 border border-navy-700/60 flex items-center justify-between">
                <div className="space-y-1 pr-4">
                  <span className="font-semibold text-ivory block text-xs">
                    Marketing & Local Targeting
                  </span>
                  <p className="text-sage text-[11px]">
                    Allows tailored local map directions and relevant appointment reminders.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) =>
                      setPreferences({ ...preferences, marketing: e.target.checked })
                    }
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-navy-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brass"></div>
                </label>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 border-t border-navy-800 pt-4">
              <button
                onClick={handleSavePreferences}
                className="bg-brass hover:bg-brass-dark text-navy-900 font-bold px-5 py-2.5 rounded-lg text-xs transition-colors"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
