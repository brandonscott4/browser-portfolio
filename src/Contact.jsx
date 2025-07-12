import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="w-2/3 md:1/2 lg:w-1/3 mx-auto my-12">
      <h2 className="text-gray-800 font-semibold mb-4">Get in touch 💬</h2>
      <p className="text-gray-700 mb-4">
        If you know of any openings or have advice on breaking into the tech
        industry, I would greatly appreciate your support.
      </p>

      <p className="text-gray-700 mb-12">
        Please feel free to reach out through any of the methods below.
      </p>

      <div className="flex flex-col justify-start">
        <div className="flex items-center gap-4 mb-4">
          <MdOutlineEmail className="h-6 w-6" />
          <p className="">bscott15@sky.com</p>
        </div>

        <div className="flex items-center gap-4 -ml-0.5">
          <CiLinkedin className="h-7 w-7" />
          <a
            href="https://www.linkedin.com/in/brandon-scott-65b669268"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 hover:underline"
          >
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
