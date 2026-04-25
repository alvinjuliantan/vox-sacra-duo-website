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
    <header className="sticky top-0 z-40 border-b border-taupe/40 bg-ivory/92 backdrop-blur-md">
      <nav className="section-shell flex items-center justify-between py-5">
        <Link href="/" className="font-serif text-xl text-charcoal md:text-2xl">
          Vox Sacra Duo
        </Link>
        <ul className="hidden gap-6 text-sm uppercase tracking-[0.14em] md:flex">
          {links.map(([href, label]) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`transition ${
                    active
                      ? "text-bronze"
                      : "text-charcoal/75 hover:text-olive"
                  }`}
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
