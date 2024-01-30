import { Link } from "react-router-dom";
import './mobile.scss';

const MobileMenu = () => (
	<section className="mobile-menu">
		<ul>
			<li>
				<Link to={"/movies"}>Movies</Link>
			</li>
			<li>
				<Link to={"/shows"}>Tv Shows</Link>
			</li>
			<li>
				<Link to={"/watchlist"}>Watchlist</Link>
			</li>
		</ul>
	</section>
);

export default MobileMenu;
