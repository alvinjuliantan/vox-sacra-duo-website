import Link from "next/link";

type CTASectionProps = {
  title: string;
  text: string;
  buttonLabel: string;
  buttonLink: string;
};

export default function CTASection({ title, text, buttonLabel, buttonLink }: CTASectionProps) {
  return (
    <section className="rounded-2xl border border-olive/20 bg-gradient-to-br from-charcoal to-bronze px-8 py-14 text-ivory shadow-elegant md:px-12">
      <h2 className="text-3xl md:text-4xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-ivory/90">{text}</p>
      <Link
        href={buttonLink}
        className="mt-8 inline-block rounded-full bg-mutedgold px-7 py-3 text-sm uppercase tracking-[0.18em] text-charcoal transition hover:bg-warmstone"
      >
        {buttonLabel}
      </Link>
    </section>
  );
}
