export interface PatientReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  treatment: string;
  comment: string;
  source: 'Google' | 'Verified Feedback';
}

export const reviewsData: PatientReview[] = [
  {
    id: "rev-1",
    author: "Jonathan P.",
    rating: 5,
    date: "2 weeks ago",
    treatment: "Dental Implant & Crown",
    comment: "I was extremely nervous about getting an implant after losing a tooth. Dr. Vance and his team were outstanding. Every step was explained thoroughly, and the procedure was completely painless.",
    source: "Google",
  },
  {
    id: "rev-2",
    author: "Emma H.",
    rating: 5,
    date: "1 month ago",
    treatment: "Clear Aligners",
    comment: "From the initial 3D scan to the final retainer, my clear aligner journey was smooth and stress-free. The clinic is pristine, modern, and the reception staff are exceptionally welcoming.",
    source: "Google",
  },
  {
    id: "rev-3",
    author: "Michael T.",
    rating: 5,
    date: "2 months ago",
    treatment: "Airflow Hygiene & Check-up",
    comment: "Sarah the hygienist did a fantastic job with Airflow treatment. Teeth felt cleaner than they ever have without any of the usual discomfort. Highly recommended clinic!",
    source: "Google",
  },
  {
    id: "rev-4",
    author: "Rebecca S.",
    rating: 5,
    date: "3 months ago",
    treatment: "Composite Bonding",
    comment: "Subtle, natural-looking composite bonding on my front teeth. I couldn't be happier with the result. Very polite team that really listens to what you want.",
    source: "Google",
  },
];
