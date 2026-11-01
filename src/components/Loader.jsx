import React, { useEffect } from "react";
import Monogram from "./Monogram";
import { useLanguage } from "../i18n/LanguageContext";

const Loader = ({ onFinish }) => {
  const { tr } = useLanguage();

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
        <Monogram className="absolute left-6 top-6 z-10 h-16 w-16 text-xl" />

        {/* Spinner Circle */}
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-brand border-t-transparent"></div>
      </div>
      <p className="mt-4 text-charcoal font-semibold uppercase tracking-[0.2em] text-xs">{tr({ en: "Loading...", fr: "Chargement..." })}</p>
    </div>
  );
};

export default Loader;
