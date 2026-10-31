import React from 'react';
import { Phone, MessageSquare, MapPin, ExternalLink, ShieldCheck, Download, Heart } from 'lucide-react';
import { RESORT_INFO, OFFICIAL_ROOMS } from '../data/resortData';

interface FooterProps {
  onNavigate: (view: string) => void;
  onOpenHostingerModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenHostingerModal }) => {
  const handleNav = (view: string) => {
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#081C15] text-stone-300 pt-16 pb-24 lg:pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Security & Official Channels Trust Notice Box */}
        <div className="mb-12 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-emerald-900/40 to-emerald-950/80 p-5 sm:p-6 border border-[#D4AF37]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-serif font-bold text-base tracking-wide">
                BOOK ONLY THROUGH OFFICIAL CHANNELS
              </h4>
              <p className="text-xs text-stone-300 mt-0.5">
                Always verify reservations via official WhatsApp (+91 6207799112) or call our desk directly (+91 9762896575 / +91 87309 45471).
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={RESORT_INFO.whatsappBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1ebd59] text-stone-950 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow transition"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-stone-950" />
              <span>Verify on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* 4-Column Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
          {/* Column 1: Brand & Official Address */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-serif font-bold text-white tracking-wide">
                Kutmadan Resort
              </h3>
              <p className="text-xs text-[#D4AF37] tracking-widest uppercase font-sans mt-0.5">
                Cherrapunji · Sohra, Meghalaya
              </p>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              Experience the natural beauty and cloud-draped serenity of Cherrapunji with verified accommodations, traditional Khasi stone cottages, and genuine hospitality.
            </p>

            <div className="space-y-1 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>MDR 27, Sohra, Meghalaya 793108, India</span>
              </div>
              <div className="pt-2">
                <a
                  href={RESORT_INFO.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#D4AF37] hover:underline"
                >
                  <span>Open Official Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: The Six Official Rooms */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#D4AF37] tracking-widest uppercase">
              Our 6 Official Room Categories
            </h4>
            <p className="text-[11px] text-stone-400">
              Strictly verified rates from official category list:
            </p>
            <ul className="space-y-2 text-xs">
              {OFFICIAL_ROOMS.map((room) => (
                <li key={room.id} className="flex justify-between items-baseline border-b border-stone-800/60 pb-1">
                  <button
                    onClick={() => handleNav('rooms')}
                    className="text-stone-300 hover:text-white text-left transition"
                  >
                    {room.name}
                  </button>
                  <span className="text-[#D4AF37] font-semibold font-mono text-[11px] ml-2">
                    {room.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#D4AF37] tracking-widest uppercase">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('rooms')} className="hover:text-white transition">
                  Rooms & Tariffs
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('attractions')} className="hover:text-white transition">
                  Cherrapunji Tourist Attractions (14 Places)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('activities')} className="hover:text-white transition">
                  Activities & Sightseeing Tours
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gallery')} className="hover:text-white transition">
                  Resort Photo Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition">
                  Our Story & Brand Philosophy
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition">
                  Location & Contact Details
                </button>
              </li>
              <li>
                <button onClick={onOpenHostingerModal} className="text-[#D4AF37] hover:underline flex items-center gap-1 mt-1">
                  <Download className="w-3.5 h-3.5" />
                  <span>Hostinger ZIP & SEO Indexing</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Booking Channels & Policies */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#D4AF37] tracking-widest uppercase">
              Direct Reservation Desk
            </h4>
            <p className="text-xs text-stone-400">
              Official WhatsApp is our primary channel for instant room reservation enquiries.
            </p>

            <div className="space-y-2 pt-1 text-xs">
              <a
                href={RESORT_INFO.whatsappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 font-semibold hover:text-emerald-300"
              >
                <MessageSquare className="w-4 h-4 fill-emerald-400" />
                <span>WhatsApp: {RESORT_INFO.whatsappDisplay}</span>
              </a>

              <div className="text-stone-300 space-y-1">
                <div className="text-stone-500 text-[11px]">Direct Telephone Desk:</div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <a href="tel:+919762896575" className="hover:text-white">+91 9762896575</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <a href="tel:+918730945471" className="hover:text-white">+91 87309 45471</a>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-stone-800 space-y-1 text-[11px] text-stone-400">
              <div className="font-semibold text-stone-300 uppercase tracking-wider text-[10px]">
                Hospitality Policies
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                <button onClick={() => handleNav('policy-cancellation')} className="hover:text-white underline">
                  Cancellation Policy
                </button>
                <button onClick={() => handleNav('policy-terms')} className="hover:text-white underline">
                  Terms & Conditions
                </button>
                <button onClick={() => handleNav('policy-privacy')} className="hover:text-white underline">
                  Privacy Policy
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Hostinger Ready Notice */}
        <div className="mt-12 pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            &copy; {new Date().getFullYear()} Kutmadan Resort Cherrapunji. All rights reserved. MDR 27, Sohra, Meghalaya 793108.
          </div>
          <div className="flex items-center gap-2 text-stone-400 text-[11px]">
            <span>Official Domain:</span>
            <span className="text-stone-200 font-mono">https://kutmadanresortcherrapunji.in</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
