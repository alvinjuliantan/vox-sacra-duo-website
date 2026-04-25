"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  ["/", "Home"],
  ["/sacred-recital", "Sacred Recital"],
  ["/artists", "Artists"],
  ["/repertoire", "Repertoire"],
  ["/gallery", "Gallery"],
  ["/enquiry", "Enquiry"],
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-stone/70 bg-ivory/90 backdrop-blur-xl">
      <nav className="section-shell py-5">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" onClick={closeMenu} className="font-serif text-2xl text-warmblack md:text-3xl">
            Vox Sacra Duo
          </Link>

          <ul className="hidden gap-6 text-xs uppercase tracking-[0.18em] md:flex">
            {links.map(([href, label]) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={active ? "text-bronze" : "text-charcoal/78 transition hover:text-warmblack"}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            className="inline-flex items-center rounded-full border border-stone/70 px-4 py-2 text-xs uppercase tracking-[0.18em] text-charcoal/80 md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>

        {isOpen ? (
          <div id="mobile-navigation" className="mt-5 border-t border-stone/60 pt-5 md:hidden">
            <ul className="grid gap-4 text-sm uppercase tracking-[0.18em]">
              {links.map(([href, label]) => {
                const active = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={closeMenu}
                      className={active ? "text-bronze" : "text-charcoal/78"}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
