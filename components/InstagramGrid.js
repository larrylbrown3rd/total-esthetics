'use client';

import MediaThumb from './MediaThumb';
import { homeGalleryPreview } from '@/lib/media';
import { SOCIAL } from '@/lib/data';

export default function InstagramGrid() {
  return (
    <div className="mx-auto grid max-w-4xl grid-cols-2 gap-2 md:grid-cols-3">
      {homeGalleryPreview.slice(0, 6).map((item) => (
        <a
          key={`ig-${item.id}`}
          href={SOCIAL.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative aspect-square overflow-hidden border border-charcoal bg-card transition-colors hover:border-gold"
        >
          <MediaThumb item={item} />
        </a>
      ))}
    </div>
  );
}
