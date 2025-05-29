
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProperties from './components/FeaturedProperties';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const App: React.FC = () => {
   useEffect(() => {
  
    AOS.init({ duration: 1500, easing: "ease-in-out" });
  }, []);

  return (

      <div className="bg-white  text-gray-900  min-h-screen transition-colors duration-500">
        <Navbar />
        <main className="pt-20">
          <Hero />
          <FeaturedProperties />
          <About />
          <Services />
          <Gallery/>
          <Contact />
        </main>
        <Footer />
      </div>

  );
};

export default App;
