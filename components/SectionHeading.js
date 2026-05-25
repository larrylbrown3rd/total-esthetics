export default function SectionHeading({ eyebrow, title, subtitle, className = '' }) {
  return (
    <div className={`mb-16 text-center ${className}`}>
      {eyebrow && <p className="label mb-4 text-muted">{eyebrow}</p>}
      <h2 className="font-cormorant text-4xl font-bold uppercase tracking-[0.2em] text-[#C9A96E] md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="font-cormorant mt-2 text-2xl font-light tracking-wide text-charcoal">
          {subtitle}
        </p>
      )}
      <div className="gold-divider mt-6" />
    </div>
  );
}
