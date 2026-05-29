'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BRAND_TAGLINE_UPPER } from '@/lib/data';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/policies', label: 'Policies' },
];

/** Mobile overlay — no Services link (book via SMS / contact flow) */
const mobileNavLinks = navLinks.filter((link) => link.href !== '/services');

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
            {navLinks.map((link) => (
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
        <div className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-[#0A0A0A] px-6 pb-12 pt-24 transform-gpu backface-hidden will-change-transform md:hidden">
          <Link
            href="/"
            onClick={closeMenu}
            className="absolute left-6 top-6 z-20 font-sans text-xs font-light uppercase tracking-[0.3em] text-[#F5F0E8] transition-colors duration-300 hover:text-[#C9A96E]"
          >
            HOME
          </Link>
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="absolute right-6 top-6 z-20 font-sans text-xs font-light uppercase tracking-[0.3em] text-[#F5F0E8] transition-colors duration-300 hover:text-[#C9A96E]"
          >
            CLOSE
          </button>
          <div
            aria-hidden="true"
            className="pointer-events-none isolate absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#C9A96E]/5 blur-3xl transform-gpu backface-hidden will-change-transform"
          />
          <ul className="relative z-10 mx-auto flex w-full max-w-sm flex-col items-stretch gap-3">
            {mobileNavLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-4 text-center font-sans text-xl font-light uppercase tracking-[0.25em] text-[#F5F0E8] transition-colors duration-300 hover:text-[#C9A96E] sm:text-2xl"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/book"
                className="mx-auto mt-6 block max-w-xs bg-[#C9A96E] px-8 py-4 text-center font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#0A0A0A] transition-all duration-300 hover:bg-[#B8985D]"
                onClick={closeMenu}
              >
                SECURE YOUR SESSION
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
