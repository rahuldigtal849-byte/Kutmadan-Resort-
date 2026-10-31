import React from 'react';
import { Camera, Footprints, Compass, Navigation, Zap, Coffee, Clock, Users, AlertCircle } from 'lucide-react';
import { RESORT_ACTIVITIES } from '../data/resortData';

export const ActivitiesSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Camera': return <Camera className="w-5 h-5 text-emerald-800" />;
      case 'Footprints': return <Footprints className="w-5 h-5 text-emerald-800" />;
      case 'Compass': return <Compass className="w-5 h-5 text-emerald-800" />;
      case 'Navigation': return <Navigation className="w-5 h-5 text-emerald-800" />;
      case 'Zap': return <Zap className="w-5 h-5 text-emerald-800" />;
      case 'Coffee': return <Coffee className="w-5 h-5 text-emerald-800" />;
      default: return <Compass className="w-5 h-5 text-emerald-800" />;
    }
  };

  return (
    <div className="py-12 sm:py-16 bg-white border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#1B4332]">
            Cherrapunji Adventures & Sightseeing
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 mt-2">
            Activities & Experiences
          </h2>
          <p className="text-stone-600 mt-3 text-sm sm:text-base leading-relaxed">
            From awe-inspiring treks down to living root bridges to scenic cloud-capped canyon drives and subterranean cave explorations.
          </p>
        </div>

        {/* Important Activity Advisory Box */}
        <div className="mb-10 bg-stone-50 border border-stone-200 rounded-2xl p-4 sm:p-5 flex items-start gap-3 max-w-4xl mx-auto">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs text-stone-700 space-y-1">
            <div className="font-bold text-stone-900 uppercase tracking-wide">
              Important Sightseeing & Activity Notes
            </div>
            <p>
              Sightseeing and outdoor activities in Cherrapunji are independent excursions across Meghalaya. Certain activities require separate entry tickets, local guides, additional charges, and suitable weather conditions. Activities such as ziplining and guided treks are subject to independent local operator availability.
            </p>
          </div>
        </div>

        {/* Activities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESORT_ACTIVITIES.map((act) => (
            <div
              key={act.id}
              className="bg-[#FAF8F5] rounded-2xl p-6 border border-stone-200/90 shadow-sm hover:shadow transition-all flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                {getIcon(act.iconName)}
              </div>

              <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">
                {act.title}
              </h3>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4 flex-grow">
                {act.description}
              </p>

              <div className="space-y-2 pt-3 border-t border-stone-200 text-xs">
                <div className="flex items-center justify-between text-stone-600">
                  <span className="flex items-center gap-1 text-stone-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Duration:</span>
                  </span>
                  <span className="font-semibold text-stone-800">{act.duration}</span>
                </div>

                <div className="flex items-center justify-between text-stone-600">
                  <span className="flex items-center gap-1 text-stone-500">
                    <Users className="w-3.5 h-3.5" />
                    <span>Suitability:</span>
                  </span>
                  <span className="font-semibold text-stone-800">{act.suitability}</span>
                </div>

                <div className="bg-amber-50/70 text-amber-900 p-2.5 rounded-lg border border-amber-200/60 text-[11px] leading-relaxed mt-2">
                  <strong className="block text-amber-950">Notice:</strong>
                  {act.importantNote}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
