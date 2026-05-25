import Link from 'next/link';
import { BRAND_TAGLINE_UPPER } from '@/lib/data';

const sizes = {
  nav: {
    wordmark: 'text-xl md:text-2xl',
    tagline: 'text-[0.45em]',
  },
  hero: {
    wordmark: 'text-6xl md:text-8xl lg:text-9xl',
    tagline: 'text-[10px] md:text-xs mt-4',
  },
  footer: {
    wordmark: 'text-3xl',
    tagline: 'text-[10px] mt-2',
  },
  book: {
    wordmark: 'text-4xl',
    tagline: 'text-[10px] mt-2',
  },
};

export default function Logo({
  size = 'nav',
  href = '/',
  showTagline = true,
  className = '',
  asLink = true,
  /** Use on nav / video backgrounds — lighter ESTHETICS + tagline */
  contrast = 'default',
}) {
  const s = sizes[size] || sizes.nav;
  const estheticsClass =
    contrast === 'high'
      ? `${s.wordmark} font-cormorant font-light uppercase tracking-[0.2em] text-cream/85`
      : `logo-esthetics ${s.wordmark}`;
  const taglineClass =
    contrast === 'high'
      ? `${s.tagline} font-sans-dm font-light uppercase tracking-[0.35em] text-cream/60`
      : `logo-tagline label ${s.tagline}`;

  const inner = (
    <div className={`logo ${className}`}>
      <div className={`logo-wordmark leading-none ${size === 'hero' ? 'text-center' : ''}`}>
        <span className={`logo-total logo-total-gradient ${s.wordmark}`}>TOTAL</span>
        <span className={estheticsClass}>ESTHETICS</span>
      </div>
      {showTagline && (
        <p className={taglineClass}>{BRAND_TAGLINE_UPPER}</p>
      )}
    </div>
  );

  if (!asLink) return inner;

  return (
    <Link href={href} className="block">
      {inner}
    </Link>
  );
}
