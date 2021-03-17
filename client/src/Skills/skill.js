import { Route, Switch, useRouteMatch } from "react-router-dom";
import SkillList from "./SkillList";
import SkillForm from './SkillForm';

const Skill = () => {
    const {path} = useRouteMatch();

    return (
        <Switch>
            <Route exact path={path}>
                <SkillList />
            </Route>
            <Route path={`${path}/new`}>
                <SkillForm />
            </Route>
            <Route path={`${path}/:id/edit`}>
                <SkillForm />
            </Route>
        </Switch>
    )
}

export default Skill;