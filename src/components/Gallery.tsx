import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GALLERY_ITEMS } from "../data";
import { GalleryItem } from "../types";
import { Eye, X, Camera, Grid } from "lucide-react";

type CategoryFilter = "all" | "store" | "products" | "lifestyle" | "packaging" | "farm" | "ingredients";

export default function Gallery() {
  const [filter, setFilter] = useState<CategoryFilter>("all");
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);

  const filterTabs: { label: string; value: CategoryFilter }[] = [
    { label: "All Stories", value: "all" },
    { label: "The Shop", value: "store" },
    { label: "Our Products", value: "products" },
    { label: "Lifestyle", value: "lifestyle" },
    { label: "Packaging", value: "packaging" },
    { label: "The Farm", value: "farm" },
    { label: "Ingredients", value: "ingredients" },
  ];

  const filteredItems = filter === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-20 md:py-32 bg-[#F7F4EE] paper-texture relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B58A5C] font-semibold block">
              VISUAL JOURNAL & ESSENCE
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-[#222222]">
              The Organic Life Frame by Frame
            </h2>
            <p className="font-serif text-lg italic text-[#6E6E6E] -mt-1">
              प्रकृति का दर्पण – हमारे खेत और दुकान की झलकियाँ
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-[10px] uppercase text-[#6E6E6E] tracking-widest bg-[#FFFDF9] px-4 py-2 border border-[#222222]/10 rounded-full shadow-sm">
            <Camera className="w-3.5 h-3.5 text-[#315D39]" />
            <span>Unretouched Pure Photography</span>
          </div>
        </div>

        {/* Categories Tab Filter */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-12 border-b border-[#222222]/10 pb-6">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-widest transition-all duration-300 relative cursor-pointer ${
                filter === tab.value
                  ? "text-[#315D39] font-bold"
                  : "text-[#6E6E6E] hover:text-[#222222]"
              }`}
              id={`filter-tab-${tab.value}`}
            >
              {tab.label}
              {filter === tab.value && (
                <motion.div
                  layoutId="activeFilterUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#315D39]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Asymmetrical Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                onClick={() => setActiveLightbox(item)}
                className={`w-full bg-[#FFFDF9] border border-[#222222]/10 rounded-tr-[40px] group cursor-pointer overflow-hidden relative shadow-sm hover:shadow-xl transition-all duration-500 ${
                  item.aspectRatio === "portrait"
                    ? "aspect-[3/4]"
                    : item.aspectRatio === "landscape"
                    ? "aspect-[16/10]"
                    : "aspect-[1/1]"
                }`}
                id={`gallery-item-${item.id}`}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1000ms] ease-out rounded-tr-[40px]"
                />

                {/* Cover Overlay on Hover */}
                <div className="absolute inset-0 bg-[#222222]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10 rounded-tr-[40px]">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 space-y-2">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] bg-[#315D39] text-[#FFFDF9] px-2.5 py-0.5 border border-[#FFFDF9]/15 rounded-full inline-block">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#FFFDF9] leading-tight">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-[#B58A5C]">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Frame</span>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-[#315D39]/5 mix-blend-multiply pointer-events-none rounded-tr-[40px]" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Full-screen Lightbox Overlay */}
      <AnimatePresence>
        {activeLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#222222]/90 backdrop-blur-md z-50 flex items-center justify-center p-6"
            onClick={() => setActiveLightbox(null)}
          >
            <button
              onClick={() => setActiveLightbox(null)}
              className="absolute top-6 right-6 bg-[#FFFDF9] text-[#222222] p-3.5 hover:bg-[#E9DFC8] transition-colors rounded-full shadow-lg cursor-pointer"
              aria-label="Close Lightbox"
              id="lightbox-close"
            >
              <X className="w-5 h-5" />
            </button>

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="max-w-4xl w-full flex flex-col gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-auto max-h-[70vh] bg-[#E9DFC8] overflow-hidden border border-[#222222]/10 rounded-tr-[40px] shadow-2xl">
                <img
                  src={activeLightbox.image}
                  alt={activeLightbox.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain mx-auto rounded-tr-[40px]"
                />
              </div>

              {/* Caption block */}
              <div className="bg-[#FFFDF9] p-6 border border-[#222222]/10 rounded-tr-[40px] space-y-2 text-left">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#B58A5C] font-semibold bg-[#F7F4EE] px-3 py-1 border border-[#222222]/10 rounded-full inline-block">
                  Sourced Scene Category: {activeLightbox.category}
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#222222]">
                  {activeLightbox.title}
                </h4>
                <p className="font-sans text-[#6E6E6E] text-xs font-light leading-relaxed">
                  Real, verified, unedited view from the source. Celebrating absolute visual transparency and the quiet poetry of organic life.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
