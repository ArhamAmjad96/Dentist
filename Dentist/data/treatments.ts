export type TreatmentCategory =
  | 'general'
  | 'cosmetic'
  | 'restorative'
  | 'implants'
  | 'orthodontics'
  | 'laboratory'
  | 'dentures';

export interface TreatmentStage {
  step: number;
  title: string;
  detail: string;
}

export interface Treatment {
  slug: string;
  name: string;
  category: TreatmentCategory;
  shortDescription: string;
  fullDescription: string;
  suitableFor: string[];
  benefits: string[];
  consultationProcess: string;
  typicalStages: TreatmentStage[];
  recoveryAftercare: string;
  risksLimitations: string;
  priceFrom: string | number;
  nhsTier?: string;
  image: string;
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
  featured?: boolean;
}

export const treatmentsData: Treatment[] = [
  {
    slug: "dental-checkups",
    name: "Dental Examinations & Maintenance",
    category: "general",
    shortDescription: "Comprehensive oral health assessments, oral cancer screening, and personalised preventive advice.",
    fullDescription: "Regular dental examinations are the foundation of healthy teeth and gums. Our clinicians carry out a thorough assessment of your teeth, gums, soft tissues, jaw joints, and existing restorations, supported by low-dose digital radiographs when clinically indicated.",
    suitableFor: [
      "Adults and children requiring routine oral health checks",
      "New patients seeking a comprehensive baseline dental assessment",
      "Patients experiencing early signs of dental sensitivity or concern",
    ],
    benefits: [
      "Early identification of decay, gum disease, or tooth wear",
      "Comprehensive oral cancer soft-tissue screening",
      "Personalised oral hygiene and dietary advice",
      "Tailored treatment plans with transparent written estimates",
    ],
    consultationProcess: "Your appointment begins with a discussion regarding your medical history, current dental concerns, and preferences. The clinician will gently inspect your oral tissues and discuss any recommended next steps.",
    typicalStages: [
      { step: 1, title: "Medical & Dental Review", detail: "Discussion of medical background, lifestyle factors, and specific concerns." },
      { step: 2, title: "Clinical Examination", detail: "Evaluation of teeth, gums, occlusion (bite), and oral soft tissue screening." },
      { step: 3, title: "Digital Radiographs", detail: "Targeted low-dose X-rays taken if required to inspect interdental areas." },
      { step: 4, title: "Discussion & Plan", detail: "Clear explanation of findings with options, recommendations, and costs." },
    ],
    recoveryAftercare: "No recovery period is needed following a routine examination. Continue your recommended brushing and flossing routine.",
    risksLimitations: "Examinations assess current clinical status; ongoing preventive care and regular reviews are required to maintain oral health.",
    priceFrom: 85,
    nhsTier: "Band 1 NHS (£26.80 where eligible)",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    featured: true,
    faqs: [
      { question: "How often should I attend a dental check-up?", answer: "Intervals vary between 3 to 24 months based on individual oral health risk factors assessed during your examination." },
      { question: "Are X-rays necessary at every visit?", answer: "X-rays are taken only when clinically required, based on individual risk and diagnostic needs." },
    ],
    relatedSlugs: ["hygiene-appointments", "white-fillings", "gum-treatment"],
  },
  {
    slug: "hygiene-appointments",
    name: "Dental Hygiene & Airflow Therapy",
    category: "general",
    shortDescription: "Professional cleaning, stain removal, and periodontal disease prevention using gentle Airflow technology.",
    fullDescription: "Our dental hygienists focus on preventing and managing periodontal (gum) disease. Using advanced ultrasonic scalers and Airflow Guided Biofilm Therapy, we gently remove stubborn plaque, calculus, and surface staining while protecting tooth enamel.",
    suitableFor: [
      "Patients wishing to maintain healthy gums and fresh breath",
      "Individuals with surface staining from tea, coffee, or red wine",
      "Patients managing gingivitis or periodontitis",
      "Patients undergoing orthodontic or implant treatment",
    ],
    benefits: [
      "Removal of hard tartar (calculus) that brushing cannot clear",
      "Effective reduction of gum inflammation and bleeding",
      "Gentle stain removal using Airflow fine powder technology",
      "Personalised home care recommendations",
    ],
    consultationProcess: "The hygienist assesses your gum health, measures pocket depths if necessary, and tailors the cleaning intensity to your comfort.",
    typicalStages: [
      { step: 1, title: "Gum Health Assessment", detail: "Measuring plaque levels and checking for areas of gum inflammation." },
      { step: 2, title: "Ultrasonic Scaling", detail: "Removing calculus deposits above and below the gumline." },
      { step: 3, title: "Airflow Polish", detail: "Using high-pressure air, warm water, and fine powder for stain removal." },
      { step: 4, title: "Personalised Advice", detail: "Demonstrating interdental brushes and tailored home routines." },
    ],
    recoveryAftercare: "Mild temporary tooth sensitivity may occur for 24-48 hours. Avoid dark-staining foods and drinks for 2 hours post-Airflow treatment.",
    risksLimitations: "Hygiene therapy complements but does not replace daily interdental cleaning and tooth brushing at home.",
    priceFrom: 95,
    nhsTier: "Included in Band 2 NHS if clinically necessary",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    featured: true,
    faqs: [
      { question: "Is hygiene treatment painful?", answer: "Our team uses warm water and gentle techniques to maximize comfort. Topically applied numbing gel can be used if gums are sensitive." },
      { question: "Can I book a hygiene appointment directly without seeing a dentist?", answer: "Yes, Direct Access hygiene appointments are available for private patients." },
    ],
    relatedSlugs: ["dental-checkups", "teeth-whitening", "gum-treatment"],
  },
  {
    slug: "teeth-whitening",
    name: "Professional Teeth Whitening",
    category: "cosmetic",
    shortDescription: "Safe, dentist-supervised home and in-clinic whitening for a natural, refreshed smile.",
    fullDescription: "Professional teeth whitening is a non-invasive cosmetic treatment designed to brighten discoloured or stained teeth. Using custom-fitted whitening trays and clinically approved peroxide gels, treatment is safely tailored to your target shade under dental supervision.",
    suitableFor: [
      "Adults with natural tooth discoloration or age-related darkening",
      "Patients preparing for a special occasion or wedding",
      "Individuals seeking a cosmetic refresh before composite bonding",
    ],
    benefits: [
      "Dentist-supervised safety conforming to UK GDC regulations",
      "Custom-moulded trays ensuring even gel distribution",
      "Gradual, controlled shade improvement with minimal sensitivity",
      "Long-lasting results with top-up maintenance trays",
    ],
    consultationProcess: "A prerequisite dental examination checks for tooth decay, leaky fillings, and gum health before whitening can be safely prescribed.",
    typicalStages: [
      { step: 1, title: "Shade Assessment", detail: "Checking initial tooth shade and taking digital impressions or scans." },
      { step: 2, title: "Custom Tray Crafting", detail: "Fabricating bespoke whitening trays for optimal gel containment." },
      { step: 3, title: "Home Gel Application", detail: "Wearing trays daily for 14-21 days according to clinical instructions." },
      { step: 4, title: "Final Review", detail: "Evaluating final shade match and providing top-up maintenance guidance." },
    ],
    recoveryAftercare: "Transient tooth sensitivity during active treatment can be managed with desensitising toothpaste. Follow a 'white diet' during active whitening days.",
    risksLimitations: "Whitening changes natural tooth structures only; existing dental crowns, veneers, or composite fillings will not lighten and may require replacement after whitening.",
    priceFrom: 395,
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    featured: true,
    faqs: [
      { question: "Is professional whitening safe for enamel?", answer: "When prescribed by a qualified dental professional, whitening gels do not damage healthy tooth enamel." },
      { question: "How long do whitening results last?", answer: "Results typically last 12 to 24 months depending on diet, smoking status, and oral hygiene. Top-up gel can be used periodically." },
    ],
    relatedSlugs: ["composite-bonding", "veneers", "hygiene-appointments"],
  },
  {
    slug: "composite-bonding",
    name: "Composite Bonding & Sculpting",
    category: "cosmetic",
    shortDescription: "Minimally invasive resin sculpting to repair chipped edges, fill gaps, and refine tooth shape.",
    fullDescription: "Composite bonding involves applying shade-matched dental resin directly to natural teeth. The material is artistically shaped, hardened with a specialised curing light, and polished to blend seamlessly with surrounding enamel without removing healthy tooth structure.",
    suitableFor: [
      "Chips, minor cracks, or worn edges on front teeth",
      "Closing small gaps (diastemas) between teeth",
      "Smoothing irregular or asymmetrical tooth shapes",
    ],
    benefits: [
      "Completed in a single appointment in most cases",
      "Minimally invasive – rarely requires local anaesthetics or enamel drilling",
      "Easily repairable or modifiable in the future",
      "Cost-effective alternative to ceramic veneers",
    ],
    consultationProcess: "Digital photography and shade mapping are conducted to plan exact resin blends for natural light reflection.",
    typicalStages: [
      { step: 1, title: "Preparation & Conditioning", detail: "Gently etching enamel surface for optimal bond strength." },
      { step: 2, title: "Layered Application", detail: "Applying composite resin in micro-layers matching natural dentine and enamel shades." },
      { step: 3, title: "Curing & Shaping", detail: "Hardening composite with ultraviolet light and sculpting exact contours." },
      { step: 4, title: "High-Gloss Polish", detail: "Finishing surface to mirror enamel shine and natural texture." },
    ],
    recoveryAftercare: "Normal eating can resume immediately. Avoid biting hard objects like ice or fingernails with bonded teeth.",
    risksLimitations: "Composite resin may chip under heavy forces and absorbs surface stains faster than ceramic veneers, requiring periodic repolishing every 2-4 years.",
    priceFrom: 220,
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    featured: true,
    faqs: [
      { question: "Does composite bonding require injection or drilling?", answer: "In the vast majority of cases, bonding requires zero injections and zero enamel removal." },
      { question: "How long does composite bonding last?", answer: "Bonding typically lasts between 5 to 7 years with good oral hygiene and routine maintenance visits." },
    ],
    relatedSlugs: ["teeth-whitening", "veneers", "dental-checkups"],
  },
  {
    slug: "dental-implants",
    name: "Single & Multiple Dental Implants",
    category: "implants",
    shortDescription: "Permanent, natural-looking titanium post restorations replacing missing teeth.",
    fullDescription: "Dental implants provide a stable, long-lasting replacement for missing teeth. A biocompatible titanium implant screw is placed precisely into the jawbone, acting as an artificial root that fuses naturally with bone tissue before supporting a bespoke crown, bridge, or denture.",
    suitableFor: [
      "Patients missing one, multiple, or all natural teeth",
      "Individuals struggling with loose or uncomfortable dentures",
      "Patients with sufficient healthy jawbone density or suitable for bone grafting",
    ],
    benefits: [
      "Restores natural chewing power and clear speech",
      "Prevents jawbone resorption following tooth loss",
      "Does not require reduction or grinding of adjacent healthy teeth",
      "High long-term success rate exceeding 95%",
    ],
    consultationProcess: "Includes a 3D CBCT scan to evaluate jawbone depth, bone density, and proximity to nerves or sinus cavities.",
    typicalStages: [
      { step: 1, title: "3D Assessment & Guide Planning", detail: "CBCT scan evaluation and surgical guide generation." },
      { step: 2, title: "Implant Placement", detail: "Gentle surgical insertion of titanium implant under local anaesthesia." },
      { step: 3, title: "Healing & Osseointegration", detail: "Allowing 3 to 6 months for bone to integrate securely around the implant." },
      { step: 4, title: "Restoration Fitting", detail: "Fitting custom ceramic crown, bridge, or implant-retained denture." },
    ],
    recoveryAftercare: "Mild postoperative discomfort and swelling resolve within 3-7 days. Meticulous interdental brushing and regular hygienist visits are essential.",
    risksLimitations: "Surgical risks include infection, implant failure, or nerve injury. Smoking significantly increases implant failure rates.",
    priceFrom: 2450,
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80",
    featured: true,
    faqs: [
      { question: "Is dental implant surgery painful?", answer: "The procedure is performed under local anaesthesia (or optional sedation) so you will feel no pain during treatment. Mild soreness post-treatment is managed with standard painkillers." },
      { question: "How long do dental implants last?", answer: "With good oral hygiene and routine maintenance, implant posts can last a lifetime." },
    ],
    relatedSlugs: ["dentures", "dental-crowns", "hygiene-appointments"],
  },
  {
    slug: "invisalign-aligners",
    name: "Clear Aligners & Adult Orthodontics",
    category: "orthodontics",
    shortDescription: "Discreet, removable clear aligners to straighten crooked, crowded, or gapped teeth.",
    fullDescription: "Clear aligner therapy uses a series of custom-made, transparent plastic trays to gently shift teeth into optimal alignment. Virtually invisible when worn, aligners are removed for eating, drinking, and brushing, offering a flexible solution for adult and teenage orthodontics.",
    suitableFor: [
      "Mild to moderate crowding, spacing, or bite misalignment",
      "Adults seeking discreet orthodontic treatment without metal braces",
      "Relapse cases following historical teenage brace treatment",
    ],
    benefits: [
      "Near-invisible appearance in social and professional settings",
      "Removable for effortless eating and thorough oral hygiene",
      "No sharp metal brackets or wires to cause cheek irritation",
      "3D digital preview of your predicted smile before starting",
    ],
    consultationProcess: "3D digital intraoral scanning creates a virtual step-by-step treatment outcome simulation.",
    typicalStages: [
      { step: 1, title: "3D Scan & Outcome Simulation", detail: "Digital scanning and computerised movement planning." },
      { step: 2, title: "Aligner Fitting", detail: "Receiving your initial aligner sets and small tooth-coloured attachments." },
      { step: 3, title: "Progressive Alignment", detail: "Changing to a fresh set of aligners every 1 to 2 weeks." },
      { step: 4, title: "Retention", detail: "Fitting fixed wire and removable night retainers to maintain results." },
    ],
    recoveryAftercare: "Aligners must be worn 22 hours per day. Initial speech adaptation takes 24-48 hours. Retainers are mandatory long-term.",
    risksLimitations: "Compliance is critical; failure to wear aligners for 22 hours daily causes tracking delays. Complex skeletal bite corrections may require fixed braces or surgical intervention.",
    priceFrom: 2800,
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
    featured: true,
    faqs: [
      { question: "How many hours a day must I wear clear aligners?", answer: "Aligners should be worn for 20 to 22 hours daily, removed only for eating, drinking non-water beverages, and brushing." },
      { question: "Will clear aligners affect my speech?", answer: "Some patients notice a slight temporary lisp for the first 2-3 days while tongue adapts to the trays." },
    ],
    relatedSlugs: ["composite-bonding", "teeth-whitening", "dental-checkups"],
  },
  {
    slug: "dentures",
    name: "Full & Partial Modern Dentures",
    category: "dentures",
    shortDescription: "Custom-crafted acrylic, chrome-cobalt, or flexible dentures designed for comfort and natural cosmetics.",
    fullDescription: "Modern dentures are carefully designed removable appliances that replace multiple missing teeth or complete dental arches. We utilise high-grade cosmetic teeth and precision-fit acrylics or lightweight chrome frames to restore chewing support and natural facial aesthetics.",
    suitableFor: [
      "Patients missing multiple teeth in an arch requiring partial replacement",
      "Edentulous patients requiring comfortable full upper or lower dentures",
      "Patients seeking an economical alternative to dental implants",
    ],
    benefits: [
      "Restores lip support and natural facial height",
      "Custom shade-matched acrylic bases and tooth shapes",
      "Options for lightweight metal (chrome) or flexible frameworks",
      "Can be secured with dental implants for maximum stability",
    ],
    consultationProcess: "Detailed clinical measurements of muscle attachments and bite relationships guide laboratory fabrication.",
    typicalStages: [
      { step: 1, title: "Initial Impressions", detail: "Taking anatomical molds or digital scans of upper and lower jaws." },
      { step: 2, title: "Bite Registration", detail: "Recording optimal jaw relationship and selecting tooth shades/shapes." },
      { step: 3, title: "Wax Try-In", detail: "Previewing aesthetics and phonetics with teeth set in temporary wax." },
      { step: 4, title: "Final Fitting & Adjustments", detail: "Delivering finished denture with pressure-check adjustments." },
    ],
    recoveryAftercare: "An adaptation period of 2-4 weeks is normal. Clean dentures daily with specialized non-abrasive cleaners.",
    risksLimitations: "Complete lower dentures rely on muscle control and suction; stability can diminish as jawbone resorbs over time unless retained by implants.",
    priceFrom: 750,
    nhsTier: "Band 3 NHS (£319.10 where eligible)",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    featured: false,
    faqs: [
      { question: "How long does it take to get used to new dentures?", answer: "Most patients adapt to eating and speaking comfortably within 2 to 4 weeks with gradual practice." },
      { question: "Can dentures be repaired if broken?", answer: "Yes, we offer emergency denture repair services for cracked or fractured acrylic dentures." },
    ],
    relatedSlugs: ["dental-implants", "dental-crowns", "hygiene-appointments"],
  },
  {
    slug: "emergency-care",
    name: "Urgent & Emergency Dental Triage",
    category: "general",
    shortDescription: "Same-day assessment for severe toothache, swelling, broken teeth, or dental trauma.",
    fullDescription: "Dental emergencies cause pain, anxiety, and distress. Our emergency clinical team provides rapid diagnostic assessment, immediate pain relief, and stabilization for acute toothache, abscesses, broken crowns, or dental trauma.",
    suitableFor: [
      "Severe or persistent toothache unmanaged by over-the-counter painkillers",
      "Facial swelling or abscess in gums or jaw",
      "Fractured, chipped, or knocked-out (avulsed) teeth",
      "Lost fillings, crowns, or broken dentures",
    ],
    benefits: [
      "Prompt pain control and infection management",
      "Same-day clinical stabilization where available",
      "Clear explanation of emergency options and definitive follow-up care",
      "Friendly, non-judgmental emergency care",
    ],
    consultationProcess: "Focused assessment targeting the primary area of pain, supported by diagnostic digital radiography.",
    typicalStages: [
      { step: 1, title: "Rapid Triage & Radiographs", detail: "Targeted assessment of pain location and low-dose X-ray." },
      { step: 2, title: "Local Pain Relief", detail: "Administering local anaesthesia or prescribing targeted antibiotics if indicated." },
      { step: 3, title: "Stabilization Treatment", detail: "Temporary filling, nerve dressing, extraction, or repair as clinically indicated." },
      { step: 4, title: "Definitive Plan", detail: "Providing written post-care instructions and booking follow-up appointment." },
    ],
    recoveryAftercare: "Follow prescribed post-treatment advice. Avoid hot or hard foods while local numbness persists.",
    risksLimitations: "Emergency appointments focus on immediate stabilization; comprehensive restorative treatment may require subsequent appointments.",
    priceFrom: 110,
    nhsTier: "Band 1 Urgent NHS (£26.80 where eligible)",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    featured: true,
    faqs: [
      { question: "What should I do if a tooth is knocked out completely?", answer: "Handle the tooth only by the crown (not root), gently rinse in milk or saline if dirty, and try to re-insert into socket or store in milk while seeking immediate emergency care within 60 minutes." },
    ],
    relatedSlugs: ["dental-checkups", "white-fillings", "hygiene-appointments"],
  },
];
