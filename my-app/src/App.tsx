


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import PopularCars from "./components/PopularCars";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Views from "./components/Views";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
  
    AOS.init({ duration: 1500, easing: "ease-in-out" });
  }, []);

  return (

      <div className="min-h-screen bg-gray-100 mx-auto">
        <Navbar />
        <main className="pt-16 ">
          <Hero />
          
          <Features />
          <Views />
          <PopularCars />
          <Contact />
        </main>
        <Footer />
      </div>

  );
};

export default App;
