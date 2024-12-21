import React from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AddBox from "./components/AdBox";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <AddBox />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
