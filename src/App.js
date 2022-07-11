import React from 'react';
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";


function App() {
  return (
    <main className="text-blue-700 bg-yellow-50 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
export default App; 
