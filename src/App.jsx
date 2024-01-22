import React from "react";
import { useState, useEffect, useRef } from "react";

import Title from "./components/Title";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LinkBar from "./components/LinkBar";

import Auth from "./components/admin_panel/Auth";
import { LogViewer } from "./components/statistics/logViewer";

function App() {
  const contactRef = useRef();
  const heroRef = useRef();

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToHero = () => {
    heroRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#1d1a18]">
      <LogViewer />
      <div className="flex w-full">
        <Auth />
      </div>

      <div className="bg-[#1d1a18] text-stone-200 min-h-screen font-inter ">

        <div className="flex absolute top-5 left-5">
          <LinkBar />
        </div>

        <Hero scrollToContact={scrollToContact} refHero={heroRef} />
        
        <div className="max-w-5xl w-11/12 mx-auto ">
          <Intro />

          <Portfolio />

          <Contact refContact={contactRef} />

          <Footer scrollToHero={scrollToHero} />
        </div>
      </div>
    </div>
  );
}

export default App;
