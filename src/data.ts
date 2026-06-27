import {
  MedicalService,
  MedicalDepartment,
  StatisticsCounter,
  GalleryItem,
  OutreachProgram,
  HealthBlogTip,
  Testimonial,
  FAQItem,
  PatientResource
} from "./types";

import logoImg from "./assets/images/clinic_logo_1782592630208.jpg";
import receptionImg from "./assets/images/waterloo_reception_view_1782591893501.jpg";
import pediatricImg from "./assets/images/maternal_pediatric_care_1782591259380.jpg";
import outreachImg from "./assets/images/community_health_outreach_1782591275079.jpg";

export const IMAGES = {
  logo: logoImg,
  reception: receptionImg,
  pediatric: pediatricImg,
  outreach: outreachImg
};

// Contact details
export const CLINIC_CONTACTS = {
  address: "Main Motor Road, Bassatown, Waterloo, 4 Mile Park, Sierra Leone",
  phone1: "+23230874922",
  phone1Display: "+232 (30) 874-922",
  phone2: "+23279947572",
  phone2Display: "+232 (79) 947-572",
  whatsapp: "https://wa.me/23230874922",
  hours: {
    weekdays: "Monday - Friday: 8:00 AM - 8:00 PM",
    saturday: "Saturday: 9:00 AM - 5:00 PM",
    sunday: "Sunday: Emergency Calls Only (24/7)",
    general: "Mon - Fri: 8 AM - 8 PM | Sat: 9 AM - 5 PM | Sun: Emergency 24/7"
  }
};

// Premium Services Offered
export const MEDICAL_SERVICES: MedicalService[] = [
  {
    id: "general-medicine",
    title: "General Medicine",
    description: "Comprehensive diagnostics and treatment of primary health concerns for teenagers, adults, and seniors.",
    iconName: "Stethoscope",
    fullDetails: "Our General Medicine department is the frontline of patient care. We offer primary diagnosis, manage chronic illnesses like hypertension and diabetes, coordinate specialized treatments, and ensure overall wellness evaluations."
  },
  {
    id: "pediatrics",
    title: "Pediatrics",
    description: "Dedicated child healthcare including developmental screenings, growth tracking, and pediatric treatment.",
    iconName: "Baby",
    fullDetails: "We provide gentle, experienced pediatric services. From baby wellness checks, growth milestone tracker, and childhood illness treatment to nutritional advice, our team ensures your little ones grow healthy and strong."
  },
  {
    id: "maternity-care",
    title: "Maternity Care",
    description: "Expert prenatal care, professional ultrasound monitoring, and comprehensive postpartum support.",
    iconName: "HeartHandshake",
    fullDetails: "Safe motherhood is our priority. We guide expectant mothers through every stage of pregnancy with routine prenatal clinics, nutritional education, fetal monitoring, and post-birth maternal health checks."
  },
  {
    id: "vaccinations",
    title: "Vaccinations",
    description: "Comprehensive immunization schedules for newborns, children, and travelers to protect against critical diseases.",
    iconName: "ShieldAlert",
    fullDetails: "We provide full vaccination packages following WHO and government standards, including routine childhood immunizations, yellow fever, tetanus toxoid, polio drops, and standard wellness immunizations."
  },
  {
    id: "health-screenings",
    title: "Health Screenings",
    description: "Proactive, multi-parameter diagnostics for early detection of chronic conditions and infectious diseases.",
    iconName: "Activity",
    fullDetails: "Preventive screening is key to longevity. We offer packages including blood pressure checks, malaria screening, typhoid diagnostics, glucose monitoring, and organ-function assessments."
  },
  {
    id: "preventive-healthcare",
    title: "Preventive Healthcare",
    description: "Expert lifestyle counseling, health education, and routine checkups to stop illnesses before they start.",
    iconName: "Heart",
    fullDetails: "Empowering patients through knowledge is vital. We teach practical prevention strategies for regional challenges (malaria, waterborne diseases) alongside nutritional guidance and cardiovascular health maintenance."
  }
];

