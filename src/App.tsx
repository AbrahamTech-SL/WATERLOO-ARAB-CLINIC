import { useState } from "react";
import {
  Stethoscope,
  Baby,
  HeartHandshake,
  ShieldAlert,
  Activity,
  Heart,
  Award,
  Sparkles,
  ShieldCheck,
  Users,
  Check,
  CheckCircle,
  Download,
  MapPin,
  Map,
  Clock,
  CreditCard,
  ArrowRight,
  ChevronRight,
  Star,
  Info,
  Smartphone,
  X,
  MessageCircle,
  Phone,
  ShieldAlert as AlertTriangle
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Components
import Header from "./components/Header";
import StatsSection from "./components/StatsSection";
import GallerySection from "./components/GallerySection";
import BookingForm from "./components/BookingForm";
import OutreachSection from "./components/OutreachSection";
import BlogSection from "./components/BlogSection";
import FAQAccordion from "./components/FAQAccordion";

// Static Data
import {
  CLINIC_CONTACTS,
  MEDICAL_SERVICES,
  MEDICAL_DEPARTMENTS,
  TRUST_BADGES,
  PATIENT_TESTIMONIALS,
  PATIENT_RESOURCES,
  PAYMENT_METHODS,
  IMAGES
} from "./data";

// Custom Icon Map for dynamic rendering
const ICON_MAP: Record<string, any> = {
  Stethoscope: Stethoscope,
  Baby: Baby,
  HeartHandshake: HeartHandshake,
  ShieldAlert: ShieldAlert,
  Activity: Activity,
  Heart: Heart,
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck,
  Users: Users,
  Award: Award
};

export default function App() {
  const [activeDepartment, setActiveDepartment] = useState<string>("dept-general");
  const [activeMapDirection, setActiveMapDirection] = useState<"freetown" | "market" | "four-mile">("freetown");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [legalModalContent, setLegalModalContent] = useState<{ title: string; body: string[] } | null>(null);

  // Dynamic file download simulation
  const handleResourceDownload = (title: string) => {
    setToastMessage(`Starting download for "${title}"...`);
    setTimeout(() => {
      setToastMessage(`Successfully downloaded "${title}"! Check your downloads folder.`);
      setTimeout(() => {
        setToastMessage(null);
      }, 4000);
    }, 1500);
  };

  // Map route step-by-step guidelines
  const directionGuides = {
    freetown: {
      title: "Coming from Freetown (Westbound)",
      instructions: [
        "Take the main Freetown-Waterloo Highway heading East.",
        "Pass the toll gate and continue straight towards the Waterloo container hub.",
        "Keep straight past the Waterloo Police Station junction.",
        "We are located on the left-hand side of Main Motor Road in Bassatown, right before the 4 Mile Park roundabout."
      ],
      estimatedTime: "35 mins from Freetown Toll"
    },
    market: {
      title: "Coming from Waterloo Open Market (Center)",
      instructions: [
        "Head East on Main Motor Road towards the outer districts.",
        "Drive past the central commercial bank junctions (approx. 1.2 km).",
        "Look out for the Waterloo Arab Clinic signature green signpost on your right-hand side.",
        "We are located opposite the central solar streetlights in Bassatown."
      ],
      estimatedTime: "5 mins from Market center"
    },
    "four-mile": {
      title: "Coming from 4 Mile / Masiaka (Eastbound)",
      instructions: [
        "Drive West through the 4 Mile checkpoint junction.",
        "Enter the Waterloo metropolitan boundaries via Main Motor Road.",
        "Pass the Western Area Rural district offices.",
        "We are located on your right-hand side, approximately 800 meters after the 4 Mile Park."
      ],
      estimatedTime: "8 mins from 4 Mile Checkpoint"
    }
  };

  return (
    <div className="min-h-screen bg-sand-100 font-sans text-teal-950 overflow-x-hidden pt-28">
      
      {/* GLOBAL HEADLINE WRAPPER */}
      <Header />

      {/* TOAST SYSTEM */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 left-6 z-50 bg-teal-900 border border-teal-700 text-white px-5 py-3.5 rounded-2xl shadow-xl flex items-center gap-3.5 max-w-sm"
          >
            <div className="w-5.5 h-5.5 rounded-full bg-coral-500 flex items-center justify-center shrink-0">
              <span className="w-2.5 h-2.5 bg-white rounded-full animate-ping" />
            </div>
            <p className="text-xs font-semibold tracking-wide">{toastMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HERO SECTION */}
      <section id="home" className="relative min-h-[80vh] flex items-center bg-sand-200 py-16 lg:py-24 overflow-hidden">
        
        {/* Background Premium Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.reception}
            alt="Waterloo Arab Clinic Facility"
            className="w-full h-full object-cover object-center opacity-25 filter blur-[1px]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sand-100 via-sand-100/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-sand-100 via-transparent to-transparent" />
        </div>

        {/* Hero Contents */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 lg:space-y-8">
              
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 border border-teal-800/10 rounded-full"
              >
                <ShieldCheck className="w-4 h-4 text-teal-800" />
                <span className="text-xs font-bold tracking-wider uppercase text-teal-800">
                  MoHS Registered Clinical Hub
                </span>
              </motion.div>

              {/* Title and Subtitle */}
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="font-serif text-4xl sm:text-5xl lg:text-6.5xl font-extrabold text-teal-900 tracking-tight leading-[1.1]"
                >
                  Your Community <br className="hidden sm:inline" />
                  <span className="text-teal-800 underline decoration-coral-500 decoration-wavy decoration-3 underline-offset-8">
                    Health Partner
                  </span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-teal-950/85 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed font-medium"
                >
                  Providing trusted, compassionate, and affordable healthcare services for individuals and families in Waterloo, Bassatown, 4 Mile, and surrounding communities in Sierra Leone.
                </motion.p>
              </div>

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 max-w-md"
              >
                <a
                  href="#book-appointment"
                  className="w-full sm:w-auto text-center bg-teal-800 hover:bg-teal-900 text-white font-bold py-4 px-7 rounded-2xl tracking-wide shadow-md shadow-teal-900/10 hover:shadow-teal-900/20 hover:scale-[1.01] transition-all"
                >
                  Book Appointment Now
                </a>
                
                <a
                  href={CLINIC_CONTACTS.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 border border-teal-800/20 bg-white hover:bg-teal-50 text-teal-800 font-bold py-4 px-7 rounded-2xl tracking-wide shadow-sm transition-all"
                >
                  <Smartphone className="w-4 h-4 text-emerald-600 fill-emerald-600/10" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </motion.div>

              {/* Simple Bullet Trust list */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-6 border-t border-sand-300/60 max-w-lg"
              >
                {[
                  "Qualified Clinicians",
                  "WHO Cold Storage",
                  "Daily Child Care",
                  "Prenatal Screening",
                  "24/7 Emergencies",
                  "Affordable Pricing"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-coral-500 stroke-[3]" />
                    <span className="text-xs font-bold text-teal-950/75">{item}</span>
                  </div>
                ))}
              </motion.div>

            </div>

            {/* Visual Hero Banner Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white bg-white p-3.5">
                <div className="aspect-[4/3] rounded-2.5xl overflow-hidden relative">
                  <img
                    src={IMAGES.pediatric}
                    alt="Clinical Consult"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-950/40 via-transparent to-transparent" />
                </div>
                
                {/* Floating details badge */}
                <div className="absolute bottom-10 -left-6 bg-white border border-sand-200 rounded-2xl p-4 shadow-xl flex items-center gap-3 max-w-xs animate-soft-pulse">
                  <div className="w-10 h-10 rounded-xl bg-coral-100 flex items-center justify-center text-coral-600">
                    <Heart className="w-5 h-5 fill-coral-100" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-teal-950 leading-none">Maternal & Infant Care</h4>
                    <p className="text-[10px] text-teal-950/60 mt-1 leading-normal">Premium prenatal scans & baby vaccine charts open daily.</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. STATS SECTION (COUNTER EFFECT) */}
      <StatsSection />

      {/* 3. HEALTHCARE SERVICES SECTION */}
      <section id="services" className="py-24 bg-sand-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-100 border border-teal-800/10 rounded-full mb-3">
              <Stethoscope className="w-3.5 h-3.5 text-teal-800" />
              <span className="text-xs font-semibold tracking-wider uppercase text-teal-850">
                Medical Services Offered
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-teal-900 tracking-tight">
              Premium Healthcare Made Accessible
            </h2>
            <p className="text-teal-950/70 mt-3 text-sm sm:text-base leading-relaxed">
              We provide broad-spectrum diagnostic treatment, routine preventive programs, and experienced midwife support following international healthcare standards.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MEDICAL_SERVICES.map((srv, idx) => {
              const ServiceIcon = ICON_MAP[srv.iconName] || Stethoscope;
              return (
                <motion.div
                  key={srv.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-7.5 border border-sand-200/80 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col"
                >
                  {/* Icon Frame */}
                  <div className="w-12 h-12 rounded-xl bg-sand-100 text-teal-800 flex items-center justify-center mb-6 group-hover:bg-teal-800 group-hover:text-white transition-colors duration-300 shadow-inner">
                    <ServiceIcon className="w-6 h-6 stroke-[2]" />
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-teal-950 mb-3 group-hover:text-teal-800 transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-teal-950/65 text-xs sm:text-sm leading-relaxed mb-6 flex-1">
                    {srv.description}
                  </p>

                  <div className="pt-4 border-t border-sand-100 flex items-center justify-between">
                    <a
                      href="#departments"
                      onClick={() => {
                        const matchingDept = MEDICAL_DEPARTMENTS.find(
                          (d) => d.name.toLowerCase().includes(srv.title.toLowerCase()) || d.id === `dept-${srv.id.split("-")[0]}`
                        );
                        if (matchingDept) setActiveDepartment(matchingDept.id);
                      }}
                      className="text-xs font-bold text-teal-800 hover:text-teal-900 flex items-center gap-1 group-hover:gap-1.5 transition-all"
                    >
                      <span>View Department Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. HOSPITAL DEPARTMENTS SECTION (INTERACTIVE TABS) */}
      <section id="departments" className="py-24 bg-sand-100 relative overflow-hidden border-t border-b border-sand-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-100 border border-teal-800/10 rounded-full mb-3">
              <Award className="w-3.5 h-3.5 text-teal-800" />
              <span className="text-xs font-semibold tracking-wider uppercase text-teal-850">
                Clinical Departments
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-teal-900 tracking-tight">
              Hospital Departments & Staff
            </h2>
            <p className="text-teal-950/70 mt-3 text-sm sm:text-base leading-relaxed">
              Our clinical wings operate under professional guidelines led by registered MD physicians and community nursing coordinators.
            </p>
          </div>

          {/* Interactive Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Tab list */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              {MEDICAL_DEPARTMENTS.map((dept) => {
                const isActive = activeDepartment === dept.id;
                return (
                  <button
                    key={dept.id}
                    onClick={() => setActiveDepartment(dept.id)}
                    className={`w-full text-left p-4.5 rounded-xl font-serif text-sm sm:text-base font-bold transition-all border flex items-center justify-between cursor-pointer ${
                      isActive
                        ? "bg-teal-800 text-white border-teal-800 shadow-md translate-x-1.5"
                        : "bg-white text-teal-950 hover:bg-sand-200 border-sand-200"
                    }`}
                  >
                    <span>{dept.name}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? "rotate-90 text-coral-500" : "text-teal-900/40"}`} />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Tab View panel with animation */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-sand-200 shadow-sm flex flex-col justify-between min-h-[380px]">
              
              <AnimatePresence mode="wait">
                {MEDICAL_DEPARTMENTS.filter((d) => d.id === activeDepartment).map((dept) => {
                  const DeptIcon = ICON_MAP[dept.iconName] || Stethoscope;
                  return (
                    <motion.div
                      key={dept.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-6 flex-1"
                    >
                      <div className="flex items-center gap-3.5 pb-4 border-b border-sand-100">
                        <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center">
                          <DeptIcon className="w-5.5 h-5.5" />
                        </div>
                        <div>
                          <h3 className="font-serif text-xl sm:text-2xl font-bold text-teal-950">
                            {dept.name}
                          </h3>
                          <p className="text-xs text-teal-950/50 uppercase font-mono tracking-wider font-semibold mt-0.5">
                            Led by: <span className="text-teal-900 font-bold">{dept.head}</span>
                          </p>
                        </div>
                      </div>

                      <p className="text-teal-950/75 text-xs sm:text-sm leading-relaxed">
                        {dept.description}
                      </p>

                      <div className="space-y-3 pt-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-teal-900">
                          Services & Care Highlights:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {dept.servicesList.map((srvItem, idx) => (
                            <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-sand-50 rounded-xl border border-sand-150 text-xs text-teal-950 font-semibold">
                              <CheckCircle className="w-4 h-4 text-coral-500 shrink-0" />
                              <span>{srvItem}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </motion.div>
                  );
                })}
              </AnimatePresence>

              <div className="pt-8 border-t border-sand-100 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-teal-950/60">Accepting new medical cases today</span>
                </div>
                
                <a
                  href="#book-appointment"
                  className="flex items-center gap-1.5 px-5.5 py-3 rounded-xl bg-teal-800 hover:bg-teal-900 text-white text-xs font-bold tracking-wide shadow-md transition-all shrink-0"
                >
                  <span>Book Under This Department</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE WATERLOO ARAB CLINIC */}
      <section id="about" className="py-24 bg-sand-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Main layout grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left content column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-coral-100 border border-coral-500/10 rounded-full">
                <Heart className="w-3.5 h-3.5 text-coral-600 fill-coral-600/10" />
                <span className="text-xs font-semibold tracking-wider uppercase text-coral-750">
                  Our core mission
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-teal-900 tracking-tight leading-snug">
                Why Waterloo Families Trust Us
              </h2>
              <p className="text-teal-950/75 text-sm sm:text-base leading-relaxed">
                Waterloo Arab Clinic has served the community for over 12 years. We fuse high quality medicine and modern diagnostics with a warm, caring touch to ensure no family is left without high-trust medical help.
              </p>

              {/* Grid of features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {[
                  {
                    title: "Community-Focused Care",
                    desc: "Deeply tailored clinical policies designed specifically for Waterloo regional health concerns."
                  },
                  {
                    title: "Affordable Healthcare",
                    desc: "Transparent rates and direct mobile money coverage with no hidden check-in surcharges."
                  },
                  {
                    title: "Modern Clinical Units",
                    desc: "Temperature-secure laboratories, private ultrasound screening rooms, and clean environments."
                  },
                  {
                    title: "Experienced Team",
                    desc: "Supervised under senior clinicians, experienced midwives, and fully certified laboratory staff."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                      <h4 className="font-serif text-sm sm:text-base font-bold text-teal-950">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-teal-950/65 text-xs pl-8 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right graphic column */}
            <div className="lg:col-span-6 relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-white">
                <img
                  src={IMAGES.outreach}
                  alt="Clinical Vaccine Drive"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating review card */}
              <div className="absolute -bottom-8 -right-4 bg-teal-850 text-white rounded-2xl p-5 shadow-2xl max-w-sm border border-teal-800">
                <p className="text-xs italic text-teal-200 leading-relaxed">
                  "Waterloo Arab Clinic saved my baby during an emergency malaria infection. Their quick actions and affordable treatment are truly a blessing."
                </p>
                <div className="flex items-center gap-2 mt-4 pt-3 border-t border-teal-800/60">
                  <div className="w-6.5 h-6.5 rounded-full bg-coral-500 flex items-center justify-center text-[10px] font-bold">
                    MB
                  </div>
                  <span className="text-[11px] font-bold text-white uppercase tracking-wider">
                    Mariatu B., Waterloo Resident
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. FACILITY GALLERY */}
      <GallerySection />

      {/* 7. COMMUNITY OUTREACH PROGRAMS TIMELINE */}
      <OutreachSection />

      {/* 8. HEALTH NEWS & TIPS */}
      <BlogSection />

      {/* 9. APPOINTMENT BOOKING SECTION */}
      <BookingForm />

      {/* 10. INSURANCE, PAYMENT & ACCREDITATION CO-SECTION */}
      <section className="py-20 bg-sand-100 border-t border-b border-sand-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Payments & Insurance */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-150 border border-teal-850/10 rounded-full">
                <CreditCard className="w-3.5 h-3.5 text-teal-800" />
                <span className="text-xs font-semibold tracking-wider uppercase text-teal-900">
                  Payment & Insurance Information
                </span>
              </div>
              
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-teal-950 tracking-tight leading-snug">
                Transparent Pricing & Local Payments
              </h3>

              <p className="text-teal-950/70 text-xs sm:text-sm leading-relaxed">
                We believe healthcare must be accessible. We maintain fair and transparent charges, explaining all fees prior to treatments. There are never any hidden clinical overheads at Waterloo Arab Clinic.
              </p>

              {/* Payment grids */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                {PAYMENT_METHODS.map((pay, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-4 border border-sand-200 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-2xl">{pay.logo}</span>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-teal-950 leading-none">{pay.name}</h4>
                      <p className="text-[10px] text-teal-950/55 mt-1">{pay.type}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-teal-50 border border-teal-100/50 flex items-start gap-2.5">
                <Info className="w-5 h-5 text-teal-800 shrink-0 mt-0.5" />
                <p className="text-xs text-teal-950/80 leading-relaxed font-medium">
                  <strong>Insurance Partnerships:</strong> We actively accept major national government worker healthcare schemes, private employer insurances, and localized community medical tokens. Confirm your coverage at the front reception desk!
                </p>
              </div>
            </div>

            {/* Right Column: Certifications and Accreditation */}
            <div className="lg:col-span-6 space-y-6 lg:pl-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-coral-100 border border-coral-500/10 rounded-full">
                <Award className="w-3.5 h-3.5 text-coral-600" />
                <span className="text-xs font-semibold tracking-wider uppercase text-coral-750">
                  Accreditation & Quality
                </span>
              </div>
              
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-teal-950 tracking-tight leading-snug">
                Certified Medical Standards
              </h3>

              <p className="text-teal-950/70 text-xs sm:text-sm leading-relaxed">
                Waterloo Arab Clinic operates in complete alignment with Sierra Leone medical statutes, WHO protocols, and Pharmacy Board guidelines.
              </p>

              {/* Badges Grid */}
              <div className="space-y-3.5 pt-2">
                {TRUST_BADGES.map((badge) => (
                  <div key={badge.id} className="bg-white rounded-2xl p-4.5 border border-sand-200/60 shadow-sm flex items-start gap-4 hover:border-teal-800/10 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-sand-100 text-teal-800 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5.5 h-5.5 text-teal-800 stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-extrabold text-teal-950 leading-tight">
                        {badge.title}
                      </h4>
                      <p className="text-[10px] font-mono text-coral-600 font-bold uppercase mt-0.5">
                        Issuer: {badge.issuer}
                      </p>
                      <p className="text-teal-950/60 text-xs mt-1.5 leading-relaxed font-medium">
                        {badge.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 11. PATIENT TESTIMONIALS CAROUSEL */}
      <section className="py-24 bg-sand-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-14">
            <span className="text-[11px] font-bold uppercase tracking-widest text-coral-600">
              COMMUNITY TESTIMONIALS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-teal-900 tracking-tight mt-1.5">
              What Waterloo Families Say
            </h2>
          </div>

          {/* Testimonial Active Slider Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-sand-200 shadow-lg relative text-center">
            
            {/* Big quote icon placeholder */}
            <div className="text-sand-300 font-serif text-7xl absolute top-4 left-6 select-none opacity-40">
              “
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 text-amber-500 mb-6">
              {[...Array(PATIENT_TESTIMONIALS[activeTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-500 stroke-amber-500" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="font-serif text-base sm:text-lg text-teal-950 leading-relaxed font-medium italic relative z-10">
              "{PATIENT_TESTIMONIALS[activeTestimonial].quote}"
            </p>

            {/* Patient Credentials */}
            <div className="mt-8 pt-6 border-t border-sand-100 flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-teal-850 text-white flex items-center justify-center font-bold text-sm shrink-0">
                {PATIENT_TESTIMONIALS[activeTestimonial].name[0]}
              </div>
              <div className="text-left">
                <h4 className="font-serif text-sm font-extrabold text-teal-950 leading-none">
                  {PATIENT_TESTIMONIALS[activeTestimonial].name}
                </h4>
                <p className="text-[10px] sm:text-xs text-teal-950/60 font-semibold uppercase mt-1">
                  {PATIENT_TESTIMONIALS[activeTestimonial].role} • <span className="text-coral-600 font-bold">{PATIENT_TESTIMONIALS[activeTestimonial].location}</span>
                </p>
              </div>
            </div>

            {/* Slider navigation pills */}
            <div className="flex justify-center gap-2 mt-8">
              {PATIENT_TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    activeTestimonial === idx ? "bg-teal-850 w-6" : "bg-sand-300"
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 12. PATIENT RESOURCES SECTION */}
      <section className="py-20 bg-sand-100 border-t border-b border-sand-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold uppercase tracking-widest text-teal-800">
              PATIENT HELPDESK RESOURCES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-teal-900 tracking-tight mt-1.5">
              Printable Medical Guides & Calendars
            </h2>
            <p className="text-teal-950/70 mt-3 text-xs sm:text-sm">
              Reduce check-in friction by preparing registration files, reviewing childhood immunization charts, or referencing hypertension meal roadmaps before visiting.
            </p>
          </div>

          {/* Resources Grids */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PATIENT_RESOURCES.map((res) => (
              <div key={res.id} className="bg-white rounded-2xl p-5 border border-sand-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2.5 mb-3">
                    <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-coral-600 bg-coral-50 px-2 py-0.5 rounded-md">
                      {res.type}
                    </span>
                    <span className="text-[10px] font-mono text-teal-950/40 font-semibold">{res.size}</span>
                  </div>
                  
                  <h4 className="font-serif text-sm sm:text-base font-bold text-teal-950 leading-tight">
                    {res.title}
                  </h4>
                  
                  <p className="text-teal-950/60 text-xs mt-2 leading-relaxed">
                    {res.description}
                  </p>
                </div>

                <button
                  onClick={() => handleResourceDownload(res.title)}
                  className="w-full flex items-center justify-center gap-1.5 mt-5 py-2.5 px-4 bg-sand-100 hover:bg-teal-50 hover:text-teal-900 rounded-xl text-xs font-bold text-teal-950 transition-colors border border-sand-200/60 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 shrink-0" />
                  <span>Download Guide</span>
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 13. FAQ ACCORDION */}
      <FAQAccordion />

      {/* 14. LOCATION, DIRECTIONS & MAP SECTION */}
      <section id="contact" className="py-24 bg-sand-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content panel */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-coral-100 border border-coral-500/10 rounded-full">
                <MapPin className="w-3.5 h-3.5 text-coral-600" />
                <span className="text-xs font-semibold tracking-wider uppercase text-coral-750">
                  Clinic Location & Parking
                </span>
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-teal-900 tracking-tight leading-snug">
                How to Locate Us in Waterloo
              </h2>

              <p className="text-teal-950/70 text-sm sm:text-base leading-relaxed">
                Waterloo Arab Clinic is located directly on the <strong>Main Motor Road in Bassatown, Waterloo</strong>. We are highly visible from the highway, positioned right between the Waterloo Central Police Station and the 4 Mile Park roundabout.
              </p>

              {/* Map Direction Toggles */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-teal-900">
                  Select Your Departure Point for Directions:
                </h4>
                
                <div className="flex gap-2">
                  {(["freetown", "market", "four-mile"] as const).map((route) => (
                    <button
                      key={route}
                      onClick={() => setActiveMapDirection(route)}
                      className={`px-3 py-2 rounded-xl text-xs font-bold tracking-wide transition-all shadow-sm cursor-pointer ${
                        activeMapDirection === route
                          ? "bg-teal-850 text-white"
                          : "bg-white text-teal-900 border border-sand-200"
                      }`}
                    >
                      {route === "freetown" ? "Freetown" : route === "market" ? "Market Center" : "4 Mile / East"}
                    </button>
                  ))}
                </div>

                {/* Selected Direction Box */}
                <div className="bg-white rounded-2xl p-5 border border-sand-200 shadow-sm space-y-3">
                  <div className="flex items-center justify-between gap-2.5 pb-2 border-b border-sand-100">
                    <span className="text-xs font-bold text-teal-950">
                      {directionGuides[activeMapDirection].title}
                    </span>
                    <span className="text-[10px] font-mono text-coral-600 font-extrabold uppercase bg-coral-50 px-2 py-0.5 rounded">
                      ⏱️ {directionGuides[activeMapDirection].estimatedTime}
                    </span>
                  </div>
                  
                  <ol className="list-decimal pl-4.5 space-y-2 text-xs text-teal-950/75 leading-relaxed font-semibold">
                    {directionGuides[activeMapDirection].instructions.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Clinic details lists */}
              <div className="space-y-3.5 pt-4">
                <div className="flex items-start gap-3 text-xs sm:text-sm">
                  <MapPin className="w-5 h-5 text-teal-850 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-teal-950 font-serif block">Physical Address</strong>
                    <span className="text-teal-950/70">{CLINIC_CONTACTS.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm">
                  <Clock className="w-5 h-5 text-teal-850 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-teal-950 font-serif block">Clinical Consulting Hours</strong>
                    <span className="text-teal-950/70">{CLINIC_CONTACTS.hours.weekdays}</span>
                    <span className="text-teal-950/70 block">{CLINIC_CONTACTS.hours.saturday}</span>
                    <span className="text-coral-600 font-bold block mt-0.5">⚠️ {CLINIC_CONTACTS.hours.sunday}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Visual simulated MAP layout & iframe together for extreme authenticity */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Actual Google Map Embed with a matching Sand-Teal container border style */}
              <div className="w-full rounded-3xl overflow-hidden shadow-md border-3 border-white aspect-[16/10] bg-sand-200 relative">
                
                {/* Fallback stylized map background or iframe */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15802.73030230232!2d-13.0645607!3d8.3364507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMjAnMTUuMiJOIDEzwrAwMyc1Mi40Ilc!5e0!3m2!1sen!2ssl!4v1719253450912!5m2!1sen!2ssl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Waterloo Arab Clinic Location Map"
                  className="w-full h-full absolute inset-0"
                />

                {/* Overlay card details */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-sand-200/50 max-w-xs z-10 hidden sm:block">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
                    <h4 className="text-xs font-bold text-teal-950">Waterloo Arab Clinic</h4>
                  </div>
                  <p className="text-[10px] text-teal-950/60 mt-1">Main Motor Road, Bassatown, Waterloo, Sierra Leone</p>
                </div>
              </div>

              {/* Landmark notes */}
              <div className="p-5 rounded-2xl bg-white border border-sand-200 shadow-sm">
                <h4 className="font-serif text-sm font-bold text-teal-950 mb-2">
                  🚙 Parking and Facility Accessibility:
                </h4>
                <p className="text-xs text-teal-950/70 leading-relaxed font-medium">
                  We provide free secure clinical parking on-site inside our compound. The facility is fully wheelchair-accessible with gentle ramp access, spacious doors, and assistive nursing services to help disabled or elderly patients from their vehicles.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 15. FOOTER */}
      <footer className="bg-teal-950 text-white pt-16 pb-10 relative overflow-hidden border-t border-teal-900">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-900/40 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            
            {/* Branding widget */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-white overflow-hidden flex items-center justify-center text-white font-bold border border-teal-850">
                  <img
                    src={IMAGES.logo}
                    alt="Waterloo Arab Clinic Logo"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold tracking-tight">Waterloo Arab Clinic</h3>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-coral-500 font-bold">Your Community Health Partner</p>
                </div>
              </div>

              <p className="text-teal-200/60 text-xs sm:text-sm leading-relaxed max-w-sm">
                Dedicated to improving lives through clinical excellence, routine immunizations, expert safe maternity, and friendly community healthcare guidelines.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={CLINIC_CONTACTS.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 bg-emerald-700 hover:bg-emerald-800 px-3.5 py-2 rounded-xl text-xs font-bold shadow-md transition-all text-white"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Chat Duty Nurse</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="font-serif text-sm font-extrabold text-white tracking-wider uppercase">
                Quick Navigation
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-teal-200/60 font-semibold">
                <li><a href="#home" className="hover:text-coral-500 hover:underline transition-all">Home Portal</a></li>
                <li><a href="#services" className="hover:text-coral-500 hover:underline transition-all">Healthcare Services</a></li>
                <li><a href="#departments" className="hover:text-coral-500 hover:underline transition-all">Medical Departments</a></li>
                <li><a href="#about" className="hover:text-coral-500 hover:underline transition-all">About Our Clinic</a></li>
                <li><a href="#outreach" className="hover:text-coral-500 hover:underline transition-all">Community Outreach</a></li>
              </ul>
            </div>

            {/* Resources & FAQs */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-serif text-sm font-extrabold text-white tracking-wider uppercase">
                Advisories & Resources
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-teal-200/60 font-semibold">
                <li><a href="#health-tips" className="hover:text-coral-500 hover:underline transition-all">Prevention & Health Tips</a></li>
                <li><a href="#faq" className="hover:text-coral-500 hover:underline transition-all">FAQ Helpdesk</a></li>
                <li><a href="#gallery" className="hover:text-coral-500 hover:underline transition-all">Facility Gallery Areas</a></li>
                <li><a href="#book-appointment" className="hover:text-coral-500 hover:underline transition-all">Pre-schedule Consultation</a></li>
              </ul>
            </div>

            {/* Contacts Footer Widget */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-serif text-sm font-extrabold text-white tracking-wider uppercase">
                Clinical Contacts
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-teal-200/60 font-medium">
                <li className="leading-relaxed">
                  📍 {CLINIC_CONTACTS.address}
                </li>
                <li>
                  📞 <a href={`tel:${CLINIC_CONTACTS.phone1}`} className="hover:text-white transition-colors font-bold">{CLINIC_CONTACTS.phone1Display}</a>
                </li>
                <li>
                  📞 <a href={`tel:${CLINIC_CONTACTS.phone2}`} className="hover:text-white transition-colors font-bold">{CLINIC_CONTACTS.phone2Display}</a>
                </li>
                <li className="pt-2 text-[11px] text-coral-500 font-mono tracking-wide uppercase font-bold">
                  🕒 Operational Status:
                  <span className="block text-white mt-1 uppercase font-sans font-semibold text-xs text-teal-200/80">
                    {CLINIC_CONTACTS.hours.general}
                  </span>
                </li>
              </ul>
            </div>

          </div>

          {/* Legal pages links & copy rights */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-teal-200/40">
            <p>
              © 2026 Waterloo Arab Clinic. Licensed clinical healthcare provider in Waterloo, Sierra Leone. All rights reserved.
            </p>

            <div className="flex gap-4 font-bold">
              <button
                onClick={() =>
                  setLegalModalContent({
                    title: "Privacy Policy",
                    body: [
                      "Waterloo Arab Clinic respects patient privacy guidelines under national regulations.",
                      "Personal registration records, phone numbers, and consultation sheets entered on this web portal are managed strictly client-side or sent directly to our secure WhatsApp workspace.",
                      "No clinical diagnoses, medical history logs, or phone numbers are shared, sold, or rented to external medical or advertising entities.",
                      "If you have questions about your clinical records, please talk directly to our head receptionist at Main Motor Road."
                    ]
                  })
                }
                className="hover:text-coral-500 transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              
              <button
                onClick={() =>
                  setLegalModalContent({
                    title: "Terms of Service",
                    body: [
                      "These Portal Terms apply to patients and families using this scheduling tool.",
                      "Online appointment scheduling serves as a convenience to pre-allocate slots; however, walk-in emergency clinical cases are prioritized first under medical ethics triage protocols.",
                      "We accept mobile money transfers (Orange and Africell), Bank Transfers, and Cash.",
                      "Patients are requested to bring their physical healthcare card or vaccine books to every clinical checkup."
                    ]
                  })
                }
                className="hover:text-coral-500 transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* LEGAL DISCLOSURE POPUP MODAL */}
      <AnimatePresence>
        {legalModalContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-teal-950/70 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-sand-100"
            >
              <button
                onClick={() => setLegalModalContent(null)}
                className="absolute top-4 right-4 text-teal-950/50 hover:text-teal-950 hover:bg-sand-100 p-1.5 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-teal-950 pb-3 border-b border-sand-100 mb-5 flex items-center gap-2">
                <Info className="w-5 h-5 text-teal-800" />
                <span>{legalModalContent.title}</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-teal-950/80 leading-relaxed font-normal text-left max-h-[50vh] overflow-y-auto pr-2">
                {legalModalContent.body.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-sand-100 flex justify-end">
                <button
                  onClick={() => setLegalModalContent(null)}
                  className="py-2.5 px-6 rounded-xl bg-teal-800 hover:bg-teal-900 text-white text-xs font-bold transition-all cursor-pointer"
                >
                  Close Document
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING EMERGENCY WHATSAPP BUTTON */}
      <motion.div
        initial={{ scale: 0, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-1.5 sm:gap-2"
      >
        {/* Pulsing Emergency Tag */}
        <div className="bg-red-600 text-white text-[9px] sm:text-xs font-black tracking-wider px-2 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-lg flex items-center gap-1 sm:gap-1.5 border border-white animate-pulse">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping shrink-0" />
          <span className="font-sans uppercase">URGENT / EMERGENCY 24/7</span>
        </div>

        {/* FAB Deep Link with Pulsing Ring */}
        <a
          href="https://wa.me/23230874922?text=EMERGENCY%3A%20I%20need%20urgent%20medical%20assistance%20at%20Waterloo%20Arab%20Clinic."
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-[#25D366] hover:bg-[#20ba56] text-white px-3 py-2 sm:px-5 sm:py-3.5 rounded-full shadow-2xl flex items-center gap-1.5 sm:gap-3 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(37,211,102,0.5)] group border border-white/80 cursor-pointer"
          title="Connect to WhatsApp Emergency Queue"
          id="whatsapp-emergency-fab"
        >
          {/* Animated glow rings */}
          <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping -z-10 group-hover:hidden" />
          
          <MessageCircle className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 text-white shrink-0" />
          
          <span className="font-sans font-extrabold text-[11px] sm:text-sm tracking-wide text-white block">
            Emergency Chat Queue
          </span>
        </a>
      </motion.div>

    </div>
  );
}
