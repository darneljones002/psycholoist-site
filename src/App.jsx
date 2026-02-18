export default function App() {
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center">
        <h1 className="text-4xl font-extrabold text-blue-700">
          Tailwind is working ✅
        </h1>
        <p className="mt-4 text-gray-600">
          Utilities like bg-white, p-10, rounded-2xl should work now.
        </p>
        <button className="btn btn-primary">Primary</button>
<button className="btn btn-ghost">Secondary</button>
      </div>
    </div>
  );
}