import React from 'react';
import { ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { OFFICIAL_ROOMS, RESERVATION_GUIDELINES, RESORT_INFO } from '../data/resortData';
import { RoomCard } from '../components/RoomCard';
import { OfficialChannelsBanner } from '../components/OfficialChannelsBanner';
import { RoomCategory } from '../types';

interface RoomsViewProps {
  onViewRoomDetails: (room: RoomCategory) => void;
}

export const RoomsView: React.FC<RoomsViewProps> = ({ onViewRoomDetails }) => {
  return (
    <div className="py-12 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1B4332] bg-emerald-100/70 px-3.5 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Official Tariffs & Accommodations</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Our Six Official Room Categories
          </h1>
          <p className="text-stone-600 mt-4 text-base sm:text-lg leading-relaxed">
            Carefully curated rooms and stone cottages nestled in the serene heights of Sohra. Handpicked comforts, verified amenities, and direct WhatsApp reservations.
          </p>
        </div>

        {/* Security Notice */}
        <div className="mb-10 max-w-4xl mx-auto">
          <OfficialChannelsBanner compact={true} />
        </div>

        {/* Official Reservation Guidelines Callout (From reference website) */}
        <div className="mb-12 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-900">
              Important Reservation Guidelines
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-stone-900 mt-1">
              Please Note Before Reserving
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {RESERVATION_GUIDELINES.map((guideline, i) => (
              <div key={i} className="flex items-start gap-3 bg-[#FAF8F5] p-4 rounded-2xl border border-stone-200/70">
                <span className="w-6 h-6 rounded-full bg-[#1B4332] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {guideline}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* The Exact 6 Room Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OFFICIAL_ROOMS.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              onViewDetails={onViewRoomDetails}
            />
          ))}
        </div>

        {/* Extra Information Notice */}
        <div className="mt-16 text-center text-xs text-stone-500 max-w-2xl mx-auto">
          Rates displayed represent official direct tariffs. All booking enquiries are confirmed directly with the Kutmadan Resort desk via WhatsApp (+91 6207799112).
        </div>
      </div>
    </div>
  );
};
