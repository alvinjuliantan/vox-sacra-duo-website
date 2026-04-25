import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  title: string;
  subtitle: string;
};

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="section-shell pt-8 md:pt-12">
      <div className="relative min-h-[74vh] overflow-hidden rounded-[2rem] border border-stone/45 shadow-mist">
        {/* Replace /images/alvin-recital-closeup.jpg with your final homepage hero image (close-up recital portrait). */}
        <Image
          src="/images/alvin-recital-closeup.jpg"
          alt="Vox Sacra Duo recital portrait"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-veil" />

        <div className="section-shell relative flex min-h-[74vh] items-end py-14 md:py-20">
          <div className="max-w-3xl rounded-3xl border border-white/25 bg-[#1b1916]/42 p-8 backdrop-blur-sm md:p-10">
            <p className="text-xs uppercase tracking-[0.32em] text-stone/90">Voice & Piano Partnership</p>
            <h1 className="mt-3 text-5xl leading-[0.95] text-ivory md:text-7xl">{title}</h1>
            <p className="mt-6 max-w-2xl text-lg text-ivory/90 md:text-xl">{subtitle}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/sacred-recital"
                className="rounded-full bg-ivory px-6 py-3 text-sm font-medium uppercase tracking-[0.16em] text-charcoal transition hover:bg-white"
              >
                Sacred Recital
              </Link>
              <Link
                href="/enquiry"
                className="rounded-full border border-ivory/70 px-6 py-3 text-sm font-medium uppercase tracking-[0.16em] text-ivory transition hover:bg-ivory/15"
              >
                Enquire for a Performance
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
