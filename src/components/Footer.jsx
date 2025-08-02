import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const Footer = () => (
  <footer className="bg-gray-900 text-white py-8 mt-16">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0 ">
        <h2 className="text-xl font-bold mb-2 text-primary">Grilled Steak</h2>
        <p>123 Steakhouse Ave, Food City</p>
        <p>Open: Mon-Sun 11am - 11pm</p>
        <p>Phone:(+27) 613-101642</p>
      </div>
      <form className="flex flex-col md:flex-row items-center">
        <input type="email" placeholder="Subscribe to our newsletter" className="p-2 rounded-l-md text-gray-900" />
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded-r-md mt-2 md:mt-0">Subscribe</button>
      </form>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <a href="#" aria-label="Instagram" className="hover:text-primary"><FaInstagram /></a>
        <a href="#" aria-label="Facebook" className="hover:text-primary"><FaFacebookF /></a>
        <a href="#" aria-label="Twitter" className="hover:text-primary"><FaXTwitter /></a>
      </div>
    </div>
  </footer>
);

export default Footer; 