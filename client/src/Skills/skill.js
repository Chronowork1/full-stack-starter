import { Route, Switch, useRouteMatch } from "react-router-dom";

import SkillList from "./SkillList";
import SkillForm from './SkillForm';

const Skill = () => {
    const {path} = useRouteMatch();

    return (
        <Switch>
            {/*
                Main URL Path to SkillList file
            */}
            <Route exact path={path}>
                <SkillList />
            </Route>
            {/*
                Main URL Path to new SkillList file
            */}
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

