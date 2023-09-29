import "./index.scss";
import RustedRageTopMovies from "./topMovies";
import RustedRageTopShows from "./topShows";

const RustedRageContent = () => {
	return (
		<main className="rusted-rage-content">
			<h1>Browse New, Popular and Upcoming Movies and Tv Shows</h1>
			<div className="rusted-rage-top-movies">
				<div className="rusted-rage-top-movies-title">
					<h2>Top 10 Movies This Week</h2>
					<p>
						Check out this week’s most popular movies and find out where to
						watch them.
					</p>
				</div>
				<div className="rusted-rage-top-ten">
					<RustedRageTopMovies />
				</div>
			</div>
			<div className="rusted-rage-top-shows">
				<div className="rusted-rage-top-shows-title">
					<h2>Top 10 Tv Shows This Week</h2>
					<p>
						Explore this week’s most popular TV shows and find out where to
						stream them.
					</p>
				</div>
				<div className="rusted-rage-top-ten">
					<RustedRageTopShows />
				</div>
			</div>
		</main>
	);
};

export default RustedRageContent;
