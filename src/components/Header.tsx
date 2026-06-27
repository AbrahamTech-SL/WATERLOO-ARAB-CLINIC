import { useState, useEffect } from "react";
import { Phone, MessageCircle, Calendar, Menu, X, Heart, Shield } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CLINIC_CONTACTS, IMAGES } from "../data";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll state to change header style dynamically
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

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Departments", href: "#departments" },
    { name: "About Us", href: "#about" },
    { name: "Outreach", href: "#outreach" },
    { name: "Health Tips", href: "#health-tips" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className="w-full fixed top-0 z-50 transition-all duration-300">
      {/* Emergency Information Bar - Coral Highlighted */}
      <div id="emergency-banner" className="bg-coral-500 text-white text-sm py-2 px-4 shadow-md transition-all duration-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 bg-white rounded-full animate-ping" />
            <span className="font-semibold tracking-wide">NEED URGENT MEDICAL ASSISTANCE?</span>
            <span className="hidden md:inline text-white/90">Contact us immediately for 24/7 support.</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <a
              href={`tel:${CLINIC_CONTACTS.phone1}`}
              className="flex items-center gap-1.5 hover:underline transition-colors bg-white/10 px-2.5 py-1 rounded-md"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{CLINIC_CONTACTS.phone1Display}</span>
            </a>
            <a
              href={`tel:${CLINIC_CONTACTS.phone2}`}
              className="hidden sm:flex items-center gap-1.5 hover:underline transition-colors bg-white/10 px-2.5 py-1 rounded-md"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{CLINIC_CONTACTS.phone2Display}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md py-3 shadow-lg border-b border-sand-100"
            : "bg-sand-100/90 backdrop-blur-sm py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Clinic Brand Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-11 h-11 rounded-xl bg-white overflow-hidden flex items-center justify-center text-white shadow-md shadow-teal-900/10 group-hover:scale-105 transition-transform border border-sand-200/50">
              <img
                src={IMAGES.logo}
                alt="Waterloo Arab Clinic Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold text-teal-800 tracking-tight leading-none">
                Waterloo Arab Clinic
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-coral-600 font-bold mt-0.5">
                Your Community Health Partner
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-sm font-medium text-teal-900/80 hover:text-teal-800 hover:bg-sand-200/50 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Call-to-Actions (CTAs) */}
          <div className="hidden lg:flex items-center gap-3">
            {/* WhatsApp Inquiry */}
            <a
              href={CLINIC_CONTACTS.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-teal-800 hover:text-teal-900 border border-teal-800/20 hover:border-teal-800 bg-white hover:bg-teal-50 px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600/10" />
              <span>WhatsApp Inquiry</span>
            </a>

            {/* Book Appointment */}
            <a
              href="#book-appointment"
              className="flex items-center gap-1.5 bg-teal-800 hover:bg-teal-900 text-white px-4 py-2 rounded-xl text-xs font-semibold tracking-wide shadow-md shadow-teal-800/10 hover:shadow-teal-800/20 hover:scale-[1.02] transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={CLINIC_CONTACTS.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
              title="Chat with us on WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-emerald-50" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-teal-800 hover:bg-sand-200/60 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer Navigation with Framer Motion */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden w-full bg-white border-b border-sand-100 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 bg-sand-50">
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-xl text-sm font-medium text-teal-900 hover:bg-sand-200/60 hover:text-teal-800 transition-all text-center border border-sand-100"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Mobile Actions */}
              <div className="pt-4 border-t border-sand-200 flex flex-col gap-3">
                <a
                  href={CLINIC_CONTACTS.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl text-sm font-semibold tracking-wide shadow-sm transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-white/20" />
                  <span>WhatsApp Inquiry</span>
                </a>
                <a
                  href="#book-appointment"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-teal-800 hover:bg-teal-900 text-white px-5 py-3 rounded-xl text-sm font-semibold tracking-wide shadow-md shadow-teal-800/10 transition-all"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Appointment Now</span>
                </a>
              </div>

              {/* Operating hours snippet for trust */}
              <div className="pt-4 text-center">
                <p className="text-[11px] uppercase font-mono tracking-wider text-teal-700/60">
                  Operating Hours
                </p>
                <p className="text-xs font-semibold text-teal-900 mt-1">
                  {CLINIC_CONTACTS.hours.general}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
