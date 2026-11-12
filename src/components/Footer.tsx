import React from 'react';
import { Phone, Mail, MapPin, Sparkles, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-t from-[#1d0a19] via-[#10050d] to-[#0c040a] border-t-2 border-pink-500/30 text-white pt-16 pb-12 relative shadow-[0_-4px_30px_rgba(244,114,182,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-pink-500/20">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-baseline tracking-tight">
              <span className="font-serif text-2xl sm:text-3xl font-extrabold text-white">
                SHOPWITH
              </span>
              <span className="font-serif text-2xl sm:text-3xl font-black text-pink-400 drop-shadow-[0_0_12px_rgba(244,114,182,0.5)] ml-0.5">
                UWA
              </span>
            </div>

            <p className="text-pink-100/80 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
              Abuja’s premier destination for luxury double-drawn virgin wigs, red-carpet ready-to-wear attires, radiant beauty elixirs, and bespoke custom-made fashion. Founded and led by <strong className="text-pink-300 font-bold">Uwaila Imafidon Glory</strong>.
            </p>

            <div className="pt-2 text-xs text-pink-300 flex items-center gap-2 font-bold">
              <Sparkles className="w-4 h-4 text-pink-400" />
              <span>Bespoke Elegance · Uncompromising Luxury · Abuja, Nigeria</span>
            </div>
          </div>

          {/* Quick Department Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-pink-300 font-extrabold text-xs uppercase tracking-widest">
              Departments
            </h4>
            <ul className="space-y-2.5 text-xs text-pink-100/80">
              <li>
                <button
                  onClick={() => onNavigate('wigs')}
                  className="hover:text-pink-300 transition-colors cursor-pointer hover:translate-x-1 duration-150 flex items-center gap-1"
                >
                  <span className="text-pink-400">›</span>
                  <span>Luxury Virgin Hair Wigs</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ready-to-wear')}
                  className="hover:text-pink-300 transition-colors cursor-pointer hover:translate-x-1 duration-150 flex items-center gap-1"
                >
                  <span className="text-pink-400">›</span>
                  <span>Ready to Wear (Office, Gowns & Casual)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('beauty')}
                  className="hover:text-pink-300 transition-colors cursor-pointer hover:translate-x-1 duration-150 flex items-center gap-1"
                >
                  <span className="text-pink-400">›</span>
                  <span>Beauty, Perfumes & Skincare</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('custom-made')}
                  className="hover:text-pink-300 transition-colors cursor-pointer hover:translate-x-1 duration-150 flex items-center gap-1"
                >
                  <span className="text-pink-400">›</span>
                  <span>Custom Made Attire Studio</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ceo-story')}
                  className="hover:text-pink-300 transition-colors cursor-pointer hover:translate-x-1 duration-150 flex items-center gap-1"
                >
                  <span className="text-pink-400">›</span>
                  <span>CEO Story: Uwaila Imafidon Glory</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Concierge Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-pink-300 font-extrabold text-xs uppercase tracking-widest">
              Abuja Atelier & Showroom
            </h4>

            <div className="space-y-2.5 text-xs text-pink-100">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                <span>Federal Capital Territory, Abuja, Nigeria</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-pink-400 shrink-0" />
                <a href="tel:07015578653" className="hover:text-white transition-colors font-bold text-pink-200">
                  07015578653
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-pink-400 shrink-0" />
                <a href="mailto:shopwithuwa@gmail.com" className="hover:text-white transition-colors font-bold text-pink-200">
                  shopwithuwa@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/2347015578653"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 hover:from-pink-400 hover:to-rose-300 text-black text-xs font-extrabold transition-all shadow-[0_0_15px_rgba(244,114,182,0.4)]"
              >
                <span>WhatsApp VIP Concierge: 07015578653</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-pink-200/70">
          <p>
            © {new Date().getFullYear()} <strong className="text-white">shopwithuwa</strong>. All rights reserved. Handcrafted with passion in Abuja.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-pink-300 hover:text-white transition-colors cursor-pointer font-bold"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 text-pink-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
