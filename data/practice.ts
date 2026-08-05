export type PracticeType = 
  | 'general'
  | 'private'
  | 'mixed'
  | 'orthodontist'
  | 'cosmetic'
  | 'dental-laboratory'
  | 'denture-clinic'
  | 'hygienist'
  | 'implant'
  | 'emergency'
  | 'family'
  | 'specialist';

export type PracticeStatus = 'private' | 'mixed' | 'nhs-focused';

export interface PracticeConfig {
  name: string;
  shortName: string;
  type: PracticeType;
  status: PracticeStatus;
  tagline: string;
  mainHeadline: string;
  description: string;
  phone: string;
  emergencyPhone: string;
  email: string;
  whatsapp: string;
  address: string;
  city: string;
  county: string;
  postcode: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  openingHours: {
    day: string;
    hours: string;
    isEmergencyAvailable?: boolean;
  }[];
  outOfHoursInstructions: string;
  gdcNumber: string;
  cqcInfo: {
    status: string;
    reportUrl?: string;
    certificateNumber?: string;
  };
  practiceManager: string;
  principalDentist: {
    name: string;
    qualifications: string;
    gdcNumber: string;
  };
  yearsEstablished: number;
  reviewCount: number;
  googleRating: number;
  financeAvailable: boolean;
  financeDetails: string;
  acceptedPaymentMethods: string[];
  parkingInfo: string;
  accessibilityInfo: string;
  languagesSpoken: string[];
  socialLinks: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
  googleReviewLink: string;
  bookingLink: string;
  acceptingNewPatients: boolean;
  acceptingNhsPatients: boolean;
  emergencyAvailable: boolean;
  announcementBar: {
    enabled: boolean;
    message: string;
    link?: string;
    linkLabel?: string;
  };
  colors: {
    primary: string;
    accent: string;
    bgWarm: string;
    stone: string;
    sage: string;
    teal: string;
  };
  images: {
    logo: string;
    favicon: string;
    hero: string;
    welcome: string;
    reception: string;
    treatmentRoom: string;
    dentistWithPatient: string;
    hygienistCare: string;
    technology: string;
    exterior: string;
  };
  videos: {
    heroBackground: string;
    dentistCare: string;
    clinicTour: string;
    hygieneTherapy: string;
  };
  technologyList: {
    id: string;
    title: string;
    description: string;
    enabled: boolean;
  }[];
}

