import Link from "next/link";

type CTASectionProps = {
  title: string;
  text: string;
  buttonLabel: string;
  buttonLink: string;
};

export default function CTASection({ title, text, buttonLabel, buttonLink }: CTASectionProps) {
  return (
    <section className="rounded-[1.9rem] border border-taupe/35 bg-[linear-gradient(150deg,rgba(22,20,19,0.95),rgba(48,41,35,0.9))] px-8 py-14 text-ivory shadow-elegant md:px-12 md:py-16">
      <p className="text-xs uppercase tracking-[0.24em] text-warmstone/80">Vox Sacra Duo</p>
      <h2 className="mt-4 text-4xl leading-tight md:text-5xl">{title}</h2>
      <p className="mt-5 max-w-2xl text-ivory/86 leading-relaxed">{text}</p>
      <Link
        href={buttonLink}
        className="mt-9 inline-block rounded-full border border-warmstone/70 bg-warmstone px-7 py-3 text-xs uppercase tracking-[0.2em] text-charcoal transition hover:bg-ivory"
      >
        {buttonLabel}
      </Link>
    </section>
  );
}
