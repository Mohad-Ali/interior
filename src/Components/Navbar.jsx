import React, { useState, useEffect } from "react";
import { FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import ContactForm from "./ContactForm";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 bg-[#F3EEE7]/70 backdrop-blur-md text-[#3B2A1A] shadow-md">
        <img
          className="h-10 sm:h-12 max-w-full "
          src={logo}
          alt="KRIZIANO INTERIORS"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 sm:gap-6 font-semibold">
          <li>
            <a href="#home" className="hover:underline">
              HOME
            </a>
          </li>
          <li>
            <a href="#whatwedo" className="hover:underline">
              WHAT WE DO
            </a>
          </li>
          <li>
            <a href="#services" className="hover:underline">
              SERVICES
            </a>
          </li>
          <li>
           <a href="#blogs" className="hover:underline">
              BLOGS
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline">
              ABOUT
            </a>
          </li>
        </ul>

        {/* Contact Button (Desktop Only) */}
        <button
          className="hidden md:flex items-center gap-2 bg-white text-black border border-black px-4 py-2 rounded hover:bg-gray-100 text-sm sm:text-base"
          onClick={() => setShowForm(!showForm)}
        >
          <FaEnvelope /> Contact
        </button>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </nav>

       {showForm && (
      <div className="fixed inset-0 mt-96 bg-black/50 z-40 flex items-center justify-center">
        <div className="bg-white p-6 rounded-xl w-[90%] max-w-lg relative">
          <button
            onClick={() => setShowForm(false)}
            className="absolute top-2 right-3 text-xl font-bold"
          >
            ×
          </button>
          <ContactForm />
        </div>
      </div>
    )}

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#F3EEE7] text-[#3B2A1A] p-5 space-y-4 font-semibold">
          <ul className="flex flex-col items-center gap-4 text-center">
            <li>
              <a href="#home" onClick={() => setMenuOpen(false)}>
                HOME
              </a>
            </li>
            <li>
              <a href="#whatwedo" onClick={() => setMenuOpen(false)}>
                WHAT WE DO
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => setMenuOpen(false)}>
                SERVICES
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                ABOUT
              </a>
            </li>
            <li>
              <a href="#blogs" onClick={() => setMenuOpen(false)}>
                BLOGS
              </a>
            </li>
            <li>
                <button className="flex items-center gap-2 bg-white text-black border border-black px-4 py-2 rounded hover:bg-gray-100 w-full justify-center"  onClick={() => setShowForm(!showForm)}>
                  <FaEnvelope /> Contact
                </button>
             
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
