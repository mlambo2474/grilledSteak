const Reserve = () => (
  <div className="pt-24 container mx-auto max-w-xl">
    <h1 className="text-3xl font-bold mb-6">Reserve a Table</h1>
    <form className="space-y-4">
      <input type="text" placeholder="Name" className="w-full p-3 border rounded" />
      <input type="email" placeholder="Email" className="w-full p-3 border rounded" />
      <input type="tel" placeholder="Phone" className="w-full p-3 border rounded" />
      <input type="number" placeholder="Guests" className="w-full p-3 border rounded" min="1" />
      <input type="date" className="w-full p-3 border rounded" />
      <input type="time" className="w-full p-3 border rounded" />
      <textarea placeholder="Special Requests" className="w-full p-3 border rounded" />
      <button type="submit" className="bg-primary text-white px-6 py-3 rounded">Reserve</button>
    </form>
  </div>
);

export default Reserve; 