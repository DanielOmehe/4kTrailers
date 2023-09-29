import "./headerCarouselItem.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { BsStar } from "react-icons/bs";
import { AiOutlinePlayCircle } from 'react-icons/ai'
import { MdFavoriteBorder } from 'react-icons/md';

const RustedRageCarouselItem = ({ item }) => {

    // const [genres, setGenres] = useState([])

    // const getGenres = async()=>{
    //     try{
    //         const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list?language=en');
    //         const data = await response.data;
    //         setGenres(data);
    //     }catch(error){
    //         console.error(error);
    //     }
    // }

    // useEffect(() => {
    //     getGenres()
    // }, [])
    let classes = ["rusted-rage-carousel-item"]
    if(item){
        classes.push('active')
    }
	return (
		<div
			className="rusted-rage-carousel-item"
			style={{
				background: `linear-gradient(180deg, rgba(7, 11, 17, 0.8988989898989), rgba(7, 11, 17, 0.07), rgb(7, 11, 17, .9898989898)), url('https://image.tmdb.org/t/p/original${item.backdrop_path}')`,
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
				</div>
                <div className="rusted-rage-movie-genres"></div>
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
