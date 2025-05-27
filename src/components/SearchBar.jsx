import { IconArrowLeft, IconArrowRight, IconReload } from "@tabler/icons-react";

const SearchBar = ({ url, setIsReloading }) => {
  const handleReloadClick = () => {
    setIsReloading(true);
  };

  return (
    <div className="w-full flex items-center border-b border-gray-300 py-1.5">
      <button className="rounded-full p-1 m-1 ">
        <IconArrowLeft className="w-4 h-4 stroke-gray-400" />
      </button>
      <button className="rounded-full p-1 m-1 ">
        <IconArrowRight className="w-4 h-4 stroke-gray-400" />
      </button>
      <button
        className="rounded-full p-1 m-1 hover:bg-gray-100 mr-3"
        onClick={handleReloadClick}
      >
        <IconReload className="w-4 h-3.5" />
      </button>

      <div className="flex items-center bg-slate-100 rounded-3xl h-8 px-4 w-full mr-6 hover:cursor-text">
        <p className="text-xs">{url}</p>
      </div>
    </div>
  );
};

export default SearchBar;
