import "./headerCarouselItem.scss";
import { BsStar } from "react-icons/bs";

const MovieFlixCarouselItem = ({ item }) => {
	return (
		<div
			className="movie-flix-carousel-item"
			style={{
				background: `linear-gradient(0.35turn, rgba(0,0,0,.23), rgba(0,0,0,.93)), url('https://image.tmdb.org/t/p/original${item.backdrop_path}')`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "100% 70%",
			}}
		>
			<div className="movie-flix-carousel-info-container">
				<h1>{item.original_title}</h1>
				<div className="movie-flix-carousel-info">
					<div className="movie-flix-ratings">
						<BsStar />
						<p>{item.vote_average}</p>
					</div>
					<p>{item.release_date}</p>
				</div>
                <p>{item.overview}</p>
			</div>
		</div>
	);
};

export default MovieFlixCarouselItem;
