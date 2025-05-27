import { IconLoader2 } from "@tabler/icons-react";

const Reload = ({ setIsReloading }) => {
  setTimeout(() => {
    setIsReloading(false);
  }, 750);

  return (
    <div className="flex items-center justify-center w-full h-full">
      <IconLoader2 className="animate-spin stroke-gray-400 mb-14" />
    </div>
  );
};

export default Reload;
