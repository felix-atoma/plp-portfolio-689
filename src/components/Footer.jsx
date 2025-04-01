import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-10 text-center">
      <div className="max-w-5xl mx-auto">

        {/* Logo */}
        <div className="text-2xl font-bold text-white mb-4">
          {/* This is the Felixio brand logo */}
          Felixio<span className="text-yellow-400">.</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex justify-center gap-6 mb-6">
          {["Home", "Work", "Services", "Contact"].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <a href={`#${item.toLowerCase()}`} className="text-white hover:text-blue-500 text-lg">
                {item}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <motion.a
            href="#lets-talk"
            className="bg-yellow-500 text-white py-2 px-6 rounded-full text-lg font-semibold transition hover:bg-yellow-600"
            whileHover={{ scale: 1.05 }}
          >
            Let's Talk
          </motion.a>
          <motion.a
            href="path/to/your/cv.pdf"
            download
            className="bg-gray-900 border-2 border-white text-white py-2 px-6 rounded-full text-lg font-semibold transition hover:bg-white hover:text-gray-900"
            whileHover={{ scale: 1.05 }}
          >
            Download CV
          </motion.a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mt-6">
          {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, index) => (
            <motion.a
              key={index}
              href="#"
              className="text-white text-2xl transition hover:text-blue-500"
              whileHover={{ scale: 1.1 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon />
            </motion.a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="mt-6 text-sm text-gray-400">
          &copy; 2025 All rights reserved | This template is made with ❤️ by <a href="https://frlixio.com" className="text-yellow-400 hover:underline">Felixio</a>
        </p>

      </div>
    </footer>
  );
};

export default Footer;
