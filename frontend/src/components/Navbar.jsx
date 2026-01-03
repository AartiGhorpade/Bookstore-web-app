import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import { useNavigate } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Shop", path: "/shop" },
];

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const darkMode = useSelector((state) => state.theme.darkMode);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const [menuOpen, setMenuOpen] = useState(false);

  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const renderLinks = (isMobile = false) =>
    navLinks.map((link) => (
      <button
        key={link.name}
        onClick={() => navigate(link.path)}
        className={`hover:dark-purple-text dark:purpleText lg:text-[18px] text-[16px] font-semibold ${
          isMobile ? "block py-2 w-full text-left" : ""
        }`}
      >
        {link.name}
      </button>
    ));

  return (
    <nav
      className={`fixed top-0 w-full z-50 shadow ${
        darkMode
          ? "bg-gray-900 text-white border-b border-b-gray-700"
          : "bg-white text-black border-b border-b-gray-300"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-16 flex justify-between items-center">
        <button
          onClick={() => navigate("/")}
          className="lg:text-[22px] text-[16px] font-bold dark-purple-text dark:purpleText"
        >
          BookNest
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {renderLinks()}

          {/* Cart */}
          <div
            className="relative cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            <span className="text-2xl">🛒</span>
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs font-bold">
                {totalQuantity}
              </span>
            )}
          </div>

          {/* Theme */}
          <button onClick={() => dispatch(toggleTheme())} className="text-xl">
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Auth */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="px-4 py-1 bg-red-500 rounded text-white"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="px-4 py-1 bg-purple-600 rounded text-white font-bold"
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-4">
          <div
            className="relative cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            <span className="text-2xl">🛒</span>
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs font-bold">
                {totalQuantity}
              </span>
            )}
          </div>

          <button onClick={() => dispatch(toggleTheme())} className="text-xl">
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`md:hidden px-4 pb-4 ${
            darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
          }`}
        >
          {renderLinks(true)}

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="w-full mt-2 py-2 bg-red-500 rounded text-white"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="w-full mt-2 py-2 bg-purple-600 rounded text-white font-bold"
            >
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
