import "./index.scss";
import { TfiMenuAlt } from "react-icons/tfi";
import { BiFilter } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="movie-flix-header">
			<nav className="movie-flix-navbar">
				<TfiMenuAlt size={35} />
                <h1>Movie<span>Flix</span></h1>
				<ul className="movie-flix-navItems">
					<Link to={"/"}>Home</Link>
					<Link to={"movies"}>Movies</Link>
					<Link to={"show"}>Tv Shows</Link>
					<Link to={"watchlist"}>WatchList</Link>
				</ul>
				<div className="movie-flix-search">
					<BiFilter size={30} />
					<input type="text" autofocus placeholder="Search movies & Tv shows" />
					<AiOutlineSearch size={30} />
				</div>
				<button>Sign In</button>
			</nav>
			<div className="movie-flix-carousel"></div>
		</header>
	);
};

export default Header;
