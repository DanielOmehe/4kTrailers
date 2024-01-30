import "./index.scss";
import { useRustedRageContext } from "../../../context";
import TrendingTabWrapper from "./trending";
import TrendingTab from "./trendingTab";

const tabs = [{ name: "Movies" }, { name: "TV Series" }];

const TrendingMovies = () => {
	const { currentTabIndx, switchTab, movies, shows } = useRustedRageContext();
	return (
		<section className="trending-movies-and-series">
			<div className="trending-movies-header">
				<h2>Trending</h2>
				<ul className="trending-movies-tabs">
					{tabs.map((tab, indx) => (
						<li
							onClick={() => switchTab(indx)}
							className={indx === currentTabIndx ? "active-tab" : ""}
						>
							{tab.name}
						</li>
					))}
				</ul>
			</div>
			{/* create a container for the tabs and write logic for switching tabs */}
			<TrendingTabWrapper>
				<TrendingTab movies={movies} />
				<TrendingTab movies={shows} />
			</TrendingTabWrapper>
		</section>
	);
};

export default TrendingMovies;
