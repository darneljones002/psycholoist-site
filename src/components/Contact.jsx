export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-[var(--brand-sky)]/40">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold">Contact / Intake</h2>

        <div className="mt-8 bg-white p-6 rounded-2xl shadow">
          <form className="space-y-4">
            <input className="w-full border rounded-xl px-4 py-3" placeholder="Parent Name" />
            <input className="w-full border rounded-xl px-4 py-3" placeholder="Email" />
            <input className="w-full border rounded-xl px-4 py-3" placeholder="Phone" />

            <textarea
              className="w-full border rounded-xl px-4 py-3 min-h-[120px]"
              placeholder="Briefly describe your concerns"
            />

            <button className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700">
              Submit Inquiry
            </button>
          </form>
        </div>

        <p className="mt-6 text-gray-600">
          Phone: (770) 953-4744 • Email: bgjones@pfpaga.com
        </p>
      </div>
    </section>
  );
}