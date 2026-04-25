export default function EnquiryForm() {
  return (
    <form className="soft-panel grid gap-5 p-7 md:grid-cols-2 md:p-10">
      <label className="grid gap-2">
        <span className="text-xs uppercase tracking-[0.2em] text-charcoal/70">Name</span>
        <input className="rounded-2xl border border-stone/70 bg-white/90 px-4 py-3" type="text" name="name" />
      </label>
      <label className="grid gap-2">
        <span className="text-xs uppercase tracking-[0.2em] text-charcoal/70">Email</span>
        <input className="rounded-2xl border border-stone/70 bg-white/90 px-4 py-3" type="email" name="email" />
      </label>
      <label className="grid gap-2">
        <span className="text-xs uppercase tracking-[0.2em] text-charcoal/70">Phone or WhatsApp</span>
        <input className="rounded-2xl border border-stone/70 bg-white/90 px-4 py-3" type="text" name="phone" />
      </label>
      <label className="grid gap-2">
        <span className="text-xs uppercase tracking-[0.2em] text-charcoal/70">Event type</span>
        <input className="rounded-2xl border border-stone/70 bg-white/90 px-4 py-3" type="text" name="eventType" />
      </label>
      <label className="grid gap-2">
        <span className="text-xs uppercase tracking-[0.2em] text-charcoal/70">Venue</span>
        <input className="rounded-2xl border border-stone/70 bg-white/90 px-4 py-3" type="text" name="venue" />
      </label>
      <label className="grid gap-2">
        <span className="text-xs uppercase tracking-[0.2em] text-charcoal/70">Preferred date</span>
        <input className="rounded-2xl border border-stone/70 bg-white/90 px-4 py-3" type="date" name="preferredDate" />
      </label>
      <label className="grid gap-2 md:col-span-2">
        <span className="text-xs uppercase tracking-[0.2em] text-charcoal/70">Message</span>
        <textarea className="min-h-44 rounded-2xl border border-stone/70 bg-white/90 px-4 py-3" name="message" />
      </label>
      <button
        type="submit"
        className="md:col-span-2 mt-2 rounded-full bg-charcoal px-6 py-3 text-sm uppercase tracking-[0.2em] text-ivory transition hover:bg-olive"
      >
        Send Enquiry
      </button>
    </form>
  );
}
