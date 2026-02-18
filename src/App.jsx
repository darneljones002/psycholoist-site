import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Specialties from "./components/Specialties";
import FeedingSupport from "./components/FeedingSupport";
import Contact from "./components/Contact";
import Locations from "./components/Locations";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Specialties />
      <FeedingSupport />
      <Contact />
      <Locations />
      <Footer />
    </div>
  );
}