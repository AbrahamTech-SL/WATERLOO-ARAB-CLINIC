import React, { useState } from "react";
import { CalendarDays, Phone, User, Stethoscope, Clock, FileText, CheckCircle2, MessageSquare, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CLINIC_CONTACTS, MEDICAL_SERVICES } from "../data";
import { AppointmentData } from "../types";

export default function BookingForm() {
  const [formData, setFormData] = useState<AppointmentData>({
    fullName: "",
    phoneNumber: "",
    service: MEDICAL_SERVICES[0].title,
    preferredDate: "",
    preferredTime: "",
    additionalNotes: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Get today's date formatted as YYYY-MM-DD for min-date input validation
  const getMinDateString = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phoneNumber || !formData.preferredDate || !formData.preferredTime) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    // Simulate clinical dispatch queue
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
    }, 900);
  };

  // Compose WhatsApp Message Redirection
  const triggerWhatsAppRedirect = () => {
    const textMessage = `*NEW CLINICAL APPOINTMENT BOOKING*
----------------------------------------
👤 *Full Name:* ${formData.fullName}
📞 *Contact Phone:* ${formData.phoneNumber}
🩺 *Service Requested:* ${formData.service}
📅 *Preferred Date:* ${formData.preferredDate}
⏰ *Preferred Time:* ${formData.preferredTime}
📝 *Additional Notes:* ${formData.additionalNotes || "None"}
----------------------------------------
_Please confirm my slot and reply with final clinical preparation details. Thank you!_`;

    const encodedText = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/23230874922?text=${encodedText}`;
    
    // Open in a new tab safely
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setShowSuccessModal(false);
  };

  return (
    <section id="book-appointment" className="py-20 bg-sand-50 relative overflow-hidden">
      {/* Decorative background grid and blurs */}
      <div className="absolute inset-0 bg-[radial-gradient(#065f46_0.07%,transparent_0.07%)] [background-size:24px_24px] opacity-10" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-sand-200/50 rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-teal-100/50 rounded-full blur-3xl -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Informational Text & Preparation Guidelines */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-coral-100 border border-coral-500/10 rounded-full">
              <span className="w-1.5 h-1.5 bg-coral-500 rounded-full animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-coral-750">
                Direct Clinic Bookings
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-900 tracking-tight leading-tight">
              Schedule Your Clinic Visit Today
            </h2>
            
            <p className="text-teal-950/70 text-sm sm:text-base leading-relaxed">
              We make clinical booking stress-free. Fill in your details and select a preferred consultation slot. Our staff will immediately coordinate your request and reply via WhatsApp or direct phone call.
            </p>

            <div className="space-y-4 pt-4">
              <h3 className="font-serif text-lg font-bold text-teal-900">
                Appointment Preparation Guidelines:
              </h3>
              
              <ul className="space-y-3.5">
                {[
                  "Please arrive 15 minutes before your pre-selected slot to complete check-in.",
                  "Bring any existing diagnostic results, prescription files, and vaccination booklets.",
                  "If booking a child vaccination, remember to bring their health record card.",
                  "We accept Orange Money, Africell Money, Bank Transfers, and Cash."
                ].map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center text-teal-800 mt-0.5 shrink-0 text-xs font-bold">
                      {idx + 1}
                    </div>
                    <span className="text-teal-950/75 text-xs sm:text-sm leading-relaxed">
                      {tip}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-sand-200">
              <p className="text-xs text-teal-950/60 leading-normal">
                Need to cancel or reschedule? Call us directly at:
                <br />
                <span className="font-bold text-teal-900 text-sm">{CLINIC_CONTACTS.phone1Display}</span> or <span className="font-bold text-teal-900 text-sm">{CLINIC_CONTACTS.phone2Display}</span>
              </p>
            </div>
          </div>

          {/* Clinical Booking Card Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-sand-200/70">
            <div className="mb-8">
              <h3 className="font-serif text-2xl font-bold text-teal-950">
                Secure Clinic Appointment
              </h3>
              <p className="text-teal-950/60 text-xs sm:text-sm mt-1">
                Fields marked with <span className="text-coral-500 font-bold">*</span> are required for registration.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5.5">
              
              {/* Full Name Input */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-teal-900 mb-2">
                  Full Name <span className="text-coral-500">*</span>
                </label>
                <div className="relative rounded-xl shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-teal-800/40">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your first and last name"
                    className="block w-full pl-10.5 pr-4 py-3 bg-sand-50/50 hover:bg-sand-50 focus:bg-white border border-sand-300 focus:ring-2 focus:ring-teal-800 focus:border-teal-800 rounded-xl text-sm transition-all outline-none"
                  />
                </div>
              </div>

              {/* Phone and Service Side by Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-teal-900 mb-2">
                    Phone Number <span className="text-coral-500">*</span>
                  </label>
                  <div className="relative rounded-xl shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-teal-800/40">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      name="phoneNumber"
                      required
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="e.g. +232 30 874922"
                      className="block w-full pl-10.5 pr-4 py-3 bg-sand-50/50 hover:bg-sand-50 focus:bg-white border border-sand-300 focus:ring-2 focus:ring-teal-800 focus:border-teal-800 rounded-xl text-sm transition-all outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-teal-900 mb-2">
                    Service Required <span className="text-coral-500">*</span>
                  </label>
                  <div className="relative rounded-xl shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-teal-800/40">
                      <Stethoscope className="w-4 h-4" />
                    </div>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="block w-full pl-10.5 pr-4 py-3 bg-sand-50/50 hover:bg-sand-50 focus:bg-white border border-sand-300 focus:ring-2 focus:ring-teal-800 focus:border-teal-800 rounded-xl text-sm transition-all outline-none appearance-none cursor-pointer"
                    >
                      {MEDICAL_SERVICES.map((srv) => (
                        <option key={srv.id} value={srv.title}>
                          {srv.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Preferred Date and Time Side by Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-teal-900 mb-2">
                    Preferred Date <span className="text-coral-500">*</span>
                  </label>
                  <div className="relative rounded-xl shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-teal-800/40">
                      <CalendarDays className="w-4 h-4" />
                    </div>
                    <input
                      type="date"
                      name="preferredDate"
                      required
                      min={getMinDateString()}
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="block w-full pl-10.5 pr-4 py-3 bg-sand-50/50 hover:bg-sand-50 focus:bg-white border border-sand-300 focus:ring-2 focus:ring-teal-800 focus:border-teal-800 rounded-xl text-sm transition-all outline-none cursor-pointer"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-teal-900 mb-2">
                    Preferred Time <span className="text-coral-500">*</span>
                  </label>
                  <div className="relative rounded-xl shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-teal-800/40">
                      <Clock className="w-4 h-4" />
                    </div>
                    <select
                      name="preferredTime"
                      required
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="block w-full pl-10.5 pr-4 py-3 bg-sand-50/50 hover:bg-sand-50 focus:bg-white border border-sand-300 focus:ring-2 focus:ring-teal-800 focus:border-teal-800 rounded-xl text-sm transition-all outline-none appearance-none cursor-pointer"
                    >
                      <option value="">-- Choose a time slot --</option>
                      <option value="Morning (08:00 AM - 11:30 AM)">Morning (08:00 AM - 11:30 AM)</option>
                      <option value="Midday (11:30 AM - 02:00 PM)">Midday (11:30 AM - 02:00 PM)</option>
                      <option value="Afternoon (02:00 PM - 05:00 PM)">Afternoon (02:00 PM - 05:00 PM)</option>
                      <option value="Evening (05:00 PM - 08:00 PM)">Evening (05:00 PM - 08:00 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-teal-900 mb-2">
                  Additional Notes (Optional)
                </label>
                <div className="relative rounded-xl shadow-sm">
                  <div className="absolute top-3 left-3.5 text-teal-800/40">
                    <FileText className="w-4 h-4" />
                  </div>
                  <textarea
                    name="additionalNotes"
                    rows={3}
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    placeholder="Describe any chronic issues, current symptoms, or background requirements"
                    className="block w-full pl-10.5 pr-4 py-3 bg-sand-50/50 hover:bg-sand-50 focus:bg-white border border-sand-300 focus:ring-2 focus:ring-teal-800 focus:border-teal-800 rounded-xl text-sm transition-all outline-none resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2 py-4 px-6 bg-teal-850 hover:bg-teal-900 text-white font-bold rounded-2xl tracking-wide shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-200 cursor-pointer ${
                  isSubmitting ? "opacity-60 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/35 border-t-white rounded-full animate-spin" />
                    <span>Processing Clinical Request...</span>
                  </>
                ) : (
                  <>
                    <CalendarDays className="w-5 h-5 text-coral-500 fill-coral-500/10" />
                    <span>Submit & Redirection to WhatsApp</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>
      </div>

      {/* SUCCESS POPUP MODAL (LIGHTBOX MODE) */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-teal-950/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-sand-100 text-center"
            >
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 text-teal-900/50 hover:text-teal-900 hover:bg-sand-100 p-1.5 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-teal-950">
                Slot Pre-scheduled Successfully!
              </h3>
              
              <p className="text-teal-950/70 text-sm mt-3 leading-relaxed">
                Thank you, <span className="font-bold text-teal-900">{formData.fullName}</span>. Your clinical appointment for <span className="font-semibold text-teal-900">{formData.service}</span> on <span className="font-semibold text-teal-900">{formData.preferredDate}</span> has been structured!
              </p>

              {/* Instruction Panel */}
              <div className="bg-sand-100/75 rounded-2xl p-4.5 text-left mt-6 border border-sand-200 space-y-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-teal-900">
                    Streamlined WhatsApp Message Template:
                  </p>
                  <p className="text-[11px] text-teal-950/60 leading-normal mt-0.5">
                    Pre-filled with your contact info and preferred service to accelerate clinical intake processing.
                  </p>
                </div>
                
                {/* Visual Message Box Preview */}
                <div className="bg-white border border-sand-300 rounded-xl p-3 font-mono text-[11px] text-teal-950/80 leading-relaxed shadow-sm">
                  <div className="text-emerald-600 font-bold mb-1.5 flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    WhatsApp Queue Payload Preview
                  </div>
                  <div className="space-y-1">
                    <p><strong className="text-teal-900">👤 Patient Name:</strong> {formData.fullName}</p>
                    <p><strong className="text-teal-900">🩺 Service:</strong> {formData.service}</p>
                    <p><strong className="text-teal-900">📅 Date:</strong> {formData.preferredDate}</p>
                    <p><strong className="text-teal-900">⏰ Time Slot:</strong> {formData.preferredTime}</p>
                    {formData.additionalNotes && <p><strong className="text-teal-900">📝 Notes:</strong> {formData.additionalNotes}</p>}
                  </div>
                </div>
              </div>

              {/* Redirection button */}
              <div className="flex flex-col sm:flex-row gap-3 mt-7">
                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="w-full sm:w-1/3 py-3 px-4 rounded-xl border border-sand-300 hover:bg-sand-50 text-xs font-bold text-teal-900 transition-colors"
                >
                  Edit Booking
                </button>
                <button
                  onClick={triggerWhatsAppRedirect}
                  className="w-full sm:w-2/3 flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold tracking-wide shadow-md hover:shadow-lg transition-all"
                >
                  <MessageSquare className="w-4 h-4 fill-white/10" />
                  <span>Send via WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
