import TechnologyBadge from "./components/TechnologyBadge";
import { technologies } from "./technologies";

const About = () => {
  return (
    <div className="w-2/3 md:1/2 lg:w-1/3 mx-auto">
      <div className="mt-12 mb-14">
        <h2 className="text-gray-800 font-semibold mb-4">Hi, I'm Brandon 👋🏻</h2>
        <p className="text-gray-700 mb-4">
          Welcome to my browser themed personal site! I am a developer based in
          Dartford, Kent, actively seeking an opportunity to break into tech.
        </p>
        <p className="text-gray-700 mb-4">
          I recently graduated with a first-class Bachelor's degree in Computer
          Science and have developed proficiency in Java and React.
        </p>
        <p className="text-gray-700">
          I'm commited to continuous self improvement and learning new
          technologies. This is evidenced through the achievement of an AWS
          Certified Cloud Practitioner certification.
        </p>
      </div>
      <div className="mb-14">
        <h2 className="text-gray-800 font-semibold mb-4">
          Education & Certifications
        </h2>
        <div className="mb-6">
          <p className="text-gray-700 font-light">Classification: 1st</p>
          <div className="flex justify-between">
            <p className="font-semibold">BSc (Hons) Computer Science</p>
            <p className="font-light">2020 - 2023</p>
          </div>
          <p className="text-gray-700 font-light">University of Kent</p>
        </div>
        <div>
          <div className="flex justify-between">
            <p className="font-semibold">AWS Certified Cloud Practitioner</p>
            <p className="font-light">Feb 2025</p>
          </div>
          <p>
            <a
              href="https://www.credly.com/badges/ba849bfe-f7e0-4f9b-9a92-87067da28da4/public_url"
              className="font-light text-blue-600 hover:text-blue-700 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              (Credly)
            </a>
          </p>
        </div>
      </div>
      <div className="mb-12">
        <h2 className="text-gray-800 font-semibold mb-4">
          Skills/Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {technologies.map((technology) => (
            <TechnologyBadge
              key={technology.name}
              iconSrc={technology.iconSrc}
              name={technology.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
