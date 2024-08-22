import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 flex items-center ${isScrolled ? 'bg-gray-800' : 'bg-transparent'} transition-colors duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-5">
        <Link to="/" className="w-60">
          <img
            src="src/assets/images/logo/logo-white.svg"
            alt="logo"
            className="w-full"
          />
        </Link>
        <nav className="hidden lg:flex flex-1 justify-center items-center space-x-8">
          <Link to="#home" className="text-white hover:text-gray-400">Home</Link>
          <Link to="#about" className="text-white hover:text-gray-400">About</Link>
          <Link to="#pricing" className="text-white hover:text-gray-400">Pricing</Link>
          <Link to="#team" className="text-white hover:text-gray-400">Team</Link>
          <Link to="#contact" className="text-white hover:text-gray-400">Contact</Link>
          <Link to="blog-grids.html" className="text-white hover:text-gray-400">Blog</Link>
          <div className="relative">
            <button className="flex items-center text-white hover:text-gray-400">
              Pages
              <svg
                className="ml-2 fill-current"
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.99999 14.9C7.84999 14.9 7.72499 14.85 7.59999 14.75L1.84999 9.10005C1.62499 8.87505 1.62499 8.52505 1.84999 8.30005C2.07499 8.07505 2.42499 8.07505 2.64999 8.30005L7.99999 13.525L13.35 8.25005C13.575 8.02505 13.925 8.02505 14.15 8.25005C14.375 8.47505 14.375 8.82505 14.15 9.05005L8.39999 14.7C8.27499 14.825 8.14999 14.9 7.99999 14.9Z"
                />
              </svg>
            </button>
            <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg hidden group-hover:block">
              <Link to="about.html" className="block px-4 py-2 text-sm hover:bg-gray-100">About Page</Link>
              <Link to="pricing.html" className="block px-4 py-2 text-sm hover:bg-gray-100">Pricing Page</Link>
              <Link to="contact.html" className="block px-4 py-2 text-sm hover:bg-gray-100">Contact Page</Link>
              <Link to="blog-grids.html" className="block px-4 py-2 text-sm hover:bg-gray-100">Blog Grid Page</Link>
              <Link to="blog-details.html" className="block px-4 py-2 text-sm hover:bg-gray-100">Blog Details Page</Link>
              <Link to="signup.html" className="block px-4 py-2 text-sm hover:bg-gray-100">Sign Up Page</Link>
              <Link to="signin.html" className="block px-4 py-2 text-sm hover:bg-gray-100">Sign In Page</Link>
              <Link to="404.html" className="block px-4 py-2 text-sm hover:bg-gray-100">404 Page</Link>
            </div>
          </div>
        </nav>
        <div className="flex items-center space-x-4">
          <Link to="signin.html" className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg">Sign In</Link>
          <Link to="signup.html" className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg">Sign Up</Link>
        </div>
        <button
          id="navbarToggler"
          className="lg:hidden flex items-center p-2 text-white"
        >
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
