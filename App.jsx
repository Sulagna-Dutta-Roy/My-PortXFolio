import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Blogs from "./components/Blogs";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import './App.css';

function App() {
  return (
    <div className="bg-gray-900 text-white font-sans scroll-smooth">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Resume />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;