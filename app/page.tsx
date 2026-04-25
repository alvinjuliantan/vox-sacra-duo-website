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
      <section className="section-shell py-20">
        <h2 className="text-3xl text-burgundy md:text-4xl">About the duo</h2>
        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-charcoal/90">{siteContent.intro}</p>
      </section>

      <section className="section-shell py-8">
        <h2 className="text-3xl text-burgundy md:text-4xl">Performance settings</h2>
        <ul className="mt-8 grid gap-3 text-charcoal/90 sm:grid-cols-2 lg:grid-cols-4">
          {siteContent.performanceSettings.map((item) => (
            <li key={item} className="rounded-sm border border-stone/60 bg-white px-4 py-3 shadow-elegant">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="section-shell py-20">
        <h2 className="text-3xl text-burgundy md:text-4xl">Featured sacred repertoire</h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {sacredRepertoire.map((piece) => (
            <li key={piece} className="border-b border-stone/60 pb-2 text-charcoal/90">
              {piece}
            </li>
          ))}
        </ul>
      </section>

      <section className="section-shell py-8">
        <h2 className="text-3xl text-burgundy md:text-4xl">Artist preview</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {artists.map((artist) => (
            <article key={artist.name} className="rounded-md border border-stone/70 bg-white p-6 shadow-elegant">
              <h3 className="text-2xl text-burgundy">{artist.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gold">{artist.role}</p>
              <p className="mt-4 text-charcoal/85">{artist.bio[0]}</p>
            </article>
          ))}
        </div>
        <Link href="/artists" className="mt-6 inline-block text-burgundy underline-offset-4 hover:underline">
          Read full biographies
        </Link>
      </section>

      <section className="section-shell py-20">
        <CTASection
          title="Enquiry"
          text="Share your venue, occasion, and preferred dates, and we will propose a suitable programme for your space and audience."
          buttonLabel="Enquire for a Performance"
          buttonLink="/enquiry"
        />
      </section>
    </>
  );
}
