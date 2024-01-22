import "./index.scss";
import { FaSearch } from "react-icons/fa";
import Logo from "../../../trailers.png";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";

const RustedRageNavBar = () => {
	return (
		<>
			<nav className="rusted-rage-navbar">
				<div className="rusted-rage-logo-container">
					<Link to="/">
						<img
							src={Logo}
							alt="Logo"
							className="rusted-rage-logo"
							width={160}
						/>
					</Link>
				</div>
				<ul className="rusted-rage-navItems">
					<li>
						<Link to={"/movies"}>Movies</Link>
					</li>
					<li>
						<Link to={"/shows"}>TV Shows</Link>
					</li>
					<li>
						<Link to={"/trending"}>Trending</Link>
					</li>
					<li>
						<Link to={"/watchlist"}>Watchlist</Link>
					</li>
					<li>
						<Link to={"/favorites"}>Favorites</Link>
					</li>
				</ul>
				<div className="control-btns">
					<button className="rusted-rage-search-btn">
						<FaSearch size={20} />
						<p>Search</p>
					</button>
					<button className="rusted-rage-register-btn">
						<RxAvatar size={25} />
						<p>Login</p>
					</button>
				</div>
			</nav>
		</>
	);
};

export default RustedRageNavBar;
