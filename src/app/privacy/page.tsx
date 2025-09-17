export const metadata = {
  title: "Privacy Policy — VEYR",
  description:
    "How VEYR collects, uses, and protects your data (GDPR & Swiss LPD aligned).",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="!text-center !font-bold text-3xl md:text-4xl mb-6">Privacy Policy</h1>
      <p className="text-sm opacity-70 mb-6">
        <strong>Last updated:</strong> {new Date().toLocaleDateString()}
      </p>

      <p className="mb-6">
        VEYR (“we”, “us”, “our”) operates veyr.ch and related services. This notice explains
        what we collect, how we use it, and your rights.
      </p>

      <h2 className="!font-bold text-xl md:text-2xl mt-10 mb-3">What we collect</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li><strong>Contact data:</strong> name, email, company (when you submit forms).</li>
        <li><strong>Usage data:</strong> IP address, device/browser info, pages viewed, timestamps.</li>
        <li><strong>Communications:</strong> messages you send us (emails, contact forms).</li>
      </ul>

      <h2 className="!font-bold text-xl md:text-2xl mt-10 mb-3">How we use data</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Provide, maintain, and improve our website and services.</li>
        <li>Respond to enquiries and deliver transactional messages.</li>
        <li>Detect, prevent, and address security/technical issues.</li>
        <li>Comply with legal obligations.</li>
      </ul>

      <h2 className="!font-bold text-xl md:text-2xl mt-10 mb-3">Legal bases (GDPR & Swiss LPD)</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li><em>Contract / pre-contract</em> (e.g., responding to requests).</li>
        <li><em>Legitimate interests</em> (security, service improvement, analytics).</li>
        <li><em>Consent</em> (where required, e.g., certain cookies/marketing).</li>
        <li><em>Legal obligation</em> (record-keeping, compliance).</li>
      </ul>

      <h2 className="!font-bold text-xl md:text-2xl mt-10 mb-3">Retention</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>We keep personal data only as long as necessary for the purposes above.</li>
        <li>After that, we delete or anonymize it unless law requires longer retention.</li>
      </ul>

      <h2 className="!font-bold text-xl md:text-2xl mt-10 mb-3">Sharing</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>
          We use trusted processors (e.g., hosting by Vercel, email delivery by Resend) to operate our services.
          They process data on our behalf under data-protection agreements.
        </li>
        <li>We do not sell personal data.</li>
      </ul>

      <h2 className="!font-bold text-xl md:text-2xl mt-10 mb-3">International transfers</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>
          Data may be processed outside Switzerland/EU. Where applicable, we rely on appropriate safeguards
          (e.g., Standard Contractual Clauses).
        </li>
      </ul>

      <h2 className="!font-bold text-xl md:text-2xl mt-10 mb-3">Your rights</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Access, rectification, erasure, restriction, portability, and objection.</li>
        <li>Withdraw consent at any time (when processing is based on consent).</li>
        <li>Lodge a complaint with your data protection authority.</li>
      </ul>

      <h2 className="!font-bold text-xl md:text-2xl mt-10 mb-3">Cookies & analytics</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>We use essential cookies for functionality.</li>
        <li>
          If we add analytics/marketing cookies, we’ll provide appropriate disclosures
          and (where required) consent controls.
        </li>
      </ul>

      <h2 className="!font-bold text-xl md:text-2xl mt-10 mb-3">Contact</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Controller: VEYR, Geneva, Switzerland</li>
        <li>Email: <a href="mailto:info@veyr.ch" className="underline">info@veyr.ch</a></li>
      </ul>

      <h2 className="!font-bold text-xl md:text-2xl mt-10 mb-3">Changes to this policy</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>We may update this policy and will post the latest version here.</li>
      </ul>

    </main>
  );
}
