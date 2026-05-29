import PageShell from '@/components/PageShell';
import HomeHero from '@/components/HomeHero';
import { SITE_URL } from '@/lib/data';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: 'Total Esthetics',
  description: 'Luxury lash and brow artistry in Hapeville GA',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hapeville',
    addressRegion: 'GA',
  },
  url: SITE_URL,
  priceRange: '$$',
  openingHours: 'Mo,Tu,Th 10:00-20:00; Fr 09:00-18:00; Sa 09:00-16:00',
};

export default function HomePage() {
  return (
    <PageShell flush>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <HomeHero />
    </PageShell>
  );
}
