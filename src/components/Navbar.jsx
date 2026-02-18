export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-extrabold text-lg">
          Bryana Gadis-Jones, PsyD
        </div>

        <nav className="hidden md:flex gap-6 text-sm font-semibold">
          <a href="#about" className="hover:underline">About</a>
          <a href="#specialties" className="hover:underline">Specialties</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>

        <a
          href="#contact"
          className="px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700"
        >
          Request Appointment
        </a>
      </div>
    </header>
  );
}