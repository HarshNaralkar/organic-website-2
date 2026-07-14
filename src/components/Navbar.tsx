import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Heart } from "lucide-react";

interface NavbarProps {
  onNavClick: (sectionId: string) => void;
}

export default function Navbar({ onNavClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Our Story", id: "story" },
    { label: "Categories", id: "categories" },
    { label: "Why Pure?", id: "why-pure" },
    { label: "Best Sellers", id: "best-sellers" },
    { label: "Journal & Gallery", id: "gallery" },
    { label: "The Shop", id: "visit-store" },
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavClick(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#FFFDF9] shadow-sm py-4 border-b border-[#E9DFC8]"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Brand Block */}
          <button
            onClick={() => handleLinkClick("hero")}
            className="text-left group flex flex-col cursor-pointer"
            id="nav-logo"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] font-bold text-[#315D39] mb-0.5">
              ESTABLISHED 2012
            </span>
            <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-[#222222] transition-colors group-hover:text-[#315D39]">
              THE URBAN PEASANT
            </span>
            <div className="flex items-center gap-2 -mt-1">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#6B5138]">
                FARM SHOP • MUMBAI
              </span>
              <span className="font-serif text-[11px] italic text-[#6E6E6E] opacity-75 hidden sm:inline">
                थे अर्बन पीजेंट फार्म शॉप
              </span>
            </div>
          </button>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className="font-mono text-xs uppercase tracking-widest text-[#222222] hover:text-[#315D39] transition-colors relative py-1 cursor-pointer group"
                id={`nav-link-${item.id}`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#315D39] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => handleLinkClick("visit-store")}
              className="px-6 py-2.5 font-mono text-xs uppercase tracking-widest bg-[#315D39] text-[#FFFDF9] rounded-full hover:bg-[#4B5A2B] transition-all duration-300 shadow-sm flex items-center gap-2 cursor-pointer"
              id="nav-cta-btn"
            >
              <Heart className="w-3.5 h-3.5 fill-current" />
              Visit Store
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[#222222] hover:text-[#315D39] p-1 transition-colors cursor-pointer"
            aria-label="Toggle menu"
            id="mobile-menu-trigger"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Sliding Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#222222]/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-[320px] bg-[#FFFDF9] p-8 flex flex-col shadow-2xl border-l border-[#E9DFC8]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-12">
                <div className="text-left">
                  <span className="font-serif text-lg font-bold text-[#222222]">
                    THE URBAN PEASANT
                  </span>
                  <div className="font-mono text-[9px] tracking-wider text-[#6B5138]">
                    FARM SHOP
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 text-[#222222] hover:text-[#315D39] cursor-pointer"
                  id="mobile-menu-close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col space-y-6">
                {menuItems.map((item, idx) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => handleLinkClick(item.id)}
                    className="text-left font-serif text-2xl text-[#222222] hover:text-[#315D39] transition-colors py-1 flex items-center justify-between group cursor-pointer"
                    id={`mobile-nav-link-${item.id}`}
                  >
                    <span>{item.label}</span>
                    <span className="text-[#B58A5C] text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </motion.button>
                ))}
              </div>

              <div className="mt-auto border-t border-[#E9DFC8] pt-8 space-y-4">
                <p className="font-serif text-sm italic text-[#6E6E6E]">
                  "Eat Pure. Live Naturally."
                </p>
                <div className="flex flex-col gap-2 font-mono text-[11px] text-[#6E6E6E]">
                  <span>📍 Lower Parel, Mumbai</span>
                  <span>📞 +91 98200 45678</span>
                </div>
                <button
                  onClick={() => handleLinkClick("visit-store")}
                  className="w-full py-3 bg-[#315D39] text-[#FFFDF9] font-mono text-xs uppercase tracking-widest text-center hover:bg-[#4B5A2B] transition-colors cursor-pointer"
                  id="mobile-menu-cta"
                >
                  Visit Store
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
