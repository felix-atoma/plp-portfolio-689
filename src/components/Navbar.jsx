import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import PageLoader from "../components/PageLoader";
import Monogram from "./Monogram";

const links = [
  { name: "Home", path: "/" },
  { name: "Work", path: "/work" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const socials = [
  { icon: <FaFacebookF />, href: "https://www.facebook.com/home.php", label: "Facebook" },
  { icon: <FaLinkedinIn />, href: "https://linkedin.com/in/felix-atoma-714abb269", label: "LinkedIn" },
  { icon: <FaWhatsapp />, href: "https://wa.me/233244173068", label: "WhatsApp" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

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

      <header className="sticky top-0 z-50 w-full">
        {/* Top Bar */}
        <div className="hidden bg-charcoal text-xs text-white md:block">
          <div className="container-x flex h-9 items-center justify-between">
            <div className="flex items-center gap-4">
              {socials.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="transition hover:text-brand"
                >
                  {icon}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-6">
              <a href="tel:+233244173068" className="flex items-center gap-2 transition hover:text-brand">
                <FaPhoneAlt className="text-brand" /> +233 24 417 3068
              </a>
              <a href="mailto:felixatoma2@gmail.com" className="flex items-center gap-2 transition hover:text-brand">
                <FaEnvelope className="text-brand" /> felixatoma2@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <div className="border-b border-divider bg-white">
          <nav className="container-x flex h-16 items-center justify-between md:h-20">
            {/* Logo */}
            <button onClick={() => handleNavigation("/")} className="flex items-center gap-3">
              <Monogram />
              <span className="text-xl font-bold text-charcoal">Felix Atoma</span>
            </button>

            {/* Navigation Links */}
            <ul
              className={`${
                isOpen ? "flex" : "hidden"
              } absolute left-0 top-full w-full flex-col border-b border-divider bg-white px-4 py-4 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-8 md:border-0 md:p-0`}
            >
              {links.map(({ name, path }) => (
                <li key={name}>
                  <button
                    onClick={() => handleNavigation(path)}
                    className={`w-full py-3 text-left text-xs font-medium uppercase tracking-[0.15em] transition hover:text-brand-deep md:w-auto md:py-0 ${
                      pathname === path ? "text-brand-deep" : "text-muted"
                    }`}
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>

            {/* Let's Talk Button */}
            <button onClick={() => handleNavigation("/contact")} className="btn-brand hidden md:inline-flex">
              Let's Talk
            </button>

            {/* Mobile Menu Button */}
            <button
              className="text-2xl text-charcoal md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
