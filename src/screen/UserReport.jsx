import React, { useState, useEffect } from "react";
import axios from "axios";
import UserNav from "../Component/UserNav";
import config from "./Config"; // Import BASE_URL from config

export default function UserReport() {
  const [activePostData, setActivePostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchActivePostData = async () => {
      try {
        const response = await axios.get(`${config.BASE_URL}/getdata/all`);
        setActivePostData(response.data);
      } catch (error) {
        setError("Error fetching active post data");
      } finally {
        setLoading(false);
      }
    };

    fetchActivePostData();
  }, []);

  return (
    <div>
      <UserNav />
      <div className="max-w-8xl mx-auto py-6 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Report</h2>

        {loading && (
          <div className="flex items-center justify-center">
            <div className="border-t-4 border-b-4 border-red-300 rounded-full w-40 h-40 my-40 animate-spin mx-auto"></div>
          </div>
        )}

        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && (
          <div className="overflow-x-auto">
            <table className="table-auto border-collapse border border-gray-200 w-full">
              <thead className="bg-gray-200">
                <tr>
                  {[
                    "S.No",
                    "Staff Name",
                    "Department",
                    "Number of Students",
                    "Reason",
                    "From",
                    "To",
                    "Days",
                    "Start Date",
                    "End Date",
                  ].map((heading, index) => (
                    <th key={index} className="px-4 py-2 border">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {activePostData.map((post, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                    <td className="px-4 py-2 border">{index + 1}</td>
                    <td className="px-4 py-2 border">{post.StaffName}</td>
                    <td className="px-4 py-2 border">{post.Department}</td>
                    <td className="px-4 py-2 border">{post.NumOfStu}</td>
                    <td className="px-4 py-2 border">{post.Reason}</td>
                    <td className="px-4 py-2 border">{post.From}</td>
                    <td className="px-4 py-2 border">{post.To}</td>
                    <td className="px-4 py-2 border">{post.Days}</td>
                    <td className="px-4 py-2 border">{post.StartDate}</td>
                    <td className="px-4 py-2 border">{post.EndDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
