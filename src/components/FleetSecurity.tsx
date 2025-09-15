// components/FleetSecurity.tsx
type Props = { compact?: boolean };

export default function FleetSecurity({ compact = false }: Props) {
  const pad = compact ? "pt-10 pb-16" : "py-20";
  const gapTop = compact ? "mb-6" : "mb-8";
  const gapBottom = compact ? "mt-6" : "mt-8";

  return (
    <section id="fleet-security" className={`bg-white ${pad} px-6 md:px-20`}>
      <div className="max-w-3xl mx-auto text-center">
        <div className={`h-px bg-gray-200 ${gapTop}`} />
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Vehicle &amp; Fleet Security
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Safeguard your vehicles and assets with advanced protection designed for
          today’s evolving threats. Our intelligent system continuously monitors for
          suspicious activity, detecting relay attacks and RF jamming attempts in real
          time before they can cause disruption or financial loss. By combining
          cutting-edge technology with reliable performance, we ensure your fleet stays
          secure, your operations remain uninterrupted, and your business runs smoothly.
          With proactive defense and unmatched accuracy, you can focus on growth while
          we focus on security.
        </p>
        <div className={`h-px bg-gray-200 ${gapBottom}`} />
      </div>
    </section>
  );
}
