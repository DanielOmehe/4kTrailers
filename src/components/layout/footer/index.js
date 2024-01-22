import "./index.scss";
import { Link } from "react-router-dom";

const RustedRageFooter = () => {
	return (
		<footer className="rusted-rage-footer">
			<div className="rusted-rage-footer-container">
				<ul className="rusted-rage-footer-items">
					<Link to={"/movies"}>Movies</Link>
					<Link to={"/shows"}>Tv Shows</Link>
					<Link to={"/trending"}>Trending</Link>
					<Link to={"/watchlist"}>Watchlist</Link>
				</ul>
				<p>
					4KTrailers - Your destination for free movie streaming online. Watch
					movies online for free, anytime, anywhere. Explore our vast collection
					and experience cinematic wonders at your fingertips.
				</p>
				<p>
					Links: watch movies online, free watch anime online, free watch anime
					online
				</p>
			</div>
		</footer>
	);
};

export default RustedRageFooter;
