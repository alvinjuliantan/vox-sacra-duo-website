import Link from "next/link";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import { siteContent } from "@/data/siteContent";
import { sacredRepertoire } from "@/data/repertoire";

export default function HomePage() {
  return (
    <>
      <Hero title={siteContent.brand} subtitle={siteContent.tagline} />

      <section className="section-shell py-24 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-olive">Artistic Positioning</p>
            <h2 className="mt-5 text-4xl leading-tight text-charcoal md:text-6xl">Sacred and classical music for intimate, meaningful spaces.</h2>
          </div>
          <p className="text-lg leading-relaxed text-charcoal/84 md:pt-12">{siteContent.intro}</p>
        </div>
      </section>

      <section className="section-shell pb-20 md:pb-24">
        <div className="grid gap-10 border-y border-taupe/45 py-12 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-olive">Performance Contexts</p>
            <ul className="mt-5 space-y-3 text-lg leading-relaxed text-charcoal/88">
              {siteContent.performanceSettings.map((item) => (
                <li key={item} className="border-b border-taupe/30 pb-3 last:border-b-0">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-olive">Selected Sacred Repertoire</p>
            <ul className="mt-5 grid gap-3 text-charcoal/88 sm:grid-cols-2">
              {sacredRepertoire.map((piece) => (
                <li key={piece} className="border-b border-taupe/30 pb-3">{piece}</li>
              ))}
            </ul>
            <Link href="/repertoire" className="mt-8 inline-block text-sm uppercase tracking-[0.16em] text-bronze hover:text-charcoal">
              View complete repertoire →
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell pb-24">
        <CTASection
          title="Programme Enquiry"
          text="For chapel recitals, private salons, weddings, memorials, and curated cultural programmes, share your preferred date and venue and we will propose a suitable format."
          buttonLabel="Send Enquiry"
          buttonLink="/enquiry"
        />
      </section>
    </>
  );
}
