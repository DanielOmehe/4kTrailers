import './movieCard.scss'

const MovieFlixCard =({movie})=>{
    return (
        <div className="movie-flix-card">
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt='movie poster' />
            <h2>{movie.original_title}</h2>
        </div>
    )
}

export default MovieFlixCard