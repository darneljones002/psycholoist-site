export default function Hero() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-[var(--brand-sky)] opacity-40"></div>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Support for children, teens, and families navigating big feelings.
          </h1>

          <p className="mt-5 text-lg text-gray-700">
            Compassionate therapy using CBT-informed strategies, parent coaching,
            and structured skill-building to help children improve emotional
            regulation, behavior, and daily routines.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <a href="#contact" className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700">
              Start Intake
            </a>
            <a href="#specialties" className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100">
              View Specialties
            </a>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-xl font-bold">What Families Can Expect</h2>
          <ul className="mt-4 space-y-3 text-gray-700">
            <li>• Calm and structured sessions</li>
            <li>• Parent collaboration and coaching</li>
            <li>• Practical strategies for home</li>
            <li>• Neurodiversity-affirming care</li>
          </ul>
        </div>
      </div>
    </section>
  );
}