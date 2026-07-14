import React, { useState, useEffect } from "react";
import { MapPin, Clock, Phone, Navigation, Mail, Check, AlertCircle } from "lucide-react";
import { STORE_CONTACT } from "../data";

export default function VisitStore() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTimeStr, setCurrentTimeStr] = useState("");

  useEffect(() => {
    // Determine store open/close state based on Indian Standard Time (IST)
    const updateStoreStatus = () => {
      // Calculate Mumbai local time (IST is UTC + 5:30)
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const istTime = new Date(utc + 3600000 * 5.5);

      const day = istTime.getDay(); // 0 = Sunday, 1 = Mon, etc.
      const hour = istTime.getHours();
      const min = istTime.getMinutes();
      const timeDecimal = hour + min / 60;

      // Monday - Saturday: 9:00 AM to 8:30 PM (9.0 to 20.5)
      // Sunday: 10:30 AM to 6:00 PM (10.5 to 18.0)
      let open = false;
      if (day === 0) {
        // Sunday
        if (timeDecimal >= 10.5 && timeDecimal <= 18.0) {
          open = true;
        }
      } else {
        // Monday - Saturday
        if (timeDecimal >= 9.0 && timeDecimal <= 20.5) {
          open = true;
        }
      }

      setIsOpen(open);

      // Formatting readable local time string for display
      const formattedTime = istTime.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
      });
      setCurrentTimeStr(`${formattedTime} IST`);
    };

    updateStoreStatus();
    const interval = setInterval(updateStoreStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="visit-store" className="py-20 md:py-32 bg-[#FFFDF9] border-t border-b border-[#E9DFC8]/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Premium Contact Card & Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B58A5C] font-semibold block">
                EXPERIENCE THE HARVEST IN PERSON
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-[#222222]">
                Our Mumbai Sanctuary
              </h2>
              <p className="font-serif text-lg italic text-[#6E6E6E] -mt-1">
                दुकान पर पधारें – हमारी खुशबूदार और प्राकृतिक दुनिया
              </p>
            </div>

            {/* Live Store status card */}
            <div className="p-4 bg-[#F7F4EE] border border-[#222222]/10 rounded-full px-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${isOpen ? "bg-[#315D39] animate-pulse" : "bg-red-500"}`} />
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#222222] font-bold">
                  {isOpen ? "Store is Currently Open" : "Store is Currently Closed"}
                </span>
              </div>
              <span className="font-mono text-[9px] text-[#6E6E6E]">
                Mumbai: {currentTimeStr}
              </span>
            </div>

            {/* Address, Phone, Hours Grid */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full border border-[#222222]/10 bg-[#FFFDF9] flex items-center justify-center text-[#315D39] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#B58A5C] block">
                    Physical Address
                  </span>
                  <p className="font-serif text-lg text-[#222222] font-semibold leading-snug">
                    Mathuradas Mill Compound <br />
                    Shop No.3, Shree Siddhivinayak Estate <br />
                    Lower Parel, Mumbai, MH 400013
                  </p>
                  <span className="block text-[11px] font-sans text-[#6E6E6E] font-light">
                    *Right next to primary design houses and boutique mills.
                  </span>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full border border-[#222222]/10 bg-[#FFFDF9] flex items-center justify-center text-[#315D39] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="space-y-1.5 w-full">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#B58A5C] block">
                    Operational Hours
                  </span>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 font-mono text-[11px] text-[#222222]">
                    {STORE_CONTACT.hours.map((h, i) => (
                      <React.Fragment key={i}>
                        <span className="font-semibold text-[#6E6E6E]">{h.days}</span>
                        <span className="text-right sm:text-left">{h.time}</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Phone & Email */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full border border-[#222222]/10 bg-[#FFFDF9] flex items-center justify-center text-[#315D39] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#B58A5C] block">
                    Direct Contact
                  </span>
                  <div className="font-serif text-lg font-bold text-[#222222] space-y-0.5">
                    <p className="hover:text-[#315D39] transition-colors">
                      <a href={`tel:${STORE_CONTACT.phone.replace(/\s+/g, "")}`}>{STORE_CONTACT.phone}</a>
                    </p>
                    <p className="text-sm font-sans text-[#6E6E6E] font-light">
                      Landline: <a href={`tel:${STORE_CONTACT.altPhone.replace(/\s+/g, "")}`} className="hover:underline">{STORE_CONTACT.altPhone}</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full border border-[#222222]/10 bg-[#FFFDF9] flex items-center justify-center text-[#315D39] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#B58A5C] block">
                    Inquiries & Orders
                  </span>
                  <p className="font-mono text-xs font-semibold text-[#222222] hover:text-[#315D39] transition-colors">
                    <a href={`mailto:${STORE_CONTACT.email}`}>{STORE_CONTACT.email}</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Button */}
            <div className="pt-4">
              <a
                href={STORE_CONTACT.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#315D39] text-[#FFFDF9] font-mono text-xs uppercase tracking-widest rounded-full hover:bg-[#4B5A2B] transition-all duration-300 shadow-md inline-flex items-center gap-2.5 cursor-pointer"
                id="directions-btn"
              >
                <Navigation className="w-4 h-4 fill-current" />
                Get GPS Directions
              </a>
            </div>
          </div>

          {/* Right Column: Premium Custom styled map visualization */}
          <div className="lg:col-span-7 w-full h-full space-y-4">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#B58A5C] block text-center lg:text-left">
              Bespoke Location Layout Map
            </span>

            {/* Custom stylized vector layout card */}
            <div className="relative aspect-[4/3] bg-[#F7F4EE] border border-[#222222]/10 rounded-tr-[80px] overflow-hidden p-6 shadow-md flex flex-col justify-between">
              {/* Architecture Blueprint Background Lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#E9DFC8_1px,transparent_1px),linear-gradient(to_bottom,#E9DFC8_1px,transparent_1px)] bg-[size:40px_40px] opacity-15 pointer-events-none" />

              {/* Watermark brand */}
              <div className="absolute top-4 left-4 font-mono text-[8px] uppercase tracking-[0.25em] text-[#6E6E6E]/60 z-10">
                MATHURADAS MILL HERITAGE DISTRICT PLAN
              </div>

              {/* Vector SVG Sourced Layout */}
              <div className="absolute inset-0 w-full h-full p-4 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Kamala Mills Green Zone */}
                  <rect x="20" y="240" width="160" height="150" rx="40" fill="#E2EFE0" opacity="0.7" />
                  <circle cx="60" cy="280" r="10" fill="#315D39" opacity="0.1" />
                  <circle cx="120" cy="320" r="15" fill="#315D39" opacity="0.1" />
                  
                  {/* Phoenix Palladium Premium Retail Zone */}
                  <rect x="420" y="20" width="160" height="110" rx="30" fill="#EFE8DC" opacity="0.7" />

                  {/* Mathuradas Mill Estate Compound Boundary */}
                  <rect x="250" y="150" width="230" height="200" rx="40" fill="#F3ECE0" stroke="#B58A5C" stroke-width="1.5" stroke-dasharray="4,4" />
                  
                  {/* Heritage Mill Chawl Building blocks */}
                  <rect x="270" y="170" width="50" height="35" rx="6" fill="#D9C9B4" opacity="0.6" />
                  <rect x="330" y="170" width="65" height="35" rx="6" fill="#D9C9B4" opacity="0.6" />
                  <rect x="405" y="170" width="55" height="50" rx="6" fill="#D9C9B4" opacity="0.6" />
                  <rect x="405" y="230" width="55" height="50" rx="6" fill="#D9C9B4" opacity="0.6" />

                  {/* Shree Siddhivinayak Estate Site (Our Store's Building Container) */}
                  <rect x="270" y="220" width="120" height="115" rx="15" fill="#315D39" fill-opacity="0.08" stroke="#315D39" stroke-width="2" />

                  {/* Main Roads */}
                  {/* Senapati Bapat Marg (Thick dual-carriage) */}
                  <path d="M -20,80 C 150,70 350,90 620,70" stroke="#E5DAC5" stroke-width="24" stroke-linecap="round" />
                  <path d="M -20,80 C 150,70 350,90 620,70" stroke="#FFFDF9" stroke-width="1" stroke-dasharray="6,6" opacity="0.8" />

                  {/* Tulsi Pipe Road */}
                  <path d="M -20,400 C 180,390 380,410 620,390" stroke="#E5DAC5" stroke-width="20" stroke-linecap="round" />

                  {/* Mill Entry Lane */}
                  <path d="M 330,80 C 330,120 290,140 290,150" stroke="#E5DAC5" stroke-width="18" stroke-linecap="round" />

                  {/* Inner walking pathway highlights */}
                  <path d="M 290,150 L 290,220" stroke="#FFFDF9" stroke-width="8" stroke-linecap="round" />
                  
                  {/* Transit walking lines (Lower Parel station to compound) */}
                  <path d="M 90,400 Q 150,330 250,310" stroke="#315D39" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="4,4" opacity="0.5" />
                  <path d="M 460,80 Q 480,180 390,240" stroke="#315D39" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="4,4" opacity="0.5" />
                </svg>
              </div>

              {/* Styled Mock Streets and Landmarks (Absolute divs for high performance) */}
              <div className="absolute inset-0 p-8 flex items-center justify-center pointer-events-none">
                <div className="w-full h-full relative">
                  {/* Road Names */}
                  <div className="absolute top-[12%] left-[4%] text-[7px] font-mono text-[#6E6E6E] uppercase tracking-[0.2em]">
                    Senapati Bapat Marg
                  </div>
                  <div className="absolute bottom-[4%] left-[4%] text-[7px] font-mono text-[#6E6E6E] uppercase tracking-[0.2em]">
                    Tulsi Pipe Road
                  </div>
                  <div className="absolute top-[22%] left-[39%] text-[6px] font-mono text-[#6E6E6E] uppercase tracking-widest writing-mode-vertical">
                    Mill Lane
                  </div>

                  {/* Estate Label */}
                  <div className="absolute top-[31%] right-[22%] text-[7px] font-mono text-[#B58A5C] uppercase tracking-[0.15em] font-bold">
                    Mathuradas Compound
                  </div>

                  {/* Landmark: Phoenix Palladium */}
                  <div className="absolute top-[5%] right-[2%] px-3.5 py-1.5 border border-[#222222]/10 bg-[#FFFDF9]/95 text-[#6E6E6E] text-[8px] font-mono uppercase tracking-wider rounded-full shadow-sm">
                    🏢 Phoenix Palladium
                  </div>

                  {/* Landmark: Kamala Mills Compound */}
                  <div className="absolute bottom-[35%] left-[2%] px-3.5 py-1.5 border border-[#222222]/10 bg-[#FFFDF9]/95 text-[#6E6E6E] text-[8px] font-mono uppercase tracking-wider rounded-full shadow-sm">
                    🌳 Kamala Mills
                  </div>

                  {/* Landmark: Lower Parel Station */}
                  <div className="absolute bottom-[2%] left-[5%] px-3.5 py-1.5 border border-[#222222]/10 bg-[#FFFDF9]/95 text-[#6E6E6E] text-[8px] font-mono uppercase tracking-wider rounded-full shadow-sm">
                    🚉 Lower Parel Station
                  </div>

                  {/* OUR SHOP NODE (High Contrast highlight) */}
                  <div className="absolute top-[48%] left-[47%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 z-10">
                    {/* Glowing beacon */}
                    <div className="relative pointer-events-auto cursor-pointer group/pin">
                      <div className="absolute -inset-2 bg-[#315D39]/30 rounded-full animate-ping" />
                      <div className="w-12 h-12 bg-[#315D39] text-[#FFFDF9] flex items-center justify-center border-2 border-[#FFFDF9] rounded-full shadow-xl group-hover/pin:scale-110 transition-transform duration-300">
                        <MapPin className="w-6 h-6 fill-current" />
                      </div>
                    </div>
                    
                    <div className="bg-[#FFFDF9] border-2 border-[#315D39] px-4 py-2 text-center rounded-tr-[24px] shadow-lg pointer-events-auto">
                      <span className="font-serif text-xs font-bold text-[#222222] block leading-tight">
                        THE URBAN PEASANT
                      </span>
                      <span className="font-mono text-[7px] text-[#B58A5C] uppercase tracking-wider block font-bold mt-0.5">
                        Shop No. 3 • Siddhivinayak Estate
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card details */}
              <div className="relative z-10 mt-auto bg-[#FFFDF9]/95 backdrop-blur-sm p-4 border border-[#222222]/10 rounded-tr-[40px] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#B58A5C] block">
                    Mill Compound Entrance
                  </span>
                  <span className="font-serif text-sm font-semibold text-[#222222] block mt-0.5">
                    Valet parking & security check at Shree Siddhivinayak Estate.
                  </span>
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center gap-1 text-[10px] font-mono text-[#315D39] bg-[#D8E3D2] px-3 py-1 border border-[#315D39]/10 rounded-full">
                    <Check className="w-3 h-3" /> Easy Access
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
