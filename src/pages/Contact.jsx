const Contact = () => (
  <div className="pt-24 container mx-auto max-w-3xl">
    <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
    <div className="mb-8">
      {/* Map embed placeholder */}
      <div className="w-full h-64 bg-gray-200 mb-4 flex items-center justify-center">Map Embed</div>
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="mb-4 md:mb-0">
          <h2 className="font-bold">Hours</h2>
          <p>Mon-Sun: 11am - 11pm</p>
          <h2 className="font-bold mt-4">Phone</h2>
          <p>(123) 456-7890</p>
          <h2 className="font-bold mt-4">Email</h2>
          <p>info@grilledsteak.com</p>
        </div>
        <form className="flex-1 space-y-4">
          <input type="text" placeholder="Name" className="w-full p-3 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-3 border rounded" />
          <textarea placeholder="Message" className="w-full p-3 border rounded" />
          <button type="submit" className="bg-primary text-white px-6 py-3 rounded">Send</button>
        </form>
      </div>
    </div>
  </div>
);

export default Contact; 