import "./index.scss";
import TrendingMovies from "./trending";
import LatestMoviesNdTv from "./latest";
import { useRustedRageContext } from "../../context";

const RustedRageContent = () => {
	const { latestMovies, latestShows } = useRustedRageContext();
	return (
		<main className="rusted-rage-content">
			<TrendingMovies />
			<LatestMoviesNdTv name={"Latest Movies"} movies={latestMovies} />
			<LatestMoviesNdTv name={"Latest Shows"} movies={latestShows} />
		</main>
	);
};

export default RustedRageContent;
