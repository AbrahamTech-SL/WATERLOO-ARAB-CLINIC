export interface MedicalService {
  id: string;
  title: string;
  description: string;
  iconName: string; // Used to dynamically map Lucide icons
  fullDetails: string;
}

export interface MedicalDepartment {
  id: string;
  name: string;
  description: string;
  servicesList: string[];
  head: string;
  iconName: string;
}

export interface StatisticsCounter {
  id: string;
  label: string;
  value: number;
  suffix: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  category: "facility" | "equipment" | "care";
  title: string;
  description: string;
  imageUrl: string;
}

export interface OutreachProgram {
  id: string;
  title: string;
  date: string;
  location: string;
  status: "upcoming" | "completed";
  description: string;
  impact: string;
  iconName: string;
}

export interface HealthBlogTip {
  id: string;
  title: string;
  category: "Prevention" | "Vaccination" | "Maternity" | "Nutrition" | "Awareness";
  readTime: string;
  date: string;
  summary: string;
  content: string[];
  imageUrl: string;
  author: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string; // Patient, Family, Community Member
  location: string;
  quote: string;
  rating: number;
  avatarUrl?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "appointments" | "services" | "pricing" | "vaccines";
}

export interface PatientResource {
  id: string;
  title: string;
  type: "PDF" | "Guide" | "Checklist" | "Schedule";
  description: string;
  size: string;
  link: string;
}

export interface AppointmentData {
  fullName: string;
  phoneNumber: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  additionalNotes: string;
}
