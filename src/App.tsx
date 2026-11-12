/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CeoStory } from './components/CeoStory';
import { WigsSection } from './components/WigsSection';
import { ReadyToWearSection } from './components/ReadyToWearSection';
import { BeautySection } from './components/BeautySection';
import { CustomAttireSection } from './components/CustomAttireSection';
import { InquiryDrawer } from './components/InquiryDrawer';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { Footer } from './components/Footer';
import { Product, InquiryItem } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [inquiryItems, setInquiryItems] = useState<InquiryItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const handleAddToInquiry = (product: Product, selectedSize?: string) => {
    const sizeKey = selectedSize || 'Standard';
    setInquiryItems(prev => {
      const existingIndex = prev.findIndex(
        item => item.product.id === product.id && item.selectedSize === sizeKey
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [
          ...prev,
          {
            id: `${product.id}-${sizeKey}-${Date.now()}`,
            product,
            selectedSize: sizeKey,
            quantity: 1
          }
        ];
      }
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setInquiryItems(prev =>
      prev
        .map(item => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as InquiryItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setInquiryItems(prev => prev.filter(item => item.id !== id));
  };

  const handleClearBag = () => {
    setInquiryItems([]);
  };

  const handleNavigate = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalInquiryCount = inquiryItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#12050f] text-white flex flex-col font-sans selection:bg-pink-500 selection:text-white relative overflow-x-hidden">
      {/* Global Ambient Pink Luxury Lighting Mesh */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-pink-500/25 via-pink-600/10 to-transparent blur-[140px] rounded-full" />
        <div className="absolute top-[30%] -left-48 w-[650px] h-[650px] bg-pink-500/15 blur-[160px] rounded-full" />
        <div className="absolute top-[60%] -right-48 w-[650px] h-[650px] bg-rose-500/15 blur-[160px] rounded-full" />
        <div className="absolute -bottom-32 left-1/3 w-[800px] h-[500px] bg-pink-500/15 blur-[150px] rounded-full" />
      </div>

      {/* Top Navbar */}
      <div className="relative z-40">
        <Navbar
          activeTab={activeTab}
          setActiveTab={handleNavigate}
          inquiryCount={totalInquiryCount}
          openInquiryDrawer={() => setIsDrawerOpen(true)}
        />
      </div>

      {/* Main Content Area Based on Active Tab */}
      <main className="flex-1 relative z-10">
        {activeTab === 'home' && (
          <>
            <Hero onNavigate={handleNavigate} />
            <WigsSection
              onAddToInquiry={handleAddToInquiry}
              onQuickView={(p) => setQuickViewProduct(p)}
            />
            <ReadyToWearSection
              onAddToInquiry={handleAddToInquiry}
              onQuickView={(p) => setQuickViewProduct(p)}
              onCustomAttireRedirect={() => handleNavigate('custom-made')}
            />
            <BeautySection
              onAddToInquiry={handleAddToInquiry}
              onQuickView={(p) => setQuickViewProduct(p)}
            />
            <CustomAttireSection />
            <CeoStory />
          </>
        )}

        {activeTab === 'wigs' && (
          <div className="pt-4">
            <WigsSection
              onAddToInquiry={handleAddToInquiry}
              onQuickView={(p) => setQuickViewProduct(p)}
            />
          </div>
        )}

        {activeTab === 'ready-to-wear' && (
          <div className="pt-4">
            <ReadyToWearSection
              onAddToInquiry={handleAddToInquiry}
              onQuickView={(p) => setQuickViewProduct(p)}
              onCustomAttireRedirect={() => handleNavigate('custom-made')}
            />
          </div>
        )}

        {activeTab === 'beauty' && (
          <div className="pt-4">
            <BeautySection
              onAddToInquiry={handleAddToInquiry}
              onQuickView={(p) => setQuickViewProduct(p)}
            />
          </div>
        )}

        {activeTab === 'custom-made' && (
          <div className="pt-4">
            <CustomAttireSection />
          </div>
        )}

        {activeTab === 'ceo-story' && (
          <div className="pt-4">
            <CeoStory />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Concierge Inquiry Drawer */}
      <InquiryDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        items={inquiryItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearBag={handleClearBag}
      />

      {/* Product Quick View Modal */}
      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToInquiry={handleAddToInquiry}
      />
    </div>
  );
}
