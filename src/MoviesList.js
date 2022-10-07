import { useState } from "react";
import Movie from "./Movie";

function MoviesList() {
    
  const [movies, setMovies] = useState([]);

  async function fetchHandler(e) {
    e.preventDefault();
    let response = await fetch("https://swapi.dev/api/films/");
    let data = await response.json();
    let movies = data.results;

    let tranformedData = movies.map((movie) => {
      return {
        id: movie["episode_id"],
        title: movie.title,
        openingText: movie["opening_crawl"],
        releaseDate: movie["release_date"],
      };
    });

    setMovies(tranformedData);
  }
  return (
    <div>
      <button onClick={fetchHandler}>Fetch</button>
      <Movie movieList={movies} />
    </div>
  );
}

export default MoviesList;
