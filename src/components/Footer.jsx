import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaArrowUp,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-10 px-6 relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-8">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-white">
          Felixio<span className="text-yellow-400">.</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-4 text-base sm:text-lg text-center">
          {["Home", "Work", "Services", "Contact"].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-yellow-400 transition"
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto text-center">
          <motion.a
            href="#contact"
            className="bg-yellow-500 text-white py-2 px-6 rounded-full text-base font-semibold transition hover:bg-yellow-600"
            whileHover={{ scale: 1.05 }}
          >
            Let's Talk
          </motion.a>
          <motion.a
            href="/Felix Atoma (3).pdf"
            download
            className="bg-transparent border-2 border-white text-white py-2 px-6 rounded-full text-base font-semibold transition hover:bg-white hover:text-gray-900"
            whileHover={{ scale: 1.05 }}
          >
            Download CV
          </motion.a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 text-2xl">
          <motion.a
            href="https://www.facebook.com/home.php"
            className="text-white hover:text-yellow-400 transition"
            whileHover={{ scale: 1.1 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/felix-atoma-714abb269"
            className="text-white hover:text-yellow-400 transition"
            whileHover={{ scale: 1.1 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </motion.a>

          <motion.a
            href="https://wa.me/233244173068"
            className="text-white hover:text-yellow-400 transition"
            whileHover={{ scale: 1.1 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </motion.a>
        </div>

        {/* Footer Bottom Text */}
        <p className="text-sm text-gray-400 text-center px-4">
          &copy; 2025 All rights reserved | Made with ❤️ by {" "}
          <a
            href="https://frlixio.com"
            className="text-yellow-400 hover:underline"
          >
            Felixio
          </a>
        </p>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-6 right-6 bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-full shadow-lg transition z-50"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
        aria-label="Scroll to Top"
      >
        <FaArrowUp />
      </motion.button>
    </footer>
  );
};

export default Footer;