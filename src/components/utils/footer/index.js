import "./index.scss";
import { Link } from "react-router-dom";
import Logo from "../../../trailers.png";
import { useRustedRageContext } from "../../context";

const RustedRageFooter = () => {
	const { movieGenres, showGenres } = useRustedRageContext();
	return (
		<footer className="rusted-rage-footer">
			<img src={Logo} alt="logo" className="footer-logo" />
			<div className="footer-content">
				<div className="genres">
					{" "}
					<h3>Movie genres</h3>
					<ul>
						{movieGenres.map(({ id, name }) => (
							<li key={name}>
								<Link to={`/genre/${name}/${id}`}>{name}</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="genres">
					{" "}
					<h3>Tv Show genres</h3>
					<ul>
						{showGenres.map(({ id, name }) => (
							<li key={name}>
								<Link to={`/genre/${name}/${id}`}>{name}</Link>
							</li>
						))}
					</ul>
				</div>
				<ul className="footer-links">
					<li>
						<Link to={"/movies"}>Movies</Link>
					</li>
					<li>
						<Link to={"/shows"}>Tv shows</Link>
					</li>
					<li>
						<Link to={"/watchlist"}>Watchlist</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default RustedRageFooter;
