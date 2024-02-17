import Youtube from "react-youtube";

const MovieVideo = ({ videoKey, title }) => {
	return (
		<Youtube
			videoId={videoKey}
			opts={{
				width: "960",
				height: "715",
			}}
            className='video-player'
		/>
	);
};

export default MovieVideo;
