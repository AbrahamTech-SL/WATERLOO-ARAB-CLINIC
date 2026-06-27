import { useState } from "react";
import { HelpCircle, ChevronDown, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FAQ_ITEMS, CLINIC_CONTACTS } from "../data";

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 bg-sand-100 relative overflow-hidden">
      {/* Background soft blob */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-sand-200/40 rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-teal-800/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-100 border border-teal-800/10 rounded-full mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-teal-800" />
            <span className="text-xs font-semibold tracking-wider uppercase text-teal-850">
              Help & Information Desk
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-teal-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-teal-950/70 mt-3 text-sm sm:text-base leading-relaxed">
            Find immediate answers regarding appointment pre-scheduling, active services, vaccination protocols, and mobile money checkouts below.
          </p>
        </div>

        {/* Accordion Layout */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-teal-800/30 shadow-md ring-1 ring-teal-800/5"
                    : "border-sand-200 shadow-sm hover:border-sand-300"
                }`}
              >
                {/* Trigger Row */}
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left focus:outline-none cursor-pointer"
                >
                  <span className="font-serif text-sm sm:text-base font-bold text-teal-950 pr-4">
                    {item.question}
                  </span>
                  
                  {/* Indicator Arrow */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      isOpen ? "bg-teal-850 text-white rotate-180" : "bg-sand-150 text-teal-900"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated content wrapper using standard CSS and AnimatePresence */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-xs sm:text-sm text-teal-950/75 leading-relaxed border-t border-sand-100 pt-4.5">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="text-center mt-12 p-6.5 rounded-2xl bg-white border border-sand-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-serif text-base font-bold text-teal-950">
              Have another medical or service question?
            </h4>
            <p className="text-xs text-teal-950/65 mt-0.5">
              Contact our duty nurse directly via WhatsApp. We respond within a few minutes.
            </p>
          </div>
          <a
            href={CLINIC_CONTACTS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-4.5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold tracking-wide transition-all shadow-sm shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white/10" />
            <span>Chat Live on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
