export interface FAQItem {
  id: string;
  category: 
    | 'appointments'
    | 'new-patients'
    | 'nhs-availability'
    | 'fees-payment'
    | 'emergency'
    | 'treatments'
    | 'nervous-patients'
    | 'children'
    | 'accessibility'
    | 'parking';
  question: string;
  answer: string;
}

export const faqsData: FAQItem[] = [
  {
    id: "faq-1",
    category: "new-patients",
    question: "Are you currently accepting new patients?",
    answer: "Yes! We are welcoming new private patients for general examinations, hygiene appointments, clear aligner consultations, and implant assessments.",
  },
  {
    id: "faq-2",
    category: "nhs-availability",
    question: "Do you offer NHS dental treatment?",
    answer: "Our practice operates primarily as a private clinic. Please contact our reception desk to enquire about current NHS availability or regional NHS eligibility.",
  },
  {
    id: "faq-3",
    category: "appointments",
    question: "How do I book an initial consultation?",
    answer: "You can book directly by calling 020 7946 0198, submitting our online appointment request form, or visiting the practice in person.",
  },
  {
    id: "faq-4",
    category: "emergency",
    question: "What should I do if I have a severe dental emergency out of hours?",
    answer: "Existing patients should call our dedicated emergency mobile on 07700 900892. If you experience severe swelling affecting your airway or uncontrolled bleeding, please dial 999 or attend A&E.",
  },
  {
    id: "faq-5",
    category: "fees-payment",
    question: "Do you offer flexible monthly payment plans or finance?",
    answer: "Yes, we offer 0% APR financing over 6 to 12 months for eligible treatments over £500, subject to status and credit check approval.",
  },
  {
    id: "faq-6",
    category: "nervous-patients",
    question: "I haven't visited a dentist in years and feel extremely nervous. How can you help?",
    answer: "We specialize in calm, gentle care for anxious patients. We take appointments at your pace, explain every step beforehand, and agree on a stop signal whenever you need a break.",
  },
  {
    id: "faq-7",
    category: "parking",
    question: "Is there patient parking available at the clinic?",
    answer: "Yes, we have dedicated patient parking bays at the rear of the clinic, as well as pay-and-display street parking directly outside on St. James's Square.",
  },
  {
    id: "faq-8",
    category: "accessibility",
    question: "Is the practice accessible for wheelchair users?",
    answer: "Yes, our ground-floor treatment rooms, reception, and patient restroom are fully wheelchair accessible with step-free entrance ramps.",
  },
  {
    id: "faq-9",
    category: "children",
    question: "At what age should I bring my child for their first dental visit?",
    answer: "We recommend bringing children when their first milk tooth appears, or by their first birthday, to help them become familiar and comfortable with the dental environment.",
  },
];
