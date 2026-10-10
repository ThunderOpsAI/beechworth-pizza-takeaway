'use client';

import React from 'react';
import { Heart, Store, Flame, Award, Users } from 'lucide-react';

export default function StorySection() {
  return (
    <section id="story" className="py-20 border-b border-stone-300/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image & Location badge */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border border-stone-300 shadow-2xl bg-stone-900 group">
              <img
                src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1000&q=80"
                alt="Handcrafted pizza baking in oven at Beechworth Pizza"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="inline-flex items-center gap-2 bg-red-700 text-white font-black text-xs px-3.5 py-1.5 rounded-full mb-2.5 shadow-md">
                  <Store className="w-3.5 h-3.5" /> 29 Camp Street, Beechworth
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-white">
                  &ldquo;Honest Dough, Big Toppings &amp; Local Pride&rdquo;
                </h4>
                <p className="text-xs text-stone-300 mt-1">
                  Hand-stretched and baked hot to order in historic Beechworth.
                </p>
              </div>
            </div>

            {/* Corner floating badge */}
            <div className="absolute -bottom-4 -right-4 sm:bottom-4 sm:right-4 bg-white border border-stone-300 rounded-2xl p-4 shadow-xl hidden sm:flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-red-700 text-white flex items-center justify-center font-black text-2xl">
                🍕
              </div>
              <div>
                <span className="text-xs font-bold text-stone-950 block">Beechworth Pizza &amp; Takeaway</span>
                <span className="text-[11px] text-red-700 font-semibold">Specialty Pizzas • Pastas • Meal Deals</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative text */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-red-700/10 text-red-800 border border-red-700/20 uppercase tracking-widest">
              <Heart className="w-3.5 h-3.5 text-red-600 fill-red-600" /> The Beechworth Pizza Story
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 tracking-tight leading-tight">
              Handcrafted High Country Tradition
            </h2>

            <p className="text-stone-700 text-base leading-relaxed">
              At Beechworth Pizza &amp; Takeaway on Camp Street, we take pizza personally. We believe that good pizza starts with real patience: our signature dough is mixed fresh daily and slow-proved for 48 hours to create a crust that is crisp on the outside, airy within, and easy to digest.
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Whether you are building your own dream pizza with our custom mobile builder, picking up a steaming tray of homemade beef lasagne for a quiet night in, or feeding the whole squad with our Family Feast deals after Saturday sport, we pack every order with generous toppings and country hospitality.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                <span className="text-red-700 font-black text-2xl block">48hr</span>
                <span className="text-xs font-bold text-stone-900 block mt-0.5">Slow-Proved Dough</span>
                <span className="text-[11px] text-stone-600 mt-1 block">Artisanal Italian technique for light, airy, crisp crusts.</span>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                <span className="text-emerald-700 font-black text-2xl block">100%</span>
                <span className="text-xs font-bold text-stone-900 block mt-0.5">Real Whole Mozzarella</span>
                <span className="text-[11px] text-stone-600 mt-1 block">Premium Australian dairy cheese for golden bubbly melts.</span>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                <span className="text-amber-700 font-black text-2xl block">Direct</span>
                <span className="text-xs font-bold text-stone-900 block mt-0.5">Honest Value</span>
                <span className="text-[11px] text-stone-600 mt-1 block">Order directly by phone to save on third-party app markups.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
