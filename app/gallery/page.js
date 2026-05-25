import PageShell from '@/components/PageShell';
import GalleryGrid from '@/components/GalleryGrid';

export const metadata = {
  title: 'Gallery | Total Esthetics Before & After Transformations',
  description:
    'A curated editorial lookbook of lash and brow transformations by Total Esthetics in Hapeville GA.',
  openGraph: {
    title: 'Gallery | Total Esthetics',
    description: 'Before and after lash and brow transformations',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gallery | Total Esthetics',
    description: 'Before and after lash and brow transformations',
  },
};

export default function GalleryPage() {
  return (
    <PageShell>
      <GalleryGrid />
    </PageShell>
  );
}
