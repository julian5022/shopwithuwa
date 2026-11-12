import React, { useState } from 'react';
import { Product } from '../types';
import { BEAUTY_COLLECTION } from '../data/products';
import { Sparkles, Eye, ShoppingBag, MessageCircle, Check, Droplets } from 'lucide-react';

interface BeautySectionProps {
  onAddToInquiry: (product: Product, selectedSize?: string) => void;
  onQuickView: (product: Product) => void;
}

export const BeautySection: React.FC<BeautySectionProps> = ({
  onAddToInquiry,
  onQuickView
}) => {
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('All');
  const [selectedVolumes, setSelectedVolumes] = useState<Record<string, string>>({});
  const [addedSuccessId, setAddedSuccessId] = useState<string | null>(null);

  const subCategories = ['All', 'Perfumes', 'Creams', 'Serums', 'Cleansers'];

  const filteredItems = selectedSubCategory === 'All'
    ? BEAUTY_COLLECTION
    : BEAUTY_COLLECTION.filter(item => item.subCategory === selectedSubCategory);

  const handleSelectVolume = (productId: string, volume: string) => {
    setSelectedVolumes(prev => ({ ...prev, [productId]: volume }));
  };

  const handleAdd = (product: Product) => {
    const chosenSize = selectedVolumes[product.id] || product.defaultSize || (product.sizes ? product.sizes[0] : 'Standard');
    onAddToInquiry(product, chosenSize);
    setAddedSuccessId(product.id);
    setTimeout(() => setAddedSuccessId(null), 2000);
  };

  const openWhatsAppOrder = (product: Product) => {
    const vol = selectedVolumes[product.id] || product.defaultSize || 'Standard';
    const message = `Hello shopwithuwa! I would like to order the beauty product: "${product.name}" (${vol}). Please share dispatch details for Abuja.`;
    window.open(`https://wa.me/2347015578653?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="beauty" className="py-16 sm:py-24 bg-gradient-to-b from-[#190815] via-[#10050d] to-[#1a0815] border-b border-pink-500/30 relative">
      {/* Pink decorative ambient glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-pink-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-pink-300 text-xs font-extrabold uppercase tracking-widest mb-2 px-3 py-1 rounded-full bg-pink-500/20 border border-pink-400/40">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>Sensorial Apothecary & Radiance Elixirs</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Curated Beauty Collection
            </h2>
            <p className="text-pink-100/80 text-sm sm:text-base mt-2 max-w-xl font-normal">
              From long-lasting Arabian Oud & French floral perfumes, to raw whipped shea creams, antioxidant Vitamin C serums, and gentle botanical foaming washes.
            </p>
          </div>

          <div className="bg-[#240e1f] border-2 border-pink-400/50 px-5 py-3 rounded-2xl max-w-sm text-xs text-pink-100 flex items-center gap-3 shadow-[0_4px_20px_rgba(244,114,182,0.2)]">
            <Droplets className="w-5 h-5 text-pink-400 shrink-0" />
            <span>Formulated for tropical climates. Cruelty-free & dermatologically tested.</span>
          </div>
        </div>

        {/* SubCategory Filter Tabs in vibrant pink */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {subCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedSubCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-extrabold whitespace-nowrap transition-all cursor-pointer ${
                selectedSubCategory === cat
                  ? 'bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 text-black shadow-[0_0_20px_rgba(244,114,182,0.55)] border-2 border-pink-200 scale-105'
                  : 'bg-[#220d1e] text-pink-200 hover:text-white border border-pink-500/40 hover:bg-pink-500/20 hover:border-pink-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Beauty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => {
            const currentVol = selectedVolumes[item.id] || item.defaultSize || (item.sizes ? item.sizes[0] : '');

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

                  {/* Category Pill & Bestseller */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/85 backdrop-blur-md text-[11px] font-extrabold text-pink-300 border border-pink-400 uppercase tracking-wider shadow-lg">
                      {item.subCategory}
                    </span>
                    {item.isBestseller && (
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 text-black text-[11px] font-black uppercase tracking-wider shadow-lg">
                        Favorite
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => onQuickView(item)}
                    className="absolute bottom-3 right-3 p-2.5 rounded-full bg-black/80 hover:bg-pink-400 text-pink-200 hover:text-black border border-pink-400/50 transition-all cursor-pointer shadow-lg"
                    title="View Ritual & Notes"
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

                  {/* Volume Selection Tabs */}
                  {item.sizes && item.sizes.length > 0 && (
                    <div className="pt-2 border-t border-pink-500/20 bg-black/20 p-3 rounded-xl border border-pink-500/10">
                      <span className="text-[11px] uppercase tracking-wider text-pink-300 font-extrabold block mb-2">
                        Select Flacon / Jar Volume:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.sizes.map(size => {
                          const isSelected = currentVol === size;
                          return (
                            <button
                              key={size}
                              onClick={() => handleSelectVolume(item.id, size)}
                              className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-gradient-to-r from-pink-500 to-rose-400 text-black border border-pink-200 shadow-[0_0_10px_rgba(244,114,182,0.5)]'
                                  : 'bg-pink-500/10 text-pink-200 hover:text-white border border-pink-500/30 hover:border-pink-300 hover:bg-pink-500/20'
                              }`}
                            >
                              {size}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Specs / Notes tags */}
                  <div className="space-y-1 text-xs text-pink-100/80">
                    {item.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-400 shadow-[0_0_6px_#f472b6]" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action buttons (No Prices Attached) */}
                  <div className="pt-3 border-t border-pink-500/30 flex items-center gap-2">
                    <button
                      onClick={() => handleAdd(item)}
                      className="flex-1 py-3 px-3 rounded-xl bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 hover:from-pink-400 hover:to-rose-300 text-black hover:scale-102 text-xs font-extrabold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(244,114,182,0.35)]"
                    >
                      {addedSuccessId === item.id ? (
                        <>
                          <Check className="w-4 h-4 text-black" />
                          <span>Added to Bag</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4 text-black" />
                          <span>Add to Bag</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => openWhatsAppOrder(item)}
                      className="p-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black transition-all cursor-pointer shadow-lg"
                      title="Direct Order via WhatsApp"
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
