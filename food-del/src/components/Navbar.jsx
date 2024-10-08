import { useState } from "react";
import { SlBasket } from "react-icons/sl";
import { FaSearch } from "react-icons/fa";
import { HiMenu } from "react-icons/hi"; // Three bar icon from react-icons

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl text-orange-700 font-bold">C W Sunny</h1>
          </div>

          {/* Hamburger Icon (Visible on small screens) */}
          <div className="lg:hidden">
            <button
              onClick={handleMenuToggle}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <HiMenu className="h-8 w-8" />
            </button>
          </div>

          {/* Full Menu (Visible on screens larger than 900px) */}
          <div className="hidden lg:flex lg:space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Contact Us
            </a>
          </div>

          {/* Basket Icon and Sign Up Button */}
          <div className="flex gap-4 items-center">
            <FaSearch className="text-gray-700 h-6 w-6"/>
            <SlBasket className="text-gray-700 h-6 w-6" />
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-full hover:border-red-600 border-2">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Menu (Visible when the menu is toggled) */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4">
            <ul className="flex flex-col space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
