import PageHeader from "@/components/PageHeader";
import EnquiryForm from "@/components/EnquiryForm";

export default function EnquiryPage() {
  return (
    <>
      <PageHeader title="Enquiry" subtitle="Book Vox Sacra Duo for your event or recital series" />
      <section className="section-shell py-14">
        <p className="max-w-3xl text-lg leading-relaxed text-charcoal/90">
          Vox Sacra Duo is available for sacred recitals, chapel concerts, church services, weddings,
          memorials, private gatherings, and bespoke classical programmes.
        </p>
      </section>
      <section className="section-shell pb-20">
        <EnquiryForm />
      </section>
    </>
  );
}
