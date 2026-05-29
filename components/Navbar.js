'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BRAND_TAGLINE_UPPER } from '@/lib/data';

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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const linkClass = (href) => {
    const active =
      href === '/'
        ? pathname === '/'
        : pathname === href || pathname.startsWith(`${href}/`);
    return `font-sans-dm text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${
      active ? 'text-[#C9A96E]' : 'text-cream hover:text-[#E8D5A3]'
    }`;
  };

  const mobileMenu =
    menuOpen && mounted
      ? createPortal(
          <div
            className="fixed inset-0 z-[99999] flex h-screen w-full transform-gpu flex-col items-center justify-center bg-[#0A0A0A] px-6 transition-all duration-300 ease-in-out md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="absolute right-6 top-6 border border-[#3D2B1F]/30 bg-[#111111] p-4 text-sm font-light tracking-widest text-[#F5F0E8]/70 transition-colors duration-300 hover:text-[#C9A96E]"
            >
              ✕
            </button>

            <div className="my-auto flex w-full flex-col items-center justify-center space-y-8 overflow-y-auto py-24 text-center">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="block w-full py-1 font-sans text-lg font-light uppercase tracking-[0.25em] text-[#F5F0E8] transition-all duration-300 hover:text-[#C9A96E]"
              >
                Home
              </Link>
              <Link
                href="/services"
                onClick={() => setMenuOpen(false)}
                className="block w-full py-1 font-sans text-lg font-light uppercase tracking-[0.25em] text-[#F5F0E8] transition-all duration-300 hover:text-[#C9A96E]"
              >
                Services
              </Link>
              <Link
                href="/gallery"
                onClick={() => setMenuOpen(false)}
                className="block w-full py-1 font-sans text-lg font-light uppercase tracking-[0.25em] text-[#F5F0E8] transition-all duration-300 hover:text-[#C9A96E]"
              >
                Gallery
              </Link>
              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className="block w-full py-1 font-sans text-lg font-light uppercase tracking-[0.25em] text-[#F5F0E8] transition-all duration-300 hover:text-[#C9A96E]"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="block w-full py-1 font-sans text-lg font-light uppercase tracking-[0.25em] text-[#F5F0E8] transition-all duration-300 hover:text-[#C9A96E]"
              >
                Contact
              </Link>
              <Link
                href="/terms"
                onClick={() => setMenuOpen(false)}
                className="block w-full py-1 font-sans text-lg font-light uppercase tracking-[0.25em] text-[#F5F0E8] transition-all duration-300 hover:text-[#C9A96E]"
              >
                Policies
              </Link>

              <div className="mx-auto w-full max-w-xs pt-6">
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block bg-[#C9A96E] px-8 py-4 text-center font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#0A0A0A] transition-all duration-300 hover:bg-[#B8985D]"
                >
                  SECURE YOUR SESSION
                </Link>
              </div>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <>
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
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-none border border-charcoal/50 bg-[#111111] md:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
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
      </header>

      {mobileMenu}
    </>
  );
}
