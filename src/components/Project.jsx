import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Project = ({ img, name, desc, stack, repo, link }) => {
  return (
    <div className="border border-gray-300 rounded-xl p-8 mb-12">
      <img src={img} alt="Project showcase" className="rounded-xl" />
      <div className="flex flex-col md:flex-row md:items-center my-4">
        <div className="md:mr-3 mb-1 md:mb-0">
          <h3 className="font-semibold">{name}</h3>
        </div>
        <div className="flex gap-3">
          {repo && (
            <a href={repo} target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-gray-700" />
            </a>
          )}
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt className="hover:text-gray-700" />
            </a>
          )}
        </div>
      </div>
      <p>{desc}</p>
      <div className="flex flex-wrap mt-6 text-sm gap-2">
        {stack.map((tech) => (
          <div className="border border-gray-300 py-0.5 px-3 rounded-xl bg-gray-50">
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
