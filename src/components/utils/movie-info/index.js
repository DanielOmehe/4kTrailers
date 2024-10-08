import "./index.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import RustedRageNavBar from "../navbar";
import RustedRageFooter from "../footer";
import { FaStar, FaPlay } from "react-icons/fa6";
import MovieVideoContainer from "../video";
import { useRustedRageContext } from "../../context";
import RecommendedMovies from "../recommended";
import Button from "../button";

const MovieInfoPage = () => {
	const [movieData, setMovieData] = useState([]);
	const [videos, setVideos] = useState();
	const { movieId } = useParams();
	const navigate = useNavigate();
	const api_key = "b62dddbb37d8ec434e52a02797220057";
	const { openCarousel, showCarousel } = useRustedRageContext();
	console.log(movieId);

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
	} = movieData;

	useEffect(() => {
		const getMovieData = async (url) => {
			try {
				const response = await axios.get(url);
				const data = await response.data;
				setMovieData(data);
			} catch (error) {
				console.log(error);
			}
		};

		const getMovieVideos = async (url) => {
			try {
				const response = await axios.get(url);
				const data = await response.data;
				setVideos(data.results.filter((data) => data.type === "Trailer"));
			} catch (error) {
				console.log(error);
			}
		};

		getMovieData(
			`https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${api_key}`
		);
		getMovieVideos(
			`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US&api_key=${api_key}`
		);
	}, [movieId, movieData, videos]);
	return (
		<>
			<RustedRageNavBar />
			<>{showCarousel ? <MovieVideoContainer videos={videos} /> : null}</>
			<main className="movie-info-page">
				<Button name={"back-to-home"} click={() => navigate("/")}>
					Back to home
				</Button>
				<section className="movie-info-container">
					<div className="movie-info">
						<img
							src={`https://image.tmdb.org/t/p/w185${poster_path}`}
							alt="movie poster"
							className="movie-poster"
						/>
						<h1 className="movie-title">{title ? title : name}</h1>
						<p className="movie-details">{overview}</p>
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
						<div className="movie-rating">
							<FaStar />
							<p>{vote_average}</p>
						</div>
						<p className="text">Budget: {budget}</p>
						<p className="text">Revenue: {revenue}</p>
						<p className="text">Duration: {runtime} m</p>
					</div>
					<div className="movie-video-container">
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
				<RecommendedMovies movieId={movieId} />
			</main>
			<RustedRageFooter />
		</>
	);
};

export default MovieInfoPage;
