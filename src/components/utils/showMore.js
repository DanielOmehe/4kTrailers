import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa6";
import './showMore.scss'

const ShowMore = ({ route }) =>{
    return(
        <button className='show-more'>
        <Link to={`./${route}`}>Show more</Link>
        <FaAngleDown fill='#000' size={20} />
    </button>
    )
}

export default ShowMore