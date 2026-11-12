import React, { useState } from 'react';
import { Product } from '../types';
import { READY_TO_WEAR_COLLECTION } from '../data/products';
import { Sparkles, Eye, ShoppingBag, MessageCircle, Check, Ruler } from 'lucide-react';

interface ReadyToWearSectionProps {
  onAddToInquiry: (product: Product, selectedSize?: string) => void;
  onQuickView: (product: Product) => void;
  onCustomAttireRedirect?: () => void;
}

export const ReadyToWearSection: React.FC<ReadyToWearSectionProps> = ({
  onAddToInquiry,
  onQuickView,
  onCustomAttireRedirect
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});
  const [addedSuccessId, setAddedSuccessId] = useState<string | null>(null);

  const categories = ['All', 'Office Wear', 'Gowns', 'Casual Outfits'];

  const filteredItems = selectedCategory === 'All'
    ? READY_TO_WEAR_COLLECTION
    : READY_TO_WEAR_COLLECTION.filter(item => item.subCategory === selectedCategory);

  const handleSelectSize = (productId: string, size: string) => {
    setSelectedSizes(prev => ({ ...prev, [productId]: size }));
  };

  const handleAdd = (product: Product) => {
    const chosenSize = selectedSizes[product.id] || product.defaultSize || (product.sizes ? product.sizes[0] : 'Standard');
    onAddToInquiry(product, chosenSize);
    setAddedSuccessId(product.id);
    setTimeout(() => setAddedSuccessId(null), 2000);
  };

  const openWhatsAppOrder = (product: Product) => {
    const size = selectedSizes[product.id] || product.defaultSize || 'Standard';
    const message = `Hello shopwithuwa! I want to order the Ready-to-Wear piece: "${product.name}" in Size ${size}. Please share availability and fitting consultation.`;
    window.open(`https://wa.me/2347015578653?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="ready-to-wear" className="py-16 sm:py-24 bg-gradient-to-b from-[#190815] via-[#10050d] to-[#1c0a18] border-b border-pink-500/30 relative">
      {/* Pink decorative ambient glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-pink-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-pink-300 text-xs font-extrabold uppercase tracking-widest mb-2 px-3 py-1 rounded-full bg-pink-500/20 border border-pink-400/40">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>Tailored Silhouettes · Abuja Showroom</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Ready to Wear Collection
            </h2>
            <p className="text-pink-100/80 text-sm sm:text-base mt-2 max-w-2xl font-normal">
              From power-boardroom tailored office suits to lavish red-carpet evening gowns and chic casual co-ords. Select your size tab underneath each item for instant reservation.
            </p>
          </div>

          {/* Custom sizing banner link */}
          {onCustomAttireRedirect && (
            <button
              onClick={onCustomAttireRedirect}
              className="px-5 py-3 rounded-full bg-pink-500/15 hover:bg-pink-500/25 border-2 border-pink-400 text-pink-200 hover:text-white text-xs font-extrabold flex items-center gap-2 transition-all cursor-pointer shadow-[0_0_15px_rgba(244,114,182,0.25)]"
            >
              <Ruler className="w-4 h-4 text-pink-300" />
              <span>Need exact custom measurements? Click here</span>
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-extrabold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 text-black shadow-[0_0_20px_rgba(244,114,182,0.55)] border-2 border-pink-200 scale-105'
                  : 'bg-[#220d1e] text-pink-200 hover:text-white border border-pink-500/40 hover:bg-pink-500/20 hover:border-pink-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Ready to Wear Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => {
            const currentSize = selectedSizes[item.id] || item.defaultSize || (item.sizes ? item.sizes[0] : 'UK 10 (M)');

            return (
              <div
                key={item.id}
                className="group rounded-3xl bg-gradient-to-b from-[#240f20] via-[#1a0a16] to-[#12050f] border-2 border-pink-500/40 hover:border-pink-300 transition-all duration-300 flex flex-col overflow-hidden shadow-[0_6px_30px_rgba(244,114,182,0.18)] hover:shadow-[0_12px_45px_rgba(244,114,182,0.35)]"
              >
                {/* Visual Area */}
                <div className="relative aspect-[4/3] bg-zinc-950 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />

                  {/* Overlays */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/85 backdrop-blur-md text-[11px] font-extrabold text-pink-300 border border-pink-400 uppercase tracking-wider shadow-lg">
                      {item.subCategory}
                    </span>
                    {item.isBestseller && (
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 text-black text-[11px] font-black uppercase tracking-wider shadow-lg">
                        Atelier Signature
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => onQuickView(item)}
                    className="absolute bottom-3 right-3 p-2.5 rounded-full bg-black/80 hover:bg-pink-400 text-pink-200 hover:text-black border border-pink-400/50 transition-all cursor-pointer shadow-lg"
                    title="Quick View Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-pink-200 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-pink-100/75 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* PROMINENT SIZE SELECTION TABS UNDERNEATH EACH ITEM (Radiant Pink Styling) */}
                  <div className="pt-3 border-t border-pink-500/30 bg-[#2b1023]/70 p-4 rounded-2xl border-2 border-pink-400/40 shadow-inner">
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-[11px] uppercase tracking-wider text-pink-300 font-extrabold flex items-center gap-1.5">
                        <Ruler className="w-3.5 h-3.5 text-pink-400" />
                        <span>Select Size Below:</span>
                      </span>
                      <span className="text-xs text-black font-extrabold bg-gradient-to-r from-pink-300 to-pink-200 px-2.5 py-0.5 rounded-full shadow-sm text-[11px]">
                        Active: {currentSize}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-1.5">
                      {item.sizes && item.sizes.map(size => {
                        const isSelected = currentSize === size;
                        return (
                          <button
                            key={size}
                            onClick={() => handleSelectSize(item.id, size)}
                            className={`py-2 px-1 text-[11px] font-extrabold rounded-xl transition-all cursor-pointer text-center whitespace-nowrap ${
                              isSelected
                                ? 'bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 text-black border-2 border-white shadow-[0_0_12px_rgba(244,114,182,0.7)] scale-102'
                                : 'bg-[#1b0816] text-pink-200 hover:text-white border border-pink-400/40 hover:border-pink-300 hover:bg-pink-500/20'
                            }`}
                          >
                            {size}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Fabric & Fit Feature Tags */}
                  <div className="space-y-1 text-xs text-pink-100/80">
                    {item.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-400 shadow-[0_0_6px_#f472b6]" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions (Strictly No Prices Attached) */}
                  <div className="pt-3 border-t border-pink-500/30 flex items-center gap-2">
                    <button
                      onClick={() => handleAdd(item)}
                      className="flex-1 py-3 px-3 rounded-xl bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 hover:from-pink-400 hover:to-rose-300 text-black hover:scale-102 text-xs font-extrabold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(244,114,182,0.35)]"
                    >
                      {addedSuccessId === item.id ? (
                        <>
                          <Check className="w-4 h-4 text-black" />
                          <span>Reserved ({currentSize})</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4 text-black" />
                          <span>Add ({currentSize})</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => openWhatsAppOrder(item)}
                      className="p-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black transition-all cursor-pointer shadow-lg"
                      title="Direct Inquiry via WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
