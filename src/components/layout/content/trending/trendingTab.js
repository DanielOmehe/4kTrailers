import MoviesCard from "../../../utils/cards";

const TrendingTab = ({ movies }) => {
	return (
		<section className="trending-tab">
			{ !movies ?(
				<div className="no-data">
					<h1>Looks like you're offline</h1>
					<p>Check your connection and try again</p>
				</div>
			) : (
				<>
					{movies.map((movie, indx) => (
						<MoviesCard key={movie.id.toString()} movie={movie} />
					))}
				</>
			)}
		</section>
	);
};

export default TrendingTab