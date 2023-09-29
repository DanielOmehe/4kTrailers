import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RustedRageHomepage from "./components/layout";
import RustedRageMovies from "./components/movies";
import RustedRageTvShows from "./components/tvshows";
import RustedRageWatchList from "./components/watchlist";
import RustedRageProvider from "./components/context";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RustedRageHomepage />,
	},
	{
		path: "movies",
		element: <RustedRageMovies />,
	},
	{
		path: "shows",
		element: <RustedRageTvShows />,
	},
	{
		path: "watchlist",
		element: <RustedRageWatchList />,
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
		<RustedRageProvider>
			<RouterProvider router={router} />
		</RustedRageProvider>
	</React.StrictMode>
);
