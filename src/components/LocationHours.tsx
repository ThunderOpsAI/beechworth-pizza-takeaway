'use client';

import React from 'react';
import { MapPin, Clock, Phone, Navigation, ExternalLink, Car, CheckCircle } from 'lucide-react';

export default function LocationHours() {
  const schedule = [
    { day: 'Monday', hours: '4:30 PM – 9:00 PM' },
    { day: 'Tuesday', hours: '4:30 PM – 9:00 PM' },
    { day: 'Wednesday', hours: '4:30 PM – 9:00 PM' },
    { day: 'Thursday', hours: '4:30 PM – 9:00 PM' },
    { day: 'Friday', hours: '4:00 PM – 9:30 PM' },
    { day: 'Saturday', hours: '12:00 PM – 9:30 PM (Lunch & Dinner)' },
    { day: 'Sunday', hours: '12:00 PM – 9:00 PM (Lunch & Dinner)' },
  ];

  return (
    <section id="location" className="py-20 border-b border-stone-300/80 bg-[#f9f6f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-red-700/10 text-red-800 border border-red-700/20 uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5 text-red-600" /> Visit Us in Historic Beechworth
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 tracking-tight">
            Trading Hours &amp; Location
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Conveniently situated at 29 Camp Street in the heart of Beechworth with easy street parking right out front.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Location & Contact Info */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            <div className="rounded-3xl border border-stone-300 bg-white p-6 sm:p-8 space-y-6 shadow-xl">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-700/10 border border-red-700/20 text-red-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-stone-950">Store Address</h3>
                  <p className="text-stone-800 text-base font-bold mt-1">
                    29 Camp Street, Beechworth, VIC 3747
                  </p>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Central Beechworth location with quick pickup parking
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-700 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-stone-950">Direct Phone Ordering</h3>
                  <a
                    href="tel:0357281062"
                    className="text-red-700 text-xl font-black hover:underline block mt-1"
                  >
                    (03) 5728 1062
                  </a>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Call ahead for fastest counter pickups and family deal bundles
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 flex items-center justify-center shrink-0">
                  <Car className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-stone-950">Camp Street Parking &amp; Pickups</h3>
                  <p className="text-stone-600 text-xs sm:text-sm mt-1 leading-relaxed">
                    Easy angle street parking right along Camp Street. Perfect for quick dash-in collections, club dinner pickups, and holiday traveler meal stops.
                  </p>
                </div>
              </div>

              {/* Google Maps Embed / Link Card */}
              <div className="rounded-2xl overflow-hidden border border-stone-200 h-48 bg-stone-100 relative">
                <iframe
                  title="Beechworth Pizza & Takeaway Location Map"
                  src="https://maps.google.com/maps?q=29+Camp+Street+Beechworth+VIC+3747&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=29+Camp+Street+Beechworth+VIC+3747"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md text-sm"
                >
                  <Navigation className="w-4 h-4 text-red-400" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
                </a>
              </div>
            </div>
          </div>

          {/* Operating Hours Table */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-stone-300 bg-white p-6 sm:p-8 flex flex-col justify-between h-full shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-200">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-red-700" />
                    <h3 className="text-lg font-black text-stone-950">Store Opening Hours</h3>
                  </div>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 border border-emerald-200 px-3 py-1 rounded-full">
                    Takeaway &amp; Pickup
                  </span>
                </div>

                <div className="divide-y divide-stone-100">
                  {schedule.map((slot) => (
                    <div
                      key={slot.day}
                      className="py-3.5 flex items-center justify-between text-sm"
                    >
                      <div className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                        <span className="font-bold text-stone-900">
                          {slot.day}
                        </span>
                      </div>
                      <span className="font-mono text-xs px-3 py-1 rounded-lg bg-red-50 text-red-950 border border-red-200 font-bold">
                        {slot.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order options card */}
              <div className="mt-8 pt-6 border-t border-stone-200 space-y-4">
                <div className="flex items-center justify-between text-xs text-stone-600">
                  <span>Takeaway and phone call orders available every trading day</span>
                  <span className="text-red-700 font-bold">• 29 Camp Street</span>
                </div>

                <a
                  href="tel:0357281062"
                  className="w-full flex items-center justify-center gap-2 bg-red-700 hover:bg-red-800 active:bg-red-900 text-white py-4 rounded-xl text-sm font-black transition-all shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  Call (03) 5728 1062 to Order Ahead
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
