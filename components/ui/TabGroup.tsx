'use me';
'use client';

import React, { useState } from 'react';

export interface TabItem {
  id: string;
  label: string;
  badge?: string;
  content: React.ReactNode;
}

interface TabGroupProps {
  tabs: TabItem[];
  defaultTabId?: string;
  className?: string;
}

export const TabGroup: React.FC<TabGroupProps> = ({
  tabs,
  defaultTabId,
  className = '',
}) => {
  const [activeId, setActiveId] = useState(defaultTabId || tabs[0]?.id);

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Tab Buttons Bar */}
      <div className="flex flex-wrap gap-2 border-b border-navy-800 pb-3">
        {tabs.map((tab) => {
          const isActive = activeId === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveId(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                isActive
                  ? 'bg-brass text-navy-900 shadow-soft'
                  : 'bg-navy-900 text-sage hover:text-ivory border border-navy-800'
              }`}
            >
              <span>{tab.label}</span>
              {tab.badge && (
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                    isActive ? 'bg-navy-900 text-brass' : 'bg-navy-800 text-sage'
                  }`}
                >
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Tab Content Panel */}
      <div className="animate-fadeIn">
        {tabs.find((tab) => tab.id === activeId)?.content}
      </div>
    </div>
  );
};
