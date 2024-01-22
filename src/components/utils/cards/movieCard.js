const MoviesCard = ({ movie }) => {
	return (
		<div className="movies-card">
			<img src={movie.img_url} alt={movie.title} />
			<div className="movie-card-info">
				<h3>{movie.title}</h3>
				<div>
					<p>{movie.rating}</p>
					<p>{movie.release_date}</p>
				</div>
			</div>
		</div>
	);
};

export default MoviesCard;
