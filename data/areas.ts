export interface LocalArea {
  slug: string;
  name: string;
  distance: string;
  transportInfo: string;
  description: string;
}

export const localAreasData: LocalArea[] = [
  {
    slug: "mayfair",
    name: "Mayfair",
    distance: "0.4 miles (5 mins walk)",
    transportInfo: "Short walk from Green Park or Bond Street tube station.",
    description: "Providing high-quality private dental care, clear aligners, and dental implants to residents and professionals in Mayfair.",
  },
  {
    slug: "marylebone",
    name: "Marylebone",
    distance: "1.1 miles (8 mins drive)",
    transportInfo: "Direct bus connection or 10 minutes via Regent's Park.",
    description: "Convenient local dental practice for Marylebone patients seeking general dentistry, emergency appointments, and cosmetic restorations.",
  },
  {
    slug: "fitzrovia",
    name: "Fitzrovia",
    distance: "1.3 miles (10 mins drive)",
    transportInfo: "Accessible via Warren Street or Tottenham Court Road lines.",
    description: "Trusted oral healthcare, hygiene appointments, and adult orthodontics for Fitzrovia families and working professionals.",
  },
  {
    slug: "soho",
    name: "Soho",
    distance: "0.6 miles (8 mins walk)",
    transportInfo: "Just a short walk down Piccadilly or Regent Street.",
    description: "Modern, gentle dental treatments and teeth whitening located within easy reach of Soho.",
  },
];
