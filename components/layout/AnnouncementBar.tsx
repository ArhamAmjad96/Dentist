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
    <div className="bg-cyan-950 text-white text-xs md:text-sm py-2.5 px-4 border-b border-white/10 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="hidden sm:inline-flex items-center gap-1.5 bg-cyan-800 text-white text-[11px] px-3 py-0.5 rounded-full font-bold tracking-wide uppercase">
            <ShieldAlert className="w-3 h-3 text-cyan-300" />
            {getStatusBadge()}
          </span>
          <span className="text-cyan-100 font-medium tracking-wide">
            {practiceConfig.announcementBar.message}
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {practiceConfig.announcementBar.link && (
            <Link
              href={practiceConfig.announcementBar.link}
              className="inline-flex items-center gap-1 text-cyan-300 hover:text-white font-bold transition-colors underline decoration-cyan-400/40 underline-offset-4"
            >
              {practiceConfig.announcementBar.linkLabel || 'Learn more'}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
          <button
            onClick={() => setDismissed(true)}
            className="text-cyan-200 hover:text-white p-1 transition-colors rounded hover:bg-cyan-900"
            aria-label="Dismiss announcement"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
