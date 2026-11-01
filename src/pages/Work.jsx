import PageHeader from "../components/PageHeader";
import Skills from "../components/Skills";
import MyWorks from "../components/MyWorks";

const Works = () => {
  return (
    <div>
      <PageHeader
        eyebrow="My Work"
        title="Skills & work"
        intro="What I bring to a project, and the product I'm proudest of shipping."
      />
      <Skills />
      <MyWorks />
    </div>
  );
};

export default Works;
