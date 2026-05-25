'use client';

import Image from 'next/image';

export default function MediaLightbox({ item }) {
  if (!item) return null;

  if (item.type === 'video') {
    return (
      <video
        key={item.src}
        src={item.src}
        poster={item.poster}
        className="max-h-[75vh] w-full bg-black object-contain"
        controls
        autoPlay
        playsInline
        loop
      />
    );
  }

  return (
    <div className="relative h-[70vh] w-full max-w-3xl">
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-contain"
        sizes="100vw"
        priority
      />
    </div>
  );
}
