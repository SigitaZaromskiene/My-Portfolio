import Heading from "./Heading";
import { Global } from "./Global";
import { useContext } from "react";
import Project1 from "./portfolioProjects/Project1";
import Project2 from "./portfolioProjects/Project2";
import Project3 from "./portfolioProjects/Project3";
import Project4 from "./portfolioProjects/Project4";
import Project5 from "./portfolioProjects/Project5";
import Project6 from "./portfolioProjects/Project6";

function Projects() {

  const { sectionRef } = useContext(Global);

  return (
    <div className="projects_container wrapper" id="projects" ref={sectionRef}>
      <Heading text="Projects" />
      <div className="projects_container_table">
        <Project1 />
        <Project2 />
        <Project3 />
        <Project4 />
        <Project5 />
        <Project6 />
      </div>
    </div>
  );
}

export default Projects;
