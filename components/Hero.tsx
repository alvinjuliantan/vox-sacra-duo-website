import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  title: string;
  subtitle: string;
};

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <Image
        src="/images/alvin-recital-closeup.jpg"
        alt="Alvin Tan in recital"
        fill
        priority
        className="object-cover object-[56%_20%] md:object-[58%_18%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(19,17,16,0.82)_10%,rgba(19,17,16,0.58)_45%,rgba(19,17,16,0.34)_68%,rgba(19,17,16,0.28)_100%)]" />

      <div className="section-shell relative flex min-h-[92vh] items-end pb-20 pt-28 text-ivory md:items-center md:pb-24">
        <div className="max-w-3xl border-l border-warmstone/45 pl-6 md:pl-10">
          <p className="text-xs uppercase tracking-[0.28em] text-warmstone/90">Voice & Piano Partnership</p>
          <h1 className="mt-5 text-5xl leading-[0.98] md:text-7xl">{title}</h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-ivory/88 md:text-xl">{subtitle}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/sacred-recital"
              className="rounded-full border border-warmstone/70 bg-warmstone/90 px-7 py-3 text-xs uppercase tracking-[0.2em] text-charcoal transition hover:bg-ivory"
            >
              Explore Sacred Recital
            </Link>
            <Link
              href="/enquiry"
              className="rounded-full border border-ivory/55 px-7 py-3 text-xs uppercase tracking-[0.2em] text-ivory transition hover:bg-ivory hover:text-charcoal"
            >
              Enquire
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
