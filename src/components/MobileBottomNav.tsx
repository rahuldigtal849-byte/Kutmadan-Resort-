import React from 'react';
import { Home, BedDouble, Compass, Info, MessageSquare } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

interface MobileBottomNavProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onQuickBookClick: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentView,
  onNavigate,
  onQuickBookClick
}) => {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#081C15]/98 backdrop-blur-lg border-t border-stone-800 px-2 py-1.5 shadow-[0_-4px_20px_rgba(0,0,0,0.4)]">
      <div className="grid grid-cols-5 items-center max-w-md mx-auto">
        {/* 1. Home */}
        <button
          onClick={() => onNavigate('home')}
          className={`flex flex-col items-center justify-center py-1 text-center transition ${
            currentView === 'home' ? 'text-[#D4AF37]' : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-medium tracking-tight">Home</span>
        </button>

        {/* 2. Rooms */}
        <button
          onClick={() => onNavigate('rooms')}
          className={`flex flex-col items-center justify-center py-1 text-center transition ${
            currentView === 'rooms' ? 'text-[#D4AF37]' : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          <BedDouble className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-medium tracking-tight">Rooms</span>
        </button>

        {/* 3. Explore */}
        <button
          onClick={() => onNavigate('attractions')}
          className={`flex flex-col items-center justify-center py-1 text-center transition ${
            currentView === 'attractions' ? 'text-[#D4AF37]' : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          <Compass className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-medium tracking-tight">Explore</span>
        </button>

        {/* 4. About */}
        <button
          onClick={() => onNavigate('about')}
          className={`flex flex-col items-center justify-center py-1 text-center transition ${
            currentView === 'about' ? 'text-[#D4AF37]' : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          <Info className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-medium tracking-tight">About</span>
        </button>

        {/* 5. Book Now - WhatsApp Highlight Button */}
        <a
          href={RESORT_INFO.whatsappBookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 text-center text-[#25D366] hover:text-[#1ebd59] transition"
        >
          <div className="bg-[#25D366] text-stone-950 p-1.5 rounded-full -mt-2 shadow-md">
            <MessageSquare className="w-4 h-4 fill-stone-950" />
          </div>
          <span className="text-[10px] font-bold tracking-tight text-white mt-0.5">Book Now</span>
        </a>
      </div>
    </nav>
  );
};
