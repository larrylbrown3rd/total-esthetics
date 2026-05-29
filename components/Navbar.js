'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BRAND_TAGLINE_UPPER } from '@/lib/data';
import { heroBackground } from '@/lib/media';

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/services', label: 'SERVICES' },
  { href: '/gallery', label: 'GALLERY' },
  { href: '/about', label: 'ABOUT' },
  { href: '/contact', label: 'CONTACT' },
  { href: '/policies', label: 'POLICIES' },
];

const desktopNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/policies', label: 'Policies' },
];

const totalGradientStyle = {
  background: 'linear-gradient(135deg, #B8860B, #C9A96E, #E8D5A3, #C9A96E, #B8860B)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

function NavLogo() {
  return (
    <Link href="/" className="flex flex-col leading-tight">
      <div>
        <span
          className="font-cormorant text-lg font-bold uppercase tracking-[0.15em]"
          style={totalGradientStyle}
        >
          TOTAL
        </span>
        <span className="ml-1.5 font-cormorant text-lg font-normal uppercase tracking-[0.15em] text-[#F5F0E8]/90">
          ESTHETICS
        </span>
      </div>
      <span className="font-sans-dm text-[8px] uppercase tracking-[0.25em] text-[#8B8B7A]">
        {BRAND_TAGLINE_UPPER}
      </span>
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const linkClass = (href) => {
    const active =
      href === '/'
        ? pathname === '/'
        : pathname === href || pathname.startsWith(`${href}/`);
    return `font-sans-dm text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${
      active ? 'text-[#C9A96E]' : 'text-cream hover:text-[#E8D5A3]'
    }`;
  };

  return (
    <header
      className={`fixed top-[2px] z-50 w-full transform-gpu backface-hidden will-change-transform transition-all duration-500 ${
        scrolled
          ? 'border-b border-[#2C2C2C] bg-black/80 py-4 backdrop-blur-md md:px-10'
          : 'border-b border-transparent bg-transparent py-5 md:px-10'
      } px-6`}
    >
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between">
        <NavLogo />

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-none border border-charcoal/50 bg-black/40 backdrop-blur-sm md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span
            className={`block h-px w-5 bg-cream transition-all duration-300 ${
              menuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-px w-5 bg-cream transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-px w-5 bg-cream transition-all duration-300 ${
              menuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>

        <div className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-8">
            {desktopNavLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass(link.href)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/book"
            className="rounded-none bg-[#C9A96E] px-6 py-2.5 font-sans-dm text-xs uppercase tracking-[0.25em] text-[#0A0A0A] transition-all duration-300 hover:bg-transparent hover:text-[#C9A96E] hover:outline hover:outline-1 hover:outline-[#C9A96E]"
          >
            Book Now
          </Link>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col overflow-y-auto transform-gpu backface-hidden will-change-transform md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${heroBackground.image}')` }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[#0A0A0A]/58"
          />

          <div className="relative z-10 flex min-h-full flex-col items-center justify-center px-6 py-28">
            <nav aria-label="Site navigation">
              <ul className="space-y-4 text-center">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block py-2 font-sans text-lg font-light uppercase tracking-[0.2em] text-[#F5F0E8]/90 transition-colors duration-300 hover:text-[#C9A96E]"
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-10 w-full max-w-xs">
              <Link
                href="/book"
                className="block bg-[#C9A96E] px-8 py-4 text-center font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#0A0A0A] transition-all duration-300 hover:bg-[#B8985D]"
                onClick={closeMenu}
              >
                SECURE YOUR SESSION
              </Link>
              <Link
                href="/services"
                className="mt-4 block text-center font-sans text-[11px] uppercase tracking-[0.2em] text-[#F5F0E8]/80 transition-colors duration-300 hover:text-[#C9A96E]"
                onClick={closeMenu}
              >
                Total Packages
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
