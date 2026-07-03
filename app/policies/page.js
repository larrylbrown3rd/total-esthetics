import Link from 'next/link';
import PageShell from '@/components/PageShell';
import PageHeader from '@/components/PageHeader';
import {
  AFTER_HOURS_INSTAGRAM_HANDLE,
  AFTER_HOURS_INSTAGRAM_URL,
  AFTER_HOURS_PHONE_DISPLAY,
  AFTER_HOURS_PHONE_RAW,
  policySections,
} from '@/lib/policies';

export const metadata = {
  title: 'Policies | Total Esthetics',
  description:
    'Official studio policies for retainers, cancellations, lateness, fill services, and after-hours concierge at Total Esthetics in Hapeville, GA.',
  openGraph: {
    title: 'Policies | Total Esthetics',
    description: 'Official Total Esthetics studio policies',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Policies | Total Esthetics',
    description: 'Official Total Esthetics studio policies',
  },
};

export default function PoliciesPage() {
  return (
    <PageShell>
      <section className="bg-[#0A0A0A] px-6 py-20 text-[#F5F0E8] md:px-10 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <PageHeader
            eyebrow="Studio"
            title="Policies"
            subtitle="Your appointment, our standard of care"
            className="mb-14 md:mb-16"
          />

          <p className="mx-auto mb-14 max-w-3xl text-center font-sans-dm text-sm font-light leading-relaxed text-[#F5F0E8]/70 sm:text-base">
            By booking an appointment, you agree and acknowledge the policies
            outlined below — crafted to protect your time, our artistry, and the
            integrity of the studio experience.
          </p>

          <div className="grid grid-cols-1 gap-8 lg:gap-10">
            {policySections.map((section) => (
              <article
                key={section.number}
                className="border border-[#3D2B1F]/30 bg-[#111111] px-6 py-8 sm:px-10 sm:py-10"
              >
                <h2 className="mb-6 border-b border-[#3D2B1F]/30 pb-5 font-cormorant text-2xl font-light leading-snug text-[#C9A96E] sm:text-3xl">
                  {section.number} / {section.title}
                </h2>

                <div className="space-y-5 font-sans-dm text-sm font-light leading-relaxed text-[#F5F0E8]/70 sm:text-base">
                  {section.afterHours ? (
                    <>
                      <p>
                        For appointment requests outside of standard studio
                        hours, please text{' '}
                        <a
                          href={`sms:${AFTER_HOURS_PHONE_RAW}`}
                          className="text-[#C9A96E] transition-colors hover:text-[#F5F0E8]"
                        >
                          {AFTER_HOURS_PHONE_DISPLAY}
                        </a>
                        . Kindly allow up to 12 hours for a response.
                        After-hours appointments are subject to availability and
                        an additional concierge fee.
                      </p>
                      <p>
                        Stay connected by following{' '}
                        <a
                          href={AFTER_HOURS_INSTAGRAM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#C9A96E] transition-colors hover:text-[#F5F0E8]"
                        >
                          {AFTER_HOURS_INSTAGRAM_HANDLE}
                        </a>{' '}
                        on Instagram for studio announcements, availability
                        updates, and the latest work.
                      </p>
                    </>
                  ) : (
                    section.paragraphs.map((paragraph, index) => (
                      <p key={`${section.number}-p-${index}`}>{paragraph}</p>
                    ))
                  )}
                </div>
              </article>
            ))}
          </div>

          <p className="mt-14 text-center font-sans-dm text-xs uppercase tracking-[0.2em] text-[#8B8B7A]">
            Questions?{' '}
            <Link
              href="/contact"
              className="text-[#C9A96E] transition-colors hover:text-[#F5F0E8]"
            >
              Contact the studio
            </Link>
          </p>
        </div>
      </section>
    </PageShell>
  );
}
