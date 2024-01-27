import { useRustedRageContext } from "../../../context";
import ShowsCard from "../../../utils/cards/movieCard";
import "./latest.scss";
import ShowMore from '../../../utils/showMore';

const LatestShows = () => {
	const { latestShows } = useRustedRageContext();

	return (
		<section className="latest-tv-shows">
			<h1>Latest TV shows</h1>
			<div className="latest-tv-shows-container">
				{latestShows.map((movie) => (
					<ShowsCard movie={movie} />
				))}
			</div>
            <ShowMore route={'shows'} />
		</section>
	);
};

export default LatestShows;
