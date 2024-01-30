import "./headerCarouselItem.scss";
import { FaStar } from "react-icons/fa";

const RustedRageCarouselItem = ({ movie }) => {
    const { backdrop_path, poster_path, title, overview, vote_average, release_date } = movie
	return (
		<section className="rusted-rage-carousel-item">
			<img
				className="carousel-item-backdrop"
				src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
				alt={title}
			/>
            <div className='carousel-gradient'></div>
			<div className="movie-info">
				<img
					src={`https://image.tmdb.org/t/p/w500${poster_path}`}
					alt={title}
				/>
				<div className="movie-info-text">
					<h3>
						{title.slice(0, 20)}
						{title.length > 25 ? "..." : ""}
					</h3>
					<div>
						<FaStar fill="yellow" size={20} />
						<p>{vote_average}</p>
						<p>{release_date}</p>
					</div>
                    <span className='overview'>{overview}</span>
				</div>
			</div>
		</section>
	);
};

export default RustedRageCarouselItem;
