import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Heart, User, Sparkles } from "lucide-react";
import { IMAGES, STORY_CONTENT } from "../data";

export default function BrandStory() {
  return (
    <section
      id="story"
      className="py-20 md:py-32 bg-[#FFFDF9] border-t border-b border-[#E9DFC8]/50 relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Side: Elegant Stacked Imagery */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative aspect-[3/4] bg-[#E9DFC8] p-3 shadow-xl overflow-hidden rounded-tr-[80px] border border-[#222222]/10"
            >
              <img
                src={IMAGES.story}
                alt="Story of authentic organic companion planting and traditional Indian farming"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-[10%] hover:scale-105 transition-transform duration-1000 ease-out rounded-tr-[70px]"
              />
              <div className="absolute inset-0 bg-[#4B5A2B]/5 mix-blend-multiply pointer-events-none rounded-tr-[70px]" />
            </motion.div>

            {/* Decorative Overlay Label with Artistic Rounded-TR block */}
            <div className="absolute -bottom-6 -right-6 bg-[#315D39] text-[#FFFDF9] p-6 shadow-xl max-w-[200px] pointer-events-none rounded-tr-[40px] hidden sm:block">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] opacity-80 block text-[#D9A441] font-bold">
                WOMEN LED
              </span>
              <span className="font-serif text-lg font-bold block mt-1 leading-tight italic">
                Authentic Family Legacy
              </span>
            </div>
          </div>

          {/* Right Side: Editorial Narrative & Values */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B58A5C] font-semibold block">
                {STORY_CONTENT.accentBadge}
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-[#222222] leading-tight">
                {STORY_CONTENT.title}
              </h2>
              <p className="font-serif text-xl italic text-[#6B5138]">
                {STORY_CONTENT.hindiTitle}
              </p>
            </div>

            {/* Paragraphs */}
            <div className="space-y-6 font-sans text-[#6E6E6E] text-base md:text-lg font-light leading-relaxed">
              {STORY_CONTENT.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-[#E9DFC8]/50">
              {STORY_CONTENT.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-[#315D39]">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#6E6E6E] leading-normal">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Key Core Brand Values row */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#F7F4EE] border border-[#222222]/10 rounded-full text-[#4B5A2B] font-mono text-[11px] uppercase tracking-wider shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#4B5A2B]" />
                Lab Tested Pure
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#F7F4EE] border border-[#222222]/10 rounded-full text-[#6B5138] font-mono text-[11px] uppercase tracking-wider shadow-sm">
                <Heart className="w-4 h-4 text-[#6B5138]" />
                Zero Synthetics
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#F7F4EE] border border-[#222222]/10 rounded-full text-[#B58A5C] font-mono text-[11px] uppercase tracking-wider shadow-sm">
                <Sparkles className="w-4 h-4 text-[#B58A5C]" />
                Small Batch Crafted
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
