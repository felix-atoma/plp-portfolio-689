import { useEffect } from "react";
import { NOVABULLETIN_URL } from "../data/links";

// Forwards /novabulletin to the live app so the shareable link stays short
const NovaBulletinRedirect = () => {
  useEffect(() => {
    window.location.replace(NOVABULLETIN_URL);
  }, []);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-surface px-4 text-center">
      <p className="eyebrow">Opening NovaBulletin</p>
      <p className="mt-4 text-muted">
        Taking you to the live app… If nothing happens,{" "}
        <a href={NOVABULLETIN_URL} className="font-semibold text-charcoal underline hover:text-brand-deep">
          open NovaBulletin
        </a>
        .
      </p>
    </div>
  );
};

export default NovaBulletinRedirect;
