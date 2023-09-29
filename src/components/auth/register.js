import { Children } from 'react';
import './index.scss';

const RustedRageAuthTabs =({children, currentTab})=>{
    return (
        <div className='rusted-rage-auth-body'>
            {
                Children.map(children, (child) => (
                    <>{child.props.tabkey === currentTab ? child : null}</>
                )) 
            }
        </div>
    )
}

export default RustedRageAuthTabs