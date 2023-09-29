import "./index.scss";
import Logo from "../../../rusted.png";
import { useState, useEffect, useContext } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { BiFilter } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import RustedRageCarousel from "./headerCarousel";
import RustedRageCarouselItem from "./headerCarouselItem";
import RustedRageAuth from "../../auth";
import { RustedRageContext } from "../../context";
import RustedRageMenu from "./headermenu";

const RustedRageHeader = () => {
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

	let navbarClasses = ["rusted-rage-navbar"];
	if (scrolled) {
		navbarClasses.push("scrolled");
	}

	console.log(movieList);

	const api_key = "b62dddbb37d8ec434e52a02797220057";

	const { show } = useContext(RustedRageContext);

	const getMovies = async () => {
		try {
			const response = await axios.get(
				`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${api_key}`
			);
			const data = await response.data;
			setMovieList(data.results.slice(10, 20));
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

		window.addEventListener("scroll", handleScroll);

		const interval = setInterval(() => {
			if (currentMovie === movieList.length - 1) {
				setCurrentMovie(0);
			} else setCurrentMovie((currentMovie) => currentMovie + 1);
		}, 10000);

		return () => clearInterval(interval);
	}, [currentMovie, movieList.length]);

	return (
		<header className="rusted-rage-header">
			<nav className={navbarClasses}>
				<TfiMenuAlt size={30} />
				<RustedRageMenu />
				<Link to="/">
					<img src={Logo} alt="Logo" className="rusted-rage-logo" width={200} />
				</Link>
				<div className="rusted-rage-search">
					<BiFilter size={30} />
					<input type="text" autoFocus placeholder="Search movies & Tv shows" />
					<AiOutlineSearch size={30} />
				</div>
				<button className="rusted-rage-register" onClick={show}>
					Register
				</button>
			</nav>
			<div className="rusted-rage-carousel-container">
				<FaChevronLeft
					size={30}
					onClick={prevMovie}
					className={currentMovie === 0 ? "chevron hide" : "chevron"}
				/>
				<RustedRageCarousel>
					{movieList.map((list, indx) => {
						return (
							<>
								{indx === currentMovie ? (
									<RustedRageCarouselItem key={list.id} item={list} />
								) : null}
							</>
						);
					})}
				</RustedRageCarousel>
				<FaChevronRight
					size={30}
					className={
						currentMovie === movieList.length - 1 ? "hide chevron" : "chevron"
					}
					onClick={nextMovie}
				/>
			</div>
			<RustedRageAuth />
		</header>
	);
};

export default RustedRageHeader;
