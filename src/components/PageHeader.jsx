// Page title band shared by inner pages (Work, Services, Contact)
const PageHeader = ({ eyebrow, title, intro }) => {
  return (
    <section className="relative overflow-hidden bg-dark py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(250,183,0,0.18),transparent_55%)]" />
      <div className="container-x relative">
        <p className="eyebrow-light">Home / {eyebrow}</p>
        <h1 className="mt-4 text-4xl font-bold text-white md:text-6xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-base text-on-dark md:text-lg">{intro}</p>}
        <span className="mt-8 block h-1 w-20 bg-brand" />
      </div>
    </section>
  );
};

export default PageHeader;
