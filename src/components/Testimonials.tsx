import React from "react";
import { motion } from "motion/react";
import { TESTIMONIALS } from "../data";
import { Star, Quote, Heart } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-[#FFFDF9] relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D8E3D2]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B58A5C] font-semibold block">
              TRUSTED BY MUMBAI FAMILIES
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-[#222222]">
              What Our Patrons Say
            </h2>
            <p className="font-serif text-lg italic text-[#6E6E6E] -mt-1">
              "ईमानदार भोजन, स्वस्थ जीवन" – हमारे ग्राहकों के अनुभव
            </p>
          </div>
          <p className="font-sans text-[#6E6E6E] text-sm md:text-base font-light max-w-sm leading-relaxed">
            We are deeply honored to nurture generations of local buyers, chefs, and families in South Mumbai who value honest, uncompromised food.
          </p>
        </div>

        {/* 2-Column Responsive Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Massive Statement & Google Reviews Badge */}
          <div className="space-y-8 lg:sticky lg:top-28">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#315D39] font-bold block">
                Google Business Score
              </span>
              <h3 className="font-serif text-5xl sm:text-6xl font-bold tracking-tight text-[#222222]">
                5.0 <span className="text-3xl text-[#6E6E6E]">/ 5</span>
              </h3>
              <div className="flex gap-1 text-[#D9A441]">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="font-sans text-[#6E6E6E] text-base font-light max-w-md leading-relaxed">
                Based on 87+ verified organic lifestyle buyers, local chefs, and multigenerational households who shop weekly in our Lower Parel farm sanctuary.
              </p>
            </div>

            <div className="p-8 bg-[#F7F4EE] border border-[#222222]/10 rounded-tr-[40px] relative">
              <Quote className="absolute -top-4 -right-4 w-12 h-12 text-[#B58A5C]/20" />
              <p className="font-serif text-lg italic text-[#6B5138] leading-relaxed">
                "We started The Urban Peasant not as a trade, but as a family table pledge. To know that Dr. Mukherjee and Mrs. Shenoy feed their children our chakki flours is the absolute highest reward we could dream of."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-[1px] w-6 bg-[#315D39]" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#222222] font-semibold">
                  Radha & Devika • Founders
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Customer Testimonial Cards */}
          <div className="space-y-8">
            {TESTIMONIALS.map((review, idx) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-[#FFFDF9] border border-[#222222]/10 rounded-tr-[40px] p-8 hover:shadow-xl transition-all duration-500 relative"
                id={`testimonial-card-${review.id}`}
              >
                {/* Five star rating icon */}
                <div className="flex gap-1 text-[#D9A441] mb-6">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Main Quote text */}
                <p className="font-serif text-lg text-[#222222] italic leading-relaxed mb-6">
                  "{review.quote}"
                </p>

                {/* Sourcing / Meta details */}
                <div className="flex items-center justify-between pt-6 border-t border-[#222222]/10 gap-4 flex-wrap">
                  <div>
                    <span className="font-serif text-base font-bold text-[#222222] block">
                      {review.name}
                    </span>
                    <span className="font-mono text-[10px] text-[#6E6E6E] uppercase tracking-wider block">
                      {review.location}
                    </span>
                  </div>

                  {review.productMentioned && (
                    <div className="bg-[#D8E3D2]/50 px-3 py-1 text-[9px] font-mono text-[#315D39] border border-[#315D39]/10 rounded-full">
                      Pleased with: {review.productMentioned}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
