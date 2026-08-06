import type { Metadata } from 'next';
import './globals.css';
import { practiceConfig } from '@/data/practice';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CookieBanner } from '@/components/layout/CookieBanner';
import { SchemaOrg } from '@/components/ui/SchemaOrg';
import { generateDentistSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: {
    default: `${practiceConfig.name} | Dentist in ${practiceConfig.city}`,
    template: `%s | ${practiceConfig.name}`,
  },
  description: `${practiceConfig.name} provides general, restorative and cosmetic dental care in ${practiceConfig.city}, ${practiceConfig.county}. Contact the practice to request an appointment.`,
  keywords: [
    `Dentist in ${practiceConfig.city}`,
    `Dental practice ${practiceConfig.city}`,
    `Private dentist ${practiceConfig.city}`,
    `Emergency dentist ${practiceConfig.city}`,
    `Dental implants ${practiceConfig.city}`,
    `Clear aligners ${practiceConfig.city}`,
    `Teeth whitening ${practiceConfig.city}`,
    `Dentures ${practiceConfig.city}`,
  ],
  authors: [{ name: practiceConfig.name }],
  metadataBase: new URL('https://example.co.uk'),
  openGraph: {
    title: `${practiceConfig.name} | Dentist in ${practiceConfig.city}`,
    description: practiceConfig.description,
    url: 'https://example.co.uk',
    siteName: practiceConfig.name,
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: practiceConfig.images.hero,
        width: 1200,
        height: 630,
        alt: practiceConfig.name,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dentistSchema = generateDentistSchema();

  return (
    <html lang="en-GB" className="scroll-smooth">
      <head>
        <SchemaOrg schema={dentistSchema} />
      </head>
      <body className="min-h-screen flex flex-col bg-navy-900 text-ivory antialiased selection:bg-brass selection:text-navy-900">
        {/* Skip to Main Content Link for Keyboard Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brass text-navy-900 font-bold px-4 py-2 rounded-lg z-50 shadow-elevated"
        >
          Skip to main content
        </a>

        {/* Global Announcement Notification */}
        <AnnouncementBar />

        {/* Sticky Header */}
        <Header />

        {/* Main Viewport Content */}
        <main id="main-content" className="flex-1">
          {children}
        </main>

        {/* Global Regulatory Footer */}
        <Footer />

        {/* GDPR Cookie Consent Controls */}
        <CookieBanner />
      </body>
    </html>
  );
}
