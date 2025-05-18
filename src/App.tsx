"use client";

import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Functions from "./sections/Functions";
import Faq from "./sections/Faq";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  useEffect(() => {
    // Aplicar el fondo oscuro al body
    document.body.style.backgroundColor = "#0E0E17";
    document.body.style.color = "white";
    document.body.style.fontFamily = "Poppins, sans-serif";

    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
      document.body.style.fontFamily = "";
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Functions />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
