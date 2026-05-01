export default function Footer() {
  return (
    <footer className="mt-24 border-t border-stone/70 bg-parchment/45">
      <div className="section-shell py-14">
        <p className="font-serif text-3xl text-warmblack">Vox Sacra Duo</p>
        <p className="mt-3 text-xs uppercase tracking-[0.18em] text-charcoal/80">
          Alvin Tan, baritone &nbsp;·&nbsp; Wayne Teo, piano
        </p>
        <p className="mt-5 max-w-2xl text-sm text-charcoal/82">
          Sacred, classical, and inspirational repertoire for chapels, churches, private salons,
          intimate cultural spaces, weddings, and memorials.
        </p>
        <p className="mt-6 text-xs uppercase tracking-[0.18em] text-charcoal/72">
          Direct contact
          <a
            href="mailto:Alvin@alvinjuliantan.com"
            className="ml-3 inline-block border-b border-bronze pb-[3px] text-sm normal-case tracking-[0.02em] text-bronze transition hover:border-warmblack hover:text-warmblack"
          >
            Alvin@alvinjuliantan.com
          </a>
        </p>
      </div>
    </footer>
  );
}
