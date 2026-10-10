'use client';

import React, { useState, useMemo } from 'react';
import { Sparkles, Phone, Plus, Check, RotateCcw, Flame, ShieldCheck, Heart, Award, CheckCircle2 } from 'lucide-react';
import { MenuItem } from '@/data/menu';

export interface CustomPizzaItem extends MenuItem {
  isCustom: true;
  sizeName: string;
  crustName: string;
  sauceName: string;
  toppingsList: string[];
}

interface PizzaBuilderProps {
  onAddCustomPizza?: (item: MenuItem) => void;
  onCallClick?: () => void;
}

interface SizeOption {
  id: 'small' | 'medium' | 'large' | 'family';
  name: string;
  diameter: string;
  slices: string;
  basePrice: number;
  includedToppings: number;
}

interface CrustOption {
  id: 'traditional' | 'thin' | 'gluten_free' | 'stuffed';
  name: string;
  description: string;
  extraPrice: number;
  isGlutenFree?: boolean;
}

interface SauceOption {
  id: 'tomato' | 'bbq' | 'garlic_oil' | 'creamy_garlic';
  name: string;
  description: string;
}

interface ToppingItem {
  id: string;
  name: string;
  icon?: string;
}

const SIZES: SizeOption[] = [
  { id: 'small', name: 'Small', diameter: '9" (23cm)', slices: '6 Slices', basePrice: 13.50, includedToppings: 3 },
  { id: 'medium', name: 'Medium', diameter: '11" (28cm)', slices: '8 Slices', basePrice: 17.50, includedToppings: 4 },
  { id: 'large', name: 'Large', diameter: '13" (33cm)', slices: '8 Slices', basePrice: 21.50, includedToppings: 5 },
  { id: 'family', name: 'Family', diameter: '15" (38cm)', slices: '12 Slices', basePrice: 26.50, includedToppings: 6 },
];

const CRUSTS: CrustOption[] = [
  { id: 'traditional', name: 'Traditional Hand-Stretched', description: '48h slow-proved classic Italian crust with airy edges', extraPrice: 0.00 },
  { id: 'thin', name: 'Thin & Crispy', description: 'Rolled thin for maximum crunch in every bite', extraPrice: 0.00 },
  { id: 'gluten_free', name: 'Gluten Free Base', description: 'Certified coeliac-friendly artisan base (Medium only)', extraPrice: 4.00, isGlutenFree: true },
  { id: 'stuffed', name: 'Cheesy Stuffed Crust', description: 'Crust filled with gooey molten mozzarella strings', extraPrice: 4.50 },
];

const SAUCES: SauceOption[] = [
  { id: 'tomato', name: 'Rich Herb Tomato', description: 'San Marzano tomatoes, aromatic oregano & garlic' },
  { id: 'bbq', name: 'Smoky Hickory BBQ', description: 'Sweet, tangy & smoky Texas-style glaze' },
  { id: 'garlic_oil', name: 'Garlic & Extra Virgin Olive Oil', description: 'Infused cold-pressed olive oil with roasted garlic' },
  { id: 'creamy_garlic', name: 'Creamy Garlic White Sauce', description: 'Rich parmesan & garlic cream reduction' },
];

