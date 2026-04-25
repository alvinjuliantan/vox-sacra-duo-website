import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import { siteContent } from "@/data/siteContent";
import { artists } from "@/data/artists";
import { sacredRepertoire } from "@/data/repertoire";

export default function HomePage() {
  return (
    <>
      <Hero title={siteContent.brand} subtitle={siteContent.tagline} />

      <section className="section-shell section-gap">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-olive/70">About the duo</p>
            <h2 className="mt-4 text-4xl md:text-5xl">A warm sacred voice and piano presence</h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-charcoal/82">{siteContent.intro}</p>
          </div>
          <div className="soft-panel p-6 md:p-7">
            <p className="text-xs uppercase tracking-[0.25em] text-olive/70">Performance settings</p>
            <ul className="mt-5 grid gap-2 text-charcoal/85 sm:grid-cols-2">
              {siteContent.performanceSettings.map((item) => (
                <li key={item} className="rounded-xl bg-white/75 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-shell pb-16 md:pb-24">
        <div className="soft-panel overflow-hidden">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[320px]">
              {/* Replace /images/alvin-wayne-duo-hero.jpg with your best duo performance image. */}
              <Image
                src="/images/alvin-wayne-duo-hero.jpg"
                alt="Vox Sacra Duo in performance"
                fill
                className="object-cover"
              />
            </div>
            <div className="px-7 py-8 md:px-10 md:py-10">
              <p className="text-xs uppercase tracking-[0.3em] text-olive/70">Featured sacred repertoire</p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {sacredRepertoire.slice(0, 8).map((piece) => (
                  <li key={piece} className="rounded-xl border border-stone/45 bg-white/80 px-4 py-2.5 text-charcoal/88">
                    {piece}
                  </li>
                ))}
              </ul>
              <Link href="/repertoire" className="mt-6 inline-block text-sm tracking-wide text-charcoal/75 underline underline-offset-4">
                View complete repertoire
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pb-16 md:pb-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-olive/70">Artist preview</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Alvin Tan & Wayne Teo</h2>
          </div>
          <Link href="/artists" className="hidden rounded-full border border-stone/70 px-5 py-2 text-sm text-charcoal/80 md:inline-block">
            Full biographies
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {artists.map((artist) => (
            <article key={artist.name} className="soft-panel p-6 md:p-7">
              <h3 className="text-3xl">{artist.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-olive/70">{artist.role}</p>
              <p className="mt-4 leading-relaxed text-charcoal/82">{artist.bio[0]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pb-10">
        <CTASection
          title="Enquiry"
          text="Share your venue, occasion, and preferred dates, and we will shape a meaningful programme for your space and audience."
          buttonLabel="Enquire for a Performance"
          buttonLink="/enquiry"
        />
      </section>
    </>
  );
}
