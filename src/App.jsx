import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("about");
  const url = `http://localhost:5173/${activeTab}`;

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-sky-100">
      <div className="w-4/6 h-5/7 rounded-2xl border border-black bg-white shadow-lg">
        <div>
          <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
          <SearchBar url={url} />
        </div>
      </div>
    </div>
  );
}

export default App;
