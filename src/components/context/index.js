import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const RustedRageContext = createContext();

export const useRustedRageContext = () => useContext(RustedRageContext);

const RustedRageProvider = ({ children }) => {

    const [ currentTabIndx, setCurrentTabIndx ] = useState(0);
    const [showControls, setShowControls] = useState(false);
    const [hoveredItemIndx, setHoveredItemIndx] = useState(null);

    const [movies, setMovies] = useState();
    const [shows, setShows] = useState();
    const [latestMovies, setLatestMovies] = useState([]);
    const [latestShows, setLatestShows] = useState([]);
	const api_key = "b62dddbb37d8ec434e52a02797220057";
	useEffect(() => {
		const getMovies = async () => {
			try {
				const response = await axios.get(
					`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${api_key}`
				);
				const data = await response.data;
				setMovies(data.results);
			} catch (error) {
				console.error(error);
			}
		};

		const getLatestMovies = async () => {
			try {
				const response = await axios.get(
					`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${api_key}`
				);
				const data = await response.data;
				setLatestMovies(data.results);
			} catch (error) {
				console.error(error);
			}
		};

        const getTVShows = async()=>{
            try {
				const response = await axios.get(
					`https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=${api_key}`
				);
				const data = await response.data;
				setShows(data.results);
			} catch (error) {
				console.error(error);
			}
        }

        const getLatestTVShows = async()=>{
            try {
				const response = await axios.get(
					`https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&api_key=${api_key}`
				);
				const data = await response.data;
				setLatestShows(data.results);
			} catch (error) {
				console.error(error);
			}
        }

        getTVShows();
		getMovies();
        getLatestTVShows();
		getLatestMovies();
	}, [movies]);

    const showButtons =()=> setShowControls(true);
    const hideButtons =()=> setShowControls(false);

    const getHoveredItemIndx =(indx)=> console.log(indx);

    const switchTab =(indx)=> {
        setCurrentTabIndx(indx)
    };

	return (
		<RustedRageContext.Provider
			value={{
                showControls,
                movies,
                shows,
                latestMovies,
                latestShows,
				showButtons,
				hideButtons,
                currentTabIndx,
                switchTab,
                getHoveredItemIndx,
                hoveredItemIndx,
			}}
		>
			{children}
		</RustedRageContext.Provider>
	);
};

export default RustedRageProvider;
