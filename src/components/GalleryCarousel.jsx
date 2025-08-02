import React, { useState } from "react";
import steak from "../assets/f2.jpg";
import pasta from "../assets/g11.jpeg";
import salad from "../assets/g10.jpeg";
import burger from "../assets/g3.jpeg";
import bbq from "../assets/g6.jpeg";

const images = [steak, pasta, salad, burger, bbq];

const GalleryCarousel = () => {
  const [paused, setPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="relative overflow-hidden w-full bg-gray-100">
      {/* Overlay (only visible when paused) */}
      {paused && (
        <div className="absolute inset-0 bg-black/50 z-10 transition-opacity"></div>
      )}

      <div
        className={`flex ${paused ? "" : "animate-marquee"}`}
        onMouseLeave={() => {
          setPaused(false);
          setActiveIndex(null);
        }}
      >
        {images.concat(images).map((img, index) => (
          <img
            key={index}
            src={img}
            onMouseEnter={() => {
              setPaused(true);
              setActiveIndex(index);
            }}
            className={`h-64 w-auto object-cover mx-2 rounded-lg shadow-md transition-transform duration-500 ${
              activeIndex === index
                ? "scale-125 z-20 relative shadow-2xl"
                : "scale-100"
            }`}
            alt={`gallery-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
