import React from 'react';
import { Hero } from '../components/Hero';
import { OfficialChannelsBanner } from '../components/OfficialChannelsBanner';
import { RoomCard } from '../components/RoomCard';
import { AttractionsSection } from '../components/AttractionsSection';
import { ActivitiesSection } from '../components/ActivitiesSection';
import { ResortGallery } from '../components/ResortGallery';
import { OFFICIAL_ROOMS, RESORT_INFO, RESERVATION_GUIDELINES } from '../data/resortData';
import { RoomCategory } from '../types';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  ChevronRight, 
  Mountain, 
  Coffee, 
  Compass, 
  CheckCircle2, 
  Clock, 
  ExternalLink 
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: string) => void;
  onViewRoomDetails: (room: RoomCategory) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onViewRoomDetails }) => {
  return (
    <div className="space-y-0">
      {/* 1. Hero Banner with large image & booking enquiry widget */}
      <Hero
        onExploreRooms={() => {
          const el = document.getElementById('official-rooms-section');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onExploreAttractions={() => onNavigate('attractions')}
      />

      {/* Security Advisory: BOOK ONLY THROUGH OFFICIAL CHANNELS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-6 sm:-mt-8 relative z-20">
        <OfficialChannelsBanner />
      </div>

      {/* 2. About Kutmadan Resort Section */}
      <section className="py-16 sm:py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1B4332] bg-emerald-100/70 px-3.5 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>About Kutmadan Resort</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 leading-tight">
                A Mountain Sanctuary in the Heart of Sohra
              </h2>
              <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
                Nestled on MDR 27 in Sohra (Cherrapunji), Meghalaya, Kutmadan Resort is crafted to provide travelers and families with an authentic mountain holiday. Surrounded by verdant hills, deep canyons, and dancing waterfalls, our stone cottages and suites offer the perfect blend of natural tranquility and modern comfort.
              </p>
              <p className="text-stone-600 leading-relaxed text-xs sm:text-sm">
                Wake up to cool morning mist rolling across your balcony, savor freshly prepared hot breakfast, and set out to explore the world’s most spectacular living root bridges, prehistoric caves, and majestic waterfalls just minutes from our doorstep.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-3.5 rounded-xl border border-stone-200">
                  <div className="text-xl font-serif font-bold text-[#1B4332]">MDR 27</div>
                  <div className="text-xs text-stone-500">Scenic Sohra Location</div>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-stone-200">
                  <div className="text-xl font-serif font-bold text-[#1B4332]">6 Rooms</div>
                  <div className="text-xs text-stone-500">Verified Direct Tariffs</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1B4332] hover:text-[#081C15] group cursor-pointer"
                >
                  <span>Read our complete resort story</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-sm h-64 sm:h-80 bg-stone-200 mt-6">
                <img
                  src="/images/exterior.jpg"
                  alt="Kutmadan Resort stone cottages"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm h-64 sm:h-80 bg-stone-200">
                <img
                  src="/images/hero.jpg"
                  alt="Kutmadan Resort view of valley"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Six Room Categories Section */}
      <section id="official-rooms-section" className="py-16 sm:py-24 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#1B4332] bg-emerald-100/70 px-3.5 py-1 rounded-full mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-800" />
              <span>Verified Official Tariffs</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 tracking-tight">
              Our Six Room Categories
            </h2>
            <p className="text-stone-600 mt-3 text-sm sm:text-base leading-relaxed">
              Strictly the six official accommodation categories from Kutmadan Resort. Reserve directly on WhatsApp with zero intermediary fees.
            </p>
          </div>

          {/* Reservation Policy Note */}
          <div className="mb-10 max-w-3xl mx-auto bg-amber-50/80 border border-amber-200 rounded-2xl p-4 sm:p-5 text-center">
            <p className="text-xs text-amber-900 font-medium">
              <strong>Reservation Notice:</strong> Booking will not be confirmed without advance payment. Same-day room availability cannot be guaranteed.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {OFFICIAL_ROOMS.map((room) => (
              <RoomCard
                key={room.id}
                room={room}
                onViewDetails={onViewRoomDetails}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={RESORT_INFO.whatsappBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebd59] text-stone-950 font-bold px-8 py-3.5 rounded-full text-sm shadow-md transition hover:scale-105"
            >
              <MessageSquare className="w-4 h-4 fill-stone-950" />
              <span>Enquire Room Availability on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4 & 5. Explore Cherrapunji & Tourist Attractions */}
      <AttractionsSection />

      {/* 6. Activities & Experiences */}
      <ActivitiesSection />

      {/* 7. Resort Photo Gallery */}
      <ResortGallery />

      {/* 8. Why Choose Us */}
      <section className="py-16 sm:py-20 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#1B4332]">
              The Kutmadan Experience
            </p>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 mt-2">
              Why Choose Kutmadan Resort
            </h2>
            <p className="text-stone-600 mt-3 text-sm sm:text-base leading-relaxed">
              Designed for travelers who value genuine hospitality, tranquil natural vistas, and seamless booking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FAF8F5] p-6 sm:p-8 rounded-2xl border border-stone-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-[#1B4332]">
                <Mountain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900">
                Spectacular Valley Panorama
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Positioned along the highland escarpment in Sohra, offering unobstructed views of rolling green hills, morning fog, and scenic canyon sunsets.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-6 sm:p-8 rounded-2xl border border-stone-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-[#1B4332]">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900">
                Genuine Khasi Hospitality
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Warm, attentive regional staff providing freshly cooked meals, helpful sightseeing guidance, and comfortable stone cottage lodgings.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-6 sm:p-8 rounded-2xl border border-stone-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-[#1B4332]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900">
                100% Direct Official Booking
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Book directly on WhatsApp with our verified team. Zero booking markups, clear advance terms, and instant response.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9 & 10. Location, Directions & Official Booking Info */}
      <section className="py-16 sm:py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#1B4332] bg-emerald-100/70 px-3.5 py-1 rounded-full">
                <MapPin className="w-3.5 h-3.5 text-emerald-800" />
                <span>Location & Directions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
                How to Reach Kutmadan Resort
              </h2>
              <p className="text-sm text-stone-700 leading-relaxed">
                Located on MDR 27 in Sohra (Cherrapunji), Meghalaya 793108. Our resort is accessible by private car, taxi, or shared tourist vehicles originating from Shillong or Guwahati.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start gap-2 bg-white p-3 rounded-xl border border-stone-200">
                  <span className="font-bold text-stone-900 shrink-0">From Shillong:</span>
                  <span>Approx. 54 km (1.5 to 2 hours drive via scenic SH 5 / MDR 27).</span>
                </div>
                <div className="flex items-start gap-2 bg-white p-3 rounded-xl border border-stone-200">
                  <span className="font-bold text-stone-900 shrink-0">From Guwahati Airport:</span>
                  <span>Approx. 165 km (4.5 to 5.5 hours drive via NH 6 and Shillong bypass).</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={RESORT_INFO.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1B4332] hover:bg-[#143427] text-white font-semibold px-5 py-3 rounded-xl text-xs flex items-center gap-2 shadow"
                >
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  <span>Open Official Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="tel:+919762896575"
                  className="bg-stone-900 hover:bg-stone-800 text-white font-semibold px-5 py-3 rounded-xl text-xs flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Call for Directions</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm space-y-4">
              <h3 className="text-2xl font-serif font-bold text-stone-900">
                Official Booking Information
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Kutmadan Resort operates with transparent guidelines to ensure a peaceful stay for all guests:
              </p>

              <ul className="space-y-3 text-xs text-stone-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Advance Payment:</strong> Reservations are officially confirmed upon advance payment receipt.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Check-in & Check-out:</strong> Check-in from 02:00 PM; Check-out strictly by 11:00 AM.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Valid ID Proof:</strong> Photo ID required for all adult guests (Aadhaar / Passport / Voter ID).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Official WhatsApp:</strong> Book only through our verified number: <strong>{RESORT_INFO.whatsappDisplay}</strong>.</span>
                </li>
              </ul>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full bg-[#FAF8F5] hover:bg-stone-100 text-stone-800 border border-stone-300 font-semibold py-2.5 rounded-xl text-xs transition cursor-pointer"
                >
                  View Full Contact & Direction Details &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
