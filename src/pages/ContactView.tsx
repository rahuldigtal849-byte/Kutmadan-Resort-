import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Clock, ExternalLink, Send, ShieldCheck, Mail } from 'lucide-react';
import { RESORT_INFO, OFFICIAL_ROOMS } from '../data/resortData';
import { createWhatsAppBookingUrl } from '../utils/whatsapp';
import { OfficialChannelsBanner } from '../components/OfficialChannelsBanner';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    guestName: '',
    mobileNumber: '',
    roomCategory: OFFICIAL_ROOMS[0].name,
    checkInDate: '',
    checkOutDate: '',
    adults: 2,
    children: 0,
    roomsCount: 1,
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = createWhatsAppBookingUrl(formData);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-12 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1B4332] bg-emerald-100/70 px-3.5 py-1 rounded-full mb-3">
            <MapPin className="w-3.5 h-3.5 text-emerald-800" />
            <span>Find & Contact Us</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Official Location & Contact
          </h1>
          <p className="text-stone-600 mt-4 text-base leading-relaxed">
            Reach out directly to the Kutmadan Resort reservation team. We are here to assist with room bookings, directions, and travel inquiries.
          </p>
        </div>

        {/* Security Notice */}
        <div className="mb-12 max-w-5xl mx-auto">
          <OfficialChannelsBanner />
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Official Address */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#1B4332] flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-stone-900">Resort Address</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                <strong>Kutmadan Resort Cherrapunji</strong><br />
                MDR 27, Sohra, Meghalaya 793108, India.
              </p>
              <p className="text-xs text-stone-500">
                Situated along the scenic mountain corridor in Sohra, Meghalaya.
              </p>
            </div>

            <div className="pt-4 border-t border-stone-100 mt-4">
              <a
                href={RESORT_INFO.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B4332] hover:text-[#081C15] underline"
              >
                <span>Get Directions via Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Official WhatsApp Booking */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#25D366] flex items-center justify-center">
                <MessageSquare className="w-6 h-6 fill-[#25D366]" />
              </div>
              <h3 className="font-serif font-bold text-xl text-stone-900">Official WhatsApp</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                <strong>Primary Reservation Desk:</strong><br />
                <span className="text-lg font-bold text-emerald-800">{RESORT_INFO.whatsappDisplay}</span>
              </p>
              <p className="text-xs text-stone-500">
                Instant reservation inquiries, latest availability, and official booking verification.
              </p>
            </div>

            <div className="pt-4 border-t border-stone-100 mt-4">
              <a
                href={RESORT_INFO.whatsappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#1ebd59] text-stone-950 font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition"
              >
                <MessageSquare className="w-4 h-4 fill-stone-950" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 3: Calling Numbers */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#1B4332] flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-stone-900">Direct Calling Numbers</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                <strong>Resort Assistance Desk:</strong><br />
                <a href="tel:+919762896575" className="text-base font-bold text-stone-900 hover:text-emerald-800 block">
                  +91 9762896575
                </a>
                <a href="tel:+918730945471" className="text-base font-bold text-stone-900 hover:text-emerald-800 block mt-1">
                  +91 87309 45471
                </a>
              </p>
              <p className="text-xs text-stone-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-stone-400" />
                <span>Check-in: 02:00 PM · Check-out: 11:00 AM</span>
              </p>
            </div>

            <div className="pt-4 border-t border-stone-100 mt-4 flex gap-2">
              <a
                href="tel:+919762896575"
                className="flex-1 bg-stone-900 hover:bg-stone-800 text-white font-semibold py-2 px-3 rounded-xl text-xs text-center transition"
              >
                Call Desk 1
              </a>
              <a
                href="tel:+918730945471"
                className="flex-1 bg-stone-900 hover:bg-stone-800 text-white font-semibold py-2 px-3 rounded-xl text-xs text-center transition"
              >
                Call Desk 2
              </a>
            </div>
          </div>
        </div>

        {/* Two Columns: Map Section & Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Map Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <h3 className="text-2xl font-serif font-bold text-stone-900">
              Location & Road Directions
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Kutmadan Resort is located along MDR 27 in Sohra (Cherrapunji). The drive from Shillong takes approximately 1.5 to 2 hours along scenic mountain highways flanked by misty gorges.
            </p>

            <div className="rounded-2xl overflow-hidden border border-stone-200 h-80 relative bg-stone-100">
              {/* Fallback & Interactive Map embed placeholder with Google Maps direction redirect */}
              <iframe
                title="Kutmadan Resort Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.972109859578!2d91.718873!3d25.271422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37508e6f1fbfd25f%3A0xb36e392769c3a37!2sKutmadan%20Resort!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <span className="text-xs text-stone-500">MDR 27, Sohra, Meghalaya 793108</span>
              <a
                href={RESORT_INFO.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#1B4332] text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-[#143427] transition"
              >
                <span>Open in Google Maps App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Direct Booking Enquiry Form */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-1">
              Direct Booking Enquiry
            </h3>
            <p className="text-xs text-stone-500 mb-5">
              Fill in your details to generate a formatted reservation enquiry on WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-stone-700 mb-1">Guest Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={formData.guestName}
                  onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-3 py-2 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">Mobile / WhatsApp Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 9876543210"
                  value={formData.mobileNumber}
                  onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-3 py-2 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">Preferred Room Category</label>
                <select
                  value={formData.roomCategory}
                  onChange={(e) => setFormData({ ...formData, roomCategory: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-3 py-2 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                >
                  {OFFICIAL_ROOMS.map((r) => (
                    <option key={r.id} value={r.name}>{r.name} ({r.price})</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">Check-in</label>
                  <input
                    type="date"
                    required
                    value={formData.checkInDate}
                    onChange={(e) => setFormData({ ...formData, checkInDate: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-2 py-2 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">Check-out</label>
                  <input
                    type="date"
                    required
                    value={formData.checkOutDate}
                    onChange={(e) => setFormData({ ...formData, checkOutDate: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-2 py-2 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">Adults</label>
                  <select
                    value={formData.adults}
                    onChange={(e) => setFormData({ ...formData, adults: parseInt(e.target.value) })}
                    className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-2 py-2 text-xs"
                  >
                    {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">Children</label>
                  <select
                    value={formData.children}
                    onChange={(e) => setFormData({ ...formData, children: parseInt(e.target.value) })}
                    className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-2 py-2 text-xs"
                  >
                    {[0, 1, 2, 3].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">Rooms</label>
                  <select
                    value={formData.roomsCount}
                    onChange={(e) => setFormData({ ...formData, roomsCount: parseInt(e.target.value) })}
                    className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-2 py-2 text-xs"
                  >
                    {[1, 2, 3, 4].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#1ebd59] text-stone-950 font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow transition cursor-pointer mt-3"
              >
                <MessageSquare className="w-4 h-4 fill-stone-950" />
                <span>Send WhatsApp Enquiry &rarr;</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
