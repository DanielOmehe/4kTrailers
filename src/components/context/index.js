import { createContext, useState } from "react";

export const RustedRageContext = createContext();

const RustedRageProvider = ({ children }) => {
	const [showForm, setShowFormForm] = useState(false);

	const show = () => setShowFormForm(true);
	const hide = () => setShowFormForm(false);

	return (
		<RustedRageContext.Provider value={{ showForm, show, hide }}>
			{children}
		</RustedRageContext.Provider>
	);
};

export default RustedRageProvider;
