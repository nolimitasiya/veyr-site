import clsx from "clsx";

type Props = {
  size?: "sm" | "md" | "lg";      // keep if you like, unused below
  tagline?: boolean;
  className?: string;
  fontSize?: number;              // NEW: base font size for the logo (px)
};

export default function Logo({ fontSize = 20, tagline = false, className }: Props) {
  // We size everything from the wrapper's font-size. Letters use 1em.
  const letter = "text-[1.30em]";      // letters follow wrapper font size
  const weight = "font-black";

  /// E geometry (keeps your thick bars, but visible & aligned)
const E_TOTAL_H   = "h-[0.98em]";   // must be >= 3*bar + 2*gap + a little margin
const E_BAR_THICK = "h-[0.17em]";
const E_GAP       = "gap-[0.16em]";
const E_WIDE      = "w-[0.60em]";
const E_MID       = "w-[0.45em]";
// Small nudge ONLY. -0.02 to -0.06 is the normal range.
const E_Y_NUDGE   = "-translate-y-[0.70em]";


  return (
    <div
      className={clsx("inline-flex flex-col items-start leading-none", className)}
      aria-label="VEYR"
      style={{ fontSize }}             // <-- set overall logo size here
    >
      <div className="flex items-baseline gap-1 leading-none">
        <span className={clsx(weight, "tracking-[0.14em]", letter)}>V</span>

        <span className={clsx("relative inline-flex flex-col justify-center",
                              E_TOTAL_H, E_GAP, E_Y_NUDGE)}>
          <span className={clsx("bg-black rounded-none", E_BAR_THICK, E_WIDE)} />
          <span className={clsx("bg-black rounded-none", E_BAR_THICK, E_MID)} />
          <span className={clsx("bg-black rounded-none", E_BAR_THICK, E_WIDE)} />
        </span>

        <span className={clsx(weight, "tracking-[0.14em] ml-1", letter)}>Y</span>
        <span className={clsx(weight, "tracking-[0.14em] ml-[0.0em]", letter)}>R</span>
      </div>

      {tagline && (
        <div className="mt-1 ml-1 text-[0.26em] tracking-[0.35em] uppercase text-gray-800">
          Software Security
        </div>
      )}
    </div>
  );
}
