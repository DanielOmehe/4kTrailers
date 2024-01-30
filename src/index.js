import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RustedRageHomepage from "./components/layout";
import RustedRageMovies from "./components/movies";
import RustedRageTvShows from "./components/tvshows";
import RustedRageWatchList from "./components/watchlist";
import RustedRageProvider from "./components/context";
import { Toaster } from "react-hot-toast";
import PageNotFound from './error-page'
import MoviesInfoPage from "./components/utils/movieInfo";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RustedRageHomepage />,
        errorElement: <PageNotFound />,
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
		path: "movies/:movieName",
		element: <MoviesInfoPage />,
        errorElement: <PageNotFound />,
	},
	{
		path: "shows/:showName",
		element: <h1>This is the Tv Shows Info Page</h1>,
        errorElement: <PageNotFound />,
	},
]);

const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
    <RustedRageProvider>
    <Toaster position="top-center" />
    <RouterProvider router={router} />
</RustedRageProvider>
    </React.StrictMode>
);
