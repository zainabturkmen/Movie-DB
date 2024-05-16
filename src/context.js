import React, { useState, useContext, useEffect } from "react";
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [movie, setMovie] = useState([]);
  const [quer, setQuery] = useState("batman");

  const fetchMovies = async (url) => {
    setLoading(true)
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      
    }
  }

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}`)
  }, [])

  return <AppContext.Provider value="heloo">{children}</AppContext.Provider>;
};

// make sure use

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
