import {Route, Switch, useRouteMatch} from 'react-router-dom'
import SectionsList from './SectionsList.js'

function Sections(){
    const {path} = useRouteMatch();

    return(
        <div>
            <h1>Sections</h1>
            <Switch>
                <Route exact path={path}>
                    <SectionsList />
                </Route>
                <Route path={`${path}/new`}>

                </Route>
            </Switch>
        </div>
    )
}


export default Sections