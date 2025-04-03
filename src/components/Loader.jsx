import React, { useEffect, useState } from "react";

const Loader = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // Notify parent to hide loader
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[9999]">
      <div className="relative w-28 h-28">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Logo"
          className="w-20 h-20 rounded-full object-cover z-10 absolute top-4 left-4"
        />

        {/* Spinner Circle */}
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-orange-400 border-t-transparent"></div>
      </div>
      <p className="mt-4 text-orange-400 font-bold">Loading...</p>
    </div>
  );
};

export default Loader;
