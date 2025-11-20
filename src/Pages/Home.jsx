// Pages/Home.jsx
import React from "react";
import { Link } from "react-router"; 
import { FaStar, FaApple, FaGooglePlay, FaDownload } from "react-icons/fa";
import useApps from "../hooks/useApps";

import hero from '../assets/hero.png'
import Loading from "../Pages/Loading";


const Home = () => {
  const { apps, loading, error } = useApps();
  const topApps = apps.slice(0, 8);

     if (loading) {
  return (
     <Loading  message="Loading apps, please wait..."/>
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
    <div className="space-y-16">
      {/* Banner Section */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold">
          We Build <br />
          <span className="text-purple-600">Productive</span> Apps
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br />
          Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>

        <div className="flex gap-4 justify-center flex-wrap mt-4">
          {/* App Store Button */}
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg bg-black text-white hover:bg-gray-800 gap-2 flex items-center"
          >
            <FaApple className="text-2xl" />
            App Store
          </a>

          {/* Play Store Button */}
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600 gap-2 flex items-center"
          >
            <FaGooglePlay className="text-xl" />
            Play Store
          </a>
        </div>
      </div>
        
       <div className="flex justify-center"> 
 <img className="  w-11/12 md:w-3/5 " src={hero} alt="" />
       </div>
      <div className="bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500 text-white shadow-xl p-15 -mr-25 -ml-25 -mt-16 ">
      <h1 className="text-center text-3xl font-bold text-white mb-10">
        Trusted by Millions, Built for You
      </h1>
      
      <div className="flex flex-wrap justify-center gap-16 max-w-5xl mx-auto">
        <div className="text-center">
          <p className="text-purple-100 text-sm mb-2">Total Downloads</p>
          <h2 className="text-5xl font-bold mb-2">29.6M</h2>
          <p className="text-purple-200 text-sm">21% more than last month</p>
        </div>
        
        <div className="text-center">
          <p className="text-purple-100 text-sm mb-2">Total Reviews</p>
          <h2 className="text-5xl font-bold mb-2">29.6M</h2>
          <p className="text-purple-200 text-sm">21% more than last month</p>
        </div>
        
        <div className="text-center">
          <p className="text-purple-100 text-sm mb-2">Active Apps</p>
          <h2 className="text-5xl font-bold mb-2">132+</h2>
          <p className="text-purple-200 text-sm">31 more will Launch</p>
        </div>
      </div>
    </div>
     
      {/* Top Apps Section */}
      <div className="space-y-6">
        
         <div className=" items-center text-center">
            <h2 className="text-3xl font-bold">Trending Apps</h2>
            <p className="text-gray-400">Explore All Trending Apps on the Market developed by us</p>
         
         </div>
    
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6">
          {topApps.map((app) => (
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
                      <  FaDownload />
                    { app.downloads >= 1000000
                      ? `${(app.downloads / 1000000).toFixed(1)}M`
                      : `${(app.downloads / 1000).toFixed(0)}K`}{" "}
                 
                  </div>
                  <div className="flex items-center gap-1 p-1">

                    <FaStar className="text-yellow-500" />
                    <span className="font-semibold text-yellow-500">{app.ratingAvg}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

       <div className="flex justify-center items-center">
          <Link
  to="/allapps"
  className="btn btn-outline btn-primary "
>
  Show All
</Link>
       </div>
      

    </div>
  );
};

export default Home;