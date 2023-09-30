import { useEffect, useState } from 'react';
import axios from 'axios';
import RustedRageLoader from '../../utils/loader';
import RustedRageMovieCard from './movieCard';
import "./index.scss";

const RustedRageTopMovies =()=>{
    const [moviesList, setMoviesList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const api_key = "b62dddbb37d8ec434e52a02797220057";

    const getTopMovies = async()=>{
        try{
            setIsLoading(true)
            const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${api_key}`);
            const data = await response.data.results;

            if(data){
                setMoviesList(data);
                setIsLoading(false);
            }
        }catch(error){
            console.error(error);
        }
    }

    useEffect(()=>{
        getTopMovies();
    }, [])
    return(
        <div className="rusted-rage-top-movies-slider">
            {
                isLoading ? <RustedRageLoader /> : (
                    <>{
                        moviesList.map((movie, indx)=> <RustedRageMovieCard key={movie.id} index={indx} movie={movie} />)
                    }</>
                )
            }
        </div>
    )
}

export default RustedRageTopMovies