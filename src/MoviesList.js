import { useState } from "react";
import Movie from "./Movie";

function MoviesList() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  async function fetchHandler(e) {
    setIsLoading(true)
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
    setIsLoading(false)
  }
  return (
    <div>
      <button onClick={fetchHandler}>Fetch</button>
      {isLoading && <p>Loading...</p>}
      <Movie movieList={movies} />
    </div>
  );
}

export default MoviesList;
