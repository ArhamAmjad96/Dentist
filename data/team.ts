export type TeamRoleGroup =
  | 'dentists'
  | 'orthodontists'
  | 'hygienists'
  | 'nurses'
  | 'technicians'
  | 'management';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  group: TeamRoleGroup;
  qualifications: string;
  gdcNumber: string;
  clinicalInterests: string[];
  languagesSpoken: string[];
  bio: string;
  workingDays: string[];
  photo: string;
  isPrincipal?: boolean;
}

export const teamData: TeamMember[] = [
  {
    id: "dr-alistair-vance",
    name: "Dr. Alistair Vance",
    role: "Principal Dentist & Clinical Director",
    group: "dentists",
    qualifications: "BDS (Lond), MJDF RCS (Eng), MSc Implant Dentistry",
    gdcNumber: "GDC No: 198421",
    clinicalInterests: ["Dental Implants", "Full-Mouth Rehabilitation", "Cosmetic Bonding"],
    languagesSpoken: ["English", "French"],
    bio: "Dr. Vance qualified from King's College London Dental Institute with Honours. He has over 18 years of clinical experience with a focused interest in restorative dentistry and surgical implant placement. Dr. Vance believes in transparent, evidence-led clinical care in a relaxed environment.",
    workingDays: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    isPrincipal: true,
  },
  {
    id: "dr-elena-rodriguez",
    name: "Dr. Elena Rodriguez",
    role: "Specialist Orthodontist",
    group: "orthodontists",
    qualifications: "BDS (Madr), MClinDent Orthodontics, MOrth RCS (Edin)",
    gdcNumber: "GDC No: 231409",
    clinicalInterests: ["Invisalign Clear Aligners", "Interceptive Children's Orthodontics", "Complex Bite Correction"],
    languagesSpoken: ["English", "Spanish"],
    bio: "Dr. Rodriguez completed her specialist orthodontic training at the Eastman Dental Hospital in London. She specializes in discreet aligner therapy for adults and teenagers, focusing on facial aesthetics and bite harmony.",
    workingDays: ["Tuesday", "Wednesday", "Friday"],
    photo: "https://images.unsplash.com/photo-1594824813571-24a69810d969?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "dr-marcus-chen",
    name: "Dr. Marcus Chen",
    role: "Associate Dental Surgeon",
    group: "dentists",
    qualifications: "BDS (Birm), Dip Restorative Dentistry RCS (Eng)",
    gdcNumber: "GDC No: 251890",
    clinicalInterests: ["Endodontics (Root Canal Therapy)", "Nervous Patient Support", "Minimally Invasive Dentistry"],
    languagesSpoken: ["English", "Cantonese"],
    bio: "Dr. Chen is passionate about preserving natural teeth using microscopic endodontic techniques. He is renowned for his gentle bedside manner and dedication to comforting anxious patients.",
    workingDays: ["Monday", "Wednesday", "Thursday", "Friday", "Saturday"],
    photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sarah-jenkins",
    name: "Sarah Jenkins",
    role: "Lead Dental Hygienist & Therapist",
    group: "hygienists",
    qualifications: "BSc Dental Hygiene & Therapy (Portsm)",
    gdcNumber: "GDC No: 274102",
    clinicalInterests: ["Airflow Biofilm Therapy", "Periodontal Maintenance", "Preventive Children's Care"],
    languagesSpoken: ["English"],
    bio: "Sarah works closely with our periodontists and dentists to maintain optimum gum health. She excels at gentle Airflow stain removal and empowering patients with tailored home hygiene routines.",
    workingDays: ["Monday", "Tuesday", "Thursday", "Friday"],
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "claire-thornton",
    name: "Claire Thornton",
    role: "Practice Manager",
    group: "management",
    qualifications: "Diploma in Dental Practice Management",
    gdcNumber: "GDC No: 182390",
    clinicalInterests: ["Patient Journey", "CQC Regulatory Compliance", "Finance Coordination"],
    languagesSpoken: ["English"],
    bio: "Claire brings over 15 years of healthcare administrative experience to St. James Dental. She ensures seamless operational efficiency, patient comfort, and regulatory compliance.",
    workingDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "david-miller",
    name: "David Miller",
    role: "Senior Dental Technician",
    group: "technicians",
    qualifications: "FdSc Dental Technology (Cardiff Met)",
    gdcNumber: "GDC No: 165430",
    clinicalInterests: ["Digital CAD/CAM Milling", "Ceramic Crown Layering", "Implant Prosthetics"],
    languagesSpoken: ["English"],
    bio: "David leads our digital dental laboratory processes, sculpting custom ceramic crowns, bridges, and implant restorations with high precision and hand-stained natural character.",
    workingDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
  },
];
