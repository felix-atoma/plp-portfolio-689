import { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-lang";

const titles = {
  en: "Felix Atoma | Software Developer & Translator",
  fr: "Felix Atoma | Développeur logiciel & traducteur",
};

const descriptions = {
  en: "Felix Atoma, bilingual software developer and French–English translator in Accra, Ghana. Founder of NovaBulletin.",
  fr: "Felix Atoma, développeur logiciel bilingue et traducteur français–anglais à Accra, Ghana. Fondateur de NovaBulletin.",
};

// Saved choice first, then the browser's language, then English
const initialLang = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "fr") return saved;
  } catch {
    // storage unavailable (private mode, blocked cookies)
  }
  return navigator.language?.toLowerCase().startsWith("fr") ? "fr" : "en";
};

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = titles[lang];
    document.querySelector('meta[name="description"]')?.setAttribute("content", descriptions[lang]);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore: the choice just won't be remembered
    }
  }, [lang]);

  // Picks the right language from an { en, fr } pair; plain values pass through
  const tr = (value) =>
    value && typeof value === "object" && "en" in value ? value[lang] ?? value.en : value;

  return <LanguageContext.Provider value={{ lang, setLang, tr }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
