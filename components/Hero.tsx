import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  title: string;
  subtitle: string;
};

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="relative min-h-[78vh] overflow-hidden">
      {/* Replace /images/alvin-wayne-duo-hero.jpg with your final hero image */}
      <Image
        src="/images/alvin-wayne-duo-hero.jpg"
        alt="Vox Sacra Duo in performance"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-soft-gradient" />
      <div className="section-shell relative flex min-h-[78vh] flex-col justify-center py-20 text-ivory">
        <h1 className="max-w-3xl text-5xl leading-tight md:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-ivory/90 md:text-xl">{subtitle}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/sacred-recital"
            className="rounded-sm bg-gold px-6 py-3 text-sm uppercase tracking-wider text-warmblack transition hover:bg-stone"
          >
            Sacred Recital
          </Link>
          <Link
            href="/enquiry"
            className="rounded-sm border border-ivory/70 px-6 py-3 text-sm uppercase tracking-wider text-ivory transition hover:bg-ivory hover:text-warmblack"
          >
            Enquire for a Performance
          </Link>
        </div>
      </div>
    </section>
  );
}
