const Home = () => (
  <div className="pt-20">
    {/* Hero Section */}
    <section className="h-[60vh] bg-cover bg-center flex items-center justify-center" style={{backgroundImage: 'url(/src/assets/hero-steak.jpg)'}}>
      <div className="bg-black bg-opacity-50 p-8 rounded">
        <h1 className="text-4xl md:text-6xl font-bold text-red-400 mb-4">Welcome to Grilled Steak</h1>
        <p className="text-lg text-white mb-6">Savor the best steaks in town. Reserve your table or order online!</p>
        <div className="space-x-4">
          <a href="/order" className="bg-primary text-white px-6 py-3 rounded shadow hover:bg-opacity-90 transition">Order Online</a>
          <a href="/reserve" className="bg-white text-primary px-6 py-3 rounded shadow hover:bg-gray-100 transition">Reserve Table</a>
        </div>
      </div>
    </section>
    {/* Featured Dishes */}
    <section className="py-12 container mx-auto">
      <h2 className="text-3xl font-bold mb-6">Featured Dishes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* DishCard components will go here */}
      </div>
    </section>
    {/* Hours, Location, Contact */}
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div>
          <h3 className="font-bold">Hours</h3>
          <p>Mon-Sun: 11am - 11pm</p>
        </div>
        <div>
          <h3 className="font-bold">Location</h3>
          <p>123 Steakhouse Ave, Food City</p>
        </div>
        <div>
          <h3 className="font-bold">Contact</h3>
          <p>(123) 456-7890</p>
        </div>
      </div>
    </section>
    {/* Reviews Carousel */}
    <section className="py-12 container mx-auto">
      <h2 className="text-2xl font-bold mb-6">What Our Customers Say</h2>
      {/* ReviewCard carousel will go here */}
    </section>
    {/* Gallery */}
    <section className="py-12 container mx-auto">
      <h2 className="text-2xl font-bold mb-6">Gallery</h2>
      {/* GalleryGrid will go here */}
    </section>
  </div>
);

export default Home; 