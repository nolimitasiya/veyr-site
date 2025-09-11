"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: replace with Formspree/Airtable/Web API
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border p-6 bg-white shadow-sm">
      {sent ? (
        <div className="text-green-600 font-medium">Thanks! We’ll get back to you shortly.</div>
      ) : (
        <div className="grid gap-4">
          <div>
            <label className="text-sm">Name</label>
            <input required className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="Jane Doe" />
          </div>
          <div>
            <label className="text-sm">Company</label>
            <input className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="Your company" />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <input required type="email" className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="you@company.com" />
          </div>
          <div>
            <label className="text-sm">Message</label>
            <textarea required className="mt-1 w-full rounded-xl border px-3 py-2" rows={4} placeholder="Fleet size, key risks, timeframe" />
          </div>
          <button type="submit" className="rounded-2xl bg-black text-white px-4 py-2.5 text-sm font-medium">
            Send
          </button>
          <p className="text-xs text-gray-500">We’ll reply within 1–2 business days.</p>
        </div>
      )}
    </form>
  );
}
