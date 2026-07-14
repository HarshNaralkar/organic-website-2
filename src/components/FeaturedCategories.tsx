import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CATEGORIES } from "../data";
import { Category } from "../types";
import { Sprout, X, Sparkles, CheckCircle2 } from "lucide-react";

export default function FeaturedCategories() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  return (
    <section id="categories" className="py-20 md:py-32 bg-[#F7F4EE] paper-texture">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B58A5C] font-semibold block">
              OUR HARVEST CATEGORIES
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-[#222222]">
              Honest Curation of Native Pantry Essentials
            </h2>
            <p className="font-serif text-lg italic text-[#6E6E6E] -mt-1">
              शुद्धता की पहचान – पारंपरिक और प्राकृतिक विधियों से तैयार
            </p>
          </div>
          <p className="font-sans text-[#6E6E6E] text-sm md:text-base font-light max-w-sm leading-relaxed">
            Click on any category to view our strict sourcing standard, traditional
            processing wisdom, and why we refuse chemical preservation.
          </p>
        </div>

        {/* Masonry-like Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              onClick={() => setSelectedCategory(cat)}
              className="bg-[#FFFDF9] border border-[#222222]/10 rounded-tr-[40px] group cursor-pointer overflow-hidden flex flex-col hover:shadow-xl transition-all duration-500 relative"
              id={`category-card-${cat.id}`}
            >
              {/* Product Category Count Badge */}
              <div className="absolute top-4 right-4 z-10 bg-[#FFFDF9]/95 px-3 py-1 text-[9px] font-mono uppercase tracking-widest border border-[#222222]/10 rounded-full shadow-sm">
                {cat.itemCount} Varieties
              </div>

              {/* Card Image */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#E9DFC8] relative rounded-tr-[30px]">
                <img
                  src={cat.image}
                  alt={cat.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out rounded-tr-[30px]"
                />
                <div className="absolute inset-0 bg-[#315D39]/5 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0" />
              </div>

              {/* Title & Desc Container */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-1">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-2xl font-semibold text-[#222222] group-hover:text-[#315D39] transition-colors">
                      {cat.name}
                    </h3>
                  </div>
                  {cat.hindiName && (
                    <p className="font-serif text-sm italic text-[#6B5138]">
                      {cat.hindiName}
                    </p>
                  )}
                </div>
                <p className="font-sans text-[#6E6E6E] text-xs leading-relaxed font-light">
                  {cat.description.substring(0, 105)}...
                </p>

                {/* Subtle Action Arrow */}
                <div className="pt-2 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-[#B58A5C] font-semibold group-hover:text-[#315D39] transition-colors">
                  <span>View Sourcing Standard</span>
                  <span className="transform group-hover:translate-x-1.5 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Purity Sourcing Standard Modal */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#222222]/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCategory(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-[#FFFDF9] w-full max-w-2xl overflow-hidden border border-[#222222]/10 rounded-tr-[80px] relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image banner inside Modal */}
              <div className="h-64 w-full bg-[#E9DFC8] relative rounded-tr-[80px]">
                <img
                  src={selectedCategory.image}
                  alt={selectedCategory.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-tr-[80px]"
                />
                <div className="absolute inset-0 bg-[#222222]/30 mix-blend-multiply rounded-tr-[80px]" />
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="absolute top-4 right-4 bg-[#FFFDF9] text-[#222222] p-2 hover:bg-[#E9DFC8] transition-colors rounded-full shadow-md z-10 cursor-pointer"
                  aria-label="Close details"
                  id="category-modal-close"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="absolute bottom-6 left-6 text-[#FFFDF9]">
                  <span className="font-mono text-[10px] uppercase tracking-widest bg-[#315D39] text-[#FFFDF9] px-2 py-0.5 border border-[#FFFDF9]/20">
                    Sourcing Protocol
                  </span>
                  <h4 className="font-serif text-3xl font-semibold mt-2 drop-shadow-md">
                    {selectedCategory.name}
                  </h4>
                  {selectedCategory.hindiName && (
                    <p className="font-serif text-sm italic opacity-90 drop-shadow-sm">
                      {selectedCategory.hindiName}
                    </p>
                  )}
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#B58A5C] block">
                    Our Uncompromising Mandate
                  </span>
                  <p className="font-sans text-[#222222] text-base font-light leading-relaxed">
                    {selectedCategory.description}
                  </p>
                </div>

                <div className="border-t border-[#E9DFC8] pt-6 grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#315D39] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#222222] block font-semibold">
                        Organic Certified
                      </span>
                      <span className="font-sans text-[11px] text-[#6E6E6E] block font-light leading-snug">
                        Sourced exclusively from verified NPOP/PGS farms.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#315D39] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#222222] block font-semibold">
                        Pure Cold Processing
                      </span>
                      <span className="font-sans text-[11px] text-[#6E6E6E] block font-light leading-snug">
                        Zero heat or synthetic chemicals are introduced.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#315D39] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#222222] block font-semibold">
                        Small Batch Harvests
                      </span>
                      <span className="font-sans text-[11px] text-[#6E6E6E] block font-light leading-snug">
                        Ground or extracted fresh in batches of 25kg or less.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#315D39] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#222222] block font-semibold">
                        100% Traceable
                      </span>
                      <span className="font-sans text-[11px] text-[#6E6E6E] block font-light leading-snug">
                        Direct connection to our local, family-owned farm plots.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="px-6 py-2.5 bg-[#315D39] hover:bg-[#4B5A2B] text-[#FFFDF9] font-mono text-[11px] uppercase tracking-widest rounded-full transition-colors cursor-pointer"
                  >
                    Close Protocol Sheet
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
