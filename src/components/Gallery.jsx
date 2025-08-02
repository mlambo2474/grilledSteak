import React, { useState } from "react";
import steak from "../assets/grilledsteak.jpg";
import grilledpork from "../assets/grilledpork.jpg";
import lampchops from "../assets/lampchops.jpg";
import lampdish from "../assets/lampdish.avif";
import SantaMariapork from "../assets/Santa-Mariapork.webp";
import fillet from "../assets/lampp.jpg";
import friedchicken from "../assets/friedchicken.jpg";
import chickensteak from "../assets/chiken-Steak.jpg";
import fajitas from "../assets/chickensteak-fajitas.jpg";


const images = [
  { src: steak, caption: "Grilled Ribeye Steak" },
  { src: grilledpork, caption: "grilled pork and lettuce" },
  { src: lampchops, caption: "Medium rare Lamp Chops" },
  { src: lampdish, caption: "Classic lebaneese lamp with potatoes" },
  { src: SantaMariapork, caption: "Santa-Maria pork chops" },
  { src: fillet, caption: "long bone lambchops with sauce" },
  { src: friedchicken, caption: "fried chicken" },
  { src: chickensteak, caption: "chickensteak, carrot, potatoes and green beans" },
  { src: fajitas, caption: "Classic Chicken Fajitas" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="p-6 bg-neutral-light min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary-light">
        Our Gallery
      </h2>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="cursor-pointer overflow-hidden rounded-lg shadow-lg group"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img.src}
              alt={img.caption}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl mx-auto">
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="max-h-[80vh] w-auto rounded-lg shadow-xl"
            />
            <p className="text-center text-white text-lg mt-4">
              {selectedImage.caption}
            </p>
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
