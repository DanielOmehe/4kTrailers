import { createContext, useState } from "react";

export const MovieFlixContext = createContext();

const MovieFlixProvider = ({ children }) => {
	const [showForm, setShowFormForm] = useState(false);

	const show = () => setShowFormForm(true);
	const hide = () => setShowFormForm(false);

	return (
		<MovieFlixContext.Provider value={{ showForm, show, hide }}>
			{children}
		</MovieFlixContext.Provider>
	);
};

export default MovieFlixProvider;
