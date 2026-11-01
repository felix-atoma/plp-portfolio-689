import { useLanguage } from "../i18n/LanguageContext";

// EN | FR switch shown in the header
const LanguageToggle = ({ className = "" }) => {
  const { lang, setLang } = useLanguage();

  return (
    <div className={`flex border border-divider text-xs font-semibold ${className}`} role="group" aria-label="Language / Langue">
      {["en", "fr"].map((code) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`px-2.5 py-1.5 uppercase tracking-wider transition ${
            lang === code ? "bg-brand text-charcoal" : "bg-white text-muted hover:text-charcoal"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;
