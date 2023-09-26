import { Children } from 'react';
import './index.scss';

const MovieFlixAuthTabs =({children, currentTab})=>{
    return (
        <div className='movie-flix-auth-body'>
            {
                Children.map(children, (child) => (
                    <>{child.props.tabkey === currentTab ? child : null}</>
                )) 
            }
        </div>
    )
}

export default MovieFlixAuthTabs