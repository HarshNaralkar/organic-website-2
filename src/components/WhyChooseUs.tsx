import React, { useState } from "react";
import { motion } from "motion/react";
import { TIMELINE_EVENTS } from "../data";
import { TimelineEvent } from "../types";
import { Award, ShieldAlert, Flame, Heart, Sparkles, Truck, Check, HelpCircle } from "lucide-react";

// Helper map to dynamically fetch our beautiful Lucide Icons based on data strings
const IconMap: { [key: string]: any } = {
  Award: Award,
  ShieldAlert: ShieldAlert,
  Flame: Flame,
  Heart: Heart,
  Sparkles: Sparkles,
  Truck: Truck
};

export default function WhyChooseUs() {
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);

  return (
    <section id="why-pure" className="py-20 md:py-32 bg-[#FFFDF9] relative">
      {/* Decorative vertical watermark text on the side */}
      <div className="absolute top-1/4 right-6 uppercase font-mono text-[9px] tracking-[0.4em] text-[#6B5138]/20 writing-mode-vertical pointer-events-none hidden xl:block select-none">
        • HONEST FOODS • TRADITIONAL WISDOM •
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20 max-w-2xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B58A5C] font-semibold block">
            HOW WE DO THINGS DIFFERENTLY
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-[#222222]">
            Our Sourcing & Integrity Protocol
          </h2>
          <div className="flex items-center justify-center gap-2 mt-1">
            <div className="h-[1px] w-8 bg-[#E9DFC8]" />
            <p className="font-serif text-lg italic text-[#6E6E6E]">
              Why Mumbai families place their trust in our family farm shop
            </p>
            <div className="h-[1px] w-8 bg-[#E9DFC8]" />
          </div>
        </div>

        {/* Elegant Timeline Layout */}
        <div className="relative border-l-2 border-[#222222]/10 ml-4 md:ml-32 pl-8 md:pl-16 space-y-16">
          {TIMELINE_EVENTS.map((event, idx) => {
            const IconComponent = IconMap[event.iconName] || HelpCircle;

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                onMouseEnter={() => setHoveredEvent(event.id)}
                onMouseLeave={() => setHoveredEvent(null)}
                className="relative group"
                id={`timeline-event-${event.id}`}
              >
                {/* Timeline Icon Node absolute wrapper */}
                <div
                  className={`absolute -left-[50px] md:-left-[82px] top-1.5 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 z-10 ${
                    hoveredEvent === event.id
                      ? "bg-[#315D39] border-[#315D39] text-[#FFFDF9] scale-110 shadow-lg"
                      : "bg-[#F7F4EE] border-[#222222]/10 text-[#4B5A2B]"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                </div>

                {/* Left side year indicator (Visible on desktop only) */}
                <div className="absolute left-[-210px] top-3 w-36 text-right hidden md:block">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#B58A5C] font-bold">
                    Protocol {idx + 1}
                  </span>
                  <span className="block font-serif text-[10px] text-[#6E6E6E] italic mt-0.5">
                    Verified Standard
                  </span>
                </div>

                {/* Content Box with Artistic Rounded-TR Corner */}
                <div
                  className={`p-6 sm:p-8 bg-[#F7F4EE] border border-[#222222]/10 rounded-tr-[40px] transition-all duration-500 relative ${
                    hoveredEvent === event.id
                      ? "border-[#315D39] bg-[#FFFDF9] shadow-xl translate-x-1"
                      : ""
                  }`}
                >
                  {/* Subtle index tag for mobile */}
                  <div className="font-mono text-[9px] uppercase tracking-wider text-[#B58A5C] font-bold md:hidden mb-1">
                    Protocol {idx + 1}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h3 className="font-serif text-2xl font-bold text-[#222222] group-hover:text-[#315D39] transition-colors">
                      {event.title}
                    </h3>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#6E6E6E] bg-[#D8E3D2] px-2 py-0.5 border border-[#315D39]/10 rounded-sm">
                      100% Genuine
                    </span>
                  </div>

                  <p className="font-sans text-[#222222] text-sm font-semibold mb-3 leading-relaxed">
                    {event.description}
                  </p>

                  <p className="font-sans text-[#6E6E6E] text-xs md:text-sm font-light leading-relaxed">
                    {event.details}
                  </p>

                  {/* Aesthetic Checkmark of Verification */}
                  <div className="flex items-center gap-1.5 pt-4 mt-4 border-t border-[#E9DFC8]/40">
                    <Check className="w-3.5 h-3.5 text-[#315D39]" />
                    <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#315D39] font-semibold">
                      Traceability Audited & Approved
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
