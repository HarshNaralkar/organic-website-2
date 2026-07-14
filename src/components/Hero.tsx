import React from "react";
import { motion } from "motion/react";
import { ArrowDown, Sprout, Star } from "lucide-react";
import { IMAGES } from "../data";

interface HeroProps {
  onNavClick: (sectionId: string) => void;
}

export default function Hero({ onNavClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="min-h-screen pt-28 md:pt-32 pb-16 md:pb-24 flex items-center bg-[#F7F4EE] paper-texture relative overflow-hidden"
    >
      {/* Editorial Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#D8E3D2]/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#E9DFC8]/25 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left: Beautiful Editorial Typography */}
        <div className="lg:col-span-7 space-y-8 flex flex-col justify-center">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#D8E3D2]/50 border border-[#315D39]/10 rounded-full w-fit"
          >
            <Sprout className="w-3.5 h-3.5 text-[#315D39]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#315D39] font-semibold">
              Organic • Women-Owned • Since 2018
            </span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-serif text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-medium tracking-tight text-[#222222] leading-[1.05]"
            >
              Eat Pure. <br />
              <span className="italic text-[#315D39]">Live Naturally.</span>
            </motion.h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-serif text-lg italic text-[#6B5138] font-semibold">
                थे अर्बन पीजेंट फार्म शॉप
              </span>
              <div className="h-[1px] w-12 bg-[#B58A5C]" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#6E6E6E]">
                Lower Parel, Mumbai
              </span>
            </div>
          </div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="font-sans text-[#6E6E6E] text-base md:text-lg max-w-xl leading-relaxed font-light"
          >
            Naturally grown foods, handcrafted organic products and wholesome
            living delivered with honesty and care. Curated directly from farmers
            who respect the sanctity of native soils and traditional Indian wisdom.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button
              onClick={() => onNavClick("categories")}
              className="px-8 py-4 bg-[#315D39] text-[#FFFDF9] font-mono text-xs uppercase tracking-widest rounded-full hover:bg-[#4B5A2B] transition-all duration-300 shadow-md group flex items-center justify-center gap-2 cursor-pointer"
              id="hero-explore-btn"
            >
              Explore Products
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </button>
            <button
              onClick={() => onNavClick("visit-store")}
              className="px-8 py-4 border border-[#315D39] text-[#315D39] hover:bg-[#315D39]/5 font-mono text-xs uppercase tracking-widest rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              id="hero-visit-btn"
            >
              Visit Store
            </button>
          </motion.div>

          {/* Micro Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-3 gap-6 pt-8 border-t border-[#222222]/10 max-w-lg"
          >
            <div>
              <div className="flex items-center gap-1">
                <span className="font-serif text-2xl font-bold text-[#222222]">5.0</span>
                <div className="flex text-[#D9A441]">
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                </div>
              </div>
              <span className="font-mono text-[9px] text-[#B58A5C] uppercase tracking-widest block mt-1">
                Google Rating
              </span>
            </div>

            <div>
              <span className="font-serif text-2xl font-bold text-[#222222]">100%</span>
              <span className="font-mono text-[9px] text-[#B58A5C] uppercase tracking-widest block mt-1">
                Organic Certified
              </span>
            </div>

            <div>
              <span className="font-serif text-2xl font-bold text-[#222222]">Direct</span>
              <span className="font-mono text-[9px] text-[#B58A5C] uppercase tracking-widest block mt-1">
                Mumbai Delivery
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right: Premium Editorial Portrait Layout */}
        <div className="lg:col-span-5 relative w-full h-full flex justify-center items-center">
          {/* Framed Image Container with Artistic Arch */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full max-w-[420px] aspect-[3/4] bg-[#D8E3D2] rounded-t-full border border-[#222222]/10 overflow-hidden group shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)]"
          >
            <img
              src={IMAGES.hero}
              alt="Fresh hand-harvested organic farm produce from The Urban Peasant Farm Shop Mumbai"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-transform duration-1000 ease-out rounded-t-full"
            />

            {/* Subtle vintage filter overlay */}
            <div className="absolute inset-0 bg-[#315D39]/5 mix-blend-multiply pointer-events-none rounded-t-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#222222]/20 to-transparent rounded-t-full" />

            {/* Float Label */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#FFFDF9]/95 backdrop-blur-sm p-4 border-l-2 border-[#315D39] shadow-lg z-20">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#B58A5C] block">
                Featured Crop
              </span>
              <span className="font-serif text-base font-semibold text-[#222222] block mt-0.5">
                Regenerative Seasonal Harvests
              </span>
              <span className="font-sans text-[11px] text-[#6E6E6E] block mt-1 font-light">
                Companion grown in native volcanic soils.
              </span>
            </div>
          </motion.div>

          {/* Absolute Accent Sticker / Season's Best Overlay */}
          <motion.div
            initial={{ rotate: -15, scale: 0.8, opacity: 0 }}
            animate={{ rotate: -2, scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8, type: "spring" }}
            className="absolute bottom-16 -left-6 bg-white p-5 shadow-xl border border-[#222222]/5 max-w-[200px] z-20 text-left pointer-events-none"
          >
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#B58A5C] mb-1.5 block">
              Season's Best
            </span>
            <h4 className="font-serif text-lg mb-0.5 font-bold text-[#222222]">
              A2 Gir Cow Ghee
            </h4>
            <p className="text-[10px] text-[#6E6E6E] italic mb-3">
              Traditional Bilona Method
            </p>
            <div className="flex justify-between items-center">
              <span className="font-sans font-bold text-sm text-[#315D39]">₹1,450</span>
              <span className="w-6 h-6 rounded-full border border-[#222222]/10 flex items-center justify-center text-xs text-[#222222]">
                →
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Centered Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-[#6E6E6E] opacity-70">
        <span className="font-mono text-[9px] tracking-[0.25em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-3.5 h-3.5 text-[#315D39]" />
        </motion.div>
      </div>
    </section>
  );
}
