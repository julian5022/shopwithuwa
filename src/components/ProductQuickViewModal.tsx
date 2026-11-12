import React, { useState } from 'react';
import { Product } from '../types';
import { X, ShoppingBag, MessageCircle, Check, Ruler, Sparkles, ShieldCheck } from 'lucide-react';

interface ProductQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToInquiry: (product: Product, size?: string) => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  onClose,
  onAddToInquiry
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<string>(
    product.defaultSize || (product.sizes ? product.sizes[0] : 'Standard')
  );
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    onAddToInquiry(product, selectedSize);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  const openWhatsAppOrder = () => {
    const message = `Hello shopwithuwa! I want to order "${product.name}" (${selectedSize}). Please confirm availability in Abuja.`;
    window.open(`https://wa.me/2347015578653?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      <div className="relative bg-gradient-to-b from-[#240e1f] via-[#1a0a16] to-[#0e050c] border-2 border-pink-400/70 rounded-3xl max-w-3xl w-full overflow-hidden shadow-[0_0_50px_rgba(244,114,182,0.3)] z-10 my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-pink-200 hover:text-white p-2 rounded-full bg-pink-950/80 hover:bg-pink-900 backdrop-blur-md border border-pink-400/40 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Visual Side */}
          <div className="relative aspect-[4/3] md:aspect-auto md:h-full bg-zinc-950 border-b md:border-b-0 md:border-r border-pink-500/20">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-pink-950/90 backdrop-blur-md text-xs font-black text-pink-300 border border-pink-400/50 uppercase tracking-wider shadow-md">
                {product.subCategory}
              </span>
            </div>
          </div>

          {/* Details Side */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-gradient-to-b from-[#240e1f]/70 to-[#12050e]">
            <div>
              <div className="flex items-center gap-1.5 text-pink-300 text-xs font-extrabold uppercase tracking-widest mb-1.5">
                <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
                <span>shopwithuwa Signature Atelier</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-white leading-tight">
                {product.name}
              </h3>

              <p className="text-pink-100/90 text-xs sm:text-sm mt-3 leading-relaxed font-light">
                {product.description}
              </p>
            </div>

            {/* Size Tabs if applicable */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-pink-500/20">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-pink-200 font-bold flex items-center gap-1.5">
                    <Ruler className="w-3.5 h-3.5 text-pink-400" />
                    <span>Select Size / Option:</span>
                  </span>
                  <span className="text-pink-300 text-xs font-black bg-pink-950/80 px-2 py-0.5 rounded border border-pink-400/30">
                    {selectedSize}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                        selectedSize === size
                          ? 'bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 text-black border border-pink-200 font-black shadow-[0_0_15px_rgba(244,114,182,0.6)] scale-105'
                          : 'bg-pink-950/40 text-pink-200 hover:text-white border border-pink-500/30 hover:border-pink-400 hover:bg-pink-900/40'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Specifications breakdown */}
            {product.specs && (
              <div className="space-y-2 pt-2 border-t border-pink-500/20 text-xs">
                <span className="text-xs uppercase tracking-wider text-pink-300 font-bold block">
                  Specifications & Craftsmanship
                </span>
                <div className="space-y-1.5 bg-black/40 p-3 rounded-xl border border-pink-500/20">
                  {Object.entries(product.specs).map(([key, val]) => (
                    <div key={key} className="flex justify-between text-zinc-300">
                      <span className="text-pink-300/80 font-medium">{key}:</span>
                      <span className="font-semibold text-white text-right max-w-[60%] truncate">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Bar (No Prices Attached) */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between text-xs text-zinc-300">
                <span className="flex items-center gap-1 text-pink-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-pink-400" />
                  <span>Abuja Direct Atelier</span>
                </span>
                <span className="text-pink-300 font-extrabold uppercase tracking-wide">Concierge Quote</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleAdd}
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 hover:from-pink-400 hover:to-rose-300 text-black font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(244,114,182,0.5)] active:scale-95"
                >
                  {justAdded ? (
                    <>
                      <Check className="w-4 h-4 text-black stroke-[3]" />
                      <span>Added to Bag</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4 text-black stroke-[2.5]" />
                      <span>Add to Inquiry Bag</span>
                    </>
                  )}
                </button>

                <button
                  onClick={openWhatsAppOrder}
                  className="p-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black transition-all cursor-pointer shadow-[0_0_15px_rgba(37,211,102,0.3)] hover:scale-105 active:scale-95"
                  title="WhatsApp Direct Order"
                >
                  <MessageCircle className="w-5 h-5 fill-black" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
