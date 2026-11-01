import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaArrowUp,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Monogram from "./Monogram";
import { CV_URL } from "../data/profile";

const links = [
  { name: "Home", path: "/" },
  { name: "Work", path: "/work" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const socials = [
  { icon: <FaFacebookF />, href: "https://www.facebook.com/felix.atoma.1", label: "Facebook" },
  { icon: <FaLinkedinIn />, href: "https://linkedin.com/in/felix-atoma-714abb269", label: "LinkedIn" },
  { icon: <FaWhatsapp />, href: "https://wa.me/233244173068", label: "WhatsApp" },
];

const Footer = () => {
  return (
    <footer id="footer" className="bg-dark text-on-dark">
      <div className="container-x grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <Monogram />
            <span className="text-xl font-bold text-white">Felix Atoma</span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            Bilingual software developer and French–English translator in Accra, building secure web applications
            for schools and businesses. Founder of NovaBulletin.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-brand">
              Let's Talk
            </Link>
            <a href={CV_URL} download className="btn-outline-light">
              Download CV
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Quick links</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {links.map(({ name, path }) => (
              <li key={name}>
                <Link to={path} className="transition hover:text-brand">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Get in touch</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-brand" /> Accra, Ghana
            </li>
            <li>
              <a href="tel:+233244173068" className="flex items-center gap-3 transition hover:text-brand">
                <FaPhoneAlt className="text-brand" /> +233 24 417 3068
              </a>
            </li>
            <li>
              <a href="mailto:felixatoma2@gmail.com" className="flex items-center gap-3 break-all transition hover:text-brand">
                <FaEnvelope className="shrink-0 text-brand" /> felixatoma2@gmail.com
              </a>
            </li>
          </ul>
          <div className="mt-6 flex gap-3">
            {socials.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center border border-white/15 text-white transition hover:border-brand hover:bg-brand hover:text-charcoal"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="border-t border-white/10">
        <p className="container-x py-6 text-xs">
          &copy; {new Date().getFullYear()} Felix Atoma. All rights reserved. Design inspired by Industry by Colorlib.
        </p>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center bg-brand text-charcoal shadow-lg transition hover:bg-charcoal hover:text-white"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ scale: 1.1 }}
        aria-label="Scroll to Top"
      >
        <FaArrowUp />
      </motion.button>
    </footer>
  );
};

export default Footer;
