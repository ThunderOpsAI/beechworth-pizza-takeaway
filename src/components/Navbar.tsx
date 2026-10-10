'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Clock, Menu as MenuIcon, X, Database, ShoppingBag, MapPin, Flame } from 'lucide-react';

interface NavbarProps {
  onOpenLeadsModal?: () => void;
  cartCount?: number;
  onCartClick?: () => void;
}

export default function Navbar({ onOpenLeadsModal, cartCount = 0, onCartClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    // Check Melbourne/Sydney time (AEST / AEDT)
    const checkOpenStatus = () => {
      try {
        const now = new Date();
        const melbourneTime = new Date(now.toLocaleString("en-US", { timeZone: "Australia/Melbourne" }));
        const day = melbourneTime.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
        const hour = melbourneTime.getHours();
        const minute = melbourneTime.getMinutes();
        const decimalHour = hour + minute / 60;

        // Beechworth Pizza schedule:
        // Mon - Thu: 4:30 PM to 9:00 PM (16.5 to 21.0)
        // Fri: 4:00 PM to 9:30 PM (16.0 to 21.5)
        // Sat: 12:00 PM to 9:30 PM (12.0 to 21.5)
        // Sun: 12:00 PM to 9:00 PM (12.0 to 21.0)
        if (day >= 1 && day <= 4) {
          setIsOpenNow(decimalHour >= 16.5 && decimalHour <= 21.0);
        } else if (day === 5) {
          setIsOpenNow(decimalHour >= 16.0 && decimalHour <= 21.5);
        } else if (day === 6) {
          setIsOpenNow(decimalHour >= 12.0 && decimalHour <= 21.5);
        } else {
          setIsOpenNow(decimalHour >= 12.0 && decimalHour <= 21.0);
        }
      } catch {
        setIsOpenNow(true);
      }
    };

    checkOpenStatus();
    const timer = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-stone-300/80 bg-white/95 backdrop-blur-md shadow-sm">
      {/* Top announcement / quick contact bar */}
      <div className="bg-stone-950 border-b border-stone-800 px-4 py-1.5 text-xs font-semibold text-stone-200">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-red-600 text-white px-2 py-0.5 font-extrabold uppercase tracking-wider text-[10px]">
              Beechworth VIC
            </span>
            <span className="text-stone-300 text-xs font-medium">📍 29 Camp Street, Beechworth VIC 3747</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-stone-300 hidden md:flex">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Mon–Thu: 4:30pm–9pm | Fri: 4pm–9:30pm | Sat–Sun: From 12pm</span>
            </div>
            <a
              href="tel:0357281062"
              className="inline-flex items-center gap-1 bg-red-600/30 border border-red-500/50 text-red-200 hover:text-white px-2.5 py-0.5 rounded-full transition-colors font-bold"
            >
              <Phone className="w-3 h-3 text-red-400" />
              (03) 5728 1062
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-2">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-red-700 border border-red-600 flex items-center justify-center shadow-md shadow-red-700/20 text-white font-black text-2xl group-hover:scale-105 transition-transform">
              🍕
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black tracking-tight text-xl sm:text-2xl text-stone-950 font-sans">
                  Beechworth <span className="text-red-700">Pizza</span>
                </span>
                <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                  isOpenNow 
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-700' 
                    : 'bg-stone-100 border-stone-300 text-stone-600'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-stone-400'}`} />
                  {isOpenNow ? 'Open Now' : 'Closed'}
                </span>
              </div>
              <p className="text-[11px] tracking-wide text-stone-600 font-semibold hidden sm:block">
                Handcrafted Pizzas • Mobile Pizza Builder • Pastas &amp; Family Deals
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-5 text-sm font-bold text-stone-700">
            <a href="#pizza-builder" className="hover:text-red-700 transition-colors flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-red-600" />
              <span>Pizza Builder</span>
            </a>
            <a href="#menu" className="hover:text-red-700 transition-colors">
              Menu &amp; Deals
            </a>
            <a href="#direct-order" className="hover:text-red-700 transition-colors">
              Direct Phone Ordering
            </a>
            <a href="#flyers" className="hover:text-red-700 transition-colors">
              Store Specials
            </a>
            <a href="#catering" className="hover:text-red-700 transition-colors">
              Club Catering
            </a>
            <a href="#story" className="hover:text-red-700 transition-colors">
              Our Story
            </a>
            <a href="#location" className="hover:text-red-700 transition-colors">
              Hours &amp; Location
            </a>
          </nav>

          {/* Action buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {onOpenLeadsModal && (
              <button
                onClick={onOpenLeadsModal}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-300 px-3 py-2 rounded-xl transition-colors"
                title="Business Owner Lead Drawer"
              >
                <Database className="w-3.5 h-3.5 text-red-700" />
                <span>Admin Leads</span>
              </button>
            )}

            {cartCount > 0 && onCartClick && (
              <button
                onClick={onCartClick}
                className="inline-flex items-center gap-1.5 bg-stone-950 text-white hover:bg-stone-800 px-3.5 py-2 rounded-xl font-bold text-xs sm:text-sm shadow-sm transition-all"
              >
                <ShoppingBag className="w-4 h-4 text-red-400" />
                <span>{cartCount} in Cart</span>
              </button>
            )}

            <a
              href="tel:0357281062"
              className="inline-flex items-center gap-1.5 bg-red-700 hover:bg-red-800 text-white px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md shadow-red-700/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call (03) 5728 1062</span>
              <span className="sm:hidden">Call</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-stone-700 hover:text-stone-950 hover:bg-stone-100 border border-stone-200 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-300 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200 shadow-xl">
          <div className="flex flex-col space-y-2.5 text-sm font-bold text-stone-800">
            <a
              href="#pizza-builder"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-stone-100 hover:text-red-700 flex items-center gap-2"
            >
              🔥 Interactive Pizza Builder
            </a>
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-stone-100 hover:text-red-700"
            >
              🍕 Specialty Pizzas &amp; Full Menu
            </a>
            <a
              href="#direct-order"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-stone-100 hover:text-red-700"
            >
              💰 Direct Ordering vs Aggregators
            </a>
            <a
              href="#flyers"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-stone-100 hover:text-red-700"
            >
              📄 Store Deals &amp; Flyers
            </a>
            <a
              href="#catering"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-stone-100 hover:text-red-700"
            >
              🎉 Event &amp; Club Catering
            </a>
            <a
              href="#story"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-stone-100 hover:text-red-700"
            >
              ❤️ Our Beechworth Story
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-stone-100 hover:text-red-700"
            >
              📍 Hours &amp; 29 Camp Street
            </a>
          </div>

          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2">
            <a
              href="tel:0357281062"
              className="w-full flex items-center justify-center gap-2 bg-red-700 text-white font-bold py-3 rounded-xl shadow-md text-sm"
            >
              <Phone className="w-4 h-4" />
              Call (03) 5728 1062
            </a>
            {onOpenLeadsModal && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLeadsModal();
                }}
                className="w-full flex items-center justify-center gap-2 bg-stone-100 border border-stone-300 text-stone-700 font-bold py-2.5 rounded-xl text-xs"
              >
                <Database className="w-4 h-4 text-red-700" />
                Open Owner Lead Hub
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