const TOPPINGS = {
  meats: [
    { id: 'pepperoni', name: 'Seasoned Pepperoni' },
    { id: 'ham', name: 'Shaved Smoked Ham' },
    { id: 'bacon', name: 'Crispy Rasher Bacon' },
    { id: 'sausage', name: 'Italian Pork Sausage' },
    { id: 'chicken', name: 'Roast Chicken Breast' },
    { id: 'beef', name: 'Seasoned Ground Beef' },
    { id: 'salami', name: 'Hot Calabrese Salami' },
    { id: 'anchovies', name: 'Salted Anchovy Fillets' },
  ],
  cheeses: [
    { id: 'mozzarella', name: '100% Whole Mozzarella' },
    { id: 'bocconcini', name: 'Baby Bocconcini' },
    { id: 'feta', name: 'Crumbled Greek Feta' },
    { id: 'gorgonzola', name: 'Italian Gorgonzola' },
    { id: 'vegan_cheese', name: 'Vegan Mozzarella (Dairy-Free)' },
  ],
  veggies: [
    { id: 'mushrooms', name: 'Fresh Button Mushrooms' },
    { id: 'olives', name: 'Kalamata Olives' },
    { id: 'capsicum', name: 'Roasted Red Bell Peppers' },
    { id: 'onion', name: 'Spanish Red Onion' },
    { id: 'pineapple', name: 'Juicy Sweet Pineapple' },
    { id: 'basil', name: 'Fresh Sweet Basil Leaves' },
    { id: 'jalapenos', name: 'Fiery Jalapeños' },
    { id: 'spinach', name: 'Baby Spinach Leaves' },
    { id: 'tomatoes', name: 'Fresh Roma Tomatoes' },
    { id: 'garlic', name: 'Roasted Garlic Cloves' },
  ],
};

const EXTRA_TOPPING_PRICE = 1.50;

