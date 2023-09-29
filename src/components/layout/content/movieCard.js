import  './movieCard.scss';
const RustedRageMovieCard =({ index, movie })=>{
    return(
        <div className='rusted-rage-movie-card'>
            <h1>{index + 1}</h1>
            <div className='rusted-rage-movie-poster'>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </div>
        </div>
    )
}

export default RustedRageMovieCard