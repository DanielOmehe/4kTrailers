import "./index.scss";
import { Link, useRouteError } from "react-router-dom";

const PageNotFound = () => {
	const error = useRouteError();
	console.error(error);

	return (
		<section className="page-not-found">
			<h1>404</h1>
			<p>Oops! Sorry, an unexpected error has occurred.</p>
			<p>
            
					{error.statusText}
					{error.message}
			</p>
			<button>
				<Link to="/">Back to Home</Link>
			</button>
		</section>
	);
};

export default PageNotFound;