// Hospital-style Departments
export const MEDICAL_DEPARTMENTS: MedicalDepartment[] = [
  {
    id: "dept-general",
    name: "General Medicine Department",
    description: "Providing compassionate, state-of-the-art general medical examinations, chronic disease management, and primary treatment plans.",
    servicesList: ["Adult Wellness Checks", "Hypertension & Diabetes Care", "Infectious Disease Therapy", "Lab Diagnostics Referral"],
    head: "Dr. Alimamy Kamara, MD",
    iconName: "Activity"
  },
  {
    id: "dept-pediatrics",
    name: "Pediatrics & Child Health",
    description: "A warm, child-friendly clinic dedicated to the physical, developmental, and emotional health of newborns, infants, and adolescents.",
    servicesList: ["Growth & Nutrition Monitoring", "Common Childhood Infection Care", "Infant Healthcare Advice", "Developmental Milestones Review"],
    head: "Dr. Aminata Sesay, MBBS",
    iconName: "Baby"
  },
  {
    id: "dept-maternal",
    name: "Maternal & Child Health Division",
    description: "Fully-equipped department focusing on safe pregnancies, expert prenatal testing, safe delivery prep, and postpartum care.",
    servicesList: ["Prenatal Screenings & Ultrasounds", "Post-delivery Lactation Counsel", "Maternal Wellness Seminars", "Family Planning Education"],
    head: "Nurse Midwife Fatmata Mansaray, SRN",
    iconName: "Sparkles"
  },
  {
    id: "dept-vaccination",
    name: "Vaccination & Immunization Unit",
    description: "Sterile, temperature-monitored facility supplying crucial vaccines for toddlers, school pupils, and travel immunization.",
    servicesList: ["Standard Infant BCG & DPT", "Measles-Rubella Safeguards", "Tetanus and Hepatitis series", "Outreach Community Immunizations"],
    head: "Nurse Ibrahim Bah, SECHN",
    iconName: "ShieldCheck"
  },
  {
    id: "dept-preventive",
    name: "Preventive Medicine & Wellness",
    description: "Comprehensive public health strategies, routine wellness checks, metabolic screening, and cardiac risk profile diagnostics.",
    servicesList: ["Hypertension Support Groups", "Malaria Prevention Campaigns", "Healthy Nutrition Plans", "Water Sanitation Education"],
    head: "Dr. Hassan Diallo, MPH",
    iconName: "Heart"
  },
  {
    id: "dept-outreach",
    name: "Community Health & Outreach",
    description: "Taking modern healthcare outside clinic walls with mobile medical services, educational events, and community health aid.",
    servicesList: ["Free Field Health Screenings", "School Health Assessments", "Rural Sanitation Campaigns", "Emergency Epidemic Protection"],
    head: "Lamin Conteh, Community Coordinator",
    iconName: "Users"
  }
];

// Patient Statistics
export const CLINIC_STATISTICS: StatisticsCounter[] = [
  {
    id: "served",
    label: "Patients Served",
    value: 15400,
    suffix: "+",
    description: "Providing high-trust primary healthcare across Waterloo and neighboring Western Area Rural districts."
  },
  {
    id: "vaccines",
    label: "Vaccinations Administered",
    value: 8200,
    suffix: "+",
    description: "Critical pediatric and maternal immunizations conducted safely and cataloged."
  },
  {
    id: "families",
    label: "Families Supported",
    value: 3100,
    suffix: "+",
    description: "Engaging multigenerational households with accessible preventive medical programs."
  },
  {
    id: "years",
    label: "Years Serving Waterloo",
    value: 12,
    suffix: "",
    description: "An established pillar of medical trust, clinical excellence, and deep community bonding."
  },
  {
    id: "satisfaction",
    label: "Patient Satisfaction",
    value: 98,
    suffix: "%",
    description: "A testament to our attentive medical staff, high quality medicines, and caring environment."
  }
];

