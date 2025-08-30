import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";


function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
