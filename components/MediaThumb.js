'use client';

import Image from 'next/image';

export default function MediaThumb({
  item,
  className = 'h-full w-full object-cover',
}) {
  if (item.type === 'video') {
    return (
      <>
        <Image
          src={item.poster || item.src}
          alt={item.alt}
          fill
          className={className}
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        <span
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/25"
          aria-hidden="true"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-none border border-gold bg-black/60 font-sans-dm text-base text-gold">
            ▶
          </span>
        </span>
      </>
    );
  }

  return (
    <Image
      src={item.src}
      alt={item.alt}
      fill
      className={className}
      sizes="(max-width: 768px) 50vw, 25vw"
    />
  );
}
