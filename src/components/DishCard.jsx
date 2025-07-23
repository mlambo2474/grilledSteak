const DishCard = ({ image, title, description, price }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
    <img src={image} alt={title} className="h-40 w-full object-cover" />
    <div className="p-4 flex-1 flex flex-col">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 flex-1">{description}</p>
      <div className="text-primary font-bold text-xl">${price}</div>
    </div>
  </div>
);

export default DishCard; 