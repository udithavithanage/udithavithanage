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
      <div class="w-full flex justify-center items-center px-3">
        <div
          class="relative w-full max-w-4xl aspect-video rounded-lg shadow-2xl overflow-hidden"
        >
          <iframe
            src="https://web-video-player2.vercel.app/sample.mp4"
            class="absolute inset-0 w-full h-full border-none"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          >
          </iframe>
        </div>
      </div>
      <Projects />
      <AddBox
        logo={
          "https://videodownloaderv2-9gvseiqgr-udithavithanages-projects.vercel.app/img/logo.png"
        }
        tittle={"Video Downloader"}
        des={
          "Video Downloader Web App A Node.js-powered video downloader for downloading videos from popular platforms like YouTube, Facebook, TikTok, and Instagram. This web app uses HBS templates, HTML, and CSS to deliver a clean, responsive interface for seamless video downloads."
        }
        link={
          "https://videodownloaderv2-9gvseiqgr-udithavithanages-projects.vercel.app/"
        }
        color={"orange"}
      />
      <br />
      <AddBox
        logo={
          "https://petlife-tawny.vercel.app/static/media/logo.eaec1c36dbf4107d334d.png"
        }
        tittle={"PetLife"}
        des={`What if caring for your beloved pets was as effortless as the joy they bring to your life? From wagging tails to gentle purrs, our pets are family – and they deserve the very best. 🐕🐾
That’s why we are creating PetLife, a smart Pet Healthcare Management Web App designed to make pet care seamless. With digital health records, care reminders, vet appointment scheduling, and even a community for pet lovers, we’re here to transform the way you nurture your furry friends.
Because every bark, meow, and cuddle deserves love and care backed by innovation. 💖✨`}
        link={"https://petlife-tawny.vercel.app/"}
        color={"yellow"}
      />
      <br />
      <AddBox
        logo={
          "https://udithavithanage.vercel.app/static/media/logo.0bfee360c9c16e57fd8d.png"
        }
        tittle={"VCU Calculators"}
        des={`A React-based application featuring three interactive calculators for financial planning.`}
        link={"https://calculators-peach.vercel.app/"}
        color={"blue"}
      />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
