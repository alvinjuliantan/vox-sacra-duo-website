import Link from "next/link";

type CTASectionProps = {
  title: string;
  text: string;
  buttonLabel: string;
  buttonLink: string;
};

export default function CTASection({ title, text, buttonLabel, buttonLink }: CTASectionProps) {
  return (
    <section className="editorial-panel">
      <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-end">
        <div>
          <p className="section-intro">Enquiries</p>
          <h2 className="mt-3 text-4xl md:text-5xl">{title}</h2>
          <p className="mt-5 max-w-3xl text-charcoal/84">{text}</p>
        </div>
        <div className="md:justify-self-end">
          <Link
            href={buttonLink}
            className="inline-block border-b border-antique pb-2 text-xs uppercase tracking-[0.22em] text-warmblack transition hover:text-bronze"
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
