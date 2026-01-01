import { useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import './index.css'

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    const root = document.documentElement;
    darkMode ? root.classList.add("dark") : root.classList.remove("dark");
  }, [darkMode]);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen dark:text-white">
      <Navbar />

      <div className="px-4 mt-[64px] max-w-7xl mx-auto">
        <Home />
      </div>
    </div>
  );
}

export default App;
