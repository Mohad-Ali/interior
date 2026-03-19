import React, { useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import gsap from "gsap";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = marqueeRef.current.querySelector(".marquee-track");

      gsap.to(track, {
        xPercent: -50,
        duration: 30,
        ease: "linear",
        repeat: -1,
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer id="contact" className="bg-[#F3EBE1] text-[#2A1C10] text-sm pt-12 pb-4">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-10">
        {/* Logo */}
        <div className="flex flex-col items-start">
          <img className="h-20" src={logo} alt="KRIZIANO INTERIORS" />
        </div>

        {/* Menu */}
        <div>
          <h4 className="uppercase font-semibold mb-2">Menu</h4>
          <ul className="space-y-1">
            <li><a href="#home" className="hover:underline">HOME</a></li>
            <li><a href="#whatwedo" className="hover:underline">WHAT WE DO</a></li>
            <li><a href="#services" className="hover:underline">SERVICES</a></li>
            <li><a href="#blogs" className="hover:underline">BLOGS</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="uppercase font-semibold mb-2">Follow Us</h4>
          <ul className="space-y-1">
            <li><a href="https://www.instagram.com/krizano_interior/#" className="hover:underline"><FaInstagram className="w-5 h-5" /></a></li>
            <li><a href="tel:9840942784" className="hover:underline">9840942784</a></li>
            <li><a href="mailto:krizanointerior@gmail.com" className="hover:underline">krizanointerior@gmail.com</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="uppercase font-semibold mb-2">Contact</h4>
          <input
            type="email"
            placeholder="Enter Email Address"
            className="w-full border border-[#9C6B4F] rounded px-3 py-2 mb-2 text-sm outline-none"
          />
          <button className="bg-[#9C6B4F] text-white text-sm px-4 py-2 rounded hover:bg-[#81553c]">
            Subscribe
          </button>
          <p className="mt-1 text-xs text-gray-600">We never spam you!</p>
        </div>
      </div>

      {/* Marquee Bottom Banner */}
      <div ref={marqueeRef} className="mt-10 overflow-hidden whitespace-nowrap">
        <div className="marquee-track flex w-max text-[32px] text-[#D5C7BA] tracking-widest font-serif">
          <span className="flex gap-6">
            {Array(10)
              .fill("GET IN TOUCH ★")
              .map((text, i) => (
                <span key={i}>{text}</span>
              ))}
          </span>
          <span className="flex gap-6 ml-6">
            {Array(10)
              .fill("GET IN TOUCH ★")
              .map((text, i) => (
                <span key={`dup-${i}`}>{text}</span>
              ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
