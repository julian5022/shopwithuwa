import React, { useState } from 'react';
import { InquiryItem } from '../types';
import { X, Trash2, Plus, Minus, MessageCircle, Mail, Phone, ShoppingBag, Sparkles, Check } from 'lucide-react';

interface InquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: InquiryItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearBag: () => void;
}

export const InquiryDrawer: React.FC<InquiryDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearBag
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerLocation, setCustomerLocation] = useState('');
  const [customerNotes, setCustomerNotes] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  if (!isOpen) return null;

  const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const generateOrderText = () => {
    let text = `*SHOPWITHUWA ORDER INQUIRY*\n`;
    text += `*Atelier & Showroom: Abuja, Nigeria*\n\n`;
    text += `*Customer Details:*\n`;
    text += `• Name: ${customerName || 'Valued Client'}\n`;
    text += `• Phone: ${customerPhone || 'Not provided'}\n`;
    text += `• Location/Address: ${customerLocation || 'Abuja'}\n\n`;

    text += `*Curated Selection (${totalItemsCount} item${totalItemsCount > 1 ? 's' : ''}):*\n`;
    items.forEach((item, index) => {
      text += `${index + 1}. *${item.product.name}*\n`;
      text += `   Category: ${item.product.subCategory}\n`;
      text += `   Size/Option: ${item.selectedSize || 'Standard'}\n`;
      text += `   Qty: ${item.quantity}\n\n`;
    });

    if (customerNotes) {
      text += `*Special Instructions:*\n${customerNotes}\n\n`;
    }

    text += `Please confirm availability and fitting/dispatch details for this order!`;
    return text;
  };

  const handleWhatsAppSend = () => {
    const text = generateOrderText();
    const url = `https://wa.me/2347015578653?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 3000);
  };

  const handleEmailSend = () => {
    const text = generateOrderText();
    const subject = encodeURIComponent(`Store Inquiry: ${customerName || 'Client'} (${totalItemsCount} items)`);
    const body = encodeURIComponent(text);
    window.open(`mailto:shopwithuwa@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-gradient-to-b from-[#240e1f] via-[#180815] to-[#12050f] border-l-2 border-pink-400 shadow-[0_0_50px_rgba(244,114,182,0.3)] flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-pink-500/30 flex items-center justify-between bg-black/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-pink-500 text-black flex items-center justify-center font-bold shadow-[0_0_15px_rgba(244,114,182,0.5)]">
                <ShoppingBag className="w-5 h-5 text-black" />
              </div>
              <div>
                <h3 className="text-white font-serif text-lg font-bold">
                  Curated Inquiry Bag
                </h3>
                <p className="text-pink-300 text-xs font-semibold">
                  {totalItemsCount} {totalItemsCount === 1 ? 'piece' : 'pieces'} selected
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="text-pink-300 hover:text-white p-2 rounded-full hover:bg-pink-500/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-pink-500/10 mx-auto flex items-center justify-center text-pink-400 border border-pink-400/30">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">Your inquiry bag is empty</h4>
                  <p className="text-pink-200/70 text-xs mt-1">
                    Explore our wigs, ready-to-wear attires, and beauty elixirs to reserve your favorite pieces.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-pink-300 pb-2 border-b border-pink-500/20 font-semibold">
                  <span>Selected Pieces</span>
                  <button
                    onClick={onClearBag}
                    className="text-rose-400 hover:text-rose-300 font-bold cursor-pointer"
                  >
                    Clear All
                  </button>
                </div>

                {items.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl bg-pink-950/30 border-2 border-pink-500/35 flex gap-4 items-center shadow-md"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 rounded-xl object-cover bg-black shrink-0 border border-pink-400/40"
                    />

                    <div className="flex-1 min-w-0">
                      <h4 className="text-white text-xs font-bold truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-pink-300 text-[11px] font-extrabold mt-0.5">
                        Size / Option: <span className="text-white bg-pink-500/30 px-1.5 py-0.5 rounded border border-pink-400/30 ml-1">{item.selectedSize || 'Standard'}</span>
                      </p>
                      <p className="text-pink-200/70 text-[10px] mt-0.5">
                        Category: {item.product.subCategory}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center bg-black/60 rounded-lg border border-pink-400/40">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1.5 hover:text-pink-300 text-zinc-300"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-extrabold text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1.5 hover:text-pink-300 text-zinc-300"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-pink-400 hover:text-rose-300 p-1 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Customer Details Form */}
                <div className="pt-4 border-t border-pink-500/30 space-y-3">
                  <h4 className="text-pink-300 font-extrabold text-xs uppercase tracking-wider">
                    Concierge Reservation Details
                  </h4>

                  <input
                    type="text"
                    placeholder="Your Name *"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-pink-950/20 border-2 border-pink-500/40 text-white placeholder-pink-300/40 text-xs focus:outline-none focus:border-pink-300"
                  />

                  <input
                    type="tel"
                    placeholder="Phone / WhatsApp Number *"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-pink-950/20 border-2 border-pink-500/40 text-white placeholder-pink-300/40 text-xs focus:outline-none focus:border-pink-300"
                  />

                  <input
                    type="text"
                    placeholder="Delivery City / Address (e.g. Maitama, Abuja)"
                    value={customerLocation}
                    onChange={(e) => setCustomerLocation(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-pink-950/20 border-2 border-pink-500/40 text-white placeholder-pink-300/40 text-xs focus:outline-none focus:border-pink-300"
                  />

                  <textarea
                    rows={2}
                    placeholder="Additional notes for Uwaila & team..."
                    value={customerNotes}
                    onChange={(e) => setCustomerNotes(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-pink-950/20 border-2 border-pink-500/40 text-white placeholder-pink-300/40 text-xs focus:outline-none focus:border-pink-300"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-pink-500/30 bg-[#160613] space-y-3">
            <div className="text-[11px] text-pink-200/80 flex items-center justify-between font-semibold">
              <span>Pricing & Payment:</span>
              <span className="text-pink-300 font-extrabold">Direct Concierge Quote</span>
            </div>

            <button
              onClick={handleWhatsAppSend}
              disabled={items.length === 0}
              className={`w-full py-4 px-4 rounded-xl font-extrabold text-xs sm:text-sm tracking-wide transition-all flex items-center justify-center gap-2 ${
                items.length > 0
                  ? 'bg-[#25D366] hover:bg-[#20ba59] text-black shadow-lg cursor-pointer hover:scale-102'
                  : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
              }`}
            >
              <MessageCircle className="w-5 h-5 text-black" />
              <span>Submit Inquiry on WhatsApp (07015578653)</span>
            </button>

            <button
              onClick={handleEmailSend}
              disabled={items.length === 0}
              className={`w-full py-3 px-4 rounded-xl border text-xs font-extrabold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                items.length > 0
                  ? 'bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 hover:from-pink-400 hover:to-rose-300 text-black border-pink-200 cursor-pointer shadow-[0_0_15px_rgba(244,114,182,0.4)]'
                  : 'border-zinc-800 text-zinc-600 cursor-not-allowed'
              }`}
            >
              <Mail className="w-4 h-4 text-black" />
              <span>Email Inquiry to shopwithuwa@gmail.com</span>
            </button>

            {sentSuccess && (
              <div className="p-2 rounded bg-emerald-500/20 text-emerald-300 text-[11px] text-center font-medium">
                Inquiry formatted and dispatched to WhatsApp!
              </div>
            )}

            <p className="text-[10px] text-zinc-500 text-center">
              Abuja Showroom Direct Line: <a href="tel:07015578653" className="text-zinc-300 underline">07015578653</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