// Clinic Gallery Items - 7 gorgeous photos representing different parts of the premium clinic
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    category: "facility",
    title: "Premium Welcoming Reception",
    description: "Our sand-toned front desk styled elegantly to ease patient entrance and ensure immediate assistance.",
    imageUrl: IMAGES.reception
  },
  {
    id: "gal-2",
    category: "care",
    title: "Maternal & Pediatric Wing",
    description: "A comfortable, bright consulting space designed specifically for mothers and babies.",
    imageUrl: IMAGES.pediatric
  },
  {
    id: "gal-3",
    category: "care",
    title: "Community Outreach Campaign",
    description: "Outreach health campaigns conducting critical immunizations and health checks in surrounding community zones.",
    imageUrl: IMAGES.outreach
  },
  {
    id: "gal-4",
    category: "facility",
    title: "Cozy Patient Waiting Lounge",
    description: "Spacious seating, natural light, and climate-controlled environment for a peaceful waiting experience.",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "gal-5",
    category: "equipment",
    title: "Modern Consultation Room",
    description: "Private clinic room fitted with modern diagnostics, sterilizers, and comfortable patient examination beds.",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "gal-6",
    category: "equipment",
    title: "Vaccination & Cold Storage",
    description: "WHO-grade cold-chain refrigerator storage safeguarding vaccine potency at constant medical temperatures.",
    imageUrl: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "gal-7",
    category: "facility",
    title: "Fully Stocked Pharmacy Area",
    description: "Access premium, quality-checked pharmaceuticals dispensed under the strict supervision of our pharmacist.",
    imageUrl: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800"
  }
];

// Community Outreach Events Timeline
export const OUTREACH_EVENTS: OutreachProgram[] = [
  {
    id: "out-1",
    title: "Waterloo School Health Assessment",
    date: "July 12, 2026",
    location: "Local Primary & Secondary Schools",
    status: "upcoming",
    description: "Free pediatric visual, hearing, and postural assessments alongside nutritional health reporting for 500+ school kids.",
    impact: "Targets early childhood developmental bottlenecks across 4 local institutions.",
    iconName: "Award"
  },
  {
    id: "out-2",
    title: "Maternal Health & Nutrition Workshop",
    date: "June 20, 2026",
    location: "Bassatown Community Center",
    status: "completed",
    description: "Educated expectant mothers on prenatal dietary balances, early signs of pregnancy stress, and child growth hygiene.",
    impact: "Over 120 pregnant women attended, receiving free baby-care starter packs and prenatal supplements.",
    iconName: "Heart"
  },
  {
    id: "out-3",
    title: "Waterloo Market Hypertension Drive",
    date: "May 15, 2026",
    location: "Waterloo Open Market",
    status: "completed",
    description: "Established mobile booths to screen traders and shoppers for high blood pressure, providing lifestyle cards and emergency pathways.",
    impact: "420+ individuals screened; 45 critical high-blood pressure cases referred for clinical intervention.",
    iconName: "Activity"
  },
  {
    id: "out-4",
    title: "Regional Polio & BCG Vaccination Campaign",
    date: "April 04, 2026",
    location: "Rural 4 Mile & Waterloo Outskirts",
    status: "completed",
    description: "Collaborated with regional health offices to administer polio drop boosters and BCG vaccinations directly to homes.",
    impact: "Immunized 980 infants, dramatically expanding localized safety boundaries.",
    iconName: "ShieldCheck"
  }
];

