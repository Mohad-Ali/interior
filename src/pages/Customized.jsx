import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";

import kitchen from "../assets/kitchen.png";
import kitchen1 from "../assets/kitchen card1.png";
import kitchen2 from "../assets/kitchen card2.png";
import kitchen3 from "../assets/kitchen card3.png";

import bedroom from "../assets/bedroom.png";
import bedroom1 from "../assets/bedroom card1.png";
import bedroom2 from "../assets/bedroom card2.png";
import bedroom3 from "../assets/bedroom card3.png";

import dining from "../assets/dining.png";
import dining1 from "../assets/dining card1.png";
import dining2 from "../assets/dining card2.png";
import dining3 from "../assets/dining card3.png";

import livingroom from "../assets/livingroom.png";
import livingroom1 from "../assets/livingroom card1.png";
import livingroom2 from "../assets/livingroom2.png";
import livingroom3 from "../assets/livingroom3.png";

export default function Customized() {
  const navigate = useNavigate();
  const { type } = useParams(); // gets 'kitchen', 'bedroom', etc.


  const followerRef = useRef(null);
   const layoutRef = useRef(null);
   
useEffect(() => {
  const follower = followerRef.current;
  const layoutSection = layoutRef.current;

  if (!follower || !layoutSection) return;

  const moveFollower = (e) => {
    const rect = layoutSection.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

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



  layoutSection.addEventListener("mousemove", moveFollower);
  layoutSection.addEventListener("mouseenter", show);
  layoutSection.addEventListener("mouseleave", hide);

  return () => {
    layoutSection.removeEventListener("mousemove", moveFollower);
    layoutSection.removeEventListener("mouseenter", show);
    layoutSection.removeEventListener("mouseleave", hide);
  };
}, []);


  // Configuration per type
  const dataMap = {
    kitchen: {
      title: "CUSTOMIZED KITCHEN",
      image: {kitchen},
      cards: [
        {
          title: "PARALLEL SHAPED KITCHEN",
          img: {kitchen1},
          alt: "Parallel Shaped Kitchen",
          desc: "Maximize efficiency with our expertly designed parallel kitchens — the ideal layout for compact and spacious homes alike. At our Company, we create customized parallel kitchen interiors that offer smart storage, smooth workflow, and a modern aesthetic. From sleek finishes to functional layouts, we ensure your kitchen is both stylish and practical — crafted to reflect your lifestyle and cooking needs.",
        },
        {
          title: "U SHAPED KITCHEN",
          img: {kitchen2},
          alt: "U Shaped Kitchen",
          desc: "We design U-shaped kitchens that offer maximum workspace, storage, and style. This layout is perfect for those who love cooking and need a highly efficient setup Wrap-around convenience with modern flair. With three-sided counters, seamless workflow, and a personalized touch — we craft your kitchen to be both beautiful and functional. Whether modern, minimal, or classic, we bring your ideal kitchen to life.",
        },
        {
          title: "ISLAND KITCHEN",
          img: {kitchen3},
          alt: "Island Kitchen",
          desc: "Island kitchens that become the heart of your home. Whether you love hosting or need extra prep space, an island adds both function and elegance. From sleek modern styles to warm, family-friendly layouts — we customize every detail to suit your lifestyle. Experience smart storage, sample workspace, and a stylish centerpiece — all in one perfect design.",
        },
      ],
    },
    bedroom: {
      title: "CUSTOMIZED BEDROOM",
      image: {bedroom},
      cards: [
        {
          title: "Study Table design",
          img: {bedroom1},
          alt: "Study Table",
          desc: "we design study tables that design comfort, style, and productivity. Every piece is tailored to fit your space, needs, and aesthetic. We focus on smart storage, ergonomic design, and clutter-free layouts.Whether it’s for kids, teens, or professionals, we have the perfect solution.Trust us to create the ideal study environment – thoughtfully and flawlessly designed.",
        },
        {
          title: "Dressing unit",
          img: {bedroom2},
          alt: "Dressing unit",
          desc: "we design custom dressing units that add charm, convenience, and elegance to your bedroom. Whether it's a compact vanity or a luxurious full-wall setup, we tailor every element — mirrors, storage, lighting, and finishes — to suit your space and personal style. Our goal is to create a functional yet beautiful corner where you start and end your day with ease.",
        },
        {
          title: "wardrobe",
          img: {bedroom3},
          alt: "wardrobe",
          desc: "we create custom wardrobe designs that blend smart storage with stunning style. Whether it's a sliding wardrobe, walk-in closet, or classic hinged design, we tailor every inch to your space and lifestyle. From organized compartments to elegant finishes, we ensure your wardrobe isn’t just functional — it’s beautifully crafted for daily ease and lasting appeal.",
        },
      ],
    },
    dining: {
      title: "CUSTOMIZED DINING",
      image: {dining},
      cards: [
        {
          title: "DINING TABLE",
          img: {dining1},
          alt: "Dining Table",
          desc: "Maximize efficiency with our expertly designed dining tables — the ideal centerpiece for family gatherings and meals. At our Company, we create customized dining table interiors that offer smart storage, smooth workflow, and a modern aesthetic. From sleek finishes to functional layouts, we ensure your dining area is both stylish and practical — crafted to reflect your lifestyle and entertaining needs.",
        },
        {
          title: "WASH AREA",
          img: {dining2},
          alt: "Wash Area",
          desc: "we create smart and stylish wash area designs that make your daily chores more efficient and your space more elegant. Whether it’s a compact utility corner or a dedicated laundry zone, we customize every detail — from storage cabinets and sink placement to ventilation and lighting. Clean, clutter-free, and functional — we design the perfect wash area to suit your home and routine.",
        },
        {
          title: "DINING CABINET",
          img: {dining3},
          alt: "Dining Cabinet",
          desc: "Island kitchens that become the heart of your home. Whether you love hosting or need extra prep space, an island adds both function and elegance. From sleek modern styles to warm, family-friendly layouts — we customize every detail to suit your lifestyle. Experience smart storage, sample workspace, and a stylish centerpiece — all in one perfect design.",
        },
      ],
    },
    livingroom: {
      title: "CUSTOMIZED LIVING ROOM",
      image: {livingroom},
      cards: [
        {
          title: "TV UNIT",
          img: {livingroom1},
          alt: "TV Unit",
          desc: "Transform your living space with our expertly designed TV units that blend functionality and style. At kriziano Interiors, we specialize in crafting bespoke TV unit designs that match your home’s aesthetic and maximize your space. Whether you prefer a modern minimal look or a luxurious built-in setup, we ensure every detail is tailored to your needs  from hidden storage to ambient lighting.",
        },
        {
          title: "BOOK SHELVES",
          img: {livingroom2},
          alt: "Book Shelves",
          desc: "At Kriziano Interiors, We create beautifully crafted bookshelves that bring character, style, and smart storage to your space. Whether it's a compact wall shelf or a full-featured library unit, our designs are tailored to fit your home and lifestyle perfectly. From minimalist floating shelves to bold statement pieces, we design the perfect bookshelf for book lovers and decor enthusiasts alike.",
        },
        {
          title: "PARTITION",
          img: {livingroom3},
          alt: "Partition",
          desc: "We specialize in designing elegant and functional partitions that beautifully divide your space without closing it off. Whether it's a wooden screen, glass divider, or a multifunctional storage partition, we custom design every detail to match your style and needs. Perfect for open spaces, living-dining separations, or creating privacy with flair — we make your interiors smarter and more stylish.",
        },
      ],
    },
    // Add dining and livingroom data similarly
  };

  const current = dataMap[type];

  if (!current) {
    return <div className="text-center mt-20 text-xl">Invalid customization type</div>;
  }

  return (
    <div className="bg-[#f6f0e8] min-h-screen text-black">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300">
        <button
          className="text-xl cursor-pointer"
          onClick={() => navigate(-1)}
          aria-label="Go Back"
        >
          ←
        </button>
        <h1 className="text-xl font-semibold">WHAT WE DO</h1>
        <div className="w-6" />
      </div>

      {/* Landing Image */}
 <div className="w-full h-screen relative overflow-hidden" ref={layoutRef}>
  <div
    ref={followerRef}
    className="w-16 h-16 rounded-full bg-white absolute z-50 pointer-events-none mix-blend-difference hidden lg:block"
    style={{ transform: "translate(-50%, -50%) scale(0)" }}
  />
  <img
    src={current.image}
    alt={current.title}
    className="object-cover w-full h-full"
  />
</div>

      {/* Section Title */}
      <div className="text-center my-10">
        <h2 className="text-2xl font-serif">{current.title}</h2>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pb-12 ">
        {current.cards.map((card, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
              src={card.img}
              alt={card.alt}
              className="rounded-md mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-lg font-semibold mb-2 text-center">
              {card.title}
            </h3>
            <p className="text-sm text-gray-700">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
