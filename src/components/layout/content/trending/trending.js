import { Children } from "react"
import { useRustedRageContext } from "../../../context"

const TrendingTabWrapper =({ children })=>{

    const { currentTabIndx } = useRustedRageContext();
    return(
        <section>{Children.map(children, (child, indx) => indx === currentTabIndx ? child : null)}</section>
    )
}

export default TrendingTabWrapper