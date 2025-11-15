"use client";

import React from "react";
import Marquee from "react-fast-marquee";

const brands = [
  { name: "Nike", logo: "https://via.placeholder.com/150x80?text=Nike" },
  { name: "Adidas", logo: "https://via.placeholder.com/150x80?text=Adidas" },
  { name: "Puma", logo: "https://via.placeholder.com/150x80?text=Puma" },
  { name: "Under Armour", logo: "https://via.placeholder.com/150x80?text=Under+Armour" },
  { name: "Reebok", logo: "https://via.placeholder.com/150x80?text=Reebok" },
];

export default function BrandSlider() {
  return (
    <div className="w-full py-6 mt-10">
      <Marquee
        speed={40}
        pauseOnHover={true}
        gradient={false}
      >
        {brands.map((brand, i) => (
          <div
            key={i}
            className="flex items-center justify-center min-w-[150px] h-[80px] mx-6"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-full object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}