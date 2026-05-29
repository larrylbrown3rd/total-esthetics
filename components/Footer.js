import Link from 'next/link';
import Logo from './Logo';
import { BOOKING_URL, SOCIAL } from '@/lib/data';

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
  { href: '/policies', label: 'Policies' },
  { href: '/book', label: 'Book Now' },
];

export default function Footer() {
  return (
    <footer className="border-t border-charcoal bg-deep">
      <div className="h-px w-full bg-[#C9A96E]" />

      <div className="px-6 py-16 text-center md:px-10">
        <Logo size="footer" className="mx-auto inline-block" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-14 md:grid-cols-2 md:px-10">
        <div>
          <h3 className="label mb-4 text-gold">Navigation</h3>
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-sans-dm text-sm text-muted transition-colors hover:text-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="label mb-4 text-gold">Connect</h3>
          <a
            href={SOCIAL.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @total.esthetics"
            className="font-sans-dm text-sm uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-light"
          >
            {SOCIAL.instagramHandle}
          </a>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="label mt-6 block text-gold transition-colors hover:text-gold-light"
          >
            Book Online →
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 border-t border-charcoal px-6 py-6 text-center md:flex-row md:px-10 md:text-left">
        <p className="label text-muted">
          © {new Date().getFullYear()} Total Esthetics · Hapeville, GA
        </p>
        <p className="label text-muted">Designed by Exponential Oaks</p>
      </div>
    </footer>
  );
}
