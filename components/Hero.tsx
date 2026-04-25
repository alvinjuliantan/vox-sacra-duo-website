import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  title: string;
  subtitle: string;
};

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="relative min-h-[84vh] overflow-hidden">
      <Image
        src="/images/alvin-recital-closeup.jpg"
        alt="Alvin Tan in recital"
        fill
        className="object-cover object-[58%_22%]"
        priority
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="section-shell relative flex min-h-[84vh] flex-col justify-center py-24 text-ivory">
        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-warmstone/95">Vox Sacra Duo</p>
        <h1 className="max-w-3xl text-5xl leading-[1.03] md:text-7xl">{title}</h1>
        <p className="mt-7 max-w-2xl text-lg text-ivory/90 md:text-xl">{subtitle}</p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Link
            href="/sacred-recital"
            className="rounded-full bg-mutedgold px-7 py-3 text-sm uppercase tracking-[0.18em] text-charcoal transition hover:bg-warmstone"
          >
            Sacred Recital
          </Link>
          <Link
            href="/enquiry"
            className="rounded-full border border-ivory/70 px-7 py-3 text-sm uppercase tracking-[0.18em] text-ivory transition hover:bg-ivory hover:text-charcoal"
          >
            Enquire for a Performance
          </Link>
        </div>
      </div>
    </section>
  );
}
