import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Phone, Mail, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  inquiryCount: number;
  openInquiryDrawer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  inquiryCount,
  openInquiryDrawer
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'wigs', label: 'Wigs' },
    { id: 'ready-to-wear', label: 'Ready to Wear' },
    { id: 'beauty', label: 'Beauty' },
    { id: 'custom-made', label: 'Custom Attire' },
    { id: 'ceo-story', label: 'CEO Story' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0d050b]/95 backdrop-blur-md border-b border-pink-500/30 shadow-[0_4px_25px_rgba(244,114,182,0.15)]">
      {/* Top micro contact bar with rich pink tones */}
      <div className="bg-gradient-to-r from-[#240e1f] via-[#180a15] to-[#240e1f] border-b border-pink-500/30 py-2 px-4 sm:px-8 text-xs text-pink-200">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-pink-100">
              <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse shadow-[0_0_8px_#f472b6]" />
              <span className="text-pink-300 font-bold">Abuja, Nigeria</span> · Bespoke Atelier & Luxury Studio
            </span>
            <span className="hidden sm:inline-block text-pink-500/50">|</span>
            <a 
              href="tel:07015578653" 
              className="hidden sm:flex items-center gap-1.5 text-pink-200 hover:text-white transition-colors font-medium"
            >
              <Phone className="w-3 h-3 text-pink-400" />
              <span>07015578653</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="mailto:shopwithuwa@gmail.com" 
              className="flex items-center gap-1.5 text-pink-200 hover:text-white transition-colors"
            >
              <Mail className="w-3 h-3 text-pink-400" />
              <span>shopwithuwa@gmail.com</span>
            </a>
            <span className="hidden md:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-pink-500/20 border border-pink-400/40 text-pink-200 font-semibold text-[11px]">
              CEO: Uwaila Imafidon Glory
            </span>
          </div>
        </div>
      </div>

      {/* Main Top Bar adhering strictly to Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Display Serif with Pink Glow) */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <div className="flex items-baseline tracking-tight">
            <span className="font-serif text-2xl sm:text-3xl font-extrabold tracking-wider text-white group-hover:text-pink-100 transition-colors">
              SHOPWITH
            </span>
            <span className="font-serif text-2xl sm:text-3xl font-black text-pink-400 group-hover:text-pink-300 transition-colors drop-shadow-[0_0_16px_rgba(244,114,182,0.6)] ml-0.5">
              UWA
            </span>
          </div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-pink-300 font-semibold -mt-0.5 flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5 text-pink-400" />
            <span>Abuja Haute Couture & Luxury Wigs</span>
          </p>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold tracking-wide">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`whitespace-nowrap transition-all duration-200 cursor-pointer relative py-1.5 px-2 rounded-lg ${
                  isActive
                    ? 'text-pink-200 bg-pink-500/15 border border-pink-400/40 font-bold shadow-[0_0_12px_rgba(244,114,182,0.25)]'
                    : 'text-zinc-200 hover:text-pink-300 hover:bg-pink-500/10'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-2 right-2 h-0.5 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action (Inquiry Bag / Concierge) */}
        <div className="flex items-center gap-3">
          <button
            onClick={openInquiryDrawer}
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-600 via-pink-500 to-rose-600 hover:from-pink-500 hover:via-rose-400 hover:to-pink-500 text-white font-black hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shadow-[0_0_25px_rgba(244,114,182,0.6)] border-2 border-pink-200 group"
          >
            <div className="relative">
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[2.5] group-hover:scale-110 transition-transform" />
              {inquiryCount > 0 && (
                <span className="absolute -top-2.5 -right-2.5 min-w-5 h-5 px-1 rounded-full bg-white text-pink-600 font-black text-[11px] flex items-center justify-center border-2 border-pink-600 shadow-md">
                  {inquiryCount}
                </span>
              )}
            </div>
            <span className="text-xs sm:text-sm font-black tracking-wider uppercase text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] whitespace-nowrap">
              Inquiry Bag
            </span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg text-pink-300 hover:text-white hover:bg-pink-500/20 border border-pink-500/30 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-pink-300" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#150a12] border-b-2 border-pink-400/40 px-6 py-6 space-y-4 shadow-2xl">
          <div className="grid grid-cols-1 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-4 py-3 rounded-xl text-base font-bold transition-all cursor-pointer flex items-center justify-between ${
                  activeTab === link.id
                    ? 'bg-gradient-to-r from-pink-500/25 to-pink-500/10 text-pink-200 border border-pink-400'
                    : 'text-zinc-200 hover:bg-pink-500/10 hover:text-pink-300'
                }`}
              >
                <span>{link.label}</span>
                {activeTab === link.id && <Sparkles className="w-4 h-4 text-pink-300" />}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-pink-500/20 text-xs text-pink-200/80 space-y-2">
            <p className="text-pink-300 font-bold">Bespoke Atelier · Abuja, Nigeria</p>
            <p>Direct Order & Fittings: <a href="tel:07015578653" className="text-white font-bold hover:underline">07015578653</a></p>
            <p>Email: <a href="mailto:shopwithuwa@gmail.com" className="text-white font-bold hover:underline">shopwithuwa@gmail.com</a></p>
          </div>
        </div>
      )}
    </header>
  );
};
