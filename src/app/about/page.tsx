export const metadata = {
  title: "About | VEYR",
  description:
    "VEYR secures the future of mobility & operations with intelligent, proactive security.",
};

export default function AboutPage() {
  return (
    <main className="bg-white py-16 px-6 md:px-20">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">About VEYR</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10">
          VEYR was founded on a simple idea: Security should evolve as fast as
          the threats we face. We engineer intelligent solutions that detect and
          prevent threats before they cause disruption keeping vehicles, fleets,
          and operations safe.
        </p>
      </section>

      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
        <div className="p-6 bg-gray-50 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-600">
            To redefine security by combining precision engineering with
            cutting-edge innovation, giving businesses the confidence to grow
            without compromise.
          </p>
        </div>
        <div className="p-6 bg-gray-50 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">Proactive Defense</h3>
          <p className="text-gray-600">
            We focus on stopping attacks before they become losses.
          </p>
        </div>
        <div className="p-6 bg-gray-50 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">Trust & Reliability</h3>
          <p className="text-gray-600">
            Accuracy and resilience are built into every decision we make.
          </p>
        </div>
        <div className="p-6 bg-gray-50 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">Innovation with Purpose</h3>
          <p className="text-gray-600">
            Practical technology that solves real-world problems.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto text-center">
        <p className="text-lg text-gray-700 mb-6">
          At VEYR, we don’t just protect assets! By delivering
          next-generation security, we empower businesses to operate with confidence,
          today and into the future.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
