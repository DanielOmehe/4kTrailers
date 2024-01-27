import { useRustedRageContext } from '../../../context';
import MoviesCard from '../../../utils/cards/movieCard'
import './latest.scss'
import ShowMore from '../../../utils/showMore';

const LatestMovies =()=>{
    const { latestMovies } = useRustedRageContext()
    return(
        <section className="latest-movies">
            <h1>Latest movies</h1>
            <div className="latest-movies-container">
                {
                    latestMovies.map((movie) => <MoviesCard movie={movie} />)
                }
            </div>
            <ShowMore route={'movies'} />
        </section>
    )
}

export default LatestMovies