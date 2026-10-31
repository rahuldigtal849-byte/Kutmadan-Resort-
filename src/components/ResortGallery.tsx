import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2, ExternalLink } from 'lucide-react';
import { RESORT_INFO, OFFICIAL_ROOMS } from '../data/resortData';

interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: 'exterior' | 'room' | 'landscape';
  caption: string;
}

export const ResortGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'ext-1',
      url: '/images/hero.jpg',
      title: 'Kutmadan Resort Panorama',
      category: 'landscape',
      caption: 'Kutmadan Resort stone cottages overlooking the scenic rolling hills of Sohra Cherrapunji at sunrise.'
    },
    {
      id: 'ext-2',
      url: '/images/exterior.jpg',
      title: 'Resort Cottages & Gardens',
      category: 'exterior',
      caption: 'Traditional stone cottage architecture with manicured mountain flower pathways.'
    },
    {
      id: 'rm-loft',
      url: '/images/rooms/loft-1.jpg',
      title: 'AC Suites Loft Room - Master Bedroom',
      category: 'room',
      caption: 'Spacious loft suite with two king size beds and bi-level architectural design.'
    },
    {
      id: 'rm-loft-pool',
      url: '/images/rooms/loft-2.jpg',
      title: 'AC Suites Loft - Private Pool & Terrace',
      category: 'room',
      caption: 'Exclusive private swimming pool attached to the AC Suites Loft cottage.'
    },
    {
      id: 'rm-suite',
      url: '/images/rooms/suite-1.jpg',
      title: 'AC Suites Room - Standalone Cottage',
      category: 'room',
      caption: 'Independent private stone cottage with panoramic balcony overlooking Cherrapunji canyons.'
    },
    {
      id: 'rm-deluxe',
      url: '/images/rooms/deluxe-1.jpg',
      title: 'AC Deluxe Room Interior',
      category: 'room',
      caption: 'Air-conditioned room featuring expansive windows with scenic mountain views.'
    },
    {
      id: 'rm-family',
      url: '/images/rooms/family-1.jpg',
      title: 'AC Family Room',
      category: 'room',
      caption: 'Spacious family accommodation with multiple comfortable beds and mountain views.'
    },
    {
      id: 'rm-double',
      url: '/images/rooms/double-1.jpg',
      title: 'AC Double Room',
      category: 'room',
      caption: 'Valley-facing double room with climate control and inclusive meals.'
    },
    {
      id: 'rm-nonac',
      url: '/images/rooms/nonac-1.jpg',
      title: 'Non-AC Room',
      category: 'room',
      caption: 'Cozy and budget-friendly sanctuary equipped with ceiling fan and ensuite geyser.'
    }
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="py-12 sm:py-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#1B4332] bg-emerald-100/70 px-3 py-1 rounded-full mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Resort Visuals</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Resort Photo Gallery
          </h2>
          <p className="text-stone-600 mt-3 text-sm sm:text-base leading-relaxed">
            Take a visual tour through Kutmadan Resort cottages, rooms, private pools, and the breathtaking scenery of Sohra, Meghalaya.
          </p>
          <div className="mt-3">
            <a
              href={RESORT_INFO.googlePhotosLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-emerald-800 hover:text-emerald-950 font-semibold underline"
            >
              <span>View Official Google Photos Reference &rarr;</span>
            </a>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'exterior', label: 'Cottages & Grounds' },
            { id: 'room', label: 'Room Accommodations' },
            { id: 'landscape', label: 'Surrounding Landscapes' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                selectedCategory === tab.id
                  ? 'bg-[#1B4332] text-white shadow-sm'
                  : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-stone-200 cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] block mb-1">
                  {item.category}
                </span>
                <h4 className="text-base sm:text-lg font-serif font-bold text-white group-hover:text-[#D4AF37] transition">
                  {item.title}
                </h4>
                <p className="text-xs text-stone-300 mt-1 line-clamp-2">
                  {item.caption}
                </p>
              </div>

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Full-Screen Lightbox Modal */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={prevLightbox}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div
              className="max-w-4xl max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredItems[lightboxIndex].url}
                alt={filteredItems[lightboxIndex].title}
                className="max-w-full max-h-[70vh] rounded-2xl object-contain shadow-2xl"
              />
              <div className="mt-4 text-center text-white max-w-xl">
                <h3 className="text-xl font-serif font-bold text-[#D4AF37]">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 mt-1">
                  {filteredItems[lightboxIndex].caption}
                </p>
                <div className="text-[11px] text-stone-500 mt-2 font-mono">
                  {lightboxIndex + 1} of {filteredItems.length}
                </div>
              </div>
            </div>

            <button
              onClick={nextLightbox}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
