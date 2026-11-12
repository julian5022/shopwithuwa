import React, { useState } from 'react';
import { Product } from '../types';
import { WIG_COLLECTION } from '../data/products';
import { Sparkles, Eye, ShoppingBag, MessageCircle, Check, Info } from 'lucide-react';

interface WigsSectionProps {
  onAddToInquiry: (product: Product, selectedSize?: string) => void;
  onQuickView: (product: Product) => void;
}

export const WigsSection: React.FC<WigsSectionProps> = ({
  onAddToInquiry,
  onQuickView
}) => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedLengths, setSelectedLengths] = useState<Record<string, string>>({});
  const [addedSuccessId, setAddedSuccessId] = useState<string | null>(null);

  const wigTypes = [
    'All',
    'Bone Straight',
    'Deep Wave / Curly',
    'Frontal HD Lace',
    'Pixie Cut Bob',
    'Glueless Braided',
    'Luxury Blonde & Colors',
    'Raw Virgin Bundles'
  ];

  const filteredWigs = selectedType === 'All' 
    ? WIG_COLLECTION 
    : WIG_COLLECTION.filter(w => w.subCategory === selectedType);

  const handleSelectLength = (productId: string, length: string) => {
    setSelectedLengths(prev => ({ ...prev, [productId]: length }));
  };

  const handleAdd = (product: Product) => {
    const chosenSize = selectedLengths[product.id] || product.defaultSize || (product.sizes ? product.sizes[0] : undefined);
    onAddToInquiry(product, chosenSize);
    setAddedSuccessId(product.id);
    setTimeout(() => setAddedSuccessId(null), 2000);
  };

  const openWhatsAppOrder = (product: Product) => {
    const length = selectedLengths[product.id] || product.defaultSize || 'Standard';
    const message = `Hello shopwithuwa! I would like to inquire about the ${product.name} (Length/Option: ${length}). Please provide availability and quote.`;
    window.open(`https://wa.me/2347015578653?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="wigs" className="py-16 sm:py-24 bg-gradient-to-b from-[#190916] via-[#10050d] to-[#180814] border-b border-pink-500/30 relative">
      {/* Pink decorative ambient glow */}
      <div className="absolute top-10 right-1/4 w-80 h-80 bg-pink-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-pink-300 text-xs font-extrabold uppercase tracking-widest mb-2 px-3 py-1 rounded-full bg-pink-500/20 border border-pink-400/40">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>Double-Drawn Virgin Human Hair</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              The Wig Atelier
            </h2>
            <p className="text-pink-100/80 text-sm sm:text-base mt-2 max-w-xl font-normal">
              Crafted with raw donor cuticle-aligned hair and ultra-thin invisible Swiss HD lace that melts seamlessly into any skin tone.
            </p>
          </div>

          {/* Boutique notice */}
          <div className="bg-[#210c1c] border-2 border-pink-400/50 px-5 py-3 rounded-2xl max-w-md text-xs text-pink-100 flex items-start gap-3 shadow-[0_4px_20px_rgba(244,114,182,0.2)]">
            <Info className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
            <span>
              <strong className="text-white font-bold">Concierge Pricing:</strong> To preserve exclusivity and custom head sizing, prices are quoted on request directly with our Abuja stylists.
            </span>
          </div>
        </div>

        {/* Filter Tabs in vibrant pink */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {wigTypes.map(type => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-5 py-2.5 rounded-full text-xs font-extrabold whitespace-nowrap transition-all cursor-pointer ${
                selectedType === type
                  ? 'bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 text-black shadow-[0_0_20px_rgba(244,114,182,0.55)] border-2 border-pink-200 scale-105'
                  : 'bg-[#220d1e] text-pink-200 hover:text-white border border-pink-500/40 hover:bg-pink-500/20 hover:border-pink-300'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWigs.map(product => {
            const currentLength = selectedLengths[product.id] || product.defaultSize || (product.sizes ? product.sizes[0] : '');

            return (
              <div
                key={product.id}
                className="group rounded-3xl bg-gradient-to-b from-[#220e1d] via-[#190a15] to-[#12050f] border-2 border-pink-500/35 hover:border-pink-300 transition-all duration-300 flex flex-col overflow-hidden shadow-[0_6px_30px_rgba(244,114,182,0.18)] hover:shadow-[0_12px_45px_rgba(244,114,182,0.35)]"
              >
                {/* Visual Area */}
                <div className="relative aspect-[4/3] bg-zinc-950 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />

                  {/* Overlays & Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/85 backdrop-blur-md text-[11px] font-extrabold text-pink-300 border border-pink-400 uppercase tracking-wider shadow-lg">
                      {product.subCategory}
                    </span>
                    {product.isBestseller && (
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 text-black text-[11px] font-black uppercase tracking-wider shadow-lg">
                        Bestseller
                      </span>
                    )}
                  </div>

                  {/* Quick View Button */}
                  <button
                    onClick={() => onQuickView(product)}
                    className="absolute bottom-3 right-3 p-2.5 rounded-full bg-black/80 hover:bg-pink-400 text-pink-200 hover:text-black border border-pink-400/50 transition-all cursor-pointer shadow-lg"
                    title="Quick View Specs"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-pink-200 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-pink-100/75 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Length Selection Tabs */}
                  {product.sizes && product.sizes.length > 0 && (
                    <div className="pt-2 border-t border-pink-500/20 bg-black/20 p-3 rounded-xl border border-pink-500/10">
                      <span className="text-[11px] uppercase tracking-wider text-pink-300 font-extrabold block mb-2">
                        Select Length (Inches):
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {product.sizes.map(size => {
                          const isSelected = currentLength === size;
                          return (
                            <button
                              key={size}
                              onClick={() => handleSelectLength(product.id, size)}
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

                  {/* Key feature bullets */}
                  <div className="space-y-1 text-xs text-pink-100/80">
                    {product.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-400 shadow-[0_0_6px_#f472b6]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action buttons (No Price Attached) */}
                  <div className="pt-3 border-t border-pink-500/30 flex items-center gap-2">
                    <button
                      onClick={() => handleAdd(product)}
                      className="flex-1 py-3 px-3 rounded-xl bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 hover:from-pink-400 hover:to-rose-300 text-black hover:scale-102 text-xs font-extrabold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(244,114,182,0.35)]"
                    >
                      {addedSuccessId === product.id ? (
                        <>
                          <Check className="w-4 h-4 text-black" />
                          <span>Added to Bag</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4 text-black" />
                          <span>Add to Inquiry</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => openWhatsAppOrder(product)}
                      className="p-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black transition-all cursor-pointer shadow-lg"
                      title="Order / Inquire via WhatsApp"
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
