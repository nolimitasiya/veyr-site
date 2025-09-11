"use client";
import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setErr(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setLoading(false);
    if (res.ok) {
      setOk(true);
      form.reset();
    } else {
      const j = await res.json().catch(() => ({}));
      setErr(j?.error || "Something went wrong");
    }
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold">Contact us</h1>

      {!ok ? (
        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <input
            name="name"
            required
            placeholder="Your name"
            className="w-full rounded-xl border px-3 py-2"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-xl border px-3 py-2"
          />
          <input
            name="company"
            placeholder="Company (optional)"
            className="w-full rounded-xl border px-3 py-2"
          />
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Message"
            className="w-full rounded-xl border px-3 py-2"
          />

          <button
            disabled={loading}
            className="rounded-xl bg-black px-4 py-2 text-white hover:opacity-90"
          >
            {loading ? "Sending…" : "Send message"}
          </button>

          {err && <p className="text-sm text-red-600">{err}</p>}
        </form>
      ) : (
        <div role="status" aria-live="polite" className="mt-8 rounded-2xl border p-6 bg-white">
    <h2 className="text-xl font-semibold"> ✅ yMessage received</h2>
    <p className="mt-2 text-gray-700">
      Thank you for contacting VEYR. A member of our team will be in touch within one business day.
    </p>
  </div>
      )}
    </main>
  );
}