export const practiceConfig: PracticeConfig = {
  name: "St. James Clinic",
  shortName: "St. James Clinic",
  type: "private",
  status: "private",
  tagline: "Considerate, evidence-led dental care in London",
  mainHeadline: "Modern dentistry with a calm, personal approach.",
  description: "From routine dental examinations to advanced restorative and cosmetic treatment, our team provides considerate, evidence-led dentistry in a comfortable and welcoming environment.",
  phone: "020 7946 0198",
  emergencyPhone: "07700 900892",
  email: "reception@stjamesdental.co.uk",
  whatsapp: "07700 900892",
  address: "42 St. James's Square, Mayfair",
  city: "London",
  county: "Greater London",
  postcode: "SW1Y 4HJ",
  coordinates: {
    lat: 51.5074,
    lng: -0.1345,
  },
  openingHours: [
    { day: "Monday", hours: "08:30 – 18:00" },
    { day: "Tuesday", hours: "08:30 – 18:00" },
    { day: "Wednesday", hours: "08:30 – 19:30", isEmergencyAvailable: true },
    { day: "Thursday", hours: "08:30 – 18:00" },
    { day: "Friday", hours: "08:30 – 17:00" },
    { day: "Saturday", hours: "09:00 – 14:00 (By appointment)" },
    { day: "Sunday", hours: "Emergency triage only" },
  ],
  outOfHoursInstructions: "For urgent out-of-hours assistance, existing patients should call our dedicated emergency line on 07700 900892. If you are experiencing severe facial swelling affecting breathing, uncontrolled bleeding, or major facial trauma, please call 999 or attend your nearest A&E emergency department immediately.",
  gdcNumber: "[GDC Registration: 248912]",
  cqcInfo: {
    status: "CQC Inspected & Registered",
    certificateNumber: "CQC-1-987654321",
    reportUrl: "https://www.cqc.org.uk",
  },
  practiceManager: "Claire Thornton",
  principalDentist: {
    name: "Dr. Alistair Vance",
    qualifications: "BDS (Lond), MJDF RCS (Eng), MSc Implant Dentistry",
    gdcNumber: "GDC No: 198421",
  },
  yearsEstablished: 18,
  reviewCount: 428,
  googleRating: 4.9,
  financeAvailable: true,
  financeDetails: "0% APR financing available over 6, 10, or 12 months for eligible treatments. Subject to status and terms.",
  acceptedPaymentMethods: ["Visa", "Mastercard", "American Express", "Apple Pay", "Contactless", "Bank Transfer", "Direct Debit"],
  parkingInfo: "On-site patient parking available at the rear of the clinic. Metered street parking available on St. James's Square.",
  accessibilityInfo: "Step-free ground floor access, wide doorways suitable for wheelchairs, and an accessible patient bathroom.",
  languagesSpoken: ["English", "French", "Spanish", "Arabic"],
  socialLinks: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
  googleReviewLink: "https://google.com/maps",
  bookingLink: "/contact#appointment-form",
  acceptingNewPatients: true,
  acceptingNhsPatients: false,
  emergencyAvailable: true,
  announcementBar: {
    enabled: true,
    message: "Now accepting new private patients & clear aligner consultations",
    link: "/contact",
    linkLabel: "Book Consultation",
  },
  colors: {
    primary: "#051C2C",
    accent: "#00BCD4",
    bgWarm: "#F8FDFF",
    stone: "#E0F7FA",
    sage: "#475569",
    teal: "#0097A7",
  },
  images: {
    logo: "/images/logo.svg",
    favicon: "/favicon.ico",
    hero: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    welcome: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80",
    reception: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1000&q=80",
    treatmentRoom: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80",
    dentistWithPatient: "/images/hero-procedure.jpg",
    hygienistCare: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80",
    technology: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=1000&q=80",
    exterior: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80",
  },
  videos: {
    heroBackground: "https://assets.mixkit.co/videos/preview/mixkit-dentist-examining-a-patients-teeth-41484-large.mp4",
    dentistCare: "https://assets.mixkit.co/videos/preview/mixkit-dentist-treating-a-patient-41483-large.mp4",
    clinicTour: "https://assets.mixkit.co/videos/preview/mixkit-dentist-working-in-his-office-41482-large.mp4",
    hygieneTherapy: "https://assets.mixkit.co/videos/preview/mixkit-female-dentist-examining-a-patient-41481-large.mp4",
  },
  technologyList: [
    {
      id: "digital-xray",
      title: "Low-Dose Digital X-rays",
      description: "Provides instant, ultra-low radiation diagnostic images for accurate assessment and patient peace of mind.",
      enabled: true,
    },
    {
      id: "intraoral-scan",
      title: "3D Intraoral Scanner",
      description: "Replaces uncomfortable impression trays with precise digital 3D scans of your teeth in minutes.",
      enabled: true,
    },
    {
      id: "guided-implant",
      title: "Guided 3D Implant Planning",
      description: "Combines CBCT 3D scans with surgical guides for computer-planned, accurate implant placement.",
      enabled: true,
    },
    {
      id: "airflow-hygiene",
      title: "Airflow Guided Biofilm Therapy",
      description: "A gentle, high-efficiency stain removal treatment using warm water, compressed air, and fine powder.",
      enabled: true,
    },
    {
      id: "digital-smile",
      title: "Digital Smile Planning",
      description: "Allows you to visualize projected cosmetic treatment results before clinical procedures commence.",
      enabled: true,
    },
  ],
};
