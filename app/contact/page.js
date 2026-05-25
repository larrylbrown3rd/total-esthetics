import PageShell from '@/components/PageShell';
import ContactForm from '@/components/ContactForm';
import SectionHeading from '@/components/SectionHeading';
import { BOOKING_URL, SOCIAL, contactFaqs } from '@/lib/data';

export const metadata = {
  title: 'Contact | Total Esthetics Hapeville GA',
  description:
    'Contact Total Esthetics in Hapeville GA. Book your lash and brow appointment online or send us a message.',
  openGraph: {
    title: 'Contact | Total Esthetics',
    description: 'Get in touch with Total Esthetics',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Total Esthetics',
    description: 'Get in touch with Total Esthetics',
  },
};

const infoItems = [
  { label: 'Location', value: 'Hapeville, GA' },
  { label: 'Hours', value: 'Monday–Saturday 9am–6pm · Sunday Closed' },
  { label: 'Email', value: 'hello@totalesthetics.com' },
  {
    label: 'Instagram',
    value: '@totalesthetics',
    href: SOCIAL.instagram,
  },
];

export default function ContactPage() {
  return (
    <PageShell>
      <section className="bg-deep px-6 py-32 md:px-10">
        <SectionHeading
          eyebrow="REACH OUT"
          title="GET IN TOUCH"
          subtitle="We would love to hear from you"
        />
      </section>

      <section className="bg-black-luxury px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2">
          <ContactForm submitLabel="Send Message" />

          <div>
            <h3 className="label mb-8 text-gold">Visit Us</h3>
            <ul className="mb-10 space-y-6">
              {infoItems.map((item) => (
                <li key={item.label}>
                  <p className="label text-muted">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block font-sans-dm text-sm text-cream hover:text-gold"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 font-sans-dm text-sm text-cream">
                      {item.value}
                    </p>
                  )}
                </li>
              ))}
            </ul>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Book Online
            </a>
            <div className="mt-10 flex aspect-video items-center justify-center border border-charcoal bg-card">
              <p className="label">Map Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-deep px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {contactFaqs.map((faq) => (
            <div key={faq.q} className="border-t border-charcoal pt-6">
              <h3 className="font-cormorant text-lg font-bold text-gold">
                {faq.q}
              </h3>
              <p className="mt-2 font-sans-dm text-sm text-muted">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
