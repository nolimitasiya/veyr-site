'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";

const NAV = [
  { href: "/about", label: "About" },
  { href: "/pilot", label: "Pilot Program" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-[100] bg-white/90 backdrop-blur border-b">
      <div className="w-full h-14 px-4 sm:px-6 lg:px-8 flex items-center">
        <Link href="/" aria-label="VEYR home" className="shrink-0">
          <Logo fontSize={32} className="origin-left" />
        </Link>

        <nav className="ml-auto flex items-center gap-6 text-sm md:text-base font-normal">
          {NAV.map(({ href, label }) => {
            const isActive =
              pathname === href ||
              (href !== "/" && pathname.startsWith(href));

            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`transition-colors hover:underline underline-offset-8 decoration-2
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 rounded-sm
                  ${isActive ? "underline underline-offset-8 decoration-2 font-semibold" : ""}`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
