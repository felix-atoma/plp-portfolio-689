import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-orange-400 py-4 shadow-lg z-50">
      <nav className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          Felixio<span className="text-yellow-400">.</span>
        </div>

        {/* Navigation Links */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-orange-400 md:bg-transparent flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 text-center md:text-left p-6 md:p-0 transition-all duration-300 ${
            isOpen ? "block" : "hidden md:flex"
          }`}
        >
          {[
            { name: "Home", path: "/" },
            { name: "Work", path: "/work" },
            { name: "Services", path: "/services" },
            { name: "Contact", path: "/contact" },
          ].map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                className="text-white text-lg font-semibold hover:underline"
                onClick={() => setIsOpen(false)}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Let's Talk Button */}
        <Link
          to="/contact"
          className="hidden md:block text-white bg-orange-500 px-5 py-2 rounded-lg font-semibold border-2 border-white transition-all hover:bg-orange-600"
        >
          Let's Talk
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
