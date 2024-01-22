import axios from "axios";
import { useEffect, useState } from "react";
// import MoviesCard from "../../../util/cards/moviesCard";

const movies = [
	{
		title: "Movie Title",
		release_date: new Date(),
		rating: 7.8,
	},
	{
		title: "Movie Title",
		release_date: new Date(),
		rating: 7.8,
	},
	{
		title: "Movie Title",
		release_date: new Date(),
		rating: 7.8,
	},
	{
		title: "Movie Title",
		release_date: new Date(),
		rating: 7.8,
	},
	{
		title: "Movie Title",
		release_date: new Date(),
		rating: 7.8,
	},
	{
		title: "Movie Title",
		release_date: new Date(),
		rating: 7.8,
	},
	{
		title: "Movie Title",
		release_date: new Date(),
		rating: 7.8,
	},
	{
		title: "Movie Title",
		release_date: new Date(),
		rating: 7.8,
	},
	{
		title: "Movie Title",
		release_date: new Date(),
		rating: 7.8,
	},
	{
		title: "Movie Title",
		release_date: new Date(),
		rating: 7.8,
	},
	{
		title: "Movie Title",
		release_date: new Date(),
		rating: 7.8,
	},
	{
		title: "Movie Title",
		release_date: new Date(),
		rating: 7.8,
	},
	{
		title: "Movie Title",
		release_date: new Date(),
		rating: 7.8,
	},
	{
		title: "Movie Title",
		release_date: new Date(),
		rating: 7.8,
	},
	{
		title: "Movie Title",
		release_date: new Date(),
		rating: 7.8,
	},
	{
		title: "Movie Title",
		release_date: new Date(),
		rating: 7.8,
	},
	{
		title: "Movie Title",
		release_date: new Date(),
		rating: 7.8,
	},
	{
		title: "Movie Title",
		release_date: new Date(),
		rating: 7.8,
	},
	{
		title: "Movie Title",
		release_date: new Date(),
		rating: 7.8,
	},
	{
		title: "Movie Title",
		release_date: new Date(),
		rating: 7.8,
	},
];

const TrendingMoviesTab = ({tabKey}) => {
	// const [movies, setMovies] = useState();
	// const api_key = "b62dddbb37d8ec434e52a02797220057";
	// useEffect(() => {
	// 	const getMovies = async () => {
	// 		try {
	// 			const response = await axios.get(
	// 				`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${api_key}`
	// 			);
	// 			const data = await response.data;
	// 			setMovies(data.results);
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	};

	// 	getMovies();
	// }, [movies]);
	return (
		<section className="trending-movies-tab">
        <h1>This is the Trending Movies Tab</h1>
			{/*{(
				<div className="no-data">
					<h1>Looks like you're offline</h1>
					<p>Check your connection and try again</p>
				</div>
			) || (
				<>
					{movies.map((movie, indx) => (
						<MoviesCard movie={movie} />
					))}
				</>
                    )}*/}
		</section>
	);
};

export default TrendingMoviesTab;
