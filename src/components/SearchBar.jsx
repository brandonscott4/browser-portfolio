import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { TbReload } from "react-icons/tb";

const SearchBar = ({ url, setIsReloading }) => {
  const handleReloadClick = () => {
    setIsReloading(true);
  };

  //use a stack to keep track of page history

  return (
    <div className="w-full flex items-center border-b border-gray-300 py-1.5">
      <button className="rounded-full p-1 m-1 ">
        <FaArrowLeft className="w-4 h-4 text-gray-400" />
      </button>
      <button className="rounded-full p-1 m-1 ">
        <FaArrowRight className="w-4 h-4 text-gray-400" />
      </button>
      <button
        className="rounded-full p-1 mx-2 hover:bg-gray-100 mr-3"
        onClick={handleReloadClick}
      >
        <TbReload className="w-4.5 h-4.5" />
      </button>

      <div className="flex items-center bg-slate-100 rounded-3xl h-8 px-4 w-full mr-6 hover:cursor-text">
        <p className="text-sm">{url}</p>
      </div>
    </div>
  );
};

export default SearchBar;
