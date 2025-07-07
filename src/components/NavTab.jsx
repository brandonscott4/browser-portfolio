import { IconX, IconMinusVertical } from "@tabler/icons-react";

const NavTab = ({ TabTitle, isActive, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(TabTitle.toLowerCase());
  };

  return (
    <>
      <button
        className={`rounded-t-xl flex justify-between items-center w-34 px-2 py-2 mt-1 hover:bg-gray-200 hover:cursor-default ${
          isActive ? "bg-white hover:bg-white" : ""
        }`}
        onClick={handleClick}
      >
        <p className="text-sm">{TabTitle}</p>
        <IconX className="w-3 h-3" />
      </button>
      <div className="items-center justify-center flex py-1 mt-1">
        <IconMinusVertical className="w-4 h-4 stroke-gray-400" />
      </div>
    </>
  );
};

export default NavTab;
