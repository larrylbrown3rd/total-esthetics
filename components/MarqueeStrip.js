const marqueeItems = [
  'LASH EXTENSIONS',
  'BROW LAMINATION',
  'WAXING',
  'LASH LIFT',
  'BROW TINT',
  'FACIALS',
  'HAPEVILLE GA',
  'TOTAL ESTHETICS',
  'BOOK ONLINE',
];

function buildMarqueeText(items) {
  return items.map((item) => `${item} ◆ `).join('');
}

export default function MarqueeStrip() {
  const text = buildMarqueeText(marqueeItems).repeat(4);

  return (
    <div className="relative z-10 w-full overflow-x-hidden border-y border-gold-dark/30 bg-[#C9A96E] py-2.5">
      <div className="flex w-max animate-marquee">
        <span className="whitespace-nowrap px-6 font-sans-dm text-[10px] font-bold uppercase tracking-[0.35em] text-black-luxury">
          {text}
        </span>
        <span
          className="whitespace-nowrap px-6 font-sans-dm text-[10px] font-bold uppercase tracking-[0.35em] text-black-luxury"
          aria-hidden="true"
        >
          {text}
        </span>
      </div>
    </div>
  );
}
