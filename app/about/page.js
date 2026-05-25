import PageShell from '@/components/PageShell';
import AboutHero from '@/components/AboutHero';

export const metadata = {
  title: 'About | Total Esthetics Hapeville GA',
  description:
    'Premier boutique esthetician studio serving Hapeville and greater South Atlanta. Luxury lash and advanced brow artistry.',
  openGraph: {
    title: 'About | Total Esthetics',
    description: 'Meet your luxury lash and brow artist',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Total Esthetics',
    description: 'Meet your luxury lash and brow artist',
  },
};

export default function AboutPage() {
  return (
    <PageShell flush>
      <AboutHero />
    </PageShell>
  );
}
