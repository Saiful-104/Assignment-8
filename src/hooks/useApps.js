// hooks/useApps.js
import axios from "axios";
import { useEffect, useState } from "react";

const useApps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios('/apps.json')
      .then(data => setApps(data.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);

  const getAppById = (id) => {
    return apps.find(app => app.id === parseInt(id));
  };

  const searchApps = (query) => {
    if (!query) return apps;
    
    const lowerQuery = query.toLowerCase();
    return apps.filter(app => 
      app.title.toLowerCase().includes(lowerQuery) ||
      app.companyName.toLowerCase().includes(lowerQuery) ||
      app.description.toLowerCase().includes(lowerQuery)
    );
  };

  const getTopRatedApps = (limit = 8) => {
    return [...apps]
      .sort((a, b) => b.ratingAvg - a.ratingAvg)
      .slice(0, limit);
  };

  const getMostDownloadedApps = (limit = 8) => {
    return [...apps]
      .sort((a, b) => b.downloads - a.downloads)
      .slice(0, limit);
  };

  return { 
    apps, 
    loading, 
    error,
    getAppById,
    searchApps,
    getTopRatedApps,
    getMostDownloadedApps
  };
};

export default useApps;