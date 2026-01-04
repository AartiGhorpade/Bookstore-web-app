import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Footer = () => {
  const navigate = useNavigate();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <footer
      className={`mt-20 border-t ${
        darkMode
          ? "bg-gray-900 text-gray-300 border-gray-700"
          : "bg-gray-100 text-gray-700 border-gray-300"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left - Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-purple-600">BookNest</h2>
          <p className="text-sm mt-1">Your cozy place to discover books 📚</p>
        </div>

        {/* Right - Links */}
        <div className="flex gap-6 text-lg font-medium">
          <button
            onClick={() => navigate("/")}
            className="hover:text-purple-600 transition"
          >
            Home
          </button>
          <button
            onClick={() => navigate("/about")}
            className="hover:text-purple-600 transition"
          >
            About
          </button>
          <button
            onClick={() => navigate("/shop")}
            className="hover:text-purple-600 transition"
          >
            Shop
          </button>
        </div>
      </div>

      {/* Bottom */}
      <div
        className={`text-center text-sm py-3 ${
          darkMode ? "bg-gray-800" : "bg-gray-200"
        }`}
      >
        © {new Date().getFullYear()} BookNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
