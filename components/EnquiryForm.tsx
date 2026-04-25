export default function EnquiryForm() {
  return (
    <form className="grid gap-5 rounded-2xl border border-taupe/50 bg-white/90 p-8 shadow-soft md:grid-cols-2 md:p-10">
      <label className="grid gap-2">
        <span className="text-xs uppercase tracking-[0.14em] text-charcoal/75">Name</span>
        <input className="rounded-xl border border-taupe/70 bg-ivory/50 px-4 py-3" type="text" name="name" />
      </label>
      <label className="grid gap-2">
        <span className="text-xs uppercase tracking-[0.14em] text-charcoal/75">Email</span>
        <input className="rounded-xl border border-taupe/70 bg-ivory/50 px-4 py-3" type="email" name="email" />
      </label>
      <label className="grid gap-2">
        <span className="text-xs uppercase tracking-[0.14em] text-charcoal/75">Phone or WhatsApp</span>
        <input className="rounded-xl border border-taupe/70 bg-ivory/50 px-4 py-3" type="text" name="phone" />
      </label>
      <label className="grid gap-2">
        <span className="text-xs uppercase tracking-[0.14em] text-charcoal/75">Event type</span>
        <input className="rounded-xl border border-taupe/70 bg-ivory/50 px-4 py-3" type="text" name="eventType" />
      </label>
      <label className="grid gap-2">
        <span className="text-xs uppercase tracking-[0.14em] text-charcoal/75">Venue</span>
        <input className="rounded-xl border border-taupe/70 bg-ivory/50 px-4 py-3" type="text" name="venue" />
      </label>
      <label className="grid gap-2">
        <span className="text-xs uppercase tracking-[0.14em] text-charcoal/75">Preferred date</span>
        <input className="rounded-xl border border-taupe/70 bg-ivory/50 px-4 py-3" type="date" name="preferredDate" />
      </label>
      <label className="grid gap-2 md:col-span-2">
        <span className="text-xs uppercase tracking-[0.14em] text-charcoal/75">Message</span>
        <textarea className="min-h-40 rounded-xl border border-taupe/70 bg-ivory/50 px-4 py-3" name="message" />
      </label>
      <button
        type="submit"
        className="md:col-span-2 rounded-full bg-bronze px-6 py-3 text-sm uppercase tracking-[0.2em] text-ivory transition hover:bg-charcoal"
      >
        Send Enquiry
      </button>
    </form>
  );
}
