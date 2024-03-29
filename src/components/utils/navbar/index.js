import "./index.scss";
import { FaSearch } from "react-icons/fa";
import Logo from "../../../trailers.png";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import HamBurgerMenu from "../../../hamburger-menu.svg";
import { useRustedRageContext } from "../../context";

const RustedRageNavBar = () => {
	const { toggleMenu } = useRustedRageContext();
	return (
		<>
			<nav className="rusted-rage-navbar">
				<div className="menu-nd-logo">
					<div className="hamburger-menu" onClick={toggleMenu}>
						<img src={HamBurgerMenu} alt="menu" width={160} />
					</div>
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
				</div>
				<div className="menu-item-nd-controls">
					<ul className="rusted-rage-navItems">
						<li>
							<Link to={"/movies"}>Movies</Link>
						</li>
						<li>
							<Link to={"/shows"}>TV Shows</Link>
						</li>
						<li>
							<Link to={"/watchlist"}>Watchlist</Link>
						</li>
					</ul>
					<div className="control-btns">
						<Link to={'/search'} className="rusted-rage-search-btn">
							<FaSearch size={20} />
							<p>Search</p>
						</Link>
						<Link to={'/login'} className="rusted-rage-register-btn">
							<RxAvatar size={25} />
							<p>Login</p>
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
};

export default RustedRageNavBar;
