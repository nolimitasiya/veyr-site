export const metadata = {
  title: "Terms of Service — VEYR",
  description: "The rules for using VEYR’s website and services.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="!text-center !font-bold text-3xl md:text-4xl mb-6">Terms of Service</h1>
      <p className="text-sm opacity-70 mb-6">
        <strong>Last updated:</strong> {new Date().toLocaleDateString()}
      </p>

      <h2 className="!font-bold text-xl md:text-2xl mt-10 mb-3">1) Agreement</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>By accessing veyr.ch or using our services, you agree to these Terms and our Privacy Policy.</li>
      </ul>

      <h2 className="!font-bold text-xl md:text-2xl mt-10 mb-3">2) Services</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>VEYR provides website content and demonstrations relating to fleet/vehicle security.</li>
        <li>Features may evolve over time; availability is not guaranteed.</li>
      </ul>

      <h2 className="!font-bold text-xl md:text-2xl mt-10 mb-3">3) Acceptable use</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>No unlawful, harmful, or abusive activity.</li>
        <li>No attempts to disrupt, probe, or reverse engineer systems.</li>
        <li>No infringing, deceptive, or misleading content.</li>
      </ul>

      <h2 className="!font-bold text-xl md:text-2xl mt-10 mb-3">4) Accounts & submissions</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>You warrant your submissions are accurate and you have rights to provide them.</li>
        <li>You grant us a license to use submissions to operate and improve the service.</li>
      </ul>

      <h2 className="!font-bold text-xl md:text-2xl mt-10 mb-3">5) Third-party services</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>We rely on providers (e.g., hosting, email). Their terms may apply when you interact with them.</li>
      </ul>

      <h2 className="!font-bold text-xl md:text-2xl mt-10 mb-3">6) Intellectual property</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Site content is owned by VEYR or licensors. Don’t copy, modify, or distribute without permission.</li>
      </ul>

      <h2 className="!font-bold text-xl md:text-2xl mt-10 mb-3">7) Disclaimers</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>The site is provided “as is” without warranties.</li>
        <li>Information is for general purposes and may not be error-free or fit for a particular purpose.</li>
      </ul>

      <h2 className="!font-bold text-xl md:text-2xl mt-10 mb-3">8) Liability</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>To the maximum extent permitted by law, we’re not liable for indirect, incidental, or consequential damages.</li>
        <li>Aggregate liability is limited to amounts you paid us in the 12 months before the claim (if any).</li>
      </ul>

      <h2 className="!font-bold text-xl md:text-2xl mt-10 mb-3">9) Termination</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>We may suspend or terminate access for breach of these Terms or to protect the service.</li>
      </ul>

      <h2 className="!font-bold text-xl md:text-2xl mt-10 mb-3">10) Governing law</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>These Terms are governed by the laws of Switzerland. Venue: Geneva, Switzerland.</li>
      </ul>

      <h2 className="!font-bold text-xl md:text-2xl mt-10 mb-3">11) Changes</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>We may revise these Terms; the latest version will be posted here.</li>
      </ul>

      <h2 className="!font-bold text-xl md:text-2xl mt-10 mb-3">12) Contact</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Email: <a href="mailto:info@veyr.ch" className="underline">info@veyr.ch</a></li>
      </ul>
    </main>
  );
}
