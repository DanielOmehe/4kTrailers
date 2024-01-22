const TvShowsCard = ({ show }) => {
	return (
		<div className="tvShows-card">
			<img src={show.img_url} alt={show.title} />
			<div className="tvshow-card-info">
				<h3>{show.title}</h3>
				<div>
					<p>{show.rating}</p>
					<p>{show.release_date}</p>
				</div>
			</div>
		</div>
	);
};

export default TvShowsCard;
