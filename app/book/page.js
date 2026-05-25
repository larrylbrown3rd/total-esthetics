import PageShell from '@/components/PageShell';
import Logo from '@/components/Logo';
import AcuityEmbed from '@/components/AcuityEmbed';
import { bookInfoSections } from '@/lib/data';

export const metadata = {
  title: 'Book Now | Total Esthetics Hapeville GA',
  description:
    'Book your luxury lash and brow appointment with Total Esthetics in Hapeville GA. Online booking available 24/7.',
  openGraph: {
    title: 'Book Now | Total Esthetics',
    description: 'Reserve your luxury appointment online',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Now | Total Esthetics',
    description: 'Reserve your luxury appointment online',
  },
};

export default function BookPage() {
  return (
    <PageShell>
      <section className="bg-deep px-6 py-24 text-center md:px-10">
        <Logo size="book" asLink={false} className="mx-auto inline-block" />
        <div className="gold-divider my-8" />
        <p className="label">Reserve your luxury appointment</p>
      </section>

      <section className="bg-black-luxury px-6 pb-24 md:px-10">
        <div className="mx-auto max-w-4xl border border-charcoal">
          <div className="h-px w-full bg-gold" />
          <AcuityEmbed />
        </div>
      </section>

      <section className="bg-deep px-6 py-24 md:px-10">
        <div className="mx-auto max-w-4xl divide-y divide-charcoal">
          {bookInfoSections.map((section) => (
            <div key={section.title} className="border-t border-gold/30 py-10 first:border-t-0">
              <h3 className="label mb-4 text-gold">{section.title}</h3>
              <p className="font-sans-dm text-sm leading-relaxed text-muted">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
