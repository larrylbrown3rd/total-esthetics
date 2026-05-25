import Link from 'next/link';
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
  openingHours: 'Mo-Sa 09:00-18:00',
};

export default function HomePage() {
  return (
    <PageShell flush>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <HomeHero />

      <section className="bg-gold px-6 py-16 text-center md:px-10">
        <h2 className="font-cormorant text-4xl font-bold uppercase tracking-[0.2em] text-black-luxury md:text-5xl">
          Ready for Your
        </h2>
        <h2 className="font-cormorant text-4xl font-bold uppercase tracking-[0.2em] text-black-luxury md:text-5xl">
          Transformation?
        </h2>
        <p className="mt-4 font-sans-dm text-sm text-black-luxury/75">
          Book your luxury appointment today
        </p>
        <Link href="/book" className="btn-inverted mt-8">
          Reserve Your Appointment
        </Link>
      </section>
    </PageShell>
  );
}
