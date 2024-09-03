import "./series.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../cards";

const RecommendedSeries = ({ movieId }) => {
	const [recommendedSeries, setRecommendedSeries] = useState([]);
	const api_key = "b62dddbb37d8ec434e52a02797220057";

	useEffect(() => {
		const getRecommendedSeries = async (url) => {
			try {
				const response = await axios.get(url);
				const data = await response?.data;

				setRecommendedSeries(data?.results?.splice(0, 12));
			} catch (error) {
				console.log(error);
			}
		};

		getRecommendedSeries(
			`https://api.themoviedb.org/3/tv/${movieId}/recommendations?language=en-US&page=1&api_key=${api_key}`
		);
	}, [movieId, api_key, recommendedSeries]);
	return (
		<section className="recommended-series">
			<h1>Recommended Series</h1>
			<div className="recommended-series-grid">
				{recommendedSeries &&
					recommendedSeries.map((movie) => <MovieCard movie={movie} />)}
			</div>
		</section>
	);
};

export default RecommendedSeries;
