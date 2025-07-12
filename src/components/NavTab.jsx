import { RxCross2 } from "react-icons/rx";
import { TbMinusVertical } from "react-icons/tb";

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
        <RxCross2 className="w-3.5 h-3.5 " />
      </button>
      <div className="items-center justify-center flex py-1 mt-1">
        <TbMinusVertical className="text-gray-400" />
      </div>
    </>
  );
};

export default NavTab;
