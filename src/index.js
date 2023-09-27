import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieFlixHomepage from "./components/layout";
import MovieFlixMovies from "./components/movies";
import MovieFlixTvShows from "./components/tvshows";
import MovieFlixWatchList from "./components/watchlist";
import MovieFlixProvider from "./components/context";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MovieFlixHomepage />,
	},
	{
		path: "movies",
		element: <MovieFlixMovies />,
	},
	{
		path: "shows",
		element: <MovieFlixTvShows />,
	},
	{
		path: "watchlist",
		element: <MovieFlixWatchList />,
	},
	{
		path: "/shows/:movie-name",
		element: <h1>This is the Movie Info Page</h1>,
	},
	{
		path: "/shows/:show-name",
		element: <h1>This is the Tv Shows Info Page</h1>,
	},
]);

const root = createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<MovieFlixProvider>
			<RouterProvider router={router} />
		</MovieFlixProvider>
	</React.StrictMode>
);
