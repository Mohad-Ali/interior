import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactForm from "../Components/ContactForm";

const services = [
  {
    title: "BEST INTERIOR DESIGN",
    text: "From idea to execution, we deliver complete interior design services personalized to your taste",
    image: "/design1.png",
  },
  {
    title: "SPACE PLANNING",
    text: "Transform your space with intelligent design and optimized layouts tailored to your needs.",
    image: "/design2.png",
  },
  {
    title: "PROJECT MANAGEMENT",
    text: "Interior project runs smoothly from start to finish. We handle timelines, budgets, and coordination so you can enjoy a stress-free transformation.",
    image: "/design3.png",
  },
];

export default function ServicesPage() {
  const [current, setCurrent] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const next = () => setCurrent((prev) => (prev + 1) % services.length);
  const prev = () => setCurrent((prev) => (prev - 1 + services.length) % services.length);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-4">
      {/* Service Cards Carousel */}
      <div className="w-full max-w-6xl flex justify-center items-center">
        <div className="flex w-full flex-col-reverse md:flex-row bg-[#F5ECE1] shadow-md rounded-2xl overflow-hidden border border-gray-300">
          {/* Left Side Content */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
        <h2 className="text-xl md:text-2xl font-bold text-black mb-4">{services[current].title}</h2>
        <p className="text-gray-800 mb-6">{services[current].text}</p>
        
        <button
          onClick={() => setShowForm(true)}
          className="bg-[#5E3B23] text-white px-5 py-2 rounded hover:bg-[#472d1a] w-fit hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
        >
          Book Now
        </button>

        {/* Dots */}
        <div className="flex mt-6 gap-2">
          {services.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                idx === current ? "bg-[#5E3B23]" : "bg-white border border-[#5E3B23]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/10 flex items-center justify-center p-4">
          <div className="relative bg-[#f8f1e5]  rounded-lg max-w-3xl w-full shadow-xl">
            <button
              className="absolute top-3 right-4 text-2xl text-black hover:text-red-600 cursor-pointer"
              onClick={() => setShowForm(false)}
            >
              ✕
            </button>
            <ContactForm />
          </div>
        </div>
      )}

          {/* Right Side Image */}
          <div className="w-full md:w-1/2 flex items-center justify-center md:py-8 py-0 ">
            <div className="border-y-8 border-l-8  pl-4 py-4 border-black  overflow-hidden">
              <img
                src={services[current].image}
                alt={services[current].title}
                className="w-full h-full  object-cover hover:scale-90 transition-transform duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-6 md:hidden flex gap-4">
        <button onClick={prev} className="px-4 py-2 bg-gray-300 rounded-full hover:bg-gray-400">
          ←
        </button>
        <button onClick={next} className="px-4 py-2 bg-gray-300 rounded-full hover:bg-gray-400">
           →
        </button>
      </div>

      {/* Project Process Section */}
<div className="w-full max-w-6xl text-center ">
    <div className="bg-gray-100 text-center py-16 relative">
        <h2 className="text-2xl font-serif tracking-wide text-gray-800 inline-block relative">
          <span className="hidden sm:block absolute border-t-2 border-gray-300 top-1/2 right-80 w-[500px]"></span>
          PROCESS OF PROJECT
          <span className="hidden sm:block absolute border-t-2 border-gray-300 top-1/2 left-80 w-[500px]"></span>
        </h2>
      </div>
  <div className="flex flex-wrap gap-14 justify-center ">
    {[
      { image: "/proj logo1.png", title: "Meet a Designer" },
      { image: "/proj logo2.png", title: "Clear Approval" },
      { image: "/proj logo3.png", title: "Execution Begins" },
      { image: "/proj logo4.png", title: "Final Installation" },
      { image: "/proj logo5.png", title: "On Time Project" },
    ].map((step, i) => (
      <div key={i} className="w-[140px] md:w-[180px] flex flex-col items-center">
        <div className="w-full h-full bg-transparent rounded  overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
          <div>
          <img
            src={step.image}
            alt={step.title}
            className="w-full h-full object-cover"
          />
          </div>
        </div>
        <p className="mt-4 text-center text-sm md:text-xl font-medium text-gray-800">
          {step.title}
        </p>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}
