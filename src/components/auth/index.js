import { useState, useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { MovieFlixContext } from "../context";
import MovieFlixAuthTabs from "./register";
import MovieFlixLoginForm from "./login";
import MovieFlixSignUpForm from "./signup";
import "./index.scss";

const data = [
	{ id: 1, name: "Login" },
	{ id: 1, name: "Register" },
];

const MovieFlixAuth = () => {
	const [currentTab, setCurrentTab] = useState(data[0].name);

	const { showForm, hide } = useContext(MovieFlixContext);

	const switchTabs = (tabName) => {
		setCurrentTab(tabName);
	};
	return (
		<div
			className="movie-flix-auth"
			style={{ top: `${showForm ? "50%" : "-100%"}` }}
		>
			<FaTimes size={20} className="close-form" onClick={hide} />
			<div className="movie-flix-auth-nav">
				{data.map((data) => (
					<div
						className={
							data.name === currentTab
								? "active movie-flix-tabs"
								: "movie-flix-tabs"
						}
						onClick={() => switchTabs((currenTab) => data.name)}
						key={data.name}
					>
						{data.name}
					</div>
				))}
			</div>
			<MovieFlixAuthTabs currentTab={currentTab}>
				<MovieFlixLoginForm tabkey="Login" />
				<MovieFlixSignUpForm tabkey="Register" />
			</MovieFlixAuthTabs>
		</div>
	);
};

export default MovieFlixAuth;
