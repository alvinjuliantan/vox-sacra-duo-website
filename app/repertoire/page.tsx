import PageHeader from "@/components/PageHeader";
import RepertoireSection from "@/components/RepertoireSection";
import { repertoireSections } from "@/data/repertoire";

export default function RepertoirePage() {
  return (
    <>
      <PageHeader
        title="Repertoire"
        subtitle="Sacred, classical, and inspirational works curated for intimate performance settings."
      />
      <section className="section-shell pb-24">
        <p className="max-w-4xl text-lg text-charcoal/84">
          Programmes may be adapted to venue, liturgical context, ceremony flow, and audience profile.
          Repertoire listings are representative and may be tailored in consultation.
        </p>
        <div className="mt-10 grid gap-3">
          {repertoireSections.map((section) => (
            <RepertoireSection
              key={section.title}
              title={section.title}
              items={section.items}
              description={section.description}
            />
          ))}
        </div>
      </section>
    </>
  );
}
