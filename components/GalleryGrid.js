import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { lookbookPhotos } from '@/lib/gallery';

function GalleryTile({ photo, priority = false, sizes }) {
  return (
    <article className="mb-6 w-full break-inside-avoid overflow-hidden border border-[#3D2B1F]/20 bg-[#111111]">
      <div
        className="relative w-full overflow-hidden transform-gpu backface-hidden"
        style={{ aspectRatio: photo.aspectRatio }}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover object-center brightness-[0.88] contrast-[1.05] transition-transform duration-700 ease-out hover:scale-[1.02]"
        />
      </div>
    </article>
  );
}

export default function GalleryGrid() {
  return (
    <div className="min-h-screen bg-black-luxury">
      <div className="mx-auto w-full max-w-[1200px] px-4 pb-16 pt-12 md:px-10">
        <PageHeader
          eyebrow="The Look"
          title="Gallery"
          subtitle="Lash & Brow Transformation"
          className="mb-12 md:mb-16"
        />

        <section
          className="columns-1 gap-6 [column-fill:_balance] md:columns-2 lg:columns-3"
          aria-label="Gallery lookbook grid"
        >
          {lookbookPhotos.map((photo, index) => (
            <GalleryTile
              key={photo.src}
              photo={photo}
              priority={index < 2}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ))}
        </section>

        <p className="mt-14 text-center">
          <Link href="/book" className="btn-gold">
            Book Your Transformation
          </Link>
        </p>
      </div>
    </div>
  );
}
