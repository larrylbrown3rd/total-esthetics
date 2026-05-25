import PageShell from '@/components/PageShell';
import CategoryBooking from '@/components/CategoryBooking';

export const metadata = {
  title: 'Select Category | Total Esthetics Hapeville GA',
  description:
    'Choose your lash or brow category and book online with Total Esthetics in Hapeville GA.',
  openGraph: {
    title: 'Select Category | Total Esthetics',
    description: 'Book your luxury lash and brow appointment online',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Select Category | Total Esthetics',
    description: 'Book your luxury lash and brow appointment online',
  },
};

export default function ServicesPage() {
  return (
    <PageShell>
      <CategoryBooking />
    </PageShell>
  );
}
