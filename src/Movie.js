function Movie(props) {
    return (
        <div>
            <ul>
                {props.movieList.map(movie => {
                    return <li key={movie.id}>{movie.title} - {movie.openingText}</li>
                })}
            </ul>
        </div>
    )
}

export default Movie