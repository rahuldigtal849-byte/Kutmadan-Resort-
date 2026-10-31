/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Footer } from './components/Footer';
import { RoomDetailModal } from './components/RoomDetailModal';
import { HostingerZipModal } from './components/HostingerZipModal';
import { HomeView } from './pages/HomeView';
import { RoomsView } from './pages/RoomsView';
import { AttractionsSection } from './components/AttractionsSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { ResortGallery } from './components/ResortGallery';
import { AboutStory } from './components/AboutStory';
import { ContactView } from './pages/ContactView';
import { PoliciesView } from './pages/PoliciesView';
import { RoomCategory } from './types';
import { RESORT_INFO } from './data/resortData';
import { MessageSquare, Phone } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedRoom, setSelectedRoom] = useState<RoomCategory | null>(null);
  const [hostingerModalOpen, setHostingerModalOpen] = useState(false);

  // Sync with browser URL hash or history if needed
  const handleNavigate = (view: string) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewRoomDetails = (room: RoomCategory) => {
    setSelectedRoom(room);
  };

  const handleCloseRoomModal = () => {
    setSelectedRoom(null);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 flex flex-col font-sans selection:bg-[#1B4332] selection:text-white pb-16 lg:pb-0">
      {/* Global Top Bar Contract Header */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenHostingerModal={() => setHostingerModalOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-grow">
        {currentView === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onViewRoomDetails={handleViewRoomDetails}
          />
        )}

        {currentView === 'rooms' && (
          <RoomsView onViewRoomDetails={handleViewRoomDetails} />
        )}

        {currentView === 'attractions' && (
          <div className="pt-4">
            <AttractionsSection />
          </div>
        )}

        {currentView === 'activities' && (
          <div className="pt-4">
            <ActivitiesSection />
          </div>
        )}

        {currentView === 'gallery' && (
          <div className="pt-4">
            <ResortGallery />
          </div>
        )}

        {currentView === 'about' && (
          <AboutStory />
        )}

        {currentView === 'contact' && (
          <ContactView />
        )}

        {currentView === 'policy-cancellation' && (
          <PoliciesView initialPolicy="cancellation" onBack={() => handleNavigate('home')} />
        )}

        {currentView === 'policy-terms' && (
          <PoliciesView initialPolicy="terms" onBack={() => handleNavigate('home')} />
        )}

        {currentView === 'policy-privacy' && (
          <PoliciesView initialPolicy="privacy" onBack={() => handleNavigate('home')} />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenHostingerModal={() => setHostingerModalOpen(true)}
      />

      {/* Flipkart-Style Mobile Bottom Navigation (5 items) */}
      <MobileBottomNav
        currentView={currentView}
        onNavigate={handleNavigate}
        onQuickBookClick={() => handleNavigate('rooms')}
      />

      {/* Floating Sticky Quick WhatsApp Button on Desktop & Tablet */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-2">
        <a
          href={RESORT_INFO.whatsappBookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebd59] text-stone-950 font-bold px-4 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white/50"
          title="Direct WhatsApp Reservation (+91 6207799112)"
        >
          <MessageSquare className="w-5 h-5 fill-stone-950" />
          <span className="text-xs font-bold tracking-tight">WhatsApp Booking</span>
        </a>
      </div>

      {/* Room Details Modal */}
      <RoomDetailModal
        room={selectedRoom}
        onClose={handleCloseRoomModal}
      />

      {/* Hostinger Deployment & Google Indexing Modal */}
      <HostingerZipModal
        isOpen={hostingerModalOpen}
        onClose={() => setHostingerModalOpen(false)}
      />
    </div>
  );
}
