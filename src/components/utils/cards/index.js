import "./index.scss";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

const MoviesCard = ({ movie }) => {
	const { vote_average, title, name, poster_path, media_type } = movie;
	const total_vote_percentage = Math.floor((vote_average / 10) * 100);
	let color =
		total_vote_percentage > 80
			? "green"
			: total_vote_percentage < 80 && total_vote_percentage > 60
			? "yellow"
			: "red";
	return (
		<Link to={`movies/${title ? title : name}`}>
			{" "}
			<div className="movies-card">
				<div className="movie-poster">
					<img
						src={`https://image.tmdb.org/t/p/w342${poster_path}`}
						alt={title}
					/>
				</div>
				<div className="media-and-rating">
					<>
						{media_type ? (
							<div className="media-type">
								<p>{media_type}</p>
							</div>
						) : null}
					</>
					<div
						className="movie-rating"
						style={{
							background: `radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(${color} ${total_vote_percentage}%, #ededed 0)`,
						}}
					>
						<p>{total_vote_percentage}%</p>
					</div>
				</div>
				<div className="movie-control-btns">
					<button className="play-btn">
						<FaPlay size={25} fill="#000" />
					</button>
					<button className="add-to-watchlist">
						<FaPlus size={25} fill="#000" />
					</button>
				</div>
			</div>
		</Link>
	);
};

export default MoviesCard;
