import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import Dashboard from '../pages/Dashboard.js';
import Modules from '../pages/Modules.js';

function Container({ location }) {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/modules" component={Modules} />
        </Switch>
    );
}

export default withRouter(Container);
