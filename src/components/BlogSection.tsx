import { useState } from "react";
import { BookOpen, Calendar, Clock, User, X, ChevronRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { HEALTH_BLOG_TIPS } from "../data";
import { HealthBlogTip } from "../types";

export default function BlogSection() {
  const [activeArticle, setActiveArticle] = useState<HealthBlogTip | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", "Prevention", "Vaccination", "Maternity"];

  const filteredArticles = HEALTH_BLOG_TIPS.filter(
    (article) => selectedCategory === "all" || article.category === selectedCategory
  );

  return (
    <section id="health-tips" className="py-20 bg-sand-50 relative overflow-hidden">
      {/* Decorative dot background */}
      <div className="absolute inset-0 bg-[radial-gradient(#065f46_0.06%,transparent_0.06%)] [background-size:20px_20px] opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-coral-100 border border-coral-500/10 rounded-full mb-3">
            <BookOpen className="w-3.5 h-3.5 text-coral-600" />
            <span className="text-xs font-semibold tracking-wider uppercase text-coral-750">
              Health Education Center
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-teal-900 tracking-tight">
            Certified Clinical Guidance & Tips
          </h2>
          <p className="text-teal-950/70 mt-3 text-sm sm:text-base leading-relaxed">
            Empowering Waterloo families with practical, preventive clinical guidelines written by our senior doctors, pediatric experts, and midwives.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide capitalize shrink-0 transition-all ${
                selectedCategory === cat
                  ? "bg-teal-800 text-white shadow-md shadow-teal-800/10"
                  : "bg-white text-teal-900 border border-sand-200 hover:bg-sand-100"
              }`}
            >
              {cat === "all" ? "All Advisories" : cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => setActiveArticle(article)}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-sand-200 hover:shadow-xl hover:-translate-y-1 cursor-pointer transition-all flex flex-col group"
            >
              {/* Card Image */}
              <div className="aspect-[16/10] w-full relative overflow-hidden bg-sand-100">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-teal-800 text-white text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-md shadow-md">
                  {article.category}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-teal-950/50 text-[11px] font-semibold mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-coral-500" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-teal-800" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-teal-950 group-hover:text-teal-800 transition-colors leading-snug line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-teal-950/65 text-xs sm:text-sm mt-3 line-clamp-3 leading-relaxed flex-1">
                  {article.summary}
                </p>

                {/* Author footer */}
                <div className="pt-4.5 mt-5 border-t border-sand-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-sand-200 flex items-center justify-center text-teal-800 text-xs font-bold">
                      {article.author[0] + article.author.split(" ").slice(-1)[0][0]}
                    </div>
                    <span className="text-xs font-semibold text-teal-900">
                      {article.author}
                    </span>
                  </div>
                  
                  <span className="text-xs font-bold text-coral-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read Advisory
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>

      {/* DETAILED ARTICLE EXPANDED MODAL (LIGHTBOX OVERLAY) */}
      <AnimatePresence>
        {activeArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-teal-950/70 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative border border-sand-150"
            >
              {/* Modal Close */}
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 right-4 text-teal-950/70 hover:text-teal-950 hover:bg-sand-100 p-2 rounded-full transition-colors z-10 bg-white shadow-md border border-sand-100"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header Image inside Modal */}
              <div className="aspect-[16/9] w-full relative bg-sand-100">
                <img
                  src={activeArticle.imageUrl}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 via-teal-950/10 to-transparent" />
                <span className="absolute bottom-4 left-4 bg-coral-500 text-white text-xs uppercase tracking-wider font-bold px-3 py-1 rounded-md shadow-md">
                  {activeArticle.category}
                </span>
              </div>

              {/* Modal Core Contents */}
              <div className="p-6 sm:p-10">
                <div className="flex items-center gap-4 text-teal-950/50 text-xs font-semibold mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-coral-500" />
                    {activeArticle.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-teal-800" />
                    {activeArticle.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4 text-teal-850" />
                    {activeArticle.author}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-teal-950 tracking-tight leading-snug">
                  {activeArticle.title}
                </h3>

                {/* Article Body */}
                <div className="mt-6 space-y-4.5 text-teal-950/80 text-sm sm:text-base leading-relaxed font-normal">
                  {activeArticle.content.map((paragraph, idx) => {
                    const isInstruction = paragraph.startsWith("Key Prevention") || paragraph.startsWith("First 24 Hours") || paragraph.startsWith("Prenatal Checkups") || paragraph.startsWith("Dietary Interventions");
                    return (
                      <p
                        key={idx}
                        className={
                          isInstruction
                            ? "bg-sand-100/80 p-4.5 rounded-xl border border-sand-200 text-teal-900 font-semibold"
                            : ""
                        }
                      >
                        {paragraph}
                      </p>
                    );
                  })}
                </div>

                {/* Professional clinical citation box */}
                <div className="mt-8 p-5 rounded-2xl bg-teal-850 text-white flex items-center gap-4 border border-teal-800">
                  <div className="w-12 h-12 rounded-xl bg-teal-800 flex items-center justify-center shrink-0">
                    <Sparkles className="w-6 h-6 text-coral-500" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase text-teal-300 tracking-wider">
                      Official Medical Advisory
                    </p>
                    <p className="text-xs mt-1 text-white/90">
                      Reviewed and authorized by <span className="font-bold">{activeArticle.author}</span>. Consult a doctor directly for specific individual queries.
                    </p>
                  </div>
                </div>

                {/* Actions footer */}
                <div className="mt-8 pt-6 border-t border-sand-100 flex justify-end gap-3">
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="py-2.5 px-5 rounded-xl text-xs font-bold text-teal-900 border border-sand-300 hover:bg-sand-100 transition-colors cursor-pointer"
                  >
                    Close Advisory
                  </button>
                  <a
                    href="#book-appointment"
                    onClick={() => setActiveArticle(null)}
                    className="py-2.5 px-5 bg-teal-800 hover:bg-teal-900 text-white text-xs font-bold rounded-xl tracking-wide shadow-md transition-all cursor-pointer"
                  >
                    Schedule Consult
                  </a>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
