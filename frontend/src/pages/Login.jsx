import { useEffect, useState } from "react";
import axios from "axios";
import Alert from "../components/Alert";
const BASE_URL = import.meta.env.VITE_BASE_URL;
import { useNavigate, useLocation, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/";
  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => setAlert(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      return setError("All fields are required");
    }

    try {
      setLoading(true);
      const res = await axios.post(`${BASE_URL}/auth/login`, {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setAlert({
        type: "success",
        message: "Login successful 🎉",
      });
      setTimeout(() => {
        navigate(from, { replace: true });
      }, 1000);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen max-md:pt-[120px] md:flex items-center justify-center">
      <div className="fixed top-5 right-5 z-50 w-80">
        {alert && (
          <Alert
            type={alert.type}
            message={alert.message}
            onClose={() => setAlert(null)}
          />
        )}
      </div>

      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white dark:bg-black p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center">Login 🔐</h2>

        {error && (
          <p className="mt-3 text-sm text-red-600 bg-red-100 p-2 rounded">
            {error}
          </p>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full mt-8 px-4 py-2 border rounded-lg bg-white dark:bg-gray-700"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mt-8 px-4 py-2 border rounded-lg bg-white dark:bg-gray-700"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          disabled={loading}
          className="mt-10 w-full bg-purple-600 font-bold text-white py-2 px-10 flex justify-center rounded-lg hover:bg-purple-700 disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        <Link to="/signup" className="text-black dark:text-blue-300 mt-4 block">
          Don't have account? Please signup.
        </Link>
      </form>
      {/*  */}
    </div>
  );
};

export default Login;
