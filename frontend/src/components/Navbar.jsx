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

  // ✅ ONE FUNCTION — closes drawer + navigates
  const goTo = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    goTo("/login");
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 shadow ${
        darkMode
          ? "bg-gray-900 text-white border-b border-gray-700"
          : "bg-white text-black border-b border-gray-300"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-16 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => goTo("/")}
          className="lg:text-[22px] text-[16px] font-bold"
        >
          BookNest
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => goTo(link.path)}
              className="font-semibold"
            >
              {link.name}
            </button>
          ))}

          {/* Cart */}
          <div
            className="relative cursor-pointer"
            onClick={() => goTo("/cart")}
          >
            🛒
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">
                {totalQuantity}
              </span>
            )}
          </div>

          {/* Theme */}
          <button onClick={() => dispatch(toggleTheme())}>
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Auth */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => goTo("/login")}
              className="bg-purple-600 px-3 py-1 rounded text-white"
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-4">
          <div
            className="relative cursor-pointer"
            onClick={() => goTo("/cart")}
          >
            🛒
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">
                {totalQuantity}
              </span>
            )}
          </div>

          <button onClick={() => dispatch(toggleTheme())}>
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          className={`md:hidden px-4 pb-4 ${
            darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
          }`}
        >
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => goTo(link.path)}
              className="block w-full text-left py-2"
            >
              {link.name}
            </button>
          ))}

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="w-full mt-2 py-2 bg-red-500 rounded text-white"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => goTo("/login")}
              className="w-full mt-2 py-2 bg-purple-600 rounded text-white"
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
