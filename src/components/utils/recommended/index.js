import "./index.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../cards";
import useParams from 'react-router-dom';

const RecommendedMovies = ({ movieId }) => {
	const [recommendedMovies, setRecommendedMovies] = useState([]);
	const api_key = "b62dddbb37d8ec434e52a02797220057";

	useEffect(() => {
		const getRecommendedMovies = async (url) => {
			try {
				const response = await axios.get(url);
				const data = await response?.data;

				setRecommendedMovies(data?.results?.splice(0, 12));
			} catch (error) {
				console.log(error);
			}
		};

		getRecommendedMovies(
			`https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US&page=1&api_key=${api_key}`
		);
	}, [movieId, api_key, recommendedMovies]);
	return (
		<section className="recommended-movies">
			<h1>Recommended Movies</h1>
			<div className="recommended-movies-grid">
				{recommendedMovies &&
					recommendedMovies.map((movie) => <MovieCard movie={movie} />)}
			</div>
		</section>
	);
};

export default RecommendedMovies;
