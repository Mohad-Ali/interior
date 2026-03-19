import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactForm from "../Components/ContactForm";
import whatwedo1 from "../assets/whatwedo1.png";
import whatwedo2 from "../assets/whatwedo2.png";
import whatwedo3 from "../assets/whatwedo3.png";
import whatwedo4 from "../assets/whatwedo4.png";

export default function WhatWeDo() {

   const [showForm, setShowForm] = useState(false);

  return (
    <div className="w-full bg-gray-100">
      {/* Image Grid */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-2 sm:px-4 md:px-6">
          {/* Kitchen Image - Tall on desktop */}
          <Link to="/customized/kitchen" className="md:row-span-2">
            <img
              src={whatwedo1}
              alt="Kitchen"
              className="w-full object-cover rounded-lg shadow h-[300px] sm:h-[400px] md:h-[540px] hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </Link>

          {/* Bedroom Image */}
          <Link to="/customized/bedroom">
          <img
            src={whatwedo2}
            alt="Bedroom"
            className="w-full object-cover rounded-lg shadow h-[200px] sm:h-[240px] md:h-[260px] hover:scale-[1.02] transition-transform duration-300 ease-in-out"
          />
          </Link>

          {/* Dining Image */}
          <Link to="/customized/dining">
            <img
              src={whatwedo3}
              alt="Dining"
              className="w-full object-cover rounded-lg shadow h-[200px] sm:h-[240px] md:h-[260px] hover:scale-[1.02] transition-transform duration-300 ease-in-out"
            />
          </Link>

          {/* Living Room Image */}
          <Link to="/customized/livingroom" className="md:col-span-2">
            <img
              src={whatwedo4}
              alt="Living Room"
              className="w-full object-cover rounded-lg shadow h-[220px] sm:h-[240px] md:h-[250px] hover:scale-[1.02] transition-transform duration-300 ease-in-out"
            />
          </Link>
        </div>
      </div>

      {/* Button */}
      <div className="text-center mt-8">
        <button
              onClick={() => setShowForm(true)}
          className="bg-[#5C2E00] hover:bg-[#7a3e00] text-white font-semibold px-6 py-2 rounded shadow hover:scale-105 cursor-pointer transition duration-300"
        >
          Book a Consultant
        </button>
      </div>
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
    </div>
  );
}
 