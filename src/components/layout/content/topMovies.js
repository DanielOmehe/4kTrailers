import { useContext, useState, useCallback } from "react";
import RustedRageLoader from "../../utils/loader";
import { Link } from "react-router-dom";
import RustedRageMovieCard from "./movieCard";
import "./index.scss";
import { RustedRageContext } from "../../context";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const RustedRageTopMovies = () => {
	const { sliderRef, isLoading, moviesList } = useContext(RustedRageContext);
	const [slideIndex, setSlideIndex] = useState(0);
	const [slidewidth, setSlideWidth] = useState(0);
	const [sliderPosition, setSliderPosition] = useState(0);

	const prevSlide = () => {
		if (sliderRef.current) {
			const slidewidth = sliderRef.current.children[slideIndex].clientWidth;
			setSlideWidth(slidewidth);
		}
		if (slideIndex === 0) return;
		setSlideIndex(slideIndex - 1);
		setSliderPosition(sliderPosition + slidewidth);

		console.log(slideIndex);
	};

	const nextSlide = useCallback(() => {
		if (sliderRef.current) {
			const slidewidth = sliderRef.current.children[slideIndex].clientWidth;
			setSlideWidth(slidewidth);
		}
		if (slideIndex === moviesList.length - 1) {
			return;
		} else {
			setSlideIndex(slideIndex + 1);
			setSliderPosition(sliderPosition - slidewidth);
		}
		console.log(slideIndex);
	}, [slidewidth, slideIndex, sliderRef, sliderPosition, moviesList]);

	return (
		<>
			<FaChevronLeft
				size={25}
				className="rusted-rage-slider-button"
				onClick={prevSlide}
			/>
			<div
				className="rusted-rage-top-movies-slider"
				style={{
					position: "relative",
					left: `${sliderPosition}px`,
					transition: "left .5s ease",
				}}
				ref={sliderRef}
			>
				{isLoading ? (
					<RustedRageLoader />
				) : (
					<>
						{moviesList.map((movie, indx) => (
							<Link to={`movies/${movie.title}`}>
								<RustedRageMovieCard
									key={movie.id}
									index={indx}
									movie={movie}
								/>
							</Link>
						))}
					</>
				)}
			</div>
			<FaChevronRight
				size={25}
				className="rusted-rage-slider-button"
				onClick={nextSlide}
			/>
		</>
	);
};

export default RustedRageTopMovies;
