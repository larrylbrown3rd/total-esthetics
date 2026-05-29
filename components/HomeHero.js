'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import HeroVideoBackground from './HeroVideoBackground';
import { BRAND_TAGLINE } from '@/lib/data';

export default function HomeHero() {
  return (
    <section className="hero-section relative isolate min-h-[100dvh] w-full max-w-full overflow-hidden bg-[#0A0A0A]">
      <HeroVideoBackground />
      <div className="absolute inset-0 z-[1] bg-[#0A0A0A]/58 md:bg-gradient-to-r md:from-[#0A0A0A]/92 md:via-[#0A0A0A]/60 md:to-transparent" />

      <div className="relative z-[2] mx-auto flex min-h-[100dvh] w-full max-w-full flex-col items-center justify-center px-6 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex w-full max-w-3xl flex-col items-center text-center"
        >
          <p className="font-cormorant text-[10px] font-light uppercase tracking-[0.32em] text-[#C9A96E] md:text-xs">
            HAPEVILLE, GEORGIA
          </p>

          <p className="mt-2 font-cormorant text-[10px] font-light uppercase tracking-[0.32em] text-[#C9A96E] md:text-xs">
            — {BRAND_TAGLINE}
          </p>

          <h1 className="mt-8 font-serif text-3xl font-light leading-tight text-white/90 md:mt-10 md:font-cormorant md:text-7xl md:italic">
            Precision. <span className="italic">Beauty.</span> <br /> Confidence.
          </h1>

          <div className="mt-8 w-full max-w-sm">
            <Link
              href="/book"
              className="block w-full bg-[#C9A96E] px-8 py-4 text-center font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#0A0A0A] transition-all duration-300 hover:bg-[#B8985D]"
            >
              SECURE YOUR SESSION
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
