import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import config from "./Config"; // Importing the config file
import SvgImg from "../assets/undraw_login_re_4vu2 (1).svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${config.BASE_URL}/auth/login`, {
        email,
        password,
      });
      const { token, role } = response.data;
      console.log("Login successful. Token:", token);
      console.log("Role:", role);

      if (role === "admin") {
        navigate("/adminpage");
      } else {
        navigate("/userpage");
      }
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => {
    setError("");
  };

  return (
    <div className="relative">
      <h1 className="text-violet-500 text-center font-bold text-6xl m-20">
        {"||"}-- Welcome to Login! --{"||"}
      </h1>
      <div className="flex justify-evenly items-center my-30">
        <div>
          <img className="max-w-xl" src={SvgImg} alt="Login illustration" />
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <h1 className="text-violet-500 text-center font-bold text-4xl m-2">
              Login Here
            </h1>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Email:
              </label>
              <input
                className="w-96 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onClick={clearError}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Password:
              </label>
              <input
                className="w-96 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onClick={clearError}
                required
              />
            </div>
            <button
              className="block mx-auto w-40 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              type="submit"
            >
              {loading ? (
                <div className="border-t-4 border-b-4 border-red-300 rounded-full w-8 h-8 animate-spin mx-auto"></div>
              ) : (
                "Login"
              )}
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </form>
        </div>
      </div>

      {/* Small data box in the bottom-left corner */}
      <div className="absolute bottom-5 left-5 bg-gray-100 p-3 rounded-md shadow-lg text-sm">
        <p className="font-bold text-gray-700">Test Credentials:</p>
        <p>Email: <span className="font-mono">m@gmail.com</span></p>
        <p>Password: <span className="font-mono">m123</span></p>
      </div>
    </div>
  );
};

export default Login;
