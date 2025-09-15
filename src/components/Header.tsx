import Logo from "@/components/Logo";
import Link from "next/link";

export default function HeaderClean() {
  return (
    <header className="sticky top-0 z-[100] bg-white/90 backdrop-blur border-b">
      <div className="w-full h-14 px-4 sm:px-6 lg:px-8 flex items-center">
        <Link href="/" className="shrink-0">
          <Logo fontSize={32} className="origin-left" />
        </Link>
        <nav className="ml-auto flex items-center gap-6 text-sm md:text-base font-normal">
          <Link href="/about" className="hover:opacity-70">About</Link>
          <Link href="/pilot" className="hover:opacity-70">Pilot Program</Link>
          <Link href="/articles" className="hover:opacity-70">Articles</Link>
          <Link href="/contact" className="hover:opacity-70">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}
