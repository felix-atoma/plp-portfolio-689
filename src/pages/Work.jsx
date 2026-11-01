import PageHeader from "../components/PageHeader";
import MyWorks from "../components/MyWorks";
import Experience from "../components/Experience";

const Works = () => {
  return (
    <div>
      <PageHeader
        eyebrow={{ en: "My Work", fr: "Réalisations" }}
        title={{ en: "Work & experience", fr: "Réalisations & parcours" }}
        intro={{
          en: "NovaBulletin, the platform I founded and build, and the roles that shaped how I work.",
          fr: "NovaBulletin, la plateforme que j'ai fondée et que je développe, et les postes qui ont façonné ma façon de travailler.",
        }}
      />
      <MyWorks />
      <Experience />
    </div>
  );
};

export default Works;
