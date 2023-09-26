import { useState, useRef } from "react";
import MovieFlixAuthTabs from "./register";
import MovieFlixLoginForm from "./login";
import MovieFlixSignUpForm from "./signup";
import "./index.scss";

const data = [
	{ id: 1, name: "Login" },
	{ id: 1, name: "Register" },
];

const MovieFlixAuth = () => {
	const [currentTab, setCurrentTab] = useState("");
	const tabRef = useRef({});

	const switchTabs = (tabName) => setCurrentTab(tabName);

	console.log(currentTab);
    console.log(tabRef.current.offsetWidth)
	return (
		<div className="movie-flix-auth">
			<div className="movie-flix-auth-nav">
				{data.map((data) => (
					<div
						className={
							data.name === currentTab
								? "active movie-flix-tabs"
								: "movie-flix-tabs"
						}
						onClick={() => switchTabs(currenTab => data.name)}
						ref={tabRef}
						key={data.name}
					>
						{data.name}
					</div>
				))}
				<div style={{width: `${tabRef.current.offsetWidth && ''}px`, left: `${tabRef.current.offsetLeft && ''}px`, position: 'absolute' }} className="line" />
			</div>
			<MovieFlixAuthTabs currentTab={currentTab}>
				<MovieFlixLoginForm tabkey="Login" />
				<MovieFlixSignUpForm tabkey="Register" />
			</MovieFlixAuthTabs>
		</div>
	);
};

export default MovieFlixAuth;
