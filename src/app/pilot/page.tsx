export const metadata = { title: "Pilot program — VEYR" };

export default function Pilot() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-14">
      <h1 className="text-3xl font-bold">Pilot program</h1>
      <p className="mt-3 text-gray-600">
        Join a 6–8 week pilot. You get hardware, setup guidance, and a simple dashboard;
        we get feedback to refine thresholds and UX.
      </p>

      <ul className="mt-6 space-y-3 text-sm text-gray-700">
        <li>• Scope: 3–20 vehicles (expandable)</li>
        <li>• Install: 10 minutes per vehicle (no CAN access)</li>
        <li>• Alerts: LED, buzzer, app/email</li>
        <li>• Options: GPS time-stamp, cloud logging</li>
      </ul>

      <a href="/contact" className="mt-8 inline-block rounded-2xl bg-black text-white px-4 py-2.5 text-sm font-medium">
        Apply for a pilot
      </a>
    </main>
  );
}
