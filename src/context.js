import React, { useState, useContext, useEffect } from "react";
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState({show:false, msg:""})
  return <AppContext.Provider value="heloo">{children}</AppContext.Provider>;
};

// make sure use

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
