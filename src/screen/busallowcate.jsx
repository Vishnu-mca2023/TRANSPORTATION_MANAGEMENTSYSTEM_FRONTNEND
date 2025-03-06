import React, { useState } from "react";
import axios from "axios";
import AdminNav from "../Component/AdminNav";
import config from "./Config"; // Importing config

const BusAllocationForm = () => {
  const [busNO, setBusNO] = useState("");
  const [destination, setDestination] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.BASE_URL}/busallowcate`, {
        BusNO: busNO,
        Destination: destination,
        DepartureTime: departureTime,
      });
      if (response.status === 201) {
        setMessage("Bus Allocated Successfully");
        setBusNO("");
        setDestination("");
        setDepartureTime("");
      }
    } catch (error) {
      console.error("Error allocating bus:", error);
      setMessage("Server Error");
    }
  };

  return (
    <div>
      <AdminNav />
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Allocate Bus</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="busNO" className="block text-sm font-medium mb-1">
              Bus Number
            </label>
            <input
              type="text"
              id="busNO"
              value={busNO}
              onChange={(e) => setBusNO(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="destination" className="block text-sm font-medium mb-1">
              Destination
            </label>
            <input
              type="text"
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="departureTime" className="block text-sm font-medium mb-1">
              Departure Time
            </label>
            <input
              type="text"
              id="departureTime"
              value={departureTime}
              onChange={(e) => setDepartureTime(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Allocate Bus
          </button>
        </form>
        {message && <p className="mt-4 text-red-500">{message}</p>}
      </div>
    </div>
  );
};

export default BusAllocationForm;
