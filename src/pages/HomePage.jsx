import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import WhatWeDo from "../Components/WhatweDo";
import ServicesPage from "./ServicesPage";
import SplitLayoutSection from "../Components/SplitLayoutSection";
import AboutSection from "../Components/AboutSection";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function HomePage() {
 
   const followerRef = useRef(null);
   const homeRef = useRef(null);
   
useEffect(() => {
  const follower = followerRef.current;
  const homeSection = homeRef.current;

  if (!follower || !homeSection) return;

  const moveFollower = (e) => {
    const rect = homeSection.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Only move if inside bounds
     gsap.to(follower, {
      x: x,
      y: y,
      duration: 0.4,
      ease: "power2.out",
    });
  };

    const show = () => {
    gsap.to(follower, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const hide = () => {
    gsap.to(follower, {
      scale: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };


  // Bind mouse events to home only
  homeSection.addEventListener("mousemove", moveFollower);
  homeSection.addEventListener("mouseenter", show);
  homeSection.addEventListener("mouseleave", hide);

  return () => {
    homeSection.removeEventListener("mousemove", moveFollower);
    homeSection.removeEventListener("mouseenter", show);
    homeSection.removeEventListener("mouseleave", hide);
  };
}, []);

  return (
    <>
    <div className="w-full overflow-x-hidden">
  <div
  ref={homeRef}
  id="home"
  className="relative min-h-screen bg-cover bg-center overflow-hidden"
  style={{ backgroundImage: "url('/hero.png')" }}
>
  {/* Mouse Follower - scoped to #home */}
  <div
    ref={followerRef}
    className="w-16 h-16  rounded-full bg-white absolute z-50 pointer-events-none mix-blend-difference hidden lg:block"
    style={{ transform: "translate(-50%, -50%) scale(0)" }}
  />

  {/* Navbar */}
  <Navbar />

  {/* Hero Section */}
  <section className="flex items-center justify-center h-[calc(100vh-80px)] text-center px-4">
    <div className="max-w-3xl text-white mt-40">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-lg whitespace-nowrap">
        When Comfort meets Style
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-black drop-shadow-md">
        Transform your living room into a sanctuary of elegance
      </p>
    </div>
  </section>
</div>

      {/* What We Do Section */}
      <div id="whatwedo" className="bg-gray-100 text-center py-16 relative">
        <h2 className="text-2xl font-serif tracking-wide text-gray-800 inline-block relative">
         <span className="hidden sm:block absolute  border-t-2 border-gray-300 top-1/2 right-70 w-[500px]"></span>
          WHAT WE DO
          <span className="hidden sm:block absolute border-t-2 border-gray-300 top-1/2 left-70 w-[500px]"></span>
        </h2>
      </div>
      <WhatWeDo />

      {/* Services Section */}
      <div id="services" className="bg-gray-100 text-center py-16 relative">
        <h2 className="text-2xl font-serif tracking-wide text-gray-800 inline-block relative">
          <span className="hidden sm:block absolute  border-t-2 border-gray-300 top-1/2 right-60 w-[500px]"></span>
          SERVICES
          <span className="hidden sm:block absolute border-t-2 border-gray-300 top-1/2 left-60 w-[500px]"></span>
        </h2>
      </div>
      <ServicesPage />

      {/* {SplitLayoutSection} */}
        <div id="blogs" className="bg-gray-100 text-center py-16 relative">
        <h2 className="text-2xl font-serif tracking-wide text-gray-800 inline-block relative">
          <span className="hidden sm:block absolute border-t-2 border-gray-300 top-1/2 right-40 w-[550px]"></span>
          BLOGS
          <span className="hidden sm:block absolute border-t-2 border-gray-300 top-1/2 left-40 w-[550px]"></span>
        </h2>
      </div>
      <SplitLayoutSection />
{/* {About} */}
      <div id="about" className="bg-gray-100 text-center py-16 relative">
        <h2 className="text-2xl font-serif tracking-wide text-gray-800 inline-block relative">
          <span className="hidden sm:block absolute border-t-2 border-gray-300 top-1/2 right-40 w-[550px]"></span>
          ABOUT
          <span className="hidden sm:block absolute border-t-2 border-gray-300 top-1/2 left-40 w-[550px]"></span>
        </h2>
      </div>
      <AboutSection />
      {/* Footer */}
      <Footer />
      </div>
    </>
  );
}
