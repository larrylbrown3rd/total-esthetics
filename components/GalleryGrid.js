import Image from 'next/image';
import { lookbookPhotos } from '@/lib/gallery';

export default function GalleryGrid() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-16 sm:px-12">
        <section className="columns-1 gap-6 space-y-6 [column-fill:_balance] md:columns-2 lg:columns-3">
          {lookbookPhotos.map((photo) => (
            <article
              key={photo.src}
              className="relative mb-6 w-full break-inside-avoid overflow-hidden border border-[#3D2B1F]/10 bg-[#111111]"
            >
              <div className={`relative w-full ${photo.aspect}`}>
                <Image
                  src={photo.src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-auto w-full object-cover brightness-[0.85] contrast-[1.05] transition-all duration-700 ease-in-out hover:scale-[1.01] hover:brightness-[0.98]"
                />
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
