import React from 'react';
import { withRouter, Switch } from 'react-router-dom';

import PublicRoute from '../../routes/PublicRoute';
import PrivateRoute from '../../routes/PrivateRoute';
import MainLayout from '../../components/Layout/Layout';
import StaticLayout from '../../components/Layout/Layout/Static';

import {
    AsyncHome,
    AsyncLoginForm,
    AsyncDashboard,
    AsyncRegisterPage
} from "./AsyncComponent";

const App = () =>(
    <React.Fragment>
        <Switch>
            <PublicRoute exact path='/' layout={StaticLayout} component={AsyncHome}/>
            <PublicRoute exact path='/login' layout={StaticLayout} component={AsyncLoginForm}/>
            <PublicRoute exact path='/signup' layout={StaticLayout} component={AsyncRegisterPage}/>
            <PrivateRoute exact path='/dashboard' layout={MainLayout} component={AsyncDashboard}/>
        </Switch>
    </React.Fragment>
);

export default withRouter(App);

