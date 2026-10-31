import React, { useState } from 'react';
import { X, Users, CheckCircle2, MessageSquare, ChevronLeft, ChevronRight, ShieldCheck, Bed, Sparkles, MapPin } from 'lucide-react';
import { RoomCategory } from '../types';
import { createQuickRoomWhatsAppUrl, createWhatsAppBookingUrl } from '../utils/whatsapp';
import { RESERVATION_GUIDELINES } from '../data/resortData';

interface RoomDetailModalProps {
  room: RoomCategory | null;
  onClose: () => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({ room, onClose }) => {
  if (!room) return null;

  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const handleBookNow = () => {
    const url = createQuickRoomWhatsAppUrl(room.name);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div 
        className="bg-[#FAF8F5] rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl border border-stone-200 flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition cursor-pointer"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Body */}
        <div className="overflow-y-auto flex-grow p-4 sm:p-8 space-y-6">
          {/* Room Title Header */}
          <div className="pr-10">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                Official Category
              </span>
              <span className="text-xs text-stone-500 font-medium">{room.occupancy}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
              {room.name}
            </h2>
            <p className="text-stone-600 text-sm mt-1">{room.mealsIncluded}</p>
          </div>

          {/* Main Gallery Carousel */}
          <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden bg-stone-900">
            <img
              src={room.images[activePhotoIdx]}
              alt={`${room.name} view ${activePhotoIdx + 1}`}
              className="w-full h-full object-cover transition-all duration-300"
            />

            {room.images.length > 1 && (
              <>
                <button
                  onClick={() => setActivePhotoIdx((prev) => (prev - 1 + room.images.length) % room.images.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center cursor-pointer transition"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setActivePhotoIdx((prev) => (prev + 1) % room.images.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center cursor-pointer transition"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-3 py-1 rounded-lg backdrop-blur-sm">
              Photo {activePhotoIdx + 1} of {room.images.length}
            </div>
          </div>

          {/* Thumbnails Strip */}
          {room.images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              {room.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActivePhotoIdx(i)}
                  className={`w-20 h-16 rounded-lg overflow-hidden shrink-0 border-2 transition cursor-pointer ${
                    activePhotoIdx === i ? 'border-[#1B4332] scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Room Highlights Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-4 rounded-2xl border border-stone-200">
            <div>
              <div className="text-[11px] text-stone-500 uppercase tracking-wide">Tariff</div>
              <div className="text-xl font-serif font-bold text-[#1B4332] mt-0.5">{room.price}</div>
              <div className="text-[10px] text-stone-400">{room.priceSubtext}</div>
            </div>
            <div>
              <div className="text-[11px] text-stone-500 uppercase tracking-wide">Occupancy</div>
              <div className="text-sm font-semibold text-stone-800 mt-1 flex items-center gap-1">
                <Users className="w-4 h-4 text-emerald-800" />
                <span>{room.occupancy}</span>
              </div>
            </div>
            <div>
              <div className="text-[11px] text-stone-500 uppercase tracking-wide">Bedding</div>
              <div className="text-sm font-semibold text-stone-800 mt-1 flex items-center gap-1">
                <Bed className="w-4 h-4 text-emerald-800" />
                <span className="truncate">{room.bedType}</span>
              </div>
            </div>
            <div>
              <div className="text-[11px] text-stone-500 uppercase tracking-wide">View</div>
              <div className="text-sm font-semibold text-stone-800 mt-1 flex items-center gap-1">
                <MapPin className="w-4 h-4 text-emerald-800" />
                <span className="truncate">{room.view}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">Room Overview</h3>
            <p className="text-sm text-stone-700 leading-relaxed">{room.description}</p>
          </div>

          {/* Verified Amenities */}
          <div>
            <h3 className="text-lg font-serif font-bold text-stone-900 mb-3">Verified Amenities & Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {room.amenities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-stone-700 bg-white p-2.5 rounded-xl border border-stone-200/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
              {room.features.map((feat, idx) => (
                <div key={`feat-${idx}`} className="flex items-center gap-2 text-sm text-stone-700 bg-white p-2.5 rounded-xl border border-stone-200/80">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Official Reservation Guidelines Callout */}
          <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200">
            <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-700" />
              <span>Official Reservation Policy</span>
            </h4>
            <ul className="text-xs text-amber-900/90 space-y-1.5 list-disc pl-4">
              <li><strong>Booking will not be confirmed without advance payment.</strong></li>
              <li><strong>Same-day room availability cannot be guaranteed.</strong></li>
              <li>Official reservations are handled strictly via verified WhatsApp (+91 6207799112).</li>
            </ul>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="bg-white border-t border-stone-200 p-4 sm:p-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs text-stone-500">Official Direct Rate</div>
            <div className="text-2xl font-serif font-bold text-[#1B4332]">
              {room.price} <span className="text-xs font-sans text-stone-500 font-normal">{room.priceSubtext}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-5 py-3 rounded-xl border border-stone-300 text-stone-700 hover:text-stone-900 text-xs font-semibold cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={handleBookNow}
              className="bg-[#25D366] hover:bg-[#1ebd59] text-stone-950 font-bold px-6 py-3 rounded-xl text-sm flex items-center gap-2 shadow transition cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-stone-950" />
              <span>Book {room.name} on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
