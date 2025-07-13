import Project from "./components/Project";
import { projects } from "./projectData";
const Projects = () => {
  return (
    <div className="w-2/3 md:1/2 lg:w-1/3 mx-auto my-12">
      <h2 className="text-gray-800 font-semibold mb-4">Projects 📌</h2>
      {projects.map((project) => (
        <Project
          key={project.name}
          img={project.img}
          name={project.name}
          desc={project.desc}
          stack={project.stack}
          repo={project.repo}
          link={project.link}
          demo={project.demo}
        />
      ))}
    </div>
  );
};

export default Projects;
