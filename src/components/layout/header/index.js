import "./index.scss";
import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import RustedRageCarousel from "./headerCarousel";
import RustedRageCarouselItem from "./headerCarouselItem";
import RustedRageNavBar from "../../utils/navbar";
import MobileMenu from "../../utils/navbar/mobile_menu";
import { useRustedRageContext } from "../../context";

const RustedRageHeader = () => {
	const [movieList, setMovieList] = useState([]);
	const [currentMovie, setCurrentMovie] = useState(0);
    const { showMenu } = useRustedRageContext()

	const api_key = "b62dddbb37d8ec434e52a02797220057";

	const nextMovie = () =>
		currentMovie < movieList.length - 1
			? setCurrentMovie((currentMovie) => currentMovie + 1)
			: null;

	const prevMovie = () =>
		currentMovie !== 0
			? setCurrentMovie((currentMovie) => currentMovie - 1)
			: null;

	useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${api_key}`
                );
                const data = await response.data;
                setMovieList(data.results.slice(0, 10));
            } catch (error) {
                console.error(error);
            }
        };
		getMovies();

		const interval = setInterval(() => {
			if (currentMovie === movieList.length - 1) {
				setCurrentMovie(0);
			} else setCurrentMovie((currentMovie) => currentMovie + 1);
		}, 10000);

		return () => clearInterval(interval);
	}, [currentMovie, movieList.length]);

	return (
		<header className="rusted-rage-header">
			<RustedRageNavBar />
            <>{showMenu ? <MobileMenu /> : null}</>
			<section className="rusted-rage-carousel-container">
				<div className="rusted-rage-container-hero">
					<div className="hero-header">
						<h1>Watch your favorite Movies and TV Shows</h1>
						<h2>Episodes available and still updating.</h2>
						<h2>Enjoy your Free HD Streaming Now!</h2>
					</div>
					<div className="hero-search">
						<input
							type="text"
							placeholder="Enter Keyword to search..."
							autoFocus
						/>
						<button>
							<FaSearch size={20} />
						</button>
					</div>
				</div>
				<RustedRageCarousel>
					{movieList.map((movie, indx) => {
						return (
							<>
								{indx === currentMovie ? (
									<RustedRageCarouselItem key={movie.id} movie={movie} />
								) : null}
							</>
						);
					})}
				</RustedRageCarousel>
				<div className="carousel-controls">
					<button onClick={nextMovie}><FaArrowRight size={20} /></button>
                    <button onClick={prevMovie}><FaArrowLeft size={20} /></button>
				</div>
			</section>
		</header>
	);
};

export default RustedRageHeader;
