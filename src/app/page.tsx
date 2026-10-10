'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DirectOrderBanner from '@/components/DirectOrderBanner';
import PizzaBuilder from '@/components/PizzaBuilder';
import FlyersSection from '@/components/FlyersSection';
import Menu, { CartItem } from '@/components/Menu';
import CateringSection from '@/components/CateringSection';
import StorySection from '@/components/StorySection';
import LocationHours from '@/components/LocationHours';
import Footer from '@/components/Footer';
import AdminLeadsDrawer from '@/components/AdminLeadsDrawer';
import { MenuItem } from '@/data/menu';

export default function Home() {
  const [isLeadsDrawerOpen, setIsLeadsDrawerOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddCustomPizza = (customItem: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((ci) => ci.id === customItem.id);
      if (existing) {
        return prev.map((ci) =>
          ci.id === customItem.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { ...customItem, quantity: 1 }];
    });
  };

  const scrollToMenu = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#f3ede4] text-stone-900 font-sans selection:bg-red-200 selection:text-red-950">
      {/* Sticky Modular Header */}
      <Navbar
        onOpenLeadsModal={() => setIsLeadsDrawerOpen(true)}
        cartCount={cartCount}
        onCartClick={scrollToMenu}
      />

      {/* Hero Section */}
      <Hero />

      {/* Direct Order Savings Callout */}
      <DirectOrderBanner />

      {/* Dynamic Interactive Pizza Builder */}
      <PizzaBuilder onAddCustomPizza={handleAddCustomPizza} />

      {/* In-Store Counter Specials & Flyers */}
      <FlyersSection />

      {/* Specialty Pizzas, Pastas & Cart Summary */}
      <Menu cart={cart} setCart={setCart} />

      {/* Event Catering & Large Orders Lead Form */}
      <CateringSection />

      {/* The Beechworth Brand Story */}
      <StorySection />

      {/* Trading Hours, Location Map & Contact */}
      <LocationHours />

      {/* Site Footer with Admin Drawer Trigger */}
      <Footer onOpenLeadsModal={() => setIsLeadsDrawerOpen(true)} />

      {/* Admin Leads Slide-Over Drawer (Neon Postgres / Demo DB) */}
      <AdminLeadsDrawer
        isOpen={isLeadsDrawerOpen}
        onClose={() => setIsLeadsDrawerOpen(false)}
      />
    </main>
  );
}
