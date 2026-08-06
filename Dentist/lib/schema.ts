import { practiceConfig } from '@/data/practice';

export function generateDentistSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: practiceConfig.name,
    description: practiceConfig.description,
    url: typeof window !== 'undefined' ? window.location.origin : 'https://example.co.uk',
    telephone: practiceConfig.phone,
    email: practiceConfig.email,
    image: practiceConfig.images.hero,
    address: {
      '@type': 'PostalAddress',
      streetAddress: practiceConfig.address,
      addressLocality: practiceConfig.city,
      addressRegion: practiceConfig.county,
      postalCode: practiceConfig.postcode,
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: practiceConfig.coordinates.lat,
      longitude: practiceConfig.coordinates.lng,
    },
    openingHoursSpecification: practiceConfig.openingHours.map((oh) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: oh.day,
      opens: oh.hours.includes('–') ? oh.hours.split('–')[0].trim() : '09:00',
      closes: oh.hours.includes('–') ? oh.hours.split('–')[1].trim() : '17:00',
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: practiceConfig.googleRating,
      reviewCount: practiceConfig.reviewCount,
      bestRating: '5',
      worstRating: '1',
    },
    priceRange: '££',
    paymentAccepted: practiceConfig.acceptedPaymentMethods.join(', '),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generatePersonSchema(person: {
  name: string;
  role: string;
  qualifications: string;
  gdcNumber: string;
  photo: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    jobTitle: person.role,
    honorificPrefix: person.name.startsWith('Dr.') ? 'Dr.' : undefined,
    image: person.photo,
    worksFor: {
      '@type': 'Dentist',
      name: practiceConfig.name,
    },
    knowsAbout: person.qualifications,
    identifier: person.gdcNumber,
  };
}
