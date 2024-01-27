import "./index.scss";
import TrendingMovies from "./trending";
import LatestMovies from "./latest/latestMovies";
import LatestShows from "./latest/latestShow";

const RustedRageContent = () => {
	return (
		<main className="rusted-rage-content">
			<TrendingMovies />
            <LatestMovies />
            <LatestShows />
		</main>
	);
};

export default RustedRageContent;