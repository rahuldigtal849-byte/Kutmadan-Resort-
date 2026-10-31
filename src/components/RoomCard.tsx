import React, { useState } from 'react';
import { Users, Wifi, Tv, Bath, Wind, Eye, MessageSquare, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { RoomCategory } from '../types';
import { createQuickRoomWhatsAppUrl } from '../utils/whatsapp';

interface RoomCardProps {
  room: RoomCategory;
  onViewDetails: (room: RoomCategory) => void;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room, onViewDetails }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  const handleBookNow = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = createQuickRoomWhatsAppUrl(room.name);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden group">
      {/* Room Image Carousel / Viewer */}
      <div className="relative h-60 sm:h-64 w-full bg-stone-100 overflow-hidden">
        <img
          src={room.images[activeImageIndex]}
          alt={`${room.name} at Kutmadan Resort Cherrapunji`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* Image index pill */}
        {room.images.length > 1 && (
          <div className="absolute bottom-2.5 right-2.5 bg-black/60 backdrop-blur-sm text-white text-[11px] px-2 py-0.5 rounded-md font-mono">
            {activeImageIndex + 1}/{room.images.length}
          </div>
        )}

        {/* Carousel controls if multi-image */}
        {room.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              aria-label="Previous room photo"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition opacity-0 group-hover:opacity-100 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              aria-label="Next room photo"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition opacity-0 group-hover:opacity-100 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Occupancy Badge */}
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-stone-800 text-xs font-semibold px-2.5 py-1 rounded-lg shadow-sm flex items-center gap-1.5">
          <Users className="w-3.5 h-3.5 text-emerald-800" />
          <span>{room.occupancy}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        {/* Room Title */}
        <div className="mb-2">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 group-hover:text-[#1B4332] transition">
            {room.name}
          </h3>
          <p className="text-xs text-stone-500 font-medium mt-0.5">
            {room.mealsIncluded}
          </p>
        </div>

        {/* Description snippet */}
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4 line-clamp-2">
          {room.description}
        </p>

        {/* Verified Amenities (Zero-Pill Discipline with subtle clean pills) */}
        <div className="border-t border-stone-100 pt-3 mb-5 flex-grow">
          <div className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider mb-2">
            Verified Amenities
          </div>
          <div className="flex flex-wrap gap-1.5">
            {room.amenities.map((item, idx) => (
              <span
                key={idx}
                className="bg-stone-50 border border-stone-200/80 text-stone-700 text-[11px] px-2 py-0.5 rounded-md flex items-center gap-1"
              >
                <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Price & Action Buttons */}
        <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl sm:text-3xl font-bold font-serif text-[#1B4332] tabular-nums">
                {room.price}
              </span>
              <span className="text-xs text-stone-500">{room.priceSubtext}</span>
            </div>
            <div className="text-[10px] text-stone-400">Exclusive WhatsApp Booking</div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onViewDetails(room)}
              className="flex-1 sm:flex-none px-3.5 py-2.5 rounded-xl border border-stone-300 hover:border-stone-400 text-stone-700 hover:text-stone-900 text-xs font-semibold transition cursor-pointer flex items-center justify-center gap-1"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>View Details</span>
            </button>

            <button
              onClick={handleBookNow}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1ebd59] text-stone-950 text-xs font-bold transition shadow-sm hover:shadow flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-stone-950" />
              <span>Book Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
