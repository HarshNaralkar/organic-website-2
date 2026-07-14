import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, Heart, ShoppingBag, X, MessageSquare, Check, Percent } from "lucide-react";
import { PRODUCTS, STORE_CONTACT } from "../data";
import { Product } from "../types";

export default function BestSellers() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const handleWhatsAppEnquiry = (productName: string) => {
    const text = `Hello Urban Peasant, I am visiting your brand website and would like to enquire about reserving or checking stock of: "${productName}". Please guide me with availability. Thank you!`;
    const url = `https://wa.me/${STORE_CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="best-sellers" className="py-20 md:py-32 bg-[#F7F4EE] paper-texture overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B58A5C] font-semibold block">
              OUR SEASONAL STANDOUTS
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-[#222222]">
              The Best Sellers Catalogue
            </h2>
            <p className="font-serif text-lg italic text-[#6E6E6E] -mt-1">
              उत्कृष्ट उत्पाद – जो मुंबई के घरों की पहली पसंद हैं
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleScroll("left")}
              className="w-12 h-12 rounded-full border border-[#222222]/10 bg-[#FFFDF9] hover:bg-[#315D39] hover:text-[#FFFDF9] transition-all duration-300 flex items-center justify-center cursor-pointer text-[#222222]"
              aria-label="Scroll left"
              id="bestsellers-scroll-left"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="w-12 h-12 rounded-full border border-[#222222]/10 bg-[#FFFDF9] hover:bg-[#315D39] hover:text-[#FFFDF9] transition-all duration-300 flex items-center justify-center cursor-pointer text-[#222222]"
              aria-label="Scroll right"
              id="bestsellers-scroll-right"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Track */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory scroll-smooth -mx-6 px-6 md:-mx-12 md:px-12"
          style={{ scrollbarWidth: "none" }}
        >
          {PRODUCTS.map((product) => {
            const isFav = favorites.includes(product.id);
            return (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="w-[280px] sm:w-[350px] shrink-0 snap-start bg-[#FFFDF9] border border-[#222222]/10 rounded-tr-[40px] group cursor-pointer hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
                id={`product-card-${product.id}`}
              >
                {/* Image Container with zoom action and rounded corners */}
                <div className="relative aspect-[1/1] overflow-hidden bg-[#E9DFC8] rounded-tr-[30px]">
                  {product.tag && (
                    <span className="absolute top-4 left-4 z-10 bg-[#315D39] text-[#FFFDF9] font-mono text-[9px] uppercase tracking-widest px-3 py-1 border border-[#FFFDF9]/10 rounded-full">
                      {product.tag}
                    </span>
                  )}

                  <button
                    onClick={(e) => toggleFavorite(product.id, e)}
                    className="absolute top-4 right-4 z-10 p-2.5 bg-[#FFFDF9]/90 backdrop-blur-sm hover:bg-[#FFFDF9] text-[#6E6E6E] hover:text-[#315D39] transition-colors rounded-full shadow-sm cursor-pointer"
                    aria-label="Add to favorites"
                    id={`fav-btn-${product.id}`}
                  >
                    <Heart className={`w-4 h-4 ${isFav ? "fill-[#315D39] text-[#315D39]" : ""}`} />
                  </button>

                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out rounded-tr-[30px]"
                  />
                  <div className="absolute inset-0 bg-[#315D39]/5 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0" />
                </div>

                {/* Typography info */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#222222] leading-snug group-hover:text-[#315D39] transition-colors">
                        {product.name}
                      </h3>
                    </div>
                    {product.hindiName && (
                      <p className="font-serif text-xs italic text-[#6B5138]">
                        {product.hindiName}
                      </p>
                    )}
                  </div>

                  <p className="font-sans text-[#6E6E6E] text-xs font-light leading-relaxed line-clamp-2">
                    {product.description}
                  </p>

                  <div className="pt-4 border-t border-[#E9DFC8]/50 flex items-center justify-between">
                    <div>
                      <span className="font-mono text-[9px] uppercase text-[#6E6E6E] tracking-wider block">
                        Est. Value
                      </span>
                      <span className="font-mono text-xs font-semibold text-[#222222]">
                        {product.priceEstimate || "Priced in Shop"}
                      </span>
                    </div>

                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#B58A5C] font-semibold group-hover:text-[#315D39] transition-colors flex items-center gap-1">
                      Pure Details <span>→</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#222222]/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-[#FFFDF9] w-full max-w-3xl overflow-hidden border border-[#222222]/10 rounded-tr-[80px] relative shadow-2xl grid grid-cols-1 md:grid-cols-12"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 bg-[#FFFDF9] text-[#222222] p-2.5 hover:bg-[#E9DFC8] transition-colors rounded-full shadow-md z-20 cursor-pointer"
                aria-label="Close details"
                id="product-modal-close"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Left Column: Image */}
              <div className="md:col-span-5 h-64 md:h-full bg-[#E9DFC8] relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#315D39]/5 mix-blend-multiply" />
                {selectedProduct.tag && (
                  <span className="absolute top-4 left-4 bg-[#315D39] text-[#FFFDF9] font-mono text-[8px] uppercase tracking-widest px-2.5 py-1">
                    {selectedProduct.tag}
                  </span>
                )}
              </div>

              {/* Right Column: Info details */}
              <div className="md:col-span-7 p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#B58A5C] block">
                      Artisanal Food Standard
                    </span>
                    <h4 className="font-serif text-3xl font-bold text-[#222222] leading-tight mt-1">
                      {selectedProduct.name}
                    </h4>
                    {selectedProduct.hindiName && (
                      <p className="font-serif text-sm italic text-[#6B5138] mt-0.5">
                        {selectedProduct.hindiName}
                      </p>
                    )}
                  </div>

                  <p className="font-sans text-[#6E6E6E] text-sm font-light leading-relaxed">
                    {selectedProduct.description}
                  </p>

                  {/* Highlights/Bullet Features */}
                  <div className="space-y-2 pt-2">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#222222] block font-bold">
                      Sourcing Credentials:
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedProduct.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs text-[#222222] font-light">
                          <Check className="w-3.5 h-3.5 text-[#315D39] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sourcing Contact & Footer details */}
                <div className="pt-6 border-t border-[#E9DFC8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="font-mono text-[9px] uppercase text-[#6E6E6E] tracking-wider block">
                      Price/Portion Estimate
                    </span>
                    <span className="font-mono text-base font-bold text-[#315D39]">
                      {selectedProduct.priceEstimate || "Available in Shop"}
                    </span>
                    <span className="block text-[10px] text-[#6E6E6E] font-light mt-0.5">
                      *Subject to seasonal harvest sizes.
                    </span>
                  </div>

                  {/* WhatsApp reservation */}
                  <button
                    onClick={() => handleWhatsAppEnquiry(selectedProduct.name)}
                    className="px-6 py-3 bg-[#315D39] hover:bg-[#4B5A2B] text-[#FFFDF9] font-mono text-[10px] uppercase tracking-widest rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    Enquire / Reserve
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
