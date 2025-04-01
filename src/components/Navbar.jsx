import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-orange-400 py-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          Felixio<span className="text-yellow-400">.</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="text-white text-lg font-semibold relative hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/work" className="text-white text-lg font-semibold relative hover:underline">
              Work
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-white text-lg font-semibold relative hover:underline">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white text-lg font-semibold relative hover:underline">
              Contact
            </Link>
          </li>
        </ul>

        {/* Let's Talk Button */}
        <Link
          to="/contact"
          className="hidden md:block text-white bg-orange-500 px-5 py-2 rounded-lg font-semibold border-2 border-white transition-all hover:bg-orange-600"
        >
          Let's Talk
        </Link>

        {/* Mobile Menu Button (Placeholder) */}
        <button className="md:hidden text-white text-2xl">
          &#9776;
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
