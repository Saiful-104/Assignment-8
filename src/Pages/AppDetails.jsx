import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { FaStar, FaDownload, FaThumbsUp } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useApps from "../hooks/useApps";

// Define the localStorage key
const STORAGE_KEY = "installedApps";

const AppDetails = () => {
  const { id } = useParams();
  const { getAppById, loading } = useApps();
  const [app, setApp] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const appData = getAppById(id);
    setApp(appData);
  }, [id, getAppById]);

  // ✅ New Effect: Check installation status when app data is loaded
  useEffect(() => {
    if (app) {
      const installed = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      const alreadyInstalled = installed.some(
        (installedApp) => installedApp.id === app.id
      );
      setIsInstalled(alreadyInstalled);
    }
  }, [app]); // Runs whenever the 'app' state changes

  // ✅ Updated Install Handler: Saves to localStorage
  const handleInstall = () => {
    try {
      const installed = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      // Add the current app to the list
      const updatedInstalled = [...installed, app];
      // Save back to localStorage
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedInstalled));

      setIsInstalled(true);
      toast.success("✓ App installed successfully!");
    } catch (error) {
      console.error("Failed to install app:", error);
      toast.error("Installation failed. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!app) {
    return (
      <div className="alert alert-error">
        <span>App not found</span>
      </div>
    );
  }

  const chartData = app.ratings.map((rating) => ({
    name: rating.name,
    count: rating.count,
  }));

  const COLORS = ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e"];

  const formathNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    } else {
      return num.toString();
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* App Information Section */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left - App Image */}
          <div className="md:col-span-1">
            <img
              src={app.image}
              alt={app.title}
              className="w-full rounded-xl shadow-md object-cover"
            />
          </div>

          {/* Right - App Details */}
          <div className="md:col-span-2 space-y-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{app.title}</h1>
              <p className="text-gray-500 text-lg">{app.companyName}</p>
            </div>

            <div className="flex flex-wrap gap-6">
              {/* Downloads */}
              <div className=" items-center gap-2">
                <FaDownload className="text-green-500 text-xl" />
                <div>
                  <div className=" mt-1 mb-1 text-sm text-gray-500">
                    Downloads
                  </div>
                  <div className="font-bold text-xl">
                    {app.downloads >= 1000000
                      ? `${(app.downloads / 1000000).toFixed(1)}M`
                      : `${(app.downloads / 1000).toFixed(0)}K`}
                  </div>
                </div>
              </div>
              {/* Rating */}
              <div className="items-center gap-2">
                <FaStar className="text-yellow-500 text-xl" />
                <div>
                  <div className="text-sm text-gray-500 mt-1 mb-1 ">Rating</div>
                  <div className="font-bold text-xl">{app.ratingAvg}</div>
                </div>
              </div>

              {/* Reviews */}
              <div>
                <FaThumbsUp />
                <div className="text-sm text-gray-500 mt-1 mb-1 ">
                  {" "}
                  Total Reviews
                </div>
                <div className="font-bold text-xl">
                  {formathNumber(app.reviews)}
                </div>
              </div>
            </div>

            {/* Install Button */}
            <button
              onClick={handleInstall}
              disabled={isInstalled}
              className={`btn btn-lg w-full md:w-auto ${
                isInstalled
                  ? "btn-success cursor-not-allowed"
                  : "btn-primary hover:scale-105 transition-transform"
              }`}
            >
              {isInstalled ? "✓ Installed" : `Install now (${app.size} MB)`}
            </button>
          </div>
        </div>
      </div>

      {/* App Review Chart Section */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Rating Distribution
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" radius={[8, 8, 0, 0]}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        {/* Rating Breakdown */}
        <div className="mt-6 space-y-3">
          {app.ratings
            .slice()
            .reverse()
            .map((rating, index) => {
              const percentage = (rating.count / app.reviews) * 100;
              return (
                <div key={rating.name} className="flex items-center gap-3">
                  <span className="text-sm font-medium w-16">
                    {rating.name}
                  </span>
                  <div className="flex-1 bg-gray-200 rounded-full h-3">
                    <div
                      className="h-3 rounded-full transition-all"
                      style={{
                        width: `${percentage}%`,
                        backgroundColor: COLORS[4 - index],
                      }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 w-20 text-right">
                    {rating.count.toLocaleString()}
                  </span>
                </div>
              );
            })}
        </div>
      </div>

      {/* App Description Section */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Description</h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          {app.description}
        </p>
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default AppDetails;