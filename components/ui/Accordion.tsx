'use me';
'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpenId,
  className = '',
}) => {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="border border-navy-800 bg-navy-900/60 rounded-xl overflow-hidden transition-colors hover:border-brass/30"
          >
            <button
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
              id={`accordion-button-${item.id}`}
              className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-ivory font-serif font-semibold text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-brass"
            >
              <span>{item.title}</span>
              <ChevronDown
                className={`w-5 h-5 text-brass transition-transform duration-200 shrink-0 ml-4 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div
                id={`accordion-content-${item.id}`}
                role="region"
                aria-labelledby={`accordion-button-${item.id}`}
                className="px-4 pb-5 sm:px-5 sm:pb-6 text-sage text-sm leading-relaxed border-t border-navy-800/60 animate-fadeIn"
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
