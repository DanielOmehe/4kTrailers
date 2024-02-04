import "./index.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import RustedRageNavBar from "../navbar";
import RustedRageFooter from "../footer";
import { FaStar, FaPlay } from "react-icons/fa6";

const MovieInfoPage = () => {
	const [movieData, setMovieData] = useState([]);
	const [trailers, setTrailers] = useState();
	const { movieId } = useParams();
	const navigate = useNavigate();
	const api_key = "b62dddbb37d8ec434e52a02797220057";

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
				const trailerArray = data.videos.results.filter(
					(trailer) => trailer.name === "Official Trailer"
				);
				setTrailers(trailerArray);
			} catch (error) {
				console.log(error);
			}
		};

		getMovieData(
			`https://api.themoviedb.org/3/movie/${movieId}?append_to_response=videos&language=en-US&api_key=${api_key}`
		);
	}, [movieId, movieData, trailers]);
	return (
		<>
			<RustedRageNavBar />
			<main className="movie-info-page">
				<button onClick={() => navigate(-1)} className="back-to-home">
					Back to home
				</button>
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
						<div className="production">
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
						</div>
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
							<FaPlay size={40} />
						</button>
					</div>
				</section>
			</main>
			<RustedRageFooter />
		</>
	);
};

export default MovieInfoPage;
