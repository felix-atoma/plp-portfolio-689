import { useEffect } from "react";
import { NOVABULLETIN_URL } from "../data/links";
import { useLanguage } from "../i18n/LanguageContext";

// Forwards /novabulletin to the live app so the shareable link stays short
const NovaBulletinRedirect = () => {
  const { tr } = useLanguage();

  useEffect(() => {
    window.location.replace(NOVABULLETIN_URL);
  }, []);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-surface px-4 text-center">
      <p className="eyebrow">{tr({ en: "Opening NovaBulletin", fr: "Ouverture de NovaBulletin" })}</p>
      <p className="mt-4 text-muted">
        {tr({ en: "Taking you to the live app… If nothing happens,", fr: "Redirection vers l'application… Si rien ne se passe," })}{" "}
        <a href={NOVABULLETIN_URL} className="font-semibold text-charcoal underline hover:text-brand-deep">
          {tr({ en: "open NovaBulletin", fr: "ouvrez NovaBulletin" })}
        </a>
        .
      </p>
    </div>
  );
};

export default NovaBulletinRedirect;
