'use client';

import React from 'react';
import { Phone, MapPin, Clock, Heart, Database, Mail } from 'lucide-react';

interface FooterProps {
  onOpenLeadsModal?: () => void;
}

export default function Footer({ onOpenLeadsModal }: FooterProps) {
  return (
    <footer className="bg-stone-950 border-t border-stone-800 text-stone-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-700 border border-red-600 flex items-center justify-center text-white font-black text-xl">
                🍕
              </div>
              <div>
                <span className="font-black tracking-tight text-lg text-white font-sans">
                  Beechworth <span className="text-red-500">Pizza</span>
                </span>
                <p className="text-[10px] tracking-wider text-red-400 uppercase font-semibold">
                  &amp; Takeaway Beechworth
                </p>
              </div>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              Serving Beechworth families, locals, and visitors with handcrafted pizzas, custom interactive pizza creations, hearty pastas, and unbeatable family meal deals.
            </p>
            <div className="space-y-2 pt-1 text-xs">
              <div>
                <a
                  href="tel:0357281062"
                  className="inline-flex items-center gap-2 font-bold text-red-400 hover:text-white bg-stone-900 border border-stone-800 px-3 py-2 rounded-xl transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call (03) 5728 1062</span>
                </a>
              </div>
              <div className="flex items-center gap-2 text-stone-400 text-xs">
                <Mail className="w-3.5 h-3.5 text-red-400" />
                <a href="mailto:info@beechworthpizza.com.au" className="hover:text-white transition-colors">
                  info@beechworthpizza.com.au
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#pizza-builder" className="hover:text-red-400 transition-colors">Interactive Pizza Builder</a></li>
              <li><a href="#menu" className="hover:text-red-400 transition-colors">Specialty Pizzas &amp; Full Menu</a></li>
              <li><a href="#direct-order" className="hover:text-red-400 transition-colors">Why Order Direct by Phone</a></li>
              <li><a href="#flyers" className="hover:text-red-400 transition-colors">Takeaway Deals &amp; Specials</a></li>
              <li><a href="#catering" className="hover:text-red-400 transition-colors">Club &amp; Event Catering Form</a></li>
              <li><a href="#story" className="hover:text-red-400 transition-colors">The Beechworth Story</a></li>
              <li><a href="#location" className="hover:text-red-400 transition-colors">Trading Hours &amp; Location</a></li>
            </ul>
          </div>

          {/* Contact Details with exact hours */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact &amp; Location</h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span className="text-stone-300">
                  29 Camp Street, <br />
                  Beechworth, VIC 3747
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-400 shrink-0" />
                <a href="tel:0357281062" className="hover:text-white font-black text-red-400 text-sm">
                  (03) 5728 1062
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span className="text-stone-300">
                  Mon – Thu: 4:30 PM – 9:00 PM <br />
                  Fri: 4:00 PM – 9:30 PM <br />
                  Sat: 12:00 PM – 9:30 PM <br />
                  Sun: 12:00 PM – 9:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Owner Admin & Direct Pickups */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Direct Pickups</h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              Call directly for fast counter collection at 29 Camp Street, Beechworth.
            </p>
            <div className="space-y-2.5 pt-1">
              <a
                href="tel:0357281062"
                className="w-full flex items-center justify-center gap-2 bg-red-700 hover:bg-red-600 text-white font-black py-2.5 rounded-xl text-xs shadow-md transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                Call (03) 5728 1062
              </a>

              {onOpenLeadsModal && (
                <button
                  onClick={onOpenLeadsModal}
                  className="w-full flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-red-400 border border-stone-800 py-2 rounded-xl text-xs transition-colors"
                >
                  <Database className="w-3.5 h-3.5 text-red-500" />
                  <span>⚡ Open Owner Lead Hub (Neon DB)</span>
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Beechworth Pizza &amp; Takeaway. All rights reserved.</p>
          <p className="flex items-center gap-1 text-stone-400">
            Handcrafted Pizzas, Pastas &amp; Meal Deals on Camp Street <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
