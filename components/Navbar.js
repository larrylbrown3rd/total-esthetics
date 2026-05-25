'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BRAND_TAGLINE_UPPER } from '@/lib/data';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
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
        <span className="ml-1.5 font-cormorant text-lg font-light uppercase tracking-[0.15em] text-[#555555]">
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
    const active = pathname === href || pathname.startsWith(`${href}/`);
    return `font-sans-dm text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${
      active ? 'text-[#C9A96E]' : 'text-cream hover:text-[#E8D5A3]'
    }`;
  };

  return (
    <header
      className={`fixed top-[2px] z-50 w-full transition-all duration-500 ${
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
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black-luxury/98 backdrop-blur-md md:hidden">
          <ul className="flex flex-col items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-cormorant text-3xl font-light uppercase tracking-[0.2em] text-cream"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/book"
                className="rounded-none bg-[#C9A96E] px-10 py-4 font-sans-dm text-xs uppercase tracking-[0.25em] text-[#0A0A0A] transition-all duration-300 hover:bg-transparent hover:text-[#C9A96E] hover:outline hover:outline-1 hover:outline-[#C9A96E]"
                onClick={closeMenu}
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
