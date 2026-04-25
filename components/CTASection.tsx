import Link from "next/link";

type CTASectionProps = {
  title: string;
  text: string;
  buttonLabel: string;
  buttonLink: string;
};

export default function CTASection({ title, text, buttonLabel, buttonLink }: CTASectionProps) {
  return (
    <section className="rounded-md bg-burgundy px-8 py-12 text-ivory shadow-elegant md:px-12">
      <h2 className="text-3xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-ivory/90">{text}</p>
      <Link
        href={buttonLink}
        className="mt-8 inline-block rounded-sm bg-gold px-6 py-3 text-sm uppercase tracking-[0.18em] text-warmblack transition hover:bg-stone"
      >
        {buttonLabel}
      </Link>
    </section>
  );
}
