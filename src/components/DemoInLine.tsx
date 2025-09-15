// components/DemoInline.tsx (or your demo section)
"use client";
import { useEffect, useState } from "react";

export default function DemoInline() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [otherCode, setOtherCode] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Auto-open when navigating to #demo
  useEffect(() => {
    const checkHash = () => setOpen(window.location.hash === "#demo");
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const data = new FormData(e.currentTarget);
    // Optional: join country code + phone if you prefer one field in emails
    // const fullPhone = `${data.get("countryCode") ?? ""} ${data.get("phone") ?? ""}`.trim();
    // data.set("phone", fullPhone);

    try {
      const resp = await fetch("/api/demo", { method: "POST", body: data });

      if (resp.ok) {
        setSubmitted(true);
      } else {
        const json = await resp.json().catch(() => null);
const msg =
  json?.error ||                 // <-- your API returns { error: "..." }
  json?.errors?.[0]?.message ||
  json?.message ||
  "Submission failed. Please try again.";
setError(msg);

      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="demo" className="bg-white py-16 px-6 md:px-20 scroll-mt-24">
      {!submitted ? (
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Book a Demo</h2>
            <p className="text-gray-700">
              Tell us a bit about your company and preferred times. We’ll follow up
              personally to schedule — no auto-booking.
            </p>
          </div>

          {!open ? (
            <div className="text-center">
              <button
                onClick={() => setOpen(true)}
                className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition"
              >
                Open Demo Form
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Honeypot (spam filter) */}
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

              {/* Name */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                  <input name="firstName" required className="w-full p-3 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                  <input name="lastName" required className="w-full p-3 border rounded-lg" />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Work email</label>
                <input type="email" name="email" required className="w-full p-3 border rounded-lg" />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input name="company" required className="w-full p-3 border rounded-lg" />
              </div>

              {/* Phone with country code */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone (for scheduling)</label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <select
                    name="countryCode"
                    className="p-3 border rounded-lg sm:min-w-[220px]"
                    defaultValue="+44"
                    onChange={(e) => setOtherCode(e.target.value === "OTHER")}
                  >
                    {/* Alphabetical shortlist incl. Somalia; add/remove as needed */}
                    <option value="+61">Australia (+61)</option>
                    <option value="+43">Austria (+43)</option>
                    <option value="+32">Belgium (+32)</option>
                    <option value="+55">Brazil (+55)</option>
                    <option value="+359">Bulgaria (+359)</option>
                    <option value="+1-CA">Canada (+1)</option>
                    <option value="+86">China (+86)</option>
                    <option value="+57">Colombia (+57)</option>
                    <option value="+420">Czechia (+420)</option>
                    <option value="+45">Denmark (+45)</option>
                    <option value="+20">Egypt (+20)</option>
                    <option value="+372">Estonia (+372)</option>
                    <option value="+358">Finland (+358)</option>
                    <option value="+33">France (+33)</option>
                    <option value="+49">Germany (+49)</option>
                    <option value="+30">Greece (+30)</option>
                    <option value="+852">Hong Kong (+852)</option>
                    <option value="+36">Hungary (+36)</option>
                    <option value="+91">India (+91)</option>
                    <option value="+62">Indonesia (+62)</option>
                    <option value="+353">Ireland (+353)</option>
                    <option value="+972">Israel (+972)</option>
                    <option value="+39">Italy (+39)</option>
                    <option value="+81">Japan (+81)</option>
                    <option value="+254">Kenya (+254)</option>
                    <option value="+965">Kuwait (+965)</option>
                    <option value="+371">Latvia (+371)</option>
                    <option value="+370">Lithuania (+370)</option>
                    <option value="+60">Malaysia (+60)</option>
                    <option value="+52">Mexico (+52)</option>
                    <option value="+212">Morocco (+212)</option>
                    <option value="+31">Netherlands (+31)</option>
                    <option value="+64">New Zealand (+64)</option>
                    <option value="+234">Nigeria (+234)</option>
                    <option value="+47">Norway (+47)</option>
                    <option value="+92">Pakistan (+92)</option>
                    <option value="+51">Peru (+51)</option>
                    <option value="+48">Poland (+48)</option>
                    <option value="+351">Portugal (+351)</option>
                    <option value="+974">Qatar (+974)</option>
                    <option value="+40">Romania (+40)</option>
                    <option value="+966">Saudi Arabia (+966)</option>
                    <option value="+65">Singapore (+65)</option>
                    <option value="+421">Slovakia (+421)</option>
                    <option value="+386">Slovenia (+386)</option>
                    <option value="+252">Somalia (+252)</option>
                    <option value="+27">South Africa (+27)</option>
                    <option value="+82">South Korea (+82)</option>
                    <option value="+34">Spain (+34)</option>
                    <option value="+46">Sweden (+46)</option>
                    <option value="+41">Switzerland (+41)</option>
                    <option value="+886">Taiwan (+886)</option>
                    <option value="+66">Thailand (+66)</option>
                    <option value="+216">Tunisia (+216)</option>
                    <option value="+90">Türkiye (+90)</option>
                    <option value="+971">UAE (+971)</option>
                    <option value="+44">United Kingdom (+44)</option>
                    <option value="+1">United States (+1)</option>
                    <option value="+84">Vietnam (+84)</option>
                    <option value="OTHER">Other (enter code)</option>
                  </select>

                  {otherCode && (
                    <input
                      name="otherCountryCode"
                      placeholder="e.g. +252"
                      className="p-3 border rounded-lg sm:min-w-[160px]"
                      pattern="^\\+?[0-9\\-]{1,8}$"
                      title="Enter a valid country code, e.g. +252"
                    />
                  )}

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    className="flex-1 p-3 border rounded-lg"
                  />
                </div>
              </div>

              {/* Timezone & preference */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Time zone</label>
                  <select name="timezone" className="w-full p-3 border rounded-lg">
                    <option value="UTC">UTC</option>
                    <option value="Europe/Zurich">Europe/Zurich</option>
                    <option value="Europe/London">Europe/London</option>
                    <option value="Europe/Paris">Europe/Paris</option>
                    <option value="America/New_York">America/New_York</option>
                    <option value="America/Los_Angeles">America/Los_Angeles</option>
                    <option value="Asia/Dubai">Asia/Dubai</option>
                    <option value="Asia/Singapore">Asia/Singapore</option>
                    <option value="Asia/Tokyo">Asia/Tokyo</option>
                    <option value="Australia/Sydney">Australia/Sydney</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred days/times</label>
                  <input name="preferredTimes" placeholder="e.g., Tue–Thu afternoons" className="w-full p-3 border rounded-lg" />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Anything else we should know?</label>
                <textarea name="notes" rows={4} className="w-full p-3 border rounded-lg" />
              </div>

              {/* Helps your inbox rule */}
              <input type="hidden" name="_subject" value="Demo Request" />
              <input type="hidden" name="source" value="Homepage #demo" />

              {error && (
                <p className="text-red-600 text-sm" role="alert" aria-live="assertive">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition disabled:opacity-60"
              >
                {loading ? "Submitting…" : "Request Demo"}
              </button>
            </form>
          )}
        </div>
      ) : (
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Thank you</h2>
          <p className="text-lg text-gray-700">
            We’re reviewing your request. A VEYR representative will contact you soon to schedule your demo.
          </p>
        </div>
      )}
    </section>
  );
}
