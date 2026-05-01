import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  title: string;
  subtitle: string;
};

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="relative min-h-[76vh] overflow-hidden md:min-h-[92vh]">
      <Image
        src="/images/vox-sacra-duo-stage.jpg"
        alt="Vox Sacra Duo on stage. Wayne Teo at Steinway, Alvin Tan singing."
        fill
        className="object-cover object-[60%_22%] md:object-[50%_22%]"
        priority
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="section-shell relative flex min-h-[76vh] flex-col justify-end py-16 text-ivory md:min-h-[92vh] md:py-24">
        <p className="section-intro !text-parchment/90">Voice and Piano Partnership</p>
        <h1 className="mt-5 max-w-4xl text-5xl leading-[1.01] text-ivory md:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-parchment md:text-xl">{subtitle}</p>
        <div className="mt-11 flex flex-wrap gap-7">
          <Link href="/sacred-recital" className="link-elegant !text-parchment hover:!text-ivory">
            Explore Sacred Recitals
          </Link>
          <Link href="/enquiry" className="link-elegant !text-parchment hover:!text-ivory">
            Enquire for a Performance
          </Link>
        </div>
      </div>
    </section>
  );
}
