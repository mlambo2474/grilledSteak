import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-white shadow-md fixed w-full z-10 top-0 left-0">
    <div className="container mx-auto flex items-center text-accent-light justify-between py-4 px-6">
      <Link to="/" className="text-3xl font-bold text-accent-light">Grilled Steaks</Link>
      <div className="space-x-6 text-sm">
        <Link to="/menu" className="hover:text-primary ">Menu</Link>
        <Link to="/order" className="hover:text-primary">Order Online</Link>
        <Link to="/reserve" className="hover:text-primary">Reserve Table</Link>
        <Link to="/about" className="hover:text-primary">About</Link>
        <Link to="/contact" className="hover:text-primary">Contact</Link>
      </div>
    </div>
  </nav>
);

export default Navbar; 