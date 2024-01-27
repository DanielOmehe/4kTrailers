import "./headerCarouselItem.scss";
import { FaStar } from "react-icons/fa";

const RustedRageCarouselItem = ({ movie }) => {
	return (
		<section className="rusted-rage-carousel-item">
			<img
				className="carousel-item-backdrop"
				src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
				alt={movie.title}
			/>
            <div className='carousel-gradient'></div>
			<div className="movie-info">
				<img
					src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
					alt={movie.title}
				/>
				<div className="movie-info-text">
					<h3>
						{movie.title.slice(0, 20)}
						{movie.title.length > 25 ? "..." : ""}
					</h3>
					<div>
						<FaStar fill="yellow" size={20} />
						<p>{movie.vote_average}</p>
						<p>{movie.release_date}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default RustedRageCarouselItem;
