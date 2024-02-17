import { useState } from "react";
import "./index.scss";
import { FaTimes, FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { useRustedRageContext } from "../../context";
import MovieVideo from "./video";

const MovieVideoContainer = ({ videos }) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const { closeCarousel } = useRustedRageContext();
	
	const nextSlide = () => {
		if (currentSlide < videos.length - 1) setCurrentSlide((prev) => prev + 1);
	};

	const prevSlide = () => {
		if (currentSlide > 0) setCurrentSlide((prev) => prev - 1);
	};
	return (
		<section className="movie-video-player">
			<FaTimes size={35} className="close-video" onClick={closeCarousel} />
			<div className="movie-video-player-container">
				<FaArrowCircleLeft
					size={35}
					onClick={prevSlide}
					className="carousel-controls left"
				/>
				<div className="movie-video-carousel">
					{videos
						? videos.map(({ key, title, name }, indx) => (
								<>
									{indx === currentSlide ? (
										<MovieVideo
											title={title ? title : name}
											key={title}
											videoKey={key}
										/>
									) : null}
								</>
						  ))
						: null}
				</div>
                <p>Total Slides: {videos.length}</p>
                <p>Current slide: {currentSlide +1}</p>
				<FaArrowCircleRight
					size={35}
					onClick={nextSlide}
					className="carousel-controls right"
				/>
			</div>
		</section>
	);
};

export default MovieVideoContainer;
