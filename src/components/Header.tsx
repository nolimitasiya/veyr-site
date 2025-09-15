import Logo from "@/components/Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-[100] bg-white/90 backdrop-blur border-b">
      <div className="w-full h-14 px-4 sm:px-6 lg:px-8 flex items-center">
        {/* Small logo */}
        <a href="/" className="shrink-0">
          <Logo fontSize={32} className="origin-left" />
          {/* try 28, 30, or 34 if you want micro-tweaks */}
        </a>

        {/* Nav (regular weight, smaller, tighter gap) */}
        <nav className="ml-auto flex items-center gap-6 text-sm md:text-base font-normal">
          <a href="/about" className="hover:opacity-70">About</a>
          <a href="/pilot" className="hover:opacity-70">Pilot Program</a>
          <a href="/articles" className="hover:opacity-70">Articles</a>
          <a href="/contact" className="hover:opacity-70">Contact Us</a>
        </nav>
      </div>
    </header>
  );
}
