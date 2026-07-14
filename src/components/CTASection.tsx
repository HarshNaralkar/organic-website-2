import React from "react";
import { motion } from "motion/react";
import { Phone, MessageSquare, MapPin, Sparkles } from "lucide-react";
import { STORE_CONTACT } from "../data";

interface CTASectionProps {
  onNavClick: (sectionId: string) => void;
}

export default function CTASection({ onNavClick }: CTASectionProps) {
  const handleWhatsAppChat = () => {
    const text = "Hello Urban Peasant, I am visiting your premium website and would like to connect to learn more about your fresh stock, chakki mills, or to arrange a bulk delivery across Mumbai. Thank you!";
    const url = `https://wa.me/${STORE_CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-20 md:py-28 bg-[#315D39] paper-texture relative overflow-hidden">
      {/* Editorial Decorative Overlays */}
      <div className="absolute top-[-50%] left-[-20%] w-[80%] aspect-square rounded-full bg-[#4B5A2B]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-50%] right-[-20%] w-[80%] aspect-square rounded-full bg-[#E9DFC8]/15 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center space-y-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFDF9]/10 border border-[#FFFDF9]/15 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#D9A441] fill-current" />
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#FFFDF9]">
              START YOUR ORGANIC JOURNEY
            </span>
          </div>

          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light text-[#FFFDF9] tracking-tight leading-none">
            Healthy Living <br />
            <span className="italic text-[#E9DFC8]">Begins Here</span>
          </h2>

          <p className="font-sans text-[#D8E3D2] text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Nourish your family with authentic, unadulterated kitchen staples slow-milled and stone-ground fresh in Lower Parel, Mumbai. Step in today to experience organic purity.
          </p>
        </motion.div>

        {/* Action Button cluster */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
          {/* Visit Us scroll action */}
          <button
            onClick={() => onNavClick("visit-store")}
            className="w-full sm:w-auto px-8 py-4 bg-[#FFFDF9] text-[#315D39] hover:bg-[#E9DFC8] font-mono text-xs uppercase tracking-widest font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2.5 shadow-md cursor-pointer"
            id="cta-visit-btn"
          >
            <MapPin className="w-4 h-4" />
            Visit Us In Shop
          </button>

          {/* Call Now phone */}
          <a
            href={`tel:${STORE_CONTACT.phone.replace(/\s+/g, "")}`}
            className="w-full sm:w-auto px-8 py-4 border border-[#FFFDF9] text-[#FFFDF9] hover:bg-[#FFFDF9]/5 font-mono text-xs uppercase tracking-widest font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
            id="cta-call-btn"
          >
            <Phone className="w-4 h-4" />
            Call Store Now
          </a>

          {/* WhatsApp link */}
          <button
            onClick={handleWhatsAppChat}
            className="w-full sm:w-auto px-8 py-4 bg-[#D9A441] text-[#222222] hover:bg-[#FFFDF9] font-mono text-xs uppercase tracking-widest font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-2.5 shadow-md cursor-pointer"
            id="cta-whatsapp-btn"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            Chat WhatsApp
          </button>
        </div>

        {/* Short footer message */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-[#D8E3D2] font-mono text-[10px] uppercase tracking-widest">
          <span>🌿 100% Certified Organic</span>
          <span className="hidden sm:inline">•</span>
          <span>👩🏽‍🌾 Supporting Agrarian Women Collectives</span>
          <span className="hidden sm:inline">•</span>
          <span>🛵 Same Day Mumbai Express Delivery</span>
        </div>
      </div>
    </section>
  );
}
