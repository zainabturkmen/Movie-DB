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

  return <section className="movies">
    {movies.map((movie, index)=> {
      const {imdbid:id, Poster:poster, Title:title, Year:year} = movie
      return (
        <Link to={`/movies/${id}`} key={id} className="movie">
          <article>
            <img src={poster} alt={title} />
          </article>
        </Link>
      );
    })}
  </section>

};

export default Movies;
