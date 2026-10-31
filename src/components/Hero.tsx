import React, { useState } from 'react';
import { Calendar, Users, Home as HomeIcon, User, Phone, MessageSquare, ChevronRight, Sparkles, MapPin } from 'lucide-react';
import { OFFICIAL_ROOMS, RESORT_INFO } from '../data/resortData';
import { BookingFormData } from '../types';
import { createWhatsAppBookingUrl } from '../utils/whatsapp';

interface HeroProps {
  onExploreRooms: () => void;
  onExploreAttractions: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreRooms, onExploreAttractions }) => {
  // Pre-fill tomorrow and day-after as default dates
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(dayAfter.getDate() + 3);

  const formatDate = (d: Date) => d.toISOString().split('T')[0];

  const [formData, setFormData] = useState<BookingFormData>({
    guestName: '',
    mobileNumber: '',
    roomCategory: OFFICIAL_ROOMS[1].name, // AC Deluxe Room default
    checkInDate: formatDate(tomorrow),
    checkOutDate: formatDate(dayAfter),
    adults: 2,
    children: 0,
    roomsCount: 1
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = createWhatsAppBookingUrl(formData);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative bg-[#081C15] text-white overflow-hidden">
      {/* Background Image with Gradient Scrim for Legibility */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="Kutmadan Resort Cherrapunji overlooking Sohra Valleys"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#081C15]/95 via-[#081C15]/80 to-[#081C15]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081C15] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hospitality Typography and Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-[#D4AF37]/50 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-xs font-semibold text-[#D4AF37] tracking-wider uppercase font-sans">
                Official Resort Website
              </span>
              <span className="text-stone-400 text-xs">·</span>
              <span className="text-xs text-stone-200">Sohra, Meghalaya</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.12]">
              Welcome to <span className="text-[#D4AF37]">Kutmadan Resort</span> Cherrapunji
            </h1>

            <p className="text-xl sm:text-2xl font-serif text-stone-200 italic font-light">
              Discover the Natural Beauty of Sohra, Meghalaya.
            </p>

            <p className="text-sm sm:text-base text-stone-300 max-w-2xl leading-relaxed">
              Experience the beauty of Cherrapunji with comfortable accommodation, beautiful surroundings, memorable sightseeing experiences and warm hospitality at Kutmadan Resort.
            </p>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-3 pt-2 pb-2 max-w-lg border-y border-stone-800/80">
              <div>
                <div className="text-2xl font-serif font-bold text-[#D4AF37]">6</div>
                <div className="text-xs text-stone-400">Official Rooms</div>
              </div>
              <div>
                <div className="text-2xl font-serif font-bold text-[#D4AF37]">14+</div>
                <div className="text-xs text-stone-400">Nearby Wonders</div>
              </div>
              <div>
                <div className="text-2xl font-serif font-bold text-[#D4AF37]">100%</div>
                <div className="text-xs text-stone-400">Direct WhatsApp</div>
              </div>
            </div>

            {/* Hero Navigation Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreRooms}
                className="bg-[#D4AF37] hover:bg-[#c59e37] text-stone-950 font-bold px-6 py-3.5 rounded-xl text-sm transition shadow-lg hover:shadow-[#D4AF37]/20 flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Rooms</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                href={RESORT_INFO.whatsappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#1ebd59] text-stone-950 font-bold px-6 py-3.5 rounded-xl text-sm transition shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-stone-950" />
                <span>Book Your Stay</span>
              </a>

              <button
                onClick={onExploreAttractions}
                className="bg-stone-900/80 hover:bg-stone-800 text-stone-200 border border-stone-700 font-semibold px-5 py-3.5 rounded-xl text-sm transition flex items-center gap-2 cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>Explore Tourist Places</span>
              </button>
            </div>
          </div>

          {/* Right Column: Premium Booking Enquiry Widget */}
          <div className="lg:col-span-5">
            <div className="bg-[#FAF8F5] text-stone-900 rounded-3xl p-6 sm:p-7 shadow-2xl border border-stone-200 relative">
              <div className="mb-5">
                <span className="text-[11px] font-bold tracking-widest uppercase text-emerald-900 bg-emerald-100 px-2.5 py-0.5 rounded">
                  Direct WhatsApp Reservation
                </span>
                <h3 className="text-2xl font-serif font-bold text-stone-900 mt-2">
                  Plan Your Sohra Stay
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Send details directly to our official WhatsApp booking desk.
                </p>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-4">
                {/* Room Category Select */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Select Room Category (Official 6 Categories)
                  </label>
                  <select
                    value={formData.roomCategory}
                    onChange={(e) => setFormData({ ...formData, roomCategory: e.target.value })}
                    className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-medium text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                  >
                    {OFFICIAL_ROOMS.map((room) => (
                      <option key={room.id} value={room.name}>
                        {room.name} — {room.price} {room.priceSubtext} ({room.occupancy})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Dates Row */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-emerald-800" />
                      <span>Check-in Date</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.checkInDate}
                      onChange={(e) => setFormData({ ...formData, checkInDate: e.target.value })}
                      className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs sm:text-sm font-medium text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-emerald-800" />
                      <span>Check-out Date</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.checkOutDate}
                      onChange={(e) => setFormData({ ...formData, checkOutDate: e.target.value })}
                      className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs sm:text-sm font-medium text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                    />
                  </div>
                </div>

                {/* Occupancy Row */}
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                      Adults (12+)
                    </label>
                    <select
                      value={formData.adults}
                      onChange={(e) => setFormData({ ...formData, adults: parseInt(e.target.value) })}
                      className="w-full bg-white border border-stone-300 rounded-xl px-2.5 py-2 text-xs font-medium text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                    >
                      {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Adult' : 'Adults'}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                      Children
                    </label>
                    <select
                      value={formData.children}
                      onChange={(e) => setFormData({ ...formData, children: parseInt(e.target.value) })}
                      className="w-full bg-white border border-stone-300 rounded-xl px-2.5 py-2 text-xs font-medium text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                    >
                      {[0, 1, 2, 3, 4].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Child' : 'Children'}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                      Rooms
                    </label>
                    <select
                      value={formData.roomsCount}
                      onChange={(e) => setFormData({ ...formData, roomsCount: parseInt(e.target.value) })}
                      className="w-full bg-white border border-stone-300 rounded-xl px-2.5 py-2 text-xs font-medium text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                    >
                      {[1, 2, 3, 4].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Room' : 'Rooms'}</option>)}
                    </select>
                  </div>
                </div>

                {/* Guest Name & Mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1 flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-stone-500" />
                      <span>Guest Name</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.guestName}
                      onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
                      className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs sm:text-sm font-medium text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1 flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-stone-500" />
                      <span>Mobile Number</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.mobileNumber}
                      onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                      className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs sm:text-sm font-medium text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                    />
                  </div>
                </div>

                {/* Submit to WhatsApp Button */}
                <button
                  type="submit"
                  className="w-full bg-[#25D366] hover:bg-[#1ebd59] text-stone-950 font-bold py-3.5 px-4 rounded-xl text-sm transition shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <MessageSquare className="w-4 h-4 fill-stone-950" />
                  <span>Enquire on Official WhatsApp &rarr;</span>
                </button>

                <p className="text-[11px] text-center text-stone-500 mt-2">
                  No automated booking charges · Direct verification with Kutmadan Resort desk (+91 6207799112)
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
