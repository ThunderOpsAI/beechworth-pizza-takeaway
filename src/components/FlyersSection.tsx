'use client';

import React from 'react';
import { Sparkles, Phone, Check, FileText, ArrowRight, Flame } from 'lucide-react';

export default function FlyersSection() {
  const flyers = [
    {
      id: 'flyer-1',
      title: 'Handcrafted Specialty Pizzas & Value Meal Deals',
      subtitle: 'Menu Section 1 — High Country Pizzeria Staples',
      tag: 'Specialty Pizzas • Family Deals',
      highlights: [
        'Signature Beechworth Special (Ham, Pepperoni, Veg & Olives)',
        'Loaded BBQ Meatlovers & Double Pepperoni Deluxe',
        'Classic Basil Margherita & Fresh Vegetarian Supreme',
        'Family Feast Deal: 2 Large Pizzas + Garlic Bread + 1.25L Drink ($48)',
        'Duo Dinner Deal: 2 Medium Pizzas + 10" Cheesy Garlic Pizza ($38)',
        'Gluten-Free & Vegan Mozzarella Options Available'
      ],
      description: 'Hand-stretched dough proved 48 hours for light, bubbly crusts, loaded with premium mozzarella and regional Victorian toppings.'
    },
    {
      id: 'flyer-2',
      title: 'Oven-Baked Pastas, Garlic Breads, Wings & Treats',
      subtitle: 'Menu Section 2 — Pastas, Starters & Calzones',
      tag: 'Pastas • Sides • Desserts',
      highlights: [
        'Traditional Oven-Baked Beef Lasagne with Mozzarella Crust ($17.50)',
        'Creamy Chicken & Crispy Bacon Carbonara Penne ($17.50)',
        'Traditional Herb Garlic Baguettes & 10" Cheesy Garlic Pizza',
        'Crispy Roasted Buffalo Wings (8pcs $12.50 / 16pcs Family Pack $22)',
        'Seasoned Golden Potato Wedges with Sweet Chilli & Sour Cream',
        'Warm Nutella & Roasted Hazelnut Calzone ($12.50)'
      ],
      description: 'Generous portions cooked fresh to order, packed to travel home piping hot to your dining table.'
    }
  ];

  return (
    <section id="flyers" className="py-20 border-b border-stone-300/80 bg-[#f9f6f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-red-700/10 text-red-800 border border-red-700/20 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-red-600" /> Printed Counter Menus
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 tracking-tight">
            Takeaway Menu Sections &amp; Specials
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Browse our complete physical store menu sections just like the printed counter menus at 29 Camp Street. Call ahead on (03) 5728 1062 to have your order ready for collection.
          </p>
        </div>

        {/* Flyer Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {flyers.map((flyer) => (
            <div
              key={flyer.id}
              className="rounded-3xl border border-stone-300 bg-white shadow-xl hover:shadow-2xl hover:border-red-600/50 transition-all flex flex-col justify-between overflow-hidden"
            >
              {/* Card visual header */}
              <div className="p-7 bg-gradient-to-br from-stone-900 via-stone-950 to-stone-900 text-white relative">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-red-400 uppercase tracking-wider bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full">
                    {flyer.tag}
                  </span>
                  <span className="text-stone-400 text-xs font-semibold flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5" /> Beechworth Counter Menu
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white leading-tight">
                  {flyer.title}
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  {flyer.description}
                </p>
              </div>

              {/* Flyer Highlights */}
              <div className="p-7 space-y-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black text-stone-900 uppercase tracking-wider block mb-3">
                    Featured Menu Highlights:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-stone-700">
                    {flyer.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2 bg-stone-50 border border-stone-200 p-2.5 rounded-xl font-medium">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center gap-3">
                  <a
                    href="#menu"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-stone-950 hover:bg-stone-800 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm shadow transition-colors"
                  >
                    <span>Browse Full Menu &amp; Cart</span>
                    <ArrowRight className="w-4 h-4 text-red-400" />
                  </a>

                  <a
                    href="tel:0357281062"
                    className="inline-flex items-center justify-center gap-1.5 bg-red-700 hover:bg-red-800 text-white font-black py-3 px-5 rounded-xl text-xs sm:text-sm shadow transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call (03) 5728 1062</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Family Feasts Callout Box */}
        <div className="mt-10 rounded-2xl bg-red-100/70 border border-red-300 p-6 sm:p-7 text-stone-950 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h4 className="font-black text-lg text-stone-950 flex items-center gap-2">
              <Flame className="w-5 h-5 text-red-700" /> High Country Family Pizza Feasts
            </h4>
            <p className="text-sm text-stone-700 mt-1 leading-relaxed">
              Feeding the family or hosting friends? Order our <strong className="text-red-800 font-bold">Family Pizza Feast Deal ($48.00)</strong> — includes 2 Large Specialty Pizzas of your choice, fresh Herb Garlic Bread, and a cold 1.25L soft drink bottle. Ready in 15–20 minutes at 29 Camp Street!
            </p>
          </div>
          <a
            href="tel:0357281062"
            className="shrink-0 bg-red-700 hover:bg-red-800 text-white font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm shadow-sm transition-colors flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Order Deal: (03) 5728 1062
          </a>
        </div>

      </div>
    </section>
  );
}
