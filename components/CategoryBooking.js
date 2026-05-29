'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import {
  bookingAppointmentCategories,
  bookingPackageCategories,
} from '@/lib/data';

function CategoryRow({ title, url, onSelect }) {
  return (
    <div className="flex flex-col gap-4 border border-[#3D2B1F]/30 bg-[#111111] px-5 py-5 transition-all duration-500 ease-in-out hover:border-[#C9A96E]/20 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-6">
      <h3 className="font-sans text-sm font-light uppercase tracking-[0.2em] text-[#F5F0E8] sm:text-base">
        {title}
      </h3>
      <button
        type="button"
        onClick={() => onSelect(url)}
        className="rounded-none bg-[#C9A96E] px-8 py-3 font-sans-dm text-xs uppercase tracking-[0.25em] text-[#0A0A0A] transition-all duration-300 hover:bg-transparent hover:text-[#C9A96E] hover:outline hover:outline-1 hover:outline-[#C9A96E] sm:shrink-0"
      >
        SELECT
      </button>
    </div>
  );
}

export default function CategoryBooking() {
  const [selectedCategoryUrl, setSelectedCategoryUrl] = useState(null);

  return (
    <div className="min-h-screen bg-black-luxury">
      <AnimatePresence mode="wait">
        {!selectedCategoryUrl ? (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="px-4 pb-16 pt-12 md:px-10"
          >
            <PageHeader
              eyebrow="Book an Appointment"
              title="Select Category"
            />

            <div className="mx-auto w-full max-w-3xl space-y-10">
              <section>
                <h2 className="mb-5 font-sans-dm text-[10px] uppercase tracking-[0.3em] text-gold/70">
                  Select Appointment Category
                </h2>
                <div className="space-y-3">
                  {bookingAppointmentCategories.map((category) => (
                    <CategoryRow
                      key={category.title}
                      title={category.title}
                      url={category.url}
                      onSelect={setSelectedCategoryUrl}
                    />
                  ))}
                </div>
              </section>

              <section>
                <h2 className="mb-5 font-sans-dm text-[10px] uppercase tracking-[0.3em] text-gold/70">
                  Select Products &amp; Packages Category
                </h2>
                <div className="space-y-3">
                  {bookingPackageCategories.map((category) => (
                    <CategoryRow
                      key={category.title}
                      title={category.title}
                      url={category.url}
                      onSelect={setSelectedCategoryUrl}
                    />
                  ))}
                </div>
              </section>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="iframe"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="flex min-h-screen flex-col px-4 pb-16 pt-8 md:px-10"
          >
            <div className="mx-auto mb-6 w-full max-w-5xl">
              <button
                type="button"
                onClick={() => setSelectedCategoryUrl(null)}
                className="font-sans-dm text-xs uppercase tracking-[0.25em] text-gold transition-colors duration-300 hover:text-gold-light"
              >
                ← Back to Categories
              </button>
            </div>

            <div className="mx-auto w-full max-w-5xl flex-1">
              <iframe
                src={selectedCategoryUrl}
                title="Book appointment with Total Esthetics"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="payment"
                className="min-h-[calc(100vh-140px)] w-full border-0 bg-transparent"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
