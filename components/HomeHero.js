'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import HeroVideoBackground from './HeroVideoBackground';
import { heroBackground } from '@/lib/media';
import { BRAND_TAGLINE } from '@/lib/data';

export default function HomeHero() {
  return (
    <section
      className="hero-section relative min-h-screen overflow-hidden bg-black-luxury bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${heroBackground.image}')` }}
    >
      <HeroVideoBackground />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.8) 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-[2] mx-auto flex min-h-screen items-center justify-center px-6 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <p className="font-sans-dm text-[10px] uppercase tracking-[0.4em] text-[#8B8B7A]">
            HAPEVILLE, GEORGIA
          </p>

          <p className="font-sans-dm text-[10px] uppercase tracking-[0.35em] text-[#C9A96E]">
            — {BRAND_TAGLINE}
          </p>

          <h1 className="max-w-3xl font-cormorant text-5xl italic leading-tight tracking-wide text-[#F5F0E8] md:text-7xl">
            Precision.
            <br />
            Beauty.
            <br />
            Confidence.
          </h1>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/book"
              className="rounded-none bg-[#C9A96E] px-10 py-4 font-sans-dm text-xs uppercase tracking-[0.25em] text-[#0A0A0A] transition-all duration-300 hover:bg-transparent hover:text-[#C9A96E] hover:outline hover:outline-1 hover:outline-[#C9A96E]"
            >
              Book Your Appointment
            </Link>
            <Link
              href="/services"
              className="rounded-none bg-transparent px-10 py-4 font-sans-dm text-xs uppercase tracking-[0.25em] text-[#C9A96E] outline outline-1 outline-[#C9A96E] transition-all duration-300 hover:bg-[#C9A96E] hover:text-[#0A0A0A] hover:outline-none"
            >
              View Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
