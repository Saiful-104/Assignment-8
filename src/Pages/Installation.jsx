import React, { useState, useEffect, useMemo } from "react";
import { FaStar, FaDownload, FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const STORAGE_KEY = "installedApps";

const formatNumber = (num) => {
  if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  return num.toString();
};

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("low-high");

  useEffect(() => {
    const installed = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    setInstalledApps(installed);
  }, []);

  const handleUninstall = (appId) => {
    const installed = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    const updatedInstalled = installed.filter((app) => app.id !== appId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedInstalled));
    setInstalledApps(updatedInstalled);
    toast.warn("App uninstalled successfully!");
  };

  const sortedApps = useMemo(() => {
    return [...installedApps].sort((a, b) =>
      sortOrder === "high-low" ? b.downloads - a.downloads : a.downloads - b.downloads
    );
  }, [installedApps, sortOrder]);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">Your Installed Apps</h1>
        <p className="text-gray-500 mt-1">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* Sort section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="font-bold text-lg">Apps Found</h1>
        <select
          className="select select-bordered w-full md:w-auto"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="high-low">Sort by Download: High-Low</option>
          <option value="low-high">Sort by Download: Low-High</option>
        </select>
      </div>

      {/* Installed Apps List */}
      {sortedApps.length === 0 ? (
        <div className="text-center text-gray-500 text-xl py-20 bg-white rounded-lg shadow">
          You have no installed apps.
        </div>
      ) : (
        <div className="space-y-4">
          {sortedApps.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 w-full flex flex-col sm:flex-row items-center justify-between p-4"
            >
              {/* Left: Image + Info */}
              <div className="flex items-center gap-4 w-full sm:w-auto flex-1">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-30 h-30 sm:w-40 sm:h-40 rounded-xl object-cover shadow-md"
                />
                <div className="flex flex-col justify-center">
                  <h2 className="text-xl font-bold text-gray-800">{app.title}</h2>
                  <div className="flex items-center gap-6 mt-2 text-gray-600">
                    <div className="flex items-center gap-1">
                      <FaDownload className="text-green-500" />
                      <span className="text-lg font-bold">
                        {formatNumber(app.downloads)}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <span className="text-lg font-bold">{app.ratingAvg}</span>
                    </div>
                    <h3 className="font-semibold " >{app.size} MB</h3>
                  </div>
                </div>
              </div>

              {/* Right: Uninstall Button */}
              <button
                onClick={() => handleUninstall(app.id)}
                className="btn btn-outline btn-error w-full sm:w-auto mt-3 sm:mt-0 flex items-center gap-2 justify-center"
              >
                <FaTrash /> Uninstall
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Toast Notification */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        theme="colored"
      />
    </div>
  );
};

export default Installation;
