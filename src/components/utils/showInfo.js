import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom';
import RustedRageNavBar from "./navbar";
import { useRustedRageContext } from "../context";

const MoviesInfoPage = () => {
	const { movieName } = useParams();
    const navigate = useNavigate();
    const { movies } = useRustedRageContext();
    const movie = movies.filter(movie => movie.title === movieName ? movie : null);
    console.log(movie);
	return (
		<main className="">
			<RustedRageNavBar />
            <button className='back-to-home' onClick={()=> navigate(-1)}>Back to Home</button>
            <section className="movie-info-container">
                <div className="movie-info-text">
                    <img />
                </div>
                <div className="movie-video"></div>
            </section>
		</main>
	);
};

export default MoviesInfoPage;
