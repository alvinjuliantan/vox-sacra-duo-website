export default function EnquiryForm() {
  return (
    <form className="grid gap-6 border-t border-taupe/45 pt-8 md:grid-cols-2">
      <label className="grid gap-2">
        <span className="text-xs uppercase tracking-[0.15em] text-charcoal/74">Name</span>
        <input className="rounded-xl border border-taupe/65 bg-ivory/60 px-4 py-3" type="text" name="name" />
      </label>
      <label className="grid gap-2">
        <span className="text-xs uppercase tracking-[0.15em] text-charcoal/74">Email</span>
        <input className="rounded-xl border border-taupe/65 bg-ivory/60 px-4 py-3" type="email" name="email" />
      </label>
      <label className="grid gap-2">
        <span className="text-xs uppercase tracking-[0.15em] text-charcoal/74">Phone or WhatsApp</span>
        <input className="rounded-xl border border-taupe/65 bg-ivory/60 px-4 py-3" type="text" name="phone" />
      </label>
      <label className="grid gap-2">
        <span className="text-xs uppercase tracking-[0.15em] text-charcoal/74">Event type</span>
        <input className="rounded-xl border border-taupe/65 bg-ivory/60 px-4 py-3" type="text" name="eventType" />
      </label>
      <label className="grid gap-2">
        <span className="text-xs uppercase tracking-[0.15em] text-charcoal/74">Venue</span>
        <input className="rounded-xl border border-taupe/65 bg-ivory/60 px-4 py-3" type="text" name="venue" />
      </label>
      <label className="grid gap-2">
        <span className="text-xs uppercase tracking-[0.15em] text-charcoal/74">Preferred date</span>
        <input className="rounded-xl border border-taupe/65 bg-ivory/60 px-4 py-3" type="date" name="preferredDate" />
      </label>
      <label className="grid gap-2 md:col-span-2">
        <span className="text-xs uppercase tracking-[0.15em] text-charcoal/74">Message</span>
        <textarea className="min-h-40 rounded-xl border border-taupe/65 bg-ivory/60 px-4 py-3" name="message" />
      </label>
      <button
        type="submit"
        className="md:col-span-2 mt-2 w-fit rounded-full bg-bronze px-7 py-3 text-xs uppercase tracking-[0.2em] text-ivory transition hover:bg-charcoal"
      >
        Send Enquiry
      </button>
    </form>
  );
}
