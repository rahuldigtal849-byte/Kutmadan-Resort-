import React from 'react';
import { Mountain, Heart, Compass, ShieldCheck, Sparkles, MapPin, Phone, MessageSquare } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

export const AboutStory: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1B4332] bg-emerald-100/70 px-3.5 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Official Brand Story</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Our Story – Discover Kutmadan Resort Cherrapunji
          </h1>
          <p className="text-stone-600 mt-4 text-base sm:text-lg font-serif italic max-w-2xl mx-auto">
            Where mist-cloaked plateau hills meet serene Khasi landscapes and heartfelt hospitality.
          </p>
        </div>

        {/* Feature Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="rounded-2xl overflow-hidden shadow-sm h-72 sm:h-80 bg-stone-200">
            <img
              src="/images/exterior.jpg"
              alt="Kutmadan Resort Stone Cottages in Sohra"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm h-72 sm:h-80 bg-stone-200">
            <img
              src="/images/hero.jpg"
              alt="Panoramic View of Sohra Valleys from Kutmadan Resort"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Brand Narrative */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-[#1B4332] first-letter:mr-2 first-letter:float-left">
            Perched gracefully along MDR 27 in Sohra (Cherrapunji), Meghalaya, <strong>Kutmadan Resort</strong> stands as a serene sanctuary for travelers, couples, and families seeking an intimate connection with North East India’s most storied mountain terrain. Known globally for its thunderous waterfalls, cloud-wrapped ridges, and pristine subtropical air, Cherrapunji presents a landscape that commands quiet wonder.
          </p>

          <p>
            At Kutmadan Resort, our architecture and surroundings embrace the organic character of the Khasi Hills. Built with durable stone walls and warm wood accents, our property balances the rustic charm of rural Meghalaya with modern comforts essential for a rejuvenating stay. From the tranquil quiet of early morning mist drifting across the valley to the vibrant hues of sunset sinking behind limestone ridges, every moment here offers a pause from the frantic pace of city life.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-4 my-2 border-y border-stone-100">
            <div className="text-center sm:text-left space-y-1">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mx-auto sm:mx-0">
                <Mountain className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-stone-900 text-base">Serene Mountain Solitude</h4>
              <p className="text-xs text-stone-500">Unobstructed valley vistas and clean mountain air straight from the Khasi highlands.</p>
            </div>

            <div className="text-center sm:text-left space-y-1">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mx-auto sm:mx-0">
                <Heart className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-stone-900 text-base">Warm Khasi Hospitality</h4>
              <p className="text-xs text-stone-500">Attentive guest assistance, freshly prepared meals, and authentic regional care.</p>
            </div>

            <div className="text-center sm:text-left space-y-1">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mx-auto sm:mx-0">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-stone-900 text-base">Gateway to Exploration</h4>
              <p className="text-xs text-stone-500">Minutes from prehistoric caves, majestic plunge waterfalls, and living root bridge paths.</p>
            </div>
          </div>

          <p>
            We take pride in offering thoughtfully appointed accommodations across our <strong>six verified room categories</strong>—ranging from cozy Non-AC and Deluxe rooms with garden and window views to our expansive AC Double and Family rooms with breakfast and lunch included, as well as our premier standalone AC Suites and luxury Loft Cottages featuring private pools and deep-soaking bathtubs.
          </p>

          <p>
            Whether you are embarking on an adventurous trek to the Double Decker Living Root Bridge in Nongriat, marveling at the plunging waters of Nohkalikai Falls, exploring the fossil-rich limestone chambers of Arwah and Mawsmai caves, or simply relaxing with hot tea while clouds sweep across your cottage balcony, Kutmadan Resort Cherrapunji welcomes you to experience the natural soul of Meghalaya.
          </p>

          {/* Official Booking Channel Notice in About Page */}
          <div className="mt-6 pt-6 border-t border-stone-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200">
              <div>
                <div className="text-xs font-bold text-emerald-900 uppercase tracking-wide">Direct Inquiries & Reservations</div>
                <div className="text-sm text-stone-700 mt-0.5">Contact our official reservation desk on WhatsApp: <strong>{RESORT_INFO.whatsappDisplay}</strong></div>
              </div>
              <a
                href={RESORT_INFO.whatsappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#1ebd59] text-stone-950 font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow shrink-0"
              >
                <MessageSquare className="w-4 h-4 fill-stone-950" />
                <span>Reserve on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
