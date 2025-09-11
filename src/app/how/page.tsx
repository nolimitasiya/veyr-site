export const metadata = { title: "How it works — SignalShield" };

export default function How() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-14">
      <h1 className="text-3xl font-bold">How it works</h1>
      <p className="mt-3 text-gray-600">
        VEYR monitors the local RF environment around a vehicle, learns normal patterns,
        and raises smart alerts when suspicious activity is detected.
      </p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {[
          { t: "Sense", d: "Scans key RF bands used in key-fobs and common jammers (315/433/868/915 MHz)." },
          { t: "Learn", d: "Builds a baseline per vehicle/site and adapts to reduce false positives." },
          { t: "Alert", d: "Instant notifications to driver console or fleet dashboard with guidance." },
        ].map((s) => (
          <div key={s.t} className="rounded-3xl border p-6">
            <div className="text-sm uppercase tracking-wide text-gray-500">Step</div>
            <h3 className="mt-1 font-semibold">{s.t}</h3>
            <p className="mt-2 text-sm text-gray-600">{s.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 text-xs text-gray-500">
        Privacy-first: no audio/video; only RF telemetry and alert metadata.
      </div>
    </main>
  );
}
