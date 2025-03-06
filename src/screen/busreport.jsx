import React, { useState, useEffect } from "react";
import axios from "axios";
import UserNav from "../Component/UserNav";
import config from "./Config"; // Import the config file

const BusDataList = () => {
  const [busData, setBusData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBusData = async () => {
      try {
        const response = await axios.get(`${config.BASE_URL}/getdata/bus/all`);
        setBusData(response.data);
      } catch (error) {
        console.error("Error fetching bus data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBusData();
  }, []);

  return (
    <div>
      <UserNav />
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold my-4">Bus Allocation Data</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {busData.length === 0 ? (
              <p>No bus data found</p>
            ) : (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Bus Number
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Destination
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Departure Time
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {busData.map((bus) => (
                    <tr key={bus._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {bus.BusNO}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {bus.Destination}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {bus.DepartureTime}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BusDataList;
