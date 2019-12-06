import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import Home from '../pages/Home.js';
import Dashboard from '../pages/Dashboard.js';
import Modules from '../pages/Modules.js';

function Container({ location }) {
    return (
        <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/modules" component={Modules} />
            <Route component={Home} />
        </Switch>
    );
}

export default withRouter(Container);
