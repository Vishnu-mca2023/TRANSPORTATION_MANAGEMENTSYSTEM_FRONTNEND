import React, { useState } from "react";
import axios from "axios";
import AdminNav from "../Component/AdminNav";
import SVG from "../assets/undraw_new_entries_re_cffr.svg";
import config from "./Config"; // Import the config file

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${config.BASE_URL}/auth/register`,
        formData
      );
      setSuccess(response.data.message);
      setError("");
      setFormData({
        name: "",
        email: "",
        password: "",
      });
    } catch (error) {
      setError(error.response?.data?.message || "Registration failed.");
      setSuccess("");
    }
  };

  return (
    <div>
      <AdminNav />
      <div>
        <h1 className="text-violet-500 text-center font-bold text-6xl m-20">
          {"<"}-- Create Account --{">"}
        </h1>
        <div className="flex justify-evenly items-center my-30">
          <div>
            <img className="max-w-xl" src={SVG} alt="-" />
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              {error && <p className="text-red-500">{error}</p>}
              {success && <p className="text-green-500">{success}</p>}
              <h1 className="text-violet-500 text-center font-bold text-4xl m-2">
                Register Here
              </h1>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  className="w-96 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  type="text"
                  value={formData.name}
                  placeholder="Enter name"
                  name="name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  className="w-full px-4 py-2 mb-2 border rounded"
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-600">
                  Password
                </label>
                <input
                  className="w-full px-4 py-2 mb-2 border rounded"
                  type="password"
                  value={formData.password}
                  placeholder="Enter password"
                  name="password"
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                className="block mx-auto w-40 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                type="submit"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
