'use client';

import { motion } from 'framer-motion';
import { BOOKING_URL } from '@/lib/data';

export default function ServiceCard({
  title,
  description,
  duration,
  price,
  index = 0,
  showBookButton = true,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group border border-charcoal bg-card p-8 transition-colors duration-500 hover:border-gold"
    >
      <h3 className="font-cormorant text-2xl font-bold tracking-wide text-[#C9A96E]">
        {title}
      </h3>
      <p className="label mt-3 text-muted">{duration}</p>
      <p className="mt-4 font-sans-dm text-sm leading-relaxed text-muted">
        {description}
      </p>
      <p className="font-cormorant mt-6 text-2xl text-[#C9A96E]">{price}</p>
      {showBookButton && (
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold mt-6 block w-full px-6 py-3 text-center"
        >
          Book This Service
        </a>
      )}
    </motion.article>
  );
}
