import Link from "next/link";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import { artists } from "@/data/artists";

const settings = [
  "Chapels and churches",
  "Private salons",
  "Curated cultural spaces",
  "Weddings and memorials",
  "Intimate recital evenings",
];

export default function HomePage() {
  return (
    <>
      <Hero
        title="Sacred and Classical Music for Intimate, Meaningful Gatherings"
        subtitle="Baritone Alvin Tan and pianist Wayne Teo present programmes shaped with reverence, musical clarity, and recital artistry."
      />

      <section className="section-shell py-20 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <p className="section-intro">About</p>
            <h2 className="mt-4 text-4xl md:text-5xl">An artistic partnership in voice and piano</h2>
            <p className="mt-6 max-w-2xl text-lg text-charcoal/84">
              Vox Sacra Duo brings together sacred repertoire, classical song, and reflective recital
              programming for occasions where music is received in close listening. Each performance is
              prepared with sensitivity to venue, audience, and purpose.
            </p>
          </div>
          <ul className="space-y-4 border-l border-stone pl-6 text-charcoal/88">
            {settings.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-shell py-8">
        <div className="editorial-panel">
          <p className="section-intro">Artists</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Musicianship rooted in text, tone, and stillness</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {artists.map((artist) => (
              <article key={artist.name}>
                <h3 className="text-3xl md:text-4xl">{artist.name}</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-bronze">{artist.role}</p>
                <p className="mt-5 text-charcoal/84">{artist.bio[0]}</p>
              </article>
            ))}
          </div>
          <Link href="/artists" className="link-elegant mt-9 inline-block">
            Read Artist Biographies
          </Link>
        </div>
      </section>

      <section className="section-shell py-12 md:py-16">
        <CTASection
          title="Plan a sacred or private recital"
          text="Share your venue, occasion, and preferred dates. We will respond with a suitable programme approach for your setting."
          buttonLabel="Send an Enquiry"
          buttonLink="/enquiry"
        />
      </section>
    </>
  );
}
