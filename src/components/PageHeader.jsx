import { useLanguage } from "../i18n/LanguageContext";

// Page title band shared by inner pages (Work, Services, Contact); props can be { en, fr } pairs
const PageHeader = ({ eyebrow, title, intro }) => {
  const { tr } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-dark py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(250,183,0,0.18),transparent_55%)]" />
      <div className="container-x relative">
        <p className="eyebrow-light">
          {tr({ en: "Home", fr: "Accueil" })} / {tr(eyebrow)}
        </p>
        <h1 className="mt-4 text-4xl font-bold text-white md:text-6xl">{tr(title)}</h1>
        {intro && <p className="mt-5 max-w-2xl text-base text-on-dark md:text-lg">{tr(intro)}</p>}
        <span className="mt-8 block h-1 w-20 bg-brand" />
      </div>
    </section>
  );
};

export default PageHeader;
