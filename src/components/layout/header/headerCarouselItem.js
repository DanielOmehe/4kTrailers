import "./headerCarouselItem.scss";
import { BsStar } from "react-icons/bs";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";

const RustedRageCarouselItem = ({ item, genres }) => {
	let classes = ["rusted-rage-carousel-item"];
	if (item) {
		classes.push("active");
	}
	return (
		<div
			className="rusted-rage-carousel-item"
			style={{
				background: `linear-gradient(rgba(7, 11, 17, 0.898898989898989898989898989) 10%, rgba(7, 11, 17, 0.67), rgb(7, 11, 17, .989898989) 75%), url('https://image.tmdb.org/t/p/original${item.backdrop_path}')`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "40% 10%",
			}}
		>
			<div className="rusted-rage-carousel-info-container">
				<h1>{item.title}</h1>
				<div className="rusted-rage-carousel-info">
					<div className="rusted-rage-ratings">
						<BsStar />
						<p>{item.vote_average}</p>
					</div>
					<p>{item.release_date}</p>
					<div className="rusted-rage-movie-genres">
						{genres.map((genre) => genre.map(({ name }) => <p key={name}>{name}</p>))}
					</div>
				</div>
				<p className="rusted-rage-overview">{item.overview}</p>
				<div className="rusted-rage-controls">
					<button className="watch-now">
						<p>Watch Now</p>
						<AiOutlinePlayCircle size={20} />
					</button>
					<button className="add-to-watchlist">
						<p>Add to WatchList</p>
						<MdFavoriteBorder size={20} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default RustedRageCarouselItem;
