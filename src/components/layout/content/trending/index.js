import "./index.scss";
import { useRustedRageContext } from "../../../context";
import TrendingTabWrapper from "./trending";
import TrendingMoviesTab from "./trendingMovies";
import TrendingTvShowsTab from "./trendingShows";

const tabs = [{ name: "Movies" }, { name: "TV Series" }];

const TrendingMovies = () => {
	const { currentTabIndx, switchTab } = useRustedRageContext();
	return (
		<section className="trending-movies-and-series">
			<div className="trending-movies-header">
				<h2>Trending</h2>
				<ul className="trending-movies-tabs">
					{tabs.map((tab, indx) => (
						<li
							onClick={() => switchTab(tab.name.toLowerCase())}
							className={indx === currentTabIndx ? "active-tab" : ""}
						>
							{tab.name}
						</li>
					))}
				</ul>
			</div>
			{/* create a container for the tabs and write logic for switching tabs */}
			<TrendingTabWrapper>
				<TrendingMoviesTab tabKey="movies" />
				<TrendingTvShowsTab tabKey="tvshows" />
			</TrendingTabWrapper>
		</section>
	);
};

export default TrendingMovies;
