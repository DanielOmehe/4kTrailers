import axios from "axios";
import { useEffect, useState } from "react";
// import TvShowsCard from "../../../util/cards/showsCard";

const tvShows = [
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

const TrendingTvShowsTab = ({tabKey}) => {
	// const [tvShows, setTvShows] = useState();
	// const api_key = "b62dddbb37d8ec434e52a02797220057";
	// useEffect(() => {
	// 	const getTvShows = async () => {
	// 		try {
	// 			const response = await axios.get(
	// 				`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${api_key}`
	// 			);
	// 			const data = await response.data;
	// 			setTvShows(data.results);
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	};

	// 	getTvShows();
	// }, [TvShows]);
	return (
		<section className="trending-tvShows-tab">
			<h1>This is the Trending TV Shows Tab</h1>
			{/*{(
				<div className="no-data">
					<h1>Looks like you're offline</h1>
					<p>Check your connection and try again</p>
				</div>
			) || (
				<>
					{tvShows.map((movie, indx) => (
						<TvShowsCard show={show} />
					))}
				</>
                    )}*/}
		</section>
	);
};

export default TrendingTvShowsTab;
