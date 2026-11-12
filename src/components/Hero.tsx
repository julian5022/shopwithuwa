import React from 'react';
import { ArrowRight, Sparkles, Scissors, Heart, Crown, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#220c1d] via-[#11050f] to-[#1a0916] pt-10 pb-16 sm:pt-14 sm:pb-24 border-b border-pink-500/30">
      {/* Radiant ambient pink glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-pink-500/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-rose-500/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-pink-600/15 blur-[110px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Top Kicker in vibrant pink */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-pink-500/20 border border-pink-400 shadow-[0_0_15px_rgba(244,114,182,0.3)]">
          <Sparkles className="w-4 h-4 text-pink-300 animate-spin" />
          <span className="text-pink-200 uppercase tracking-[0.25em] text-xs font-extrabold">
            Abuja's Premier Luxury Fashion & Beauty Destination
          </span>
        </div>

        {/* 2-Column Balanced Split: Left Typography + Right Campaign Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Bold Typography & Brand Statement */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
              Redefining <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-pink-400 to-rose-300 drop-shadow-[0_2px_20px_rgba(244,114,182,0.4)]">
                African Glamour
              </span>
              <br />
              <span className="text-pink-100">With Bespoke Grace.</span>
            </h1>

            <p className="text-base sm:text-lg text-pink-100/90 leading-relaxed font-normal max-w-2xl bg-black/30 p-4 rounded-2xl border border-pink-500/20">
              Welcome to <strong className="text-white font-bold">shopwithuwa</strong>. Founded by{' '}
              <strong className="text-pink-300 font-extrabold underline decoration-pink-400 decoration-2 underline-offset-4">Uwaila Imafidon Glory</strong> in the heart of Abuja, we curate double-drawn virgin wigs, tailored executive power suits, red-carpet evening gowns, radiant skincare elixirs, and bespoke custom tailoring created strictly to your body measurements.
            </p>

            {/* Quick action buttons with high pink energy */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('custom-made')}
                className="px-7 py-4 rounded-full bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 hover:from-pink-400 hover:to-rose-300 text-black font-extrabold text-sm tracking-wide transition-all shadow-[0_0_30px_rgba(244,114,182,0.55)] border-2 border-pink-200 flex items-center gap-2 cursor-pointer group hover:scale-102"
              >
                <Scissors className="w-4 h-4 text-black group-hover:rotate-12 transition-transform" />
                <span>Custom Made Attire</span>
                <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('wigs')}
                className="px-6 py-3.5 rounded-full bg-pink-500/20 hover:bg-pink-500/30 border-2 border-pink-400 text-pink-100 hover:text-white font-bold text-sm tracking-wide transition-all cursor-pointer flex items-center gap-2 shadow-[0_0_15px_rgba(244,114,182,0.25)]"
              >
                <span>Explore Wigs</span>
              </button>

              <button
                onClick={() => onNavigate('ready-to-wear')}
                className="px-6 py-3.5 rounded-full bg-pink-500/10 hover:bg-pink-500/25 border-2 border-pink-300/40 text-pink-200 hover:text-white font-bold text-sm tracking-wide transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Ready to Wear</span>
              </button>
            </div>

            {/* Quiet metadata and value pillars in pink boxes */}
            <div className="pt-6 border-t border-pink-500/30 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-3 rounded-xl bg-pink-500/10 border border-pink-400/30 space-y-1">
                <span className="text-pink-300 font-extrabold block text-sm">100% Virgin Hair</span>
                <span className="text-pink-100/70">Zero synthetic mix, double-drawn raw bundles</span>
              </div>
              <div className="p-3 rounded-xl bg-pink-500/10 border border-pink-400/30 space-y-1">
                <span className="text-pink-300 font-extrabold block text-sm">Bespoke Fit Studio</span>
                <span className="text-pink-100/70">Precision custom measurements for every silhouette</span>
              </div>
              <div className="p-3 rounded-xl bg-pink-500/10 border border-pink-400/30 space-y-1 col-span-2 sm:col-span-1">
                <span className="text-pink-300 font-extrabold block text-sm">Abuja Atelier</span>
                <span className="text-pink-100/70">Direct concierge ordering on WhatsApp</span>
              </div>
            </div>
          </div>

          {/* Right Column: Campaign High-Fashion Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-pink-400 shadow-[0_0_50px_rgba(244,114,182,0.35)] bg-zinc-950 group">
              <img
                src="/src/assets/images/wigs_luxury_collection_1794484910698.jpg"
                alt="shopwithuwa Luxury Hair and Haute Couture Campaign"
                className="w-full h-[480px] sm:h-[540px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* VIP WhatsApp Fitting Badge positioned safely at top-right without clashing */}
              <div className="absolute top-4 right-4 z-20">
                <a
                  href="https://wa.me/2347015578653?text=Hello%20shopwithuwa!%20I%20would%20like%20to%20inquire%20about%20an%20Abuja%20Atelier%20VIP%20Fitting."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#210c1c]/95 hover:bg-[#2f1027] border-2 border-pink-400/90 backdrop-blur-md px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-[0_8px_25px_rgba(244,114,182,0.4)] flex items-center gap-2.5 transition-all hover:scale-105 cursor-pointer group/vip"
                >
                  <div className="w-8 h-8 rounded-full bg-pink-500 text-black flex items-center justify-center font-bold shrink-0">
                    <ShieldCheck className="w-4 h-4 text-black" />
                  </div>
                  <div className="text-left">
                    <p className="text-white text-xs font-extrabold leading-tight">Abuja Atelier VIP Fitting</p>
                    <p className="text-pink-300 text-[10px] sm:text-[11px] font-bold group-hover/vip:text-pink-200">
                      Direct WhatsApp: 07015578653
                    </p>
                  </div>
                </a>
              </div>

              {/* Contrast scrim & campaign card - completely unhindered and clear */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b0917]/95 via-black/40 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center gap-2 text-pink-300 text-xs font-bold uppercase tracking-wider mb-1.5 bg-pink-500/30 px-3 py-1 rounded-full w-fit border border-pink-400">
                  <Crown className="w-3.5 h-3.5 text-pink-300" />
                  <span>The Signature Glory Look</span>
                </div>
                <h3 className="text-white font-serif text-xl sm:text-2xl font-bold">
                  Bone Straight Silk Melt & Bespoke Evening Silhouettes
                </h3>
                <p className="text-pink-100/80 text-xs mt-1">
                  Exclusively crafted in Abuja by Uwaila Imafidon Glory. Every piece tailored with love and precision.
                </p>

                <div className="mt-4 flex items-center justify-between pt-3 border-t border-pink-500/30 text-xs">
                  <span className="text-pink-300 font-bold">No Store Markups · Direct Atelier</span>
                  <button
                    onClick={() => onNavigate('ceo-story')}
                    className="text-pink-200 hover:text-white font-bold flex items-center gap-1.5 cursor-pointer transition-colors bg-pink-500/20 hover:bg-pink-500/30 px-3 py-1.5 rounded-lg border border-pink-400/40"
                  >
                    <span>Read CEO Story</span>
                    <ArrowRight className="w-3.5 h-3.5 text-pink-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Flagship Department Teasers with vibrant pink cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            onClick={() => onNavigate('wigs')}
            className="group p-5 rounded-2xl bg-gradient-to-b from-[#240e1f] via-[#1a0a16] to-[#120510] border-2 border-pink-500/40 hover:border-pink-300 transition-all cursor-pointer hover:-translate-y-1 duration-200 shadow-[0_6px_25px_rgba(244,114,182,0.15)]"
          >
            <div className="text-pink-300 text-xs font-bold uppercase tracking-wider mb-1 flex items-center justify-between">
              <span>01. Virgin Hair</span>
              <ArrowRight className="w-4 h-4 text-pink-400 group-hover:translate-x-1 transition-transform" />
            </div>
            <h4 className="text-white font-bold text-base mb-1 group-hover:text-pink-200">Luxury Wigs Collection</h4>
            <p className="text-pink-200/70 text-xs">Bone straight, deep wave curls, frontal HD lace melts & glueless braided units.</p>
          </div>

          <div
            onClick={() => onNavigate('ready-to-wear')}
            className="group p-5 rounded-2xl bg-gradient-to-b from-[#240e1f] via-[#1a0a16] to-[#120510] border-2 border-pink-500/40 hover:border-pink-300 transition-all cursor-pointer hover:-translate-y-1 duration-200 shadow-[0_6px_25px_rgba(244,114,182,0.15)]"
          >
            <div className="text-pink-300 text-xs font-bold uppercase tracking-wider mb-1 flex items-center justify-between">
              <span>02. Ready to Wear</span>
              <ArrowRight className="w-4 h-4 text-pink-400 group-hover:translate-x-1 transition-transform" />
            </div>
            <h4 className="text-white font-bold text-base mb-1 group-hover:text-pink-200">Executive & Gala Attires</h4>
            <p className="text-pink-200/70 text-xs">Sharp office suits, grand evening gowns & chic casual co-ords with direct size selection tabs.</p>
          </div>

          <div
            onClick={() => onNavigate('beauty')}
            className="group p-5 rounded-2xl bg-gradient-to-b from-[#240e1f] via-[#1a0a16] to-[#120510] border-2 border-pink-500/40 hover:border-pink-300 transition-all cursor-pointer hover:-translate-y-1 duration-200 shadow-[0_6px_25px_rgba(244,114,182,0.15)]"
          >
            <div className="text-pink-300 text-xs font-bold uppercase tracking-wider mb-1 flex items-center justify-between">
              <span>03. Radiance Care</span>
              <ArrowRight className="w-4 h-4 text-pink-400 group-hover:translate-x-1 transition-transform" />
            </div>
            <h4 className="text-white font-bold text-base mb-1 group-hover:text-pink-200">Perfumes & Skincare</h4>
            <p className="text-pink-200/70 text-xs">Oud perfumes, vitamin C serums, deep hydrating creams & gentle rosewater foaming washes.</p>
          </div>

          <div
            onClick={() => onNavigate('custom-made')}
            className="group p-5 rounded-2xl bg-gradient-to-b from-pink-900/40 via-[#220d1c] to-[#140612] border-2 border-pink-400 hover:border-pink-200 transition-all cursor-pointer hover:-translate-y-1 duration-200 shadow-[0_6px_25px_rgba(244,114,182,0.3)]"
          >
            <div className="text-pink-300 text-xs font-bold uppercase tracking-wider mb-1 flex items-center justify-between">
              <span>04. Made to Measure</span>
              <ArrowRight className="w-4 h-4 text-pink-400 group-hover:translate-x-1 transition-transform" />
            </div>
            <h4 className="text-white font-bold text-base mb-1 group-hover:text-pink-200">Custom Made Attire</h4>
            <p className="text-pink-200/80 text-xs">Bring your dream fashion idea to life. Input measurements & submit reference style JPEGs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
