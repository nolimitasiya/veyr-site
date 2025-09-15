import Image from "next/image";

export default function Logo({ width = 160, height = 48 }: { width?: number; height?: number }) {
  return (
    <Image
      src="/logo-veyr.png"
      alt="VEYR — Software Security"
      width={width}
      height={height}
      priority
    />
  );
}
