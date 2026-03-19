import React from "react";

export default function AboutSection() {
  return (
    <section className="bg-gray-100 w-full flex flex-col items-center justify-center pb-16">
     

      <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-5">
        {/* Testimonial */}
        <blockquote className="text-lg text-center md:text-left max-w-xl font-medium text-gray-800 leading-relaxed">
          “Working with Interor was an absolute pleasure. Their attention to detail and creativity
          transformed our home into a stunning and functional space. We couldn't be happier with
          the results!”
        </blockquote>

        {/* Circular Image */}
        <div className="w-72 h-72  rounded-full overflow-hidden shrink-0">
          <img
            src="/Ellipse.png" // Replace with actual image path
            alt="Office team"
            className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
}
