import React, {useState, useEffect} from "react";
import { Dishes } from "../components/Dishes";
import DishCard from "../components/DishCard";
import orderImage from "../assets/onlinebanner2.jpg";
import { MdShoppingCart } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Order = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
  <div className="pt-8 container mx-auto">

    <div className="bg-white fixed w-full z-10 top-20 left-0 flex justify-end items-center px-8  gap-4 text-primary py-4">
      <span className="text-md flex items-center font-bold gap-2 "><FaPhoneAlt className="w-6 h-6 " /><span className="text-secondary-light">(+27) 613-101642</span></span>
       <input type="search" placeholder="Search" className="bg-gray-50 border border-primary p-2 outline-none rounded-2xl"/>
       
       <span className="flex items-center text-3xl font-bold pr-2"><MdShoppingCart className="w-8 h-8" />0</span>
    </div>
    <section
      className="py-8 mb-8 bg-[url('https://static.vecteezy.com/system/resources/thumbnails/046/451/714/small_2x/grilled-steak-sizzling-on-open-flames-seasoned-with-herbs-and-spices-perfect-for-barbecue-food-and-culinary-themes-free-photo.jpg')] bg-no-repeat w-full bg-cover text-white"
      style={{ opacity: 0.8 }}
    >
      <h1 className="text-center text-primary-light font-bold text-4xl p-10">
        Order Online
      </h1>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
        <div>
          <h3 className="font-bold">Hours</h3>
          <p>Mon-Sun: 11am - 11pm</p>
        </div>
        <div>
          <h3 className="font-bold">Enquire</h3>
          <p>info@grilledSteak.com</p>
        </div>
        <div>
          <h3 className="font-bold">Contact</h3>
          <p>(+27) 613-101642</p>
        </div>
      </div>
    </section>
    {/* Product cards grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-secondary">
      {/* ProductCard components will go here */}

      {/* DishCard components will go here */}
      {Dishes.map(({ id, image, title, description, price }) => (
        <DishCard
          key={id}
          image={image}
          title={title}
          description={description}
          price={price}
          onImageClick={(img) => setSelectedImage(img)}
         
        />
      ))}
    </div>
    {/* Modal for enlarged image */}
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

    {/* Cart summary and checkout */}
    <div className="bg-gray-100 p-6 rounded shadow">
      {/* Cart summary and Stripe checkout will go here */}
    </div>
  </div>
);
}

export default Order;
