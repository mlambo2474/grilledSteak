const ReviewCard = ({ name, review, rating, image }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
    <img src={image} alt={name} className="w-16 h-16 rounded-full mb-4 object-cover" />
    <div className="font-bold mb-2">{name}</div>
    <div className="text-yellow-400 mb-2">{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</div>
    <p className="text-gray-600">{review}</p>
  </div>
);

export default ReviewCard; 