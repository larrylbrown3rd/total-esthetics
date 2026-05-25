import Link from 'next/link';
import Logo from './Logo';
import { BOOKING_URL, SOCIAL, services } from '@/lib/data';

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/book', label: 'Book Now' },
];

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="font-sans-dm text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-light"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-charcoal bg-deep">
      <div className="h-px w-full bg-[#C9A96E]" />

      <div className="px-6 py-16 text-center md:px-10">
        <Logo size="footer" className="mx-auto inline-block" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-14 md:grid-cols-2 lg:grid-cols-4 md:px-10">
        <div>
          <h3 className="label mb-4 text-gold">About</h3>
          <p className="font-sans-dm text-sm leading-relaxed text-muted">
            Luxury lash and brow artistry in Hapeville, GA. Editorial precision,
            high-fashion results, and a calm private studio experience.
          </p>
        </div>

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
          <h3 className="label mb-4 text-gold">Services</h3>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href="/services"
                  className="font-sans-dm text-sm text-muted transition-colors hover:text-cream"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="label mb-4 text-gold">Connect</h3>
          <div className="mb-6 flex flex-wrap gap-4">
            <SocialIcon href={SOCIAL.instagram} label="Instagram">
              Instagram
            </SocialIcon>
            <SocialIcon href={SOCIAL.facebook} label="Facebook">
              Facebook
            </SocialIcon>
            <SocialIcon href={SOCIAL.tiktok} label="TikTok">
              TikTok
            </SocialIcon>
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="label text-gold transition-colors hover:text-gold-light"
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
