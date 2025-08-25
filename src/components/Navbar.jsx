import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Navbar = () =>{
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
  <nav className={`fixed w-full z-10 top-0 left-0 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
    <div className={`container mx-auto flex flex-col items-center  py-4 px-6 ${isScrolled ? 'text-secondary' : 'text-primary-dark'}`}>
    <div className='flex items-center gap-2'>
    <Link to="/" className={`text-2xl font-bold font-cursive ${isScrolled ? 'hover:text-primary' : 'hover:text-secondary'}`}>
      {/* <img src={logo} alt="logo image" className="w-10 h-10" /> */}
      Grilled Steak
      </Link>
    </div>
     
      <div className={`space-x-5 md:space-x-10 text-sm flex-1 py-2 `}>
        <Link to="/menu" className={`${isScrolled ? 'hover:text-primary' : 'hover:text-secondary'}`}>Menu</Link>
        <Link to="/order" className={`${isScrolled ? 'hover:text-primary' : 'hover:text-secondary'}`}>Order Online</Link>
        <Link to="/reserve" className={`${isScrolled ? 'hover:text-primary' : 'hover:text-secondary'}`}>Reserve Table</Link>
        <Link to="/about" className={`${isScrolled ? 'hover:text-primary' : 'hover:text-secondary'}`}>About</Link>
        <Link to="/contact" className={`${isScrolled ? 'hover:text-primary' : 'hover:text-secondary'}`}>Contact</Link>
      </div>
    </div>
  </nav>
  );
};

export default Navbar; 