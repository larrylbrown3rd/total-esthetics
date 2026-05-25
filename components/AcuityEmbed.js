'use client';

import { ACUITY_SCHEDULER_URL } from '@/lib/data';

export default function AcuityEmbed() {
  return (
    <iframe
      src={ACUITY_SCHEDULER_URL}
      width="100%"
      height="100%"
      frameBorder="0"
      title="Book appointment with Total Esthetics"
      className="block min-h-[800px] w-full border-0 bg-transparent"
      allow="payment"
    />
  );
}
