import PageHeader from "@/components/PageHeader";
import RepertoireSection from "@/components/RepertoireSection";
import { repertoireSections } from "@/data/repertoire";

export default function RepertoirePage() {
  return (
    <>
      <PageHeader
        title="Repertoire"
        subtitle="Sacred, classical, and inspirational programmes for intimate and meaningful settings"
      />
      <section className="section-shell section-gap grid gap-6 md:gap-8">
        {repertoireSections.map((section) => (
          <RepertoireSection
            key={section.title}
            title={section.title}
            items={section.items}
            description={section.description}
          />
        ))}
      </section>
    </>
  );
}
