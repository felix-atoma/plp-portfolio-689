import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import Skills from "../components/Skills";
import MyWorks from "../components/MyWorks";
import AboutMe from "../components/About";
import TestimonialCarousel from "../components/Testimonials";
import BubbleBackground from "../components/BubbleBackground";

const Home = () => {
  return (
    <div className="relative">
      {/* Bubble Background */}
      <BubbleBackground />

      {/* Hero + Contact Section */}
      <div className="bg-orange-200">
        {/* Hero Section */}
        <section
          id="home"
          className="flex flex-col md:flex-row justify-center items-center min-h-[500px] md:min-h-[70vh] pt-10 bg-gradient-to-br from-orange-600 to-orange-200 px-6 text-center md:text-left"
        >
          <motion.div
            className="flex justify-center mb-6 md:mb-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/Image1.jpg"
              alt="Felix"
              className="w-40 h-40 md:w-64 md:h-64 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </motion.div>

          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white">My name is Felix.</h1>
            <h2 className="text-xl md:text-3xl font-semibold text-gray-800 mt-2">
              Software Engineer, Tech Enthusiast, and Teacher
            </h2>
            <h3 className="text-lg md:text-2xl font-medium text-gray-700 mt-4">
              Lead Engineer at Felixio
            </h3>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section
          id="contact-info"
          className="w-full py-8 flex flex-col md:flex-row justify-center items-center gap-12 text-center px-6"
        >
          <motion.div
            className="contact-item"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl md:text-2xl text-white font-bold">Design For</h3>
            <p className="text-lg md:text-xl text-white font-semibold">Web & Mobile</p>
          </motion.div>

          <motion.div
            className="contact-item"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl md:text-2xl text-white font-bold">Phone</h3>
            <p className="text-lg md:text-xl text-white font-semibold">+233 (24) 417-3068</p>
          </motion.div>

          <motion.div
            className="contact-item flex flex-col items-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl md:text-2xl text-white font-bold">Drop your Message</h3>
            <p className="text-lg md:text-xl text-white font-semibold flex items-center gap-2">
              <FaEnvelope className="text-white text-xl md:text-2xl" />
              felixatoma2@gmail.com
            </p>
          </motion.div>
        </section>
      </div>

      {/* Skills Section */}
      <div className="w-full bg-white relative z-10">
        <Skills />
      </div>

      {/* My Works Section */}
      <div className="w-full bg-white relative z-10">
        <MyWorks />
      </div>

      {/* About Section */}
      <div className="w-full bg-white relative z-10">
        <AboutMe />
      </div>

      {/* Testimonials Section */}
      <div className="w-full bg-white relative z-10">
        <TestimonialCarousel />
      </div>
    </div>
  );
};

export default Home;