import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import PageLoader from "../components/PageLoader";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    setShowLoader(true);
    setIsOpen(false);

    setTimeout(() => {
      navigate(path);
      setShowLoader(false);
    }, 1200); // loader shows for 1.2s
  };

  return (
    <>
      {showLoader && <PageLoader />}

      <header className="fixed top-0 left-0 w-full bg-orange-400 py-2 shadow-lg z-50">
        <nav className="container mx-auto flex justify-between items-center px-6">
          {/* Logo */}
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
            <img
              src="/logo.png"
              alt="Felixio Logo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Navigation Links */}
          <ul
            className={`absolute md:static top-14 left-0 w-full md:w-auto bg-orange-400 md:bg-transparent flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 text-center md:text-left p-6 md:p-0 transition-all duration-300 ${
              isOpen ? "block" : "hidden md:flex"
            }`}
          >
            {[{ name: "Home", path: "/" },
              { name: "Work", path: "/work" },
              { name: "Services", path: "/services" },
              { name: "Contact", path: "/contact" }
            ].map(({ name, path }) => (
              <li key={name}>
                <button
                  onClick={() => handleNavigation(path)}
                  className="text-white text-lg font-semibold relative group"
                >
                  {name}
                  <span className="absolute left-0 -bottom-1 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
            ))}
          </ul>

          {/* Let's Talk Button */}
          <button
            onClick={() => handleNavigation("/contact")}
            className="hidden md:block text-white bg-orange-500 px-4 py-1.5 rounded-lg font-semibold border-2 border-white transition-all hover:bg-orange-600"
          >
            Let's Talk
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
