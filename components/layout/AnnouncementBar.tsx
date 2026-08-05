'use me';
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { practiceConfig } from '@/data/practice';
import { ArrowRight, X, ShieldAlert } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);

  if (!practiceConfig.announcementBar?.enabled || dismissed) {
    return null;
  }

  // Display status indicator based on practice status
  const getStatusBadge = () => {
    if (practiceConfig.status === 'private') {
      return 'Private Practice';
    }
    if (practiceConfig.status === 'mixed') {
      return 'NHS & Private Practice';
    }
    return 'NHS Care Provider';
  };

  return (
    <div className="bg-navy-900 text-ivory text-xs md:text-sm py-2 px-4 border-b border-brass/20 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="hidden sm:inline-flex items-center gap-1.5 bg-brass/20 text-brass-light text-xs px-2.5 py-0.5 rounded-full font-medium tracking-wide uppercase">
            <ShieldAlert className="w-3 h-3 text-brass" />
            {getStatusBadge()}
          </span>
          <span className="text-ivory/90 font-medium tracking-wide">
            {practiceConfig.announcementBar.message}
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {practiceConfig.announcementBar.link && (
            <Link
              href={practiceConfig.announcementBar.link}
              className="inline-flex items-center gap-1 text-brass hover:text-brass-light font-semibold transition-colors underline decoration-brass/40 underline-offset-4 hover:decoration-brass"
            >
              {practiceConfig.announcementBar.linkLabel || 'Learn more'}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
          <button
            onClick={() => setDismissed(true)}
            className="text-ivory/60 hover:text-ivory p-1 transition-colors rounded hover:bg-navy-800"
            aria-label="Dismiss announcement"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
