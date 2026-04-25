"use client";

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

  return (
    <header className="sticky top-0 z-40 border-b border-stone/70 bg-ivory/90 backdrop-blur-xl">
      <nav className="section-shell flex items-center justify-between py-5">
        <Link href="/" className="font-serif text-2xl text-warmblack md:text-3xl">
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
      </nav>
    </header>
  );
}
