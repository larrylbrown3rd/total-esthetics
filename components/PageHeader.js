/**
 * Shared page title block — matches Services “Book an Appointment / Select Category” styling.
 */
export default function PageHeader({ eyebrow, title, subtitle, className = 'mb-12' }) {
  return (
    <header className={`text-center ${className}`}>
      <span className="mb-2 block font-sans-dm text-xs uppercase tracking-[0.3em] text-gold">
        {eyebrow}
      </span>
      <h1 className="font-cormorant text-3xl font-light uppercase tracking-wide text-luxuryText md:text-5xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-3 font-sans-dm text-xs uppercase tracking-[0.3em] text-gold">
          {subtitle}
        </p>
      )}
    </header>
  );
}
