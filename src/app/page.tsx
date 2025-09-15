import Hero from "@/components/Hero";
import WordBanner from "@/components/WordBanner";
import FleetSecurity from "@/components/FleetSecurity";
import DemoInline from "@/components/DemoInLine";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <WordBanner />
      <FleetSecurity compact />
      <DemoInline /> {/* inline on the same page */}
    </main>
  );
}