// Health Tips & Blog Articles
export const HEALTH_BLOG_TIPS: HealthBlogTip[] = [
  {
    id: "tip-1",
    title: "Preventing Malaria: Effective Strategies for Waterloo Families",
    category: "Prevention",
    readTime: "4 min read",
    date: "June 15, 2026",
    summary: "Practical guide to protecting your home from mosquito breeding, proper use of treated nets, and recognizing early malaria symptoms.",
    author: "Dr. Alimamy Kamara",
    imageUrl: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&q=80&w=600",
    content: [
      "Malaria remains a primary health risk in our Western Area Rural district, yet it is entirely preventable and treatable.",
      "Key Prevention Steps: Always sleep under WHO-approved insecticide-treated mosquito nets (ITNs). Clear any stagnant pools of water around your compound weekly to eliminate mosquito breeding hotspots.",
      "Recognizing Symptoms: Watch out for sudden high fevers, headaches, severe chills, or joint pain. In children, watch for lethargy, poor feeding, or rapid breathing.",
      "Crucial Action: Do not self-medicate or delay. Get tested at Waterloo Arab Clinic immediately. We provide rapid diagnostic testing (RDTs) and certified treatment regimens for safe recovery."
    ]
  },
  {
    id: "tip-2",
    title: "Demystifying the Childhood Vaccination Schedule",
    category: "Vaccination",
    readTime: "5 min read",
    date: "May 28, 2026",
    summary: "An easy-to-read breakdown of the vaccines your baby needs from birth up to age five to guarantee long-term immunity.",
    author: "Nurse Ibrahim Bah",
    imageUrl: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=600",
    content: [
      "Vaccines are the ultimate shield protecting children from life-threatening conditions like tuberculosis, polio, and measles.",
      "First 24 Hours: Your newborn should receive the BCG vaccine (protects against tuberculosis) and the Oral Polio Vaccine (OPV-0).",
      "At 6, 10, and 14 Weeks: Important multi-dose immunizations including Pentavalent, Rotavirus, and Pneumococcal vaccines protect against pneumonia, tetanus, diphtheria, and diarrhea.",
      "At 9 and 15 Months: Measles-Rubella doses must be administered to prevent seasonal regional outbreaks.",
      "Vaccination is a continuous commitment. Maintain your child's physical vaccination card carefully and bring it to every clinic visit."
    ]
  },
  {
    id: "tip-3",
    title: "Pregnancy Care: Guidance for a Healthy Maternal Journey",
    category: "Maternity",
    readTime: "6 min read",
    date: "April 18, 2026",
    summary: "Expert advice on routine prenatal checkups, necessary vitamin supplements, and planning for a safe and clinical delivery.",
    author: "Midwife Fatmata Mansaray",
    imageUrl: IMAGES.pediatric,
    content: [
      "A healthy pregnancy starts with consistent medical attention. Expectant mothers are strongly encouraged to register for prenatal care as soon as pregnancy is confirmed.",
      "Prenatal Checkups: Attend at least 8 prenatal appointments to monitor maternal blood pressure, check baby positioning, and run standard ultrasound tests.",
      "Vital Supplements: Take daily folic acid and iron supplements to support your baby's rapid neural development and prevent maternal anemia.",
      "Safe Delivery Plan: Work with our midwifery team early to plan a clean, fully clinical delivery, avoiding non-sterile home environments to protect both mother and child."
    ]
  },
  {
    id: "tip-4",
    title: "Combating Hypertension: The Silent Threat",
    category: "Prevention",
    readTime: "5 min read",
    date: "March 12, 2026",
    summary: "Understand high blood pressure, the vital role of low-sodium diets, and how simple lifestyle shifts protect your cardiovascular health.",
    author: "Dr. Hassan Diallo",
    imageUrl: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=600",
    content: [
      "Hypertension, or high blood pressure, is often called a 'silent killer' because it can slowly damage blood vessels without obvious warning symptoms.",
      "Dietary Interventions: Significantly reduce your daily salt (sodium) intake. Instead, cook with fresh local herbs, ginger, and garlic to add natural flavor.",
      "Stay Active: Commit to at least 30 minutes of brisk walking daily. Regular exercise relaxes blood vessels, helping heart muscles work more efficiently.",
      "Routine Checkups: Get your blood pressure checked regularly. Knowing your numbers is the single most critical step in early cardiovascular disease control."
    ]
  }
];

// Trust Certifications & Accreditations
export const TRUST_BADGES = [
  {
    id: "cert-1",
    title: "MoHS Registered",
    issuer: "Ministry of Health and Sanitation",
    description: "Fully licensed by the Sierra Leone Ministry of Health and Sanitation to deliver professional clinical healthcare."
  },
  {
    id: "cert-2",
    title: "WHO Standard Compliant",
    issuer: "World Health Organization",
    description: "Adheres to strict international guidelines for immunization cold-chains, clinical hygiene, and pharmaceutical storage."
  },
  {
    id: "cert-3",
    title: "PMB Accredited Pharmacy",
    issuer: "Pharmacy Board of Sierra Leone",
    description: "Dispensing licensed, authentic, and high-efficacy medications with complete professional oversight."
  },
  {
    id: "cert-4",
    title: "Community Trusted Award",
    issuer: "Waterloo Western Area Rural District",
    description: "Formally recognized for active, long-standing commitment to local community healthcare programs."
  }
];

