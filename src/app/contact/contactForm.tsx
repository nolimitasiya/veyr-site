"use client";
import { useState } from "react";

export default function ContactForm() {
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

  if (ok) {
    return (
      <div className="mt-8 rounded-2xl border p-6">
        <h2 className="text-xl font-semibold">Thanks!</h2>
        <p className="mt-1 text-gray-600">
          Your message was submitted. We’ll reply from <b>info@veyr.ch</b>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-4">
      {/* spam honeypot */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} aria-hidden="true" />

      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          name="name"
          required
          className="mt-1 w-full rounded-xl border px-3 py-2"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-xl border px-3 py-2"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Company (optional)</label>
        <input
          name="company"
          className="mt-1 w-full rounded-xl border px-3 py-2"
          placeholder="Company name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea
          name="message"
          required
          rows={5}
          className="mt-1 w-full rounded-xl border px-3 py-2"
          placeholder="What problem are you trying to solve?"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center rounded-xl bg-black px-4 py-2 text-white hover:opacity-90 disabled:opacity-60"
      >
        {loading ? "Sending…" : "Send message"}
      </button>

      {err && <p className="text-sm text-red-600">{err}</p>}
    </form>
  );
}
