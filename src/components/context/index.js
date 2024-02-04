import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const RustedRageContext = createContext();

export const useRustedRageContext = () => useContext(RustedRageContext);

const RustedRageProvider = ({ children }) => {
	const [currentTabIndx, setCurrentTabIndx] = useState(0);
	const [showControls, setShowControls] = useState(false);
	const [movies, setMovies] = useState([]);
	const [shows, setShows] = useState([]);
	const [latestMovies, setLatestMovies] = useState([]);
	const [latestShows, setLatestShows] = useState([]);
    const [showMenu, setShowMenu ] = useState(false)

    const toggleMenu =()=> setShowMenu(prev => !prev);

	const movieGenres = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ];
	const showGenres = [
        {
          "id": 10759,
          "name": "Action & Adventure"
        },
        {
          "id": 16,
          "name": "Animation"
        },
        {
          "id": 35,
          "name": "Comedy"
        },
        {
          "id": 80,
          "name": "Crime"
        },
        {
          "id": 99,
          "name": "Documentary"
        },
        {
          "id": 18,
          "name": "Drama"
        },
        {
          "id": 10751,
          "name": "Family"
        },
        {
          "id": 10762,
          "name": "Kids"
        },
        {
          "id": 9648,
          "name": "Mystery"
        },
        {
          "id": 10763,
          "name": "News"
        },
        {
          "id": 10764,
          "name": "Reality"
        },
        {
          "id": 10765,
          "name": "Sci-Fi & Fantasy"
        },
        {
          "id": 10766,
          "name": "Soap"
        },
        {
          "id": 10767,
          "name": "Talk"
        },
        {
          "id": 10768,
          "name": "War & Politics"
        },
        {
          "id": 37,
          "name": "Western"
        }
      ];
	const api_key = "b62dddbb37d8ec434e52a02797220057";

	useEffect(() => {
		const getMovieData = async (url, updater) => {
			try {
				const response = await axios.get(url);
				const data = await response.data;
				updater(data.results);
			} catch (error) {
				console.error(error);
			}
		};

		getMovieData(
			`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${api_key}`,
			setMovies
		);
		getMovieData(
			`https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=${api_key}`,
			setShows
		);
		getMovieData(
			`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${api_key}`,
			setLatestMovies
		);
		getMovieData(
			`https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1&api_key=${api_key}`,
			setLatestShows
		);

	}, [movies]);

	const showButtons = () => setShowControls(true);
	const hideButtons = () => setShowControls(false);

	const switchTab = (indx) => {
		setCurrentTabIndx(indx);
	};

	return (
		<RustedRageContext.Provider
			value={{
                showMenu,
                toggleMenu,
				showControls,
				movies,
				shows,
				latestMovies,
				latestShows,
				showButtons,
				hideButtons,
				currentTabIndx,
				switchTab,
				movieGenres,
				showGenres,
			}}
		>
			{children}
		</RustedRageContext.Provider>
	);
};

export default RustedRageProvider;
