export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500">
              Vehicle & fleet security
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
              Detect relay attacks & RF jamming{" "}
              <span className="bg-yellow-200 px-2 rounded">before</span> losses
              happen
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              VEYR is a compact device that monitors radio-frequency
              anomalies near vehicles, flags suspicious activity in real time,
              and alerts drivers or fleet managers to prevent theft.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-2xl bg-black text-white px-4 py-2.5 text-sm font-medium hover:opacity-90"
              >
                Request a demo
              </a>
              <a
                href="#how"
                className="rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                How it works
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-gray-100 rounded-3xl shadow-inner grid place-items-center">
              <span className="text-gray-500 text-sm">
                (Product photo / diagram placeholder)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold">Book a 20-minute intro</h2>
            <p className="mt-2 text-gray-600 text-sm">
              Tell us about your fleet and security challenges. We'll share
              benchmarks from pilots and outline a tailored plan.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://cal.com/your-handle"
                className="rounded-2xl bg-black text-white px-4 py-2.5 text-sm font-medium hover:opacity-90"
              >
                Schedule a call
              </a>
              <a
                href="mailto:hello@signalshield.app"
                className="rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Email us
              </a>
            </div>
          </div>
          <form className="rounded-3xl border p-6 bg-white shadow-sm">
            <div className="grid gap-4">
              <div>
                <label className="text-sm">Name</label>
                <input
                  className="mt-1 w-full rounded-xl border px-3 py-2"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="text-sm">Company</label>
                <input
                  className="mt-1 w-full rounded-xl border px-3 py-2"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label className="text-sm">Email</label>
                <input
                  className="mt-1 w-full rounded-xl border px-3 py-2"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="text-sm">Message</label>
                <textarea
                  className="mt-1 w-full rounded-xl border px-3 py-2"
                  rows={4}
                  placeholder="Fleet size, key risks, preferred timeframe"
                />
              </div>
              <button
                type="button"
                className="rounded-2xl bg-black text-white px-4 py-2.5 text-sm font-medium"
              >
                Send
              </button>
              <p className="text-xs text-gray-500">
                (Wire this button to Formspree/Airtable later.)
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

