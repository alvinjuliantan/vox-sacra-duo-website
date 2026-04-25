import Link from "next/link";

type CTASectionProps = {
  title: string;
  text: string;
  buttonLabel: string;
  buttonLink: string;
};

export default function CTASection({ title, text, buttonLabel, buttonLink }: CTASectionProps) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-stone/60 bg-[#f4efe7] px-8 py-12 shadow-float md:px-12 md:py-14">
      <div className="absolute -right-8 -top-8 h-44 w-44 rounded-full bg-gold/10 blur-2xl" />
      <div className="relative">
        <h2 className="text-3xl md:text-4xl">{title}</h2>
        <p className="mt-4 max-w-2xl text-charcoal/80">{text}</p>
        <Link
          href={buttonLink}
          className="mt-8 inline-block rounded-full bg-charcoal px-6 py-3 text-sm uppercase tracking-[0.16em] text-ivory transition hover:bg-olive"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
