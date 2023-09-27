import "./index.scss";
import MovieFlixFeaturedMovies from "./movies";
import MovieFlixFeaturedTvShows from "./shows";

const MovieFlixFeatured = () => {
	const api_key = "b62dddbb37d8ec434e52a02797220057";

	return (
		<section className="movie-flix-featured">
			<MovieFlixFeaturedMovies api_key={api_key} />
			<MovieFlixFeaturedTvShows api_key={api_key} />
		</section>
	);
};

export default MovieFlixFeatured;
