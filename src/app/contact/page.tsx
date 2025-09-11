import ContactForm from "./contactForm";

export const metadata = { title: "Contact — VEYR" };

export default function ContactPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-8 items-start">
      <div>
        <h1 className="text-3xl font-bold">Contact us</h1>
        <p className="mt-3 text-gray-600 text-sm">
          Tell us about your fleet and security challenges. We’ll reply with next steps
          and a suggested pilot scope.
        </p>
        <div className="mt-6 text-sm text-gray-700">
          <div>
            Email:{" "}
            <a className="underline" href="mailto:hello@signalshield.app">
              hello@signalshield.app
            </a>
          </div>
        </div>
      </div>

      {/* Client component below */}
      <ContactForm />
    </main>
  );
}
