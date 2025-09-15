"use client";
import { useState } from "react";

export default function PilotProgram() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const resp = await fetch("https://formspree.io/f/mqadjnna", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (resp.ok) setSubmitted(true);
    else alert("Something went wrong. Please try again.");
  };

  return (
    <section className="bg-white py-16 px-6 md:px-20">
      {/* ===== BEFORE SUBMIT: headline + intro + emoji bullets ===== */}
      {!submitted && (
        <>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Pilot Program
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-10">
            Join a 6–8 week pilot and experience VEYR in action. Quick install,
            real-world detection, and meaningful insights for your fleet security.
          </p>

          {/* Emoji Key Points (the bit you were missing) */}
          {/* Key Points (centered) */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto place-items-start md:place-items-center text-left md:text-center mb-12">
  <div>
    <h3 className="font-semibold">📦 Scope</h3>
    <p>3–20 vehicles (expandable)</p>
  </div>
  <div>
    <h3 className="font-semibold">⚡ Install</h3>
    <p>10 min per vehicle, no CAN access</p>
  </div>
  <div>
    <h3 className="font-semibold">🔔 Alerts</h3>
    <p>LED, buzzer, app/email</p>
  </div>
  <div>
    <h3 className="font-semibold">🌐 Options</h3>
    <p>GPS time-stamp, cloud logging, CSV export</p>
  </div>
</div>

        </>
      )}

      {/* CTA button (shows before form opens) */}
      {!showForm && !submitted && (
        <div className="text-center mb-6">
          <button
            onClick={() => setShowForm(true)}
            className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition"
          >
            Apply for a Free Trial Pilot
          </button>
        </div>
      )}

      {/* ===== FORM ===== */}
      {showForm && !submitted && (
        <div className="max-w-xl mx-auto mt-8">
          <h3 className="text-2xl font-bold text-center mb-4">
            Apply for a Free Trial Pilot
          </h3>
          <p className="text-gray-600 text-center mb-8">
            Thank you for your interest in VEYR. Please complete the form below.
            Once submitted, our team will review your request and get back to you within 1–2 business days.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input name="firstName" required className="w-full p-3 border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input name="lastName" required className="w-full p-3 border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Business Email</label>
              <input type="email" name="email" required className="w-full p-3 border rounded-lg" />
            </div>
            {/* Phone with country code */}
<div>
  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
  <div className="flex flex-col sm:flex-row gap-2">
    {/* Country code selector (alphabetical) */}
    <select
      name="countryCode"
      required
      className="p-3 border rounded-lg sm:min-w-[220px]"
      onChange={(e) => {
        const other = document.getElementById("otherCodeWrap");
        if (other) other.classList.toggle("hidden", e.target.value !== "OTHER");
      }}
      defaultValue="+41" // set a sensible default if you like
    >
      {/* ALPHABETICAL LIST (sample but broad, including Somalia) */}
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
      <option value="+962">Jordan (+962)</option>
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
      <option value="+7">Russia (+7)</option>
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

      {/* Catch-all */}
      <option value="OTHER">Other (enter code)</option>
    </select>

    {/* Show when "Other" is selected */}
    <div id="otherCodeWrap" className="hidden sm:min-w-[180px]">
      <input
        type="text"
        name="otherCountryCode"
        placeholder="e.g. +252"
        className="w-full p-3 border rounded-lg"
        pattern="^\+?[0-9\-]{1,8}$"
        title="Enter a valid country code, e.g. +252"
      />
    </div>

    {/* Phone number */}
    <input
      type="tel"
      name="phone"
      placeholder="Phone number"
      required
      className="flex-1 p-3 border rounded-lg"
    />
  </div>
</div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Company</label>
              <input name="company" required className="w-full p-3 border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">City</label>
              <input name="city" className="w-full p-3 border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Country</label>
              <input name="country" className="w-full p-3 border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Please explain the business situation or problem you are trying to manage.
</label>
              <textarea name="situation" rows={4} className="w-full p-3 border rounded-lg" />
            </div>

            {/* Helps your inbox rule */}
            <input type="hidden" name="_subject" value="Pilot Program Application" />

            <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition">
              Submit Application
            </button>
          </form>
        </div>
      )}

      {/* ===== AFTER SUBMIT: big Thank you only ===== */}
      {submitted && (
        <div className="max-w-3xl mx-auto mt-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Thank you</h2>
          <p className="text-lg text-gray-600">
            We are now reviewing your request. If we find the right product match,
            one of our representatives will be in touch with you soon.
          </p>
        </div>
      )}
    </section>
  );
}
