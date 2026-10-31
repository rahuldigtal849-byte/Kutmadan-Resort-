import React from 'react';
import { ShieldCheck, MessageSquare, Phone, AlertTriangle } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

interface OfficialChannelsBannerProps {
  compact?: boolean;
}

export const OfficialChannelsBanner: React.FC<OfficialChannelsBannerProps> = ({ compact = false }) => {
  return (
    <div className={`rounded-2xl border border-amber-200/80 bg-gradient-to-r from-amber-50 via-orange-50/50 to-amber-50 text-amber-950 ${compact ? 'p-4' : 'p-6 sm:p-8'} shadow-sm`}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-800">
          <ShieldCheck className="w-6 h-6 text-amber-700" />
        </div>
        <div className="flex-grow">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-2 py-0.5 rounded">Security Advisory</span>
            <span className="text-xs text-amber-700 font-semibold">Verified Direct Booking</span>
          </div>
          <h3 className="text-lg sm:text-xl font-serif font-bold text-amber-950 mt-1">
            BOOK ONLY THROUGH OFFICIAL CHANNELS
          </h3>
          <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed mt-1">
            For genuine room reservations and booking assistance, contact Kutmadan Resort only through the official WhatsApp booking number and verified contact numbers displayed on this website. Please avoid sending money to unknown individuals or unofficial booking websites.
          </p>
          
          <div className="mt-3 flex flex-wrap items-center gap-4 text-xs">
            <a
              href={RESORT_INFO.whatsappBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-emerald-800 hover:text-emerald-950 bg-emerald-100/80 border border-emerald-300 px-3 py-1.5 rounded-lg transition"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-emerald-800" />
              <span>Official WhatsApp: {RESORT_INFO.whatsappDisplay}</span>
            </a>
            <div className="flex items-center gap-2 text-stone-700">
              <Phone className="w-3.5 h-3.5 text-amber-800" />
              <span>Calling: <strong>+91 9762896575</strong> / <strong>+91 87309 45471</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
