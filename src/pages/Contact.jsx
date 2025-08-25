const Contact = () => (
  <div className="pt-14 md:pt-24 container mx-auto max-w-3xl text-secondary">
    <h1 className="text-3xl font-bold mb-6 text-primary text-center">Contact Us</h1>
    <div className="mb-8">
      {/* Map embed placeholder */}
      <div className="w-full h-64 bg-gray-200 mb-4 flex items-center justify-center ">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d822.853082661412!2d19.246929825032797!3d-34.416280120054736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dce0bb021c8bbc9%3A0xe48b43ee346c8f17!2sProtea%20House!5e0!3m2!1sen!2sza!4v1753535904337!5m2!1sen!2sza" className="h-64 w-full" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
     {/* TIMEZONE */}
     <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row justify-between">
        <div>
          <h3 className="font-bold text-center text-primary">Hours</h3>
          <p>Mon-Sun: 11am - 11pm</p>
        </div>
        <div>
          <h3 className="font-bold text-center text-primary">Enquire</h3>
          <p>info@grilledSteak.com</p>
        </div>
        <div>
          <h3 className="font-bold text-center text-primar">Contact</h3>
          <p>(+27) 613-101642</p>
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-6 text-primary text-center">Questions? Comments? Advice?</h1>
      <form className="flex-1 space-y-4 px-4">
          <input type="text" placeholder="Name" className="bg-gray-50 w-full p-3 border rounded  outline-primary" />
          <input type="email" placeholder="Email" className="bg-gray-50 w-full p-3 border rounded outline-primary" />
          <input type="text" placeholder="Subject" className="bg-gray-50  w-full p-3 border rounded outline-primary" />
          <textarea placeholder="Message" className="bg-gray-50 w-full p-3 border rounded outline-primary" />
          <button type="submit" className="bg-primary text-white px-6 py-3 rounded">Send</button>
        </form>
    </div>
  </div>
);

export default Contact; 