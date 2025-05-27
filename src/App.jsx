import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Reload from "./components/Reload";
import { useEffect, useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("about");
  const [isReloading, setIsReloading] = useState(false);
  const url = `http://localhost:5173/${activeTab}`;

  //Stops reload if tab is switched
  useEffect(() => {
    if (isReloading) {
      setIsReloading(false);
    }
  }, [activeTab]);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-sky-100">
      <div className="flex flex-col w-4/6 h-5/7 rounded-2xl border border-black bg-white shadow-lg overflow-hidden">
        <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar url={url} setIsReloading={setIsReloading} />
        {isReloading ? (
          <Reload setIsReloading={setIsReloading} activeTab={activeTab} />
        ) : (
          <div className="flex-1 min-h-0 overflow-y-auto overflow-clip">
            {activeTab === "about" && <p>About</p>}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
