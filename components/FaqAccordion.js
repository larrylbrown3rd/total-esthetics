'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className="border border-charcoal bg-card transition-colors hover:border-gold"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between px-6 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="font-sans-dm text-sm tracking-wide text-cream">
                {item.question}
              </span>
              <span
                className={`font-cormorant text-2xl text-gold transition-transform duration-300 ${
                  isOpen ? 'rotate-45' : ''
                }`}
              >
                +
              </span>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-charcoal px-6 pb-5 pt-2">
                    <p className="font-sans-dm text-sm leading-relaxed text-muted">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
