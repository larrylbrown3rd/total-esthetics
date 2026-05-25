'use client';

import Image from 'next/image';
import { BRAND_TAGLINE } from '@/lib/data';

export default function AboutHero() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0A0A0A] text-[#F5F0E8]">
      <div className="mx-auto grid min-h-screen w-full max-w-[1440px] grid-cols-1 lg:grid-cols-2">
        <div className="relative h-[50vh] w-full bg-[#111111] lg:h-full lg:min-h-screen lg:border-r lg:border-[#3D2B1F]/30">
          <div className="relative h-full w-full">
            <Image
              src="/about-hero.jpg"
              alt="Total Esthetics lash and brow artistry close-up"
              fill
              priority
              className="h-full w-full object-cover object-center brightness-[0.80] contrast-[1.05] transition-all duration-500 ease-out"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0A0A0A]/30"
            aria-hidden="true"
          />
        </div>

        <div className="flex flex-col justify-center bg-[#0A0A0A] px-6 py-16 sm:px-12 md:px-16 lg:px-24 lg:py-24">
          <div className="mb-12 border-b border-[#3D2B1F]/40 pb-8">
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

          <div className="mb-16 grid grid-cols-1 gap-8 font-sans-dm text-sm font-light leading-relaxed text-[#F5F0E8]/70 md:grid-cols-2 sm:text-base">
            <p>
              Total Esthetics was founded on a simple belief — every client
              deserves to feel like the most beautiful version of themselves. As
              a premier boutique studio serving Hapeville and the greater South
              Atlanta Metropolitan area, we bring absolute precision, clinical
              care, and bespoke artistry to every appointment.
            </p>
            <p>
              Specializing in luxury lash and advanced brow structures, we
              combine high-performance techniques with a deep mastery of facial
              anatomy to deliver tailored, exceptional results that effortlessly
              elevate your natural radiance.
            </p>
          </div>

          <div className="border-t border-[#3D2B1F]/40 pt-12">
            <p className="mb-8 font-cormorant text-lg italic tracking-wide text-[#C9A96E]">
              A Legacy of Excellence
            </p>

            <div className="grid grid-cols-3 gap-4 sm:gap-8">
              <div className="text-left">
                <span className="mb-2 block font-cormorant text-3xl font-light text-[#C9A96E] sm:text-4xl md:text-5xl">
                  9+
                </span>
                <span className="block font-sans-dm text-[10px] font-medium uppercase leading-normal tracking-[0.2em] text-[#F5F0E8]/50 sm:text-xs">
                  Years Experience
                </span>
              </div>

              <div className="border-x border-[#3D2B1F]/30 px-4 text-left sm:px-8">
                <span className="mb-2 block font-cormorant text-3xl font-light text-[#C9A96E] sm:text-4xl md:text-5xl">
                  500+
                </span>
                <span className="block font-sans-dm text-[10px] font-medium uppercase leading-normal tracking-[0.2em] text-[#F5F0E8]/50 sm:text-xs">
                  Clients Served
                </span>
              </div>

              <div className="pl-2 text-left">
                <div className="mb-2 flex items-baseline gap-1">
                  <span className="font-cormorant text-3xl font-light text-[#C9A96E] sm:text-4xl md:text-5xl">
                    5
                  </span>
                  <span className="text-xl text-[#C9A96E] sm:text-2xl">★</span>
                </div>
                <span className="block font-sans-dm text-[10px] font-medium uppercase leading-normal tracking-[0.2em] text-[#F5F0E8]/50 sm:text-xs">
                  Star Reviews
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
