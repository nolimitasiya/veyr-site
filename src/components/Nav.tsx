import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl bg-black text-white grid place-items-center font-bold">SS</div>
          <span className="font-semibold">VEYR</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <Link href="/about" className="hover:opacity-80">About</Link>
          <Link href="/pilot" className="hover:opacity-80">Pilot Program</Link>
          <Link href="/use-cases" className="hover:opacity-80">Articles</Link>
          <Link href="/contact" className="hover:opacity-80">Contact Us</Link>
        </nav>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-xl border px-3 py-1.5 text-sm hover:bg-gray-50"
        >
          Book a meeting
        </Link>
      </div>
    </header>
  );
}
