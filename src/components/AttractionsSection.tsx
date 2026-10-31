import React, { useState } from 'react';
import { MapPin, ExternalLink, Navigation, Compass, Filter } from 'lucide-react';
import { TOURIST_ATTRACTIONS } from '../data/resortData';
import { TouristAttraction } from '../types';

export const AttractionsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredAttractions = selectedCategory === 'all'
    ? TOURIST_ATTRACTIONS
    : TOURIST_ATTRACTIONS.filter(a => a.category === selectedCategory);

  return (
    <div className="py-12 sm:py-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Cherrapunji (Sohra) Sightseeing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            14 Famous Tourist Attractions
          </h2>
          <p className="text-stone-600 mt-3 text-sm sm:text-base leading-relaxed">
            Discover the dramatic waterfalls, prehistoric caves, and bio-engineered living root bridges surrounding Sohra.
          </p>
          <p className="text-xs text-stone-500 mt-1 italic">
            *Please note: These are independent regional destinations and natural wonders across Sohra, not resort-operated facilities.
          </p>
        </div>

        {/* Category Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All 14 Destinations' },
            { id: 'waterfall', label: 'Waterfalls' },
            { id: 'cave', label: 'Caves & Fossils' },
            { id: 'trek', label: 'Living Root Bridges' },
            { id: 'park', label: 'Parks & Viewpoints' },
            { id: 'culture', label: 'Villages & Culture' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                selectedCategory === tab.id
                  ? 'bg-[#1B4332] text-white shadow-sm'
                  : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200 hover:border-stone-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredAttractions.map((attraction, idx) => (
            <div
              key={attraction.id}
              className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group"
            >
              <div className="relative h-52 sm:h-56 bg-stone-100 overflow-hidden">
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded">
                  {attraction.category}
                </div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-stone-800 text-[11px] font-bold px-2 py-0.5 rounded font-mono">
                  #{idx + 1}
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-serif font-bold text-stone-900 group-hover:text-[#1B4332] transition">
                  {attraction.name}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mt-2 mb-4 flex-grow">
                  {attraction.description}
                </p>

                <div className="bg-[#FAF8F5] p-3 rounded-xl border border-stone-100 mb-4 text-xs">
                  <span className="font-semibold text-stone-800 block mb-0.5">Why tourists visit:</span>
                  <span className="text-stone-600 leading-relaxed">{attraction.whyVisit}</span>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div className="text-[11px] text-stone-500 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-800" />
                    <span>Sohra Region</span>
                  </div>

                  <a
                    href={attraction.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B4332] hover:text-[#081C15] bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg transition"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
