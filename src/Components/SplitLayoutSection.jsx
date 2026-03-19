import React from "react";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";

const data = [
  {
    image: blog1,
    title: "How To Color",
    text: "Colors influence how we feel in a space. By using the right shades, you can create a home that feels calm, energetic, or cozy.",
  },
  {
    image: blog2,
    title: "Art of Styling the Coffee Table",
    text: "Styling a coffee table is all about balance, texture, and personality. Combine books, candles, trays, and a touch of greenery to create a curated yet inviting look.",
  },
  {
    image: blog3,
    title: "Creating perfect Home Office",
    text: "A well-designed home office supports both style and function. Personal touches and thoughtful design help create a space you enjoy working in every day.",
  },
];

export default function SplitLayoutSection() {
  return (
    <section className="w-full mx-auto bg-gray-100 px-20 space-y-6 ">
      {data.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col md:flex-row rounded-xl md:rounded-tl-[60px] md:rounded-bl-[60px] md:gap-10 overflow-hidden bg-white shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          {/* Image */}
          <div className="md:w-1/2 w-full h-40 md:h-72 overflow-hidden ">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full md:rounded-tr-[60px] md:rounded-br-[60px] object-cover "
            />
          </div>

          {/* Text */}
          <div className="md:w-full w-full p-4 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-serif text-gray-900 mb-2 md:mb-4">{item.title}</h3>
            <p className="text:sm md:text-xl text-gray-700">{item.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
