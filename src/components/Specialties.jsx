const items = [
  "Autism",
  "ADHD",
  "Parent Coaching",
  "Behavioral Challenges",
  "Social Skills",
  "Emotional Regulation",
  "Toileting & Routines",
  "School Concerns",
];

export default function Specialties() {
  return (
    <section id="specialties" className="py-16 bg-[var(--brand-lilac)]/40">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold">Specialty Areas</h2>

        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item) => (
            <div key={item} className="bg-white rounded-2xl shadow p-4 font-semibold text-center">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}