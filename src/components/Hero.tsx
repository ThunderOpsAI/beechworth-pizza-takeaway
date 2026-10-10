'use client';

import React from 'react';
import { Phone, ArrowRight, Sparkles, MapPin, CheckCircle2, Flame, Utensils } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 bg-[#f3ede4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Card Container */}
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-stone-900/15 border border-stone-300/80 bg-stone-950 text-white min-h-[500px] lg:min-h-[560px] flex flex-col justify-end">
          
          {/* Background image & gradient overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-100 hover:scale-105 opacity-40"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/75 to-stone-950/25" />
          
          {/* Subtle warm glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/25 rounded-full blur-3xl pointer-events-none" />

          {/* Hero Content */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-16 max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-600/20 backdrop-blur-md px-4 py-1.5 text-xs sm:text-sm font-black text-red-300">
              <Sparkles className="w-4 h-4 text-red-400" />
              <span>Beechworth&apos;s Favourite Local Pizzeria &amp; Takeaway</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.08] text-white">
              Hand-Stretched Pizzas <br />
              <span className="bg-gradient-to-r from-red-400 via-amber-200 to-orange-400 bg-clip-text text-transparent">
                Baked Fresh in Beechworth
              </span>
            </h1>

            <p className="text-base sm:text-xl text-stone-200 font-medium max-w-2xl leading-relaxed">
              Craft your dream pizza with our interactive pizza builder, or choose from our classic specialty pizzas, oven-baked pastas, crispy wings, and unbeatable family meal deals. Cooked hot to order on Camp Street.
            </p>

            {/* Quick highlights */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-stone-200 font-semibold">
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-red-400" />
                Interactive Pizza Builder
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-red-400" />
                48h Slow-Proved Dough
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-red-400" />
                Direct Pickups: Save Up to 30%
              </span>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#pizza-builder"
                className="inline-flex items-center justify-center gap-2.5 bg-red-700 hover:bg-red-600 text-white font-black px-7 py-4 rounded-2xl shadow-xl shadow-red-950/40 text-base transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Flame className="w-5 h-5 text-amber-300" />
                <span>Build Your Pizza</span>
              </a>

              <a
                href="tel:0357281062"
                className="inline-flex items-center justify-center gap-2.5 bg-white/15 hover:bg-white/25 text-white font-bold px-6 py-4 rounded-2xl backdrop-blur-md border border-white/20 text-base transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="w-5 h-5 text-amber-400" />
                <span>Call (03) 5728 1062</span>
              </a>

              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 bg-stone-900/80 hover:bg-stone-900 text-stone-200 font-bold px-5 py-4 rounded-2xl border border-stone-700 text-sm transition-all"
              >
                <span>View Full Menu</span>
                <ArrowRight className="w-4 h-4 text-stone-400" />
              </a>
            </div>

            {/* Quick Location & Phone Info Strip */}
            <div className="pt-3 border-t border-white/15 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-stone-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-400 shrink-0" />
                <span>29 Camp Street, Beechworth VIC 3747</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Hot Counter Collection in 15–20 Mins</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
