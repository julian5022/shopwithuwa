import React from 'react';
import { Phone, Mail, MapPin, Sparkles, MessageCircle, Heart, Quote, Award } from 'lucide-react';

export const CeoStory: React.FC = () => {
  const whatsappUrl = `https://wa.me/2347015578653?text=${encodeURIComponent(
    'Hello Uwaila! I am visiting shopwithuwa and would love to consult with you directly regarding fashion & wigs.'
  )}`;

  return (
    <section id="ceo-story" className="py-20 bg-gradient-to-b from-[#1c0a18] via-[#10050d] to-[#1c0919] border-b border-pink-500/30 relative overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute -top-32 right-0 w-96 h-96 bg-pink-500/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-pink-600/15 blur-[110px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/20 border-2 border-pink-400 text-pink-200 text-xs font-extrabold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(244,114,182,0.3)]">
            <Sparkles className="w-4 h-4 text-pink-400 animate-spin" />
            <span>The Visionary Behind The Brand</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Meet Our CEO & Creative Director
          </h2>
          <p className="text-pink-100/80 text-base sm:text-lg mt-3 font-normal">
            How Uwaila Imafidon Glory turned a passion for perfection into Abuja’s most trusted bespoke luxury atelier.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Portrait & Atelier Visual */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border-2 border-pink-400 shadow-[0_0_45px_rgba(244,114,182,0.35)] bg-zinc-900 group">
              <img
                src="/images/ceo_uwaila_glory.jpeg"
                alt="Uwaila Imafidon Glory - Founder & CEO of shopwithuwa"
                className="w-full h-[500px] object-cover object-top group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#200b1a] via-[#10050d]/30 to-transparent flex flex-col justify-end p-6">
                <div className="bg-[#1c0c17]/95 backdrop-blur-md p-5 rounded-2xl border-2 border-pink-400/50 shadow-lg">
                  <h3 className="text-white font-serif text-xl sm:text-2xl font-bold">
                    Uwaila Imafidon Glory
                  </h3>
                  <p className="text-pink-300 text-xs font-extrabold uppercase tracking-wider mt-0.5">
                    Founder, CEO & Lead Fashion Architect
                  </p>
                  <p className="text-pink-100/80 text-xs mt-2 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-pink-400 shrink-0" />
                    <span>Abuja, Federal Capital Territory, Nigeria</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick credentials badge in pink */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-gradient-to-b from-[#260e21] to-[#170814] border-2 border-pink-500/40">
                <p className="text-pink-300 font-extrabold text-2xl font-serif">100%</p>
                <p className="text-pink-100/80 text-xs mt-0.5">Pure Human Hair Integrity Guaranteed</p>
              </div>
              <div className="p-4 rounded-2xl bg-gradient-to-b from-[#260e21] to-[#170814] border-2 border-pink-500/40">
                <p className="text-pink-300 font-extrabold text-2xl font-serif">Bespoke</p>
                <p className="text-pink-100/80 text-xs mt-0.5">Tailored to exact custom body measurements</p>
              </div>
            </div>
          </div>

          {/* Right Column: The CEO Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative pl-6 border-l-4 border-pink-400 bg-pink-950/20 p-5 rounded-r-2xl border-y border-r border-pink-500/20">
              <Quote className="w-8 h-8 text-pink-400 absolute -top-4 -left-4 bg-[#1a0815] p-1 rounded-full border border-pink-400" />
              <p className="font-serif italic text-xl sm:text-2xl text-pink-100 font-medium leading-relaxed">
                "I believe every woman is royalty in her own right. You shouldn't have to settle for ill-fitting mass-produced clothes or low-grade hair that tangles in the Nigerian heat. At shopwithuwa, our mission is to deliver unmatched bespoke craftsmanship that honours your individuality."
              </p>
              <p className="text-pink-300 text-sm mt-3 font-sans font-extrabold">
                — Uwaila Imafidon Glory
              </p>
            </div>

            <div className="space-y-4 text-pink-100/90 text-sm sm:text-base leading-relaxed font-normal bg-black/25 p-5 rounded-2xl border border-pink-500/20">
              <p>
                Founded in the vibrant capital city of <strong className="text-white font-bold">Abuja, Nigeria</strong>, <strong className="text-pink-300 font-bold">shopwithuwa</strong> began with a clear purpose: solving the frustrations modern African women face when looking for genuinely high-grade raw human hair, reliable tailored office attire, and show-stopping bespoke dinner gowns.
              </p>
              <p>
                Uwaila immersed herself in the artistry of fabric drape, corset engineering, and raw human hair sourcing across Asia and Africa. She established a standard where no synthetic fibers are tolerated, and where custom garments are constructed using true couture techniques — incorporating hand-stitched boning, seamless silk linings, and custom pattern making for every client's unique measurements.
              </p>
              <p>
                Today, <strong className="text-white font-bold">shopwithuwa</strong> serves clients across Abuja and worldwide. We believe in high-touch concierge luxury — which is why we do not hide behind automated checkout bots. Instead, our team personally confirms your fit, preferences, and delivery timeline before bringing your dream ensemble to life.
              </p>
            </div>

            {/* Direct CEO & Showroom Contact Card with Rich Pink Glow */}
            <div className="p-7 rounded-3xl bg-gradient-to-br from-[#2e1026] via-[#1f0a18] to-[#150611] border-2 border-pink-400 shadow-[0_10px_35px_rgba(244,114,182,0.3)] space-y-5 mt-8">
              <h4 className="text-white font-extrabold text-base flex items-center gap-2">
                <Award className="w-5 h-5 text-pink-400" />
                <span>Direct Showroom & Concierge Contact</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <a
                  href="tel:07015578653"
                  className="flex items-center gap-3.5 p-4 rounded-2xl bg-pink-950/40 hover:bg-pink-500/20 border-2 border-pink-400/50 hover:border-pink-300 transition-all text-pink-100 hover:text-white"
                >
                  <div className="w-11 h-11 rounded-full bg-pink-500 text-black flex items-center justify-center shrink-0 font-bold">
                    <Phone className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <span className="text-[11px] text-pink-300 font-bold block uppercase tracking-wider">Direct Telephone</span>
                    <span className="font-extrabold text-white text-base">07015578653</span>
                  </div>
                </a>

                <a
                  href="mailto:shopwithuwa@gmail.com"
                  className="flex items-center gap-3.5 p-4 rounded-2xl bg-pink-950/40 hover:bg-pink-500/20 border-2 border-pink-400/50 hover:border-pink-300 transition-all text-pink-100 hover:text-white"
                >
                  <div className="w-11 h-11 rounded-full bg-pink-500 text-black flex items-center justify-center shrink-0 font-bold">
                    <Mail className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <span className="text-[11px] text-pink-300 font-bold block uppercase tracking-wider">Official Email</span>
                    <span className="font-extrabold text-white truncate block">shopwithuwa@gmail.com</span>
                  </div>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black font-extrabold text-xs sm:text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(37,211,102,0.4)] flex items-center gap-2 cursor-pointer hover:scale-102"
                >
                  <MessageCircle className="w-5 h-5 text-black" />
                  <span>Chat with Uwaila on WhatsApp</span>
                </a>
                <span className="text-xs text-pink-200/80 font-medium">
                  Located in Abuja, Nigeria · VIP Atelier Visits by Appointment
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
