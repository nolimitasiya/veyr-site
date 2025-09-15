import Link from "next/link";
// ...
<Link href="/" className="shrink-0">
  <Logo fontSize={32} className="origin-left" />
</Link>
<nav className="ml-auto flex items-center gap-6 text-sm md:text-base font-normal">
  <Link href="/about" className="hover:opacity-70">About</Link>
  <Link href="/pilot" className="hover:opacity-70">Pilot Program</Link>
  <Link href="/articles" className="hover:opacity-70">Articles</Link>
  <Link href="/contact" className="hover:opacity-70">Contact Us</Link>
</nav>
