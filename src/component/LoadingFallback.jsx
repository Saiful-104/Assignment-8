// components/LoadingFallback.jsx
import React from "react";

const LoadingFallback = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );
};

export default LoadingFallback;
