import React, { useEffect, useState } from "react";
import axios from "axios";
import Alert from "../components/Alert";
const BASE_URL = import.meta.env.VITE_BASE_URL;
import { useNavigate, useLocation } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
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

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password) {
      return setError("All fields are required");
    }

    try {
      setLoading(true);
      const res = await axios.post(`${BASE_URL}/auth/register`, {
        name,
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      setAlert({
        type: "success",
        message: "Signup successful 🎉",
      });
      setTimeout(() => {
        navigate(from, { replace: true });
      }, 1000);
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
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
        onSubmit={handleSignup}
        className="w-full max-w-md bg-white dark:bg-black p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center">Signup 🚀</h2>

        {error && (
          <p className="mt-3 text-sm text-red-600 bg-red-100 p-2 rounded">
            {error}
          </p>
        )}

        <input
          type="text"
          placeholder="Name"
          className="w-full mt-8 px-4 py-2 border rounded-lg bg-white dark:bg-gray-700"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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
          className="w-full mt-8 bg-purple-600 font-bold text-white py-2 rounded-lg hover:bg-purple-700 disabled:opacity-50"
        >
          {loading ? "Creating..." : "Sign Up"}
        </button>
        <a href="/login" className="text-black dark:text-blue-300 mt-4 block">
          Already have account? Please Login.
        </a>
      </form>
    </div>
  );
};

export default Signup;
