export default function EnquiryForm() {
  return (
    <form className="grid gap-6 border-y border-stone/70 py-10 md:grid-cols-2">
      <label className="grid gap-2">
        <span className="text-xs uppercase tracking-[0.16em] text-charcoal/70">Name</span>
        <input className="border-b border-stone bg-transparent px-1 py-3 outline-none focus:border-bronze" type="text" name="name" />
      </label>
      <label className="grid gap-2">
        <span className="text-xs uppercase tracking-[0.16em] text-charcoal/70">Email</span>
        <input className="border-b border-stone bg-transparent px-1 py-3 outline-none focus:border-bronze" type="email" name="email" />
      </label>
      <label className="grid gap-2">
        <span className="text-xs uppercase tracking-[0.16em] text-charcoal/70">Phone or WhatsApp</span>
        <input className="border-b border-stone bg-transparent px-1 py-3 outline-none focus:border-bronze" type="text" name="phone" />
      </label>
      <label className="grid gap-2">
        <span className="text-xs uppercase tracking-[0.16em] text-charcoal/70">Event type</span>
        <input className="border-b border-stone bg-transparent px-1 py-3 outline-none focus:border-bronze" type="text" name="eventType" />
      </label>
      <label className="grid gap-2">
        <span className="text-xs uppercase tracking-[0.16em] text-charcoal/70">Venue</span>
        <input className="border-b border-stone bg-transparent px-1 py-3 outline-none focus:border-bronze" type="text" name="venue" />
      </label>
      <label className="grid gap-2">
        <span className="text-xs uppercase tracking-[0.16em] text-charcoal/70">Preferred date</span>
        <input className="border-b border-stone bg-transparent px-1 py-3 outline-none focus:border-bronze" type="date" name="preferredDate" />
      </label>
      <label className="grid gap-2 md:col-span-2">
        <span className="text-xs uppercase tracking-[0.16em] text-charcoal/70">Message</span>
        <textarea className="min-h-40 border border-stone bg-transparent px-3 py-3 outline-none focus:border-bronze" name="message" />
      </label>
      <button
        type="submit"
        className="md:col-span-2 w-fit border-b border-antique pb-2 text-xs uppercase tracking-[0.22em] text-warmblack transition hover:text-bronze"
      >
        Send Enquiry
      </button>
    </form>
  );
}
