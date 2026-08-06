import { MetadataRoute } from 'next';
import { treatmentsData } from '@/data/treatments';
import { teamData } from '@/data/team';
import { localAreasData } from '@/data/areas';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://example.co.uk';

  const staticPages = [
    '',
    '/about',
    '/treatments',
    '/team',
    '/fees',
    '/new-patients',
    '/emergency-dentist',
    '/nervous-patients',
    '/patient-information',
    '/faqs',
    '/reviews',
    '/contact',
    '/privacy-policy',
    '/cookie-policy',
    '/complaints',
    '/accessibility',
    '/terms',
    '/sitemap',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const treatmentPages = treatmentsData.map((t) => ({
    url: `${baseUrl}/treatments/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const teamPages = teamData.map((m) => ({
    url: `${baseUrl}/team/${m.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const areaPages = localAreasData.map((a) => ({
    url: `${baseUrl}/area/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...treatmentPages, ...teamPages, ...areaPages];
}