// Patient Testimonials
export const PATIENT_TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Mariatu Bangura",
    role: "Mother & Local Trader",
    location: "Bassatown, Waterloo",
    quote: "During my second pregnancy, I received incredible care from the midwives at Waterloo Arab Clinic. They checked my blood pressure regularly, and their immunization guidelines kept my baby healthy. I highly recommend them to all Waterloo families!",
    rating: 5
  },
  {
    id: "test-2",
    name: "Pastor Samuel Kargbo",
    role: "Community Elder",
    location: "4 Mile Park, Waterloo",
    quote: "When my father suffered from severe high blood pressure, we rushed him to Waterloo Arab Clinic. Dr. Alimamy acted instantly, stabilizing him and explaining his medications clearly. Their care is highly professional and deeply empathetic.",
    rating: 5
  },
  {
    id: "test-3",
    name: "Alhaji Osman Kamara",
    role: "Business Owner",
    location: "Main Motor Road, Waterloo",
    quote: "This is the most trusted medical center in Waterloo. The clinic is incredibly clean, the staff are warm and organized, and their medication is highly authentic. We are blessed to have them right here in Waterloo.",
    rating: 5
  }
];

// FAQ Items
export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Do I need an appointment, or are walk-ins accepted?",
    answer: "We welcome both! Walk-ins are fully accepted daily for general checkups and urgent issues. However, pre-booking an appointment is highly recommended to secure faster consultations and minimize waiting times.",
    category: "appointments"
  },
  {
    id: "faq-2",
    question: "What are the clinic's operating hours?",
    answer: "Our consultation and clinical services are open Monday through Friday from 8:00 AM to 8:00 PM, and Saturday from 9:00 AM to 5:00 PM. On Sundays, our team remains on call exclusively for emergency medical cases.",
    category: "services"
  },
  {
    id: "faq-3",
    question: "What payment methods are accepted at the clinic?",
    answer: "To make clinical care easy for everyone, we accept standard cash payments, local bank transfers, and leading Sierra Leone mobile money services (Orange Money and Africell Money).",
    category: "pricing"
  },
  {
    id: "faq-4",
    question: "Are child vaccinations available on a daily basis?",
    answer: "Yes! Our Vaccination and Immunization Unit is open daily during regular hours. We stock critical WHO-schedule vaccines in temperature-controlled medical storage to keep Waterloo children safe and immunologically protected.",
    category: "vaccines"
  },
  {
    id: "faq-5",
    question: "How long is the average waiting time at the clinic?",
    answer: "We prioritize efficiency. For patients with pre-scheduled appointments, average wait times are under 15 minutes. For general walk-in visits, wait times usually range between 15 to 30 minutes, depending on current patient traffic.",
    category: "services"
  },
  {
    id: "faq-6",
    question: "Does the clinic offer maternity care support and prenatal scans?",
    answer: "Absolutely! Our Maternal and Child Health Division specializes in safe pregnancy navigation. We conduct routing prenatal checkups, fetal health tracking, expert ultrasound scans, and postpartum support programs.",
    category: "services"
  }
];

// Patient Resources & Downloadables
export const PATIENT_RESOURCES: PatientResource[] = [
  {
    id: "res-1",
    title: "Newborn Vaccination Calendar SL",
    type: "Schedule",
    description: "Official immunization roadmap outlining required childhood vaccines from birth up to 15 months, standardized for Sierra Leone.",
    size: "1.4 MB",
    link: "#download-schedule"
  },
  {
    id: "res-2",
    title: "Maternal Health Routine Checklist",
    type: "Checklist",
    description: "A printable monthly tracker outlining crucial medical, physical, and nutritional goals during every pregnancy trimester.",
    size: "820 KB",
    link: "#download-checklist"
  },
  {
    id: "res-3",
    title: "Hypertension Management Plan",
    type: "Guide",
    description: "Practical medical booklet containing dietary advice, meal charts with low sodium content, and exercise logs for active blood-pressure management.",
    size: "2.1 MB",
    link: "#download-guide"
  },
  {
    id: "res-4",
    title: "New Patient Intake Information Form",
    type: "PDF",
    description: "Pre-fillable patient profile, medical history logs, and family clinical records to speed up your registration process at reception.",
    size: "650 KB",
    link: "#download-form"
  }
];

// Insurance and payment methods
export const PAYMENT_METHODS = [
  { name: "Orange Money", type: "Mobile Money", logo: "📱" },
  { name: "Africell Money", type: "Mobile Money", logo: "📞" },
  { name: "Cash Payment", type: "In-Clinic", logo: "💵" },
  { name: "Bank Transfers", type: "Direct Pay", logo: "🏦" }
];
