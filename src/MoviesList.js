import { useCallback, useEffect, useState } from "react";
import Movie from "./Movie";

function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchHandler = useCallback(async function () {
    setIsLoading(true);
    try {
      let response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("something went wrong...Retrying");
      }
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
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchHandler()
  }, [fetchHandler]);

  function cancelRetrying(id) {
    clearInterval(id);
    setError('')
  }

  return (
    <div>
      <button onClick={fetchHandler}>Fetch</button>
      <button onClick={cancelRetrying}>Cancel</button>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <Movie movieList={movies} />
    </div>
  );
}

export default MoviesList;
