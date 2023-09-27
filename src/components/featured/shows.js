import { useState, useEffect } from "react";
import axios from "axios";
import MovieFlixLoader from "../utils/loader";
import MovieFlixCard from "./movieCard";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsArrowLeftCircleFill } from "react-icons/bs";

const MovieFlixFeaturedTvShows = ({ api_key }) => {
	const [showsList, setShows] = useState([]);
	const [isLoading, setIsloading] = useState(false);

	const getShows = async (url) => {
		try {
			setIsloading(true);
			const response = await axios.get(url);
			const data = response.data;
			setShows(data.results);
			if (data) {
				setIsloading(false);
			}
		} catch (error) {
			console.error(error);
			setIsloading(false);
		}
	};

	useEffect(() => {
		getShows(
			`https://api.themoviedb.org/3/discover/tv?include_adult=true&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=Sci-fi%2C%20Action%2C%20Adventure&with_origin_country=us&api_key=${api_key}`
		);
	}, [api_key]);

	return (
		<div className="movie-flix-featured-shows">
			<h1>Featured Tv Shows</h1>
			<hr />
			<div className="movie-flix-featured-shows-list">
				<BsArrowLeftCircleFill size={40} className="arrows" color='#000' />
				{isLoading ? (
					<MovieFlixLoader />
				) : (
					<>
						{showsList.map((movie) => (
							<MovieFlixCard key={movie.name} movie={movie} />
						))}
					</>
				)}
				<BsArrowRightCircleFill size={40} className="arrows" color='#000' />
			</div>
		</div>
	);
};

export default MovieFlixFeaturedTvShows;
