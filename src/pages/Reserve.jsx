import tableImage from "../assets/restauranttable.png"
const Reserve = () => (
  <div className="py-16 md:py-24 container mx-auto max-w-3xl">
    <div>
      <img src={tableImage} alt="table-image" className="h-40 w-full"/>
    </div>
    <h1 className="text-3xl font-bold mb-6 text-primary text-center py-10">Reserve a Table</h1>
    <form className="space-y-4 max-w-xl mx-auto text-secondar p-4 shadow-lg">
      <input type="text" placeholder="Full Name" className="bg-gray-50 w-full p-3 border rounded outline-primary" />
      <input type="email" placeholder="Email" className="bg-gray-50 w-full p-3 border rounded outline-primary" />
      <input type="tel" placeholder="Phone" className="bg-gray-50 w-full p-3 border rounded outline-primary" />
      <input type="number" placeholder="Number of Guests" className="bg-gray-50 w-full p-3 border rounded outline-primary" min="1"  />
      <input type="date" className="bg-gray-50 w-full p-3 border rounded outline-primary"  />
      <input type="time" className="bg-gray-50 w-full p-3 border rounded outline-primary" />
      <textarea placeholder="Special Requests" className="bg-gray-50 w-full p-3 border rounded outline-primary" />
      <button type="submit" className="bg-primary text-white px-6 py-3 rounded">Reserve</button>
    </form>
  </div>
);

export default Reserve; 