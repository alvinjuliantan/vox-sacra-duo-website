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
    <header className="sticky top-0 z-40 border-b border-stone/50 bg-ivory/95 backdrop-blur">
      <nav className="section-shell flex items-center justify-between py-4">
        <Link href="/" className="font-serif text-lg text-burgundy md:text-xl">
          Vox Sacra Duo
        </Link>
        <ul className="hidden gap-5 text-sm md:flex">
          {links.map(([href, label]) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`transition ${
                    active ? "text-burgundy" : "text-charcoal/80 hover:text-burgundy"
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
