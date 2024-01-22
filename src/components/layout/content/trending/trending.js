import { Children } from "react"
import { useRustedRageContext } from "../../../context"

const TrendingTabWrapper =({ children })=>{

    const { currentTabName } = useRustedRageContext();
    return(
        <section>{Children.count(children)}</section>
    )
}

export default TrendingTabWrapper