import React, {useState, useEffect} from "react";

const DishCard = ({ image, title, description, price, onImageClick }) => {


  return (
  <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
    <img 
    src={image} 
    alt={title} 
    className="h-60 w-full object-cover"
    onClick={() => onImageClick({src: image, caption: title})}
     />
    <div className="p-4 flex-1 flex flex-col">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 flex-1">{description}</p>
      <div className="text-primary  text-xl font-bold flex justify-between items-center">
        <span className="">${price}</span>
        <button className="text-primary border border-primary p-1 rounded-xl hover:bg-primary hover:text-white text-sm">Select</button>
        </div>
    </div>

   

  </div>
);
}

export default DishCard; 