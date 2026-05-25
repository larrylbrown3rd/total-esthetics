/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'black-luxury': '#0A0A0A',
        background: '#0A0A0A',
        deep: '#111111',
        card: '#1A1A1A',
        charcoal: '#2C2C2C',
        gold: '#C9A96E',
        'gold-light': '#E8D5A3',
        'gold-dark': '#B8860B',
        cream: '#F5F0E8',
        luxuryText: '#F5F0E8',
        luxuryBorder: '#2C2C2C',
        muted: '#8B8B7A',
        mink: '#3D2B1F',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'serif'],
        'sans-dm': ['var(--font-dm-sans)', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'bounce-line': 'bounceLine 1.5s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        bounceLine: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(8px)', opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
};
