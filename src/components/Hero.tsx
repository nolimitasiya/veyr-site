// components/Hero.tsx
"use client";
import Image from "next/image";

export default function Hero() {
  return (
    // Full-bleed section (breaks out of any page padding/containers)
    <section className="relative w-screen h-[78svh] md:h-[90svh] overflow-hidden
                        [margin-left:calc(50%-50vw)] [margin-right:calc(50%-50vw)]">
      {/* Background image */}
      <Image
        src="/hero-veyr.jpg"           // in /public
        alt="VEYR hero"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center" 
        // tweak focus if needed: object-[50%_35%] or object-[center_30%]
      />

      {/* Overlay to ensure text is readable */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Redefining the Future of Security
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/80">
            Intelligent, proactive protection for vehicles, fleets, and operations.
          </p>
          <div className="mt-8">
            <a
              href="#demo" 
              className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition shadow"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
