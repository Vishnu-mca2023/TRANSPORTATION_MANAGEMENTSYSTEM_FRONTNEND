import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminNav from "../Component/AdminNav";
import config from "./Config"; // Import config file

export const Adminpage = () => {
  const [activePostData, setActivePostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchActivePostData = async () => {
    try {
      const response = await axios.get(`${config.BASE_URL}/getdata/admin/all`);
      setActivePostData(response.data);
      setLoading(false);
    } catch (error) {
      setError("Error fetching active post data");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchActivePostData();
  }, []);

  const handleUpdateActiveStatus = async (id) => {
    try {
      await axios.put(`${config.BASE_URL}/updatedata/${id}`);
      const updatedData = activePostData.map((post) => 
        post._id === id ? { ...post, Active: "0" } : post
      );
      setActivePostData(updatedData);
    } catch (error) {
      console.error("Error updating post data status:", error);
    }
  };

  return (
    <div>
      <AdminNav />
      <div className="max-w-8xl mx-auto py-6 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Report</h2>
        {loading && (
          <div className="flex items-center justify-center">
            <div className="border-t-4 border-b-4 border-red-300 rounded-full w-40 h-40 my-40 animate-spin mx-auto"></div>
          </div>
        )}
        {error && <p className="text-red-500">Error: {error}</p>}
        {!loading && !error && (
          <div className="overflow-x-auto">
            <table className="table-auto border-collapse border border-gray-200">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2">S.No</th>
                  <th className="px-4 py-2">Staff Name</th>
                  <th className="px-4 py-2">Department</th>
                  <th className="px-4 py-2">Number of Students</th>
                  <th className="px-4 py-2">Reason</th>
                  <th className="px-4 py-2">From</th>
                  <th className="px-4 py-2">To</th>
                  <th className="px-4 py-2">Days</th>
                  <th className="px-4 py-2">Start Date</th>
                  <th className="px-4 py-2">End Date</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {activePostData.map((post, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{post.StaffName}</td>
                    <td className="px-4 py-2">{post.Department}</td>
                    <td className="px-4 py-2">{post.NumOfStu}</td>
                    <td className="px-4 py-2">{post.Reason}</td>
                    <td className="px-4 py-2">{post.From}</td>
                    <td className="px-4 py-2">{post.To}</td>
                    <td className="px-4 py-2">{post.Days}</td>
                    <td className="px-4 py-2">{post.StartDate}</td>
                    <td className="px-4 py-2">{post.EndDate}</td>
                    <td className="px-4 py-2">
                      <button
                        type="button"
                        onClick={() => handleUpdateActiveStatus(post._id)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Accept
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
