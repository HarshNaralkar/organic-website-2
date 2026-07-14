import React from "react";
import { Mail, Phone, MapPin, Clock, ArrowUp, Instagram, Facebook, Globe, Sparkles } from "lucide-react";
import { STORE_CONTACT, STORY_CONTENT } from "../data";

interface FooterProps {
  onNavClick: (sectionId: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    onNavClick("hero");
  };

  return (
    <footer className="bg-[#222222] text-[#FFFDF9] pt-16 pb-8 border-t border-[#315D39]/20 relative paper-texture">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#FFFDF9]/10">
          {/* Col 1: Brand Pitch & Logo (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-1">
              <span className="font-serif text-2xl font-bold tracking-tight text-[#FFFDF9] block">
                THE URBAN PEASANT
              </span>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#B58A5C]">
                  FARM SHOP • EST. 2018
                </span>
                <span className="font-serif text-[10px] italic text-[#D8E3D2] opacity-80">
                  थे अर्बन पीजेंट फार्म शॉप
                </span>
              </div>
            </div>

            <p className="font-sans text-[#D8E3D2]/70 text-xs md:text-sm font-light leading-relaxed max-w-sm">
              Naturally grown foods, traditional stone-ground flours, Vedic Bilona ghee, and unadulterated lifestyle pantry staples brought directly to Lower Parel, Mumbai. Women-led and committed to family health.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#FFFDF9]/15 flex items-center justify-center text-[#FFFDF9]/75 hover:text-[#D9A441] hover:border-[#D9A441] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#FFFDF9]/15 flex items-center justify-center text-[#FFFDF9]/75 hover:text-[#D9A441] hover:border-[#D9A441] transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#FFFDF9]/15 flex items-center justify-center text-[#FFFDF9]/75 hover:text-[#D9A441] hover:border-[#D9A441] transition-all"
                aria-label="Web"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#B58A5C] font-bold block">
              Navigation
            </span>
            <ul className="space-y-2.5 font-mono text-[11px] text-[#D8E3D2]/70">
              <li>
                <button
                  onClick={() => onNavClick("story")}
                  className="hover:text-[#D9A441] transition-colors cursor-pointer block"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick("categories")}
                  className="hover:text-[#D9A441] transition-colors cursor-pointer block"
                >
                  Categories
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick("why-pure")}
                  className="hover:text-[#D9A441] transition-colors cursor-pointer block"
                >
                  Our Protocol
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick("best-sellers")}
                  className="hover:text-[#D9A441] transition-colors cursor-pointer block"
                >
                  Best Sellers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick("gallery")}
                  className="hover:text-[#D9A441] transition-colors cursor-pointer block"
                >
                  Visual Journal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick("visit-store")}
                  className="hover:text-[#D9A441] transition-colors cursor-pointer block"
                >
                  Sourcing Location
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Info (3 Columns) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#B58A5C] font-bold block">
              Direct Contact
            </span>
            <ul className="space-y-4 font-sans text-xs font-light text-[#D8E3D2]/70">
              <li className="flex gap-2 items-start">
                <MapPin className="w-3.5 h-3.5 text-[#B58A5C] shrink-0 mt-0.5" />
                <span>
                  Mathuradas Mill Compound, Shop No.3, Lower Parel, Mumbai, MH 400013
                </span>
              </li>
              <li className="flex gap-2 items-center">
                <Phone className="w-3.5 h-3.5 text-[#B58A5C] shrink-0" />
                <a href={`tel:${STORE_CONTACT.phone.replace(/\s+/g, "")}`} className="hover:text-[#D9A441] transition-colors">
                  {STORE_CONTACT.phone}
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <Mail className="w-3.5 h-3.5 text-[#B58A5C] shrink-0" />
                <a href={`mailto:${STORE_CONTACT.email}`} className="hover:text-[#D9A441] transition-colors">
                  {STORE_CONTACT.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Business Hours (3 Columns) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#B58A5C] font-bold block">
              Store Hours (IST)
            </span>
            <ul className="space-y-3 font-mono text-[10px] text-[#D8E3D2]/70">
              <li className="flex items-center justify-between border-b border-[#FFFDF9]/5 pb-1">
                <span className="font-semibold">Mon – Sat</span>
                <span>09:00 AM – 08:30 PM</span>
              </li>
              <li className="flex items-center justify-between border-b border-[#FFFDF9]/5 pb-1">
                <span className="font-semibold">Sunday</span>
                <span>10:30 AM – 06:00 PM</span>
              </li>
              <li className="flex items-center gap-1.5 text-[#D8E3D2] pt-1">
                <Clock className="w-3.5 h-3.5 text-[#315D39] shrink-0" />
                <span className="font-light text-[9px] uppercase tracking-wider text-[#D8E3D2]/60">
                  Valet parking available inside the compound.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-mono text-[#D8E3D2]/50 tracking-wider">
          <div className="space-y-1 text-center md:text-left">
            <p>© {currentYear} THE URBAN PEASANT. All Rights Reserved.</p>
            <p className="opacity-75">
              Traditional Indian agriculture companion-planted, stone-milled, and ethically packaged.
            </p>
          </div>

          {/* Scroll to Top Arrow */}
          <button
            onClick={handleScrollToTop}
            className="px-5 py-2 border border-[#FFFDF9]/15 hover:border-[#FFFDF9] hover:bg-[#FFFDF9]/5 flex items-center gap-1.5 uppercase transition-all rounded-full cursor-pointer"
            id="scroll-to-top-btn"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
