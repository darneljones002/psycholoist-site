const locations = [
  "Marietta",
  "Buckhead",
  "Woodstock",
  "Cumming",
];

export default function Locations() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold">Office Locations</h2>

        <div className="mt-6 grid md:grid-cols-4 gap-4">
          {locations.map((loc) => (
            <div key={loc} className="bg-white shadow rounded-2xl p-6 text-center font-semibold">
              {loc}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}