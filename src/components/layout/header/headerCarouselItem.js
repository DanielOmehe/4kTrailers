import "./headerCarouselItem.scss";
import { BsStar } from "react-icons/bs";
import { AiOutlinePlayCircle } from 'react-icons/ai'
import { MdFavoriteBorder } from 'react-icons/md';

const MovieFlixCarouselItem = ({ item }) => {

    let classes = ["movie-flix-carousel-item"]
    if(item){
        classes.push('active')
    }
	return (
		<div
			className="movie-flix-carousel-item"
			style={{
				background: `linear-gradient(0.35turn, rgba(0,0,0,.19), rgba(0,0,0,.99)), url('https://image.tmdb.org/t/p/original${item.backdrop_path}')`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "40% 10%",

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
				<p className="movie-flix-overview">{item.overview}</p>
				<div className="movie-flix-controls">
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

export default MovieFlixCarouselItem;
