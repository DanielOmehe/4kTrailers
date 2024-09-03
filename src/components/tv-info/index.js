import "./index.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { FaStar, FaPlay } from "react-icons/fa6";
import RustedRageNavBar from "../utils/navbar";
import RustedRageFooter from "../utils/footer";
import RecommendedSeries from "../utils/recommended/series";
import { useRustedRageContext } from "../context";
import Button from "../utils/button";
import MovieVideoContainer from "../utils/video";
import SeriesEpisodes from "./episodes";

const TvShowsInfoPage = () => {
	const [showData, setShowData] = useState([]);
	const [videos, setVideos] = useState();
	const { seriesId } = useParams();
	const navigate = useNavigate();
	const api_key = "b62dddbb37d8ec434e52a02797220057";
	const { openCarousel, showCarousel } = useRustedRageContext();
	console.log(seriesId);

	const {
		poster_path,
		title,
		name,
		overview,
		vote_average,
		production_companies,
		production_countries,
		budget,
		revenue,
		runtime,
		genres,
		backdrop_path,
	} = showData;

	useEffect(() => {
		const getShowData = async (url) => {
			try {
				const response = await axios.get(url);
				const data = await response.data;
				setShowData(data);
			} catch (error) {
				console.log(error);
			}
		};

		const getShowVideos = async (url) => {
			try {
				const response = await axios.get(url);
				const data = await response.data;
				setVideos(data.results.filter((data) => data.type === "Trailer"));
			} catch (error) {
				console.log(error);
			}
		};

		getShowData(
			`https://api.themoviedb.org/3/tv/${seriesId}?language=en-US&api_key=${api_key}`
		);
		getShowVideos(
			`https://api.themoviedb.org/3/tv/${seriesId}/videos?language=en-US&api_key=${api_key}`
		);
	}, [seriesId, showData, videos]);
	return (
		<>
			<RustedRageNavBar />
			<>{showCarousel ? <MovieVideoContainer videos={videos} /> : null}</>
			<main className="tv-info-page">
				<Button name={"back-to-home"} click={() => navigate("/")}>
					Back to home
				</Button>
				<section className="tv-info-container">
					<div className="tv-info">
						<img
							src={`https://image.tmdb.org/t/p/w185${poster_path}`}
							alt="tv poster"
							className="tv-poster"
						/>
						<h1 className="tv-title">{title ? title : name}</h1>
						<p className="tv-details">{overview}</p>
						<div className="genres">
							<h3>Genres: </h3>
							<p className="genre-names">
								{genres ? genres.map(({ name }) => name).join(", ") : null}
							</p>
						</div>
						{production_companies ? <div className="production">
							<h3>Production: </h3>
							<div className="companies">
								{production_companies
									? production_companies.map(({ id, logo_path }) => (
										<div key={id.toString()} className="company">
											{logo_path ? (
												<img
													src={`https://image.tmdb.org/t/p/w92${logo_path}`}
													alt="company logo"
												/>
											) : null}
										</div>
									))
									: null}
							</div>
						</div> : null}
						<div className="country">
							<h3>Countries: </h3>
							<p>
								{production_countries
									? production_countries.map(({ name }) => name).join(", ")
									: null}
							</p>
						</div>
						<div className="tv-rating">
							<FaStar />
							<p>{vote_average}</p>
						</div>
						<p className="text">Budget: {budget}</p>
						<p className="text">Revenue: {revenue}</p>
						<p className="text">Duration: {runtime} m</p>
					</div>
					<div className="tv-video-container">
						<img
							className="video-backdrop"
							src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
							alt="video backdrop"
						/>
						<div className="video-gradient"></div>
						<button className="play-video-btn">
							<FaPlay size={40} onClick={openCarousel} />
						</button>
					</div>
				</section>
                <SeriesEpisodes movieId={seriesId} />
				<RecommendedSeries movieId={seriesId} />
			</main>
			<RustedRageFooter />
		</>
	);
};

export default TvShowsInfoPage;