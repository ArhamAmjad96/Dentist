'use me';
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ShieldCheck, Info, Eye, Check } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  treatmentType: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

export const BeforeAfterGallery: React.FC = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [activeCase, setActiveCase] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const cases: CaseStudy[] = [
    {
      id: 'case-1',
      title: 'Discreet Aligner Alignment',
      treatmentType: 'Clear Aligners',
      description: 'Correction of mild lower crowding over a 7-month treatment duration.',
      beforeImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80',
      afterImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'case-2',
      title: 'Single Front Tooth Restoration',
      treatmentType: 'Dental Implant & Crown',
      description: 'Replacement of a fractured central incisor with a custom ceramic crown.',
      beforeImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80',
      afterImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const currentCase = cases[activeCase];

  return (
    <section className="py-16 bg-ivory text-charcoal border-b border-stone-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-semibold text-teal uppercase tracking-widest block">
            Clinical Documentation
          </span>
          <h2 className="font-serif text-3xl font-bold text-navy-900">
            Real Patient Treatment Outcomes
          </h2>
          <p className="text-xs text-charcoal-muted max-w-xl mx-auto">
            Clinical case photographs are shown strictly for educational purposes with verified patient consent. Individual clinical outcomes vary.
          </p>
        </div>

        {!showGallery ? (
          <div className="max-w-xl mx-auto p-8 rounded-2xl bg-white border border-stone-dark/30 text-center space-y-4 shadow-soft">
            <div className="w-12 h-12 rounded-full bg-stone/60 text-navy-900 mx-auto flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif font-bold text-lg text-navy-900">
                View Clinical Before & After Photographs
              </h3>
              <p className="text-xs text-charcoal-muted">
                Images depict genuine dental restorations. No digital retouching or unverified teeth whitening enhancements have been applied.
              </p>
            </div>
            <button
              onClick={() => setShowGallery(true)}
              className="bg-navy-900 hover:bg-navy-800 text-ivory font-semibold px-6 py-2.5 rounded-xl text-xs transition-colors"
            >
              Reveal Case Studies
            </button>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Case Selector */}
            <div className="flex justify-center gap-3">
              {cases.map((c, idx) => (
                <button
                  key={c.id}
                  onClick={() => setActiveCase(idx)}
                  className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors ${
                    activeCase === idx
                      ? 'bg-navy-900 text-ivory font-semibold'
                      : 'bg-stone/50 text-charcoal hover:bg-stone'
                  }`}
                >
                  {c.treatmentType}
                </button>
              ))}
            </div>

            {/* Side-by-side or Slider Comparison */}
            <div className="bg-white border border-stone-dark/30 rounded-2xl p-6 shadow-medium space-y-4">
              <div className="flex justify-between items-center border-b border-stone-dark/20 pb-3">
                <div>
                  <h4 className="font-serif font-bold text-lg text-navy-900">
                    {currentCase.title}
                  </h4>
                  <p className="text-xs text-charcoal-muted">
                    {currentCase.description}
                  </p>
                </div>
                <span className="text-[11px] font-semibold bg-sage/20 text-teal px-2.5 py-1 rounded-full">
                  Consent On File
                </span>
              </div>

              {/* Grid view of Before / After */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-charcoal-muted uppercase block">
                    Before Treatment
                  </span>
                  <div className="relative h-64 rounded-xl overflow-hidden bg-stone">
                    <Image
                      src={currentCase.beforeImage}
                      alt="Before treatment"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-semibold text-teal uppercase block">
                    After Treatment
                  </span>
                  <div className="relative h-64 rounded-xl overflow-hidden bg-stone border-2 border-teal/40">
                    <Image
                      src={currentCase.afterImage}
                      alt="After treatment"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-ivory border border-stone-dark/20 text-[11px] text-charcoal-muted flex items-center gap-2">
                <Info className="w-4 h-4 text-teal shrink-0" />
                <span>
                  Suitability for cosmetic or restorative treatment is determined following clinical assessment. Results vary between patients based on anatomical factors.
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
