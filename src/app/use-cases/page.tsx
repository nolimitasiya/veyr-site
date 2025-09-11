export const metadata = { title: "Use cases — VEYR" };

export default function UseCases() {
  const items = [
    { t: "Taxi & ride-hail fleets", d: "Protect vehicles overnight and at ranks; reduce downtime and incident costs." },
    { t: "Rental & car-share", d: "Deter theft at airports/depots; provide incident forensics with RF logs." },
    { t: "Construction & utilities", d: "Safeguard vans and equipment in high-risk areas and remote sites." },
  ];
  return (
    <main className="max-w-6xl mx-auto px-4 py-14">
      <h1 className="text-3xl font-bold">Use cases</h1>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {items.map((b) => (
          <div key={b.t} className="rounded-3xl border p-6">
            <h3 className="font-semibold">{b.t}</h3>
            <p className="mt-2 text-sm text-gray-600">{b.d}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
