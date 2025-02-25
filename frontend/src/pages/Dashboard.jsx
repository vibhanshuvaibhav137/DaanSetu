import React, { useState } from "react";
import About from "../components/About";
import Donations from "../components/Donations";
import Requirements from "../components/Requirements";

export default function Dashboard() {
  const [activeComponent, setActiveComponent] = useState("About");

  const renderComponent = () => {
    switch (activeComponent) {
      case "About":
        return <About userType="ngo" />;
      case "Donations":
        return <Donations />;
      case "Requirements":
        return <Requirements />;
      default:
        return <About userType="ngo" />;
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-1/4 bg-gray-200 p-4">
        <h2 className="text-4xl font-bold m-3 mt-7 mb-7">Dashboard</h2>

        <button
          onClick={() => setActiveComponent("About")}
          className={`w-full  border-2 font-bold   py-4 rounded-xl   m-2 p-2  ${
            activeComponent === "About"
              ? "bg-cyan-700 text-white"
              : "border-cyan-700 hover:bg-cyan-100 text-cyan-700 bg-transparent"
          }`}
        >
          About
        </button>
        {JSON.parse(localStorage.getItem("user")).userType === "ngo" && (
          <button
            onClick={() => setActiveComponent("Requirements")}
            className={`w-full  border-2 font-bold   py-4 rounded-xl   m-2 p-2  ${
              activeComponent === "Requirements"
                ? "bg-cyan-700 text-white"
                : "border-cyan-700 hover:bg-cyan-100 text-cyan-700 bg-transparent"
            }`}
          >
            Requirements
          </button>
        )}
        <button
          onClick={() => setActiveComponent("Donations")}
          className={`w-full  border-2 font-bold   py-4 rounded-xl   m-2 p-2  ${
            activeComponent === "Donations"
              ? "bg-cyan-700 text-white"
              : "border-cyan-700 hover:bg-cyan-100 text-cyan-700 bg-transparent"
          }`}
        >
          Donations
        </button>
      </div>
      <div className="w-3/4 p-6 bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-4 relative">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}
