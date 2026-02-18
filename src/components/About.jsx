export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-extrabold">Treatment Philosophy</h2>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Therapy begins with compassion. Bryana helps children understand how
            thoughts, emotions, and behaviors connect, while working closely with
            caregivers to reinforce skills at home.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            She supports challenges such as sleep routines, emotional regulation,
            tantrums, transitions, feeding concerns, and social skills.
          </p>
        </div>

        <div className="bg-[var(--brand-mint)] rounded-2xl p-6">
          <h3 className="font-bold text-lg">Training & Education</h3>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>Marcus Autism Center — Emory University (Postdoctoral Fellowship)</li>
            <li>Clinical Psychology, PsyD — Adler University</li>
            <li>Clinical Mental Health Counseling, MS — Adler University</li>
            <li>Applied Behavior Analysis, BS — Savannah State University</li>
          </ul>
        </div>
      </div>
    </section>
  );
}