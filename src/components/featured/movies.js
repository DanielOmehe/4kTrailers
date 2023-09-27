import { useEffect, useState } from "react";
import axios from "axios";
import MovieFlixLoader from "../utils/loader";
import MovieFlixCard from "./movieCard";
import { BsArrowRightCircleFill } from 'react-icons/bs'
import { BsArrowLeftCircleFill } from 'react-icons/bs'

const MovieFlixFeaturedMovies = ({ api_key }) => {
	const [moviesList, setMovies] = useState([]);
	const [isLoading, setIsloading] = useState(false);

	const getMovies = async (url) => {
		try {
			setIsloading(true);
			const response = await axios.get(url);
			const data = response.data;
			setMovies(data.results);
			if(data){
                setIsloading(false);
            }

			console.log(data);
		} catch (error) {
			console.error(error);
			setIsloading(false);
		}
	};

	useEffect(() => {
		getMovies(
			`https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=10&sort_by=popularity.desc&with_cast=Ryan%20Reynolds%2CKeanu%20Reeves%2C%20&with_genres=Action%2C%20Adeventure%2C%20Family%2C%20Drama%2C%20Sci-fi&api_key=${api_key}`
		);
	}, [api_key]);

	return (
		<div className="movie-flix-featured-movies">
			<h1>Featured Movies</h1>
			<hr />
			<div className="movie-flix-featured-movies-list">
            <BsArrowLeftCircleFill size={40} className="arrows" color='#000' />
            {isLoading ? <MovieFlixLoader /> : (
                <>
                {
                    moviesList.map((movie) => <MovieFlixCard key={movie.name} movie={movie} />)
                }
                </>
            )}
            <BsArrowRightCircleFill size={40} className="arrows" color='#000' />
			</div>
		</div>
	);
};

export default MovieFlixFeaturedMovies;
