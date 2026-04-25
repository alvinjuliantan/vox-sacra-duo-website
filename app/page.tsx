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
      <section className="section-shell py-24">
        <h2 className="text-4xl text-charcoal md:text-5xl">About the duo</h2>
        <p className="mt-7 max-w-4xl text-lg leading-relaxed text-charcoal/88">{siteContent.intro}</p>
      </section>

      <section className="section-shell pb-10">
        <h2 className="text-4xl text-charcoal md:text-5xl">Performance settings</h2>
        <ul className="mt-8 grid gap-4 text-charcoal/90 sm:grid-cols-2 lg:grid-cols-4">
          {siteContent.performanceSettings.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-taupe/40 bg-white/85 px-5 py-4 leading-relaxed shadow-soft"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="section-shell py-20">
        <h2 className="text-4xl text-charcoal md:text-5xl">Featured sacred repertoire</h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {sacredRepertoire.map((piece) => (
            <li key={piece} className="rounded-xl border border-warmstone/70 bg-ivory/60 px-4 py-3 text-charcoal/90">
              {piece}
            </li>
          ))}
        </ul>
      </section>

      <section className="section-shell py-8">
        <h2 className="text-4xl text-charcoal md:text-5xl">Artist preview</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {artists.map((artist) => (
            <article
              key={artist.name}
              className="rounded-2xl border border-taupe/45 bg-white/88 p-7 shadow-soft md:p-8"
            >
              <h3 className="text-3xl text-charcoal">{artist.name}</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.23em] text-olive">{artist.role}</p>
              <p className="mt-5 text-charcoal/85 leading-relaxed">{artist.bio[0]}</p>
            </article>
          ))}
        </div>
        <Link
          href="/artists"
          className="mt-8 inline-block text-sm uppercase tracking-[0.14em] text-bronze underline-offset-4 hover:underline"
        >
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
