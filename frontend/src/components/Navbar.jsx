import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Shop", path: "/shop" },
];

const Navbar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const renderLinks = (isMobile = false) =>
    navLinks.map((link) => (
      <a
        key={link.name}
        href={link.path}
        className={`hover:dark-purple-text dark:purpleText lg:text-[18px] text-[16px] font-semibold ${
          isMobile ? "block py-2" : ""
        }`}
      >
        {link.name}
      </a>
    ));

  return (
    <nav
      className={`fixed top-0 w-full z-50 shadow
  ${
    darkMode
      ? "bg-gray-900 text-white border-b border-b-gray-700"
      : "bg-white text-black border-b border-b-gray-300"
  }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-16 flex justify-between items-center">
        <a href="/" className="lg:text-[22px] text-[16px] font-bold dark-purple-text dark:purpleText">
          BookNest
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {renderLinks()}
          <div style={{ position: "relative", cursor: "pointer" }}>
            <a href="/cart" style={{ fontSize: "24px" }}>
              🛒
            </a>
            {totalQuantity > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-8px",
                  background: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px 6px",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {totalQuantity}
              </span>
            )}
          </div>
          <button onClick={() => dispatch(toggleTheme())} className="text-xl">
            {darkMode ? "☀️" : "🌙"}
          </button>
          <AuthButton isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-4">
          <div style={{ position: "relative", cursor: "pointer" }}>
            <a href="/cart" style={{ fontSize: "24px" }}>
              🛒
            </a>
            {totalQuantity > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-8px",
                  background: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px 6px",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
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

      {menuOpen && (
        <div
          className={`md:hidden px-4 pb-4 shadow
      ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}
        >
          {renderLinks(true)}
          <AuthButton
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            mobile
          />
        </div>
      )}
    </nav>
  );
};

const AuthButton = ({ isLoggedIn, setIsLoggedIn, mobile }) => (
  <button
    onClick={() => setIsLoggedIn(!isLoggedIn)}
    className={`mt-2 ${
      mobile ? "w-full py-2" : "px-4 py-1"
    } rounded text-white ${
      isLoggedIn ? "bg-red-500" : "bg-purple-600 font-bold"
    }`}
  >
    {isLoggedIn ? "Logout" : "Login"}
  </button>
);

export default Navbar;
