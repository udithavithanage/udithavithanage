import React from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <div className="bg-orange-50 shadow-lg rounded-lg overflow-hidden border border-gray-300 p-4 max-w-3xl mx-auto mt-10">
        <h1 className="text-xl font-semibold text-gray-800 mb-4">
          Embedded Video Downloader
        </h1>
        <iframe
          src="https://videodownloaderv2-9gvseiqgr-udithavithanages-projects.vercel.app/"
          className="w-full h-[1000px] rounded-lg border border-gray-200 scrollbar-thin"
        ></iframe>
      </div>
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
