import React, {useState} from "react";
import { FeaturingDishes } from "../components/Dishes";
import ReviewCard from "../components/ReviewCard";
import { reviews } from "../components/Reviews";
import DishCard from "../components/DishCard";
import Gallery from "../components/Gallery"


const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
  <div className="text-secondary pt-10  ">
    {/* Hero Section */}
    <section className="h-[100vh] bg-cover bg-center flex items-center justify-center " style={{backgroundImage: 'url(/src/assets/grilledsteak.jpg)'}}>
      <div className="bg-black bg-opacity-50 p-8 rounded">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Welcome to Grilled Steak</h1>
        <p className="text-lg text-white mb-6">Savor the best steaks in town. Reserve your table or order online!</p>
        <div className="space-x-4">
          <a href="/order" className="bg-primary text-white px-6 py-3 rounded shadow hover:bg-opacity-90 transition">Order Online</a>
          <a href="/reserve" className="bg-white text-primary px-6 py-3 rounded shadow hover:bg-gray-100 transition">Reserve Table</a>
        </div>
      </div>
    </section>
    {/* Featured Dishes */}
    <section className="pt-20 pb-12 container mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary-light">Featured Dishes</h2>
     <div className="p-12 ">

     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* DishCard components will go here */}
        {FeaturingDishes.map(({id, image, title, description, price}) => (
          <DishCard
           key={id}
           image={image} 
           title={title} 
           description={description} 
           price={price}
           onImageClick={(img) => setSelectedImage(img)}
            />
        ))}
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
     
     </div>
    </section>
    {/* Hours, Location, Contact */}
    <section className="py-8 bg-[url('https://static.vecteezy.com/system/resources/thumbnails/046/451/714/small_2x/grilled-steak-sizzling-on-open-flames-seasoned-with-herbs-and-spices-perfect-for-barbecue-food-and-culinary-themes-free-photo.jpg')] bg-no-repeat w-full bg-cover text-white" style={{opacity:0.8}}>
      <h1 className="text-center text-primary-light font-bold text-4xl p-10">Find Us</h1>
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div>
          <h3 className="font-bold">Hours</h3>
          <p >Mon-Sun: 11am - 11pm</p>
        </div>
        <div>
          <h3 className="font-bold">Location</h3>
          <p  >247 Steakhouse Ave,  CapeTown</p>
        </div>
        <div>
          <h3 className="font-bold">Contact</h3>
          <p >(+27) 613-101642</p>
        </div>
      </div>
    </section>

    {/* Reviews Carousel */}
    <section className="py-12 container mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-primary-light">What Our Customers Say</h2>
      {/* ReviewCard carousel will go here */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {reviews.map(({id, name, review, rating }) =>(
          <ReviewCard 
           key={id}
           name={name}
           review={review}
           rating={rating}
          />
        )) 
        }
        </div>
    </section>
    {/* Gallery */}
    <section className="py-12 container mx-auto">
      {/* GalleryGrid will go here */}
      <Gallery />
    </section>
  </div>
  );
};

export default Home; 