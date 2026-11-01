import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import PageLoader from "../components/PageLoader";
import Monogram from "./Monogram";
import LanguageToggle from "./LanguageToggle";
import { contact } from "../data/profile";
import { useLanguage } from "../i18n/LanguageContext";

const links = [
  { name: { en: "Home", fr: "Accueil" }, path: "/" },
  { name: { en: "Work", fr: "Réalisations" }, path: "/work" },
  { name: { en: "Services", fr: "Services" }, path: "/services" },
  { name: { en: "Contact", fr: "Contact" }, path: "/contact" },
];

const socials = [
  { icon: <FaFacebookF />, href: contact.facebook, label: "Facebook" },
  { icon: <FaLinkedinIn />, href: contact.linkedin, label: "LinkedIn" },
  { icon: <FaWhatsapp />, href: contact.whatsapp, label: "WhatsApp" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { tr } = useLanguage();

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
              <a href={contact.phoneHref} className="flex items-center gap-2 transition hover:text-brand">
                <FaPhoneAlt className="text-brand" /> {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-2 transition hover:text-brand">
                <FaEnvelope className="text-brand" /> {contact.email}
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
                <li key={path}>
                  <button
                    onClick={() => handleNavigation(path)}
                    className={`w-full py-3 text-left text-xs font-medium uppercase tracking-[0.15em] transition hover:text-brand-deep md:w-auto md:py-0 ${
                      pathname === path ? "text-brand-deep" : "text-muted"
                    }`}
                  >
                    {tr(name)}
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <LanguageToggle />

              {/* Let's Talk Button */}
              <button onClick={() => handleNavigation("/contact")} className="btn-brand hidden lg:inline-flex">
                {tr({ en: "Let's Talk", fr: "Discutons" })}
              </button>

              {/* Mobile Menu Button */}
              <button
                className="text-2xl text-charcoal md:hidden"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={tr({ en: "Toggle menu", fr: "Ouvrir le menu" })}
              >
                {isOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
