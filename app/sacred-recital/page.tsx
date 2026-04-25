import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { sacredRepertoire } from "@/data/repertoire";

const formats = [
  "30-minute sacred reflection",
  "45-minute chapel recital",
  "60-minute curated sacred programme",
  "Custom programme for weddings, memorials, and parish events",
];

export default function SacredRecitalPage() {
  return (
    <>
      <PageHeader
        title="Sacred Recital"
        subtitle="Music prepared for spaces of prayer, remembrance, reflection, and beauty."
      />

      <section className="section-shell grid gap-10 pb-16 md:grid-cols-[1.05fr_0.95fr] md:items-start">
        <div>
          <p className="max-w-2xl text-lg text-charcoal/84">
            Vox Sacra Duo presents sacred recitals for chapels, churches, and intimate ceremonial settings.
            Programmes are built with sensitivity to liturgical context, audience, and emotional tone.
          </p>
          <div className="editorial-panel mt-10">
            <p className="section-intro">Sample repertoire</p>
            <ul className="mt-6 space-y-3 border-l border-stone/80 pl-6 text-charcoal/88">
              {sacredRepertoire.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="editorial-panel mt-2">
            <p className="section-intro">Programme formats</p>
            <ul className="mt-6 space-y-3 border-l border-stone/80 pl-6 text-charcoal/88">
              {formats.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative min-h-[560px] overflow-hidden border border-stone/60 shadow-elegant md:min-h-[700px]">
          <Image
            src="/images/alvin-sacred-chapel.jpg"
            alt="Sacred chapel performance"
            fill
            className="object-cover object-[54%_22%]"
            priority
          />
        </div>
      </section>

      <section className="section-shell pb-16">
        <CTASection
          title="Plan a sacred recital"
          text="For churches, chapels, memorial gatherings, and reflective ceremonies, we can shape a programme suited to your space and occasion."
          buttonLabel="Begin Enquiry"
          buttonLink="/enquiry"
        />
      </section>
    </>
  );
}
