import PageHeader from "@/components/PageHeader";
import EnquiryForm from "@/components/EnquiryForm";

export default function EnquiryPage() {
  return (
    <>
      <PageHeader
        title="Enquiry"
        subtitle="For sacred recitals, private events, weddings, memorials, and curated cultural programmes."
      />
      <section className="section-shell pb-24">
        <p className="max-w-3xl text-lg text-charcoal/84">
          Share your event details and preferred dates. We will respond with availability and a programme
          approach suited to your venue and occasion.
        </p>
        <div className="mt-10">
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
