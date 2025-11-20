import React, { useEffect, useState } from "react";
import { FaSearch ,FaStar,FaDownload } from "react-icons/fa";
import notFound from '../assets/App-Error.png'

import useApps from "../hooks/useApps";
import { Link } from "react-router";

const AllApps = () => {
  const { apps, loading, error } = useApps();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterApps, setFilterApps] = useState([]);

  useEffect(() => {
    if (apps.length > 0) {
      setFilterApps(apps);
    }
  }, [apps]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilterApps(apps);
    } else {
      const filtered = apps.filter((app) =>
        app.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilterApps(filtered);
    }
  }, [searchQuery, apps]);

   const handleSearchChange =(e) => {
    setSearchQuery(e.target.value)
   }
      if (loading) {
  return (
    <div className="flex flex-col justify-center items-center min-h-[60vh] space-y-4">
    
      <div className="w-16 h-16 border-4 border-t-purple-600 border-gray-200 rounded-full animate-spin"></div>
      
      <p className="text-lg text-gray-600 font-medium">
        Loading apps, please wait...
      </p>
    </div>
  );
}

     if (error) {
    return (
      <div className="alert alert-error">
        <span>Error loading apps: {error.message}</span>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className=" items-center text-center">
        <h1 className="text-2xl font-bold"> Our All Applications</h1>
        <p className="text-gray-500">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg ">
          {" "}
          Apps Found: <span>({ searchQuery?filterApps.length : apps.length})</span>
        </h3>
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            placeholder="Search Apps.."
            value={searchQuery}
            onChange={handleSearchChange}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
      </div>
      
       {filterApps.length===0 ? ( 
          <div className="flex flex-col items-center justify-center min-h-[40vh] space-y-4">

         <div className="" >
           <img className="w-11/12" src={notFound} alt="" />
         </div>
         <h3 className="text-2xl font-bold text-gray-400">No App Found</h3>
          <p className="text-gray-500">Try searching with a different keyword</p>
         </div>
        ) : (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filterApps.map((app) => (
            <Link
              key={app.id}
              to={`/appDetails/${app.id}`}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <figure className="px-6 pt-6">
                <img
                  src={app.image}
                  alt={app.title}
                  className="rounded-xl w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-lg">{app.title}</h3>

                <div className="flex justify-between items-center mt-2">
                  <div className="text-sm text-gray-500 flex items-center gap-1 text-green-400 bg-gray-100 p-1 rounded-xl">
                    <FaDownload />
                    {app.downloads >= 1000000
                      ? `${(app.downloads / 1000000).toFixed(1)}M`
                      : `${(app.downloads / 1000).toFixed(0)}K`}
                  </div>
                  <div className="flex items-center gap-1 p-1">
                    <FaStar className="text-yellow-500" />
                    <span className="font-semibold text-yellow-500">
                      {app.ratingAvg}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>)}
         
    </div>
 
  );
};

export default AllApps;