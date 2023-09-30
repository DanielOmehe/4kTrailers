import Logo from "../../../rusted.png";
import { Link } from "react-router-dom";
import "./discover.scss";

const RustedRageDiscover = () => {
	return (
		<section className="rusted-rage-discover">
			<img src={Logo} alt="logo" width={500} />
			<h2>
				Find the best movies & TV shows on all your favorite streaming services
			</h2>
			<button>
				<Link to={"./trending"}>Discover Movies & Tv Shows</Link>
			</button>
		</section>
	);
};

export default RustedRageDiscover;
