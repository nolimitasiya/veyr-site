"use client";

function Line({ words, ariaHidden = false }: { words: string[]; ariaHidden?: boolean }) {
  return (
    <ul
      className="flex items-center whitespace-nowrap gap-16 md:gap-24 shrink-0"
      aria-hidden={ariaHidden}
    >
      {words.map((w, i) => (
        <li
          key={(ariaHidden ? "b" : "a") + "-" + i}
          className="uppercase font-serif font-medium
                     text-1xl md:text-3xl lg:text-4xl
                     tracking-[0.18em] md:tracking-[0.28em]
                     leading-none select-none"
        >
          {w}
        </li>
      ))}
    </ul>
  );
}

export default function WordBanner() {
  const words = ["FLEET", "CARS", "HOME", "FLEET", "CARS", "HOME"];

  return (
    <section className="bg-white pt-6 pb-2">
      <div className="relative overflow-hidden group">
        {/* edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-12 md:w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-12 md:w-20 bg-gradient-to-l from-white to-transparent z-10" />

        {/* scrolling track */}
        <div className="flex [animation:wordmarquee_28s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          <Line words={words} />
          <Line words={words} ariaHidden />
        </div>

        <style jsx>{`
          @keyframes wordmarquee {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </section >
  );
}
