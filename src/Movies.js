import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  const { movies, isloading } = useGlobalContext();

  if (isloading) {
    return <div className="loading">Loading....</div>
  }

  return <h2>movies component</h2>;
};

export default Movies;
