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
import PageNotFound from "./error-page";
import MoviesInfoPage from "./components/utils/movie-info";
import TvShowsInfoPage from "./components/tv-info";
import AuthUser from "./components/auth";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RustedRageHomepage />,
		errorElement: <PageNotFound />,
	},
	{
		path: "/movies",
		element: <RustedRageMovies />,
	},
	{
		path: "/shows",
		element: <RustedRageTvShows />,
	},
	{
		path: "/watchlist",
		element: <RustedRageWatchList />,
	},
	{
		path: "/movies/:movieId/:movieName",
		element: <MoviesInfoPage />,
		errorElement: <PageNotFound />,
	},
	{
		path: "/tv/:seriesId/:seriesName",
		element: <TvShowsInfoPage />,
		errorElement: <PageNotFound />,
	},
	{
		path: "/login",
		element: <AuthUser name={'Login'}/>,
	},
	{
		path: "/sign-up",
		element: <AuthUser name={'Sign up'} />,
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
