import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';
import { defaultMetadata } from '@/lib/data';
import CursorGlow from '@/components/CursorGlow';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata = {
  ...defaultMetadata,
  title: 'Total Esthetics - Lash & Brow Studio | Hapeville, GA',
  description:
    'Premier lash and brow studio in Hapeville, GA. Book luxury lash extensions, brow lamination, and artistry online.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${dmSans.variable} font-sans-dm antialiased`}
      >
        <div
          className="fixed top-0 z-[60] h-[2px] w-full bg-[#C9A96E] transform-gpu backface-hidden will-change-transform"
          aria-hidden="true"
        />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
