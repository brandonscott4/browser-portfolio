import NavTab from "./NavTab";

const NavBar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-full flex bg-gray-100 rounded-t-2xl">
      <NavTab
        TabTitle={"About"}
        isActive={activeTab === "about"}
        setActiveTab={setActiveTab}
      />
      <NavTab
        TabTitle={"Projects"}
        isActive={activeTab === "projects"}
        setActiveTab={setActiveTab}
      />
      <NavTab
        TabTitle={"Contact"}
        isActive={activeTab === "contact"}
        setActiveTab={setActiveTab}
      />
    </div>
  );
};

export default NavBar;
