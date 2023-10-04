import { Link } from "react-router-dom";
import "./headerMenu.scss";
import { TbTrendingUp, TbMovie, TbListDetails } from "react-icons/tb";

const RustedRageMenu = () => {
	return (
		<div className="rusted-rage-menu">
			<Link to={"/movies"}>
				<TbMovie size={25} color="#fff" />
				<p>Movies</p>
			</Link>
			<Link to={"/shows"}>
				<TbMovie size={25} color="#fff" />
				<p>Tv Shows</p>
			</Link>
			<Link to={"/trending"}>
				<TbTrendingUp size={25} color="#fff" />
				<p>Trending</p>
			</Link>
			<Link to={"/watchlist"}>
				<TbListDetails size={25} color="#fff" />
				<p>Watchlist</p>
			</Link>
		</div>
	);
};

export default RustedRageMenu;
