import "./index.scss";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

const MoviesCard = ({ movie }) => {
	return (
		<Link to={`movies/${movie.title}`}>
			{" "}
			<div className="movies-card">
				<div className="movie-poster">
					<img
						src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
						alt={movie.title}
					/>
				</div>
                <div className='media-and-rating'>
                    <>{movie.media_type ? <p>{movie.media_type}</p> : null}</>
                    <div className='movie-rating'>
                        <FaStar />
                        <p>{movie.vote_average}</p>
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
