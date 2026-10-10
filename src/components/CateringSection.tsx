'use client';

import React, { useState } from 'react';
import { Users, Calendar, Utensils, CheckCircle, Sparkles, Send, PhoneCall, AlertCircle, Clock, Flame } from 'lucide-react';

export default function CateringSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceType, setServiceType] = useState('Club Pizza Party Feast');
  const [guestCount, setGuestCount] = useState('30');
  const [eventDate, setEventDate] = useState('');
  const [notes, setNotes] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Estimate calculation: ~$12 per person pizza party package
  const estimatedTotal = Math.max(10, parseInt(guestCount || '10', 10)) * 12;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email,
          service_type: serviceType,
          guest_count: guestCount,
          event_date: eventDate,
          notes: notes ? `${notes} (Est. budget: ~$${estimatedTotal})` : `Est. budget: ~$${estimatedTotal}`,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitSuccess(true);
        setName('');
        setPhone('');
        setEmail('');
        setNotes('');
      } else {
        setErrorMessage(data.error || 'Failed to submit inquiry. Please call us directly on (03) 5728 1062.');
      }
    } catch {
      setErrorMessage('Network error occurred. Please call us directly on (03) 5728 1062.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="catering" className="py-20 border-b border-stone-300/80 bg-stone-900 text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Catering Pitch & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-red-600/20 text-red-300 border border-red-500/30 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-red-400" /> Large Orders &amp; Event Catering
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-snug">
              Pizza Catering for Beechworth Celebrations
            </h2>

            <p className="text-stone-300 text-base leading-relaxed">
              Feeding the local football or netball club, organizing a school presentation night, or catering a High Country wedding after-party? Beechworth Pizza &amp; Takeaway specializes in generous, piping hot party pizza packages, garlic bread bundles, and pasta trays.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 bg-stone-800/80 p-4 rounded-2xl border border-stone-700/80">
                <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Club &amp; School Multi-Pizza Feasts</h4>
                  <p className="text-stone-300 text-xs sm:text-sm mt-0.5 leading-relaxed">
                    10, 20, or 50+ large pizzas baked sequentially and packaged in insulated carriers so every slice arrives piping hot and crispy.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-stone-800/80 p-4 rounded-2xl border border-stone-700/80">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Gourmet Pizza &amp; Pasta Banquets</h4>
                  <p className="text-stone-300 text-xs sm:text-sm mt-0.5 leading-relaxed">
                    A combination of artisan pizzas, family trays of oven-baked beef lasagne, creamy carbonara, garlic baguettes, and fresh garden salads.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-stone-800/80 p-4 rounded-2xl border border-stone-700/80">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Trade &amp; Corporate Lunch Runs</h4>
                  <p className="text-stone-300 text-xs sm:text-sm mt-0.5 leading-relaxed">
                    Scheduled lunchtime pickups for trade sites, local wineries, breweries, and offices. Labelled boxes ready the second you pull up on Camp Street.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-red-600/10 border border-red-500/20 text-xs sm:text-sm text-stone-300 flex items-center justify-between gap-4">
              <div>
                <span className="font-bold text-red-300 block">Need a bulk order tonight?</span>
                <span>Call our kitchen directly on Camp Street for rapid same-day group pickups.</span>
              </div>
              <a
                href="tel:0357281062"
                className="shrink-0 inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-500 text-white font-black px-3.5 py-2 rounded-xl text-xs transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" /> (03) 5728 1062
              </a>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-6">
            <div className="bg-stone-950 border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Request a Pizza Catering Quote
                </h3>
                <p className="text-xs sm:text-sm text-stone-400 mt-1">
                  Tell us about your event and our kitchen manager will confirm your pizza varieties, pricing package, and pickup time.
                </p>
              </div>

              {submitSuccess ? (
                <div className="py-10 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Inquiry Received!</h4>
                  <p className="text-stone-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you! Your catering request has been logged in our system. The Beechworth Pizza &amp; Takeaway team will review your order and call you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="inline-flex items-center gap-2 bg-stone-800 hover:bg-stone-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs rounded-xl flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Matt Higgins"
                        className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 0428 112 345"
                        className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-red-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                        Email Address (optional)
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="matt@example.com.au"
                        className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                        Catering Style
                      </label>
                      <select
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-red-500"
                      >
                        <option value="Club Pizza Party Feast">Club Pizza Party Feast</option>
                        <option value="School & Youth Presentation Night">School &amp; Youth Presentation Night</option>
                        <option value="Gourmet Pizza & Pasta Buffet">Gourmet Pizza &amp; Pasta Buffet</option>
                        <option value="Trade Crew & Workplace Lunch">Trade Crew &amp; Workplace Lunch</option>
                        <option value="Family Gathering / Reunion">Family Gathering / Reunion</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                        Estimated Guests: <span className="text-red-400 font-bold">{guestCount} people</span>
                      </label>
                      <input
                        type="number"
                        min="5"
                        max="300"
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                        className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                        Preferred Date / Time
                      </label>
                      <input
                        type="text"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        placeholder="e.g. Next Saturday 6:30 PM"
                        className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-red-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                      Order Notes &amp; Pizza Preferences
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. 15 large pizzas (Meatlovers, Margherita, Pepperoni, Veggie), 6 garlic breads, 4x 1.25L drinks..."
                      className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-red-500 resize-none"
                    />
                  </div>

                  {/* Dynamic Estimate Badge */}
                  <div className="p-3 bg-stone-900/90 rounded-xl border border-stone-800 flex items-center justify-between text-xs">
                    <span className="text-stone-400">Estimated Guide Budget:</span>
                    <span className="text-red-400 font-black text-sm">~${estimatedTotal} AUD</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-700 hover:bg-red-600 active:bg-red-800 disabled:opacity-50 text-white font-black py-3.5 px-4 rounded-xl text-sm transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Catering Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
