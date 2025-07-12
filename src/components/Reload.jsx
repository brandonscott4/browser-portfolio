import { TbLoader2 } from "react-icons/tb";

const Reload = ({ setIsReloading }) => {
  setTimeout(() => {
    setIsReloading(false);
  }, 750);

  return (
    <div className="flex items-center justify-center w-full h-full">
      <TbLoader2 className="animate-spin text-gray-400 mb-14 w-8 h-8" />
    </div>
  );
};

export default Reload;
