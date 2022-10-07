import { useState } from "react"

function Movie(props) {
    const [deleteMovie, setDeleteMovie] = useState(false)
    async function deleteMovieHandler(e) {
        e.preventDefault()
        setDeleteMovie(true)
        let response = await fetch('https://adding-movie-default-rtdb.firebaseio.com/movies.json', {
            method: 'DELETE'
        })
        let data = await response.json()
        setDeleteMovie(false)
    }
  return (
    <div>
      <ul>
        {props.movieList.map((movie) => {
          return (
            <li key={movie.id}>
              {movie.title} - {movie.openingText} - {movie.releaseDate}{" "}
              <button onClick={deleteMovieHandler}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Movie;
