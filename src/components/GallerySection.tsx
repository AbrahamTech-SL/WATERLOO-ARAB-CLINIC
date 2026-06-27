import { useState, useEffect } from "react";
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { GALLERY_ITEMS } from "../data";

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "facility" | "equipment" | "care">("all");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  // Filter items based on selected category
  const filteredItems = GALLERY_ITEMS.filter(
    (item) => selectedCategory === "all" || item.category === selectedCategory
  );

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === "Escape") setActiveLightboxIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex, filteredItems]);

  const handleNext = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const categories = [
    { id: "all", label: "All Areas" },
    { id: "facility", label: "Clinic Facilities" },
    { id: "care", label: "Patient Care Units" },
    { id: "equipment", label: "Medical Equipment" }
  ];

  return (
    <section id="gallery" className="py-20 bg-sand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-100 border border-teal-800/10 rounded-full mb-3">
            <ImageIcon className="w-3.5 h-3.5 text-teal-800" />
            <span className="text-xs font-semibold tracking-wider uppercase text-teal-850">
              Explore Our Environment
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-teal-900 tracking-tight">
            Our Modern Healthcare Facilities
          </h2>
          <p className="text-teal-950/70 mt-3 text-sm sm:text-base leading-relaxed">
            Take a look inside Waterloo Arab Clinic. We maintain high international standards of cleanliness, security, and medical preparedness to give families maximum peace of mind.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-4.5 py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-all shadow-sm ${
                selectedCategory === cat.id
                  ? "bg-teal-800 text-white shadow-teal-800/20"
                  : "bg-white text-teal-900 hover:bg-sand-200 hover:text-teal-950 border border-sand-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveLightboxIndex(index)}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md cursor-pointer border border-sand-200/50 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                {/* Image Wrapper */}
                <div className="aspect-[4/3] w-full relative overflow-hidden bg-sand-50">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-teal-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/95 flex items-center justify-center text-teal-900 shadow-md transform scale-75 group-hover:scale-100 transition-transform duration-350">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Content info */}
                <div className="p-4.5">
                  <span className="inline-block px-2 py-0.5 bg-sand-200/55 text-teal-900 text-[10px] font-bold uppercase rounded-md tracking-wider">
                    {item.category === "facility"
                      ? "Facilities"
                      : item.category === "equipment"
                      ? "Diagnostics & Equipment"
                      : "Patient Care"}
                  </span>
                  <h3 className="font-serif text-base font-bold text-teal-900 mt-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-teal-950/60 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Lightbox Modal View */}
      <AnimatePresence>
        {activeLightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-teal-950/98 backdrop-blur-md flex flex-col items-center justify-center p-4 select-none"
          >
            {/* Close button */}
            <button
              onClick={() => setActiveLightboxIndex(null)}
              className="absolute top-4 right-4 text-white/85 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all focus:outline-none"
              title="Close gallery"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Left */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/85 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all focus:outline-none"
              title="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Navigation Right */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/85 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all focus:outline-none"
              title="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Central Lightbox Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="max-w-4xl w-full flex flex-col items-center gap-4"
            >
              <div className="relative max-h-[70vh] rounded-2xl overflow-hidden border border-white/10 bg-black/40 shadow-2xl">
                <img
                  src={filteredItems[activeLightboxIndex].imageUrl}
                  alt={filteredItems[activeLightboxIndex].title}
                  className="max-w-full max-h-[70vh] object-contain rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Caption and description */}
              <div className="text-center text-white max-w-2xl px-4 mt-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-coral-500">
                  {filteredItems[activeLightboxIndex].category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold mt-1.5 text-white">
                  {filteredItems[activeLightboxIndex].title}
                </h3>
                <p className="text-white/70 text-xs sm:text-sm mt-2 font-light">
                  {filteredItems[activeLightboxIndex].description}
                </p>
                
                {/* Counter index */}
                <div className="text-white/40 text-xs mt-3.5 font-mono">
                  {activeLightboxIndex + 1} / {filteredItems.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
