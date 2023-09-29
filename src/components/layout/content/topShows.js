import { useEffect, useState } from 'react';
import axios from 'axios';
import RustedRageLoader from '../../utils/loader';
import RustedRageMovieCard from './movieCard';
import "./index.scss";

const RustedRageTopShows = () => {
	const [showsList, setShowsList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

    const api_key = "b62dddbb37d8ec434e52a02797220057";

	const getTopShows = async () => {
		try {
			setIsLoading(true);
			const response = await axios.get(`https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=${api_key}`);
			const data = await response.data.results;

			if (data) {
				setShowsList(data);
				setIsLoading(false);
                console.log(data);
			}
		}catch(error){
			console.error(error);
		}
	};

	useEffect(() => {
		getTopShows();
	}, []);

	return (
		<div className="rusted-rage-top-shows-slider">
			{isLoading ? (
				<RustedRageLoader />
			) : (
				<>
					{showsList.map((movie, indx) => (
						<RustedRageMovieCard index={indx} movie={movie} />
					))}
				</>
			)}
		</div>
	);
};

export default RustedRageTopShows;
