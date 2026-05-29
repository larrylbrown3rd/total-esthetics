'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import HeroVideoBackground from './HeroVideoBackground';
import { heroBackground } from '@/lib/media';
import { BRAND_TAGLINE } from '@/lib/data';

export default function HomeHero() {
  return (
    <section
      className="hero-section relative min-h-screen overflow-hidden bg-black-luxury bg-cover bg-center bg-no-repeat md:transform-gpu md:backface-hidden"
      style={{ backgroundImage: `url('${heroBackground.image}')` }}
    >
      <HeroVideoBackground />
      <div className="absolute inset-0 z-[1] bg-[#0A0A0A]/58 md:bg-gradient-to-r md:from-[#0A0A0A]/92 md:via-[#0A0A0A]/60 md:to-transparent" />

      <div className="relative z-[2] mx-auto flex min-h-screen w-full items-center justify-center px-6 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex w-full max-w-3xl flex-col items-center rounded-none px-5 py-8 text-center md:bg-transparent md:px-0 md:py-0"
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
              className="block bg-[#C9A96E] px-8 py-4 text-center font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#0A0A0A] transition-all duration-300 hover:bg-[#B8985D]"
            >
              SECURE YOUR SESSION
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
