import React, { useState } from 'react';
import { Phone, MessageSquare, Download, Menu, X } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onOpenHostingerModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate, onOpenHostingerModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view: string) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#081C15]/95 backdrop-blur-md text-stone-100 border-b border-stone-800 shadow-sm transition-all">
      {/* Top micro bar for calling and official notice */}
      <div className="bg-[#12281F] py-1.5 px-4 text-xs border-b border-emerald-950/40 text-stone-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="text-[#D4AF37] font-semibold text-[11px] tracking-wider uppercase">Official Website</span>
            <span className="text-stone-500 hidden sm:inline">·</span>
            <span className="truncate hidden sm:inline text-stone-300">MDR 27, Sohra, Meghalaya 793108</span>
          </div>
          <div className="flex items-center gap-3 shrink-0 text-xs">
            <span className="text-stone-400 hidden md:inline">Calling:</span>
            <a href="tel:+919762896575" className="hover:text-[#D4AF37] transition font-medium flex items-center gap-1">
              <Phone className="w-3 h-3 text-[#D4AF37]" />
              <span>+91 9762896575</span>
            </a>
            <span className="text-stone-600 hidden lg:inline">/</span>
            <a href="tel:+918730945471" className="hover:text-[#D4AF37] transition font-medium hidden lg:inline">
              +91 87309 45471
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: Zone 1 (Wordmark) - Zone 2 (Nav links) - Zone 3 (Action) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <button 
          onClick={() => handleNavClick('home')} 
          className="text-left group cursor-pointer focus:outline-none"
        >
          <span className="text-xl sm:text-2xl font-serif tracking-wide text-[#FAF8F5] font-semibold group-hover:text-[#D4AF37] transition whitespace-nowrap shrink-0">
            Kutmadan Resort
          </span>
          <span className="block text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase font-sans">
            Cherrapunji · Sohra
          </span>
        </button>

        {/* Zone 2: Clean single-line nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-200">
          <button 
            onClick={() => handleNavClick('home')}
            className={`whitespace-nowrap shrink-0 hover:text-[#D4AF37] transition cursor-pointer py-1 ${currentView === 'home' ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={() => handleNavClick('rooms')}
            className={`whitespace-nowrap shrink-0 hover:text-[#D4AF37] transition cursor-pointer py-1 ${currentView === 'rooms' ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' : ''}`}
          >
            Rooms & Tariffs
          </button>
          <button 
            onClick={() => handleNavClick('attractions')}
            className={`whitespace-nowrap shrink-0 hover:text-[#D4AF37] transition cursor-pointer py-1 ${currentView === 'attractions' ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' : ''}`}
          >
            Explore Cherrapunji
          </button>
          <button 
            onClick={() => handleNavClick('activities')}
            className={`whitespace-nowrap shrink-0 hover:text-[#D4AF37] transition cursor-pointer py-1 ${currentView === 'activities' ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' : ''}`}
          >
            Activities
          </button>
          <button 
            onClick={() => handleNavClick('gallery')}
            className={`whitespace-nowrap shrink-0 hover:text-[#D4AF37] transition cursor-pointer py-1 ${currentView === 'gallery' ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' : ''}`}
          >
            Resort Gallery
          </button>
          <button 
            onClick={() => handleNavClick('about')}
            className={`whitespace-nowrap shrink-0 hover:text-[#D4AF37] transition cursor-pointer py-1 ${currentView === 'about' ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' : ''}`}
          >
            About Us
          </button>
          <button 
            onClick={() => handleNavClick('contact')}
            className={`whitespace-nowrap shrink-0 hover:text-[#D4AF37] transition cursor-pointer py-1 ${currentView === 'contact' ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' : ''}`}
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenHostingerModal}
            className="hidden xl:flex items-center gap-1.5 text-xs text-[#D4AF37] hover:text-white bg-stone-900/80 hover:bg-stone-800 border border-[#D4AF37]/40 px-3 py-2 rounded-lg transition"
            title="Download Hostinger public_html ready ZIP"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="whitespace-nowrap">Hostinger ZIP</span>
          </button>

          <a
            href={RESORT_INFO.whatsappBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#1ebd59] text-stone-950 font-semibold px-4 py-2 rounded-full text-xs sm:text-sm flex items-center gap-1.5 shadow-sm transition hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0"
          >
            <MessageSquare className="w-4 h-4 fill-stone-950" />
            <span>Book on WhatsApp</span>
          </a>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a1a13] border-b border-stone-800 px-5 py-4 space-y-3">
          <button 
            onClick={() => handleNavClick('home')} 
            className="block w-full text-left py-2 text-sm font-medium text-stone-200 hover:text-[#D4AF37]"
          >
            Home
          </button>
          <button 
            onClick={() => handleNavClick('rooms')} 
            className="block w-full text-left py-2 text-sm font-medium text-stone-200 hover:text-[#D4AF37]"
          >
            Rooms & Tariffs (6 Categories)
          </button>
          <button 
            onClick={() => handleNavClick('attractions')} 
            className="block w-full text-left py-2 text-sm font-medium text-stone-200 hover:text-[#D4AF37]"
          >
            Explore Cherrapunji (14 Tourist Places)
          </button>
          <button 
            onClick={() => handleNavClick('activities')} 
            className="block w-full text-left py-2 text-sm font-medium text-stone-200 hover:text-[#D4AF37]"
          >
            Activities & Sightseeing
          </button>
          <button 
            onClick={() => handleNavClick('gallery')} 
            className="block w-full text-left py-2 text-sm font-medium text-stone-200 hover:text-[#D4AF37]"
          >
            Resort Photo Gallery
          </button>
          <button 
            onClick={() => handleNavClick('about')} 
            className="block w-full text-left py-2 text-sm font-medium text-stone-200 hover:text-[#D4AF37]"
          >
            About Us & Resort Story
          </button>
          <button 
            onClick={() => handleNavClick('contact')} 
            className="block w-full text-left py-2 text-sm font-medium text-stone-200 hover:text-[#D4AF37]"
          >
            Location & Contact Us
          </button>
          <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenHostingerModal(); }}
              className="flex items-center gap-2 text-xs text-[#D4AF37]"
            >
              <Download className="w-4 h-4" />
              <span>Hostinger ZIP Package</span>
            </button>
            <a
              href="tel:+919762896575"
              className="text-xs text-stone-300 flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Call Resort</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
