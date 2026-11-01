import PageHeader from "../components/PageHeader";
import MyWorks from "../components/MyWorks";
import Experience from "../components/Experience";

const Works = () => {
  return (
    <div>
      <PageHeader
        eyebrow="My Work"
        title="Work & experience"
        intro="NovaBulletin, the platform I founded and build, and the roles that shaped how I work."
      />
      <MyWorks />
      <Experience />
    </div>
  );
};

export default Works;
