import { useContext, useState, useCallback } from "react";
import RustedRageLoader from "../../utils/loader";
import RustedRageMovieCard from "./movieCard";
import "./index.scss";
import { RustedRageContext } from "../../context";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const RustedRageTopShows = () => {
    const { isLoading, showsList, sliderRef } = useContext(RustedRageContext);
    const [slideIndex, setSlideIndex] = useState(0)
    const [ slidewidth, setSlideWidth ] = useState(0);
    const [ sliderPosition, setSliderPosition ] = useState(0);

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
            console.log(sliderRef.current.children[slideIndex])
		}
		if (slideIndex === showsList.length) {
			return;
		} else {
			setSlideIndex(slideIndex + 1);
			setSliderPosition(sliderPosition - slidewidth);
		}
		console.log(slideIndex);
	}, [slidewidth, slideIndex, sliderRef, sliderPosition, showsList]);
	return (
        <>
        <FaChevronLeft
        size={25}
        className="rusted-rage-slider-button"
        onClick={prevSlide}
    />
    <div className="rusted-rage-top-shows-slider" style={{
        position: 'relative',
        left: `${sliderPosition}px`,
        transition: 'left .5s ease',
    }} ref={sliderRef}>
        {isLoading ? (
            <RustedRageLoader />
        ) : (
            <>
                {showsList.map((movie, indx) => (
                    <RustedRageMovieCard
                        key={movie.id}
                        index={indx}
                        movie={movie}
                    />
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

export default RustedRageTopShows;
