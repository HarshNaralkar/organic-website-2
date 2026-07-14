import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandStory from "./components/BrandStory";
import FeaturedCategories from "./components/FeaturedCategories";
import WhyChooseUs from "./components/WhyChooseUs";
import BestSellers from "./components/BestSellers";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import VisitStore from "./components/VisitStore";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset slightly for sticky navbar
      const yOffset = -80;
      const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#F7F4EE] min-h-screen text-[#222222] font-sans antialiased relative">
      {/* Premium subtle paper grain background noise texture */}
      <div className="absolute inset-0 paper-texture pointer-events-none z-0" />

      {/* Grid Background Ornament */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none artistic-grid z-0" />

      {/* Sticky, Transparent-to-Solid Navigation Bar */}
      <Navbar onNavClick={scrollToSection} />

      <main className="relative z-10">
        {/* 1. Hero Section: Big editorial greeting with generated imagery */}
        <Hero onNavClick={scrollToSection} />

        {/* 2. Brand Story Section: Story of small-batch quality and traditional Indian chakki mills */}
        <BrandStory />

        {/* 3. Featured Categories Section: Asymmetric masonry grid with sourcing sheets */}
        <FeaturedCategories />

        {/* 4. Why Choose Us Section: Sourcing timeline & verification standards */}
        <WhyChooseUs />

        {/* 5. Best Sellers Section: Horizontal scroll product carousel with reservation buttons */}
        <BestSellers />

        {/* 6. Customer Testimonials Section: Review quotes and verified Google Business scores */}
        <Testimonials />

        {/* 7. Gallery Section: Pinterest masonry visual journal with lightbox viewports */}
        <Gallery />

        {/* 8. Visit Our Store Section: Address details, live Ist timezone calculation, and map layout */}
        <VisitStore />

        {/* 9. Action Section: Multi-button high-contrast CTA block */}
        <CTASection onNavClick={scrollToSection} />
      </main>

      {/* 10. Footer Section: Detailed contact card, social coordinates, and map linkages */}
      <Footer onNavClick={scrollToSection} />
    </div>
  );
}
