import PageShell from '@/components/PageShell';
import ContactSmsActions from '@/components/ContactSmsActions';
import PageHeader from '@/components/PageHeader';
import { BOOKING_URL, contactFaqs, studioLocationDetails, studioTextResponseWindows } from '@/lib/data';

export const metadata = {
  title: 'Contact | Total Esthetics Hapeville GA',
  description:
    'Contact Total Esthetics in Hapeville GA via SMS for bookings, schedule changes, and consultations.',
  openGraph: {
    title: 'Contact | Total Esthetics',
    description: 'Text our studio for bookings and consultations',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Total Esthetics',
    description: 'Text our studio for bookings and consultations',
  },
};

export default function ContactPage() {
  return (
    <PageShell>
      <section className="bg-[#0A0A0A] px-6 py-20 text-[#F5F0E8] md:px-10 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <PageHeader
            eyebrow="Preferred Channel"
            title="Text the Studio"
            subtitle="Fast, personal, and always handled with care"
            className="mb-14"
          />

          <div className="mx-auto w-full max-w-4xl border border-[#3D2B1F]/30 bg-[#111111] p-8 transition-all duration-500 ease-in-out hover:border-[#C9A96E]/20 sm:p-12">
            <p className="mx-auto max-w-2xl text-center font-sans text-sm text-[#F5F0E8]/80 font-light tracking-[0.12em] leading-loose sm:text-base">
              To maintain our seamless, dedicated focus on the client currently
              in the studio chair, all inquiries, schedule adjustments, and
              consultations are handled directly via SMS text message.
            </p>
          </div>

          <div className="mt-14">
            <ContactSmsActions />
          </div>

          <p className="mx-auto mt-10 max-w-xl text-center font-sans-dm text-xs uppercase tracking-[0.2em] text-[#8B8B7A]">
            Prefer to self-schedule?{' '}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9A96E] transition-colors hover:text-[#F5F0E8]"
            >
              Book online anytime
            </a>
          </p>
        </div>
      </section>

      <section className="border-t border-[#3D2B1F]/20 bg-[#0A0A0A] px-6 py-16 text-[#F5F0E8] md:px-10">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-16">
            <div>
              <h3 className="label mb-5 text-[#C9A96E]">
                {studioLocationDetails.headline}
              </h3>
              <ul className="space-y-2 font-sans-dm text-sm leading-relaxed text-[#F5F0E8]">
                {studioLocationDetails.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="label mb-5 text-[#C9A96E]">
                {studioTextResponseWindows.headline}
              </h3>
              <ul className="space-y-2 font-sans-dm text-sm leading-relaxed text-[#F5F0E8]">
                {studioTextResponseWindows.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-6 py-16 text-[#F5F0E8] md:px-10">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-3">
          {contactFaqs.map((faq) => (
            <div key={faq.q} className="border-t border-[#2C2C2C] pt-6">
              <h3 className="font-cormorant text-lg font-bold text-[#C9A96E]">
                {faq.q}
              </h3>
              <p className="mt-2 font-sans-dm text-sm text-[#8B8B7A]">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