export default function PizzaBuilder({ onAddCustomPizza }: PizzaBuilderProps) {
  const [selectedSize, setSelectedSize] = useState<SizeOption['id']>('large');
  const [selectedCrust, setSelectedCrust] = useState<CrustOption['id']>('traditional');
  const [selectedSauce, setSelectedSauce] = useState<SauceOption['id']>('tomato');
  const [selectedToppings, setSelectedToppings] = useState<string[]>([
    'pepperoni',
    'ham',
    'mushrooms',
    'mozzarella',
    'capsicum',
  ]);
  const [addedNotice, setAddedNotice] = useState(false);

  const currentSize = SIZES.find((s) => s.id === selectedSize) || SIZES[2];
  const currentCrust = CRUSTS.find((c) => c.id === selectedCrust) || CRUSTS[0];
  const currentSauce = SAUCES.find((s) => s.id === selectedSauce) || SAUCES[0];

  const toggleTopping = (toppingId: string) => {
    setSelectedToppings((prev) => {
      if (prev.includes(toppingId)) {
        return prev.filter((id) => id !== toppingId);
      } else {
        return [...prev, toppingId];
      }
    });
    setAddedNotice(false);
  };

  const applyPreset = (preset: 'meatlovers' | 'veg' | 'margherita' | 'supreme' | 'clear') => {
    setAddedNotice(false);
    if (preset === 'meatlovers') {
      setSelectedSauce('bbq');
      setSelectedToppings(['pepperoni', 'ham', 'bacon', 'sausage', 'beef', 'mozzarella']);
    } else if (preset === 'veg') {
      setSelectedSauce('tomato');
      setSelectedToppings(['mushrooms', 'olives', 'capsicum', 'onion', 'spinach', 'feta', 'mozzarella']);
    } else if (preset === 'margherita') {
      setSelectedSauce('tomato');
      setSelectedToppings(['mozzarella', 'basil', 'bocconcini', 'tomatoes']);
    } else if (preset === 'supreme') {
      setSelectedSauce('tomato');
      setSelectedToppings(['pepperoni', 'ham', 'mushrooms', 'capsicum', 'onion', 'olives', 'mozzarella']);
    } else if (preset === 'clear') {
      setSelectedToppings([]);
    }
  };

  // Price Calculation
  const extraToppingsCount = Math.max(0, selectedToppings.length - currentSize.includedToppings);
  const extraToppingsCost = extraToppingsCount * EXTRA_TOPPING_PRICE;
  const totalPrice = currentSize.basePrice + currentCrust.extraPrice + extraToppingsCost;

  // Friendly names for selected toppings
  const allToppingsList = [...TOPPINGS.meats, ...TOPPINGS.cheeses, ...TOPPINGS.veggies];
  const selectedToppingNames = selectedToppings.map(
    (id) => allToppingsList.find((t) => t.id === id)?.name || id
  );

  const handleAddToCart = () => {
    const item: MenuItem = {
      id: `custom-pizza-${Date.now()}`,
      name: `Custom ${currentSize.name} Pizza (${currentCrust.name})`,
      price: totalPrice,
      category: 'pizza',
      description: `Sauce: ${currentSauce.name}. Toppings (${selectedToppings.length}): ${selectedToppingNames.join(', ') || 'Plain base'}.`,
      tags: ['Custom Created', currentCrust.isGlutenFree ? 'Gluten Free Option' : 'Fresh Handcrafted'],
    };

    if (onAddCustomPizza) {
      onAddCustomPizza(item);
    }
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 5000);
  };

  return (
    <section id="pizza-builder" className="py-16 sm:py-24 bg-gradient-to-b from-[#f9f5f0] to-[#f2ece2] border-b border-stone-300/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black bg-red-700/10 text-red-700 border border-red-700/20 uppercase tracking-widest">
            <Flame className="w-4 h-4 text-red-600" /> Interactive Mobile Pizza Builder
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 tracking-tight leading-tight">
            Craft Your Custom Handcrafted Pizza
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            Select your size, artisanal dough base, signature sauce, and custom toppings. Real-time pricing with free included toppings for every size!
          </p>
        </div>

        {/* Quick Presets Bar */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2 text-xs font-bold">
          <span className="text-stone-500 uppercase tracking-wider text-[11px] mr-2">Quick Presets:</span>
          <button
            onClick={() => applyPreset('meatlovers')}
            className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-red-50 text-stone-800 border border-stone-300 shadow-sm transition-all hover:border-red-500"
          >
            🥩 BBQ Meatlovers
          </button>
          <button
            onClick={() => applyPreset('supreme')}
            className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-amber-50 text-stone-800 border border-stone-300 shadow-sm transition-all hover:border-amber-500"
          >
            🍕 Beechworth Supreme
          </button>
          <button
            onClick={() => applyPreset('veg')}
            className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-emerald-50 text-stone-800 border border-stone-300 shadow-sm transition-all hover:border-emerald-500"
          >
            🥦 Veggie Harvest
          </button>
          <button
            onClick={() => applyPreset('margherita')}
            className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-red-50 text-stone-800 border border-stone-300 shadow-sm transition-all hover:border-red-500"
          >
            🧀 Classic Margherita
          </button>
          <button
            onClick={() => applyPreset('clear')}
            className="px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-600 border border-stone-200 transition-all flex items-center gap-1"
          >
            <RotateCcw className="w-3 h-3" /> Reset
          </button>
        </div>

        {/* Main 2-Column Builder Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Options */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Size Selection */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-md border border-stone-300/80 space-y-4">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-red-700 text-white font-black text-xs flex items-center justify-center">1</span>
                  <h3 className="font-black text-lg text-stone-950">Choose Size</h3>
                </div>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  {currentSize.includedToppings} toppings included
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {SIZES.map((size) => {
                  const isSelected = selectedSize === size.id;
                  return (
                    <button
                      key={size.id}
                      type="button"
                      onClick={() => {
                        setSelectedSize(size.id);
                        setAddedNotice(false);
                      }}
                      className={`p-4 rounded-2xl text-left border-2 transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'border-red-700 bg-red-50/60 shadow-md ring-2 ring-red-700/20'
                          : 'border-stone-200 hover:border-stone-400 bg-stone-50/50'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className={`font-black text-base ${isSelected ? 'text-red-700' : 'text-stone-900'}`}>
                            {size.name}
                          </span>
                          {isSelected && <Check className="w-4 h-4 text-red-700" />}
                        </div>
                        <span className="text-[11px] text-stone-500 block mt-0.5">{size.diameter}</span>
                        <span className="text-[10px] text-stone-400 block">{size.slices}</span>
                      </div>
                      <div className="mt-3 pt-2 border-t border-stone-200/60 flex items-center justify-between">
                        <span className="text-xs font-black text-stone-950">${size.basePrice.toFixed(2)}</span>
                        <span className="text-[10px] text-emerald-700 font-bold">{size.includedToppings} free</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Crust / Base Selection */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-md border border-stone-300/80 space-y-4">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-red-700 text-white font-black text-xs flex items-center justify-center">2</span>
                  <h3 className="font-black text-lg text-stone-950">Select Crust / Base</h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CRUSTS.map((crust) => {
                  const isSelected = selectedCrust === crust.id;
                  return (
                    <button
                      key={crust.id}
                      type="button"
                      onClick={() => {
                        setSelectedCrust(crust.id);
                        setAddedNotice(false);
                      }}
                      className={`p-4 rounded-2xl text-left border-2 transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'border-red-700 bg-red-50/60 shadow-md ring-2 ring-red-700/20'
                          : 'border-stone-200 hover:border-stone-400 bg-stone-50/50'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className={`font-black text-sm ${isSelected ? 'text-red-700' : 'text-stone-900'}`}>
                            {crust.name}
                          </span>
                          {crust.extraPrice > 0 ? (
                            <span className="text-xs font-black text-stone-900 bg-amber-100 px-2 py-0.5 rounded-md">
                              +${crust.extraPrice.toFixed(2)}
                            </span>
                          ) : (
                            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                              Standard
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-stone-600 mt-1 leading-snug">{crust.description}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Base Sauce */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-md border border-stone-300/80 space-y-4">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-red-700 text-white font-black text-xs flex items-center justify-center">3</span>
                  <h3 className="font-black text-lg text-stone-950">Choose Base Sauce</h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SAUCES.map((sauce) => {
                  const isSelected = selectedSauce === sauce.id;
                  return (
                    <button
                      key={sauce.id}
                      type="button"
                      onClick={() => {
                        setSelectedSauce(sauce.id);
                        setAddedNotice(false);
                      }}
                      className={`p-3.5 rounded-2xl text-left border-2 transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'border-red-700 bg-red-50/60 shadow-md ring-2 ring-red-700/20'
                          : 'border-stone-200 hover:border-stone-400 bg-stone-50/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`font-black text-sm ${isSelected ? 'text-red-700' : 'text-stone-900'}`}>
                          {sauce.name}
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-red-700" />}
                      </div>
                      <p className="text-[11px] text-stone-500 mt-0.5 leading-snug">{sauce.description}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Toppings Selection */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-md border border-stone-300/80 space-y-6">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-red-700 text-white font-black text-xs flex items-center justify-center">4</span>
                  <div>
                    <h3 className="font-black text-lg text-stone-950">Select Toppings</h3>
                    <p className="text-xs text-stone-500">
                      {selectedToppings.length} selected &bull; {currentSize.includedToppings} included in {currentSize.name} &bull; Extra +$1.50 ea
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-xs font-black px-2.5 py-1 rounded-full ${
                    extraToppingsCount > 0 ? 'bg-amber-100 text-amber-900' : 'bg-emerald-100 text-emerald-800'
                  }`}>
                    {extraToppingsCount > 0 ? `+${extraToppingsCount} extra ($${extraToppingsCost.toFixed(2)})` : 'All Included'}
                  </span>
                </div>
              </div>

              {/* Meats Category */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-stone-700 mb-2.5 flex items-center gap-1.5">
                  <span>🥩</span> Savoury Meats &amp; Seafood
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {TOPPINGS.meats.map((top) => {
                    const checked = selectedToppings.includes(top.id);
                    return (
                      <label
                        key={top.id}
                        className={`p-2.5 rounded-xl border text-xs font-bold cursor-pointer transition-all flex items-center gap-2 ${
                          checked
                            ? 'bg-red-700 text-white border-red-700 shadow-sm'
                            : 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200'
                        }`}
                      >
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={checked}
                          onChange={() => toggleTopping(top.id)}
                        />
                        <span className={`w-3.5 h-3.5 rounded-md flex items-center justify-center border text-[10px] ${
                          checked ? 'bg-white text-red-700 border-white font-black' : 'border-stone-400 bg-white'
                        }`}>
                          {checked ? '✓' : ''}
                        </span>
                        <span className="leading-tight">{top.name}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Cheeses Category */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-stone-700 mb-2.5 flex items-center gap-1.5">
                  <span>🧀</span> Cheeses &amp; Dairy-Free Options
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {TOPPINGS.cheeses.map((top) => {
                    const checked = selectedToppings.includes(top.id);
                    return (
                      <label
                        key={top.id}
                        className={`p-2.5 rounded-xl border text-xs font-bold cursor-pointer transition-all flex items-center gap-2 ${
                          checked
                            ? 'bg-red-700 text-white border-red-700 shadow-sm'
                            : 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200'
                        }`}
                      >
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={checked}
                          onChange={() => toggleTopping(top.id)}
                        />
                        <span className={`w-3.5 h-3.5 rounded-md flex items-center justify-center border text-[10px] ${
                          checked ? 'bg-white text-red-700 border-white font-black' : 'border-stone-400 bg-white'
                        }`}>
                          {checked ? '✓' : ''}
                        </span>
                        <span className="leading-tight">{top.name}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Veggies Category */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-stone-700 mb-2.5 flex items-center gap-1.5">
                  <span>🌿</span> Fresh Vegetables &amp; Herbs
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {TOPPINGS.veggies.map((top) => {
                    const checked = selectedToppings.includes(top.id);
                    return (
                      <label
                        key={top.id}
                        className={`p-2.5 rounded-xl border text-xs font-bold cursor-pointer transition-all flex items-center gap-2 ${
                          checked
                            ? 'bg-red-700 text-white border-red-700 shadow-sm'
                            : 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200'
                        }`}
                      >
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={checked}
                          onChange={() => toggleTopping(top.id)}
                        />
                        <span className={`w-3.5 h-3.5 rounded-md flex items-center justify-center border text-[10px] ${
                          checked ? 'bg-white text-red-700 border-white font-black' : 'border-stone-400 bg-white'
                        }`}>
                          {checked ? '✓' : ''}
                        </span>
                        <span className="leading-tight">{top.name}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Live Visual Pizza Preview & Summary Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-stone-800 space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-black text-sm">
                    🍕
                  </div>
                  <div>
                    <h3 className="font-black text-lg text-white">Your Custom Pizza</h3>
                    <span className="text-[11px] text-stone-400">Handcrafted in Beechworth</span>
                  </div>
                </div>
                <span className="text-xs font-extrabold uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                  Real-time Price
                </span>
              </div>

              {/* Stylized Pizza Graphic Indicator */}
              <div className="relative py-6 flex items-center justify-center">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full border-8 border-amber-600/70 bg-gradient-to-br from-amber-700/80 via-red-900/90 to-amber-950 flex items-center justify-center shadow-inner overflow-hidden">
                  {/* Sauce visual tint */}
                  <div className={`absolute inset-3 rounded-full opacity-70 transition-all ${
                    selectedSauce === 'tomato' ? 'bg-red-600/80' :
                    selectedSauce === 'bbq' ? 'bg-amber-900/90' :
                    selectedSauce === 'creamy_garlic' ? 'bg-amber-100/70' :
                    'bg-yellow-500/40'
                  }`} />

                  {/* Toppings Dots Matrix */}
                  <div className="relative z-10 flex flex-wrap items-center justify-center p-6 gap-1 max-w-[170px]">
                    {selectedToppings.map((topId) => (
                      <span
                        key={topId}
                        className="inline-block text-[10px] font-black bg-stone-900/90 text-amber-300 border border-amber-400/30 px-1.5 py-0.5 rounded-full shadow-sm"
                      >
                        {allToppingsList.find((t) => t.id === topId)?.name.split(' ')[0]}
                      </span>
                    ))}
                    {selectedToppings.length === 0 && (
                      <span className="text-xs text-stone-300 font-bold bg-black/50 px-2.5 py-1 rounded-lg">
                        Select toppings
                      </span>
                    )}
                  </div>
                </div>

                <div className="absolute top-0 right-2 bg-stone-900/90 border border-stone-700 px-3 py-1 rounded-xl text-center shadow-md">
                  <span className="text-[10px] text-stone-400 block uppercase font-bold">Size</span>
                  <span className="text-xs font-black text-amber-400">{currentSize.name} ({currentSize.diameter})</span>
                </div>
              </div>

              {/* Specification Breakdown List */}
              <div className="space-y-2.5 text-xs bg-stone-900/80 p-4 rounded-2xl border border-stone-800">
                <div className="flex justify-between items-center text-stone-300">
                  <span className="font-semibold text-stone-400">Size &amp; Base Price:</span>
                  <span className="font-bold text-white">{currentSize.name} ({currentSize.diameter}) — ${currentSize.basePrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-stone-300">
                  <span className="font-semibold text-stone-400">Crust:</span>
                  <span className="font-bold text-white">
                    {currentCrust.name} {currentCrust.extraPrice > 0 ? `(+$${currentCrust.extraPrice.toFixed(2)})` : ''}
                  </span>
                </div>
                <div className="flex justify-between items-center text-stone-300">
                  <span className="font-semibold text-stone-400">Sauce:</span>
                  <span className="font-bold text-white">{currentSauce.name}</span>
                </div>
                <div className="flex justify-between items-start text-stone-300 pt-1 border-t border-stone-800">
                  <span className="font-semibold text-stone-400">Toppings ({selectedToppings.length}):</span>
                  <span className="font-bold text-right text-stone-200 max-w-[220px]">
                    {selectedToppingNames.join(', ') || 'No toppings selected'}
                  </span>
                </div>
                {extraToppingsCount > 0 && (
                  <div className="flex justify-between items-center text-amber-400 pt-1">
                    <span>{extraToppingsCount} Extra Topping{extraToppingsCount > 1 ? 's' : ''}:</span>
                    <span className="font-bold">+${extraToppingsCost.toFixed(2)}</span>
                  </div>
                )}
              </div>

              {/* Price Calculation Output */}
              <div className="pt-2 flex items-center justify-between">
                <div>
                  <span className="text-xs text-stone-400 block uppercase font-bold tracking-wider">Total Price</span>
                  <span className="text-3xl sm:text-4xl font-black text-white">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <div className="text-right text-[11px] text-stone-400">
                  <span>Includes {currentSize.includedToppings} toppings</span><br />
                  <span className="text-emerald-400 font-bold">Zero 3rd party app fees</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="w-full flex items-center justify-center gap-2 bg-red-700 hover:bg-red-600 active:bg-red-800 text-white py-4 rounded-2xl font-black text-sm sm:text-base shadow-xl shadow-red-950/50 transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Plus className="w-5 h-5" />
                  <span>Add Custom Pizza to Order</span>
                </button>

                <a
                  href="tel:0357281062"
                  className="w-full flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-amber-400 hover:text-amber-300 border border-stone-700 py-3.5 rounded-2xl font-bold text-xs sm:text-sm transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Or Call to Order: (03) 5728 1062</span>
                </a>
              </div>

              {/* Feedback Success Notice */}
              {addedNotice && (
                <div className="p-3 bg-emerald-500/20 border border-emerald-500/40 rounded-xl text-emerald-300 text-xs flex items-center gap-2 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>Custom pizza added to your order summary! View below in Cart or call now.</span>
                </div>
              )}

              <p className="text-[11px] text-stone-400 text-center">
                Piping hot and ready in 15–20 minutes at 29 Camp Street, Beechworth VIC.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
