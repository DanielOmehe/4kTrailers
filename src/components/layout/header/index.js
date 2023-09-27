import "./index.scss";
import { useState, useEffect, useContext } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { BiFilter } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import MovieFlixCarousel from "./headerCarousel";
import MovieFlixCarouselItem from "./headerCarouselItem";
import MovieFlixAuth from "../../auth";
import { MovieFlixContext } from "../../context";

const MovieFlixHeader = () => {
	const [movieList, setMovieList] = useState([]);
	const [currentMovie, setCurrentMovie] = useState(0);
	const [scrolled, setScrolled] = useState(false);
	const handleScroll = () => {
		const offset = window.scrollY;
		if (offset > 200) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	});
	let navbarClasses = ["movie-flix-navbar"];
	if (scrolled) {
		navbarClasses.push("scrolled");
	}

    console.log(movieList);

    const api_key = 'b62dddbb37d8ec434e52a02797220057'

	const { show } = useContext(MovieFlixContext);

	const getMovies = async () => {
		try {
			const response = await axios.get(
				`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&with_genres=family&api_key=${api_key}`
			);
			const data = await response.data;
			setMovieList(data.results.slice(5, 15));
		} catch (error) {
			console.error(error);
		}
	};

	const nextMovie = () =>
		currentMovie < movieList.length - 1
			? setCurrentMovie((currentMovie) => currentMovie + 1)
			: null;

	const prevMovie = () =>
		currentMovie !== 0
			? setCurrentMovie((currentMovie) => currentMovie - 1)
			: null;

	useEffect(() => {
		getMovies();
	}, []);

	return (
		<header className="movie-flix-header">
			<nav className={navbarClasses}>
				<TfiMenuAlt size={35} />
				<h1>
					Movie<span>Flix</span>
				</h1>
				<ul className="movie-flix-navItems">
					<Link to={"/"}>Home</Link>
					<Link to={"movies"}>Movies</Link>
					<Link to={"show"}>Tv Shows</Link>
					<Link to={"watchlist"}>WatchList</Link>
				</ul>
				<div className="movie-flix-search">
					<BiFilter size={30} />
					<input type="text" autoFocus placeholder="Search movies & Tv shows" />
					<AiOutlineSearch size={30} />
				</div>
				<button onClick={show}>Register</button>
			</nav>
			<div className="movie-flix-carousel-container">
				<FaChevronLeft
					size={30}
					style={{
						position: "absolute",
						top: "45%",
						left: "1%",
						cursor: "pointer",
					}}
					onClick={prevMovie}
					className={currentMovie === 0 ? "hide" : ""}
				/>
				<MovieFlixCarousel>
					{movieList.map((list, indx) => {
						return (
							<>
								{indx === currentMovie ? (
									<MovieFlixCarouselItem key={list.id} item={list} />
								) : null}
							</>
						);
					})}
				</MovieFlixCarousel>
				<FaChevronRight
					size={30}
					className={currentMovie === movieList.length - 1 ? "hide" : ""}
					style={{
						position: "absolute",
						top: "45%",
						left: "97%",
						cursor: "pointer",
					}}
					onClick={nextMovie}
				/>
			</div>
			<MovieFlixAuth />
		</header>
	);
};

export default MovieFlixHeader;
