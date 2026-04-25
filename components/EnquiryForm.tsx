export default function EnquiryForm() {
  return (
    <form className="grid gap-5 rounded-md border border-stone/70 bg-white p-8 shadow-elegant md:grid-cols-2">
      <label className="grid gap-2">
        <span className="text-sm uppercase tracking-wide text-charcoal/80">Name</span>
        <input className="rounded-sm border border-stone px-3 py-2" type="text" name="name" />
      </label>
      <label className="grid gap-2">
        <span className="text-sm uppercase tracking-wide text-charcoal/80">Email</span>
        <input className="rounded-sm border border-stone px-3 py-2" type="email" name="email" />
      </label>
      <label className="grid gap-2">
        <span className="text-sm uppercase tracking-wide text-charcoal/80">Phone or WhatsApp</span>
        <input className="rounded-sm border border-stone px-3 py-2" type="text" name="phone" />
      </label>
      <label className="grid gap-2">
        <span className="text-sm uppercase tracking-wide text-charcoal/80">Event type</span>
        <input className="rounded-sm border border-stone px-3 py-2" type="text" name="eventType" />
      </label>
      <label className="grid gap-2">
        <span className="text-sm uppercase tracking-wide text-charcoal/80">Venue</span>
        <input className="rounded-sm border border-stone px-3 py-2" type="text" name="venue" />
      </label>
      <label className="grid gap-2">
        <span className="text-sm uppercase tracking-wide text-charcoal/80">Preferred date</span>
        <input className="rounded-sm border border-stone px-3 py-2" type="date" name="preferredDate" />
      </label>
      <label className="grid gap-2 md:col-span-2">
        <span className="text-sm uppercase tracking-wide text-charcoal/80">Message</span>
        <textarea className="min-h-40 rounded-sm border border-stone px-3 py-2" name="message" />
      </label>
      <button
        type="submit"
        className="md:col-span-2 rounded-sm bg-burgundy px-6 py-3 text-sm uppercase tracking-[0.2em] text-ivory transition hover:bg-warmblack"
      >
        Send Enquiry
      </button>
    </form>
  );
}
