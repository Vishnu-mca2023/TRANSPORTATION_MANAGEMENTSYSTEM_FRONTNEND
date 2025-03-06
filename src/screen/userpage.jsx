import React, { useState } from "react";
import axios from "axios";
import UserNav from "../Component/UserNav";
import config from "./Config"; // Importing BASE_URL from config

export const Userpage = () => {
  const [formData, setFormData] = useState({
    StaffName: "",
    Department: "",
    NumOfStu: "",
    Reason: "",
    From: "",
    To: "",
    Days: "",
    StartDate: "",
    EndDate: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${config.BASE_URL}/postdata/create`, formData);
      setLoading(false);
      setError("");
      alert("Post data created successfully");
      setFormData({
        StaffName: "",
        Department: "",
        NumOfStu: "",
        Reason: "",
        From: "",
        To: "",
        Days: "",
        StartDate: "",
        EndDate: "",
      });
    } catch (error) {
      setLoading(false);
      setError("Error creating post data");
    }
  };

  return (
    <div>
      <UserNav />
      <div className="flex justify-center items-center h-[90vh]">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded shadow-lg"
        >
          <h2 className="text-2xl mb-4">Create Post Data</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: "Staff Name", name: "StaffName", placeholder: "Staff Name" },
              { label: "Department", name: "Department", placeholder: "Department" },
              { label: "Number of Students", name: "NumOfStu", placeholder: "No. of Students" },
              { label: "Reason", name: "Reason", placeholder: "Reason" },
              { label: "From", name: "From", placeholder: "From place" },
              { label: "To", name: "To", placeholder: "To place" },
              { label: "Number of Days", name: "Days", placeholder: "Days" },
            ].map((field) => (
              <div className="mb-4" key={field.name}>
                <label htmlFor={field.name} className="block text-gray-700">
                  {field.label}:
                </label>
                <input
                  type="text"
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
            ))}
            {[
              { label: "Start Date", name: "StartDate" },
              { label: "End Date", name: "EndDate" },
            ].map((field) => (
              <div className="mb-4" key={field.name}>
                <label htmlFor={field.name} className="block text-gray-700">
                  {field.label}:
                </label>
                <input
                  type="text"
                  id={field.name}
                  name={field.name}
                  placeholder="Select Date"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-52"
              disabled={loading}
            >
              {loading ? (
                <div className="border-t-4 border-b-4 border-red-300 rounded-full w-8 h-8 animate-spin mx-auto"></div>
              ) : (
                "Post"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
