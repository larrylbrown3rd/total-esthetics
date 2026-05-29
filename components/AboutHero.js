import Image from 'next/image';
import { BRAND_TAGLINE } from '@/lib/data';

const studioCommitments = [
  {
    title: '01 / The Protected Hour',
    label: 'ONE-ON-ONE CONCIERGE',
    body: 'We operate with a strict zero-overlap booking policy. When you are in our chair, the studio doors are locked to the public, ensuring your time is entirely respected, private, and unhurried.',
  },
  {
    title: '02 / The Acoustic Luxury',
    label: 'A SILENT ESCAPE',
    body: 'We have completely decoupled from the gossip, chaotic background noise, and ringing phones of commercial salons. Enjoy a curated, minimalist sonic environment designed for decompression.',
  },
  {
    title: '03 / The Health-First Metric',
    label: 'INTEGRITY OF THE CANVAS',
    body: 'High-fashion impact should never cost you your natural health. We vet and utilize only premier, clinical-grade adhesives and laminations that preserve lash and brow follicle health long-term.',
  },
];

export default function AboutHero() {
  return (
    <main className="bg-[#0A0A0A] text-[#F5F0E8]">
      <div className="mx-auto w-full max-w-[1440px] lg:grid lg:min-h-screen lg:grid-cols-2">
        <div className="relative w-full overflow-hidden border-b border-[#3D2B1F]/30 lg:min-h-screen lg:border-b-0 lg:border-r lg:border-[#3D2B1F]/30">
          <div
            className="relative aspect-[4/5] w-full max-h-[min(72vh,640px)] transform-gpu backface-hidden sm:aspect-square sm:max-h-[min(78vh,720px)] lg:absolute lg:inset-0 lg:max-h-none lg:aspect-auto"
          >
            <Image
              src="/about-hero.jpg"
              alt="Total Esthetics lash and brow artistry close-up"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[center_25%] brightness-[0.80] contrast-[1.05]"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#0A0A0A]/35"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center px-6 py-12 sm:px-12 md:px-16 lg:px-24 lg:py-24">
          <div className="mb-10 border-b border-[#3D2B1F]/40 pb-8 lg:mb-12">
            <h1 className="mb-4 font-cormorant text-3xl font-light uppercase leading-tight tracking-[0.15em] sm:text-4xl md:text-5xl">
              <span className="text-[#C9A96E]">Total</span>{' '}
              <span className="text-[#F5F0E8]/90">Esthetics</span>
            </h1>

            <div className="mt-4 flex items-center gap-4">
              <div className="h-px w-8 bg-[#C9A96E]/60" aria-hidden="true" />
              <p className="font-sans-dm text-[11px] font-medium uppercase tracking-[0.25em] text-[#C9A96E] sm:text-xs">
                {BRAND_TAGLINE}
              </p>
            </div>
          </div>

          <div className="mb-12 grid grid-cols-1 gap-8 font-sans-dm text-sm font-light leading-relaxed text-[#F5F0E8]/70 md:grid-cols-2 sm:text-base lg:mb-16">
            <p>
              At Total Esthetics, our nine-year legacy is built on a simple
              promise: an uncompromising level of service. From the moment you
              step into our space, the outside world is completely shut out. We
              treat your features as a clean canvas, taking the time to deeply
              study your facial anatomy, bone framework, and personal style
              before a single lash or brow structure is designed.
            </p>
            <p>
              This meticulous, detail-obsessed approach cannot be rushed. By
              intentionally limiting our daily roster, we ensure that every
              treatment is executed with masterful clinical precision, giving
              your canvas the rigorous care and flawless execution it deserves.
            </p>
          </div>

          <div className="border-t border-[#3D2B1F]/40 pt-10 lg:pt-12">
            <p className="mb-8 font-cormorant text-lg font-light italic tracking-wide text-[#C9A96E]">
              The Studio Commitments
            </p>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-0">
              {studioCommitments.map((item, index) => (
                <div
                  key={item.title}
                  className={`text-left ${
                    index === 1
                      ? 'md:border-x md:border-[#3D2B1F]/30 md:px-6 lg:px-8'
                      : index === 2
                        ? 'md:pl-2'
                        : 'md:pr-2'
                  } ${
                    index < studioCommitments.length - 1
                      ? 'border-b border-[#3D2B1F]/30 pb-10 md:border-b-0 md:pb-0'
                      : ''
                  }`}
                >
                  <h3 className="mb-3 font-cormorant text-2xl font-light leading-snug text-[#C9A96E] sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mb-4 font-sans-dm text-[10px] font-medium uppercase tracking-[0.25em] text-[#F5F0E8]/50 sm:text-xs">
                    {item.label}
                  </p>
                  <p className="font-sans-dm text-sm font-light leading-relaxed text-[#F5F0E8]/70">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
