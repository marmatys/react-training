import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Todos from './todo/todos';
import {Redirect, Route, Switch} from 'react-router';

const Routes = (props) => (
    <BrowserRouter>
        <Switch>
            <Redirect exact from='/' to='/home'/>
            <Route exact path='/home' component={Todos}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
