import React from "react";

const Loading = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[60vh] space-y-4">
      <div className="w-16 h-16 border-4 border-t-blue-600 border-gray-200 rounded-full animate-spin"></div>
      <p className="text-lg text-gray-600 font-medium">{message}</p>
    </div>
  );
};

export default Loading;
