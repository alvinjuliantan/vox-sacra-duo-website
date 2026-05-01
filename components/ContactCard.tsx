export default function ContactCard() {
  return (
    <div className="grid gap-4 border-y border-stone/70 py-9 md:grid-cols-[0.7fr_1.3fr] md:items-center md:gap-10">
      <p className="text-xs uppercase tracking-[0.26em] text-bronze">Or write directly</p>
      <p className="font-serif text-3xl md:text-4xl">
        <a
          href="mailto:Alvin@alvinjuliantan.com"
          className="border-b border-bronze pb-1 text-warmblack transition hover:border-warmblack hover:text-bronze"
        >
          Alvin@alvinjuliantan.com
        </a>
      </p>
    </div>
  );
}
