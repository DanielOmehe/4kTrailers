import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import RustedRageAuthTabs from "./register";
import RustedRageLoginForm from "./login";
import RustedRageSignUpForm from "./signup";
import "./index.scss";
import { useRustedRageContext } from '../context'

const data = [
	{ id: 1, name: "Login" },
	{ id: 1, name: "Sign Up" },
];

const RustedRageAuth = () => {
	const [currentTab, setCurrentTab] = useState(data[0].name);

	const { showForm, hide } = useRustedRageContext();

	const switchTabs = (tabName) => {
		setCurrentTab(tabName);
	};
	return (
		<div
			className="rusted-rage-auth"
			style={{ top: `${showForm ? "50%" : "-100%"}` }}
		>
			<FaTimes size={20} className="close-form" onClick={hide} />
			<div className="rusted-rage-auth-nav">
				{data.map((data) => (
					<div
						className={
							data.name === currentTab
								? "active rusted-rage-tabs"
								: "rusted-rage-tabs"
						}
						onClick={() => switchTabs((currenTab) => data.name)}
						key={data.name}
					>
						{data.name}
					</div>
				))}
			</div>
			<RustedRageAuthTabs currentTab={currentTab}>
				<RustedRageLoginForm tabkey="Login" />
				<RustedRageSignUpForm tabkey="Register" />
			</RustedRageAuthTabs>
		</div>
	);
};

export default RustedRageAuth;
