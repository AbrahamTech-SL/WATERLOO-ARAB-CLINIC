import { Award, Heart, Activity, ShieldCheck, HelpCircle } from "lucide-react";
import { motion } from "motion/react";
import { OUTREACH_EVENTS } from "../data";

const OUTREACH_ICONS: Record<string, any> = {
  Award: Award,
  Heart: Heart,
  Activity: Activity,
  ShieldCheck: ShieldCheck
};

export default function OutreachSection() {
  return (
    <section id="outreach" className="py-20 bg-sand-100 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-800/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-100 border border-teal-800/10 rounded-full mb-3">
            <Heart className="w-3.5 h-3.5 text-teal-850 fill-teal-850/10" />
            <span className="text-xs font-semibold tracking-wider uppercase text-teal-900">
              Community Outreach Programs
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-teal-900 tracking-tight">
            Caring for Waterloo Beyond Our Clinic
          </h2>
          <p className="text-teal-950/70 mt-3 text-sm sm:text-base leading-relaxed">
            Healthcare shouldn't stop at our entrance. Our mobile clinics, pediatric drives, and hygiene workshops reach deep into Waterloo neighborhoods, school zones, and markets.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative border-l-2 border-teal-800/20 ml-4 sm:ml-8 md:mx-auto">
          {OUTREACH_EVENTS.map((event, idx) => {
            const IconComponent = OUTREACH_ICONS[event.iconName] || HelpCircle;
            const isUpcoming = event.status === "upcoming";

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative pl-8 sm:pl-12 pb-12 last:pb-0"
              >
                {/* Timeline Node dot/icon */}
                <div
                  className={`absolute left-0 -translate-x-1/2 top-1.5 w-10 h-10 rounded-full border-2 flex items-center justify-center shadow-md z-10 ${
                    isUpcoming
                      ? "bg-coral-500 border-coral-100 text-white animate-soft-pulse"
                      : "bg-teal-800 border-teal-100 text-white"
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Timeline Card */}
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow border border-sand-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3">
                    
                    {/* Status Badge */}
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md ${
                          isUpcoming
                            ? "bg-coral-50 text-coral-600"
                            : "bg-teal-50 text-teal-800"
                        }`}
                      >
                        {isUpcoming ? "🔴 UPCOMING CAMPAIGN" : "✅ COMPLETED"}
                      </span>
                      
                      <span className="text-xs font-semibold text-teal-950/50">
                        {event.date}
                      </span>
                    </div>

                    {/* Location badge */}
                    <span className="inline-block text-xs font-mono font-bold text-teal-850 bg-sand-100 px-2.5 py-1 rounded-md">
                      📍 {event.location}
                    </span>

                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-teal-950 tracking-tight leading-snug">
                    {event.title}
                  </h3>

                  <p className="text-teal-950/70 text-sm mt-3 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Impact detail box */}
                  <div className="mt-4 p-4.5 rounded-xl bg-sand-50 border border-sand-200/50 flex items-start gap-2.5">
                    <span className="text-xs font-bold text-coral-600 uppercase tracking-wider shrink-0 mt-0.5">
                      Impact Summary:
                    </span>
                    <span className="text-xs text-teal-950/80 leading-relaxed font-medium">
                      {event.impact}
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
