'use client';

import Link from 'next/link';
import MediaThumb from './MediaThumb';
import SectionHeading from './SectionHeading';
import { homeGalleryPreview } from '@/lib/media';

export default function GalleryPreview() {
  return (
    <section className="bg-deep px-6 py-16 md:px-10">
      <SectionHeading
        eyebrow="THE WORK"
        title="TRANSFORMATIONS"
        subtitle="Real clients. Real results."
        className="mb-10"
      />
      <div className="mx-auto grid max-w-2xl grid-cols-2 gap-2">
        {homeGalleryPreview.slice(0, 4).map((item) => (
          <Link
            key={item.id}
            href="/gallery"
            className="group relative aspect-square overflow-hidden border border-charcoal bg-card transition-colors duration-300 hover:border-gold"
          >
            <MediaThumb item={item} />
            <div className="absolute inset-0 flex items-center justify-center bg-black-luxury/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="label text-gold">{item.category}</span>
            </div>
          </Link>
        ))}
      </div>
      <p className="mt-10 text-center">
        <Link href="/gallery" className="btn-ghost">
          View Full Gallery
        </Link>
      </p>
    </section>
  );
}
