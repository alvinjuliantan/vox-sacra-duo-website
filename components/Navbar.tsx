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
    <header className="sticky top-0 z-40 border-b border-stone/45 bg-ivory/90 backdrop-blur-xl">
      <nav className="section-shell flex items-center justify-between py-5">
        <Link href="/" className="font-serif text-xl tracking-[0.03em] text-charcoal md:text-2xl">
          Vox Sacra Duo
        </Link>
        <ul className="hidden items-center gap-6 text-sm md:flex">
          {links.map(([href, label]) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`rounded-full px-3 py-1.5 transition ${
                    active
                      ? "bg-stone/55 text-charcoal"
                      : "text-charcoal/75 hover:bg-white/70 hover:text-charcoal"
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
