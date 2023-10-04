import "./index.scss";
import { Link } from "react-router-dom";

const RustedRageFooter = () => {
	return (
		<footer className="rusted-rage-footer">
			<div className="rusted-rage-footer-container">
				<ul className="rusted-rage-footer-items">
					<Link to={"/"}>Movies</Link>
					<Link to={"/"}>Tv Shows</Link>
					<Link to={"/"}>Trending</Link>
					<Link to={"/"}>Watchlist</Link>
				</ul>
				<p>
					RustedRage - Your destination for free movie streaming online. Watch
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
