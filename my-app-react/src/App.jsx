import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import PopularCars from "./components/PopularCars";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Views from "./components/Views";

const App = () => {
  useEffect(() => {

    // Initialize AOS (Animate On Scroll)
    Aos.init({ duration: 1500,  easing: "ease-in-out" });
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="pt-16">
         < Hero />
         <Views />
          <Features />
          <PopularCars />
          <Contact />
       </main>
       < Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
