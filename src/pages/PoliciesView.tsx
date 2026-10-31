import React, { useState } from 'react';
import { Shield, FileText, AlertCircle, ArrowLeft } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

interface PoliciesViewProps {
  initialPolicy?: 'cancellation' | 'terms' | 'privacy';
  onBack: () => void;
}

export const PoliciesView: React.FC<PoliciesViewProps> = ({ initialPolicy = 'cancellation', onBack }) => {
  const [activeTab, setActiveTab] = useState<'cancellation' | 'terms' | 'privacy'>(initialPolicy);

  return (
    <div className="py-12 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-stone-900 mb-6 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        {/* Tab switch */}
        <div className="flex border-b border-stone-200 mb-8 gap-3">
          <button
            onClick={() => setActiveTab('cancellation')}
            className={`pb-3 text-sm font-bold border-b-2 transition cursor-pointer ${
              activeTab === 'cancellation'
                ? 'border-[#1B4332] text-[#1B4332]'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Cancellation Policy
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`pb-3 text-sm font-bold border-b-2 transition cursor-pointer ${
              activeTab === 'terms'
                ? 'border-[#1B4332] text-[#1B4332]'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Terms & Conditions
          </button>
          <button
            onClick={() => setActiveTab('privacy')}
            className={`pb-3 text-sm font-bold border-b-2 transition cursor-pointer ${
              activeTab === 'privacy'
                ? 'border-[#1B4332] text-[#1B4332]'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Privacy Policy
          </button>
        </div>

        {/* Policy Content Body */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm text-stone-700 leading-relaxed text-sm sm:text-base space-y-6">
          {activeTab === 'cancellation' && (
            <div>
              <h1 className="text-3xl font-serif font-bold text-stone-900 mb-4">
                Reservation & Cancellation Policy
              </h1>
              <p className="text-stone-500 text-xs mb-6 font-mono">
                Last updated: October 2026 · Kutmadan Resort Cherrapunji
              </p>

              <div className="space-y-5">
                <div>
                  <h3 className="font-serif font-bold text-lg text-stone-900">1. Advance Payment Requirement</h3>
                  <p className="mt-1 text-sm text-stone-600">
                    As noted in our official reservation guidelines, room bookings at Kutmadan Resort are confirmed only upon receipt of advance deposit via our verified official channels. Verbal holds or unconfirmed enquiries cannot guarantee room availability.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif font-bold text-lg text-stone-900">2. Cancellation Timelines</h3>
                  <ul className="mt-2 text-sm text-stone-600 list-disc pl-5 space-y-1.5">
                    <li><strong>7 or more days prior to check-in date:</strong> Eligible for date modification or 80% refund of advance deposit (20% retained as administrative processing fee).</li>
                    <li><strong>Between 3 to 6 days prior to check-in date:</strong> Date rescheduling permitted subject to room category availability (within a 60-day window). 50% refund if cancelled.</li>
                    <li><strong>Less than 72 hours prior to arrival or No-Show:</strong> 100% of the advance deposit is non-refundable.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-serif font-bold text-lg text-stone-900">3. Weather & Road Conditions</h3>
                  <p className="mt-1 text-sm text-stone-600">
                    Sohra (Cherrapunji) is known for high rainfall and seasonal mountain mist. Standard monsoon showers and mist conditions do not qualify as grounds for emergency cancellation refunds unless the state highway administration issues official road closures.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif font-bold text-lg text-stone-900">4. Same-Day Bookings</h3>
                  <p className="mt-1 text-sm text-stone-600">
                    Same-day room availability cannot be guaranteed. Walk-in guests are accommodated only when unassigned rooms remain available.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'terms' && (
            <div>
              <h1 className="text-3xl font-serif font-bold text-stone-900 mb-4">
                Terms of Stay & Hospitality Conditions
              </h1>
              <p className="text-stone-500 text-xs mb-6 font-mono">
                Official Property Guidelines · Sohra, Meghalaya
              </p>

              <div className="space-y-5">
                <div>
                  <h3 className="font-serif font-bold text-lg text-stone-900">1. Check-In & Check-Out Timings</h3>
                  <p className="mt-1 text-sm text-stone-600">
                    Standard Check-in time is from <strong>02:00 PM</strong> and Check-out time is strictly by <strong>11:00 AM</strong>. Early check-in or late check-out is strictly subject to room availability and prior desk confirmation.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif font-bold text-lg text-stone-900">2. Identity Documentation</h3>
                  <p className="mt-1 text-sm text-stone-600">
                    In compliance with local government regulations, every guest must present valid government photo identification (Aadhaar Card, Passport, Voter ID, or Driving License) during registration at check-in. PAN cards are not accepted as valid address proof.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif font-bold text-lg text-stone-900">3. Property Preservation & Quiet Hours</h3>
                  <p className="mt-1 text-sm text-stone-600">
                    To preserve the natural tranquility of Cherrapunji for all residents and guests, quiet hours are observed from 10:00 PM to 06:00 AM. Loud amplified music or disruptive conduct is strictly prohibited in outdoor cottage areas.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif font-bold text-lg text-stone-900">4. Meals & Room Amenities</h3>
                  <p className="mt-1 text-sm text-stone-600">
                    Inclusive meal plans (Breakfast, Lunch or Dinner) are served in designated dining spaces during prescribed service hours. Items included in the tariff are non-transferable.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div>
              <h1 className="text-3xl font-serif font-bold text-stone-900 mb-4">
                Guest Privacy Policy
              </h1>
              <p className="text-stone-500 text-xs mb-6 font-mono">
                Data Handling & Official Communications
              </p>

              <div className="space-y-5 text-sm text-stone-600">
                <p>
                  At <strong>Kutmadan Resort Cherrapunji</strong>, we respect your privacy. Guest information collected during booking inquiries—including name, telephone number, dates of travel, and party size—is used solely to process room reservations, provide arrival guidance, and comply with state hospitality guest registers.
                </p>
                <p>
                  We do not sell, rent, or trade guest personal information to third-party advertising brokers. Official communications regarding your reservation will arrive strictly from our verified WhatsApp number (+91 6207799112) or official resort calling numbers.
                </p>
                <p>
                  For any privacy questions or requests to update your registered guest details, please message our reservation desk on WhatsApp or contact us at MDR 27, Sohra, Meghalaya 793108.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
