import { motion } from "framer-motion";
import notFoundImage from "/404.webp"; 

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-surface p-6 text-center">
      <motion.img
        src={notFoundImage}
        alt="404 Not Found"
        className="w-80 h-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <motion.h1
        className="text-4xl font-bold text-charcoal mt-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        404 - Page Not Found
      </motion.h1>
      <motion.p
        className="text-lg text-muted mt-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Oops! Looks like you took a wrong turn.
      </motion.p>
      <motion.a
        href="/"
        className="btn-brand mt-8"
        whileHover={{ scale: 1.1 }}
      >
        Go Home
      </motion.a>
    </div>
  );
};

export default NotFound;
