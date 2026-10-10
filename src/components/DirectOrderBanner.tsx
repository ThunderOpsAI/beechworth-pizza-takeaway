'use client';

import React from 'react';
import { Phone, CheckCircle2, DollarSign, ShieldAlert } from 'lucide-react';

export default function DirectOrderBanner() {
  return (
    <section id="direct-order" className="py-14 border-b border-stone-300/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-red-200/80 bg-gradient-to-br from-red-50/50 via-stone-50 to-amber-50/50 p-6 sm:p-10 shadow-lg relative overflow-hidden">
          
          {/* Subtle decoration badge */}
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black bg-red-700/10 text-red-800 border border-red-700/20 uppercase tracking-wider">
              <DollarSign className="w-3.5 h-3.5 text-red-700" /> Support Local Beechworth • Beat Delivery App Markups
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-stone-950 tracking-tight">
              Why Direct Phone Orders Save You Up to 30%
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Third-party delivery platforms take 25%–35% cuts and inflate menu prices. When you call Beechworth Pizza &amp; Takeaway directly, you get our true printed menu prices and piping hot food ready the moment you walk through our door on Camp Street.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Direct Calling Benefits */}
            <div className="rounded-2xl border-2 border-emerald-500/50 bg-white p-6 sm:p-7 space-y-5 flex flex-col justify-between shadow-md">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-black text-emerald-800 text-lg flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    Direct Phone Pickup: (03) 5728 1062
                  </span>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Best Value
                  </span>
                </div>

                <ul className="space-y-3 text-sm text-stone-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>True Counter Prices:</strong> Pay our genuine in-store prices with zero platform service fees or commission surcharges.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Fresh &amp; Piping Hot:</strong> Ready in 15–20 minutes straight from our deck ovens — never sitting in a lukewarm courier bag.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Custom Requests Welcomed:</strong> Speak directly with our pizza makers for extra crispy crust, half-and-half toppings, or gluten-free care.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>100% Stays in Beechworth:</strong> Every dollar supports our local town staff, regional dairy suppliers, and local community.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <a
                  href="tel:0357281062"
                  className="w-full flex items-center justify-center gap-2 bg-red-700 hover:bg-red-800 active:bg-red-900 text-white font-black py-4 rounded-xl shadow-md transition-all text-sm sm:text-base hover:scale-[1.01]"
                >
                  <Phone className="w-4 h-4" />
                  Call (03) 5728 1062 for Fast Pickup
                </a>
              </div>
            </div>

            {/* Delivery Apps Reality */}
            <div className="rounded-2xl border border-stone-300 bg-stone-100/80 p-6 sm:p-7 space-y-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-extrabold text-stone-700 text-base flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5 text-rose-500" />
                    Third-Party Aggregator Apps
                  </span>
                  <span className="text-[11px] font-bold text-stone-500 bg-stone-200 px-2.5 py-0.5 rounded-full">
                    Extra Hidden Costs
                  </span>
                </div>

                <ul className="space-y-3 text-sm text-stone-600">
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold text-sm leading-none mt-0.5">✕</span>
                    <span><strong>Inflated Menu Pricing:</strong> Aggregators inflate prices up to $4–$6 per pizza to recoup aggressive commissions.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold text-sm leading-none mt-0.5">✕</span>
                    <span><strong>Extra Fees at Checkout:</strong> Service fees, delivery charges, and small-cart fees add up rapidly.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold text-sm leading-none mt-0.5">✕</span>
                    <span><strong>Soggy Crust Risks:</strong> Long delivery queues mean crispy wood-fired style crusts can steam inside delivery pouches.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold text-sm leading-none mt-0.5">✕</span>
                    <span><strong>Money Leaves Our Town:</strong> Commission profits are funneled to offshore conglomerate balance sheets.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2 text-center">
                <p className="text-xs text-stone-500 font-medium">
                  Quick pickup at 29 Camp Street takes only a few minutes with convenient street parking right out front!
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
