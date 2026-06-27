import { useEffect, useState, useRef } from "react";
import { Users, ShieldCheck, HeartHandshake, Calendar, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { CLINIC_STATISTICS } from "../data";

// Safe dynamic icon mapping
const STAT_ICONS: Record<string, any> = {
  served: Users,
  vaccines: ShieldCheck,
  families: HeartHandshake,
  years: Calendar,
  satisfaction: Sparkles
};

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    // Adapt duration depending on how large the number is
    const duration = 2000; 
    const stepTime = Math.max(Math.floor(duration / (value || 1)), 15);
    const increment = Math.ceil(value / (duration / stepTime));

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasStarted, value]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-teal-900 to-teal-950 text-white relative overflow-hidden">
      {/* Decorative shapes to make it look premium and modern */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-800/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-800/50 border border-teal-700/30 rounded-full mb-3"
          >
            <span className="w-1.5 h-1.5 bg-coral-500 rounded-full" />
            <span className="text-xs font-semibold tracking-wider uppercase text-teal-300">
              Trusted Clinical Excellence
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl font-bold tracking-tight"
          >
            Our Impact in Waterloo
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-teal-200/80 mt-3 text-sm sm:text-base leading-relaxed"
          >
            Over more than a decade of medical services, we are committed to elevating healthcare safety, maternity care standards, and pediatric protection.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {CLINIC_STATISTICS.map((stat, idx) => {
            const IconComponent = STAT_ICONS[stat.id] || Users;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group"
              >
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-xl bg-teal-800/40 border border-teal-700/30 flex items-center justify-center mb-4 text-coral-500 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Animated counter value */}
                <div className="font-serif text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Stat label */}
                <span className="font-semibold text-xs tracking-wider uppercase text-coral-100 mt-2">
                  {stat.label}
                </span>

                {/* Sub-description */}
                <p className="text-teal-200/60 text-xs mt-3 leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
