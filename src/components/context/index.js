import { createContext, useState, useEffect, useRef } from "react";
import axios from "axios";

export const RustedRageContext = createContext();

const RustedRageProvider = ({ children }) => {

	const sliderRef = useRef();
	const [showForm, setShowFormForm] = useState(false);
	const [moviesList, setMoviesList] = useState([]);
	const [showsList, setShowsList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const api_key = "b62dddbb37d8ec434e52a02797220057";

	const getTopMovies = async () => {
		try {
			setIsLoading(true);
			const response = await axios.get(
				`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${api_key}`
			);
			const data = await response.data.results;

			if (data) {
				setMoviesList(data);
				setIsLoading(false);
			}
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getTopMovies();
		getTopShows();

	}, []);

	const getTopShows = async () => {
		try {
			setIsLoading(true);
			const response = await axios.get(
				`https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=${api_key}`
			);
			const data = await response.data.results;

			if (data) {
				setShowsList(data);
				setIsLoading(false);
			}
		} catch (error) {
			console.error(error);
		}
	};

	const show = () => setShowFormForm(true);
	const hide = () => setShowFormForm(false);

	return (
		<RustedRageContext.Provider
			value={{
				showForm,
				show,
				hide,
				sliderRef,
				moviesList,
				showsList,
				isLoading,
			}}
		>
			{children}
		</RustedRageContext.Provider>
	);
};

export default RustedRageProvider;
